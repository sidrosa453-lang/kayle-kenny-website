# Search engines: Google Search Console, Bing Webmaster, Baidu 站长平台, Yandex

How verification works on this site: `src/templates/layout.mjs` renders `<meta name="google-site-verification">`, `msvalidate.01`, `baidu-site-verification` and `yandex-verification` tags **only when** the matching key is filled in `site.config.json` → `verification.{google,bing,baidu,yandex}`. Workflow for every engine: owner creates the account and copies the **HTML-tag content value** (not the whole `<meta>` line) → sends it to Claude → Claude pastes it into `site.config.json`, runs `node src/build.mjs`, `node tools/check.mjs --dir docs`, the build is deployed → owner clicks "Verify". The tag then stays on every page, in every language (verification must never be removed afterwards). The IndexNow key file `177925fe626ea5f16fd9ecdcaa55e505.txt` is already live at the site root; `node tools/indexnow.mjs` submits all sitemap URLs to Bing, Yandex, Naver, Seznam and Yep after each deploy (also run weekly by the GitHub workflow).

Sitemap URL for every engine: `https://www.etahg.com/sitemap.xml` (84 URLs, with hreflang and lastmod). robots.txt allows all crawlers.

## 1. Google Search Console (GSC) — day 1

1. https://search.google.com/search-console → sign in with the `contact@etahg.com` Google account.
2. Add property, type **Domain**: `etahg.com` (covers www, http/https, all paths). Verification = DNS TXT record: copy the `google-site-verification=…` value → the owner adds it as a TXT record at the DNS provider of etahg.com (the registrar). If DNS access is awkward, add a second property of type **URL prefix** `https://www.etahg.com/` and choose "HTML tag" → copy the `content="…"` value → Claude → `verification.google`. Having both properties is fine.
3. Settings → Users and permissions → add the owner's personal account as Owner (second owner).
4. Sitemaps → "Add a new sitemap" → `sitemap.xml` → Submit. Status should become "Success — 84 discovered URLs" within hours.
5. URL Inspection → paste each of the 10 priority URLs → "Request indexing" (quota ≈ 10/day; do the rest the next day):

| # | URL | Why |
|---|-----|-----|
| 1 | https://www.etahg.com/ | entity home, EN |
| 2 | https://www.etahg.com/fr/ | main Algerian audience |
| 3 | https://www.etahg.com/zh/ | Chinese partner audience |
| 4 | https://www.etahg.com/ar/ | Arabic audience |
| 5 | https://www.etahg.com/about/ | entity disambiguation page |
| 6 | https://www.etahg.com/international-partners/ | core conversion page for EPC contractors |
| 7 | https://www.etahg.com/services/equipment-rental/ | highest commercial intent |
| 8 | https://www.etahg.com/fr/services/location-engins/ | FR rental queries |
| 9 | https://www.etahg.com/services/aggregate-production/ | quarry / aggregates |
| 10 | https://www.etahg.com/contact/ | NAP page |
Next day: /fr/services/production-de-granulats/, /zh/international-partners/, /services/water-well-drilling/, /locations/djelfa/, /company-profile/, /fr/a-propos/.

6. Also in GSC: Settings → "Change of address": not needed. "Removals": never use. International targeting is automatic through hreflang.
7. Google Business Profile ↔ GSC: no link needed, but the website field on GBP must be `https://www.etahg.com/`.

## 2. Bing Webmaster Tools — day 1 (after GSC)

1. https://www.bing.com/webmasters → sign in with a Microsoft account on `contact@etahg.com` (create one at https://signup.live.com using that address).
2. Choose **"Import from Google Search Console"** → authorise the same Google account → select `https://www.etahg.com/` → Import. Sites and sitemaps are copied; no meta tag needed. Fallback: "Add a site manually" → verification "HTML Meta Tag" → copy the `content` value → Claude → `verification.bing`.
3. Sitemaps → confirm `https://www.etahg.com/sitemap.xml` is listed; if not, submit it.
4. IndexNow → the key is already live (`/177925fe626ea5f16fd9ecdcaa55e505.txt`); Bing shows received submissions under "IndexNow".
5. URL Submission → submit the same 10 priority URLs (quota 10/day; also reached by `node tools/indexnow.mjs`).
6. Bing covers Copilot, DuckDuckGo and Yahoo results; Bing Places (`google-business-profile.md` §7) is separate.

## 3. Baidu 站长平台 (Baidu Search Resource Platform) — day 2

Baidu indexes overseas sites without an ICP licence, slowly; the `/zh/` pages are designed for it (system CJK fonts, no third-party requests, so they load from mainland China). Rules change often: **verify the current flow on the platform before relying on it**.

