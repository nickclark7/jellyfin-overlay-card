import { LitElement, html, css, nothing } from "lit";
import { property, state } from "lit/decorators.js";

// Minimal shape — this card never actually reads hass state, it only needs
// to accept the property Lovelace assigns to every card.
interface HomeAssistant {
  [key: string]: unknown;
}

interface JellyfinOverlayCardConfig {
  type: string;
  jellyfin_url: string;
  title?: string;
  icon?: string;
  // Pixels to shift the floating close button left from its default
  // top-right corner position — Jellyfin's own on-screen controls (e.g. its
  // Chromecast button) can sit in that same corner.
  close_button_offset?: number;
}

const DEFAULT_TITLE = "Jellyfin";
// There's no dedicated Jellyfin icon in Material Design Icons, so this is a
// generic media one rather than a borrowed competitor logo (mdi:emby /
// mdi:plex both exist, if that's preferred instead).
const DEFAULT_ICON = "mdi:play-box-multiple";

// ---------------------------------------------------------------------------
// The overlay: mounted directly on document.body (not inside any dashboard
// view), so it layers on top of the whole Home Assistant UI — including
// app-layout, the header, the sidebar, and any open dialogs — without
// navigating away. Removing the element (see close()) tears down the iframe
// along with it, which actually stops Jellyfin playback rather than just
// hiding it, and leaves the dashboard underneath exactly as it was: no URL
// change, no history entry.
//
// No top bar: Jellyfin runs on a different origin than the dashboard, so a
// cross-origin iframe's content is opaque to us for input events — we can
// never detect a tap landing on the video itself, only on our own chrome.
// That rules out anything like "reveal controls on tap" for the whole
// screen, so instead the close affordance is a small translucent button
// pinned over a corner of the video at all times.
// ---------------------------------------------------------------------------
class JellyfinOverlay extends LitElement {
  @property({ attribute: false }) jellyfinUrl = "";
  @property({ attribute: false, type: Number }) closeButtonOffset = 0;

  static styles = css`
    :host {
      position: fixed;
      inset: 0;
      /* Comfortably above HA's own app-layout/header/sidebar/dialogs, all of
         which sit well under six figures. */
      z-index: 2147483000;
      background: #111;
    }
    .frame-wrap {
      position: absolute;
      inset: 0;
      box-sizing: border-box;
      background: #111;
      /* With no top bar to absorb it, the top inset needs handling here too
         now — all four sides account for a tablet's notch/rounded-corner
         cutouts and on-screen Android/iOS gesture nav bars. */
      padding: env(safe-area-inset-top, 0px) env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px)
        env(safe-area-inset-left, 0px);
    }
    iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      background: #000;
    }
    .close {
      position: absolute;
      top: max(env(safe-area-inset-top, 0px), 8px);
      right: max(env(safe-area-inset-right, 0px), 8px);
      border: none;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.45);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
      color: #fff;
      cursor: pointer;
      opacity: 0.35;
      transition: opacity 0.15s ease;
    }
    .close:hover,
    .close:focus-visible,
    .close:active {
      opacity: 1;
    }
  `;

  private close() {
    // Removing the element from the DOM discards the iframe with it —
    // that's what actually stops playback, rather than just visually
    // hiding an iframe that keeps running in the background.
    this.remove();
  }

  render() {
    // Inline style (rather than baking the offset into the static CSS)
    // since it varies per card config; an inline "right" wins over the
    // class rule's "right" for this element without disturbing anything
    // else .close sets.
    const closeStyle = this.closeButtonOffset
      ? `right: calc(max(env(safe-area-inset-right, 0px), 8px) + ${this.closeButtonOffset}px)`
      : nothing;
    return html`
      <div class="frame-wrap">
        <iframe
          src=${this.jellyfinUrl}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <button class="close" style=${closeStyle} aria-label="Close" @click=${() => this.close()}>
        <ha-icon icon="mdi:close"></ha-icon>
      </button>
    `;
  }
}

if (!customElements.get("jellyfin-overlay")) {
  customElements.define("jellyfin-overlay", JellyfinOverlay);
}

