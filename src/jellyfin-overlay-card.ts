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
}

const DEFAULT_TITLE = "Jellyfin";
const DEFAULT_ICON = "mdi:jellyfin";

// ---------------------------------------------------------------------------
// The overlay: mounted directly on document.body (not inside any dashboard
// view), so it layers on top of the whole Home Assistant UI — including
// app-layout, the header, the sidebar, and any open dialogs — without
// navigating away. Removing the element (see close()) tears down the iframe
// along with it, which actually stops Jellyfin playback rather than just
// hiding it, and leaves the dashboard underneath exactly as it was: no URL
// change, no history entry.
// ---------------------------------------------------------------------------
class JellyfinOverlay extends LitElement {
  @property({ attribute: false }) jellyfinUrl = "";
  @property({ attribute: false }) label = DEFAULT_TITLE;

  static styles = css`
    :host {
      position: fixed;
      inset: 0;
      /* Comfortably above HA's own app-layout/header/sidebar/dialogs, all of
         which sit well under six figures. */
      z-index: 2147483000;
      display: flex;
      flex-direction: column;
      background: var(--primary-background-color, #111);
    }
    .bar {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      /* env(safe-area-inset-*) accounts for notches and the top status bar
         on a wall-mounted tablet; the max() keeps a sane minimum padding on
         devices that don't report a safe-area inset at all. */
      padding: max(env(safe-area-inset-top, 0px), 8px) max(env(safe-area-inset-right, 0px), 8px) 8px
        max(env(safe-area-inset-left, 0px), 16px);
      background: var(--app-header-background-color, var(--primary-background-color, #111));
      color: var(--app-header-text-color, var(--primary-text-color, #fff));
      border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .close {
      flex-shrink: 0;
      border: none;
      background: transparent;
      color: inherit;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .close:active {
      background: var(--divider-color, rgba(255, 255, 255, 0.12));
    }
    .frame-wrap {
      flex: 1;
      min-height: 0;
      box-sizing: border-box;
      background: var(--primary-background-color, #111);
      /* Left/right insets handle a landscape tablet's notch/rounded-corner
         cutouts; the bottom inset leaves clearance above an on-screen
         Android/iOS gesture nav bar instead of letting Jellyfin's own UI
         render underneath it. */
      padding: 0 env(safe-area-inset-right, 0px) env(safe-area-inset-bottom, 0px) env(safe-area-inset-left, 0px);
    }
    iframe {
      display: block;
      width: 100%;
      height: 100%;
      border: 0;
      background: #000;
    }
  `;

  private close() {
    // Removing the element from the DOM discards the iframe with it —
    // that's what actually stops playback, rather than just visually
    // hiding an iframe that keeps running in the background.
    this.remove();
  }

  render() {
    return html`
      <div class="bar">
        <span class="title">${this.label}</span>
        <button class="close" aria-label="Close" @click=${() => this.close()}>
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </div>
      <div class="frame-wrap">
        <iframe
          src=${this.jellyfinUrl}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
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
      label: string;
    };
    overlay.jellyfinUrl = this.config.jellyfin_url;
    overlay.label = this.config.title ?? DEFAULT_TITLE;
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
        <span class="hint">Any Material Design Icon name, e.g. mdi:jellyfin or mdi:play-box-multiple.</span>
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
