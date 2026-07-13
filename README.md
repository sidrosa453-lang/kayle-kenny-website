# EURL Kayle Kenny — Parts Website

Live at **https://www.kaylekenny.com** (GitHub Pages, repo sidrosa453-lang/kayle-kenny-website).

Search-only parts website: customers search a part reference (or name in EN/FR/AR)
and get a product page with availability, interchangeable references, and WhatsApp
contact. There is deliberately **no catalog page, no quantities, and no prices** —
visitors check the reference they need and ask the price on WhatsApp. All contact
paths open WhatsApp; there are no phone-call (tel:) links anywhere. French is the
default language (primary search language in Algeria).

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

## Prices

Prices are **not published anywhere** (owner's decision, 2026-07). The Excel
price column is ignored by the converter; the site shows "price on request —
WhatsApp". If you ever want prices back, the old DZD formula
(invoice USD × 1.5 taxes × 250 DZD/USD × 30–50% sliding margin) is in git
history — ask Claude to restore it.

## SEO

- French-first static content, SEO title/description/keywords, canonical,
  Open Graph + Twitter cards (`images/og.png` is the WhatsApp/Facebook share image),
  JSON-LD structured data (AutoPartsStore + WebSite search action),
  `robots.txt` + `sitemap.xml`, crawlable category-chips section.
- `?q=REFERENCE` in the URL deep-links straight into a search.
- Off-site (owner actions): Google Business Profile + Search Console — see the
  deployment conversation notes.

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

Note: `data.js` ships the full parts list (references only — no quantities, no
prices) to the browser; a technically skilled visitor could read it in the page
source. If you ever need the list fully hidden, that requires a small
server-side search API instead of a static site — ask for it when needed.
