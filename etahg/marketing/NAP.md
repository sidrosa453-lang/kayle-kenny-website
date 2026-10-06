# NAP — canonical identity strings (copy exactly, everywhere)

Rule: the same characters on the website footer, JSON-LD, Google Business Profile, Bing, LinkedIn, Kompass, every directory, letterhead and e-mail signature. Search engines and AI answer engines reconcile the company by matching these strings.

## 1. Name

| Field | Value |
|-------|-------|
| Business name (all platforms, all languages) | `SARL ETAHG` |
| Legal name (FR, from the statutes) | `Entreprise de Travaux d'Aménagement Hydraulique de Ghardaïa` |
| Legal name (AR) | `شركة الأشغال لتهيئة الري بغرداية` |
| Short name / alias | `ETAHG` |
| Legal form | SARL (société à responsabilité limitée) |
| Chinese display (only where a Chinese label is asked) | `SARL ETAHG（ETAHG公司）` — keep "ETAHG" in Latin capitals |
| Never | `ETAHG SARL`, `Sarl Etahg`, `SARL E T A H G`, `ETAHG Ghardaïa`, `ETAHG Travaux Publics`, any slogan or keyword appended |

## 2. Registered office (HQ) — the address used as the primary location

| Lang | Address string |
|------|----------------|
| EN | `Cité 400 Logements, Sidi Abbaz, Bounoura, Ghardaïa, Algeria` |
| FR | `Cité 400 Logements, Sidi Abbaz, Bounoura, Wilaya de Ghardaïa, Algérie` |
| AR | `حي 400 مسكن، سيدي عباز، بونورة، ولاية غرداية، الجزائر` |
| ZH | `阿尔及利亚 盖尔达耶省 布努拉 Sidi Abbaz 400 Logements 住宅区` |

Form fields: Street = `Cité 400 Logements, Sidi Abbaz` · City/Commune = `Bounoura` · Region/Wilaya = `Ghardaïa` · Country = `Algeria` (DZ) · Postal code = **owner supplies the code printed on the RC/NIF documents; never guess** (then Claude fills `contact.address.postalCode` in `site.config.json`).

## 3. Secondary locations (only on their own listings, never as the main address)

| Site | String | Phone |
|------|--------|-------|
| Equipment depot | EN `SARL ETAHG — Equipment depot, Djelfa, Wilaya of Djelfa, Algeria` · FR `SARL ETAHG — Dépôt matériel, Djelfa, Wilaya de Djelfa, Algérie` · AR `SARL ETAHG — مستودع العتاد، الجلفة، ولاية الجلفة` · ZH `SARL ETAHG 设备基地，杰勒法省杰勒法` | +213 558 96 10 49 |
| Quarry + crushing plant | EN `Carrière Djellal El Gharbi (SARL ETAHG), Oued Sdeur, Aïn El Ibel, Wilaya of Djelfa, Algeria` · FR `Carrière Djellal El Gharbi (SARL ETAHG), Oued Sdeur, Aïn El Ibel, Wilaya de Djelfa, Algérie` · AR `محجرة جلال الغربي (SARL ETAHG)، واد السدر، عين الإبل، ولاية الجلفة` · ZH `Djellal El Gharbi 采石场（SARL ETAHG），Oued Sdeur，艾因伊贝勒，杰勒法省` | +213 660 36 75 50 · +213 660 36 75 51 · fax +213 27 90 46 13 |
| Group parts company (separate entity, own listings) | `EURL KAYLE KENNY, El Djenina 200 Logts Social Participatif, Lido, Mohammadia, Algiers, Algeria` — https://www.kaylekenny.com | +213 558 96 10 49 |

Never state a distance in km for the quarry. Owner drops the map pin himself.

## 4. Contact

