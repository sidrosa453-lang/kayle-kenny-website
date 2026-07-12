# EURL Kayle Kenny — Parts Website

Search-only parts website: customers search a part reference (or name in EN/FR/AR)
and get a product page with availability, interchangeable references, price, and
your contact details. There is deliberately **no catalog page and no quantities** —
visitors can only check the specific reference they need.

## Files

| File | Purpose |
|---|---|
| `index.html` | The page (home + product view) |
| `styles.css` | Cummins-inspired black/red styling |
| `app.js` | Search, compatibility, product pages, EN/FR/AR |
| `data.js` | **Generated** parts data — do not edit by hand |
| `drawings/*.svg` | Technical line drawing per part category |
| `images/` | Optional: your own part photos (see below) |
| `tools/update-data.js` | Regenerates `data.js` from an Excel file |
| `tools/serve.js` | Local preview server (localhost only) |

## Update the stock from Excel

Whenever stock changes, re-run the converter (sheet must keep the columns:
Part Name / Part No. / Unit / Qty / Unit price):

```
cd tools
npm install          # only the first time
node update-data.js "C:\Users\skyth\Desktop\KayleKenny\CI 2026-2-6 阿尔及利亚  .xlsx"
```

Quantities are read only to decide in stock / out of stock — they are **never**
published in `data.js` or shown on the site. A part with qty 0 shows "Out of stock".

## Add real photos of your parts

Put a JPG in the `images/` folder named after the part's first reference,
uppercase letters/digits only: `images/3917320.jpg`, `images/WP105801.jpg`.
The site automatically shows your photo instead of the line drawing.
(Don't republish photos from Cummins QuickServe or other sites — they are
copyrighted; photograph your own stock.)

## Preview locally

```
node tools/serve.js
```

Then open http://localhost:5533

## Prices / currency

The site shows **DZD selling prices**, computed by the converter — the USD
invoice cost prices are never published. Formula (see `tools/update-data.js`):

```
landed cost = invoice USD × 1.5 (taxes) × 250 (USD→DZD)
selling     = landed cost × margin, rounded to the nearest 100 DZD
margin      = ×1.5 on the cheapest items, sliding down to ×1.3 on the most expensive
```

To change the tax factor, exchange rate, or margins, edit `TAX_FACTOR`,
`USD_TO_DZD`, `MARGIN_CHEAP`, `MARGIN_EXPENSIVE` at the top of
`tools/update-data.js` and re-run it.

## To fill in

- **Opening hours** placeholder (Sat–Thu 8:00–17:00) — `contact.hoursValue` in `app.js` (3 languages).
- **Email** not shown (none found in the invoice) — add to the contact section if wanted.

## Legal note

The site includes "independent supplier / not affiliated with Cummins Inc."
disclaimers in the hero, product pages and footer. Keep them — the parts carry
Cummins references but the shop is not an authorized dealer.

## Hosting

Fully static — upload `index.html`, `styles.css`, `app.js`, `data.js`,
`drawings/`, `images/` to any host (Netlify, Vercel, GitHub Pages, shared host).

Note: `data.js` ships the full parts list (references + prices, no quantities) to
the browser; a technically skilled visitor could read it in the page source. If
you ever need the list fully hidden, that requires a small server-side search API
instead of a static site — ask for it when needed.
