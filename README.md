# Jellyfin Overlay Card

A minimal Home Assistant Lovelace card that pops your Jellyfin web client out
full-screen over the dashboard. Tap the card, Jellyfin opens on top of
everything (header, sidebar, dialogs included); tap the close button and
you're back exactly where you were — no navigation, no history entry, and
playback actually stops because the `<iframe>` is destroyed, not just hidden.

No backend, no custom component, no proxying — it's a pure frontend plugin.
Built for a wall-mounted tablet dashboard, but works anywhere HA's frontend
runs.

## What it does

- Renders as a normal tile-style card: an icon and a name.
- On tap, creates a full-viewport overlay on `document.body`: an `<iframe>`
  pointed at your Jellyfin server, with a small translucent close button
  pinned over a corner (no top bar — it brightens on tap/hover and stays out
  of the way otherwise).
- Closing the overlay removes it (and the iframe) from the DOM entirely.
- Respects `env(safe-area-inset-*)` so it plays nicely with notches and
  on-screen Android/iOS navigation bars on a tablet.
- Works from inside a kiosk-mode/fullscreen dashboard, since the overlay is
  appended to `document.body` rather than routed through Lovelace.

## Install

### HACS (custom repository)

1. HACS → the `⋮` menu → **Custom repositories**.
2. Add this repo's URL, category **Plugin** (some HACS versions label it
   **Dashboard**/**Lovelace**).
3. Install **Jellyfin Overlay Card**, then add it as a Lovelace resource if
   HACS doesn't do so automatically (Settings → Dashboards → Resources →
   the file HACS installed, type **JavaScript Module**).
4. Hard-refresh the browser tab.

### Manual

1. Copy `dist/jellyfin-overlay-card.js` into `/config/www/` (e.g.
   `/config/www/jellyfin-overlay-card/jellyfin-overlay-card.js`).
2. Settings → Dashboards → the `⋮` menu → **Resources** → **Add resource**:
   - URL: `/local/jellyfin-overlay-card/jellyfin-overlay-card.js`
   - Type: **JavaScript Module**
3. Hard-refresh the browser tab.
4. When you update the file later, bump the resource URL's cache-busting
   query string (e.g. `...jellyfin-overlay-card.js?v=2`) or hard-refresh —
   browsers otherwise happily keep serving the old cached module.

## Configuration

| Name                   | Type   | Default        | Description                                                                                                |
| ---------------------- | ------ | -------------- | ----------------------------------------------------------------------------------------------------------- |
| `jellyfin_url`         | string | **required**   | Base URL of your Jellyfin web client, e.g. `http://192.168.1.50:8096/web/`                                   |
| `title`                | string | `Jellyfin`     | Label shown on the card                                                                                     |
| `icon`                 | string | `jellyfin`     | `jellyfin` renders the card's built-in Jellyfin logo (there's no official one in Material Design Icons, so this bundles the real mark directly); any other value is treated as an MDI icon name, e.g. `mdi:emby` or `mdi:plex` |
| `close_button_offset`  | number | `0`            | Shifts the floating close button left by this many pixels — useful if it overlaps Jellyfin's own on-screen controls (e.g. its Chromecast button) in that corner |

A GUI editor is included — add the card from the dashboard UI ("Add Card" →
search "Jellyfin") and fill in the fields, or use YAML directly:

```yaml
type: custom:jellyfin-overlay-card
jellyfin_url: http://192.168.1.50:8096/web/
title: Jellyfin
icon: jellyfin
```

## A note on mixed content (http vs. https)

Browsers block an `https://` page from embedding an `http://` iframe
("mixed content"), independent of any CORS settings. If your Home Assistant
dashboard is served over `https://` and Jellyfin is only on plain `http://`,
the iframe will silently fail to load — you'll typically see a blank white
box and a mixed-content warning in the browser's DevTools console, not an
error inside the card itself.

Workarounds, in order of preference:

- **Put Jellyfin behind HTTPS** (a reverse proxy with a real or self-signed
  certificate, or Jellyfin's own built-in HTTPS support). This is the fix
  that works regardless of how the tablet reaches your dashboard.
- **Access the dashboard itself over plain `http://`** on the tablet (e.g.
  hitting HA's LAN IP directly instead of a `https://` reverse-proxied
  hostname). Only reasonable for a trusted local network.
- If both HA and Jellyfin are already on the same scheme (both `http://` or
  both `https://` with a certificate the tablet's browser trusts), you're
  unaffected.

## License

MIT — see [LICENSE](LICENSE). The bundled Jellyfin logo mark (the default
`icon` value) is copied from the [simple-icons](https://simpleicons.org/)
project, CC0-licensed; "Jellyfin" and its logo are trademarks of the
Jellyfin project, used here only to identify the service this card connects
to.
