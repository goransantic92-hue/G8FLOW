# Typography substitute for Britti Sans

Flux Academy uses **Britti Sans** (commercial). Without a license we do **not** self-host it.

## Recommended replacement: Satoshi (Fontshare)

**Satoshi** is the closest free/commercial-friendly match: geometric neo-grotesque, clean marketing headings, similar weight range (Regular → Black).

- Source: https://www.fontshare.com/fonts/satoshi  
- Use: self-host WOFF2 or `@fontsource/satoshi`  
- Pairing: one family only (Flux also uses a single sans) — headings + body in Satoshi, weight for hierarchy

### Why not others

| Option | Note |
|--------|------|
| General Sans / Switzer | Also strong; Satoshi is slightly closer to Britti’s marketing feel |
| Plus Jakarta Sans | Easiest via `next/font/google` — good backup if Fontshare setup is slow |
| Inter / Roboto | Avoid — generic AI-default look |

## CSS tokens (build)

```css
--font-sans: "Satoshi", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

Keep Flux-like scale from brand rules (H1 ~4.5rem desktop, body 1rem / 1.5 lh).

If you later buy Britti Sans, swap the family name only — sizes stay.
