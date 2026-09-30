# SARL ETAHG website

Corporate website of **SARL ETAHG** (Algeria): fine aggregate production, road
construction, heavy equipment rental and leasing, project mobilization, water well
drilling, and the group spare-parts company EURL KAYLE KENNY.

- Live domain: **https://www.etahg.com**
- Languages: English (default, `/`), French (`/fr/`), Arabic (`/ar/`, right-to-left),
  Simplified Chinese (`/zh/`)
- Static site, **zero dependencies**: a Node.js script generates plain HTML/CSS into `docs/`,
  which GitHub Pages serves. No cookies, no tracking, no backend.

> **Content rule:** `BRIEF.md` lists the only facts the site may state. Never add numbers,
> project names, clients, certifications or places that are not verified. Numbers and
> registry data belong in `site.config.json`, and appear on the site only once filled.

---

## Project layout

```
BRIEF.md                 facts the site may state + content rules (read first)
site.config.json         company data: contact, locations, registry, fleet counts, photos…
src/
  build.mjs              the generator:  node src/build.mjs [--out DIR]
  content/en.mjs         ALL English text (schema documented at the top of the file)
  content/fr.mjs …       translations (same keys; FR translates slugs)
  templates/
    structure.mjs        page tree, navigation, language metadata, photo slots
    layout.mjs           <head>, header, footer, breadcrumbs
    blocks.mjs           one renderer per content block type
    seo.mjs              meta tags + JSON-LD @graph
    map.mjs              schematic Algiers – Djelfa – Ghardaïa corridor map (SVG)
    text.mjs             Markdown rendering for llms-full.txt
    texture.mjs          generated topographic / strata textures
    icons.mjs, html.mjs  icons, escaping helpers
  assets/
    css/site.css         design system (minified at build)
    js/site.js           mobile nav, services dropdown, header state (< 5 KB)
    illustrations/*.svg  line illustrations (inlined, themed with currentColor/--accent)
    photos/              optional real photos (see "Real photos")
    generated/           OG images, PDF profiles, icons (made by tools/render-assets.mjs)
tools/
  serve.mjs              local preview server
  check.mjs              automated QA (links, SEO tags, hreflang, JSON-LD, sitemap…)
  screenshot.mjs         full-page screenshots (Playwright)
  render-assets.mjs      OG images, company-profile PDFs, logo/favicons (Playwright)
  browser.mjs            shared Playwright helper
docs/                    BUILD OUTPUT, committed, served by GitHub Pages
```

## Everyday commands

```bash
node src/build.mjs                        # build into docs/ (wipes it first)
node src/build.mjs --out .qa/preview      # build somewhere else
node tools/check.mjs --dir docs           # QA (exit code 1 on errors)
node tools/serve.mjs --dir docs           # preview at http://localhost:5544/
node tools/screenshot.mjs --dir docs --pages /,/contact/ --widths 390,1440 --out .qa/screens/test
node tools/render-assets.mjs              # regenerate OG images, PDFs and icons, then rebuild
```

`node src/build.mjs --content some/folder --out .qa/x` builds from another content folder (useful to test
draft translations). `BUILD_DATE=2026-10-01 node src/build.mjs` fixes the sitemap `lastmod` date (default: today).
Node 18+ is enough for the build. Only the two Playwright tools need Playwright + Chromium
(`NODE_PATH` pointing at a global install is supported; nothing is ever installed automatically).

**Typical update:** edit content or config → `node tools/render-assets.mjs` (only if the
company profile, OG texts or logo changed) → `node src/build.mjs` → `node tools/check.mjs` → commit `docs/`.

---

## Editing content

All visible text lives in `src/content/<lang>.mjs`. The schema is documented at the top
of `src/content/en.mjs`. In short:

- `ui` — interface strings (menu, footer, facts panel labels, location types, map labels…)
- `pages.<id>` — one object per page: `slug`, `nav`, `title` (≤ 60 chars, ends with
  `| SARL ETAHG`), `description` (110–155 chars), `summary`, optional `service`, and `blocks`.
- Blocks: `hero, pillars, prose, split, cards, features, steps, terrain, equipment, facts,
  locations, group, faq, records, table, links, contact, download, cta`.
- Inline markup inside any text: `**bold**`, `[label](page:about)`, `[label](page:home@zh)`,
  `[label](https://…)`, `[label](tel:)`, `[label](whatsapp:)`, `[label](pdf:)`.
- Tokens: `{{company}}`, `{{short}}`, `{{phone}}`, `{{group}}`, `{{year}}`.

The page tree (which pages exist, parents, menu order) is in `src/templates/structure.mjs`.
FAQ blocks automatically produce `FAQPage` structured data; service pages produce `Service`.

## Filling `site.config.json`

Everything below is optional; the site renders cleanly with it empty and never invents values.

| Field | Effect when filled |
|---|---|
| `contact.email` | mailto links, footer, contact page, JSON-LD, vCard |
| `contact.address.street` / `postalCode` | full registered-office address (footer, legal, JSON-LD, vCard) |
| `contact.mapsUrl`, `locations[].mapsUrl` | "Open in Google Maps" links on location cards, `hasMap` |
| `contact.hours` | opening hours on the contact page (string or `{ "en": …, "fr": … }`) |
| `registry.rc / nif / nis / ai` | facts panel, legal notice, JSON-LD `identifier` |
| `foundedYear` | facts panel, stats band, JSON-LD `foundingDate` |
| `fleet.*` (numbers) | unit counts on fleet/rental cards, facts panel, stats band |
| `crushingCapacityTonnesPerHour` | facts panel, stats band |
| `regions` | list of regions on the Experience page (strings or `{ "en": …, "fr": … }`) |
| `projects` | project table on the Experience page: `[{ "name", "region", "year", "scope" }]` (values may be per-language objects) |
| `certifications` | facts panel + JSON-LD (only real, current certificates) |
| `social.linkedin / facebook` | JSON-LD `sameAs` |
| `locations[].names` | location names per language (`fr`, `ar`, `zh`) |

