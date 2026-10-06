# SARL ETAHG — Off-site launch kit (30-day plan)

Everything the website cannot do by itself: search-engine registration, Google Business Profile, LinkedIn, directories, press, backlinks. All facts come from `../BRIEF.md`; every text to paste is in this folder. Use the strings in `NAP.md` **identically** everywhere.

Ground rules (apply to every platform)
- Name is always `SARL ETAHG`; website is always `https://www.etahg.com/`; one phone `+213 558 96 10 49`; one e-mail `contact@etahg.com`.
- Fleet by category only; never counts, brands, plates, values. Never client names, project names, wilayas worked in, ISO, staff numbers, awards. Founded 1997 only. Never name any holding or parent group other than EURL KAYLE KENNY.
- Wherever Cummins is mentioned (Kayle Kenny parts): "independent supplier, not affiliated with or endorsed by Cummins Inc."
- Register every platform with a company Google/Microsoft account tied to `contact@etahg.com`, add the owner's personal account as a second manager.
- Egress from the writing environment was blocked: every URL below must be opened and checked by the owner before use.

## Checklist (ordered by impact)

| # | Day | Task | URL | Who | Time | Paste from |
|---|-----|------|-----|-----|------|-----------|
| 1 | 1 | Google Search Console: add property `https://www.etahg.com/` (URL-prefix) + Domain property `etahg.com`; copy the HTML-tag code to Claude | https://search.google.com/search-console | Owner (account), Claude (adds code to `site.config.json` → `verification.google`, rebuilds) | 20 min + 1 rebuild | `search-console.md` §1 |
| 2 | 1 | Submit sitemap `https://www.etahg.com/sitemap.xml`; request indexing for the 10 priority URLs | GSC → Sitemaps / URL Inspection | Owner | 30 min | `search-console.md` §1.4–1.5 |
| 3 | 1 | Bing Webmaster Tools: import from GSC (one click), check sitemap, IndexNow key already live | https://www.bing.com/webmasters | Owner | 10 min | `search-console.md` §2 |
| 4 | 2 | Baidu 站长平台: add site, verify (code → `verification.baidu`), submit sitemap, 普通收录 → 手动提交 the 21 `/zh/` URLs | https://ziyuan.baidu.com | Owner (needs a Baidu account with Chinese phone, or a Chinese partner), Claude (code) | 45 min | `search-console.md` §3 |
| 5 | 2 | Yandex Webmaster: add site, verify (code → `verification.yandex`), sitemap | https://webmaster.yandex.com | Owner, Claude (code) | 10 min | `search-console.md` §4 |
| 6 | 2–7 | Google Business Profile — HQ Bounoura: create, categories, description, services, hours, 12 photos, video verification | https://business.google.com | Owner (video on site), Claude (all texts ready) | 1 h + 24–72 h review | `google-business-profile.md` §1–§4 |
| 7 | 7–14 | GBP — Quarry Aïn El Ibel (only if staffed and reachable by customers) and Depot Djelfa (only if customers come there) | same dashboard, same account | Owner | 45 min each + review | `google-business-profile.md` §1.2–1.3 |
| 8 | 8–30 | GBP posts: 1 every 2–4 weeks (FR, then AR), Q&A seeds, enable messaging | GBP → Posts / Q&A | Owner posts, Claude wrote 4 posts + 5 Q&A | 10 min/post | `google-business-profile.md` §5–§6 |
| 9 | 8 | Bing Places: import from GBP after verification; set website | https://www.bingplaces.com (new flow: bing.com/forbusiness) | Owner | 10 min | `NAP.md` |
| 10 | 3 | LinkedIn Company Page (admin needs a confirmed `@etahg.com` mailbox on their personal profile) | https://www.linkedin.com/company/setup/new/ | Owner creates, Claude wrote copy | 30 min | `linkedin.md` |
| 11 | 3–30 | LinkedIn: 5 launch posts, 1 per week; employees add the company to their profiles | LinkedIn | Owner | 10 min/post | `linkedin.md` §4–§6 |
| 12 | 4 | kaylekenny.com → etahg.com cross-link (Group page, EN/FR/AR/ZH) — strongest immediate backlink | own site | Claude drafts text; owner of kaylekenny.com publishes | 30 min | `backlinks.md` §1 |
| 13 | 5 | Kompass Algérie free listing (needs RC scan) | https://dz.kompass.com (menu "Référencez votre entreprise") | Owner | 30 min | `directories.md` row 1 |
| 14 | 5 | prospecta-dz.com: ask to normalise "SARL E T A H G" → "SARL ETAHG", add website/phone/activities | https://www.prospecta-dz.com/fr (contact form) | Claude wrote the e-mail; owner sends | 10 min | `directories.md` §2 |
| 15 | 6 | Dun & Bradstreet D-U-N-S request (asked in Chinese/foreign vendor onboarding) | https://www.dnb.com/duns.html | Owner (RC, address) | 20 min + ~30 days | `directories.md` row 4 |
| 16 | 6–15 | El Mouchir / CACI, CCI M'Zab (Ghardaïa) and CCI Ouled-Naïl (Djelfa) membership → chamber directories + newsletter mention | https://elmouchir.caci.dz · https://www.commerce.gov.dz/fr/annuaires-des-chambres-de-commerce-et-d-industrie | Owner (dues, RC, ID) | 1 h each + chamber delay | `directories.md` rows 5–7 |
| 17 | 7–20 | Free Algerian directories: annuairesdz.com, dz-annuaire.com, tidjara.dz, annugate.com, archive-dz.com (correction) | see `directories.md` | Owner submits, Claude texts | 10 min each | `directories.md` rows 8–12 |
| 18 | 10–20 | International B2B: Europages (Visable), Africa Business Pages, Algeria Invest / AAPI partner listing | see `directories.md` | Owner | 20 min each | `directories.md` rows 13–15 |
| 19 | 10 | Facebook Page (AR/FR audience) + Ouedkniss Store (rental category) | https://www.facebook.com/pages/create · https://www.ouedkniss.com | Owner | 30 min | `NAP.md`, `directories.md` rows 16–17 |
| 20 | 12 | Chinese-facing: e-mail the 经商处 (dz.mofcom.gov.cn) with the ZH company-profile PDF; approach Chinese contractors' Algeria offices; fill `contact.wechat` in `site.config.json` when a WeChat ID exists | `directories.md` §3 | Owner (Claude wrote the ZH e-mail) | 30 min | `directories.md` §3, `backlinks.md` §5 |
| 21 | 14 | Press release FR/AR (+ 1 ZH paragraph) to APS Ghardaïa/Djelfa bureaux, Algérie Eco, regional radios, etc.; publish the same text on the site's Insights page and LinkedIn the same day | `press-release.md` §3 | Owner approves quote + sends; Claude wrote releases + pitch | 1 h | `press-release.md` |
| 22 | 15–30 | Backlink outreach: suppliers' reference pages, AGEA, upgrowth.dz, wilaya communication cells | `backlinks.md` | Owner sends, Claude wrote templates | 15 min/e-mail | `backlinks.md` |
| 23 | 20 | Update `site.config.json` → `social.*` with real profile URLs (LinkedIn, GBP Maps URL, Kompass, prospecta, Facebook) so JSON-LD `sameAs` is emitted; rebuild + redeploy | repo | Owner gives URLs, Claude edits + rebuilds | 15 min | `NAP.md` §7 |
| 24 | 30+ | Wikidata: do **not** create yet; revisit when ≥2 independent references (press article, CACI entry, D&B record) exist | https://www.wikidata.org | Claude (statement sheet ready) | 30 min when eligible | `wikidata.md` |
| 25 | 30, then monthly | Read GSC/Bing Performance reports; answer GBP messages < 24 h; 1 GBP post + 1 LinkedIn post per 2 weeks | GSC → Performance | Owner, Claude summarises | 20 min/month | `search-console.md` §5 |