1. https://ziyuan.baidu.com → a Baidu account is required (百度账号: normally a Chinese mobile number; an overseas number may be accepted at passport.baidu.com — if not, ask the Chinese partner or a trusted intermediary to create and hand over a dedicated account).
2. 用户中心 → 站点管理 → 添加网站 → enter `https://www.etahg.com` (protocol https, domain www) → 站点属性: 行业 "建筑建材/工程"; 站点领域: 企业官网.
3. 验证网站 → choose **HTML标签验证** → copy the `content="…"` value of `<meta name="baidu-site-verification">` → Claude → `verification.baidu` → rebuild/deploy → 完成验证. (File verification is possible but would require a new file in `docs/`; the meta tag is preferred.)
4. 普通收录 → sitemap → submit `https://www.etahg.com/sitemap.xml`. Baidu may reject sitemaps with hreflang noise; if so, Claude can generate a plain `sitemap-zh.xml` listing only the 21 `/zh/` URLs (a build-side change for the docs/ owner).
5. 普通收录 → 手动提交 → paste the 21 `/zh/` URLs (one per line):
```
https://www.etahg.com/zh/
https://www.etahg.com/zh/services/
https://www.etahg.com/zh/services/aggregate-production/
https://www.etahg.com/zh/services/equipment-rental/
https://www.etahg.com/zh/services/project-mobilization/
https://www.etahg.com/zh/services/road-construction/
https://www.etahg.com/zh/services/water-well-drilling/
https://www.etahg.com/zh/services/spare-parts/
https://www.etahg.com/zh/fleet/
https://www.etahg.com/zh/experience/
https://www.etahg.com/zh/international-partners/
https://www.etahg.com/zh/about/
https://www.etahg.com/zh/locations/
https://www.etahg.com/zh/locations/djelfa/
https://www.etahg.com/zh/locations/ghardaia/
https://www.etahg.com/zh/insights/
https://www.etahg.com/zh/insights/mobilizing-heavy-equipment-algeria-checklist/
https://www.etahg.com/zh/faq/
https://www.etahg.com/zh/contact/
https://www.etahg.com/zh/company-profile/
https://www.etahg.com/zh/legal/
```
6. API 推送 (push token) is shown after verification: send the token to Claude if automated pushes are wanted later (would need a small tool; not built yet).
7. Expect first Baidu index entries in weeks, not days. The 抓取诊断 tool shows whether Baiduspider can fetch `https://www.etahg.com/zh/` from China.

## 4. Yandex Webmaster — day 2 (10 min)
1. https://webmaster.yandex.com → Yandex ID on `contact@etahg.com`.
2. Add site `https://www.etahg.com` → verification "Meta tag" → copy the `content` value → Claude → `verification.yandex`.
3. Indexing → Sitemap files → add `https://www.etahg.com/sitemap.xml`. IndexNow submissions already reach Yandex.
4. Low traffic expected; the value is entity coverage for Yandex/Alice answers and Russian-speaking EPC staff.

## 5. Reading the reports monthly (owner, 20 min; send a screenshot to Claude for interpretation)

GSC → **Performance → Search results**, date range "Last 3 months" vs previous period:
- **Queries**: expect brand queries first ("etahg", "sarl etahg", "etahg ghardaia"). Then service queries: "location engins djelfa", "granulats djelfa", "sable concassé ghardaïa", "forage puits ghardaïa", "local partner algeria construction". Anything with impressions > 50 and position 8–20 is a page to strengthen (tell Claude: he adjusts titles/text).
- **Pages**: which URLs get impressions; if `/zh/` pages show in Google (not Baidu) that is normal — Chinese BD staff often use Google.
- **Countries**: Algeria, China, France, Turkey, Italy… = the audience the site was built for.
- **Search appearance**: "Sitelinks search box", "FAQ", "Breadcrumbs" come from the JSON-LD.
GSC → **Indexing → Pages**: target "Indexed" = 84 (sitemap count). "Alternate page with proper canonical tag" is normal for `index.html` duplicates. "Discovered – currently not indexed" on deep pages: wait; re-request after 4 weeks. Any "Not found (404)" or "Redirect error": send to Claude.
GSC → **Experience → Core Web Vitals / HTTPS**: must be all green (static site).
GSC → **Links**: external links count grows as the directories/press go live; compare with `backlinks.md` table.
Bing → **Reports & Data → Search performance** and **Site Explorer**; **IndexNow** panel confirms pushes.
Baidu → 流量与关键词 (traffic & keywords) and 索引量 (index volume) — check the `/zh/` index volume grows.
Monthly action loop: new GBP post + LinkedIn post → `node tools/indexnow.mjs` after any site change → note the top 5 queries in a shared sheet.