## Real photos

Put photos in `src/assets/photos/` and map a **slot** to the file in `site.config.json`:

```json
"photos": {
  "hero": "fleet-on-site.jpg",
  "crusher": { "file": "oued-seddeur-plant.jpg", "alt": { "en": "Crushing plant at Oued Seddeur", "fr": "…" } }
}
```

Slots (each replaces the matching illustration everywhere it appears): `hero`, `crusher`,
`excavator`, `bulldozer`, `semi-truck`, `dump-truck`, `paver`, `drilling`, `parts`,
`mobilization`, `terrain-coastal`, `terrain-mountain`, `terrain-plateau`, `terrain-desert`.
JPG, PNG or WebP; about 1600 px wide, 3:2 landscape, under 300 KB. Width/height are read
automatically; photos below the fold load lazily. Default alt texts are in `ui.photoAlt`.
Use only your own photos.

## Illustrations and logo

SVGs in `src/assets/illustrations/` are inlined into the pages and use `currentColor` and
`var(--accent)` so they follow the section colours. Missing files render a neutral
placeholder and a build warning. `logo-mark.svg` is the brand mark (a temporary built-in
mark is used while it is missing). After changing the logo, run `node tools/render-assets.mjs`.

## Adding a language

1. Copy `src/content/en.mjs` to `src/content/<lang>.mjs` and translate every value
   (keep keys, page ids and block order; FR translates `slug`s, AR/ZH keep English slugs).
2. Make sure `<lang>` is in `site.config.json` → `languages`, and has an entry in
   `LANG_META` (`src/templates/structure.mjs`): switcher label, `hreflang`, `dir`, `ogLocale`, fonts.
3. `node tools/render-assets.mjs && node src/build.mjs && node tools/check.mjs`.

hreflang, sitemap alternates, the language switcher, `og:locale:alternate` and the
per-language PDF/OG image are all generated automatically. Missing UI strings fall back to
English with a build warning; a language whose file is absent is skipped with a warning.

---

## Deploying on GitHub Pages

1. Make this folder the repository root and push to GitHub.
2. Repository → **Settings → Pages** → Source: *Deploy from a branch*, branch `main`, folder **`/docs`**.
3. `docs/CNAME` (generated from `siteUrl`) contains `www.etahg.com`. At the domain registrar create:
   - `CNAME` record `www` → `<github-user>.github.io`
   - `A` records for the apex `etahg.com` → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153` (GitHub redirects apex → www)
4. In Settings → Pages, enter `www.etahg.com` as custom domain and tick **Enforce HTTPS**
   once the certificate is issued.

All internal links are relative, so the site also works at `https://<user>.github.io/<repo>/`
before the domain is connected (only `404.html` uses absolute URLs, by design).

## Post-launch checklist

- [ ] **Google Search Console**: add the `https://www.etahg.com` property (DNS verification),
      submit `https://www.etahg.com/sitemap.xml`, request indexing of the home page and the
      `/international-partners/` page.
- [ ] **Bing Webmaster Tools**: import from Search Console, submit the sitemap. Bing feeds
      ChatGPT search and Copilot. Enable **IndexNow** (Bing → IndexNow → generate a key, put
      `<key>.txt` in `docs/`, then ping `https://api.indexnow.org/indexnow?url=…&key=…` after each update).
- [ ] **Google Business Profile**: create "SARL ETAHG" (category *Construction company* /
      *Heavy equipment rental*) at the Ghardaïa registered office, phone +213 558 96 10 49,
      website `https://www.etahg.com`; add the Djelfa depot as a second location if it receives visitors.
- [ ] **LinkedIn company page** "SARL ETAHG": same description, website link; then add the
      URL to `site.config.json → social.linkedin` (feeds JSON-LD `sameAs`).
- [ ] **kaylekenny.com**: add a visible link "Part of the SARL ETAHG group → https://www.etahg.com"
      (footer and about section). Links between the two sites confirm the relationship for search and AI engines.
- [ ] **Directories**: Kompass Algeria, Algerian chamber of commerce (CACI) member directory,
      Europages, Made-in-Algeria/B2B directories, Google Maps, Apple Business Connect, Bing Places:
      use exactly the same name, address and phone everywhere (NAP consistency).
- [ ] Send the company-profile PDF (`/downloads/etahg-company-profile-en.pdf`, and the Chinese
      version once available) together with the website link to the partner company.
- [ ] Fill `site.config.json` as soon as data is confirmed (email, addresses, RC/NIF/NIS,
      founding year, fleet counts, capacity, regions, projects), then rebuild.
- [ ] After each content change: `render-assets` (if needed) → `build` → `check` → commit `docs/`.

## QA

`node tools/check.mjs --dir docs` verifies: every internal link and asset resolves; one
`<h1>` per page; title ≤ 60 chars; description 110–160 chars; absolute self-canonical;
reciprocal hreflang with `x-default`; `html lang/dir`; JSON-LD parses (Organization,
WebSite, WebPage, FAQPage matches rendered FAQs); sitemap lists exactly the indexable pages;
no `TODO`, `undefined`, `null`, `NaN`, `{{ }}` or lorem text; every `<img>` has alt and
width/height; no duplicate titles/descriptions; CSS ≤ 45 KB, JS ≤ 5 KB; page weights.
