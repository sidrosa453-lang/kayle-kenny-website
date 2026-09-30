# SARL ETAHG website

Corporate website of **SARL ETAHG** (Algeria): fine aggregate production, road
construction, heavy equipment rental and leasing, project mobilization, water well
drilling, and the group spare-parts company EURL KAYLE KENNY.

- Live domain: **https://www.etahg.com**
- Languages: English (default, `/`), French (`/fr/`), Arabic (`/ar/`, right-to-left),
  Simplified Chinese (`/zh/`)
- Static site, **zero dependencies**: a Node.js script generates plain HTML/CSS into `docs/`.
  No cookies, no tracking, no backend, **no third-party requests** (fonts are self-hosted;
  Chinese pages use system CJK fonts), so pages display normally from mainland China.

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
    fonts/               self-hosted woff2 subsets + fonts.css (made by tools/fetch-fonts.mjs)
    generated/           OG images, PDF profiles, icons (made by tools/render-assets.mjs)
  lastmod.json           per-page content hash + date for sitemap <lastmod> (updated by docs/ builds)
tools/
  serve.mjs              local preview server
  check.mjs              automated QA (links, SEO tags, hreflang, JSON-LD, sitemap…)
  screenshot.mjs         full-page screenshots (Playwright)
  render-assets.mjs      OG images, company-profile PDFs, logo/favicons (Playwright)
  fetch-fonts.mjs        downloads the font subsets once into src/assets/fonts (curl)
  browser.mjs            shared Playwright helper
docs/                    BUILD OUTPUT, committed, served by the static host
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
draft translations). `BUILD_DATE=2026-10-01 node src/build.mjs` sets the build date (default: today).

**Production build is strict.** A build into `docs/` (or with `--strict`) *fails* if any language lacks
its own company-profile PDF or share image in `src/assets/generated/` — a Chinese visitor must never
receive the English PDF. Builds elsewhere only warn (`--no-strict` forces a draft build into docs/).
The build also warns when a PDF is older than its content file (re-run `render-assets`).

**Sitemap `lastmod`** changes only when a page's rendered main content changes: the build hashes each
page's `<main>` and keeps `{hash, date}` in `src/lastmod.json` (commit it). Only `docs/` builds update
the file; the same date feeds `WebPage.dateModified`.
Node 18+ is enough for the build. Only the two Playwright tools need Playwright + Chromium
(`NODE_PATH` pointing at a global install is supported; nothing is ever installed automatically).

**Typical update:** edit content or config → `node tools/render-assets.mjs` (only if the
company profile, OG texts or logo changed) → `node src/build.mjs` → `node tools/check.mjs` → commit `docs/`.

---

## Editing content

All visible text lives in `src/content/<lang>.mjs`. The schema is documented at the top
of `src/content/en.mjs`. In short:

- `ui` — interface strings (menu, footer, facts panel labels, location types, map labels…)
- `pages.<id>` — one object per page: `slug`, `nav`, `title` (≤ 60 display width, ends with
  `| SARL ETAHG`), `description` (110–155 display width; CJK counts 2), `summary`, optional `service`, and `blocks`.
- Blocks: `hero, pillars, prose, split, cards, features, steps, terrain, equipment, facts,
  locations, group, faq, records, table, links, contact, download, cta`.
- Inline markup inside any text: `**bold**`, `[label](page:about)`, `[label](page:home@zh)`,
  `[label](https://…)`, `[label](tel:)`, `[label](whatsapp:)`, `[label](pdf:)`.
- Tokens: `{{company}}`, `{{short}}`, `{{phone}}` (rendered with no-break spaces), `{{email}}` (from `contact.email`; never hard-code the address), `{{group}}`, `{{year}}`.
- `ui.punct` holds the separators used by generated strings (facts panel, footer, addresses, share-image
  alt): ASCII in EN, `\u00A0:` in FR, `،` in AR, full-width `：，；（）` in ZH. ZH also sets
  `ui.addressOrder: 'country-first'` (阿尔及利亚盖尔达耶) and `ui.headerChannel: 'email'` (email first in the
  header and contact block, because WhatsApp is blocked in mainland China).