| Field | Value |
|-------|-------|
| Primary phone (everywhere) | `+213 558 96 10 49` (also WhatsApp: https://wa.me/213558961049) |
| E-mail | `contact@etahg.com` (never personal aliases) |
| Website | `https://www.etahg.com/` (https, www, trailing slash) — FR `https://www.etahg.com/fr/` · AR `https://www.etahg.com/ar/` · ZH `https://www.etahg.com/zh/` |
| WeChat | leave empty until the owner has a company WeChat ID (then `site.config.json` → `contact.wechat`) |
| Founded | `1997` (notarial deed 8 April 1997, Ghardaïa) |
| Registry (legal/"about" fields only) | RC `47/00-0862220 B 98` · NIF `099847086222075` · NIS `099347100156231` · AI `47100604430` |

## 5. Categories / activities

| Platform vocabulary | Values (in order of priority) |
|---------------------|-------------------------------|
| Google Business Profile (HQ) | Primary **Construction company**; secondary **Civil engineering company**, **Equipment rental agency** (fallback: Construction equipment supplier / Construction machine rental service), **Road construction company**, **Well drilling contractor** |
| GBP (quarry) | Primary **Quarry**; secondary **Crushed stone supplier**, **Sand & gravel supplier** |
| GBP (depot) | Primary **Equipment rental agency**; secondary **Construction equipment supplier** |
| LinkedIn industry | Construction |
| Facebook | Construction company |
| Kompass / directories (FR) | Travaux publics et routiers · Location d'engins de travaux publics · Production de granulats (sable concassé) · Démarrage de chantier / mobilisation d'engins · Forage de puits d'eau · Pièces de rechange moteurs diesel (via EURL KAYLE KENNY) |
| Directories (EN) | Public works and road construction · Heavy equipment rental and leasing · Fine aggregate production (own quarry and crushing plant) · Project mobilization · Water well drilling |
| Directories (AR) | الأشغال العمومية وإنجاز الطرق · كراء الآليات الثقيلة · إنتاج الركام الناعم (الرمل المكسّر) · تجهيز الورشات وانطلاق المشاريع · حفر آبار المياه |
| Directories (ZH) | 公共工程与道路施工 · 重型设备租赁 · 细骨料（机制砂）生产 · 项目进场动员 · 水井钻探 |
| Keywords (if a field asks) | FR `travaux publics Ghardaïa, location engins Djelfa, granulats Djelfa, sable concassé, forage puits, sous-traitant BTP Algérie` · EN `public works Algeria, equipment rental Algeria, aggregates Djelfa, local partner EPC Algeria` |

## 6. Opening hours

Placeholder until the owner confirms: `Sunday–Thursday, 08:00–17:00` (Algerian working week). FR `Dimanche–Jeudi 08h00–17h00` · AR `الأحد–الخميس 08:00–17:00` · ZH `周日至周四 08:00–17:00`. Friday–Saturday closed. Use the same hours on GBP, Bing, Facebook and `site.config.json` → `contact.hours`. Quarry hours may differ (owner).

## 7. Short description (≤ 150 characters) — taglines, directory one-liners

| Lang | Text | Chars |
|------|------|-------|
| EN | `SARL ETAHG, Algeria (est. 1997): fine aggregates, road construction, heavy equipment rental, project mobilization and water well drilling.` | 139 |
| FR | `SARL ETAHG, Algérie (depuis 1997) : granulats fins, travaux routiers, location d'engins de TP, démarrage de chantier et forage de puits d'eau.` | 145 |
| AR | `SARL ETAHG، الجزائر (منذ 1997): ركام ناعم، إنجاز الطرق، كراء الآليات الثقيلة، تجهيز الورشات وحفر آبار المياه.` | 108 |
| ZH | `SARL ETAHG，阿尔及利亚（1997年成立）：细骨料、道路施工、重型设备租赁、项目进场动员及水井钻探。` | 55 |

## 8. Long description (≤ 750 characters) — GBP "From the business", Kompass, Europages, LinkedIn fallback

**EN (734 chars)**
`SARL ETAHG is an Algerian company established in 1997 and registered in Ghardaïa (Entreprise de Travaux d'Aménagement Hydraulique de Ghardaïa). It is specialised in fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization and water well drilling. The company operates its own quarry and stone crushing plant at Oued Sdeur, Aïn El Ibel (Djelfa), producing fine aggregates suited to high production rates, and keeps its equipment depot in Djelfa on the RN1 north–south axis. Its fleet (excavators, dozers, loaders, graders, compactors, paver, bitumen trucks, haulage, drilling rigs) is offered for rent or lease, terms agreed per project. Local partner for EPC contractors and project owners.`

**FR (741 chars)**
`SARL ETAHG est une entreprise algérienne créée en 1997 et immatriculée à Ghardaïa (Entreprise de Travaux d'Aménagement Hydraulique de Ghardaïa). Elle est spécialisée dans la production de granulats fins, les travaux routiers, la location et le leasing d'engins de travaux publics, le démarrage de chantiers et le forage de puits d'eau. Elle exploite sa propre carrière et sa station de concassage à Oued Sdeur, Aïn El Ibel (Djelfa), produisant des granulats fins adaptés aux fortes cadences, et dispose d'un dépôt matériel à Djelfa, sur l'axe RN1. Son parc (pelles, bulldozers, chargeuses, niveleuses, compacteurs, finisseur, camions bitume, transport, foreuses) est proposé en location, conditions définies par projet. Partenaire local des entreprises EPC.`

**AR (≈ 520 chars)**
`SARL ETAHG شركة جزائرية ذات مسؤولية محدودة تأسست سنة 1997 ومسجلة بغرداية (شركة الأشغال لتهيئة الري بغرداية). تختص في إنتاج الركام الناعم، إنجاز الطرق، كراء الآليات الثقيلة لمدد قصيرة وطويلة، تجهيز الورشات وانطلاق المشاريع، وحفر آبار المياه. تستغل الشركة محجرتها الخاصة ومحطة التكسير بواد السدر، عين الإبل (ولاية الجلفة)، لإنتاج ركام ناعم يلائم وتيرة الإنتاج العالية، ولها مستودع عتاد بالجلفة على الطريق الوطني رقم 1. حظيرتها (حفارات، جرافات، محمّلات، آلات تسوية، مداحل، آلة فرش الإسفلت، شاحنات الزفت، شاحنات النقل، آلات الحفر) متاحة للكراء بشروط تُحدَّد لكل مشروع. شريك محلي لمقاولي EPC وأصحاب المشاريع.`

**ZH (≈ 300 chars)**
`SARL ETAHG（ETAHG公司）是一家于1997年成立、注册于盖尔达耶省的阿尔及利亚有限责任公司，全称 Entreprise de Travaux d'Aménagement Hydraulique de Ghardaïa。主营细骨料生产、道路施工、重型设备租赁（短租与长租）、项目进场动员及水井钻探。公司在杰勒法省艾因伊贝勒 Oued Sdeur 自营采石场和石料破碎站，生产适合高产量项目的细骨料，并在杰勒法（1号国道南北干线）设有设备基地。设备（挖掘机、推土机、装载机、平地机、压路机、摊铺机、沥青车、运输车、钻机）可租可赁，条款按项目商定。为EPC承包商和项目业主提供本地合作。`

## 9. What NOT to vary (checklist before saving any profile)
- Name capitalisation and order (`SARL ETAHG`), no accents, no extra words.
- Address spelling: `Cité 400 Logements` (not "Cite 400 Lgts"), `Sidi Abbaz`, `Bounoura` (not "Bounoura Ghardaia" in the city field), `Ghardaïa` with the diaeresis in FR/EN fields.
- Phone format `+213 558 96 10 49` (international, spaced); never `0558…` on international platforms; never the quarry or fax numbers as main number.
- Website with `https://www.` and trailing slash; never `http://etahg.com`, never a deep link as "website" (deep links go in posts).
- E-mail `contact@etahg.com` only.
- Founding year `1997` only; no other dates.
- Descriptions: no counts, brands, plates, tonnes/hour, km, clients, projects, wilayas worked in, ISO, staff numbers, awards, superlatives, emoji.
- Quarry: own spelling `Oued Sdeur`; no distance in km.
- Kayle Kenny: always "EURL KAYLE KENNY", with the Cummins disclaimer when Cummins is mentioned.
- Never name any holding or parent group: the only group company is EURL KAYLE KENNY.
- Same company account (`contact@etahg.com`) as owner of every profile; owner's personal account as manager.
