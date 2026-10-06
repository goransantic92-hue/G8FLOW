# Ariyana Studio — Typography Style Guide

> Izvor: [ariyana-studio.webflow.io](https://ariyana-studio.webflow.io/)  
> Ekstraktovano iz live CSS-a (`ariyana-studio.webflow.shared.min.css`) — mart 2026.

---

## 1. Fontovi (Font Families)

| Uloga | Font | Fallback | Format | Težina |
|-------|------|----------|--------|--------|
| **Heading** | **Bebas Neue** (`Bebasneue`) | Arial, sans-serif | TTF, static | 400 |
| **Body / UI** | **DM Sans** | Arial, sans-serif | TTF, variable (`opsz`, `wght`) | 100–1000 |

### @font-face (CDN)

```
Bebas Neue Regular
→ cdn.prod.website-files.com/.../BebasNeue-Regular.ttf

DM Sans Variable
→ cdn.prod.website-files.com/.../DMSans-VariableFont_opsz,wght.ttf
```

### Pravilo korišćenja

- **Bebas Neue** → svi naslovi (`h1`–`h5`), logo, dugmad, CTA ticker, stat brojevi, step/process naslovi.
- **DM Sans** → body tekst, navigacija, paragrafi, testimoniali, footer linkovi, forme, labele.

---

## 2. Globalni stil (Body)

| Svojstvo | Vrednost |
|----------|----------|
| Font family | `"DM Sans", Arial, sans-serif` |
| Font size | `16px` (desktop token: `text-lg`) |
| Font weight | `400` |
| Line height | `1.5` |
| Text transform | **`uppercase`** (globalno na `body`) |
| Font style | `normal` |

> Napomena: većina body/UI elemenata nasleđuje `uppercase`. Paragrafi sa sadržajem (testimonial, footer, caption) eksplicitno koriste `text-transform: none`.

---

## 3. Skala veličina — Headings

Svi headingi koriste **Bebas Neue**, `font-weight: 400`, `line-height: 1`, **`text-transform: uppercase`**.

| Token | CSS varijabla | Desktop (~1440px+) | Tablet | Mobile |
|-------|---------------|-------------------|--------|--------|
| **H1** | `--font-sizes--heading--h1` | `19vw` (~423px @ 2228px) | `19vw` | `19vw` |
| **H2** | `--font-sizes--heading--h2` | `clamp(3.75rem → 20rem)` = **60px → 320px** | fluid | fluid |
| **H3** | `--font-sizes--heading--h3` | `clamp(2.75rem → 8rem)` = **44px → 128px** | fluid | fluid |
| **H4** | `--font-sizes--heading--h4` | `clamp(2rem → 5.25rem)` = **32px → 84px** | fluid | fluid |
| **H5** | `--font-sizes--heading--h5` | `clamp(1.75rem → 2.625rem)` = **28px → 42px** | fluid | fluid |

### Specijalni heading tokeni

| Token | CSS varijabla | Vrednost |
|-------|---------------|----------|
| Hero subtitle | `.hero_sub_title` | `6vw` (desktop override: `96px` / `8vw`) |
| About year | `--font-sizes--heading--about-year-text` | `clamp(5rem → 20rem)` = **80px → 320px** |
| CTA ticker | `--font-sizes--heading--200px` | `clamp(3rem → 12.5rem)` = **48px → 200px** |
| Footer logo | `--font-sizes--heading--footer-logo-text` | `24vw` (tablet: `28vw`) |
| Nav logo | `--font-sizes--heading--nav-logo-text` | `40px` |
| CTA button | `.cta_button_text` | `60px` (fixed) |

### Letter-spacing po heading nivou

| Nivo | Letter spacing |
|------|----------------|
| H1 | `normal` |
| H2 | `-0.03em` |
| H3, H4, H5 | `-0.01em` |

---

## 4. Skala veličina — Body / UI

Svi body tokeni koriste **DM Sans**.

| Token | Klasa | Desktop size | Line height | Weight | Transform |
|-------|-------|-------------|-------------|--------|-----------|
| **text-xxs** | `.text-xxs` | `12px` | inherit | 400 | uppercase* |
| **text-xs** | `.text-xs` | `14px` | inherit | 400 | uppercase* |
| **text-sm** | `.text-sm` | `16px` | inherit | 400 | uppercase* |
| **text-md** | `.text-md` | `16px` (desktop) / `18px` (wide) | inherit | 400 | uppercase* |
| **text-lg** | `.text-lg` | `16px` (base body) / `20px` (wide) | `1.5` | 400 | uppercase* |
| **text-xl** | `.text-xl` | `16px` (mobile) / `20px` / `24px` (wide) | `1.4` | 400 | varies |
| **text-2xl** | `.text-2xl` | `20px` (mobile) / `24px` / `30px` (wide) | `1` | 400–600 | varies |
| **text-3xl** | `.text-3xl`, `.text-xxl` | `clamp(1.5rem → 2.5rem)` = **24px → 40px** | `1.3` | 400 | `-0.01em` |

\* Nasleđuje globalni `uppercase` osim gde je eksplicitno `text-transform: none`.

---

## 5. Font Weights

| Token | Vrednost | Tipična upotreba |
|-------|----------|------------------|
| `--font-weight--400` | 400 | Body, headings (Bebas), default |
| `--font-weight--500` | 500 | Hero info, nav accents, tag text |
| `--font-weight--600` | 600 | Section captions |
| `--font-weight--700` | 700 | Footer column headings, service subtitles |
| `--font-weight--800` | 800 | Why-choose sub labels |
| `--font-weight--900` | 900 | Akcenti (retko) |

Utility klasa: `.text-weight-medium` → `font-weight: 500`

---

## 6. Line Heights

| Token | Vrednost | Upotreba |
|-------|----------|----------|
| `--line-height--0-8` | `0.8` | Footer logo, floating text |
| `--line-height--1` | `1` | Svi headings, buttons, captions |
| `--line-height--1-1` | `1.1` | — |
| `--line-height--1-2` | `1.2` | — |
| `--line-height--1-3` | `1.3` | Testimonial quotes, brand testimony |
| `--line-height--1-4` | `1.4` | Hero info, testimonial body |
| `--line-height--1-5` | `1.5` | Global body default |

---

## 7. Letter Spacing

| Token | Vrednost |
|-------|----------|
| `--letter-spacing--0-01` | `-0.01em` |
| `--letter-spacing--0-02` | `-0.02em` |
| `--letter-spacing--0-03` | `-0.03em` |

---

## 8. Text Transform & Style

| Pravilo | Vrednost | Gde |
|---------|----------|-----|
| Global default | `uppercase` | `body`, nav, hero info, stats, step labels |
| Sentence case | `none` | Testimoniali, footer linkovi, section captions, rich text |
| Italic | `font-style: italic` | `.text-italic` utility klasa |

---

## 9. Komponente — tipografija po ulozi

| Komponenta | Font | Size (desktop) | Weight | LH | LS | Transform |
|------------|------|----------------|--------|----|----|-----------|
| Logo (`// ARIYANA`) | Bebas Neue | 42px (H5) | 400 | 1 | normal | uppercase |
| Nav link | DM Sans | 16px | 400 | 1.5 | normal | uppercase |
| Hero H1 | Bebas Neue | 19vw | 400 | 1 | normal | uppercase |
| Hero subtitle | Bebas Neue | 96px / 6vw | 400 | 1 | -0.03em | uppercase |
| Hero description | DM Sans | 20px | 500 | 1.4 | normal | uppercase |
| Section H2 | Bebas Neue | ~96–320px (clamp) | 400 | 1 | -0.03em | uppercase |
| Section H4 | Bebas Neue | ~84px (clamp max) | 400 | 1 | -0.01em | uppercase |
| Card H3 | Bebas Neue | ~42px (clamp min) | 400 | 1 | -0.01em | uppercase |
| Section caption | DM Sans | 30px | 600 | 1 | normal | none |
| Button text | Bebas Neue | 24px | 400 | 1 | normal | none |
| Button text v2 | DM Sans | 16px | 400 | 1 | normal | inherit |
| Testimonial quote | DM Sans | 28px (text-3xl clamp) | 400 | 1.4 | normal | none |
| Service tag | DM Sans | 16px | 500 | inherit | normal | uppercase |
| Footer link | DM Sans | 18px | 400 | 1.5 | normal | none |
| CTA ticker | Bebas Neue | 200px (clamp max) | 400 | 1 | -0.03em | uppercase |
| CTA button | Bebas Neue | 60px | 400 | 1 | normal | none |

---

## 10. CSS varijable — copy-paste

```css
:root {
  /* Font families */
  --font-heading: Bebasneue, Arial, sans-serif;
  --font-body: "DM Sans", Arial, sans-serif;

  /* Heading sizes */
  --text-h1: 19vw;
  --text-h2: clamp(3.75rem, -0.1942rem + 16.8285vw, 20rem);
  --text-h3: clamp(2.75rem, 1.4757rem + 5.4369vw, 8rem);
  --text-h4: clamp(2rem, 1.2112rem + 3.3657vw, 5.25rem);
  --text-h5: clamp(1.75rem, 1.5376rem + 0.9061vw, 2.625rem);

  /* Body sizes */
  --text-xxs: 12px;
  --text-xs: 14px;
  --text-sm: 16px;
  --text-md: 16px;   /* 18px on wide screens */
  --text-lg: 16px;   /* 20px on wide screens */
  --text-xl: 16px;   /* 20–24px on wide screens */
  --text-2xl: 20px;  /* 24–30px on wide screens */
  --text-3xl: clamp(1.5rem, 1.2573rem + 1.0356vw, 2.5rem);

  /* Special */
  --text-hero-sub: 6vw;
  --text-year: clamp(5rem, 1.3592rem + 15.534vw, 20rem);
  --text-cta-ticker: clamp(3rem, 0.6942rem + 9.8382vw, 12.5rem);
  --text-footer-logo: 24vw;

  /* Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;
  --weight-bold: 700;
  --weight-extrabold: 800;
  --weight-black: 900;

  /* Line heights */
  --lh-tight: 0.8;
  --lh-heading: 1;
  --lh-snug: 1.3;
  --lh-normal: 1.4;
  --lh-body: 1.5;

  /* Letter spacing */
  --ls-tight: -0.01em;
  --ls-tighter: -0.02em;
  --ls-tightest: -0.03em;
}
```

---

## 11. Utility klase (Webflow)

| Klasa | Efekat |
|-------|--------|
| `.heading-style-h3` | H3 heading stil (Bebas, H3 size, uppercase) |
| `.heading-style-h4` | H4 heading stil |
| `.heading-style-h5` | H5 heading stil |
| `.heading_style_h4` | Alternativni H4 (tamna varijanta) |
| `.text-sm` / `.text-md` / `.text-lg` / `.text-xl` / `.text-2xl` / `.text-3xl` | Body size utilities |
| `.text-xxl` | = text-3xl + letter-spacing |
| `.text-xs` / `.text-xxs` | Manji body tekst |
| `.text-italic` | Italic |
| `.text-weight-medium` | font-weight: 500 |

---

## 12. Brzi pregled — desktop (~1440px)

```
H1 (hero)     Bebas Neue  ~423px   400   lh 1.0   UPPERCASE
H2            Bebas Neue   96px    400   lh 1.0   UPPERCASE   ls -0.03em
H3            Bebas Neue   42px    400   lh 1.0   UPPERCASE   ls -0.01em
H4            Bebas Neue   84px    400   lh 1.0   UPPERCASE   ls -0.01em
H5 / Logo     Bebas Neue   42px    400   lh 1.0   UPPERCASE
Body          DM Sans      16–20px 400   lh 1.5   UPPERCASE
Nav           DM Sans      16px    400   lh 1.5   UPPERCASE
Caption       DM Sans      30px    600   lh 1.0   normal case
Testimonial   DM Sans      28px    400   lh 1.4   normal case
Button        Bebas Neue   24px    400   lh 1.0   normal case
CTA ticker    Bebas Neue  200px    400   lh 1.0   UPPERCASE   ls -0.03em
```

---

*Generisano automatski iz live sajta. Za boje, spacing i komponente pogledaj pun Webflow style guide (stranica trenutno nije objavljena na demo domenu).*