- Chinese headings break only at punctuation or at an explicit U+200B (CSS `word-break: keep-all`); add a
  U+200B hint in any long heading without punctuation so words such as 阿尔及利亚 are never split.
- FAQ blocks with `from`/`ids` reuse questions of the FAQ page: they are shown but their `FAQPage`
  structured data is emitted only on the FAQ page (Google: mark up a repeated FAQ once).
- A `records` block (Experience page) is skipped entirely until `regions` or `projects` are filled.

The page tree (which pages exist, parents, menu order) is in `src/templates/structure.mjs`.
FAQ blocks automatically produce `FAQPage` structured data; service pages produce `Service`.

## Filling `site.config.json`

Everything below is optional; the site renders cleanly with it empty and never invents values.

| Field | Effect when filled |
|---|---|
| `contact.email` | mailto links, footer, contact page, JSON-LD, vCard |
| `contact.wechat` | WeChat ID row on the contact page (strongly recommended for the Chinese partner) |
| `spokenLanguages` | e.g. `["ar","fr","en"]` once the owner confirms who answers in which language: adds the "Working languages" fact, JSON-LD `knowsLanguage` / `availableLanguage` and the llms.txt line. Until then the prose in `src/content/*.mjs` (partners, contact, FAQ, company profile) must not say which languages staff speak or documents are exchanged in; it only lists the four website languages and asks the visitor to state a preferred language. Once confirmed, update those sentences in all four languages and re-render the PDFs |
| `verification.google / bing / baidu` | site-verification `<meta>` tags for Search Console, Bing Webmaster Tools and Baidu 搜索资源平台 |
| `group[0].jsonldId`, `street`, `addressLocality`, `addressRegion` | the Kayle Kenny node in JSON-LD; `jsonldId` must equal the `@id` published on kaylekenny.com (`https://www.kaylekenny.com/#store`) so the two graphs join |
| `contact.address.street` / `postalCode` | full registered-office address (footer, legal, JSON-LD, vCard) |
| `contact.phones`, `contact.fax` | secondary office / quarry lines and fax: contact page, facts panel, legal notice, vCard (`TEL;TYPE=WORK,FAX`), JSON-LD `faxNumber` / extra `ContactPoint`s |
| `locations[].name / street / phones / fax` | extra lines on a location card (e.g. the quarry) and its JSON-LD `Place` |
| `contact.mapsUrl`, `locations[].mapsUrl` | "Open in Google Maps" links on location cards, `hasMap` |
| `contact.hours` | opening hours on the contact page (string or `{ "en": …, "fr": … }`) |
| `registry.rc / nif / nis / ai` | facts panel, legal notice, JSON-LD `identifier` |
| `foundedYear` | facts panel, stats band, JSON-LD `foundingDate` |
| `fleet.*` (numbers) | unit counts on fleet/rental cards, facts panel, stats band. **Keep them `null`**: the owner's discretion rule (BRIEF.md) allows equipment categories only, never counts, brands, plates or values |
| `crushingCapacityTonnesPerHour` | facts panel, stats band |
| `regions` | list of regions on the Experience page (strings or `{ "en": …, "fr": … }`) |
| `projects` | project table on the Experience page: `[{ "name", "region", "year", "scope" }]` (values may be per-language objects) |
| `certifications` | facts panel + JSON-LD (only real, current certificates) |
| `social.linkedin / facebook / googleBusinessProfile` | JSON-LD `sameAs` |
| `locations[].names` | location names per language (`en`, `fr`, `ar`, `zh`; `en` falls back to `locality`) |

## Real photos

Put photos in `src/assets/photos/` and map a **slot** to the file in `site.config.json`:

```json
"photos": {
  "hero": "fleet-on-site.jpg",
  "crusher": { "file": "oued-sdeur-quarry.jpg", "alt": { "en": "Quarry and crushing plant at Oued Sdeur", "fr": "…" } }
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
per-language PDF/OG image are all generated automatically; `404.html` switches its heading, text
and links to the language of the requested URL (`/fr/…`, `/ar/…`, `/zh/…`) using `ui.notFound`. Missing UI strings fall back to
English with a build warning; a language whose file is absent is skipped with a warning.

---

## Fonts

`node tools/fetch-fonts.mjs` downloads Archivo and Inter (Latin + Latin Extended) and IBM Plex Sans
Arabic (Arabic subset) once into `src/assets/fonts/` (SIL Open Font License). The build prepends
`fonts.css` to the stylesheet, copies the woff2 files to `assets/fonts/` and preloads the Latin faces
(plus the Arabic 400/700 faces on `/ar/`). Nothing is requested from Google at display time.
Chinese pages use the visitor's system fonts (PingFang SC, Microsoft YaHei, Noto Sans CJK SC…);
only `render-assets` uses Noto Sans SC, to embed it in the Chinese PDF and share image.

## Hosting for a Chinese audience (read before choosing a host)

GitHub Pages is known to block Baiduspider and can be slow or unreliable from mainland China, so Baidu
(and Chinese AI assistants that rely on it) may never index `/zh/`. Recommended:

1. Serve `docs/` from a static host with Asia edge locations that does not block Baiduspider
   (e.g. Cloudflare Pages or Netlify with a Hong Kong / Singapore edge, or a CDN in front of GitHub Pages).
   Do not host in mainland China (that requires an ICP licence).
2. Verify the domain in **Baidu 搜索资源平台** (ziyuan.baidu.com) and **Bing Webmaster Tools**; put the
   issued codes in `site.config.json → verification`, rebuild, then submit `https://www.etahg.com/sitemap.xml`.
3. `robots.txt` already allows every crawler and names Baiduspider, Bytespider, YisouSpider, Sogou, 360Spider.

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
- [ ] **kaylekenny.com** (separate site, owner approval needed): add a visible footer line
      "Société du groupe SARL ETAHG → www.etahg.com" and, in its JSON-LD store node (`@id` `https://www.kaylekenny.com/#store`),
      `"parentOrganization": {"@type": "Organization", "@id": "https://www.etahg.com/#organization", "name": "SARL ETAHG", "url": "https://www.etahg.com/"}`.
      kaylekenny.com is the group's only indexed site today; this link is the fastest way for Google and AI engines to find and trust etahg.com.
- [ ] **Owner data that makes the site verifiable** (fill `site.config.json`, then rebuild): a WeChat ID,
      confirmed working languages (`spokenLanguages`), 2–3 approved road projects or the wilayas where roads
      were built, map links for each location, real photos, LinkedIn page and Google Business Profile URLs
      (`social`), and the confirmed Arabic/Chinese spelling of Oued Sdeur. (Done: RC / NIF / NIS / AI, founding
      year 1997, registered-office address, quarry phones and fax. Fleet counts stay unpublished by design.)
- [ ] **Directories**: Kompass Algeria, Algerian chamber of commerce (CACI) member directory,
      Europages, Made-in-Algeria/B2B directories, Google Maps, Apple Business Connect, Bing Places:
      use exactly the same name, address and phone everywhere (NAP consistency).
- [ ] Send the Chinese company-profile PDF (`/downloads/etahg-company-profile-zh.pdf`) and the link
      `https://www.etahg.com/zh/` to the partner company (English: `…-en.pdf`).
- [ ] Fill `site.config.json` as soon as data is confirmed (capacity, regions, projects, map links),
      then rebuild. Never add fleet counts, brands, plates or values (discretion rule).
- [ ] After each content change: `render-assets` (if needed) → `build` → `check` → commit `docs/`.

## QA

`node tools/check.mjs --dir docs` verifies: every internal link and asset resolves; one
`<h1>` per page; title ≤ 60 chars; description 110–160 chars; absolute self-canonical;
reciprocal hreflang with `x-default`; `html lang/dir`; JSON-LD parses (Organization,
WebSite, WebPage, FAQPage matches rendered FAQs); sitemap lists exactly the indexable pages;
no `TODO`, `undefined`, `null`, `NaN`, `{{ }}` or lorem text, also inside URL-encoded links such as
WhatsApp `?text=`; every `<img>` has alt and width/height; no duplicate titles/descriptions; each
language uses its own share image and PDF; no third-party stylesheet, preconnect or script; CSS ≤ 45 KB
(excluding generated `@font-face` rules), JS ≤ 5 KB; page weights. Title and description lengths are
measured in display width (a CJK character counts 2), so 60–80-character Chinese descriptions pass.
