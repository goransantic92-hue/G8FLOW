# Pricing — live plans + calculator

Currency: **EUR**. Exact quote after a 30‑minute call. Calculator is an **estimate only**.

## Plans (page cards)

| Plan | Role | Framing |
|------|------|---------|
| **Launch** | Entry | One clear offer + one path to buy/book |
| **Growth** | **Recommended** | Shop, booking, or longer site |
| **Custom** | Call-scoped | Apps / nonstandard — book a call |

Displayed ranges on cases (not fake ROI): Launch ≈ €440–2.2k, Growth ≈ €2.2–3.5k (as shown on work stats).

## Calculator (source of truth in `lumora/index.html`)

Flat add — never multiply, never lower the number:

```
SITE_PAGES = { '1': 440, '3-6': 1520, '7-12': 2240, '13+': 3050 }
SITE_CMS   = { none: 0, cms: 350, shop: 800 }
SITE_EXTRA = { book: 160, member: 350, ecom: 350 }
SITE_CAP   = 3500
```

### Rules

- **1 page:** booking included in €440 (UI: checked + disabled). No shop CMS, no ecom extras, no membership.
- **3+ pages:** booking optional +€160.
- Ecom extras only if CMS = shop.
- Membership only if CMS or shop.
- Apps: need platform(s) + screen count before a price.
- Cap €3500; over → “book a call / out of calculator”.

### Care (monthly)

Calculator shows a care line next to build; optional hosting/updates framing in FAQ copy (`i18n.js`).

## Draft EN/SR marketing blurb

Keep Hormozi outcome voice on cards; live SR strings are in `lumora/i18n.js` (`price.*` keys), not the old 1.9k / 4.2k / 8.5k placeholders below historical drafts.

---

### Historical draft (superseded by calculator)

Earlier docs listed Launch €1,900 / Growth €4,200 / Scale €8,500 as placeholders. **Do not reinstate those as live prices** without an explicit user decision. Use the calculator + call for money.
