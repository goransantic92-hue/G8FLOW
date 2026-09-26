# Typography — live site

## Body & UI: Onest

Production uses **Onest** for all marketing and legal text (EN and SR).

Self-hosted under `lumora/assets/fonts/onest/`:

| File | Subset |
|------|--------|
| `onest-latin.woff2` | Basic Latin |
| `onest-latin-ext.woff2` | Latin Extended (š, č, ć, ž, đ, …) |
| `onest-cyrillic.woff2` | Cyrillic |
| `onest-cyrillic-ext.woff2` | Cyrillic Extended |

Declared in `lumora/index.html` and `lumora/legal.css` with matching `unicode-range`. Preload latin + latin-ext.

**EN and SR must use the same body font.** Do not invent a Serbian-only face.

## Brand / display: Gebuk

**Gebuk** only for:

- Header / footer **G8 Flow** wordmark
- Hero watermark
- Footer / CTA watermark

File: `lumora/assets/fonts/gebuk/Gebuk-Regular.ttf` (+ EULA).

## Historical note

Docs once proposed **Satoshi** as a Britti Sans substitute for a Next.js build. That never became the live font. Brand `.mdc` rules may still mention Satoshi — for **lumora**, follow this file.

If Britti Sans is licensed later, swap carefully; keep Gebuk for the logo unless redesigned.