// ---------------------------------------------------------------------------
// The card itself: a normal tile-style button. Tapping it never navigates —
// it just creates a <jellyfin-overlay> and appends it to document.body.
// ---------------------------------------------------------------------------
class JellyfinOverlayCard extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private config?: JellyfinOverlayCardConfig;

  setConfig(config: JellyfinOverlayCardConfig) {
    if (!config?.jellyfin_url) {
      throw new Error("jellyfin_url is required");
    }
    this.config = { title: DEFAULT_TITLE, icon: DEFAULT_ICON, ...config };
  }

  static getStubConfig() {
    return {
      jellyfin_url: "http://192.168.1.100:8096/web/",
      title: DEFAULT_TITLE,
      icon: DEFAULT_ICON,
    };
  }

  static getConfigElement() {
    return document.createElement("jellyfin-overlay-card-editor");
  }

  getCardSize() {
    return 2;
  }

  static styles = css`
    ha-card {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
      min-height: 48px;
    }
    ha-card:active {
      opacity: 0.8;
    }
    ha-icon {
      --mdc-icon-size: 32px;
      color: var(--paper-item-icon-color, var(--state-icon-color, #44739e));
    }
    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
  `;

  private open() {
    if (!this.config) return;
    const overlay = document.createElement("jellyfin-overlay") as HTMLElement & {
      jellyfinUrl: string;
      closeButtonOffset: number;
    };
    overlay.jellyfinUrl = this.config.jellyfin_url;
    overlay.closeButtonOffset = this.config.close_button_offset ?? 0;
    document.body.appendChild(overlay);
  }

  render() {
    if (!this.config) return nothing;
    return html`
      <ha-card @click=${() => this.open()}>
        <ha-icon icon=${this.config.icon || DEFAULT_ICON}></ha-icon>
        <span class="title">${this.config.title}</span>
      </ha-card>
    `;
  }
}

if (!customElements.get("jellyfin-overlay-card")) {
  customElements.define("jellyfin-overlay-card", JellyfinOverlayCard);
}

// ---------------------------------------------------------------------------
// GUI editor: Home Assistant's standard contract — setConfig()/hass in, a
// bubbling "config-changed" CustomEvent carrying the full updated config out.
// Lovelace's "Edit Card" dialog instantiates this via
// JellyfinOverlayCard.getConfigElement() and re-renders the card preview on
// every event.
// ---------------------------------------------------------------------------
class JellyfinOverlayCardEditor extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @state() private _config?: JellyfinOverlayCardConfig;

  setConfig(config: JellyfinOverlayCardConfig) {
    this._config = config;
  }

  static styles = css`
    .row {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 16px;
    }
    label {
      font-size: 14px;
      font-weight: 600;
    }
    .hint {
      font-size: 12px;
      color: var(--secondary-text-color, #757575);
      margin-top: -2px;
    }
    input {
      min-height: 40px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      background: var(--card-background-color, #fff);
      color: inherit;
      font-size: 14px;
      padding: 0 10px;
      box-sizing: border-box;
      font-family: inherit;
    }
  `;

  private updateConfig(patch: Partial<JellyfinOverlayCardConfig>) {
    if (!this._config) return;
    this._config = { ...this._config, ...patch };
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true })
    );
  }

  render() {
    if (!this._config) return nothing;
    return html`
      <div class="row">
        <label>Jellyfin URL</label>
        <input
          type="text"
          placeholder="http://192.168.1.100:8096/web/"
          .value=${this._config.jellyfin_url ?? ""}
          @input=${(e: Event) => this.updateConfig({ jellyfin_url: (e.target as HTMLInputElement).value })}
        />
        <span class="hint"
          >Base URL of your Jellyfin web client, including the /web/ path. http and https both work.</span
        >
      </div>

      <div class="row">
        <label>Title</label>
        <input
          type="text"
          placeholder=${DEFAULT_TITLE}
          .value=${this._config.title ?? ""}
          @input=${(e: Event) => this.updateConfig({ title: (e.target as HTMLInputElement).value })}
        />
      </div>

      <div class="row">
        <label>Icon</label>
        <input
          type="text"
          placeholder=${DEFAULT_ICON}
          .value=${this._config.icon ?? ""}
          @input=${(e: Event) => this.updateConfig({ icon: (e.target as HTMLInputElement).value })}
        />
        <span class="hint"
          >Any Material Design Icon name. There's no official Jellyfin icon in MDI — mdi:play-box-multiple (the
          default), mdi:emby, and mdi:plex are reasonable options.</span
        >
      </div>

      <div class="row">
        <label>Close button offset (px)</label>
        <input
          type="number"
          inputmode="numeric"
          placeholder="0"
          .value=${this._config.close_button_offset ?? 0}
          @input=${(e: Event) =>
            this.updateConfig({ close_button_offset: Number((e.target as HTMLInputElement).value) || 0 })}
        />
        <span class="hint"
          >Shifts the floating close button further left, in pixels — useful if it overlaps Jellyfin's own
          on-screen controls (e.g. its Chromecast button) in that corner.</span
        >
      </div>
    `;
  }
}

if (!customElements.get("jellyfin-overlay-card-editor")) {
  customElements.define("jellyfin-overlay-card-editor", JellyfinOverlayCardEditor);
}

declare global {
  interface Window {
    customCards?: unknown[];
  }
}

window.customCards = window.customCards || [];
window.customCards.push({
  type: "jellyfin-overlay-card",
  name: "Jellyfin Overlay Card",
  description: "Pops out a Jellyfin web client full-screen over the dashboard from a tap.",
  preview: false,
});