## What Claude already did / can do without the owner
Wrote every text in this folder (EN/FR/AR/ZH), will paste verification codes into `site.config.json` and rebuild, will add `social` URLs to JSON-LD `sameAs`, will publish the release on the site's Insights page, can run `node tools/indexnow.mjs` after each deploy.

## What only the owner can do
Google/Microsoft/Baidu/LinkedIn accounts; GBP video verification and map pins; postal code (from the RC/NIF documents, never guessed); opening hours; RC/ID scans for Kompass, CACI, CCI, D&B; LinkedIn page creation; Ouedkniss payments; press quote approval; naming any supplier in outreach.

## Files
| File | Content |
|------|---------|
| `NAP.md` | Canonical name/address/phone/website in 4 languages, categories, short/long descriptions, "do not vary" list |
| `google-business-profile.md` | 3 locations step by step, categories, services, 12 photos, 4 posts (FR/AR), Q&A |
| `linkedin.md` | About (EN/FR/ZH), tagline, specialties, 5 posts (EN/FR), hashtags, employee instructions |
| `directories.md` | Platform table with URLs and exact texts, prospecta/Kompass/chambers, Chinese channels |
| `press-release.md` | Release FR + AR (+ ZH paragraph), outlets, e-mail pitch |
| `search-console.md` | GSC, Bing, Baidu, Yandex: verification, sitemap, 10 priority URLs, monthly reading |
| `backlinks.md` | Outreach list + templates FR/EN/ZH, Kayle Kenny cross-link copy |
| `wikidata.md` | Eligibility verdict + exact properties when the time comes |
