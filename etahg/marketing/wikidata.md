# Wikidata — eligibility verdict and item sheet

## 1. Verdict today: do NOT create the item yet

Wikidata notability (WD:N) accepts an item when it (a) has a page on a Wikimedia project, (b) is "a clearly identifiable conceptual or material entity that can be described using serious and publicly available references", or (c) fulfils a structural need. SARL ETAHG has no Wikipedia article and no structural need, so only (b) applies — and the company's own website, directory listings created by the company and its own press releases **do not count** as serious references. Items for small companies sourced only to their own site are routinely deleted, and creating one's own company item is a declared conflict of interest.

Create the item only when **at least two independent references** exist, for example: an APS / Algérie Eco / regional-radio article naming "SARL ETAHG" (not a reprinted release), the CACI El Mouchir entry, a D&B record, a chamber directory entry. Track candidates in `backlinks.md`. Until then, the same facts are already served to knowledge graphs by the site's `Organization` JSON-LD (`legalName`, `foundingDate`, `taxID`, address, `sameAs`), which is the cheaper, safe route.

## 2. When eligible — procedure
1. Create a **named** Wikidata account (not anonymous, not "ETAHG"); on the user page write: "I work for SARL ETAHG (paid/affiliated contributor)."
2. Search for an existing item first: "ETAHG", "Entreprise de Travaux d'Aménagement Hydraulique de Ghardaïa", "شركة الأشغال لتهيئة الري بغرداية". Reuse it if found.
3. Create the item with the labels/descriptions/aliases of §3, then the statements of §4, **each with a reference** (`reference URL (P854)` + `retrieved (P813)` + `title (P1476)`; for press, `publisher (P123)` and `publication date (P577)`).
4. No sitelinks. Watch the item for 30 days; if a deletion request appears, answer with the independent sources only.
5. Send the Q-id to Claude → `site.config.json` → `social.wikidata` → JSON-LD `sameAs`.

## 3. Labels, descriptions, aliases

| Lang | Label | Description | Aliases |
|------|-------|-------------|---------|
| en | SARL ETAHG | Algerian public-works and aggregates company (founded 1997) | ETAHG; Entreprise de Travaux d'Aménagement Hydraulique de Ghardaïa |
| fr | SARL ETAHG | entreprise algérienne de travaux publics et de granulats (fondée en 1997) | ETAHG; Entreprise de Travaux d'Aménagement Hydraulique de Ghardaïa |
| ar | شركة الأشغال لتهيئة الري بغرداية | شركة جزائرية للأشغال العمومية والركام (تأسست سنة 1997) | SARL ETAHG; ETAHG |
| zh | SARL ETAHG | 阿尔及利亚公共工程与骨料公司（1997年成立） | ETAHG公司; ETAHG |

## 4. Statements to enter (exact)

| Property | Value | Qualifiers | Reference |
|----------|-------|------------|-----------|
| instance of (P31) | business (Q4830453) | — | press/registry source |
| country (P17) | Algeria (Q262) | — | same |
| inception (P571) | 8 April 1997 (precision: day) | — | statutes / RC (cite the registry listing URL, e.g. prospecta/CACI, plus a press article) |
| legal form (P1454) | search "société à responsabilité limitée" (Algerian SARL item if one exists, else the generic SARL item) | — | registry |
| official name (P1448) | "Entreprise de Travaux d'Aménagement Hydraulique de Ghardaïa" (language: fr) · "شركة الأشغال لتهيئة الري بغرداية" (ar) | — | registry / press |
| short name (P1813) | "ETAHG" (mul or fr) | — | website |
| headquarters location (P159) | Bounoura (search the commune item in the wilaya of Ghardaïa) | street address (P6375) = "Cité 400 Logements, Sidi Abbaz" (fr) | registry / press |
| located in the administrative territorial entity (P131) | Ghardaïa Province (search "wilaya de Ghardaïa") | — | same |
| industry (P452) | construction (Q385378); road construction (search item); aggregate / construction aggregate (search "construction aggregate"); equipment rental (search item) | — | press |
| official website (P856) | https://www.etahg.com/ | language of work or name (P407) = English, French, Arabic, Simplified Chinese | self (allowed for P856) |
| phone number (P1329) | +213 558 96 10 49 | — | website (allowed for contact data) |
| email address (P968) | mailto:contact@etahg.com | — | website |
| coordinate location (P625) | lat/lng of the HQ pin **supplied by the owner** (site.config.json currently holds approximate values 32.4595, 3.6958 — do not enter until confirmed) | — | — |
| subsidiary / has subsidiary (P355) | EURL KAYLE KENNY (create only if it meets notability itself; otherwise skip) | — | — |
| described at URL (P973) | each press article URL | — | — |
| Kompass ID / other identifier properties | only if a Kompass or D&B identifier property exists and the listing is public | — | — |

Do **not** add: employees (P1128), total revenue (P2139), awards (P166), owned by (P127) with personal names, any client, project or wilaya-of-operation claims, Google Maps CID. Never name any holding or parent group other than EURL KAYLE KENNY.

## 5. Parallel safe win (already in the site, Claude maintains it)
`Organization` JSON-LD with `@id https://www.etahg.com/#organization`, `legalName`, `foundingDate` 1997, `taxID` NIF, `address` Bounoura, `telephone`, `email`, `logo` ≥112 px, and `sameAs` built from `site.config.json` → `social.*` (LinkedIn, GBP Maps URL, Kompass, prospecta, Facebook, Wikidata when it exists). Keep the RC/NIF visible on `/legal/` so aggregators reconcile "SARL E T A H G" (CNRC spelling) with "SARL ETAHG".
