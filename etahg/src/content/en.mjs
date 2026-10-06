/*
 * SARL ETAHG website — ENGLISH CONTENT (default language)
 * ======================================================
 * This file is PURE DATA. Every visible English word of the website lives here.
 * Translators: copy this file to fr.mjs / ar.mjs / zh.mjs, keep every key and
 * every page id, translate the values, and (FR only) translate the `slug`s.
 * Facts must follow BRIEF.md: never add numbers, names, places, certifications.
 *
 * ENTITY STATEMENT (repeat it word for word in every language, on the home page,
 * About, FAQ, company profile, footer tagline and off-site profiles):
 *   "SARL ETAHG is an Algerian company specialized in fine aggregate production,
 *    road construction, heavy equipment rental and leasing, project mobilization
 *    and water well drilling."
 * Keep "ETAHG" in Latin capitals in every language. Full name: site.config.json fullName.
 *
 * TOKENS (replaced at build time, usable in any string)
 *   {{company}} SARL ETAHG   {{short}} ETAHG   {{phone}} +213 …   {{email}} contact.email   {{group}} EURL KAYLE KENNY
 *   {{year}} current year
 *
 * INLINE MARKUP (any text field of a block)
 *   **bold**   [label](page:ID)   [label](page:ID#anchor)   [label](https://…)
 *   [label](page:ID@zh)  (same page id in another language; plain text if that language is absent)
 *   [label](tel:)   [label](whatsapp:)   [label](mailto:)   [label](pdf:)  (company-profile PDF)
 *
 * TOP LEVEL
 *   meta      optional overrides of src/templates/structure.mjs LANG_META (label, dir, ogLocale…)
 *   ui        interface strings (header, footer, facts panel, locations, map, article, 404…)
 *   pages     one object per page id (see structure.mjs PAGES), incl. the 'insights' hub,
 *             the 'locations' hub and the location pages 'loc-djelfa' / 'loc-ghardaia'
 *   articles  one object per ARTICLE id (Insights articles, see ARTICLE below); an article
 *             exists in a language only when that language file has it
 *
 * PAGE
 *   slug         URL path without leading/trailing slash ('' = home). FR translates it;
 *                AR and ZH keep the English slug.
 *   nav          short label (menus, breadcrumbs, footer, cards)
 *   title        <title>, max 60 chars, must end with "| ETAHG" (home leads with "SARL ETAHG |")
 *   description  meta description, 110–155 chars, unique per page
 *   summary      one sentence used in llms.txt and link lists
 *   service      (service pages) { name, serviceType } → schema.org Service
 *   whatsapp     optional prefilled WhatsApp message for this page (else ui.whatsappMessage)
 *   layout       optional: 'profile' (printable company profile); 'location' is set automatically
 *                on location pages (structure.mjs LOCATION_PAGES: page id -> site.config.json location id)
 *   blocks       ordered array of blocks (below). `label` = small numbered section label.
 *                Any block may set `id` (anchor) and `tone`: 'light' | 'sand' | 'ink'.
 *
 * ARTICLE (articles.<id>; the id is shared by all languages, the slug is translated)
 *   slug          URL leaf under the Insights hub: /insights/<slug>/ (FR: /fr/conseils/<slug>/)
 *   nav           short title (hub card, breadcrumb, prev/next)
 *   title         <title>, max 60 width, ends with "| ETAHG"
 *   description   meta description, 110–155 width
 *   summary       one or two sentences for the hub card and llms.txt
 *   eyebrow       topic shown above the H1 (also schema.org articleSection)
 *   h1            the H1 (defaults to nav)
 *   lead          standfirst under the H1
 *   datePublished YYYY-MM-DD   dateModified? YYYY-MM-DD (sitemap lastmod, byline "Updated", Article JSON-LD)
 *   service?      service page id the article is about (byline tag, Article.about, "Related services")
 *   related?      page ids listed under "Related services" (default: [service])
 *   blocks        prose, steps, table, faq, cta, split, cards, features, links, callout…
 *                 Every block with a `title` becomes an H2 with an anchor listed in the table of contents.
 *                 Keep H2 titles short (they are the TOC). FAQ blocks use their own items (FAQPage markup).
 *   Reading time, word count, prev/next and the byline are generated. Articles never add facts
 *   outside BRIEF.md: general know-how only, no project names, counts or places worked in.
 *
 * BLOCK TYPES (fields; [] = array; ? = optional)
 *   hero      size ('home'|'page'|'profile'), eyebrow, title (the page H1), lead,
 *             points[]?, ctas[]?, illustration? (name in src/assets/illustrations without .svg)
 *   pillars   label?, title?, intro?, items[{title, text}], stats? (true → show filled config numbers)
 *   prose     label?, title, lead?, paragraphs[], list[]?, note?
 *   split     label?, title, lead?, paragraphs[], list[]?, illustration, reverse?, ctas[]?
 *   cards     label?, title, intro?, style ('services'|'compact'), items[{title, text, page?, href?, illustration?}]
 *   features  label?, title, intro?, items[{title, text}]            (numbered grid)
 *   steps     label?, title, intro?, items[{title, text}]            (ordered process timeline)
 *   terrain   label?, title, intro?, items[{illustration, title, text, points[]}]
 *   equipment label?, title, intro?, items[{illustration, title, text, uses[], count?}]
 *             count = key of site.config.json fleet{} — number shown only when filled
 *   facts     label?, title, intro?, variant? ('full'|'legal')     ("Company at a glance")
 *   locations label?, title, intro?, map? (default true)            (map + location cards from config)
 *   group     label?, title, paragraphs[], disclaimer, cta          (EURL KAYLE KENNY)
 *   faq       label?, title, intro?, items[{id, q, a}]  — or — from: pageId, ids[] (reuse items),
 *             more? {label, page}
 *   records   label?, title, intro?, regionsTitle, projectsTitle, emptyText?
 *             (lists site.config.json regions/projects only when filled)
 *   table     label?, title, intro?, caption?, head[], rows[[]]
 *   links     label?, title, intro?, items[{title, text, page}]
 *   contact   label?, title, intro?, checklistTitle, checklist[], quoteTitle, quoteText, quoteLabel,
 *             quoteMessage (prefilled WhatsApp text, \n allowed)
 *   download  title, text, label                                    (company-profile PDF)
 *   cta       title, text?, ctas[]
 *   callout   title?, text? or paragraphs[]?, list[]?, variant? ('note'|'tip'|'warning'|'key'), cta?
 *             (highlighted aside; no H2, not in the table of contents)
 *   articles  label?, title, intro?, limit?, more? {label, page}, emptyText?
 *             (cards of this language's articles, newest first; the Insights hub uses it without limit)
 *   place     label?, title, intro?, lead?, paragraphs[], list[]?, note?
 *             (location pages only: prose next to the site's address card from site.config.json)
 *
 * CTA  { label, page?, href?, kind? ('whatsapp'|'tel'|'mailto'|'pdf'|'vcard'), variant? ('primary'|'secondary') }
 */

export default {
  meta: {},

  ui: {
    skip: 'Skip to main content',
    menu: 'Menu',
    close: 'Close menu',
    servicesOverview: 'All services',
    primaryNav: 'Main navigation',
    footerNav: 'Footer navigation',
    languageLabel: 'Choose language',
    contactCta: 'Contact us',
    whatsappLabel: 'WhatsApp',
    whatsappAria: 'Message SARL ETAHG on WhatsApp',
    emailAria: 'Email SARL ETAHG',
    // Which channel the header shortcut and the contact block put first: 'whatsapp' or 'email'.
    headerChannel: 'whatsapp',
    // Optional note under the WhatsApp channel on the contact page ('' = none).
    whatsappNote: '',
    subMenuLabel: 'Show the services submenu',
    phoneLabel: 'Telephone',
    // Secondary lines from site.config.json contact.phones / contact.fax (contact page, location cards).
    phonesLabel: 'Office / quarry lines',
    phonesShort: 'Tel.',
    faxLabel: 'Fax',
    emailLabel: 'Email',
    breadcrumbLabel: 'Breadcrumb',
    readMore: 'Learn more',
    openExternal: '(opens in a new tab)',
    downloadProfile: 'Download company profile (PDF)',
    viewProfile: 'View company profile',
    printProfile: 'Print this profile',
    vcard: 'Save contact card (vCard)',
    mapLink: 'Open in Google Maps',
    illustrationPlaceholder: 'Illustration',
    whatsappMessage: 'Hello SARL ETAHG, I am contacting you from your website (page: {{page}}).',
    logoCaption: 'SARL ETAHG',
    homeLabel: 'Home',
    faqMore: 'All questions and answers',
    sectionPrefix: '',
    // Separators used by generated strings (facts panel, footer, addresses, share-image alt text).
    punct: { colon: ': ', comma: ', ', list: '; ', enum: ', ', open: ' (', close: ')' },
    // Names of working languages (shown only when site.config.json spokenLanguages is filled).
    languageNames: { ar: 'Arabic', fr: 'French', en: 'English', zh: 'Chinese' },

    footer: {
      // Also used as the schema.org Organization description, the web manifest and the vCard note.
      tagline: 'SARL ETAHG is an Algerian company specialized in fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization and water well drilling.',
      servicesTitle: 'Services',
      companyTitle: 'Company',
      contactTitle: 'Contact',
      groupTitle: 'Group',
      languagesTitle: 'Languages',
      groupText: 'Heavy-duty diesel engine spare parts, stock in Algiers.',
      copyright: '© {{year}} {{company}}. All rights reserved.',
      privacyNote: 'No cookies. No tracking.',
    },

    facts: {
      title: 'Company at a glance',
      legalName: 'Legal name',
      fullName: 'Full name',
      legalForm: 'Legal form',
      legalFormValue: 'SARL (limited liability company) under Algerian law',
      country: 'Country',
      countryValue: 'Algeria',
      registeredOffice: 'Registered office',
      address: 'Address',
      operations: 'Operating sites',
      activities: 'Activities',
      activitiesValue: 'Fine aggregate production (stone crushing), road construction, heavy equipment rental and leasing, project mobilization, water well drilling',
      languages: 'Working languages',
      languagesNote: '(website also in Simplified Chinese)',
      group: 'Group company',
      groupValue: 'EURL KAYLE KENNY: heavy-duty spare parts, Algiers',
      founded: 'Founded',
      rc: 'Trade register (RC)',
      nif: 'Tax ID (NIF / MF)',
      nis: 'Statistical ID (NIS)',
      ai: 'Article of taxation (AI)',
      fleet: 'Fleet',
      // Equipment categories only (discretion rule: no counts, brands, plates or values).
      fleetValue: 'Hydraulic excavators, bulldozers, wheel loaders, motor graders, asphalt pavers, vibratory rollers, trucks, tipper semi-trailers, bitumen distributor and bitumen tankers, quarry rock drill, truck-mounted water well drilling rig, quarry and stone crushing plant',
      capacity: 'Crushing capacity',
      capacityUnit: 'tonnes per hour',
      certifications: 'Certifications',
      phone: 'Telephone / WhatsApp',
      phones: 'Office / quarry lines',
      fax: 'Fax',
      email: 'Email',
      website: 'Website',
      hours: 'Opening hours',
      publisher: 'Publisher',
    },

    fleetLabels: {
      crushingPlants: 'Crushing plants',
      semiTrailerTrucks: 'Semi-trailer trucks',
      dumpTrucks: 'Trucks',
      bulldozers: 'Bulldozers',
      excavators: 'Excavators',
      roadPavers: 'Road pavers',
      drillingRigs: 'Water well drilling rigs',
      units: 'units',
      yearsLabel: 'Year founded',
    },

    locations: {
      types: {
        hq: 'Registered office',
        depot: 'Equipment depot',
        quarry: 'Quarry and stone crushing plant',
        parts: 'Spare parts store and depot',
      },
      details: {
        hq: 'Where SARL ETAHG is registered. Bounoura lies in the M’zab valley, in the wilaya of Ghardaïa, in the northern Algerian Sahara.',
        depot: 'Base of the heavy equipment fleet, on the High Plateaus and on the RN1, the main north–south road between Algiers and the Sahara.',
        quarry: 'The company’s own quarry, where rock is extracted and crushed into fine aggregates, near Aïn El Ibel, south of Djelfa.',
        parts: 'EURL KAYLE KENNY, the group’s spare parts company, with stock in Algiers.',
      },
      wilaya: 'Wilaya of {{region}}',
      detailsLink: 'About this site',
      geoLabel: 'GPS',
      // Optional translations of region names used in "Wilaya of …" (e.g. { Algiers: 'Alger' }).
      regionNames: {},
      map: {
        title: 'Schematic map of SARL ETAHG locations along the Algiers – Djelfa – Ghardaïa axis',
        sea: 'Mediterranean Sea',
        tell: 'Tell Atlas',
        plateaus: 'High Plateaus',
        saharanAtlas: 'Saharan Atlas',
        sahara: 'Northern Sahara',
        axis: 'RN1',
        north: 'N',
        caption: 'Schematic diagram, not to scale.',
      },
    },

    // Alt text for real photos (site.config.json "photos" slots), used only when a photo is present.
    photoAlt: {
      hero: 'SARL ETAHG heavy equipment on a construction site in Algeria',
      crusher: 'SARL ETAHG stone crushing plant producing fine aggregates',
      excavator: 'SARL ETAHG excavator at work',
      bulldozer: 'SARL ETAHG bulldozer at work',
      'semi-truck': 'SARL ETAHG semi-trailer truck',
      'dump-truck': 'SARL ETAHG truck',
      paver: 'SARL ETAHG road paver laying asphalt',
      drilling: 'SARL ETAHG water well drilling rig',
      parts: 'Heavy-duty spare parts at EURL KAYLE KENNY, Algiers',
      mobilization: 'SARL ETAHG equipment opening a new project site',
      'terrain-coastal': 'Road works in the coastal Tell region of Algeria',
      'terrain-mountain': 'Road works in the Atlas mountains of Algeria',
      'terrain-plateau': 'Road works on the High Plateaus of Algeria',
      'terrain-desert': 'Road works in the Algerian Sahara',
    },

    records: {
      region: 'Region',
      project: 'Project',
      year: 'Year',
      client: 'Client',
      scope: 'Scope',
    },

    // Insights articles: byline, table of contents, previous / next (dates formatted per language).
    article: {
      by: 'By',
      updated: 'Updated',
      readingTime: '{{min}} min read',
      toc: 'In this article',
      related: 'Related services',
      prev: 'Previous article',
      next: 'Next article',
      all: 'All insights',
      navLabel: 'More articles',
    },

    notFound: {
      title: 'Page not found | ETAHG',
      heading: 'This page could not be found',
      text: 'The address may be mistyped or the page may have moved. Use the links below to continue.',
      home: 'Go to the home page',
    },

    og: {
      tagline: 'Aggregates · Roads · Heavy equipment · Algeria',
      line: 'Fine aggregate production, road construction, equipment rental, project mobilization and water well drilling.',
    },
  },

  pages: {
    /* ------------------------------------------------------------------ HOME */
    home: {
      slug: '',
      nav: 'Home',
      title: 'SARL ETAHG | Aggregates, Roads & Rental, Ghardaïa · Djelfa',
      description: 'SARL ETAHG (Ghardaïa, Djelfa), established in 1997: fine aggregates, road construction, equipment rental, site mobilization and water wells in Algeria.',
      summary: 'Overview of SARL ETAHG, an Algerian company specialized in fine aggregates, road construction, equipment rental and leasing, mobilization and water wells.',
      blocks: [
        {
          type: 'hero',
          size: 'home',
          eyebrow: 'Algerian heavy-works company',
          title: 'SARL ETAHG: fine aggregates, heavy equipment and road construction in Algeria',
          lead: 'SARL ETAHG is an Algerian company specialized in fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization and water well drilling. Established in 1997, it is a local partner for international contractors that owns its machines, quarries and crushes its own aggregates and knows the ground.',
          points: [
            'Own quarry and stone crushing plant: fine aggregates for high production rates',
            'Own road-building fleet: excavators, bulldozers, loaders, graders, rollers, pavers, bitumen trucks and haulage',
            'Equipment depot in Djelfa on the RN1 axis, registered office in Ghardaïa, parts in Algiers',
          ],
          ctas: [
            { label: 'Partner with us', page: 'partners', variant: 'primary' },
            { label: 'Rent equipment', page: 'rental', variant: 'secondary' },
          ],
          illustration: 'hero-terrain',
        },
        {
          type: 'pillars',
          stats: true,
          items: [
            { title: 'Fine aggregates', text: 'Crushed fine aggregates from our own quarry and crushing plant, suited to high production rates.' },
            { title: 'Road construction', text: 'Earthworks, grading, compaction, bitumen spraying and asphalt paving with our own fleet.' },
            { title: 'Equipment rental', text: 'Excavators, bulldozers, loaders, graders, rollers, pavers and trucks for rent or lease.' },
            { title: 'Site mobilization', text: 'Opening new sites: clearing, access tracks, platforms, earthworks and aggregate supply.' },
            { title: 'Water wells', text: 'Our own rigs can drill water wells for sites, farms, industry and communities.' },
          ],
        },
        {
          type: 'split',
          label: 'Company',
          title: 'A heavy‑works partner between the north and the south of Algeria',
          paragraphs: [
            '{{company}} is an Algerian limited liability company (SARL) established in 1997, with its registered office in **Bounoura, wilaya of Ghardaïa**, in the M’zab valley of the northern Sahara. Its heavy equipment is based in **Djelfa**, on the High Plateaus and on the RN1, the main north–south road linking Algiers to the Sahara. Its own quarry and stone crushing plant is at **Oued Sdeur, near Aïn El Ibel**, south of Djelfa, and its group spare-parts company, EURL KAYLE KENNY, is in Algiers.',
            'The company’s fleet of excavators, bulldozers, wheel loaders, motor graders, rollers, asphalt pavers, bitumen trucks, trucks and semi-trailers was assembled mainly to build roads, and ETAHG has completed road projects in many regions of Algeria. That work gave our teams a practical understanding of the country’s terrains and of what it takes to keep machines productive on them. Today the same fleet, aggregate production and site experience are available to project owners and contractors through supply, rental, leasing and subcontracting.',
          ],
          ctas: [{ label: 'About the company', page: 'about', variant: 'secondary' }],
          illustration: 'semi-truck',
        },
        {
          type: 'cards',
          label: 'Services',
          title: 'What we do',
          intro: 'Five services delivered with our own plant and machines, plus spare parts through our group company, so that one partner can cover materials, equipment and site work on the same project.',
          style: 'services',
          items: [
            { page: 'aggregates', illustration: 'crusher', title: 'Aggregate production', text: 'High-quality crushed fine aggregates (manufactured sand) from our own quarry and plant south of Djelfa, for concrete, asphalt and road layers, especially where high production rates are required.' },
            { page: 'roads', illustration: 'paver', title: 'Road construction', text: 'Our original activity: earthworks, grading, compaction, base courses, bitumen spraying and asphalt paving, with our own complete road-building fleet.' },
            { page: 'rental', illustration: 'excavator', title: 'Equipment rental and leasing', text: 'Excavators, bulldozers, loaders, graders, rollers, pavers, trucks and semi-trailers for a phase of work or a whole project, on terms agreed per project.' },
            { page: 'mobilization', illustration: 'mobilization', title: 'Project mobilization', text: 'Project initialization: machines on site, clearing, access tracks, platforms, first earthworks and aggregate supply, so the main works can start.' },
            { page: 'drilling', illustration: 'drill-rig', title: 'Water well drilling', text: 'Our own drilling rigs can drill water wells for construction sites, agriculture, industry and communities.' },
            { page: 'parts', illustration: 'spare-parts', title: 'Spare parts (EURL KAYLE KENNY)', text: 'Our group company supplies heavy-duty diesel engine parts from its store and depot in Algiers.' },
          ],
        },
        {
          type: 'features',
          label: 'International partners',
          title: 'Why ETAHG is a practical local partner',
          intro: 'An international contractor, supplier or investor starting a project in Algeria needs a local company that already owns equipment, produces materials and knows the ground. That is the core of what ETAHG offers.',
          items: [
            { title: 'Equipment we own', text: 'Excavators, bulldozers, loaders, graders, rollers, pavers, bitumen trucks, haulage and a drilling rig from our own fleet, dispatched from our Djelfa depot.' },
            { title: 'Materials at the source', text: 'Our own quarry feeds our crushing plant, so the rock and the fine aggregates stay under one company’s control and a project can secure a local supply from the start.' },
            { title: 'Central position', text: 'Based in Djelfa and Ghardaïa, on the RN1 axis between Algiers and the Sahara, we are positioned to serve projects in the north and in the south.' },
            { title: 'Terrain experience', text: 'Road projects in many regions of Algeria have given us practical knowledge of the ground, the materials and the working conditions.' },
            { title: 'One partner, several scopes', text: 'Aggregates, equipment, earthworks, roads and water wells can be combined in one agreement, with one point of contact.' },
            { title: 'Parts support in the group', text: 'EURL KAYLE KENNY, our group company in Algiers, supplies heavy-duty spare parts that help keep machines working.' },
          ],
        },
        {
          type: 'steps',
          label: 'Mobilization',
          title: 'How we mobilize a new project',
          intro: 'The start of a site is where time is won or lost. Our mobilization follows a clear sequence, adapted to each project and agreed with the client.',
          items: [
            { title: 'Scope and site review', text: 'We study the location, access, terrain, volumes and schedule with you, and identify what must be ready on day one.' },
            { title: 'Equipment and resource plan', text: 'We select the machines, operators and supplies the scope requires and agree the terms of mobilization.' },
            { title: 'Transport to site', text: 'Heavy equipment is moved by semi-trailer from our Djelfa depot or directly from another site.' },
            { title: 'Site opening', text: 'Clearing, access tracks, platforms and first earthworks, so that the main works can begin.' },
            { title: 'Materials and water', text: 'Aggregate supply is organized and, where the site has no water, a well can be drilled.' },
            { title: 'Production and follow-up', text: 'Machines work to plan, with parts support from the group, until the site is handed over or our work continues under rental or subcontract.' },
          ],
        },
        {
          type: 'terrain',
          label: 'Terrain',
          title: 'Know-how across Algeria’s terrains',
          intro: 'Algeria stretches from the Mediterranean coast to the heart of the Sahara, and each landscape changes how roads are built, how machines are used and how water is found. ETAHG has built roads in many regions of the country and knows the terrain of those regions.',
          items: [
            { illustration: 'terrain-coastal', title: 'Coastal Tell', text: 'Plains and hills near the Mediterranean, with clay soils, higher rainfall and dense traffic. Drainage and subgrade preparation decide the result.', points: ['Drainage and soil treatment', 'Work alongside live traffic'] },
            { illustration: 'terrain-mountain', title: 'Atlas mountains', text: 'Steep alignments, rock cuts and tight bends. Excavation, embankments and slope work demand powerful, well-handled machines.', points: ['Cut and fill in rock', 'Heavy dozing and excavation'] },
            { illustration: 'terrain-plateau', title: 'High Plateaus', text: 'Open steppe with long straight alignments, cold winters and hot summers. Productivity and a steady aggregate supply set the pace.', points: ['Long linear works', 'High aggregate demand'] },
            { illustration: 'terrain-desert', title: 'Sahara', text: 'Sand, heat and long distances. Machines, crews and supply lines must be planned for self-sufficiency, and water is a project in itself.', points: ['Sand and dune conditions', 'Water well drilling'] },
          ],
        },
        {
          type: 'locations',
          label: 'Locations',
          title: 'Our operating footprint',
          intro: 'Four sites along the Algiers – Djelfa – Ghardaïa corridor link the Mediterranean north with the Sahara: fleet and aggregate production on the High Plateaus, the registered office in the northern Sahara and spare parts in the capital.',
        },
        {
          type: 'group',
          label: 'Group',
          title: 'EURL KAYLE KENNY: spare parts within the group',
          paragraphs: [
            'EURL KAYLE KENNY is part of the {{company}} portfolio. From its store and parts depot in Mohammadia, Algiers, it supplies heavy-duty diesel engine spare parts, including Cummins-compatible parts, to fleets and workshops.',
            'For our clients and partners, a parts company inside the group is a local source for heavy-duty engine parts.',
          ],
          disclaimer: 'EURL KAYLE KENNY is an independent supplier, not affiliated with or endorsed by Cummins Inc.',
          cta: { label: 'Visit kaylekenny.com', href: 'https://www.kaylekenny.com' },
          illustration: 'bulldozer',
        },
        {
          type: 'facts',
          label: 'Profile',
          title: 'Company at a glance',
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Frequently asked questions',
          from: 'faq',
          ids: ['what-is-etahg', 'what-does-etahg-do', 'where', 'foreign-companies', 'rental-terms'],
          more: { label: 'All questions and answers', page: 'faq' },
        },
        {
          type: 'cta',
          title: 'Planning a project in Algeria?',
          text: 'Tell us where, what and when. We will reply with the equipment, materials and mobilization plan we can offer.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
            { label: 'Download company profile (PDF)', kind: 'pdf', variant: 'ghost' },
          ],
        },
      ],
    },

    /* -------------------------------------------------------------- SERVICES */
    services: {
      slug: 'services',
      nav: 'Services',
      title: 'Civil Works Services, Djelfa & Ghardaïa, Algeria | ETAHG',
      description: 'SARL ETAHG services from Djelfa and Ghardaïa, Algeria: crushed fine aggregates, road construction, equipment rental, site mobilization and water wells.',
      summary: 'Overview of the services of SARL ETAHG and how they combine on one project.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Services',
          title: 'One civil works partner in Algeria: five services and group parts support',
          lead: '{{company}} combines material production, a heavy equipment fleet and road-building experience. Each service can be contracted on its own or combined with others in one agreement, with a single point of contact from the first study to the end of the works.',
          illustration: 'dump-truck',
        },
        {
          type: 'cards',
          label: 'Overview',
          title: 'Our services',
          style: 'services',
          items: [
            { page: 'aggregates', illustration: 'crusher', title: 'Aggregate production', text: 'Our own quarry and stone crushing plant at Oued Sdeur, near Aïn El Ibel south of Djelfa, producing high-quality fine aggregates, particularly suited to projects that need high production rates.' },
            { page: 'roads', illustration: 'paver', title: 'Road construction', text: 'Our original activity: roads built with our own fleet in many regions of Algeria, from earthworks and granular layers to asphalt surfacing.' },
            { page: 'rental', illustration: 'excavator', title: 'Equipment rental and leasing', text: 'The fleet that built our roads, available to other contractors for a phase of work or for a whole project, on terms agreed per project.' },
            { page: 'mobilization', illustration: 'mobilization', title: 'Project mobilization', text: 'Project initialization: we bring machines and operators to open a new site, build access and platforms, and prepare it for the main works.' },
            { page: 'drilling', illustration: 'drill-rig', title: 'Water well drilling', text: 'Our own drilling rigs can drill water wells for construction sites, agriculture, industry and communities.' },
            { page: 'parts', illustration: 'spare-parts', title: 'Spare parts', text: 'Heavy-duty diesel engine parts through our group company EURL KAYLE KENNY, with stock in Algiers.' },
          ],
        },
        {
          type: 'prose',
          label: 'Approach',
          title: 'One company, several scopes',
          paragraphs: [
            'Large projects in Algeria depend on a few critical inputs: a reliable supply of aggregates, the right heavy machines at the right time, a site that is opened properly and, in dry regions, water. When each input comes from a different supplier, the project owner or main contractor spends time coordinating them, and every interface is a risk to the schedule. {{company}} can provide these inputs together.',
            'A typical combination for a new infrastructure project is: we mobilize equipment and open the site, produce the fine aggregates the works require, supply trucks and earthmoving machines for the main works, carry out earthworks or paving as a subcontractor and, where the site has no water, drill a well. Spare parts for heavy-duty engines are supported through our group company EURL KAYLE KENNY.',
            'Every engagement starts with a conversation about location, scope, volumes and schedule. Terms such as duration, operators, transport and maintenance are agreed per project and written into the contract.',
          ],
        },
        {
          type: 'table',
          label: 'Summary',
          title: 'Services at a glance',
          caption: 'Services of SARL ETAHG, what they cover and who typically uses them',
          head: ['Service', 'What it covers', 'Main equipment', 'Typical clients'],
          rows: [
            ['[Aggregate production](page:aggregates)', 'Crushing and screening of stone into fine aggregates, with delivery by truck', 'Quarry rock drill, crushing and grinding machines, loaders, trucks', 'Concrete and precast producers, asphalt plants, road contractors'],
            ['[Road construction](page:roads)', 'Earthworks, subgrade, sub-base and base courses, asphalt surfacing', 'Excavators, bulldozers, graders, rollers, bitumen distributor and tankers, pavers, trucks', 'Public and private project owners, main contractors'],
            ['[Equipment rental and leasing](page:rental)', 'Machines for a phase of work or a whole project', 'Excavators, bulldozers, loaders, graders, rollers, pavers, trucks, semi-trailers', 'Contractors, EPC companies, industrial projects'],
            ['[Project mobilization](page:mobilization)', 'Equipment on site, clearing, access tracks, platforms, first earthworks, supply set-up', 'Bulldozers, excavators, loaders, graders, trucks, semi-trailers', 'International contractors starting in Algeria, project owners'],
            ['[Water well drilling](page:drilling)', 'Drilling of water wells for site, farm, industrial and community use', 'Truck-mounted water well drilling rig', 'Construction sites, agriculture, industry, communities'],
            ['[Spare parts](page:parts)', 'Heavy-duty diesel engine parts (EURL KAYLE KENNY)', 'Parts store and depot in Algiers', 'Fleet owners, workshops'],
          ],
        },
        {
          type: 'features',
          label: 'Combinations',
          title: 'Typical combinations',
          intro: 'Examples of how services are grouped for common project situations. Each scope is defined with the client.',
          items: [
            { title: 'New road project', text: 'Mobilization and earthworks, aggregate supply from our quarry, then grading, compaction, bitumen spraying and paving with our own fleet, planned as one sequence.' },
            { title: 'New industrial or energy site', text: 'Site opening, access road and platforms, a water well for construction needs, and equipment rental for the main works.' },
            { title: 'Contractor facing a peak of work', text: 'Additional trucks, excavators, loaders, graders or rollers on rental, with transport to site and parts support from the group.' },
            { title: 'Concrete or asphalt production', text: 'A scheduled supply of crushed fine aggregates, delivered by our trucks to the plant or the site.' },
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about our services',
          from: 'faq',
          ids: ['services-list', 'regions', 'subcontract'],
          more: { label: 'All questions and answers', page: 'faq' },
        },
        {
          type: 'cta',
          title: 'Need several services on one project?',
          text: 'Send us the location, scope and schedule. We will propose a combined solution.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'For international partners', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ AGGREGATES */
    aggregates: {
      slug: 'services/aggregate-production',
      nav: 'Aggregate production',
      title: 'Fine Aggregates & Crushing Plant, Djelfa, Algeria | ETAHG',
      description: 'Crushed fine aggregates (manufactured sand) from SARL ETAHG’s plant near Djelfa, Algeria, for concrete, asphalt and roads at high production rates.',
      summary: 'High-quality crushed fine aggregates from SARL ETAHG’s own quarry and stone crushing plant at Oued Sdeur, near Aïn El Ibel (Djelfa), suited to high production rates.',
      service: { name: 'Fine aggregate production and supply', serviceType: 'Crushed fine aggregate (manufactured sand) production' },
      whatsapp: 'Hello SARL ETAHG, I would like information on fine aggregate supply (location, use, quantities, schedule).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Aggregate production',
          title: 'Crushed fine aggregates from our own quarry and crushing plant in Djelfa, for high-volume projects',
          lead: '{{company}} produces high-quality crushed fine aggregates, also called manufactured sand, at its own quarry and stone crushing plant, Carrière Djellal El Gharbi, at Oued Sdeur near Aïn El Ibel, south of Djelfa. The company extracts the rock itself, with its own drilling and loading equipment, and crushes it on the same site, so it controls the raw material as well as the process. The plant’s crushing and grinding machines are especially suited to projects that require high production rates, such as road programmes, concrete production and large infrastructure sites.',
          ctas: [
            { label: 'Request aggregate supply', kind: 'whatsapp', variant: 'primary' },
            { label: 'Contact us', page: 'contact', variant: 'secondary' },
          ],
          illustration: 'crusher',
        },
        {
          type: 'split',
          label: 'Product',
          title: 'What fine aggregates are and where they are used',
          paragraphs: [
            'Fine aggregates are the sand-sized part of a granular material: particles small enough to pass a sieve of a few millimetres, commonly 4 mm in European notation. In concrete they fill the spaces between the coarse aggregates and combine with the cement paste; in asphalt they give the mix a dense, stable structure; in road layers they complete the grading so that the material compacts well.',
            'Crushed fine aggregate is made by breaking quarried rock in successive stages and separating the product by size. Because it comes from a known rock source and a controlled process, it can be produced to a consistent grading and in the volumes a large project needs, instead of depending on the uneven supply of natural sand.',
          ],
          list: [
            'Structural and ready-mix concrete',
            'Precast concrete elements such as blocks, kerbs and pipes',
            'Asphalt mixes and surface dressings',
            'Granular sub-base and base layers of roads and platforms',
            'Mortars, renders and general building works',
          ],
          illustration: 'dump-truck',
        },
        {
          type: 'prose',
          label: 'Crushed sand',
          title: 'Crushed sand and natural sand in Algeria',
          paragraphs: [
            'Natural sand in Algeria comes mainly from riverbeds, where extraction is restricted to protect watercourses, or from the dunes of the Sahara. Dune sand is abundant but very fine, rounded and uniform in size. Used alone, it tends to raise the water demand of concrete and to reduce the stability of asphalt mixes.',
            'Crushed sand has angular particles and a wider range of sizes. Engineers use it on its own or blended with natural sand to reach the grading their specification requires. For a project owner, a dependable local source of crushed fine aggregate reduces the risk that concrete or asphalt production stops for lack of sand.',
          ],
        },
        {
          type: 'steps',
          label: 'Process',
          title: 'How a high-output crushing and screening circuit works',
          intro: 'A stone crushing plant is a chain of machines linked by conveyors. Each crushing stage reduces the rock and each screen sorts it, until the product has the required size. The stages below describe the general principle of such a circuit.',
          items: [
            { title: 'Feeding', text: 'Rock is loaded into a hopper and fed at a steady rate, usually through a vibrating feeder that also removes soil and fine debris before crushing.' },
            { title: 'Primary crushing', text: 'A primary crusher, typically a jaw crusher, breaks the large blocks into pieces that the following stages can handle.' },
            { title: 'Secondary crushing', text: 'Cone or impact crushers reduce the material further and begin to shape the particles.' },
            { title: 'Fine crushing and grinding', text: 'Further crushing and grinding produce the sand fraction and give the grains a compact, cubical shape.' },
            { title: 'Screening', text: 'Vibrating screens separate the products by size. Oversize returns to the crushers in a closed circuit, and excess fines can be removed to keep the sand clean.' },
            { title: 'Stockpiling and loading', text: 'Finished fractions are stockpiled separately, protected from contamination, and loaded onto trucks for delivery.' },
          ],
        },
        {
          type: 'features',
          label: 'Quality',
          title: 'Quality focus areas for fine aggregates',
          intro: 'The performance of a fine aggregate depends on a few measurable properties. These are the parameters buyers usually specify; the tests required for each supply are agreed with the client.',
          items: [
            { title: 'Grading', text: 'The distribution of particle sizes, checked by sieve analysis. A continuous, stable grading makes concrete and asphalt easier to design and to reproduce.' },
            { title: 'Cleanliness', text: 'The quantity and nature of the fines, usually assessed with the sand equivalent and methylene blue tests. Clay fines raise water demand and weaken the bond with the binder.' },
            { title: 'Particle shape', text: 'Compact, cubical grains pack and compact better than flat or elongated ones. Shape depends mainly on the crushing stages and on how they are fed.' },
            { title: 'Consistency', text: 'The same product from one delivery to the next, which depends on separate stockpiles for each fraction and on checks during production.' },
            { title: 'Parent rock', text: 'The hardness and durability of the rock, measured on coarse fractions by tests such as Los Angeles and Micro-Deval, determine where a material can be used in a road.' },
            { title: 'Documented supply', text: 'The tests required for a project, and the laboratory that performs them, are agreed with the client before supply starts.' },
          ],
        },
        {
          type: 'pillars',
          label: 'Strengths',
          title: 'Built for high production rates',
          stats: true,
          items: [
            { title: 'Own quarry', text: 'Rock is extracted at our own quarry and fed to our crusher on the same site, so the raw material is under our control.' },
            { title: 'Output for large projects', text: 'Crushing and grinding machines suited to projects where high daily volumes of fine aggregate are required.' },
            { title: 'On the main corridor', text: 'The quarry at Oued Sdeur, near Aïn El Ibel, lies south of Djelfa, a city on the RN1 north–south axis, so material can move toward sites in the north and in the south.' },
            { title: 'Own haulage', text: 'Our trucks and semi-trailer trucks can deliver to site, so production and transport are planned together.' },
            { title: 'Supply and works together', text: 'The same company can supply aggregates, earthmoving machines and paving, which simplifies coordination.' },
          ],
        },
        {
          type: 'prose',
          label: 'Proximity',
          title: 'Why nearby production matters for high-volume projects',
          paragraphs: [
            'Aggregates are heavy, bulk materials. On large projects, transport can account for a large share of their delivered cost, and every extra kilometre of haulage adds trucks, fuel and wear on the roads used. Producing fine aggregate close to where it is used keeps delivered cost and truck traffic down and shortens the supply chain.',
            'Security of supply matters as much as price. A concrete or asphalt plant that runs out of sand stops, and so does the paving train behind it. Agreeing production and delivery schedules with a producer that controls its own plant and trucks reduces that risk for the whole project.',
          ],
        },
        {
          type: 'prose',
          label: 'Quotation',
          title: 'What to send for an aggregate quotation',
          lead: 'A precise request gets a precise answer. Please include:',
          list: [
            'Project location (wilaya, nearest town) and delivery point',
            'Intended use: concrete, precast, asphalt, road layers or other',
            'Required fractions and specification, if already defined',
            'Total quantity and expected daily or monthly call-off',
            'Supply period and start date',
            'Delivery to site or collection at the plant',
          ],
          note: 'Fractions, prices and delivery schedules are confirmed in a written offer for each project.',
        },
        {
          type: 'links',
          label: 'Related services',
          title: 'Aggregates within a complete project',
          intro: 'Aggregate supply is often one part of a larger scope. ETAHG can combine it with:',
          items: [
            { title: 'Road construction', text: 'Earthworks, granular layers and asphalt surfacing using our own aggregates and fleet.', page: 'roads' },
            { title: 'Project mobilization', text: 'Opening a new site, with aggregate supply organized from the start.', page: 'mobilization' },
            { title: 'Equipment rental', text: 'Trucks and earthmoving machines for the main works.', page: 'rental' },
            { title: 'International partners', text: 'How foreign contractors can secure local material supply through ETAHG.', page: 'partners' },
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about aggregate supply',
          items: [
            { id: 'agg-where', q: 'Where is the SARL ETAHG quarry and crushing plant?', a: 'The SARL ETAHG quarry and stone crushing plant, Carrière Djellal El Gharbi, is at Oued Sdeur, near Aïn El Ibel, south of the city of Djelfa, in the wilaya of Djelfa. The company extracts the rock at its own quarry and crushes it on site. Djelfa lies on the RN1, the main north–south road between Algiers and the Sahara.' },
            { id: 'agg-volume', q: 'Can ETAHG supply large volumes of fine aggregates?', a: 'Yes. SARL ETAHG’s crushing and grinding machines are especially suited to projects that require high production rates. Volumes, fractions and delivery schedules are agreed per project in a written offer.' },
            { id: 'agg-what', q: 'What is manufactured sand?', a: 'Manufactured sand is fine aggregate produced by crushing rock instead of extracting it from rivers or dunes, and it is what SARL ETAHG produces at its own quarry and plant at Oued Sdeur, south of Djelfa. Its angular particles and controlled grading make it suitable for concrete, asphalt and road layers, alone or blended with natural sand.' },
            { id: 'agg-uses', q: 'Can ETAHG’s fine aggregates be used for concrete and asphalt?', a: 'The high-quality fine aggregates produced by SARL ETAHG are intended for concrete, precast elements, asphalt mixes and road layers. Suitability for a specific mix is confirmed against the project specification before supply starts.' },
            { id: 'agg-fractions', q: 'Which aggregate sizes does ETAHG produce?', a: 'SARL ETAHG specializes in fine aggregates, the sand-sized fractions used in concrete, asphalt and road layers. The exact fractions available for a project are confirmed in the quotation.' },
            { id: 'agg-testing', q: 'Can we test the aggregates before ordering?', a: 'SARL ETAHG agrees the required tests with each client before supply starts, such as grading, sand equivalent and methylene blue value. Sampling for testing can be discussed once the project details are known.' },
            { id: 'agg-delivery', q: 'Does ETAHG deliver aggregates to the site?', a: 'Yes. SARL ETAHG can deliver aggregates with its own trucks and semi-trailer trucks. Transport conditions are agreed with each client according to distance, volumes and call-off schedule.' },
          ],
        },
        {
          type: 'cta',
          title: 'Secure your aggregate supply',
          text: 'Tell us the project location, the use, the quantities and the period of supply.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------------- RENTAL */
    rental: {
      slug: 'services/equipment-rental',
      nav: 'Equipment rental',
      title: 'Excavator, Bulldozer & Grader Rental in Algeria | ETAHG',
      description: 'Rent or lease heavy equipment in Algeria from SARL ETAHG: excavators, bulldozers, loaders, graders, rollers, pavers and trucks, terms agreed per project.',
      summary: 'Rental and leasing of SARL ETAHG’s own heavy equipment fleet in Algeria, dispatched from Djelfa.',
      service: { name: 'Heavy equipment rental and leasing', serviceType: 'Heavy equipment rental' },
      whatsapp: 'Hello SARL ETAHG, I would like to rent heavy equipment (machines, location, start date, duration).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Equipment rental and leasing',
          title: 'Excavators, bulldozers, graders, rollers and pavers for rent and lease from our Djelfa depot',
          lead: '{{company}} rents and leases its own heavy equipment to contractors and project owners in Algeria: hydraulic excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, asphalt pavers, bitumen trucks, trucks and semi-trailers. The machines were assembled to build roads and are dispatched from our equipment depot in Djelfa, on the RN1 axis. Duration, operators, transport and maintenance are agreed for each project.',
          ctas: [
            { label: 'Request equipment', kind: 'whatsapp', variant: 'primary' },
            { label: 'See the fleet', page: 'fleet', variant: 'secondary' },
          ],
          illustration: 'excavator',
        },
        {
          type: 'equipment',
          label: 'Machines',
          title: 'Equipment available for rent and lease',
          intro: 'Machines are available individually or as a group for a defined scope of work, such as earthworks or paving.',
          items: [
            { illustration: 'semi-truck', title: 'Tipper semi-trailers', text: 'Tractor units with tipper semi-trailers for bulk haulage of aggregates, fill and materials over longer distances.', uses: ['Bulk haulage', 'Long-distance haulage', 'Material supply'], count: 'semiTrailerTrucks' },
            { illustration: 'dump-truck', title: 'Trucks', text: 'Trucks for moving aggregates, fill and excavated material on site and between sites, the everyday workhorses of earthworks and road building.', uses: ['Earthworks haulage', 'Aggregate delivery', 'Spoil removal'], count: 'dumpTrucks' },
            { illustration: 'bulldozer', title: 'Bulldozers', text: 'Dozers for clearing vegetation and debris, pushing and spreading fill, shaping platforms and embankments, and opening tracks.', uses: ['Site clearing', 'Platforms and embankments', 'Access tracks'], count: 'bulldozers' },
            { illustration: 'excavator', title: 'Hydraulic excavators', text: 'Excavators for bulk digging, trenching, loading trucks, shaping ditches and working in hard ground.', uses: ['Excavation and trenching', 'Truck loading', 'Drainage ditches'], count: 'excavators' },
            { illustration: 'bulldozer', title: 'Wheel loaders', text: 'Loaders for loading trucks, handling aggregates at stockpiles and plants, and general materials handling on site.', uses: ['Truck loading', 'Stockpile handling', 'Site clean-up'] },
            { illustration: 'bulldozer', title: 'Motor graders', text: 'Graders for spreading and shaping granular layers to line and profile, forming cross-falls and maintaining tracks and haul roads.', uses: ['Layer shaping', 'Profiling', 'Track maintenance'] },
            { illustration: 'paver', title: 'Vibratory rollers', text: 'Vibratory compactors for subgrade, granular layers and asphalt, to reach the density a pavement needs.', uses: ['Subgrade compaction', 'Granular layers', 'Asphalt compaction'] },
            { illustration: 'dump-truck', title: 'Bitumen distributor and tankers', text: 'A bitumen distributor (spreader) truck for prime coats, tack coats and surface dressings, supplied by bitumen tankers.', uses: ['Prime and tack coats', 'Surface dressing', 'Bitumen supply'] },
            { illustration: 'paver', title: 'Asphalt pavers', text: 'Pavers that lay asphalt and other pavement materials in a uniform layer, to the required width, thickness and level.', uses: ['Asphalt paving', 'Road rehabilitation', 'Platforms and yards'], count: 'roadPavers' },
          ],
        },
        {
          type: 'prose',
          label: 'Rental or leasing',
          title: 'Rental and leasing: what the difference means here',
          paragraphs: [
            '**Rental** covers a defined phase of work: a few machines to absorb a peak, to replace a unit under repair or to carry out one scope such as clearing or paving. **Leasing**, in ETAHG’s offer, is a longer-term arrangement in which machines stay assigned to one project, often for its whole duration.',
            'Both are agreements made directly with ETAHG as the owner of the equipment. They should not be confused with bank equipment leasing (crédit-bail), which is a financing product: ETAHG’s leasing is not financing, it is the longer-term provision of its own machines.',
          ],
        },
        {
          type: 'features',
          label: 'Terms',
          title: 'Terms agreed per project',
          intro: 'No two sites are alike, so we do not publish fixed rental conditions. The following points are discussed and written into each contract.',
          items: [
            { title: 'Duration', text: 'Short-term rental for a phase of work or longer-term leasing for the life of a project.' },
            { title: 'Operators', text: 'Whether machines are supplied with operators, depending on the project and on the client’s own teams.' },
            { title: 'Transport', text: 'Mobilization and demobilization of the machines, and whether and on what terms they are moved by our own semi-trailer trucks.' },
            { title: 'Maintenance and repairs', text: 'Who services the machines and who handles repairs, with parts support available through our group company.' },
            { title: 'Fuel and consumables', text: 'Who supplies fuel, lubricants and wear parts during the rental.' },
            { title: 'Site conditions', text: 'Working hours, access, security, insurance and the responsibilities of each party on site.' },
          ],
        },
        {
          type: 'steps',
          label: 'Process',
          title: 'How a rental works',
          items: [
            { title: 'Request', text: 'You send the machine types, the project location, the start date, the expected duration and the scope of work.' },
            { title: 'Availability and proposal', text: 'We confirm which machines are available and send a proposal with the terms.' },
            { title: 'Contract', text: 'Duration, operators, transport, maintenance and responsibilities are written into the rental or lease agreement.' },
            { title: 'Mobilization', text: 'The machines are delivered to site as agreed in the contract.' },
            { title: 'Work and support', text: 'The machines work on your project; parts for heavy-duty engines are supported through EURL KAYLE KENNY in Algiers.' },
            { title: 'Return', text: 'At the end of the agreement the machines are demobilized as agreed.' },
          ],
        },
        {
          type: 'prose',
          label: 'Why rent from ETAHG',
          title: 'Why rent from a contractor rather than a rental agency',
          paragraphs: [
            'Our machines were acquired for our own road projects, not for a rental catalogue. They are sized for heavy works in Algeria and managed by a company that uses them on its own projects. See [our fleet](page:fleet) for the equipment categories.',
            'For a foreign contractor starting a project, renting locally avoids the cost and lead time of importing equipment for the first phase and leaves time to decide what to bring in. For an Algerian company, it adds capacity for a peak of work without buying machines. In both cases, the terms are agreed directly with {{company}}, the company that owns the machines.',
          ],
        },
        {
          type: 'prose',
          label: 'Quotation',
          title: 'What to include in a rental request',
          list: [
            'Machine types and number of each',
            'Project location and site access conditions',
            'Start date and expected duration',
            'Scope of work and working hours',
            'Whether you need operators',
            'Transport requirements to and from the site',
          ],
          note: 'Availability is confirmed in writing for each request.',
        },
        {
          type: 'links',
          label: 'Related services',
          title: 'Rental combined with other services',
          intro: 'Rented machines often form part of a larger scope. See also:',
          items: [
            { title: 'Project mobilization', text: 'We move the machines to a new site and open it before the main works.', page: 'mobilization' },
            { title: 'Road construction', text: 'Earthworks, granular layers or paving carried out by ETAHG as a subcontractor.', page: 'roads' },
            { title: 'Our fleet', text: 'All equipment categories, from crushing plants to drilling rigs.', page: 'fleet' },
            { title: 'Spare parts', text: 'Heavy-duty engine parts through EURL KAYLE KENNY in Algiers.', page: 'parts' },
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about equipment rental',
          items: [
            { id: 'rent-what', q: 'Does ETAHG rent heavy equipment in Algeria?', a: 'Yes. SARL ETAHG rents and leases its own heavy equipment in Algeria: hydraulic excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, asphalt pavers, bitumen trucks, trucks and semi-trailers. The machines are dispatched from its depot in Djelfa, and terms are agreed per project.' },
            { id: 'rent-operators', q: 'Are operators included in the rental?', a: 'SARL ETAHG agrees per project whether machines are supplied with operators, together with duration, transport and maintenance, and writes these terms into the contract.' },
            { id: 'rent-lease', q: 'Does ETAHG offer long-term equipment leasing?', a: 'Yes. Besides rental for a phase of work, SARL ETAHG leases machines for longer periods, for example for the duration of a project. This is a direct arrangement with ETAHG as owner, not a bank financing product.' },
            { id: 'rent-where', q: 'Where can ETAHG equipment be used?', a: 'SARL ETAHG’s fleet is based at its equipment depot in Djelfa, on the RN1 north–south axis, and has built roads in many regions of Algeria. Availability for a given location is confirmed when you send your project details.' },
            { id: 'rent-transport', q: 'Can ETAHG transport the machines to our site?', a: 'SARL ETAHG operates trucks and tipper semi-trailers. How the machines are transported to and from your site, and on what terms, is agreed per project.' },
            { id: 'rent-breakdown', q: 'What happens if a rented machine breaks down?', a: 'With SARL ETAHG, responsibilities for maintenance and repairs are agreed in the contract before the rental starts. Its group company EURL KAYLE KENNY supplies heavy-duty diesel engine parts from Algiers, which supports the availability of the fleet.' },
          ],
        },
        {
          type: 'cta',
          title: 'Tell us what you need',
          text: 'Machines, location, start date and duration: that is enough for a first answer.',
          ctas: [
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'primary' },
            { label: 'Contact us', page: 'contact', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ---------------------------------------------------------- MOBILIZATION */
    mobilization: {
      slug: 'services/project-mobilization',
      nav: 'Project mobilization',
      title: 'Site Mobilization & Earthworks in Algeria | ETAHG',
      description: 'SARL ETAHG starts up projects in Algeria: equipment mobilization, site clearing, access tracks, platforms, earthworks, aggregate supply and water wells.',
      summary: 'Project initialization and site start-up in Algeria with SARL ETAHG’s own heavy equipment.',
      service: { name: 'Project mobilization and site start-up', serviceType: 'Construction site mobilization' },
      whatsapp: 'Hello SARL ETAHG, we are preparing a new project and would like to discuss site mobilization (location, start date, scope).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Project mobilization',
          title: 'Project mobilization: opening new sites with our own machines',
          lead: '{{company}} mobilizes heavy equipment to start up new projects in Algeria (project initialization). We move machines to the location, clear and open the site, build access tracks and platforms, carry out the first earthworks, set up aggregate supply and, where there is no water, drill a well, so that the main works can begin on schedule.',
          ctas: [
            { label: 'Discuss your project', kind: 'whatsapp', variant: 'primary' },
            { label: 'International partners', page: 'partners', variant: 'secondary' },
          ],
          illustration: 'mobilization',
        },
        {
          type: 'split',
          label: 'Scope',
          title: 'What project initialization covers',
          paragraphs: [
            'Mobilization is the phase between contract signature and full production. It is short, but it decides whether a project starts smoothly: equipment has to arrive, the site has to be accessible and safe, and the materials and water the works depend on must be available.',
            'Many international contractors group these tasks under site preparation: ground levelled, access road open, water available. {{company}} can take charge of the parts that require heavy machines and drilling rigs, for a project owner or for a main contractor, using its own fleet.',
          ],
          list: [
            'Transport of heavy equipment to the site by semi-trailer',
            'Clearing and preparation of the site',
            'Access tracks and internal site roads',
            'Platforms for site facilities, camps, stockpiles and plant',
            'First earthworks: excavation, fill, levelling',
            'Organization of aggregate supply',
            'Water well drilling where the site has no water supply',
          ],
          illustration: 'bulldozer',
          reverse: true,
        },
        {
          type: 'steps',
          label: 'Sequence',
          title: 'A clear mobilization sequence',
          intro: 'Each mobilization is planned for its site, but the sequence is always the same.',
          items: [
            { title: 'Brief and site visit', text: 'Location, access route, ground conditions, scope, schedule and constraints are reviewed together, on site where possible.' },
            { title: 'Mobilization plan', text: 'Machines, operators, transport, fuel, water and materials are defined, and the terms are agreed.' },
            { title: 'Equipment on site', text: 'The fleet is transported by semi-trailer from our Djelfa depot or from another site.' },
            { title: 'Site opening', text: 'Clearing, access tracks, platforms and first earthworks are carried out in the agreed order of priority.' },
            { title: 'Supply in place', text: 'Aggregate deliveries are scheduled and, where needed, a water well is drilled for the works and the site facilities.' },
            { title: 'Hand-over or continuation', text: 'The site is handed over to the main works, or our equipment continues under a rental or subcontract agreement.' },
          ],
        },
        {
          type: 'features',
          label: 'Deliverables',
          title: 'What the client has at the end of mobilization',
          items: [
            { title: 'An accessible site', text: 'Access tracks and internal roads usable by trucks, site vehicles and deliveries.' },
            { title: 'Prepared platforms', text: 'Levelled areas for offices, camps, workshops, batching plants and stockpiles.' },
            { title: 'Earthworks under way', text: 'First cuts and fills completed, so the main contractor starts on prepared ground.' },
            { title: 'Aggregate supply organized', text: 'Deliveries of fine aggregates from our quarry and crushing plant at Oued Sdeur, scheduled to the needs of the works.' },
            { title: 'Water on site', text: 'A drilled well where one is needed and permitted, for compaction, concrete, dust control and site facilities.' },
            { title: 'Machines ready to continue', text: 'Equipment already on site that can stay under rental or subcontract for the main works.' },
          ],
        },
        {
          type: 'prose',
          label: 'For foreign contractors',
          title: 'Starting a project in Algeria from abroad',
          paragraphs: [
            'An international contractor that wins a project in Algeria often faces the same first months: its own equipment is still being shipped and cleared, local suppliers are not yet qualified, and the site must already show progress. A local partner that owns machines can start work while the rest of the organization is being set up, and the contractor’s own fleet can join later without delaying the start.',
            'Our position in Djelfa, on the RN1 between Algiers and the Sahara, and our road-building experience in many regions of Algeria allow us to plan realistic mobilizations. For remote sites, the plan covers what a site needs to be self-sufficient: fuel, water, spare parts and the transport of supplies. Read more on our page for [international partners](page:partners).',
          ],
        },
        {
          type: 'prose',
          label: 'Planning',
          title: 'What we need to plan a mobilization',
          list: [
            'Site location, with coordinates or a map if available',
            'Access route and any restrictions for heavy transport',
            'Site plan, drawings or a description of the areas to prepare',
            'Scope of the start-up works and approximate quantities',
            'Required start date and the date the main works begin',
            'Needs for aggregates and water, and site constraints such as permits or security',
          ],
        },
        {
          type: 'links',
          label: 'Related services',
          title: 'Services that complete a mobilization',
          items: [
            { title: 'Equipment rental', text: 'Keep our machines on site for the main works, on terms agreed per project.', page: 'rental' },
            { title: 'Aggregate production', text: 'Crushed fine aggregates from our quarry and plant at Oued Sdeur, near Aïn El Ibel.', page: 'aggregates' },
            { title: 'Water well drilling', text: 'A water well for the works and the site facilities.', page: 'drilling' },
            { title: 'Road construction', text: 'Access roads and permanent roads built by ETAHG.', page: 'roads' },
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about mobilization',
          items: [
            { id: 'mob-what', q: 'What does ETAHG mean by project initialization?', a: 'For SARL ETAHG, project initialization, or mobilization, means bringing heavy equipment and operators to a new location and preparing the site for the main works: clearing, access tracks, platforms, first earthworks, aggregate supply and, where needed, a water well.' },
            { id: 'mob-who', q: 'Who is ETAHG’s mobilization service for?', a: 'SARL ETAHG’s mobilization service is for project owners and main contractors opening a new site in Algeria, including international contractors whose own equipment has not yet arrived.' },
            { id: 'mob-after', q: 'Can ETAHG stay on the project after mobilization?', a: 'Yes. After the start-up phase, SARL ETAHG’s equipment can continue under a rental or subcontracting agreement, as agreed with the client.' },
            { id: 'mob-remote', q: 'Can ETAHG mobilize to remote or desert sites?', a: 'Yes, subject to a site review. SARL ETAHG is registered in Ghardaïa in the northern Sahara and keeps its fleet in Djelfa; for remote sites, transport, fuel, water and parts are planned as part of the mobilization.' },
            { id: 'mob-time', q: 'How quickly can ETAHG mobilize?', a: 'SARL ETAHG agrees the mobilization schedule with each client after reviewing the location, access and equipment required. It does not quote standard lead times, because they depend on distance, machine availability and site conditions.' },
            { id: 'mob-water', q: 'Can mobilization include water supply for the site?', a: 'Yes. SARL ETAHG can drill a water well as part of the mobilization, where the site has no water and drilling is permitted, so that water is available for earthworks, concrete and site facilities.' },
          ],
        },
        {
          type: 'cta',
          title: 'Opening a new site soon?',
          text: 'Send us the location and planned start date. We will propose a mobilization plan.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- ROADS */
    roads: {
      slug: 'services/road-construction',
      nav: 'Road construction',
      title: 'Road Contractor & Subcontractor in Algeria | ETAHG',
      description: 'SARL ETAHG builds roads in Algeria with its own complete fleet: earthworks, grading, compaction, bitumen spraying and asphalt paving, in many regions.',
      summary: 'Road construction, SARL ETAHG’s original activity, carried out with its own fleet and aggregates.',
      service: { name: 'Road construction', serviceType: 'Road construction and earthworks' },
      whatsapp: 'Hello SARL ETAHG, I would like to discuss a road construction project (location, length, scope).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Road construction',
          title: 'Road construction contractor and subcontractor across Algeria, from earthworks to asphalt',
          lead: 'Road construction is the original activity of {{company}}. The company’s fleet of excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, bitumen distributor and tankers, asphalt pavers and trucks was assembled mainly to build roads, and ETAHG has completed road projects in many regions of Algeria. It can take on a complete road scope or work as a subcontractor for earthworks, pavement layers, paving and aggregate supply.',
          ctas: [
            { label: 'Discuss a road project', kind: 'whatsapp', variant: 'primary' },
            { label: 'Our experience', page: 'experience', variant: 'secondary' },
          ],
          illustration: 'paver',
        },
        {
          type: 'steps',
          label: 'Method',
          title: 'How a road is built, layer by layer',
          intro: 'A road is a layered structure. Each layer spreads traffic loads to the one below, so each must be built on a sound base, with suitable materials and proper compaction.',
          items: [
            { title: 'Clearing and setting out', text: 'The alignment is cleared of vegetation and debris, and the road is set out on the ground from the design.' },
            { title: 'Earthworks', text: 'Cuts and embankments are formed with bulldozers, excavators and trucks, balancing cut and fill wherever possible.' },
            { title: 'Subgrade preparation', text: 'The natural ground is shaped by grader, treated where necessary and compacted with rollers to carry the pavement.' },
            { title: 'Sub-base course', text: 'A granular layer, made of crushed aggregates or suitable local materials, is spread and profiled by grader and compacted; it spreads loads and drains the structure.' },
            { title: 'Base course', text: 'A layer of higher-quality crushed aggregate, unbound or treated, gives the pavement its bearing capacity.' },
            { title: 'Surfacing', text: 'The bitumen distributor sprays a prime or tack coat; asphalt is then laid by paver to line and level and compacted with rollers; surface dressings are used where the design calls for them.' },
            { title: 'Drainage and finishing', text: 'Ditches, culverts, shoulders and finishing works protect the road and extend its life.' },
          ],
        },
        {
          type: 'split',
          label: 'Integration',
          title: 'A complete asphalt road-building chain in one company',
          paragraphs: [
            'Road construction consumes large quantities of aggregates, in the granular layers and in the asphalt itself. Because {{company}} produces fine aggregates at its own crushing plant and operates its own trucks, the supply of materials and the pace of the works can be planned together.',
            'The fleet covers every step of an asphalt road: excavators, bulldozers and loaders for earthworks; motor graders to shape the layers; vibratory rollers to compact them; a bitumen distributor, supplied by our bitumen tankers, for prime and tack coats and surface dressings; and asphalt pavers for the wearing course. With graders, compactors, bitumen distribution and paving in one company, each phase is carried out by machines and teams used to working together, and a main contractor has fewer interfaces on the critical path. See [our fleet](page:fleet) for the equipment categories.',
          ],
          list: ['New roads and access roads', 'Widening and rehabilitation of existing roads', 'Access roads to industrial, mining and energy sites', 'Platforms, yards and site roads'],
          illustration: 'dump-truck',
        },
        {
          type: 'prose',
          label: 'Terrain',
          title: 'Adapting road building to the terrain',
          paragraphs: [
            'On the coastal Tell, clay soils and winter rainfall make drainage and subgrade treatment the priority, and works often run alongside live traffic. In the Atlas mountains, rock cuts, embankments and slope stability demand heavy dozing and excavation. On the High Plateaus, long straight alignments reward productivity and a steady flow of aggregates, while cold winters and hot summers call for careful seasonal planning; around the salt flats (chotts), soft and saline soils need particular attention.',
            'In the Sahara, sand, heat and distance shape every decision: drifting sand must be kept off the alignment, asphalt must tolerate high surface temperatures, and local materials such as calcareous tuff are widely used in pavement layers. Crews and supplies must be planned to be self-sufficient. ETAHG has built roads in many regions of Algeria and knows the terrain of those regions; more about our [road-building experience](page:experience).',
          ],
        },
        {
          type: 'features',
          label: 'Subcontracting',
          title: 'Scopes we take on for main contractors',
          intro: 'On large road projects, ETAHG can work under a main contractor, including international contractors, on a defined part of the works.',
          items: [
            { title: 'Earthworks', text: 'Clearing, cuts, embankments and subgrade preparation with our own dozers, excavators, loaders, graders, rollers and trucks.' },
            { title: 'Granular layers', text: 'Sub-base and base courses spread by grader and compacted with our rollers, with aggregate supply and haulage organized by ETAHG.' },
            { title: 'Bitumen and asphalt paving', text: 'Prime and tack coats with our bitumen distributor and tankers, then paving with our pavers and rollers, coordinated with the asphalt supply.' },
            { title: 'Aggregate supply', text: 'Crushed fine aggregates from our quarry and plant at Oued Sdeur, delivered to the site or to the asphalt and concrete plants.' },
            { title: 'Haulage', text: 'Trucks and semi-trailer trucks for materials and for moving machines along the alignment.' },
            { title: 'Access and diversion roads', text: 'Temporary tracks and diversions that keep the main works and local traffic moving.' },
          ],
        },
        {
          type: 'prose',
          label: 'Quotation',
          title: 'What to send for a road project',
          list: [
            'Location, start and end points, and approximate length',
            'Project stage: tender, award or works in progress',
            'Scope requested and your role (owner, main contractor)',
            'Drawings, specifications and bill of quantities, if available',
            'Planned start date and duration',
            'Who supplies the materials, including aggregates and asphalt',
          ],
        },
        {
          type: 'links',
          label: 'Related services',
          title: 'Services that support a road project',
          items: [
            { title: 'Aggregate production', text: 'Crushed fine aggregates for granular layers and asphalt.', page: 'aggregates' },
            { title: 'Equipment rental', text: 'Additional trucks, excavators, loaders, graders, rollers and pavers for peaks of work.', page: 'rental' },
            { title: 'Project mobilization', text: 'Opening the site, access tracks and platforms before the main works.', page: 'mobilization' },
            { title: 'Experience', text: 'How Algeria’s terrains change the way roads are built.', page: 'experience' },
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about road construction',
          items: [
            { id: 'road-experience', q: 'Does ETAHG have experience in road construction?', a: 'Yes. Road construction is the original activity of SARL ETAHG: its fleet was mainly used to build roads, and the company has completed road projects in many regions of Algeria.' },
            { id: 'road-scope', q: 'Which parts of a road project can ETAHG carry out?', a: 'SARL ETAHG can carry out earthworks, grading, compaction, sub-base and base courses, bitumen spraying, asphalt surfacing with its own pavers and rollers, aggregate supply and haulage, either as a complete scope or as a subcontract for part of the works.' },
            { id: 'road-subcontract', q: 'Can ETAHG work as a subcontractor on a road project?', a: 'Yes. SARL ETAHG can work for a main contractor, including a foreign contractor, on a defined scope such as earthworks, granular layers, paving or aggregate supply.' },
            { id: 'road-regions', q: 'In which regions has ETAHG built roads?', a: 'SARL ETAHG has completed road projects in many regions of Algeria and knows the terrain of those regions. Information on past road projects can be discussed with prospective partners.' },
            { id: 'road-materials', q: 'Can ETAHG supply the aggregates for a road project?', a: 'Yes. SARL ETAHG produces high-quality fine aggregates at its own quarry and crushing plant at Oued Sdeur, near Aïn El Ibel south of Djelfa, and can deliver them with its own trucks, so material supply and road works can be planned together.' },
            { id: 'road-equipment', q: 'What equipment does ETAHG use to build roads?', a: 'SARL ETAHG builds roads with its own hydraulic excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, bitumen distributor and tankers, asphalt pavers, trucks and semi-trailers: a complete asphalt road-building chain, supported by aggregates from its own quarry and crushing plant.' },
          ],
        },
        {
          type: 'cta',
          title: 'Have a road project in Algeria?',
          text: 'Share the location, length and scope. We will tell you how we can contribute.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* -------------------------------------------------------------- DRILLING */
    drilling: {
      slug: 'services/water-well-drilling',
      nav: 'Water well drilling',
      title: 'Water Well & Borehole Drilling in Algeria | ETAHG',
      description: 'SARL ETAHG drills water wells (forages) in Algeria with its own truck-mounted rig, from Djelfa and Ghardaïa, for sites, farms, industry and communities.',
      summary: 'Water well drilling in Algeria with SARL ETAHG’s own drilling rigs, for sites, farms, industry and communities.',
      service: { name: 'Water well drilling', serviceType: 'Water well drilling' },
      whatsapp: 'Hello SARL ETAHG, I would like information about drilling a water well (location, use of the water).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Water well drilling',
          title: 'Water well drilling for sites, farms, industry and communities',
          lead: '{{company}} owns truck-mounted water well drilling equipment, recently acquired new with its accessories, and can drill water wells in Algeria for construction sites, agriculture, industrial facilities and communities. Based in Djelfa and Ghardaïa, between the High Plateaus and the northern Sahara, ETAHG can also include a well in the start-up of a new project, so that water is available early in the works.',
          ctas: [
            { label: 'Ask about a well', kind: 'whatsapp', variant: 'primary' },
            { label: 'Contact us', page: 'contact', variant: 'secondary' },
          ],
          illustration: 'drill-rig',
        },
        {
          type: 'split',
          label: 'Why it matters',
          title: 'Water is a project in itself',
          paragraphs: [
            'Earthworks need water for compaction, concrete needs water for mixing and curing, haul roads need water for dust control, and site camps need drinking and service water. On the High Plateaus and in the Sahara, where surface water is scarce, a well is often the only reliable source, and hauling water by tanker over long distances is costly.',
            'Drilling a well early, as part of the mobilization, removes one of the main constraints of a remote project. After the works, the well can continue to serve the owner, a farm or the local community.',
          ],
          list: ['Construction and road sites', 'Agricultural irrigation and livestock', 'Industrial and mining facilities', 'Community water supply'],
          illustration: 'terrain-desert',
        },
        {
          type: 'features',
          label: 'Applications',
          title: 'Typical uses of a drilled well',
          items: [
            { title: 'Construction sites', text: 'Water for compaction, concrete, dust control and site facilities, close to where it is used.' },
            { title: 'Agriculture', text: 'Irrigation wells for farms and new agricultural land, particularly in the steppe and the Sahara.' },
            { title: 'Industry and mining', text: 'Process and service water for plants, quarries and industrial sites far from networks.' },
            { title: 'Communities and livestock', text: 'Wells for villages, settlements and pastoral areas where the network does not reach.' },
          ],
        },
        {
          type: 'steps',
          label: 'Process',
          title: 'How a water well is delivered',
          intro: 'The main stages of a water well project are below. The exact scope ETAHG carries out is agreed in each contract.',
          items: [
            { title: 'Needs and location', text: 'Water demand, intended use, location and access are defined with the client, together with any information on existing wells nearby.' },
            { title: 'Authorization', text: 'The authorization required under Algerian regulations is obtained before drilling starts; who applies for it is agreed in the contract, and the drilling is planned around it.' },
            { title: 'Rig mobilization', text: 'The drilling rig and support equipment are transported to the site.' },
            { title: 'Drilling', text: 'The borehole is drilled through the formations to the water-bearing layer, with a method suited to the ground.' },
            { title: 'Casing and completion', text: 'The well is cased, with screens at the water-bearing layer, and equipped according to the agreed specification.' },
            { title: 'Development and hand-over', text: 'The well is cleaned and developed until the water runs clear, then handed over for use.' },
          ],
        },
        {
          type: 'prose',
          label: 'Terrain',
          title: 'Drilling in Algeria’s geological settings',
          paragraphs: [
            'Algeria’s groundwater varies with its landscapes. In the Tell, aquifers lie mainly in alluvial plains and fissured limestone, recharged by winter rain; near the coast, over-pumping can draw in salt water. On the High Plateaus, water-bearing layers occur in sedimentary basins whose depth and quality vary, and water near the salt flats (chotts) can be saline.',
            'Under the northern Sahara lie two large aquifer systems shared with Tunisia and Libya: the Complexe Terminal, closer to the surface, and the deeper Continental Intercalaire, commonly called the Albian aquifer. Deep wells can deliver warm water under pressure, which affects the choice of casing and wellhead. Because much of this water is not renewed, its use is regulated by the authorities.',
            'Each well is therefore planned for its location: the method, depth, casing and completion depend on the ground and on the aquifer to be reached. Every project starts with an exchange on the site and on the expected water needs. How Algeria’s terrains shape our work is described on our [road-building experience](page:experience) page.',
          ],
        },
        {
          type: 'prose',
          label: 'Quotation',
          title: 'What to send for a well project',
          list: [
            'Location of the well, with coordinates if available',
            'Intended use and estimated water demand',
            'Information on existing wells nearby, if known (depth, water level)',
            'Site access for a drilling rig and its support vehicles',
            'Status of the drilling authorization',
            'Preferred timing',
          ],
        },
        {
          type: 'links',
          label: 'Related services',
          title: 'Water within a complete project',
          items: [
            { title: 'Project mobilization', text: 'A well drilled as part of opening a new site.', page: 'mobilization' },
            { title: 'Road construction', text: 'Water for compaction and dust control on road works.', page: 'roads' },
            { title: 'Aggregate production', text: 'Crushed fine aggregates for concrete and road layers.', page: 'aggregates' },
            { title: 'International partners', text: 'How foreign contractors can work with ETAHG.', page: 'partners' },
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about water well drilling',
          items: [
            { id: 'drill-own', q: 'Does ETAHG own its drilling rigs?', a: 'Yes. SARL ETAHG has its own truck-mounted water well drilling rig with its accessories, recently acquired new.' },
            { id: 'drill-uses', q: 'What kinds of water wells does ETAHG drill?', a: 'SARL ETAHG can drill water wells for construction sites, agricultural irrigation, industrial and mining facilities and community water supply. The design of each well depends on its use and on local geology.' },
            { id: 'drill-combined', q: 'Can a well be drilled as part of a site mobilization?', a: 'Yes. SARL ETAHG can include a water well in the mobilization of a new site, so that water is available for earthworks, concrete and site facilities.' },
            { id: 'drill-where', q: 'Where can ETAHG drill water wells?', a: 'SARL ETAHG works from Djelfa and Ghardaïa, on the axis between northern Algeria and the Sahara. Feasibility for a specific location is assessed when you send the project details.' },
            { id: 'drill-permit', q: 'Is a permit needed to drill a water well in Algeria?', a: 'Yes. In Algeria, drilling a water well requires prior authorization from the administration responsible for water resources. SARL ETAHG plans its drilling around that authorization; who applies for it is agreed with the client.' },
            { id: 'drill-depth', q: 'How deep will the well be?', a: 'SARL ETAHG sets the depth of each well according to local geology and the aquifer to be reached. Depth is estimated after reviewing the location and any data from existing wells nearby.' },
          ],
        },
        {
          type: 'cta',
          title: 'Need water on your site?',
          text: 'Tell us the location and the use of the water.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- PARTS */
    parts: {
      slug: 'services/spare-parts',
      nav: 'Spare parts',
      title: 'Heavy-Duty Spare Parts: EURL KAYLE KENNY | ETAHG',
      description: 'EURL KAYLE KENNY, part of the SARL ETAHG group, supplies heavy-duty diesel engine spare parts from its store and parts depot in Mohammadia, Algiers.',
      summary: 'Heavy-duty diesel engine spare parts through the group company EURL KAYLE KENNY in Algiers.',
      service: { name: 'Heavy-duty spare parts (EURL KAYLE KENNY)', serviceType: 'Heavy equipment spare parts supply' },
      whatsapp: 'Hello, I am looking for heavy-duty spare parts (reference / engine model):',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Spare parts',
          title: 'Heavy-duty spare parts with EURL KAYLE KENNY',
          lead: 'EURL KAYLE KENNY is part of the {{company}} portfolio. It supplies heavy-duty diesel engine spare parts from its store and parts depot in Mohammadia, Algiers, to fleet owners, contractors and workshops.',
          ctas: [
            { label: 'Search parts on kaylekenny.com', href: 'https://www.kaylekenny.com', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
          illustration: 'spare-parts',
        },
        {
          type: 'split',
          label: 'The company',
          title: 'Parts support inside the group',
          paragraphs: [
            'Heavy machines only earn money when they work. When an engine part fails on a site far from the cities, the time needed to find the right part decides how long a machine stands still. Having a spare parts company inside the group shortens that time for our own fleet and for our clients.',
            'EURL KAYLE KENNY stocks heavy-duty diesel engine parts, including Cummins-compatible parts, in Algiers. Customers can check a part reference on [kaylekenny.com](https://www.kaylekenny.com) and ask for availability and price directly.',
          ],
          list: ['Diesel engine spare parts for heavy-duty machines', 'Cummins-compatible parts', 'Stock in Mohammadia, Algiers', 'Search by part reference online'],
          illustration: 'excavator',
          reverse: true,
        },
        {
          type: 'prose',
          label: 'For partners',
          title: 'What it means for ETAHG’s partners',
          paragraphs: [
            'For a contractor renting ETAHG machines, or working alongside ETAHG on a project, parts support within the group is a local source of engine parts. It also gives partners with their own fleets a local source of heavy-duty engine parts in Algiers.',
            'To ask for a part, send the part reference or the engine model and serial number. A photo of the part and of the engine plate helps to identify the right item.',
          ],
        },
        {
          type: 'prose',
          label: 'Disclaimer',
          title: 'Independent supplier',
          paragraphs: [
            'EURL KAYLE KENNY is an independent supplier, not affiliated with or endorsed by Cummins Inc. The name Cummins and any part numbers are used only to identify compatibility.',
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about spare parts',
          items: [
            { id: 'parts-link', q: 'What is the link between SARL ETAHG and EURL KAYLE KENNY?', a: 'EURL KAYLE KENNY is part of the portfolio of SARL ETAHG. It is the group’s spare parts company for heavy-duty machines, based in Mohammadia, Algiers.' },
            { id: 'parts-what', q: 'What parts does EURL KAYLE KENNY supply?', a: 'EURL KAYLE KENNY supplies heavy-duty diesel engine spare parts, including Cummins-compatible parts. It is an independent supplier, not affiliated with or endorsed by Cummins Inc.' },
            { id: 'parts-how', q: 'How can I check if a part is available?', a: 'Search the part reference on www.kaylekenny.com or send the reference by WhatsApp to +213 558 96 10 49, the group number of SARL ETAHG and EURL KAYLE KENNY.' },
            { id: 'parts-fleet', q: 'Does the group’s parts company support ETAHG’s rental fleet?', a: 'Yes. EURL KAYLE KENNY, SARL ETAHG’s group spare-parts company in Algiers, supplies heavy-duty diesel engine parts that support the availability of the fleet used on rentals and projects.' },
          ],
        },
        {
          type: 'cta',
          title: 'Looking for a part?',
          text: 'Search by reference on kaylekenny.com or send us the part number.',
          ctas: [
            { label: 'Visit kaylekenny.com', href: 'https://www.kaylekenny.com', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- FLEET */
    fleet: {
      slug: 'fleet',
      nav: 'Fleet',
      title: 'Heavy Equipment Fleet in Djelfa, Algeria | ETAHG',
      description: 'SARL ETAHG fleet: excavators, dozers, loaders, graders, rollers, pavers, bitumen trucks, haulage, drilling rigs and its own quarry and crusher.',
      summary: 'The heavy equipment categories of SARL ETAHG, based at its depot in Djelfa and its quarry and crushing plant at Oued Sdeur.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Fleet',
          title: 'Our own heavy equipment, from quarry to asphalt paver',
          lead: '{{company}} owns the machines behind all its services: a quarry and stone crushing plant, hydraulic excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, asphalt pavers, a bitumen distributor and bitumen tankers, trucks, tipper semi-trailers, a quarry rock drill and truck-mounted water well drilling equipment. The mobile fleet is based at our equipment depot in Djelfa, on the RN1 north–south axis; the quarry and crusher are at Oued Sdeur, near Aïn El Ibel. The fleet works on our own projects and is available for rent and lease.',
          ctas: [
            { label: 'Rent equipment', page: 'rental', variant: 'primary' },
            { label: 'Contact us', page: 'contact', variant: 'secondary' },
          ],
          illustration: 'semi-truck',
        },
        {
          type: 'equipment',
          label: 'Equipment',
          title: 'Equipment categories',
          intro: 'Our machines cover the full chain of heavy works, from extracting rock to finishing an asphalt road and supplying water. We publish equipment categories; the machines proposed for a project are detailed in each offer.',
          items: [
            { illustration: 'crusher', title: 'Quarry and stone crushing plant', text: 'Our own quarry feeds crushing and grinding machines that produce high-quality fine aggregates, suited to high production rates.', uses: ['Rock extraction', 'Fine aggregates'], count: 'crushingPlants' },
            { illustration: 'drill-rig', title: 'Quarry rock drill', text: 'A surface rock-drilling rig for drilling at the quarry face, the first step in extracting the rock.', uses: ['Quarry drilling', 'Rock extraction'] },
            { illustration: 'excavator', title: 'Hydraulic excavators', text: 'Excavators for excavation, trenching, loading trucks and work in hard ground.', uses: ['Excavation', 'Loading'], count: 'excavators' },
            { illustration: 'bulldozer', title: 'Bulldozers', text: 'Dozers for clearing, pushing, spreading and shaping ground, and for opening tracks.', uses: ['Site clearing', 'Embankments'], count: 'bulldozers' },
            { illustration: 'bulldozer', title: 'Wheel loaders', text: 'Loaders for loading trucks, feeding the crusher and handling stockpiles.', uses: ['Loading', 'Stockpiles'] },
            { illustration: 'bulldozer', title: 'Motor graders', text: 'Graders for spreading and profiling granular layers and maintaining tracks.', uses: ['Layer shaping', 'Profiling'] },
            { illustration: 'paver', title: 'Vibratory rollers', text: 'Compactors for subgrade, granular layers and asphalt.', uses: ['Compaction', 'Asphalt'] },
            { illustration: 'dump-truck', title: 'Bitumen distributor and tankers', text: 'A bitumen distributor (spreader) truck for prime and tack coats and surface dressings, with bitumen tankers for supply.', uses: ['Bitumen spraying', 'Bitumen supply'] },
            { illustration: 'paver', title: 'Asphalt pavers', text: 'Pavers for laying asphalt and pavement layers to line and level.', uses: ['Asphalt paving', 'Surfacing'], count: 'roadPavers' },
            { illustration: 'dump-truck', title: 'Trucks', text: 'Trucks for earthworks and for delivering aggregates and fill.', uses: ['Earthworks', 'Aggregate delivery'], count: 'dumpTrucks' },
            { illustration: 'semi-truck', title: 'Tipper semi-trailers', text: 'Tractor units with tipper semi-trailers for bulk haulage of aggregates and materials over longer distances.', uses: ['Bulk haulage', 'Material supply'], count: 'semiTrailerTrucks' },
            { illustration: 'drill-rig', title: 'Water well drilling rig', text: 'Truck-mounted water well drilling equipment with its accessories, recently acquired new, for wells on construction sites, farms and in remote areas.', uses: ['Water wells', 'Site water supply'], count: 'drillingRigs' },
          ],
        },
        {
          type: 'prose',
          label: 'Full chain',
          title: 'A fleet that covers every phase of heavy works',
          paragraphs: [
            'Most projects need machines in a fixed order. At the quarry, the rock drill and loaders extract the rock that the crushing plant turns into the fine aggregates that granular layers, concrete and asphalt consume. On site, bulldozers and excavators open the ground; trucks and semi-trailers carry fill, spoil and aggregates; motor graders shape each layer and vibratory rollers compact it; the bitumen distributor, supplied by our bitumen tankers, sprays the prime and tack coats; and pavers lay the asphalt. Graders, compactors, bitumen distribution and paving together form a complete asphalt road-building chain. The water well drilling rig provides water where there is none.',
            'Because {{company}} owns machines in each of these categories, it can staff a complete sequence of works or fill a single gap in a contractor’s own fleet. The same machines are used for our own road projects, for [rental and leasing](page:rental), and for [project mobilization](page:mobilization).',
          ],
        },
        {
          type: 'features',
          label: 'Availability',
          title: 'How we keep the fleet available',
          intro: 'A fleet is only as useful as its availability on site.',
          items: [
            { title: 'Central depot', text: 'The Djelfa depot, on the RN1 axis, is the base for preparing and dispatching machines toward the north and the south.' },
            { title: 'Own haulage', text: 'Our trucks and tipper semi-trailers carry aggregates and materials without depending on third-party hauliers.' },
            { title: 'Parts within the group', text: 'EURL KAYLE KENNY supplies heavy-duty diesel engine parts from its stock in Algiers.' },
            { title: 'Maintenance agreed in advance', text: 'For each rental or project, servicing and repair responsibilities are set out in the contract before work starts.' },
          ],
        },
        {
          type: 'prose',
          label: 'Fleet details',
          title: 'Fleet list and machine details',
          paragraphs: [
            'This website presents equipment categories only. A detailed list of the machines proposed for a project, with their characteristics, is provided with each offer.',
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about the fleet',
          from: 'faq',
          ids: ['fleet', 'rental', 'rental-terms'],
          more: { label: 'All questions and answers', page: 'faq' },
        },
        {
          type: 'cta',
          title: 'Need machines for a project?',
          text: 'Rental, leasing or a complete scope of work: tell us what you need.',
          ctas: [
            { label: 'Equipment rental', page: 'rental', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------ EXPERIENCE */
    experience: {
      slug: 'experience',
      nav: 'Experience',
      title: 'Road-Building Experience in Many Regions of Algeria | ETAHG',
      description: 'SARL ETAHG has built roads in many regions of Algeria. How the Tell, the Atlas, the High Plateaus and the Sahara change road building and water drilling.',
      summary: 'SARL ETAHG’s road-building experience in many regions of Algeria, and how each terrain changes the work.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Experience',
          title: 'Experience built on road projects in many regions of Algeria',
          lead: '{{company}} has completed road projects in many regions of Algeria and knows the terrain of those regions. Its fleet was assembled to build roads, and that experience now informs everything the company offers: aggregate production, equipment rental, project mobilization and water well drilling.',
          illustration: 'paver',
        },
        {
          type: 'prose',
          label: 'Background',
          title: 'Built on road projects',
          paragraphs: [
            'Before offering its equipment to others, ETAHG used it mainly to build roads. Road works are demanding: long linear sites, large volumes of earth and aggregates, strict levels and tight schedules. They test machines, crews and organization every day, and they move from one landscape to another along the alignment.',
            'This background shapes how we work today. We plan for production, because a paving train or a concrete plant cannot wait for material. We plan for the terrain, because ground, climate and access change the choice of machines and methods. And we plan for distance, because Algeria is the largest country in Africa and many sites are far from towns, workshops and suppliers.',
          ],
        },
        {
          type: 'terrain',
          label: 'Terrain',
          title: 'What each terrain demands',
          intro: 'Algeria’s four broad landscapes call for four different ways of building. The notes below summarize the know-how involved.',
          items: [
            { illustration: 'terrain-coastal', title: 'Coastal Tell', text: 'Near the Mediterranean, soils are often clayey and winter rainfall is higher. Roads depend on good drainage, subgrade treatment and careful compaction, often next to existing traffic and dense settlements.', points: ['Drainage first', 'Subgrade treatment', 'Traffic management'] },
            { illustration: 'terrain-mountain', title: 'Atlas mountains', text: 'The Tell Atlas and the Saharan Atlas bring cuts in rock, high embankments, retaining works and tight bends. Powerful dozers and excavators, experienced operators and attention to slope stability make the difference.', points: ['Rock excavation', 'Cut and fill balance', 'Slope stability'] },
            { illustration: 'terrain-plateau', title: 'High Plateaus', text: 'The steppe between the Tell Atlas and the Saharan Atlas offers long alignments and large volumes. Productivity, steady aggregate supply, wind, freeze–thaw in winter and soft ground near the salt flats shape the schedule.', points: ['High production', 'Steady aggregate supply', 'Seasonal planning'] },
            { illustration: 'terrain-desert', title: 'Sahara', text: 'In the desert, sand, heat and remoteness dominate. Sites must be self-sufficient in fuel, parts and water, drifting sand must be managed, and pavements must tolerate high temperatures.', points: ['Self-sufficient sites', 'Water well drilling', 'Heat and sand'] },
          ],
        },
        {
          type: 'table',
          label: 'Summary',
          title: 'Terrain and its effect on the works',
          caption: 'How Algeria’s main landscapes affect road building and water well drilling',
          head: ['Terrain', 'Main constraints', 'Road-building response', 'Drilling considerations'],
          rows: [
            ['Coastal Tell', 'Clay soils, winter rain, traffic, dense land use', 'Drainage, subgrade treatment, phased works under traffic', 'Alluvial and limestone aquifers; salt water near the coast'],
            ['Atlas mountains', 'Steep slopes, rock, landslide risk, bends', 'Rock excavation, cut and fill balance, retaining and slope works', 'Fissured rock; access for the rig is often the main constraint'],
            ['High Plateaus', 'Cold winters, hot summers, wind, salt flats (chotts)', 'High-production earthworks and paving, steady aggregate supply, seasonal planning', 'Sedimentary basins of variable depth; saline water near the chotts'],
            ['Sahara', 'Sand, heat, distance, scarce water', 'Sand management, heat-resistant asphalt, local materials such as calcareous tuff, self-sufficient sites', 'Complexe Terminal and deep Albian aquifers; warm water under pressure at depth'],
          ],
        },
        {
          type: 'features',
          label: 'For partners',
          title: 'What this experience means for a partner',
          items: [
            { title: 'Realistic planning', text: 'Schedules and resources that account for the terrain, the season and the distances involved.' },
            { title: 'The right machines', text: 'Equipment chosen for the ground and the scope, not only for availability.' },
            { title: 'Material supply in mind', text: 'Aggregate needs identified early, with our own crushing plant as a source.' },
            { title: 'Self-sufficient sites', text: 'Fuel, water and parts planned for sites far from towns and workshops.' },
          ],
        },
        {
          type: 'records',
          label: 'References',
          title: 'Regions and projects',
          regionsTitle: 'Regions where we have built roads',
          projectsTitle: 'Selected projects',
          emptyText: 'Information on past road projects can be discussed with prospective partners.',
        },
        {
          type: 'locations',
          label: 'Locations',
          title: 'Where we are based',
          intro: 'Our bases in Djelfa and Ghardaïa sit on the main north–south axis, between the Mediterranean north and the Sahara.',
        },
        {
          type: 'cta',
          title: 'Working in a demanding location?',
          text: 'Tell us about the terrain and the scope, and we will tell you how we would approach it. Information on past road projects can be discussed with prospective partners.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'Road construction', page: 'roads', variant: 'secondary' },
          ],
        },
      ],
    },

    /* -------------------------------------------------------------- PARTNERS */
    partners: {
      slug: 'international-partners',
      nav: 'International partners',
      title: 'Local Partner in Algeria for Foreign Companies | ETAHG',
      description: 'Foreign contractors in Algeria can work with SARL ETAHG as a local partner: subcontracting, equipment rental, aggregates, site start-up and water wells.',
      summary: 'How international contractors and foreign companies can cooperate with SARL ETAHG in Algeria, and how to start.',
      whatsapp: 'Hello SARL ETAHG, we are an international company and would like to discuss cooperation in Algeria.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'International partners',
          title: 'A local heavy‑works partner for international contractors in Algeria',
          lead: '{{company}} is an Algerian heavy-works company, established in 1997, that works alongside international contractors, EPC companies and investors. We can take on a defined scope under your contract, supply machines and fine aggregates to your site, or open your site while your own organization is being set up, with our own fleet, our own quarry and crushing plant and road-building experience in many regions of Algeria.',
          ctas: [
            { label: 'Email us', kind: 'mailto', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
            { label: 'Download company profile (PDF)', kind: 'pdf', variant: 'ghost' },
          ],
          illustration: 'semi-truck',
        },
        {
          type: 'prose',
          label: 'Context',
          title: 'Working alongside international contractors',
          paragraphs: [
            'Algeria’s roads, railways, dams, housing and industrial plants are delivered by Algerian companies and by international contractors, among them many Chinese, Turkish and European groups. International contractors bring engineering, financing and the management of large projects. What they often need locally is equipment that is already in the country, a secure supply of materials, subcontractors for earthworks and road layers, and a partner who knows the ground and the practical conditions of working in the country (see our [road-building experience](page:experience)).',
            '{{company}} is organized to fill that role. It can take on a defined scope under your contract, supply machines and aggregates to your site, or open the site for you while your own organization is being set up. Because it owns its equipment and its crushing plant, it commits its own resources rather than coordinating third parties on your behalf.',
            'The framework also favours it: Algeria’s 2023 public procurement law grants a 25 percent preference margin to Algerian-majority companies and asks foreign bidders in international tenders to commit to a partnership with one, while the procurement regulation caps subcontracting at 40 percent of a contract and requires prior approval of each subcontractor. Our [checklist for foreign contractors](page:foreign-contractor-checklist) and the article on [how subcontracting works in Algeria](page:subcontracting-algeria) explain these rules in general terms.',
          ],
        },
        {
          type: 'prose',
          label: 'Chinese companies',
          title: 'For Chinese companies working in Algeria',
          paragraphs: [
            'Chinese companies building roads, railways, water and housing projects in Algeria often meet the same questions at the same stages: at the start of a project their own equipment may still be at sea or in customs; a steady source of manufactured sand near the site is not always available; fuel, spare parts and water are hard to secure on remote southern sites; and they need subcontractors who know local ground and working conditions.',
            'With its own fleet, its own quarry and crushing plant at Oued Sdeur, near Aïn El Ibel, and road-building experience in many regions of Algeria, {{company}} can work with your project team at these stages: opening the site before your equipment arrives, supplying fine aggregates, taking on earthworks, pavement layers or paving as a subcontractor and, where needed, drilling a water well for the works.',
            'Your head office or your project team in Algeria can write to us at [{{email}}](mailto:); email is also the practical channel from mainland China. Tell us your preferred language for correspondence when you first write. This website is available in [Simplified Chinese](page:home@zh).',
          ],
        },
        {
          type: 'features',
          label: 'Why ETAHG',
          title: 'What ETAHG brings to your project',
          items: [
            { title: 'Own fleet, own haulage', text: 'Excavators, bulldozers, loaders, graders, rollers, pavers, bitumen trucks, trucks, semi-trailers and a water well drilling rig that ETAHG owns, dispatched from its depot in Djelfa.' },
            { title: 'Own quarry and aggregates', text: 'Its own quarry and stone crushing plant at Oued Sdeur, near Aïn El Ibel, producing high-quality fine aggregates, suited to high production rates.' },
            { title: 'Road-building experience', text: 'Established in 1997, with road projects completed in many regions of Algeria, with practical knowledge of their terrain, materials and working conditions.' },
            { title: 'A footprint between north and south', text: 'Registered in Bounoura, wilaya of Ghardaïa, in the northern Sahara, with the fleet in Djelfa on the RN1 axis from Algiers to the Sahara, and parts in Algiers.' },
            { title: 'Parts support through the group', text: 'EURL KAYLE KENNY in Algiers is a local source of heavy-duty diesel engine parts for machines working on your project.' },
            { title: 'Direct communication', text: 'Reach us directly by email, phone or WhatsApp, and tell us your preferred language. This website is available in English, French, Arabic and Simplified Chinese.' },
          ],
        },
        {
          type: 'cards',
          label: 'Cooperation models',
          title: 'Ways to work together',
          intro: 'We adapt to the structure of your project. The most common models are:',
          style: 'compact',
          items: [
            { title: 'Subcontracting', text: 'We carry out a defined scope, such as earthworks, road layers, paving or site preparation, under your contract.', page: 'roads' },
            { title: 'Equipment supply', text: 'Our machines are rented or leased to your project on terms agreed per project (operators, transport, maintenance).', page: 'rental' },
            { title: 'Aggregate supply', text: 'We supply crushed fine aggregates from our plant for your concrete, asphalt or road works.', page: 'aggregates' },
            { title: 'Site start-up', text: 'We mobilize equipment and open your site while your own organization is being set up.', page: 'mobilization' },
            { title: 'Water supply', text: 'We drill water wells for your site, especially where there is no network.', page: 'drilling' },
            { title: 'Local partnership', text: 'We can act as your Algerian partner for a project, bringing equipment, materials and local experience to a consortium or joint arrangement.' },
          ],
        },
        {
          type: 'table',
          label: 'At a glance',
          title: 'Cooperation models at a glance',
          caption: 'Cooperation models between SARL ETAHG and international companies',
          head: ['Model', 'What ETAHG provides', 'Usual form of agreement'],
          rows: [
            ['Subcontracting', 'A defined works scope with its own machines and operators', 'Subcontract under the main contract'],
            ['Equipment supply', 'Machines on terms agreed per project (operators, transport, maintenance)', 'Rental or lease agreement'],
            ['Aggregate supply', 'Crushed fine aggregates, delivered or collected', 'Supply contract'],
            ['Site start-up', 'Mobilization, clearing, access, platforms, first earthworks', 'Subcontract or service agreement'],
            ['Water supply', 'Drilling of water wells', 'Service contract'],
            ['Local partnership', 'Equipment, materials and local experience in a joint arrangement', 'Consortium or joint-venture agreement'],
          ],
        },
        {
          type: 'steps',
          label: 'How to start',
          title: 'How cooperation starts',
          items: [
            { title: 'First contact', text: 'Send a short description of your company and your project by email to [{{email}}](mailto:), or by phone or WhatsApp on {{phone}}.' },
            { title: 'Confidentiality', text: 'If your project information is sensitive, a confidentiality agreement can be discussed before details are exchanged.' },
            { title: 'Exchange of information', text: 'We share our company profile, registration documents and equipment details; you share the scope, location and schedule.' },
            { title: 'Meeting and site visit', text: 'We meet and visit the project location together; a visit to our depot in Djelfa and our quarry and crushing plant at Oued Sdeur can also be discussed.' },
            { title: 'Proposal', text: 'We send a proposal covering scope, equipment, materials, schedule and commercial terms.' },
            { title: 'Agreement', text: 'The cooperation model is formalized in a contract suited to the project.' },
            { title: 'Mobilization and follow-up', text: 'Equipment and teams are mobilized according to the agreed plan.' },
          ],
        },
        {
          type: 'split',
          label: 'Checklist',
          title: 'What to send us',
          paragraphs: ['To give you a relevant first answer quickly, please include as much of the following as you can:'],
          list: [
            'Your company name, country and main activity',
            'Project name or description and its owner, if public',
            'Project location (wilaya or nearest town)',
            'Your role on the project and the cooperation model you have in mind',
            'Scope of work, equipment types or material volumes needed',
            'Planned start date and duration',
            'Technical documents available (drawings, specifications, bill of quantities)',
            'Contact person and preferred language',
          ],
          illustration: 'mobilization',
          reverse: true,
        },
        {
          type: 'prose',
          label: 'Due diligence',
          title: 'Documents available to partners',
          lead: 'Partners evaluating ETAHG usually ask for legal and technical documents. On request, and under a confidentiality agreement where appropriate, we provide:',
          list: [
            'Commercial register extract (RC) and tax identification numbers (NIF, NIS, AI)',
            '[Company profile](page:profile), in PDF and printable versions',
            'List of the equipment proposed for your project',
            'Information on our quarry and crushing plant and on the aggregates it produces',
            'Information on past road projects, to be discussed with prospective partners',
          ],
          note: 'This website is also available in [Simplified Chinese](page:home@zh), French and Arabic. Tell us your preferred language for correspondence and documents.',
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions from international companies',
          from: 'faq',
          ids: ['foreign-companies', 'chinese-contractors', 'subcontract', 'languages', 'kayle-kenny-link', 'quote'],
          more: { label: 'All questions and answers', page: 'faq' },
        },
        {
          type: 'cta',
          title: 'Let us discuss your project in Algeria',
          text: 'Reach us directly by email, phone or WhatsApp.',
          ctas: [
            { label: 'Email us', kind: 'mailto', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
            { label: 'Download company profile (PDF)', kind: 'pdf', variant: 'ghost' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- ABOUT */
    about: {
      slug: 'about',
      nav: 'About',
      title: 'About Us: Algerian Civil Works Company | ETAHG',
      description: 'About SARL ETAHG: Algerian SARL established in 1997, registered in Ghardaïa, with a depot in Djelfa, its own quarry at Oued Sdeur and a parts company.',
      summary: 'Company profile of SARL ETAHG: legal form, activities, locations and group.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'About',
          title: 'About SARL ETAHG',
          lead: 'SARL ETAHG is an Algerian company specialized in fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization and water well drilling. Established in 1997, it is registered in Bounoura, wilaya of Ghardaïa, and operates from Djelfa, between the north of the country and the Sahara.',
          ctas: [{ label: 'Download company profile (PDF)', kind: 'pdf', variant: 'primary' }],
          illustration: 'bulldozer',
        },
        {
          type: 'prose',
          label: 'Profile',
          title: 'Company profile',
          paragraphs: [
            '{{company}} is a limited liability company (SARL) under Algerian law, established in 1997, with its registered office at Cité 400 Logements, Sidi Abbaz, Bounoura, in the wilaya of Ghardaïa. Its equipment depot is in Djelfa. Its own quarry and stone crushing plant, Carrière Djellal El Gharbi, is at Oued Sdeur, near Aïn El Ibel, south of Djelfa: the company extracts the rock and crushes it into high-quality fine aggregates. The short name ETAHG is used in all languages; it stands for Entreprise de Travaux d’Aménagement Hydraulique de Ghardaïa and is not related to any other company with similar initials.',
            'The company built its fleet of excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, asphalt pavers, bitumen distributor and tankers, trucks and semi-trailers to build roads, and has completed road projects in many regions of Algeria. It has since opened this fleet to other companies through rental and leasing, offers the initialization of new projects with its machines, and drills water wells with its own truck-mounted rig.',
            'The group also includes EURL KAYLE KENNY, a heavy-duty spare parts company with a store and parts depot in Mohammadia, Algiers.',
          ],
        },
        {
          type: 'prose',
          label: 'Development',
          title: 'From road builder to multi-service partner',
          paragraphs: [
            'Since 1997, ETAHG has grown as a road builder that invested in its own means of production. Building roads required trucks, earthmoving machines, graders, rollers, bitumen equipment, pavers and large quantities of aggregates; owning them, and the quarry the aggregates come from, allowed the company to plan its own works.',
            'Today those same means are offered as services in their own right. Contractors can rent or lease the machines, buy fine aggregates from the crushing plant, ask ETAHG to open a new site, or have a water well drilled. International companies can combine these services with ETAHG’s road-building experience in a single cooperation.',
          ],
        },
        {
          type: 'facts',
          label: 'Key facts',
          title: 'Company at a glance',
        },
        {
          type: 'split',
          label: 'Footprint',
          title: 'Why our locations matter',
          paragraphs: [
            '**Ghardaïa**, where the company is registered, lies in the M’zab valley of the northern Sahara, a gateway to the south of the country. **Djelfa**, home of our equipment depot, is on the High Plateaus at the transition between the steppe and the Sahara, on the RN1, the main north–south road linking Algiers to the Sahara. Our own quarry and crushing plant at **Oued Sdeur**, near Aïn El Ibel, south of Djelfa, produces fine aggregates in the same region. Our group company EURL KAYLE KENNY supplies spare parts from **Algiers**.',
            'For a partner, this footprint means a fleet based on the country’s main north–south corridor, aggregate production on the High Plateaus, and parts supply from the capital: a position between the north and the Saharan south.',
          ],
          illustration: 'semi-truck',
          reverse: true,
        },
        {
          type: 'features',
          label: 'How we work',
          title: 'How we work',
          intro: 'Principles we apply on our own sites.',
          items: [
            { title: 'Written terms', text: 'Scope, schedule and terms are agreed in writing before work starts.' },
            { title: 'Agreed test requirements', text: 'Test requirements for aggregates are agreed with the client before supply.' },
            { title: 'Parts support in the group', text: 'Spare parts for heavy-duty engines through our group company EURL KAYLE KENNY.' },
          ],
        },
        {
          type: 'group',
          label: 'Group',
          title: 'The group: EURL KAYLE KENNY',
          paragraphs: [
            'EURL KAYLE KENNY is part of the {{company}} portfolio. Based in Mohammadia, Algiers, it runs a store and parts depot for heavy-duty diesel engine spare parts, including Cummins-compatible parts.',
          ],
          disclaimer: 'EURL KAYLE KENNY is an independent supplier, not affiliated with or endorsed by Cummins Inc.',
          cta: { label: 'Visit kaylekenny.com', href: 'https://www.kaylekenny.com' },
        },
        {
          type: 'locations',
          label: 'Locations',
          title: 'Our locations',
        },
        {
          type: 'cta',
          title: 'Get to know us',
          text: 'Contact us to discuss a project or to receive more information about the company.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'International partners', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    /* ------------------------------------------------------------------- FAQ */
    locations: {
      slug: 'locations',
      nav: 'Locations',
      title: 'Locations: Ghardaïa, Djelfa & Algiers | ETAHG',
      description: 'Where SARL ETAHG works from: registered office in Bounoura (Ghardaïa), equipment depot in Djelfa, quarry at Oued Sdeur and group parts store in Algiers.',
      summary: 'The sites of SARL ETAHG and its group along the Algiers – Djelfa – Ghardaïa axis (RN1), with a page for each operating base.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Locations',
          title: 'Our sites between the north and the south of Algeria',
          lead: '{{company}} works from two bases of its own on the RN1, the main road between Algiers and the Sahara: the registered office in Bounoura, wilaya of Ghardaïa, in the northern Sahara, and the equipment depot in Djelfa, on the High Plateaus, with the company’s quarry and stone crushing plant at Oued Sdeur near Aïn El Ibel, south of Djelfa. The group spare-parts company EURL KAYLE KENNY is in Mohammadia, Algiers.',
        },
        {
          type: 'locations',
          label: 'Sites',
          title: 'Four sites along the RN1 corridor',
          intro: 'The depot on the High Plateaus and the office in the northern Sahara each have their own page: what is there, which services start from there, the terrain around, how to reach us and whom to call.',
        },
        {
          type: 'prose',
          label: 'Why it matters',
          title: 'A footprint on the road to the south',
          paragraphs: [
            'The RN1 runs from Algiers over the Tell Atlas, across the High Plateaus through Djelfa and Laghouat, and down into the Sahara through Ghardaïa towards El Menia and the deep south. Djelfa, at roughly 300 km from the capital, is where the fleet is kept and maintained and where most convoys start; Ghardaïa, a further 300 km or so to the south, is where the company was established in 1997 and where it is administered. A project in the north is reached from Djelfa by driving up the same road; a project in the Sahara is reached by driving down it, with the office in Ghardaïa as the local contact. Aggregates come from the company’s own plant between the two, and spare parts for the engines from Algiers.',
          ],
        },
        {
          type: 'cta',
          title: 'Which base is closest to your project?',
          text: 'Tell us where the site is. We will say which base we would mobilize from and what we can supply locally.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    'loc-djelfa': {
      slug: 'locations/djelfa',
      nav: 'Djelfa: depot and quarry',
      title: 'Djelfa Equipment Depot & Quarry, Aïn El Ibel | ETAHG',
      description: 'The SARL ETAHG equipment depot in Djelfa and its quarry and crushing plant at Oued Sdeur, Aïn El Ibel: fleet base on the RN1, rental, aggregates, drilling.',
      summary: 'The Djelfa base of SARL ETAHG: equipment depot on the High Plateaus and quarry and stone crushing plant at Oued Sdeur near Aïn El Ibel, departure point for rental, mobilization, road works and aggregate deliveries.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Djelfa, wilaya of Djelfa',
          title: 'Djelfa: the equipment depot and the quarry on the RN1 axis',
          lead: '{{company}} keeps its heavy equipment at a depot in Djelfa and produces its fine aggregates at its own quarry and stone crushing plant, Carrière Djellal El Gharbi at Oued Sdeur near Aïn El Ibel, south of the city. Djelfa sits on the High Plateaus at around 1,100 metres, on the RN1 roughly 300 km south of Algiers, which puts the machines and the material within reach of projects to the north and to the south.',
          illustration: 'excavator',
        },
        {
          type: 'place',
          label: 'The depot',
          title: 'What is at the Djelfa depot',
          paragraphs: [
            'The depot is the home base of the road-building fleet: hydraulic excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, the asphalt paver, the bitumen distributor and bitumen tankers, trucks and tipper semi-trailers, the surface rock drill used at the quarry and the truck-mounted water well drilling rig. Machines are parked, serviced and prepared for transport here between projects; loading on semi-trailers, convoy preparation and the hand-over of rented machines also take place at the depot.',
            'Spare parts for the heavy-duty diesel engines come from the group company EURL KAYLE KENNY in Algiers, so that a machine leaving Djelfa is supported from inside the group. Visits to inspect the categories of equipment before a rental or a subcontract can be arranged on request.',
          ],
        },
        {
          type: 'prose',
          label: 'The quarry',
          title: 'The quarry and crushing plant at Oued Sdeur, Aïn El Ibel',
          paragraphs: [
            'South of the city of Djelfa, in the commune of Aïn El Ibel, {{company}} operates its own quarry and stone crushing plant, Carrière Djellal El Gharbi at Oued Sdeur. The plant’s crushing and grinding machines produce high-quality fine aggregates for concrete, asphalt and the granular layers of roads and platforms, and are especially suited to projects that require high production rates. Material is loaded onto the company’s own trucks and tipper semi-trailers for delivery, or collected at the plant by arrangement.',
            'The quarry has its own telephone lines, +213 660 36 75 50 and +213 660 36 75 51, and a fax, +213 27 90 46 13, for supply enquiries and deliveries; the group number {{phone}} and {{email}} reach the company for everything else.',
          ],
        },
        {
          type: 'cards',
          label: 'Services',
          title: 'Services delivered from Djelfa',
          intro: 'Everything that needs a machine leaves from the depot; everything that needs stone leaves from the quarry.',
          style: 'compact',
          items: [
            { page: 'rental', title: 'Equipment rental and leasing', text: 'Excavators, bulldozers, loaders, graders, rollers, paver, bitumen trucks, trucks and semi-trailers, handed over at the depot or delivered to the site on terms agreed per project.' },
            { page: 'aggregates', title: 'Fine aggregates', text: 'Crushed sand and fine aggregates from the Oued Sdeur plant, with test requirements agreed before supply and haulage by the company’s own trucks.' },
            { page: 'mobilization', title: 'Project mobilization', text: 'Convoys of machines and operators to open a new site: access tracks, platforms, first earthworks and aggregate supply.' },
            { page: 'roads', title: 'Road construction', text: 'Earthworks, pavement layers and asphalt surfacing with the complete fleet, in direct contract or as a subcontractor.' },
            { page: 'drilling', title: 'Water well drilling', text: 'The truck-mounted rig is based at the depot and travels to sites on the plateaus and in the south.' },
          ],
        },
        {
          type: 'prose',
          label: 'Terrain',
          title: 'The High Plateaus around Djelfa',
          paragraphs: [
            'The wilaya of Djelfa lies on the High Plateaus, the wide steppe between the Tell Atlas to the north and the Saharan Atlas to the south, with the Ouled Naïl range rising around the city. The country is open, with long straight alignments, cold winters with frost and occasional snow, hot dry summers and wind. For road works this means long linear sites, a strong demand for aggregates and a short season for bituminous layers; for drilling it means a syncline whose aquifers supply most of the wells of the steppe. The company’s own quarry south of the city answers the aggregate question directly, and the Saharan Atlas nearby brings the rock cuts, embankments and gradients the fleet was assembled for.',
          ],
        },
        {
          type: 'prose',
          label: 'Access',
          title: 'Access and logistics on the RN1',
          paragraphs: [
            'The depot is reached from the RN1, which links Algiers and the Tell to the north with Laghouat, Ghardaïa and the Sahara to the south; the quarry at Oued Sdeur lies off the same road south of the city, towards Aïn El Ibel. Heavy equipment leaves on semi-trailers along this axis, or across the plateaus on the roads towards M’Sila, Biskra, Tiaret and Bou Saâda. Sites on the High Plateaus and in the northern Sahara are generally within a day’s haul. Transport, duration and operators are agreed per project.',
            'To visit, contact us first: we arrange a time at the depot or at the quarry, and can combine the visit with a meeting on your project.',
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about the Djelfa base',
          items: [
            { id: 'djelfa-depot', q: 'Does ETAHG have a depot in Djelfa?', a: 'Yes. SARL ETAHG keeps its heavy equipment fleet at an equipment depot in Djelfa, wilaya of Djelfa, on the RN1 axis between Algiers and the Sahara; the machines are serviced there and dispatched from there for rental, mobilization and road works.' },
            { id: 'djelfa-quarry', q: 'Where is the ETAHG quarry?', a: 'The quarry and stone crushing plant of SARL ETAHG, Carrière Djellal El Gharbi, is at Oued Sdeur near Aïn El Ibel, in the wilaya of Djelfa, south of the city of Djelfa; it produces fine aggregates for concrete, asphalt and road layers and can be reached on +213 660 36 75 50 / 51.' },
            { id: 'djelfa-collect', q: 'Can we collect aggregates at the quarry with our own trucks?', a: 'Collection at the plant can be arranged, as can delivery by the company’s own trucks and tipper semi-trailers; fractions, quantities, loading times and the method of acceptance are agreed before supply starts.' },
            { id: 'djelfa-deliver', q: 'Does ETAHG deliver aggregates to Hassi Bahbah, Laghouat or other towns?', a: 'Delivery to sites in the wilaya of Djelfa and in neighbouring wilayas is quoted per project, based on the distance from the plant at Oued Sdeur, the quantities and the delivery rhythm; send the site location and the fractions needed for a delivered price.' },
            { id: 'djelfa-visit', q: 'Can we inspect the machines at the depot before renting?', a: 'Yes. Contact us to arrange a visit to the Djelfa depot; we show the categories of equipment that fit your project and discuss transport to your site and the terms.' },
            { id: 'djelfa-regions', q: 'Which regions does the Djelfa base serve?', a: 'From Djelfa, SARL ETAHG mobilizes along the RN1 towards the north and the Sahara and across the High Plateaus; the company has built roads in many regions of Algeria, and availability for a specific location is confirmed on request.' },
          ],
        },
        {
          type: 'cta',
          title: 'A project on the High Plateaus or further south?',
          text: 'Send us the location, the scope and the dates. We will answer with the machines and materials we can mobilize from Djelfa.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    'loc-ghardaia': {
      slug: 'locations/ghardaia',
      nav: 'Ghardaïa: registered office',
      title: 'Ghardaïa Registered Office, Bounoura | ETAHG',
      description: 'The registered office of SARL ETAHG at Cité 400 Logements, Sidi Abbaz, Bounoura, wilaya of Ghardaïa: contracts, administration and projects in the Sahara.',
      summary: 'The registered office of SARL ETAHG in Bounoura, Ghardaïa, where the company was established in 1997: contracts and administration, and the local contact for projects in the Algerian Sahara.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Bounoura, wilaya of Ghardaïa',
          title: 'Ghardaïa: the registered office in the northern Sahara',
          lead: '{{company}} was established by notarial deed in Ghardaïa in 1997 and keeps its registered office at Cité 400 Logements, Sidi Abbaz, in Bounoura, in the M’zab valley. The “G” of ETAHG stands for Ghardaïa. This is where the company is administered and where its contracts are signed, and the natural starting point for projects in the south of the country.',
          illustration: 'drill-rig',
        },
        {
          type: 'place',
          label: 'The office',
          title: 'What is at the Ghardaïa office',
          paragraphs: [
            'The registered office handles the company’s administration, contracts, invoicing and the registry obligations of an Algerian SARL: commercial register, tax and social registrations. Meetings with project owners and partners are held here or at the Djelfa depot, depending on where the project is; documents for an approval or due-diligence file are prepared here.',
            'Ghardaïa also anchors the company in the south. From the office, the machines based in Djelfa are dispatched to Saharan sites along the RN1, aggregates from the Oued Sdeur plant are organized for delivery, and water well drilling is arranged for sites, farms and communities in a region where water is a project in itself.',
          ],
        },
        {
          type: 'cards',
          label: 'Services',
          title: 'Services coordinated from Ghardaïa',
          intro: 'The machines are in Djelfa; the office organizes the projects, in particular those in the Saharan wilayas.',
          style: 'compact',
          items: [
            { page: 'partners', title: 'Local partnership', text: 'Subcontracting, supply and rental agreements with international contractors, prepared and signed at the registered office.' },
            { page: 'drilling', title: 'Water well drilling', text: 'Wells for sites, agriculture and industry, with the truck-mounted rig travelling from Djelfa.' },
            { page: 'mobilization', title: 'Mobilization towards the south', text: 'Convoys from Djelfa along the RN1 to Saharan sites, with the office as the local contact.' },
            { page: 'aggregates', title: 'Aggregate supply', text: 'Fine aggregates from the Oued Sdeur plant delivered to projects in the south by the company’s own haulage.' },
            { page: 'roads', title: 'Road works in the south', text: 'Earthworks, platforms and pavement layers for roads, access and industrial sites in Saharan conditions.' },
          ],
        },
        {
          type: 'prose',
          label: 'Terrain',
          title: 'The northern Sahara around Ghardaïa',
          paragraphs: [
            'Ghardaïa lies in the M’zab valley at about 500 metres, cut into the hamada, the rocky plateau of the northern Sahara. The region combines stony plateaus, wadis that are dry for months and flood in hours, and sandy areas; rain is rare, summers are very hot and winter nights cold. Water comes from deep aquifers. Works here must be planned for self-sufficiency: fuel, spare parts, accommodation and water travel with the site, and aggregates are hauled from where the rock is. That is why mobilization, haulage from the company’s own plant and well drilling are the services most often asked of us in this region.',
          ],
        },
        {
          type: 'prose',
          label: 'Access',
          title: 'Access and logistics on the RN1',
          paragraphs: [
            'Bounoura is one of the communes of the Ghardaïa urban area, on the RN1 south of Laghouat and Djelfa. The same road continues south towards El Menia and the deep south, and other national roads lead east towards Ouargla and the oil regions and west towards El Bayadh. Ghardaïa is roughly 600 km from Algiers by road and about 200 km from Laghouat and from Ouargla. Equipment reaches Saharan sites from the Djelfa depot along the RN1; the office is the local point of contact for projects in the region, and transport and site terms are agreed per project.',
            'To visit, write or call first; we receive partners at the registered office in Bounoura and can accompany them to a site in the region.',
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about the Ghardaïa office',
          items: [
            { id: 'ghardaia-office', q: 'Where is SARL ETAHG’s head office?', a: 'The registered office of SARL ETAHG is at Cité 400 Logements, Sidi Abbaz, Bounoura, wilaya of Ghardaïa, Algeria, where the company was established by notarial deed in 1997; its commercial register and tax identifiers are listed in the company profile and legal notice.' },
            { id: 'ghardaia-fleet', q: 'Is the equipment kept in Ghardaïa?', a: 'No. The fleet is based at the Djelfa depot; the Ghardaïa office is the registered office of the company and coordinates projects, in particular in the south, with machines dispatched from Djelfa along the RN1.' },
            { id: 'ghardaia-eptpg', q: 'Is ETAHG related to EPTPG or to ETRHB?', a: 'No. SARL ETAHG, Entreprise de Travaux d’Aménagement Hydraulique de Ghardaïa, is an independent private limited liability company established in 1997; it is not related to the public works enterprise EPTPG of Ghardaïa nor to the group known as ETRHB, despite the similar initials.' },
            { id: 'ghardaia-south', q: 'Does ETAHG work in the Saharan wilayas?', a: 'From its registered office in Ghardaïa and its depot in Djelfa, SARL ETAHG is positioned to mobilize along the RN1 towards the south; the company has built roads in many regions of Algeria, and availability for a specific Saharan location is confirmed on request.' },
            { id: 'ghardaia-meet', q: 'Can we meet in Ghardaïa?', a: 'Yes. Contact us to arrange a meeting at the registered office in Bounoura, at the Djelfa depot or on your site.' },
          ],
        },
        {
          type: 'cta',
          title: 'A project in the Algerian Sahara?',
          text: 'Tell us where and when. We will say what we can supply, mobilize or drill, and from which base.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
          ],
        },
      ],
    },

    insights: {
      slug: 'insights',
      nav: 'Insights',
      title: 'Insights: Working on Projects in Algeria | ETAHG',
      description: 'Practical articles by SARL ETAHG for contractors in Algeria: aggregates, road layers, equipment rental, site mobilization, water wells and subcontracting.',
      summary: 'Articles by SARL ETAHG on working in Algeria: aggregate specifications, road construction, renting equipment, site mobilization, water wells, subcontracting and the rules for foreign contractors.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Insights',
          title: 'Practical know-how for projects in Algeria',
          lead: '{{company}} runs a quarry, a road-building fleet and a drilling rig from Djelfa and Ghardaïa, and works with foreign contractors and Algerian project owners. These articles put that experience in writing: how aggregates are specified and produced, how a road is layered on each of Algeria’s terrains, when to rent rather than buy, how a site is opened in the steppe or the desert, how a well is drilled and authorized, and how subcontracting and public procurement work for a newcomer. General know-how only, written to be useful on its own.',
        },
        {
          type: 'articles',
          label: 'Articles',
          title: 'All articles',
          emptyText: 'Articles are in preparation. In the meantime, see our [services](page:services) and [frequently asked questions](page:faq).',
        },
        {
          type: 'cta',
          title: 'A question these articles do not answer?',
          text: 'Ask us directly. We reply with what we know from our own quarry, fleet and sites.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'FAQ', page: 'faq', variant: 'secondary' },
          ],
        },
      ],
    },

    faq: {
      slug: 'faq',
      nav: 'FAQ',
      title: 'FAQ: Company, Services and Cooperation | ETAHG',
      description: 'Answers about SARL ETAHG: who we are, where we are based, fine aggregates, equipment rental, mobilization, water wells, spare parts and working with us.',
      summary: 'Frequently asked questions about SARL ETAHG, its services and how to work with it.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'FAQ',
          title: 'Frequently asked questions about SARL ETAHG',
          lead: 'Short, factual answers about the company, its services and how to work with it.',
        },
        {
          type: 'faq',
          label: 'Company',
          title: 'About the company',
          items: [
            { id: 'what-is-etahg', q: 'Who is SARL ETAHG?', a: 'SARL ETAHG is an Algerian company specialized in fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization and water well drilling. Established in 1997, it is a limited liability company (SARL) registered in Bounoura, wilaya of Ghardaïa, with an equipment depot in Djelfa and its own quarry and stone crushing plant at Oued Sdeur, near Aïn El Ibel, south of Djelfa. Its group includes EURL KAYLE KENNY, a heavy-duty spare parts company in Algiers.' },
            { id: 'etahg-meaning', q: 'What does ETAHG stand for?', a: 'ETAHG stands for “Entreprise de Travaux d’Aménagement Hydraulique de Ghardaïa”; the company’s official Arabic name is شركة الأشغال لتهيئة الري بغرداية. SARL ETAHG was established in Ghardaïa in 1997 and is registered there. It is an independent private company, not related to the public enterprise EPTPG of Ghardaïa nor to the group known as ETRHB, despite the similar initials.' },
            { id: 'what-does-etahg-do', q: 'What does ETAHG do?', a: 'SARL ETAHG produces fine aggregates, builds roads, rents and leases heavy equipment, mobilizes new project sites and drills water wells in Algeria. It does this with its own quarry and stone crushing plant and its own fleet of excavators, bulldozers, loaders, graders, rollers, pavers, bitumen trucks, trucks, semi-trailers and a water well drilling rig, while its group company EURL KAYLE KENNY supplies heavy-duty spare parts.' },
            { id: 'where', q: 'Where is SARL ETAHG located?', a: 'SARL ETAHG’s registered office is at Cité 400 Logements, Sidi Abbaz, Bounoura, wilaya of Ghardaïa, Algeria, and its equipment depot is in Djelfa, on the High Plateaus. Its own quarry and stone crushing plant is at Oued Sdeur, near Aïn El Ibel, south of Djelfa, and its group company EURL KAYLE KENNY has a store and parts depot in Mohammadia, Algiers. Djelfa lies on the RN1, the main north–south road between Algiers and the Sahara.' },
            { id: 'legal-form', q: 'What kind of company is SARL ETAHG?', a: 'SARL ETAHG is a société à responsabilité limitée (SARL), the Algerian form of limited liability company. It was established in 1997. Its commercial register (RC) and tax identification numbers (NIF, NIS, AI) are listed in the company profile and the legal notice of this website.' },
            { id: 'name', q: 'How is the company name written?', a: 'The legal name of the company is SARL ETAHG, where SARL indicates the legal form. The short name ETAHG is written in Latin capital letters in every language, including Arabic and Chinese.' },
            { id: 'kayle-kenny-link', q: 'What is the relationship between SARL ETAHG and EURL KAYLE KENNY?', a: 'EURL KAYLE KENNY is part of the portfolio of SARL ETAHG and is the group’s spare parts company for heavy-duty machines, with a store and parts depot in Mohammadia, Algiers. It supplies diesel engine parts, including Cummins-compatible parts, as an independent supplier, not affiliated with or endorsed by Cummins Inc. For ETAHG’s partners, it is a parts source inside the group.' },
            { id: 'languages', q: 'In which languages is information about ETAHG available?', a: 'This website is available in English, French, Arabic and Simplified Chinese, and so is the company profile. SARL ETAHG can be contacted by email, phone or WhatsApp; please state your preferred language for correspondence in your first message.' },
          ],
        },
        {
          type: 'faq',
          label: 'Services',
          title: 'Services',
          items: [
            { id: 'services-list', q: 'What services does SARL ETAHG offer?', a: 'SARL ETAHG offers fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization (site start-up) and water well drilling in Algeria. Heavy-duty spare parts are available through its group company EURL KAYLE KENNY. Services can be contracted separately or combined in one agreement.' },
            { id: 'aggregates', q: 'Can ETAHG supply fine aggregates for a large project?', a: 'Yes. SARL ETAHG produces high-quality fine aggregates at its own quarry and stone crushing plant at Oued Sdeur, near Aïn El Ibel south of Djelfa, with crushing and grinding machines especially suited to projects that require high production rates. Fractions, quantities, delivery schedule and testing are agreed per project.' },
            { id: 'aggregates-uses', q: 'What are ETAHG’s fine aggregates used for?', a: 'The fine aggregates produced by SARL ETAHG are used mainly in concrete, precast elements, mortar, asphalt mixes and the granular layers of roads and platforms. Crushed fine aggregate, also called manufactured sand, offers a consistent alternative to river or dune sand.' },
            { id: 'rental', q: 'Does ETAHG rent heavy equipment in Algeria?', a: 'Yes. SARL ETAHG rents and leases its own heavy equipment in Algeria: hydraulic excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, asphalt pavers, bitumen trucks, trucks and semi-trailers, on terms agreed per project. The machines are dispatched from its equipment depot in Djelfa.' },
            { id: 'rental-terms', q: 'What are ETAHG’s rental and leasing terms?', a: 'SARL ETAHG agrees rental and leasing terms per project rather than applying fixed conditions. Duration, operators, transport, maintenance and fuel are discussed with the client and written into the contract.' },
            { id: 'fleet', q: 'What equipment does ETAHG own?', a: 'SARL ETAHG owns a quarry and stone crushing plant, a quarry rock drill, hydraulic excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, asphalt pavers, a bitumen distributor and bitumen tankers, trucks, tipper semi-trailers and a truck-mounted water well drilling rig. The mobile fleet is based at its depot in Djelfa. For reasons of discretion, the website lists equipment categories only.' },
            { id: 'roads', q: 'Does ETAHG build roads?', a: 'Yes. Road construction is the original activity of SARL ETAHG: its fleet was mainly used to build roads, and the company has completed road projects in many regions of Algeria, from earthworks to asphalt surfacing.' },
            { id: 'mobilization', q: 'What is project mobilization (project initialization)?', a: 'For SARL ETAHG, project mobilization is the start-up of a new site with its own machines: transporting equipment to the site, clearing, building access tracks and platforms, carrying out the first earthworks, organizing aggregate supply and, where needed, drilling a water well.' },
            { id: 'drilling', q: 'Does ETAHG drill water wells?', a: 'Yes. SARL ETAHG owns truck-mounted water well drilling equipment, recently acquired new, and can drill wells for construction sites, agriculture, industry and communities in Algeria.' },
            { id: 'regions', q: 'Where in Algeria does ETAHG work?', a: 'SARL ETAHG has completed road projects in many regions of Algeria. From its bases in Djelfa and Ghardaïa, on the RN1 axis between Algiers and the Sahara, it is positioned to serve projects in both the north and the south; availability for a specific location is confirmed on request.' },
          ],
        },
        {
          type: 'faq',
          label: 'Working together',
          title: 'Working with ETAHG',
          items: [
            { id: 'foreign-companies', q: 'Does ETAHG work with foreign companies?', a: 'Yes. SARL ETAHG is open to cooperation with foreign companies active in Algeria, including international EPC contractors, cement and mining groups, investors and equipment suppliers. It can act as subcontractor, equipment or aggregate supplier, site start-up partner or local partner for a project.' },
            { id: 'chinese-contractors', q: 'Can Chinese contractors work with ETAHG?', a: 'Yes. SARL ETAHG welcomes cooperation with Chinese contractors and Chinese-owned companies building projects in Algeria, as a subcontractor, equipment or aggregate supplier, site start-up partner or local partner. This website is available in Simplified Chinese. Tell us your preferred language for correspondence when you first write; from mainland China, email ({{email}}) is the most practical channel.' },
            { id: 'subcontract', q: 'Can ETAHG work as a subcontractor?', a: 'Yes. SARL ETAHG can work as a subcontractor for a main contractor on a defined scope, such as earthworks, road layers, asphalt paving, site preparation, aggregate supply or water wells, using its own equipment.' },
            { id: 'quote', q: 'How do I request a quote from ETAHG?', a: 'To request a quote from SARL ETAHG, send the project location (wilaya or nearest town), the scope of work, the equipment or volumes needed, the duration and the start date by email to {{email}}, or by WhatsApp or phone on +213 558 96 10 49.' },
            { id: 'contact', q: 'How do I contact ETAHG?', a: 'SARL ETAHG can be contacted by email at {{email}}, or by phone or WhatsApp on +213 558 96 10 49, the group number shared with EURL KAYLE KENNY. The contact page of www.etahg.com lists all contact details and locations.' },
            { id: 'profile', q: 'Is there a company profile we can share internally?', a: 'Yes. SARL ETAHG publishes a printable company profile on this website, also available as a PDF download.' },
            { id: 'kayle-kenny', q: 'Is EURL KAYLE KENNY affiliated with Cummins?', a: 'No. EURL KAYLE KENNY, the spare parts company of the SARL ETAHG group, supplies Cummins-compatible parts as an independent supplier, not affiliated with or endorsed by Cummins Inc.' },
          ],
        },
        {
          type: 'cta',
          title: 'Another question?',
          text: 'Ask us directly by email, phone or WhatsApp.',
          ctas: [
            { label: 'Email us', kind: 'mailto', variant: 'primary' },
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'secondary' },
            { label: 'Contact us', page: 'contact', variant: 'ghost' },
          ],
        },
      ],
    },

    /* --------------------------------------------------------------- CONTACT */
    contact: {
      slug: 'contact',
      nav: 'Contact',
      title: 'Contact: Email, Phone & WhatsApp | ETAHG',
      description: 'Contact SARL ETAHG by email at {{email}} or by phone and WhatsApp on +213 558 96 10 49. Registered office in Ghardaïa, depot in Djelfa, Algeria.',
      summary: 'Contact details of SARL ETAHG and how to request a quote.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Contact',
          title: 'Contact SARL ETAHG',
          lead: 'Write to SARL ETAHG at [{{email}}](mailto:), or call or message us on WhatsApp on {{phone}}. We answer enquiries from Algerian and international companies directly.',
        },
        {
          type: 'contact',
          label: 'Get in touch',
          title: 'Contact details',
          intro: 'Email is the best channel for documents and for enquiries from China, where WhatsApp is not available. For a quick exchange, call or send a WhatsApp message to the main number below; it is the group number, shared with EURL KAYLE KENNY. The office and quarry lines and the fax are listed underneath.',
          checklistTitle: 'What to include in your enquiry',
          checklist: [
            'Your company name and country',
            'Project location (wilaya or nearest town)',
            'Scope of work',
            'Equipment types or material volumes needed',
            'Expected duration',
            'Planned start date',
          ],
          quoteTitle: 'Request a quote on WhatsApp',
          quoteText: 'Open WhatsApp with a ready-made message and complete the details.',
          quoteLabel: 'Request a quote',
          quoteEmailLabel: 'Send by email',
          quoteMessage: 'Hello SARL ETAHG, I would like a quote.\nCompany:\nProject location (wilaya):\nScope of work:\nEquipment or volumes needed:\nDuration:\nStart date:',
        },
        {
          type: 'prose',
          label: 'International',
          title: 'Calling from abroad',
          paragraphs: [
            'From outside Algeria, dial **{{phone}}**. If WhatsApp is not available to your team, for example in mainland China, write to [{{email}}](mailto:); technical and commercial documents can also be exchanged by email.',
            'Please tell us your preferred language when you write. This website is available in English, French, Arabic and Simplified Chinese. International companies can find more on cooperation models on our page for [international partners](page:partners).',
          ],
        },
        {
          type: 'locations',
          label: 'Locations',
          title: 'Where to find us',
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Before you contact us',
          from: 'faq',
          ids: ['quote', 'contact', 'languages', 'foreign-companies'],
          more: { label: 'All questions and answers', page: 'faq' },
        },
      ],
    },

    /* --------------------------------------------------------------- PROFILE */
    profile: {
      slug: 'company-profile',
      nav: 'Company profile',
      title: 'Company Profile | ETAHG',
      description: 'Printable company profile of SARL ETAHG (est. 1997): activities, fleet, quarry, locations in Ghardaïa, Djelfa and Oued Sdeur, registry and contacts.',
      summary: 'Printable company profile of SARL ETAHG, also available as PDF.',
      layout: 'profile',
      blocks: [
        {
          type: 'hero',
          size: 'profile',
          eyebrow: 'Company profile',
          title: 'SARL ETAHG: company profile',
          lead: 'SARL ETAHG is an Algerian company specialized in fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization and water well drilling.',
          ctas: [{ label: 'Download company profile (PDF)', kind: 'pdf', variant: 'primary' }],
        },
        {
          type: 'prose',
          title: 'Who we are',
          paragraphs: [
            '{{company}} is a limited liability company (SARL) under Algerian law, established in 1997, with its registered office in Bounoura, wilaya of Ghardaïa, an equipment depot in Djelfa and its own quarry and stone crushing plant at Oued Sdeur, near Aïn El Ibel, south of Djelfa. Its fleet was assembled to build roads, and the company has completed road projects in many regions of Algeria. Today it also supplies high-quality fine aggregates, offers its equipment for rent and lease, starts up new projects with its machines and drills water wells.',
          ],
        },
        {
          type: 'cards',
          title: 'Activities',
          style: 'compact',
          items: [
            { title: 'Aggregate production', text: 'Own quarry and stone crushing plant producing high-quality fine aggregates, suited to high production rates.', page: 'aggregates' },
            { title: 'Road construction', text: 'Earthworks, grading, compaction, bitumen spraying and asphalt paving with our own fleet.', page: 'roads' },
            { title: 'Equipment rental and leasing', text: 'Excavators, bulldozers, loaders, graders, rollers, pavers, bitumen trucks, trucks, semi-trailers.', page: 'rental' },
            { title: 'Project mobilization', text: 'Site opening, access tracks, platforms, earthworks, aggregate supply.', page: 'mobilization' },
            { title: 'Water well drilling', text: 'Own truck-mounted drilling rig; wells for sites, farms, industry and communities on request.', page: 'drilling' },
            { title: 'Spare parts', text: 'EURL KAYLE KENNY, Algiers: heavy-duty diesel engine parts.', page: 'parts' },
          ],
        },
        {
          type: 'facts',
          title: 'Company at a glance',
        },
        {
          type: 'locations',
          title: 'Locations',
        },
        {
          type: 'prose',
          title: 'Cooperation with international companies',
          paragraphs: [
            'Subcontracting, equipment rental and leasing, aggregate supply, site start-up, water wells, and local partnership for projects in Algeria. Contact: {{email}}. This profile is also available in French, Arabic and Simplified Chinese.',
          ],
          note: 'EURL KAYLE KENNY is an independent supplier, not affiliated with or endorsed by Cummins Inc.',
        },
      ],
    },

    /* ----------------------------------------------------------------- LEGAL */
    legal: {
      slug: 'legal',
      nav: 'Legal notice',
      title: 'Legal Notice & Privacy | ETAHG',
      description: 'Legal notice and privacy policy of the SARL ETAHG website: publisher, hosting, no cookies, no tracking, and how contact data sent to us is handled.',
      summary: 'Legal notice and privacy policy of www.etahg.com.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Legal',
          title: 'Legal notice and privacy',
          lead: 'Information about the publisher of this website and how we handle your data.',
        },
        {
          type: 'facts',
          variant: 'legal',
          label: 'Publisher',
          title: 'Publisher',
        },
        {
          type: 'prose',
          label: 'Hosting',
          title: 'Hosting',
          paragraphs: [
            'This website is a static website hosted on GitHub Pages, a service of GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, United States.',
          ],
        },
        {
          type: 'prose',
          label: 'Privacy',
          title: 'Privacy policy',
          paragraphs: [
            '**No cookies, no tracking.** This website does not use cookies, analytics, advertising or tracking tools, and it has no contact forms. We do not collect personal data through the website.',
            '**Fonts.** The fonts used on this website are served from this website itself; pages in Chinese use the fonts already installed on your device. No font is loaded from a third-party server, so displaying a page sends no data to a font provider.',
            '**Contacting us.** If you contact us by telephone, WhatsApp or email, we use the information you send only to answer your enquiry and to prepare and manage any business relationship. WhatsApp is operated by WhatsApp LLC / Meta under its own privacy policy.',
            '**Your rights.** You can ask us at any time to access, correct or delete the personal data you have sent us, by writing to [{{email}}](mailto:) or calling [{{phone}}](tel:).',
          ],
        },
        {
          type: 'prose',
          label: 'Content',
          title: 'Intellectual property and liability',
          paragraphs: [
            'The texts, illustrations and design of this website are the property of {{company}} unless stated otherwise. Reproduction requires prior permission.',
            'The information on this website is provided for general information. It does not constitute a contractual offer; the terms of any service are agreed in writing for each project. General technical explanations (for example on aggregates, road building or geology) describe common practice and are not a specification for any particular project.',
            'Third-party names are used only for identification. EURL KAYLE KENNY is an independent supplier, not affiliated with or endorsed by Cummins Inc.',
          ],
        },
      ],
    },
  },

  /* ================================================================ ARTICLES */
  // Insights articles (schema: ARTICLE at the top of this file). General know-how only.
  articles: {
    'aggregate-specifications': {
      slug: 'aggregate-specifications-algeria',
      nav: 'Aggregate specifications in Algeria: fractions, tests and what to ask a supplier',
      title: 'Aggregate Specifications in Algeria: Tests & Sizes | ETAHG',
      description: 'How aggregates are specified in Algeria: d/D fractions, the EN 12620 / 13242 / 13043 references, the usual tests and what to put in a quotation request.',
      summary: 'A buyer’s guide to aggregate specifications in Algeria: fraction notation, the usual tests (grading, sand equivalent, methylene blue, Los Angeles, Micro-Deval), which standards contracts cite, and what to put in a request for quotation.',
      eyebrow: 'Aggregates',
      h1: 'Aggregate specifications in Algeria: fractions, tests and what to ask a supplier',
      lead: 'Concrete, asphalt and road layers each ask something different of the stone that goes into them. This guide from {{company}}, which produces fine aggregates at its own quarry and crushing plant in the wilaya of Djelfa, explains how aggregates are described in Algerian specifications and how to ask a supplier the right questions.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'aggregates',
      related: ['aggregates', 'roads'],
      blocks: [
        {
          type: 'prose',
          title: 'How a fraction is written: the d/D notation',
          paragraphs: [
            'Aggregates are designated by the smallest and largest sieve sizes between which most of the material falls, written d/D in millimetres. A 0/3 is a sand whose grains pass a 3 mm sieve; a 3/8 is a fine gravel (gravillon) retained on 3 mm and passing 8 mm; a 0/31.5 is an all-in graded material from fines to 31.5 mm. The notation does not promise that every grain is inside the range: the standards allow a defined percentage of oversize and undersize, which is why a grading curve, not the name alone, is what a laboratory checks.',
            'In Algeria the fractions most often requested for building and road works are, in general, sands in the 0/3 to 0/5 range, gravels such as 3/8, 8/15 and 15/25 for concrete, and all-in graded materials such as 0/20 and 0/31.5 for unbound pavement layers. Asphalt mixes use their own set of fractions, typically a 0/2 or 0/3 crushed sand combined with 2/6, 6/10 and 10/14 gravels. The exact sizes are fixed by the project specification (the CCTP), not by the supplier.',
          ],
        },
        {
          type: 'prose',
          title: 'Which standards Algerian contracts refer to',
          paragraphs: [
            'Most Algerian project specifications describe aggregates with the vocabulary of the European standards, either directly or through the Algerian NA standards published by IANOR, which are largely aligned with them. Three texts cover the three main uses: EN 12620 for aggregates for concrete, EN 13242 for unbound and hydraulically bound materials used in road layers, and EN 13043 for aggregates for bituminous mixtures. The French complement NF P 18-545, which groups the requirements into codes (A, B, C, D) per use, is also widely cited, and older specifications may still refer to the former French P 18 series.',
            'For a buyer, the practical consequence is simple: the specification will name a category for each property (for example a grading category, a fines category, a resistance category), and the supplier’s test certificates should state the result for each one. When a contract cites a standard without categories, it is worth asking the engineer which values apply before ordering, so that both sides test against the same thresholds.',
          ],
        },
        {
          type: 'table',
          title: 'The tests you will see on a certificate',
          intro: 'The names below are those used in Algerian laboratories and specifications; the European test standards are given for reference.',
          caption: 'Common aggregate tests, what they measure and why they matter',
          head: ['Test', 'What it measures', 'Why it matters'],
          rows: [
            ['Grading (granulométrie, EN 933-1)', 'The sieve curve of the material', 'Workability of concrete, compaction of road layers, asphalt mix design'],
            ['Sand equivalent (équivalent de sable, EN 933-8)', 'Cleanliness of a sand: proportion of clay-like fines', 'Clayey fines weaken concrete and asphalt; values in the 60–70 range are typically required for concrete sand'],
            ['Methylene blue (bleu de méthylène, EN 933-9)', 'The activity of the clay in the fines', 'Complements the sand equivalent for crushed sands with many fines'],
            ['Los Angeles (EN 1097-2)', 'Resistance to fragmentation by impact', 'Base layers, asphalt surfacing and concrete under heavy traffic'],
            ['Micro-Deval (EN 1097-1)', 'Resistance to wear in the presence of water', 'Surface courses, unbound layers exposed to traffic and moisture'],
            ['Flakiness (coefficient d’aplatissement, EN 933-3)', 'Proportion of flat grains', 'Flat grains compact badly and break in asphalt'],
            ['Density and water absorption (EN 1097-6)', 'Particle density and open porosity', 'Mix design, water demand of concrete and asphalt'],
            ['Fineness modulus', 'A single number summarizing the sand curve', 'Sands around 2.2–2.8 are generally preferred for concrete; dune sand is far finer'],
          ],
        },
        {
          type: 'prose',
          title: 'Crushed, alluvial or dune sand',
          paragraphs: [
            'Northern Algeria has little natural sand left to extract: the dredging of wadis has been restricted for years, and the dune sands of the south are very fine, which gives them a low fineness modulus and a high water demand in concrete. Crushed sand, produced from quarried limestone or other hard rock in a crushing and screening plant, has therefore become the common answer. It is angular, which helps the strength of the mix, and its fines content is controlled at the plant rather than left to the river.',
            'Research at Algerian universities has examined conventional concretes made with crushed sand carrying fines contents of roughly 5 to 20 percent and found them workable without loss of strength or durability when the fines are clean, which is why the methylene blue test matters as much as the sand equivalent for this material. Blending crushed and dune sand to correct the curve is also well documented. In practice, the project laboratory decides the mix; the supplier’s job is to deliver a sand whose curve and cleanliness stay stable from one truck to the next.',
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'What a request for quotation should contain',
          list: [
            'The fractions needed (d/D) and the use of each: concrete, asphalt, base layer, sub-base, backfill',
            'The standard or the categories the specification cites, or a copy of the relevant CCTP page',
            'Approximate total quantities and the monthly or weekly rate of delivery',
            'The site location (wilaya and nearest town) and whether delivery or collection at the plant is intended',
            'Whether the client’s laboratory will test at the plant, on delivery or both',
          ],
          cta: { label: 'Request a quotation', page: 'contact' },
        },
        {
          type: 'prose',
          title: 'Reading a supplier’s answer',
          paragraphs: [
            'A credible answer names the quarry and plant the material comes from, attaches recent test results for the fractions offered, and says how production and stock are organized to hold the delivery rate. It also states what is not covered: a supplier cannot promise that a sand will suit a concrete formula before the project laboratory has run its trial mixes, and it should say so. Test requirements, sampling frequency and the method of acceptance are best written into the supply agreement before the first delivery.',
            'Ask also about haulage. Aggregates are heavy and cheap per tonne, so transport distance often weighs more than the price at the plant. A supplier with its own trucks and semi-trailers can give a delivered price per tonne for your location and commit to a rhythm; one who depends on third-party hauliers may not.',
          ],
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'agg-what-is-0-3', q: 'What does 0/3 or 3/8 mean for aggregates?', a: 'A 0/3 is a sand whose grains pass a 3 mm sieve, and a 3/8 is a fine gravel retained on a 3 mm sieve and passing an 8 mm sieve. The two numbers are the lower and upper sieve sizes of the fraction in millimetres, with a tolerance for oversize and undersize defined by the standard.' },
            { id: 'agg-standard', q: 'Which standard applies to aggregates for concrete in Algeria?', a: 'Algerian specifications generally use EN 12620 for concrete aggregates, either directly, through the aligned Algerian NA standards of IANOR, or alongside the French NF P 18-545, and name categories for grading, fines and resistance. The contract specification (CCTP) for each project states which text and which categories apply.' },
            { id: 'agg-sand-equivalent', q: 'What is a good sand equivalent value?', a: 'A sand equivalent above about 60 generally indicates a clean sand, and concrete specifications in Algeria typically require values in the 60–70 range depending on the exposure class. For crushed sands with a high fines content, the methylene blue test is used in addition to judge whether the fines are harmful.' },
            { id: 'agg-crushed-sand-concrete', q: 'Can crushed sand be used in concrete?', a: 'Yes. Crushed sand (manufactured sand) is widely used in concrete in Algeria because natural sand is scarce, and research on Algerian crushed sands has shown that fines contents of up to roughly 20 percent can be acceptable when the fines are clean. The project laboratory confirms the formula with trial mixes.' },
            { id: 'agg-tests-who', q: 'Who tests the aggregates, the supplier or the client?', a: 'In general both: the producer tests at the plant to control production, and the client’s laboratory tests on delivery against the categories in the specification. Sampling frequency and acceptance rules are typically written into the supply agreement before deliveries start.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}} produces high-quality fine aggregates at its own quarry and stone crushing plant, Carrière Djellal El Gharbi at Oued Sdeur near Aïn El Ibel, in the wilaya of Djelfa, with crushing and grinding machines suited to projects that require high production rates. Test requirements are agreed with the client before supply, and the company hauls with its own trucks and tipper semi-trailers. See the [fine aggregate production](page:aggregates) page for the uses and the way supply is organized, or the [road construction](page:roads) page for how the same material goes into pavement layers.',
          ],
        },
        {
          type: 'cta',
          title: 'Need aggregates for a project in Algeria?',
          text: 'Send us the fractions, the quantities and the site location. We reply with what the plant can supply and how.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'Fine aggregate production', page: 'aggregates', variant: 'secondary' },
          ],
        },
      ],
    },

    'rent-or-buy-equipment': {
      slug: 'renting-vs-buying-construction-equipment-algeria',
      nav: 'Renting vs buying construction equipment in Algeria',
      title: 'Renting vs Buying Construction Equipment in Algeria | ETAHG',
      description: 'Decision guide for contractors in Algeria: importing or buying machines, bank leasing (crédit-bail) versus rental, operators, parts and distance.',
      summary: 'Import rules, lead times, leasing versus rental, operators, parts and distance: a decision guide for contractors deciding whether to buy or rent heavy equipment for a project in Algeria.',
      eyebrow: 'Equipment rental',
      h1: 'Renting vs buying construction equipment in Algeria: a decision guide',
      lead: 'Every contractor arriving in Algeria asks the same question in the first month: bring machines, buy them locally, or rent. {{company}}, which rents and leases its own road-building fleet from its depot in Djelfa, sets out the factors that usually decide it.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'rental',
      related: ['rental', 'parts', 'mobilization'],
      blocks: [
        {
          type: 'prose',
          title: 'Why the question is different in Algeria',
          paragraphs: [
            'In many countries the choice between owning and renting is a matter of utilization rate and cash. In Algeria three more factors weigh in. Imports of machinery are regulated and the rules move: for years the import of used equipment was restricted, and even for new machines the licensing, the foreign-exchange formalities and the customs clearance add weeks or months before a machine can work. Second, the distances are long and the terrain varied, so a machine bought for one project may be far from the next one. Third, the after-sales network is uneven outside the big cities, so parts and service matter as much as the purchase price.',
            'None of this makes buying wrong. It means the decision should be taken on the project calendar, not only on the spreadsheet.',
          ],
        },
        {
          type: 'prose',
          title: 'Importing or buying new: lead time and formalities',
          paragraphs: [
            'A machine imported for a project typically needs a purchase through an approved channel, a bank domiciliation of the import, shipping to an Algerian port, customs clearance and transport to the site. Allow for a lead time of several months in the plan and for the possibility that a rule changes between order and delivery. Temporary admission regimes exist for equipment brought in for a specific contract, but they come with their own paperwork and re-export obligations, and they are best checked with a customs broker before the project is priced.',
            'Buying new from a dealer in Algeria avoids the import step but not the waiting list, and the price in dinars reflects duties and the exchange rate. For a long project in one place, with a workshop and a parts stock, owning still makes sense; for a short or scattered scope it rarely does.',
          ],
        },
        {
          type: 'prose',
          title: 'Bank leasing (crédit-bail) is not rental',
          paragraphs: [
            'The word leasing is used in Algeria for two different things. Crédit-bail is a financing product regulated since the 1996 ordinance on leasing: a bank or an approved leasing company such as the public SNL or MLA buys the machine and lets it to the client over several years with a purchase option at the end. It is a way to finance ownership, open in practice to companies registered in Algeria with the usual banking file, and it leaves operation, maintenance and insurance with the lessee.',
            'Operational rental, what {{company}} offers, is a service: the owner of the machine makes it available for a period, with or without operator, with transport, maintenance and fuel allocated as agreed per project, and takes it back at the end. The machine never appears on the client’s balance sheet and the client never has to sell it. For a foreign contractor whose Algerian presence lasts one contract, this difference is often decisive.',
          ],
        },
        {
          type: 'table',
          title: 'A decision table by project profile',
          intro: 'Indicative only; each project has its own numbers.',
          caption: 'Typical fit of buying, leasing and renting with the duration and nature of the work',
          head: ['Project profile', 'Buy or import', 'Crédit-bail', 'Operational rental'],
          rows: [
            ['Short scope, a few weeks to a few months', 'Rarely justified: lead time exceeds the work', 'Not suited', 'Usual choice, with operator if the crew is not yet local'],
            ['One site, one to three years, own workshop', 'Possible for core machines', 'Possible for a registered company', 'Peaks, specialist machines, start-up phase'],
            ['Several sites in different regions', 'Transport between sites adds cost', 'Same constraint', 'Rent near each site from a local depot'],
            ['Start-up phase before own fleet arrives', 'Not available in time', 'Not available in time', 'Bridge until the imported fleet is cleared'],
            ['Long programme in one region', 'Usually the economic choice for the core fleet', 'Financing option', 'Complement for peaks and breakdowns'],
          ],
        },
        {
          type: 'prose',
          title: 'With or without operator',
          paragraphs: [
            'Renting with operator is common in Algeria and worth considering even for contractors who bring their own crews. An operator who knows the machine and the terrain shortens the learning curve, keeps the machine in the condition the owner expects, and is already registered with the Algerian social security system. Without operator, the client takes over the daily checks and the responsibility for how the machine is used. Which option applies, and how transport, maintenance, fuel and insurance are split, is agreed per project and written into the rental contract; there is no fixed Algerian standard form.',
          ],
        },
        {
          type: 'prose',
          title: 'Parts, maintenance and distance',
          paragraphs: [
            'An owned machine is only as productive as its parts supply. Before buying, find out where filters, engine parts and wear parts for that model are stocked in Algeria and how long a non-stock part takes to arrive. Within the ETAHG group, EURL KAYLE KENNY in Algiers supplies heavy-duty diesel engine spare parts, including Cummins-compatible parts, as an independent supplier, not affiliated with or endorsed by Cummins Inc. For rented machines the question largely disappears: maintenance stays with the owner unless agreed otherwise.',
            'Distance matters in the other direction too. A depot on the RN1 in Djelfa is on the road between Algiers and the Sahara, so a rented machine reaches the High Plateaus and the northern Sahara in a day’s haul on a semi-trailer, and returns the same way when the scope ends. Transport is agreed per project, but the geography is what makes rental practical for sites far from the coast.',
          ],
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'rb-import-used', q: 'Can a foreign contractor import used construction equipment into Algeria?', a: 'In general the import of used machinery into Algeria has been restricted for years, and the rules change with successive finance laws, so the current position must be checked with a customs broker before a project is priced. Temporary admission for a specific contract is a separate regime with re-export obligations.' },
            { id: 'rb-leasing-vs-rental', q: 'What is the difference between leasing and rental in Algeria?', a: 'In Algeria, leasing usually means crédit-bail, a bank financing product in which an approved leasing company buys the machine and lets it to the client for several years with a purchase option, while rental means an owner making a machine available for a period as a service. Crédit-bail finances ownership; rental avoids it.' },
            { id: 'rb-with-operator', q: 'Is heavy equipment rented with an operator in Algeria?', a: 'Yes, rental with operator is common in Algeria and is often the practical choice for a contractor whose local crews are not yet in place. Whether a machine comes with an operator, and how transport, fuel and maintenance are split, is agreed per project in the rental contract.' },
            { id: 'rb-how-fast', q: 'How quickly can rented equipment reach a site in Algeria?', a: 'It depends on the distance from the depot, the access to the site and the availability of the machine category; transport is agreed per project. From a depot on the RN1 in Djelfa, sites on the High Plateaus and in the northern Sahara are generally within a day’s haul by semi-trailer.' },
            { id: 'rb-long-term', q: 'Can equipment be rented long term in Algeria?', a: 'Yes. Long-term operational rental, sometimes called leasing in everyday language, is offered by equipment owners such as SARL ETAHG on terms agreed per project, including duration, operators, transport and maintenance; it remains a service contract, distinct from bank crédit-bail.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}} rents and leases its own fleet of hydraulic excavators, bulldozers, wheel loaders, motor graders, vibratory rollers, asphalt paver, bitumen distributor and tankers, trucks and tipper semi-trailers from its equipment depot in Djelfa, with duration, operators, transport and maintenance agreed per project. See [equipment rental and leasing](page:rental) for the categories and the way a request is handled, [project mobilization](page:mobilization) for the start-up phase, and the [spare parts](page:parts) page for engine parts through EURL KAYLE KENNY.',
          ],
        },
        {
          type: 'cta',
          title: 'Weighing up rental for a project in Algeria?',
          text: 'Tell us the machine categories, the location and the dates. We answer with availability and the terms we can propose.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'Equipment rental', page: 'rental', variant: 'secondary' },
          ],
        },
      ],
    },

    'mobilization-checklist': {
      slug: 'mobilizing-heavy-equipment-algeria-checklist',
      nav: 'Mobilizing a site on the High Plateaus and in the Sahara',
      title: 'Mobilizing a Site on the High Plateaus & Sahara | ETAHG',
      description: 'Opening a site on Algeria’s High Plateaus or in the Sahara: access tracks, platforms, flash floods, water, aggregates, climate and RN1 logistics.',
      summary: 'What to settle before the first semi-trailer leaves the depot: access, platforms and drainage, water, aggregate supply, climate, camp and logistics, and the sequence of a site start-up in Algeria’s steppe and desert.',
      eyebrow: 'Project mobilization',
      h1: 'Mobilizing a construction site on the High Plateaus and in the Sahara: a checklist',
      lead: 'The first weeks decide the rhythm of a project. This checklist, drawn from how {{company}} opens sites with its own machines from its depot in Djelfa, lists what is typically settled before the first semi-trailer leaves, with the particular conditions of Algeria’s steppe and desert in mind.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'mobilization',
      related: ['mobilization', 'rental', 'aggregates', 'drilling'],
      blocks: [
        {
          type: 'prose',
          title: 'Why mobilization deserves its own plan',
          paragraphs: [
            'On a new site nothing produces until machines, operators, fuel, water and materials are in place. In the interior of Algeria the distance between a depot and a site can be several hundred kilometres, a site often has no access road, no platform and no water on day one, and the climate is harder than on the coast. Treating the start-up as a project of its own, with a short written sequence agreed with the client, generally avoids the idle weeks that cost the most.',
            'The two landscapes this article covers are the High Plateaus, the wide steppe at roughly 1,000 metres between the Tell Atlas and the Saharan Atlas, where Djelfa lies, and the northern Sahara beyond the Saharan Atlas, where Ghardaïa lies at about 500 metres in the M’zab valley. They share long distances and scarce water but differ in almost everything else.',
          ],
        },
        {
          type: 'prose',
          title: 'Access tracks',
          paragraphs: [
            'Most sites in the interior are reached from a national road such as the RN1 by a track that has to be built or improved before heavy traffic can use it. On the plateaus the natural ground is often firm enough for a graded and compacted track of local material; the problems are crossings of small wadis and the softening of fine soils after winter rain. In the Sahara the problems are sand, whether loose dune sand that needs a stabilized layer or a hard hamada surface that is drivable but rough on tyres, and the width needed for semi-trailers to turn.',
            'The access track is the first job of the bulldozer and the grader on arrival, and its cost should be in the start-up budget rather than discovered later.',
          ],
        },
        {
          type: 'prose',
          title: 'Platforms, drainage and the wadi question',
          paragraphs: [
            'A platform for the camp, the workshop, the stockpiles and the plant is built by stripping, levelling, filling and compacting; a layer of crushed material on top keeps it usable in all weather. The one point that catches newcomers is drainage: both the steppe and the Sahara receive rare but violent rain, and dry wadis fill within hours. A platform set in or beside a wadi bed, however dry it looks in summer, is at risk. Check the signs of past floods, keep installations above them, and give the platform a fall and a ditch.',
          ],
        },
        {
          type: 'prose',
          title: 'Water',
          paragraphs: [
            'Water is needed for compaction, for concrete, for dust control and for the camp, and in these regions it is rarely available from a network at the site. The usual solutions are tankering from the nearest town or a well drilled on or near the site, with storage in tanks or a basin. A well needs an authorization: since late 2021 applications in Algeria go through a single window that involves the national hydraulic resources agency and the integrated water management agency before the wali signs the order, with a target processing time of one month and an 18-month window for the works, extendable once. The application should therefore be filed early, and tankering planned for the gap. The nature of the ground decides the drilling method and the depth, which vary strongly between the Djelfa syncline and the Saharan aquifers.',
          ],
        },
        {
          type: 'prose',
          title: 'Aggregates and the supply radius',
          paragraphs: [
            'Aggregates are the heaviest material a site consumes, so the distance to the nearest plant drives the cost of every cubic metre of concrete and every layer of road. On the plateaus around Djelfa, quarries in limestone are relatively close; in the Sahara the nearest crushing plant may be far away and the first truck should be on the road before the site needs it. Settle the fractions, the quantities and the delivery rhythm with the supplier in the mobilization phase, and reserve space on the platform for stockpiles sized to the haulage distance.',
          ],
        },
        {
          type: 'table',
          title: 'Climate: what changes between the two regions',
          intro: 'Orders of magnitude from public climate data; check the local station for a specific site.',
          caption: 'Working conditions on the High Plateaus and in the northern Sahara',
          head: ['Factor', 'High Plateaus (Djelfa area)', 'Northern Sahara (Ghardaïa area)'],
          rows: [
            ['Altitude', 'Around 1,100 m', 'Around 500 m'],
            ['Winter', 'Cold, frost and occasional snow; frozen ground in the morning', 'Cool nights, mild days'],
            ['Summer', 'Hot, dry', 'Very hot; work hours shift to early morning and evening'],
            ['Rain', 'A few hundred millimetres a year, mostly in winter and spring, sometimes violent', 'Very low annual totals but rare storms that flood wadis'],
            ['Wind and dust', 'Strong winds on open steppe', 'Sand, dust, visibility and abrasion of machines'],
            ['Consequences', 'Winter working days lost; bitumen and concrete temperature limits', 'Heat limits for asphalt and concrete; water storage; filters and cooling'],
          ],
        },
        {
          type: 'prose',
          title: 'Camp, fuel and logistics on the RN1',
          paragraphs: [
            'The RN1 is the backbone of the interior, running from Algiers through Djelfa and Laghouat to Ghardaïa and on into the deep south. Fuel, food, accommodation and parts for a site east or west of it come along it, then over local roads or tracks. A mobilization plan names the nearest town for fuel and supplies, decides whether operators lodge in town or on site, provides for a workshop container and a first stock of filters and wear parts, and fixes who handles accommodation and meals. On remote sites the camp is itself a construction job, with water, sanitation, power and shade to build before the crew arrives.',
          ],
        },
        {
          type: 'steps',
          title: 'The sequence we follow',
          intro: 'Six steps, adapted to each project and agreed with the client before anything moves.',
          items: [
            { title: 'Site and scope review', text: 'Location, access, terrain, water, volumes and schedule are reviewed together, and the list of what must be ready on day one is written down.' },
            { title: 'Equipment and resource plan', text: 'Machine categories, operators and supplies are matched to the scope; the terms of the mobilization are agreed per project.' },
            { title: 'Transport', text: 'Machines are loaded on semi-trailers at the depot or moved from another site; convoy dates follow the access conditions and the road permits for exceptional loads.' },
            { title: 'Site opening', text: 'Clearing, the access track, platforms for equipment and installations, drainage and the first earthworks.' },
            { title: 'Materials and water', text: 'Aggregate supply starts, water is tankered and, where needed, a well is drilled with a truck-mounted rig once the authorization is in hand.' },
            { title: 'Production and follow-up', text: 'The machines work to plan until hand-over, or continue under a rental or subcontract agreement.' },
          ],
        },
        {
          type: 'callout',
          variant: 'key',
          title: 'What to send us to get a mobilization plan',
          list: [
            'Location of the site (wilaya and, if possible, coordinates or a map link)',
            'The scope of the first phase: clearing, access, platforms, earthworks, aggregates, water',
            'Approximate volumes and the planned start date',
            'Whether operators, fuel and accommodation are provided by the client or expected from us',
          ],
          cta: { label: 'Contact us', page: 'contact' },
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'mob-duration', q: 'How long does it take to mobilize equipment to a site in Algeria?', a: 'It depends on the distance from the depot, the access conditions and the scope of the first phase; transport, duration and operators are agreed per project. From Djelfa, sites on the High Plateaus and in the northern Sahara are generally reached by semi-trailer within a day once the convoy is ready.' },
            { id: 'mob-water', q: 'How is water supplied to a construction site in the Sahara?', a: 'Usually by tankering from the nearest town until a well on or near the site is drilled and equipped, with storage in tanks or a basin. Drilling a well in Algeria requires an authorization issued by the wali after review through the single window created in 2021, so the application is filed as early as possible.' },
            { id: 'mob-floods', q: 'Are flash floods a real risk on desert construction sites?', a: 'Yes. Both the steppe and the Sahara receive rare but intense rain, and dry wadis can fill within hours, so camps, stockpiles and plant are placed above the marks of past floods and platforms are given a fall and a ditch.' },
            { id: 'mob-winter', q: 'Can road works continue in winter on the High Plateaus?', a: 'Partly. At around 1,100 metres, Djelfa has frost and occasional snow in winter, which stops asphalt paving and slows earthworks on frozen or saturated ground, so programmes on the plateaus generally plan the bituminous layers outside the cold months.' },
            { id: 'mob-rent', q: 'Can the machines stay on rental after the site is opened?', a: 'Yes. After mobilization the same machines can continue under a rental or leasing agreement, or the works can go on as a subcontract, on terms agreed per project.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}} mobilizes its own machines from its depot in Djelfa to open new sites: clearing, access tracks, platforms, first earthworks, aggregate supply from its own quarry and crushing plant at Oued Sdeur near Aïn El Ibel, and water wells with its truck-mounted rig. See [project mobilization](page:mobilization) for the service, [equipment rental and leasing](page:rental) for what can stay on site afterwards, [fine aggregate production](page:aggregates) and [water well drilling](page:drilling).',
          ],
        },
        {
          type: 'cta',
          title: 'Opening a site soon?',
          text: 'Send us the location and the scope. We will reply with the machines, materials and sequence we can offer.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'Project mobilization', page: 'mobilization', variant: 'secondary' },
          ],
        },
      ],
    },

    'water-well-drilling-guide': {
      slug: 'water-well-drilling-high-plateaus-sahara-algeria',
      nav: 'Water well drilling on the High Plateaus and in the northern Sahara',
      title: 'Water Well Drilling in Algeria: Aquifers & Permits | ETAHG',
      description: 'Water wells around Djelfa and Ghardaïa: the aquifers, rotary and DTH drilling, well completion, pumping tests and the Algerian authorization procedure.',
      summary: 'Aquifers of the Djelfa syncline and the Saharan basin, rotary versus down-the-hole drilling, well completion, development and pumping tests, and the single-window authorization: a guide for project owners who need water in the interior of Algeria.',
      eyebrow: 'Water well drilling',
      h1: 'Water well drilling on the High Plateaus and in the northern Sahara: aquifers, methods and authorization',
      lead: 'A site, a farm or a plant in the interior of Algeria usually has to find its own water. {{company}}, which owns a truck-mounted water well drilling rig and works from Djelfa and Ghardaïa, explains what lies underground in these regions, how a well is drilled and completed, and what the authorization procedure involves.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'drilling',
      related: ['drilling', 'mobilization'],
      blocks: [
        {
          type: 'prose',
          title: 'Two very different undergrounds',
          paragraphs: [
            'Around Djelfa, on the High Plateaus, hydrogeological studies describe a syncline whose upper aquifer, in Mio-Plio-Quaternary deposits, is reported to be some hundreds of metres thick on average and is the one most used by wells and boreholes for drinking water and irrigation across the steppe. Below it lie older sandstone and limestone formations of the Albian and Barremian, also water-bearing, reached by deeper boreholes. Water levels and yields vary along the syncline, and the shallow aquifer depends on the rain that falls on the surrounding ranges.',
            'Around Ghardaïa, in the northern Sahara, the picture is the one of the whole Saharan basin: the Continental Intercalaire, a vast sandstone aquifer of Albo-Barremian age, overlain by the Complexe Terminal. Boreholes into the Continental Intercalaire in this region are deep, in some cases beyond a thousand metres, and are completed with successive cemented casing strings and screens; the water comes up warm because of the depth. Shallower wells in the valley floor and the Complexe Terminal serve many local needs but with more variable quality.',
            'The practical lesson is that the same word, well, covers a shallow water-table well of a few tens of metres and a deep artesian borehole, and that the local hydrogeological data, where available from the water authorities or from the studies of nearby boreholes, is the starting point of any project.',
          ],
        },
        {
          type: 'prose',
          title: 'Rotary or down-the-hole hammer',
          paragraphs: [
            'Two drilling methods cover most water wells. Mud rotary drilling turns a bit on hollow rods while a drilling fluid is pumped down the rods and back up the annulus, carrying the cuttings and supporting the hole; it suits soft and unconsolidated formations and allows large diameters. Down-the-hole (DTH) hammer drilling uses compressed air to drive a piston that strikes the bit at the bottom of the hole; it is fast in hard rock such as limestone and sandstone and lifts the cuttings with the air. Many rigs can do both, and a well may be started with one and finished with the other as the formations change. The choice is made from the expected geology, the target depth and diameter, and the water available for mud.',
          ],
        },
        {
          type: 'steps',
          title: 'From the borehole to a working well',
          intro: 'The usual sequence; each step is sized to the aquifer and the intended use.',
          items: [
            { title: 'Siting and design', text: 'Review of existing boreholes, geology and the authorization file; choice of target depth, diameters and method.' },
            { title: 'Drilling', text: 'Rotary or DTH drilling in one or more diameters, with a log of formations and water strikes.' },
            { title: 'Casing and screen', text: 'A casing string protects the hole and a screen is set against the water-bearing zone; a gravel pack around the screen filters fine sand.' },
            { title: 'Cementing', text: 'The annulus above the screen is sealed to keep surface water and unwanted layers out, and the wellhead is protected.' },
            { title: 'Development', text: 'Air-lifting, surging or pumping clears the drilling fluid and fines until the water runs clean.' },
            { title: 'Pumping test', text: 'A step or constant-rate test measures the yield and the drawdown, which fixes the pump size and the sustainable flow.' },
            { title: 'Equipment', text: 'Pump, riser, cable, wellhead and the connection to the storage; water quality is analysed before use.' },
          ],
        },
        {
          type: 'prose',
          title: 'The authorization procedure in brief',
          paragraphs: [
            'Drilling a water well in Algeria requires an authorization for the use of water resources. Since the 2021 reform, applications are examined through a single window that brings together the national hydraulic resources agency (ANRH), the national agency for integrated water management (AGIRE) and representatives of the environment, agriculture and irrigation sectors; the file is then sent to the wilaya, and the authorization is granted by order of the wali. The regulation sets a target of one month for processing a complete file. The works must in general be carried out within eighteen months of notification, a period that can be extended once by six months on justified grounds.',
            'The file typically describes the applicant, the land, the intended use and volumes, and the characteristics of the planned well. Public reporting indicates that the number of favourable opinions issued each year has grown strongly since the reform. The practical advice is simple: file early, keep the authorization on site, and have the well drilled by a company that records depths, formations and test results for the final report.',
          ],
        },
        {
          type: 'table',
          title: 'What to expect from a well in each region',
          intro: 'General tendencies reported in regional studies; a specific site can differ.',
          caption: 'Indicative comparison of water wells on the High Plateaus and in the northern Sahara',
          head: ['Aspect', 'High Plateaus (Djelfa syncline)', 'Northern Sahara (Ghardaïa area)'],
          rows: [
            ['Main aquifers', 'Mio-Plio-Quaternary; Albian and Barremian sandstones below', 'Complexe Terminal; Continental Intercalaire at depth'],
            ['Typical depths', 'From tens of metres to a few hundred metres', 'From tens of metres to several hundred; over a thousand for the deep aquifer'],
            ['Formations', 'Alluvium, clays, sandstones, limestones', 'Sands, sandstones, limestones, clays'],
            ['Water', 'Generally cooler, quality varies with the layer', 'Warm at depth; mineralization varies'],
            ['Method', 'Rotary in soft ground, DTH in rock', 'Rotary with mud for deep wells; DTH possible in hard layers'],
            ['Recharge', 'Rain on the surrounding ranges', 'Very slow; essentially a stored resource'],
          ],
        },
        {
          type: 'prose',
          title: 'Water quality and temperature',
          paragraphs: [
            'Water from the deep Saharan aquifer is often warm and may carry a mineral load that calls for cooling or treatment before certain uses; water from shallow aquifers can be affected by what happens at the surface. For a construction site this matters for concrete, where sulphates and chlorides are limited by the specification, and for the camp, where drinking water must be analysed. A laboratory analysis after development, before the pump is installed, is standard practice.',
          ],
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'ww-permit', q: 'Do you need a permit to drill a water well in Algeria?', a: 'Yes. A water well in Algeria requires an authorization for the use of water resources, granted by order of the wali after the file has been examined through the single window created in 2021 that involves the ANRH and AGIRE agencies, with a one-month target for processing a complete application.' },
            { id: 'ww-depth', q: 'How deep are water wells around Djelfa and Ghardaïa?', a: 'It varies strongly with the aquifer targeted: wells into the shallow aquifers can be a few tens to a few hundred metres deep, while boreholes into the Continental Intercalaire of the Saharan basin around Ghardaïa are reported to exceed a thousand metres in some cases. Local borehole data and the intended use decide the design.' },
            { id: 'ww-method', q: 'What is the difference between rotary and DTH drilling?', a: 'Rotary drilling cuts the rock with a rotating bit and lifts the cuttings with a circulating fluid, which suits soft and loose formations, while a down-the-hole (DTH) hammer breaks hard rock with air-driven percussion at the bottom of the hole and is faster in limestone and sandstone. Many wells combine both as the formations change.' },
            { id: 'ww-time', q: 'How long does it take to drill a water well?', a: 'A shallow well can be drilled and completed in days, while a deep borehole with several casing strings takes weeks; the authorization procedure, which should be started as early as possible, is often the longest part of the calendar.' },
            { id: 'ww-site-use', q: 'Can a well supply a construction site?', a: 'Yes. A well drilled on or near the site, with storage in a basin or tanks, is a common way to supply compaction water, concrete and the camp in the interior of Algeria, where no network is available; the water is analysed before use in concrete or for drinking.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}} owns a truck-mounted water well drilling rig with its accessories, recently acquired new, and drills wells for construction sites, agriculture, industry and communities, with its registered office in Bounoura, wilaya of Ghardaïa, and its equipment depot in Djelfa. Depth capacity, method and schedule are discussed per project. See [water well drilling](page:drilling) for the service and [project mobilization](page:mobilization) for how a well fits into a site start-up.',
          ],
        },
        {
          type: 'cta',
          title: 'Need water on a site, a farm or a plant?',
          text: 'Send us the location, the intended use and what you know of nearby boreholes. We will tell you what we can drill and how to prepare the file.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'Water well drilling', page: 'drilling', variant: 'secondary' },
          ],
        },
      ],
    },

    'foreign-contractor-checklist': {
      slug: 'foreign-contractors-algeria-checklist',
      nav: 'Checklist for foreign contractors entering Algeria',
      title: 'Foreign Contractors in Algeria: Entry Checklist | ETAHG',
      description: 'Branch or company, the 2023 procurement law, preference margin, subcontracting limits, qualification certificate and how to vet an Algerian partner.',
      summary: 'A practical checklist for foreign and Chinese contractors preparing to work in Algeria: branch or company, public procurement rules, subcontracting, qualification and registration documents, and how to check an Algerian partner.',
      eyebrow: 'Working in Algeria',
      h1: 'Checklist for foreign contractors entering Algeria',
      lead: 'Foreign contractors, among them many Chinese companies, have built a large share of Algeria’s recent infrastructure, almost always with Algerian partners, subcontractors and suppliers alongside. {{company}} works with such contractors from its bases in Djelfa and Ghardaïa. This checklist summarizes the framework a newcomer should know, in general terms; it is not legal advice, and the texts evolve.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'roads',
      related: ['partners', 'roads', 'rental', 'aggregates'],
      blocks: [
        {
          type: 'prose',
          title: 'Forms of presence',
          paragraphs: [
            'A foreign contractor can be present in Algeria in several ways. A liaison office can represent the parent company but may not trade. A branch (succursale) registered in the commercial register is the usual vehicle for executing a specific contract: it is treated as a foreign investment, must be registered with the National Centre of the Commercial Register (CNRC) and carries its own tax and social registrations. A company under Algerian law, typically a SARL or SPA, is the vehicle for a lasting presence; since the 2020 finance laws, the requirement that Algerian partners hold 51 percent of the capital no longer applies to non-strategic sectors, but it remains in force for strategic activities and, under the 2025 mining law, still applies to quarry operation.',
            'Which form fits depends on the contract and the horizon. Many contractors use a branch for a first project and create a company once a pipeline exists.',
          ],
        },
        {
          type: 'prose',
          title: 'Public procurement: Law 23-12 and the preference margin',
          paragraphs: [
            'Public works in Algeria are awarded under the law of 5 August 2023 on public procurement (Law 23-12), which replaced the 2015 regulation’s principles while implementing decrees were being prepared; the 2015 presidential decree 15-247 continued to govern detailed procedures in the meantime, and a national electronic procurement portal was launched under the new law in 2026. Two provisions concern foreign bidders directly. A margin of preference of 25 percent is granted to products of Algerian origin and to companies under Algerian law whose capital is majority held by resident nationals. And in international tenders, foreign bidders must commit to invest in a partnership, in the same field of activity, with such an Algerian company, with sanctions if the commitment is not honoured after award.',
            'For a foreign contractor the consequence is that a credible, qualified Algerian partner is not only useful on site; it is part of the bid.',
          ],
        },
        {
          type: 'prose',
          title: 'Subcontracting: the 40 percent ceiling and prior approval',
          paragraphs: [
            'Under the 2015 regulation, subcontracting in a public contract may not exceed 40 percent of the contract amount, the subcontractor must be approved by the contracting authority before starting, a copy of the subcontract is filed, and the subcontractor must declare its presence on site. Bidders also identify in their offer the share they intend to subcontract to companies under Algerian law. Earlier texts went further and required foreign bidders submitting alone to subcontract a minimum share to Algerian companies. Whatever the exact figures in the texts applicable to a given tender, the direction is constant: Algerian subcontracting is expected, declared and capped.',
          ],
        },
        {
          type: 'prose',
          title: 'The qualification certificate',
          paragraphs: [
            'Any company executing building, public works or hydraulic works under a public contract must hold a certificate of professional qualification and classification, created by executive decree 93-289 of 1993 and renewed since. The certificate states the fields of activity and the category of the company, which depends on its technical staff, equipment and financial capacity, and sets which contract sizes it may bid for. A subcontractor working on a public contract is in general expected to hold one for its field. It is the single most useful document to ask an Algerian partner for, because it summarizes what the state has verified about the company.',
          ],
        },
        {
          type: 'table',
          title: 'Documents a foreign contractor will be asked for, and will ask for',
          intro: 'The usual Algerian file; names are given in French as they appear on the documents.',
          caption: 'Registrations and clearances in an Algerian contractor’s file',
          head: ['Document', 'Issued by', 'What it shows'],
          rows: [
            ['Extrait du registre de commerce (RC)', 'CNRC, consultable through the Sidjilcom portal', 'Legal existence, activities, registered office, managers'],
            ['Numéro d’identification fiscale (NIF)', 'Tax administration', 'Tax registration; appears on every invoice'],
            ['Extrait de rôle', 'Tax administration', 'Tax situation up to date (or a payment schedule)'],
            ['Attestations de mise à jour CNAS / CASNOS', 'Social security funds', 'Social contributions paid for employees / managers'],
            ['Certificat de qualification et classification', 'Ministry or wilaya commission', 'Fields and category for public works'],
            ['Statuts and NIS', 'Notary; national statistics office', 'Legal form, capital, statistical identifier'],
            ['Casier judiciaire of the manager', 'Ministry of Justice', 'Required in most public tender files'],
          ],
        },
        {
          type: 'prose',
          title: 'How to vet an Algerian partner',
          paragraphs: [
            'Ask for the documents above and check what can be checked: the commercial register extract against the CNRC records, the tax and social clearances for their dates, the qualification certificate for its fields and validity. Then look at what no certificate shows. Does the company own the equipment it describes, and where is it kept? Can you visit the depot, the quarry or the plant? Does it know the terrain of the region where your project is, and can it explain how it would mobilize there? Is there a parts and maintenance organization behind the machines? Are contracts, correspondence and site documents available in a language your team reads? The answers to these questions separate a partner from a letterhead.',
          ],
        },
        {
          type: 'callout',
          variant: 'note',
          title: 'Practical points often discovered late',
          list: [
            'Payments in Algeria are made in dinars through Algerian banks; the transferable share of a contract is defined in the contract itself',
            'Site staff need work permits; social security registration of local employees is checked on site',
            'Importing equipment, even temporarily, takes months and the rules change; renting locally bridges the gap',
            'Public contracts are executed under a French-language documentation; a bilingual site team saves weeks',
          ],
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'fc-51-49', q: 'Does the 51/49 rule still apply to foreign contractors in Algeria?', a: 'In general no longer for construction and public works: the 2020 finance laws removed the requirement that Algerian partners hold 51 percent of the capital for non-strategic sectors, while keeping it for strategic activities, and the 2025 mining law keeps it for quarry operation. A foreign contractor can therefore own a construction company in Algeria, but public procurement still rewards Algerian-majority companies through the preference margin and the partnership commitment.' },
            { id: 'fc-preference', q: 'What is the national preference margin in Algerian public procurement?', a: 'It is a 25 percent margin of preference, under Law 23-12 of 2023, granted to products of Algerian origin and to companies under Algerian law whose capital is majority held by resident nationals, applied when offers are compared.' },
            { id: 'fc-subcontract-limit', q: 'How much of a public contract can be subcontracted in Algeria?', a: 'Under the 2015 public procurement regulation, subcontracting may not exceed 40 percent of the contract amount, and each subcontractor must be approved in advance by the contracting authority; the implementing texts of the 2023 law should be checked for the tender concerned.' },
            { id: 'fc-qualification', q: 'What is the certificat de qualification et classification?', a: 'It is the certificate, created by decree 93-289 of 1993, that every company executing public building, public works or hydraulic works must hold; it states the company’s fields of activity and its category, which depends on its staff, equipment and financial capacity, and it is the first document to ask an Algerian partner for.' },
            { id: 'fc-check-partner', q: 'How can a foreign company verify an Algerian company?', a: 'By obtaining its commercial register extract (RC), tax identification (NIF), tax and social security clearances and qualification certificate, checking them against the issuing bodies such as the CNRC, and then visiting its depot, quarry or plant to confirm that the equipment and organization described actually exist.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}} is an Algerian SARL established in 1997, registered in Bounoura, wilaya of Ghardaïa, with its own fleet at its depot in Djelfa and its own quarry and crushing plant at Oued Sdeur near Aïn El Ibel. It works with international contractors as subcontractor, equipment and aggregate supplier, site start-up partner or local partner, and makes its registration documents and company profile available to partners. See [local partner for international contractors](page:partners), [road construction](page:roads), [equipment rental](page:rental) and [fine aggregates](page:aggregates).',
          ],
        },
        {
          type: 'cta',
          title: 'Preparing a bid or a project in Algeria?',
          text: 'Write to us in English, French, Arabic or Chinese with a short description of the project. We reply with what we can bring to it.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'International partners', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    'road-pavement-layers': {
      slug: 'road-pavement-layers-algeria-terrains',
      nav: 'Road pavement layers on Algerian terrains',
      title: 'Road Pavement Layers on Algerian Terrains | ETAHG',
      description: 'How roads are built from the Tell to the Sahara: subgrade, sub-base, base and surfacing, the CTTP catalogue, tuf, frost on the plateaus, heat in the south.',
      summary: 'Subgrade, capping, sub-base, base and wearing course, the materials used in each, how the Algerian pavement catalogue approaches climate and traffic, and what changes between the coast, the Atlas, the High Plateaus and the Sahara.',
      eyebrow: 'Road construction',
      h1: 'Road pavement layers on Algerian terrains: from the Tell to the Sahara',
      lead: 'A road is a stack of layers, each with a job, and the stack changes with the ground, the climate and the traffic. {{company}} built its fleet to construct roads and has done so in many regions of Algeria; this article describes the layers, the materials and the way the four great terrains of the country change the design.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'roads',
      related: ['roads', 'aggregates', 'rental'],
      blocks: [
        {
          type: 'prose',
          title: 'The stack, from the ground up',
          paragraphs: [
            'Below everything is the subgrade (plate-forme), the natural or filled ground after earthworks, whose bearing capacity is classified from the soil tests. Where the ground is weak, a capping layer (couche de forme) of selected material raises it to the class the design needs. Then come the pavement layers proper: a sub-base (couche de fondation) and a base (couche de base), which spread the wheel loads, and the surfacing (couche de roulement), which carries the traffic, sheds water and gives grip. Between the base and the surfacing a tack coat or a binder course may be added, and the whole is drained by shoulders and ditches, without which no stack lasts.',
          ],
        },
        {
          type: 'table',
          title: 'Layers and typical materials',
          intro: 'Thicknesses are indicative ranges for ordinary roads; the design office fixes them for each project.',
          caption: 'Pavement layers, their function and the materials usually specified in Algeria',
          head: ['Layer', 'Function', 'Typical materials', 'Indicative thickness'],
          rows: [
            ['Subgrade / capping', 'Bearing platform, protection against frost and water', 'Selected fill, tuf, treated soil', 'Variable, by soil class'],
            ['Sub-base (fondation)', 'Spreads loads to the ground', 'Unbound graded aggregate (GNT 0/31.5, 0/40), tuf in the south', 'About 20–30 cm'],
            ['Base', 'Main structural layer', 'Crushed graded aggregate, or bituminous base (grave-bitume)', 'About 15–25 cm unbound, 10–15 cm bituminous'],
            ['Binder / wearing course', 'Traffic, waterproofing, grip', 'Hot-mix asphalt (béton bitumineux 0/10 or 0/14), surface dressing on light roads', 'About 5–8 cm asphalt; 1–2 cm surface dressing'],
          ],
        },
        {
          type: 'prose',
          title: 'How the Algerian catalogue approaches design',
          paragraphs: [
            'Algerian road design relies in large part on the catalogue of structures for new pavements issued by the public works technical control body (CTTP), together with soil and material tests by the national laboratories. The catalogue method classifies the traffic (by heavy vehicles per day and the design period), the bearing capacity of the subgrade, and the climatic zone of the site, then proposes structures for each combination and type of network. Engineers also use the CBR method and the French catalogue as references. The point for a contractor or an owner is that a structure is not improvised on site: the layers, the materials and their thicknesses come from the study, and the contractor’s skill lies in producing and compacting them to the specified density and evenness.',
          ],
        },
        {
          type: 'prose',
          title: 'Materials: crushed aggregate, tuf and bitumen',
          paragraphs: [
            'Unbound layers use graded crushed aggregate (grave non traitée, GNT) with a controlled curve such as 0/31.5, compacted at the right moisture content; its quality depends on the hardness of the rock (Los Angeles and Micro-Deval tests) and the cleanliness of the fines. In the southern and Saharan zones, gypsum-limestone crusts known as tuf are a traditional first-choice material for sub-base and base, with their own design rules because they behave differently from standard GNT: they gain cohesion when compacted dry but can degrade with water and fatigue, which is why their use is specified with care.',
            'Bituminous layers are produced in a hot-mix plant from crushed aggregates, crushed sand and road bitumen; the 40/50 penetration grade is the one most commonly used in Algeria, with 35/50 also met in specifications, both suited to a hot climate. Laying follows the paver, the compactors and the temperature windows of the mix, and stops when the air is too cold or the wind cools the mat too fast.',
          ],
        },
        {
          type: 'prose',
          title: 'What each terrain changes',
          paragraphs: [
            'On the coastal Tell, rain, clay soils and high water tables put the emphasis on drainage, capping layers and the protection of the subgrade; cuttings in marl and the stability of embankments are the engineering problems. In the Atlas ranges, the alignment itself is the challenge: rock cuts, high embankments, retaining structures and steep gradients, with a short paving season at altitude.',
            'On the High Plateaus, at around a thousand metres, winters bring frost and occasional snow, so the design guards against frost penetration and the saturation of fine soils in spring, and the programme places the bituminous works in the warm months. Aggregate demand is high because the alignments are long, which makes a nearby quarry the deciding factor in the cost of the unbound layers. In the Sahara, the problems invert: heat, which limits the hours for asphalt and concrete and raises the choice of bitumen grade; wind-blown sand, which encroaches on the road and abrades the surface; the scarcity of water for compaction; and the use of local tuf and crushed material where good rock is far away. Flash floods in wadis dictate the hydraulic structures and the height of the embankments.',
          ],
        },
        {
          type: 'prose',
          title: 'Compaction, water and logistics',
          paragraphs: [
            'Whatever the terrain, the layers only perform if compacted to the specified density at the right moisture content, which is why vibratory rollers, water tankers and a laboratory on site are as important as the paver. In the interior of Algeria the water for compaction is itself a logistical question, answered by tankering or by a well on the alignment. The haulage of aggregates from the quarry to the site, with trucks and tipper semi-trailers, and the supply of bitumen in insulated tankers complete the picture: a road project in these regions is a logistics project as much as a construction one.',
          ],
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'rp-layers', q: 'What are the layers of a road?', a: 'From the bottom up: the subgrade (the prepared natural or filled ground), an optional capping layer, the sub-base, the base and the surfacing or wearing course, sometimes with a binder course between base and surfacing; each layer spreads the loads to the one below and the surfacing provides grip and waterproofing.' },
            { id: 'rp-thickness', q: 'How thick are road layers in Algeria?', a: 'For an ordinary road, orders of magnitude are about 20–30 cm of unbound sub-base, 15–25 cm of unbound base or 10–15 cm of bituminous base, and 5–8 cm of hot-mix asphalt surfacing, but the actual thicknesses are fixed by the design study from the traffic, the subgrade class and the climatic zone, following the Algerian CTTP catalogue.' },
            { id: 'rp-tuf', q: 'What is tuf in Algerian road construction?', a: 'Tuf is the name given to the gypsum-limestone crusts of the southern and Saharan zones of Algeria, widely used as a sub-base and base material because good rock is far away; it has its own design rules because it gains cohesion when compacted but can degrade with water and fatigue.' },
            { id: 'rp-bitumen', q: 'Which bitumen grade is used in Algeria?', a: 'The 40/50 penetration grade road bitumen is the one most commonly used in Algeria, with 35/50 also found in specifications; both are hard grades suited to a hot climate and are used for hot-mix asphalt surfacing and bituminous base layers.' },
            { id: 'rp-winter', q: 'Can asphalt be laid in winter on the High Plateaus?', a: 'Generally not during the cold months: at around a thousand metres, frost, wind and occasional snow cool the mat too quickly for compaction, so bituminous layers on the High Plateaus are programmed for the warm season while earthworks and unbound layers continue when the ground allows.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}} builds roads with its own complete fleet, from earthworks and grading to compaction, bitumen spraying and asphalt paving, in direct contract or as a subcontractor, and supplies the crushed fine aggregates from its own quarry and crushing plant at Oued Sdeur near Aïn El Ibel in the wilaya of Djelfa. Established in 1997, it has completed road projects in many regions of Algeria. See [road construction](page:roads), [fine aggregate production](page:aggregates) and [equipment rental](page:rental).',
          ],
        },
        {
          type: 'cta',
          title: 'A road, platform or access scope to price?',
          text: 'Send us the alignment, the layers specified and the location. We answer with what we can build, supply or rent for it.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'Road construction', page: 'roads', variant: 'secondary' },
          ],
        },
      ],
    },

    'crushed-sand-vs-dune-sand': {
      slug: 'crushed-sand-dune-sand-river-sand-concrete-algeria',
      nav: 'Crushed sand, dune sand or river sand for concrete in Algeria',
      title: 'Crushed, Dune or River Sand for Concrete in Algeria | ETAHG',
      description: 'Why natural sand is scarce in Algeria, what dune sand does in concrete, how crushed sand differs, what research says about fines, and the sand for asphalt.',
      summary: 'The three sands available in Algeria compared for concrete and asphalt: scarce alluvial sand, very fine dune sand and angular crushed sand with controlled fines, with the findings of Algerian research on blends.',
      eyebrow: 'Aggregates',
      h1: 'Crushed sand, dune sand or river sand: which sand for concrete in Algeria?',
      lead: 'Sand is the ingredient of concrete and asphalt that Algeria has the most of and the least of at the same time: the south is covered in it, and the north cannot get enough of the right kind. {{company}}, which produces crushed fine aggregates at its own plant in the wilaya of Djelfa, compares the three sands a project can use.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'aggregates',
      related: ['aggregates', 'roads'],
      blocks: [
        {
          type: 'prose',
          title: 'Why natural sand is scarce in the north',
          paragraphs: [
            'For decades, concrete in northern Algeria was made with alluvial sand dredged from wadis. That resource is finite, its extraction damages riverbeds and water tables, and it has been restricted and policed for years. The result is a market in which clean alluvial sand with a good curve is expensive and uncertain, especially far from the few authorized sources, and in which contractors look to the two alternatives the country has in abundance: the dune sands of the Sahara and the crushed sand of limestone quarries.',
          ],
        },
        {
          type: 'prose',
          title: 'Dune sand: abundant but very fine',
          paragraphs: [
            'Dune sand is rounded, clean and remarkably uniform, which is the problem. Its grains are nearly all in a narrow band of fine sizes, so its fineness modulus is far below the range that concrete standards prefer; a concrete made with it alone needs more water and cement to be workable, shrinks more and tends to lower strength. Algerian research has nevertheless studied it extensively, because it is free and everywhere in the south: used as a corrector blended with a coarser sand, in some cases with fines or additions to complete the curve, it gives acceptable concretes, and it is widely used in mortars and in sand-based materials for roads in the Sahara. The rule of thumb is that dune sand corrects a curve; it rarely makes one on its own.',
          ],
        },
        {
          type: 'prose',
          title: 'Crushed sand: angular, with fines to control',
          paragraphs: [
            'Crushed sand, also called manufactured sand, is the 0/3 to 0/5 fraction that comes out of a crushing and screening plant, in Algeria mostly from limestone. Its grains are angular and rough, which improves the bond with the cement paste and the mechanical strength of the mix but demands a little more water or admixture for the same workability. Its curve is continuous and can be adjusted at the plant, and it contains a share of fines, the dust of fracture, which is both its weakness and its asset: too many clayey fines harm the concrete, but clean limestone fines fill the voids and improve cohesion.',
            'This is why the methylene blue test, which measures the activity of the clay in the fines, matters as much as the sand equivalent for crushed sand. Algerian studies of conventional concretes made with crushed sand carrying fines contents in the range of roughly 5 to 20 percent have found that strength and durability can be maintained when those fines are limestone dust rather than clay. A plant can also wash or air-classify the sand to bring the fines content to the figure the specification asks for.',
          ],
        },
        {
          type: 'table',
          title: 'The three sands side by side',
          intro: 'General tendencies; test results for a given source govern.',
          caption: 'Comparison of alluvial, dune and crushed sand for concrete and asphalt in Algeria',
          head: ['Property', 'Alluvial (river) sand', 'Dune sand', 'Crushed sand'],
          rows: [
            ['Availability', 'Scarce, regulated extraction', 'Abundant in the south', 'Produced on demand at quarries'],
            ['Grain shape', 'Rounded', 'Rounded', 'Angular'],
            ['Grading', 'Variable by source', 'Very fine, uniform', 'Continuous, adjustable at the plant'],
            ['Fines', 'Often clayey', 'Few', 'Limestone dust, to control'],
            ['Water demand', 'Low', 'High', 'Moderate'],
            ['Strength of concrete', 'Good with a good curve', 'Lower alone; usable in blends', 'Good; angularity helps'],
            ['Consistency', 'Depends on the river', 'High', 'High when production is controlled'],
            ['Asphalt mixes', 'Possible', 'Not alone', 'Preferred: angular grains resist deformation'],
          ],
        },
        {
          type: 'prose',
          title: 'What it means for asphalt and road layers',
          paragraphs: [
            'For hot-mix asphalt the answer is less ambiguous than for concrete: crushed sand is preferred because its angular grains interlock and resist rutting under heavy traffic in hot weather, which is exactly the Algerian condition; rounded sands make a mix that is easier to lay but deforms sooner. In unbound road layers the sand fraction of a graded aggregate comes from the same crusher as the gravel, so the question rarely arises, whereas in the Sahara sand-based stabilized layers use dune sand by necessity.',
          ],
        },
        {
          type: 'prose',
          title: 'Choosing in practice',
          paragraphs: [
            'The project laboratory makes the choice, with trial mixes, from the sands actually available within an economic distance of the site. What a supplier can do is deliver a sand whose curve, fines content and cleanliness stay the same from the first truck to the last, and provide test results for each delivery period. For a project owner, the useful questions are where the sand comes from, how its fines are controlled, what its sand equivalent and methylene blue values are, and whether supply can hold the rate the site needs.',
          ],
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'ds-dune-concrete', q: 'Can dune sand be used in concrete?', a: 'Dune sand can be used in concrete mainly as a corrector blended with a coarser sand, because alone it is too fine and uniform, raising water demand and shrinkage and lowering strength; Algerian research documents acceptable concretes with blends and with additions that complete the curve.' },
            { id: 'ds-crushed-vs-river', q: 'Is crushed sand better than river sand for concrete?', a: 'It is different rather than better: crushed sand is angular, which improves bond and strength, and its curve can be controlled at the plant, but it needs a little more water or admixture and its fines must be clean; river sand is rounded and workable but scarce and variable in Algeria. With a proper mix design, crushed sand produces concrete of equal quality.' },
            { id: 'ds-fines', q: 'How much fines can a crushed sand contain?', a: 'It depends on the specification and on the nature of the fines: Algerian studies on crushed limestone sands report that fines contents of up to roughly 20 percent can be acceptable in conventional concrete when the fines are limestone dust rather than clay, which the methylene blue test verifies.' },
            { id: 'ds-why-scarce', q: 'Why is river sand scarce in Algeria?', a: 'Because the extraction of alluvial sand from wadis has been restricted for years to protect riverbeds and water tables, so the authorized sources are few and far from most sites, which makes crushed sand the usual alternative in the north and dune sand blends the alternative in the south.' },
            { id: 'ds-asphalt', q: 'Which sand is used in asphalt?', a: 'Crushed sand is generally preferred for hot-mix asphalt because its angular grains interlock and resist rutting under heavy traffic in hot weather, whereas rounded sands produce a mix that deforms sooner.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}} produces high-quality crushed fine aggregates at its own quarry and stone crushing plant at Oued Sdeur near Aïn El Ibel, in the wilaya of Djelfa, with machines suited to projects that require high production rates, and delivers with its own trucks and semi-trailers. Test requirements are agreed before supply. See [fine aggregate production](page:aggregates) and, for the use of the same material in pavements, [road construction](page:roads).',
          ],
        },
        {
          type: 'cta',
          title: 'Looking for a reliable sand source?',
          text: 'Send us the fractions, the quantities and the site. We reply with test results and a delivered proposal.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'Fine aggregate production', page: 'aggregates', variant: 'secondary' },
          ],
        },
      ],
    },

    'public-works-glossary': {
      slug: 'public-works-glossary-french-english-arabic-chinese',
      nav: 'Public works glossary: French, English, Arabic and Chinese',
      title: 'Public Works Glossary: FR, EN, AR, ZH Terms | ETAHG',
      description: 'Public works terms used on Algerian sites in French, English, Arabic and Chinese: machines, aggregates, road layers, drilling and contract vocabulary.',
      summary: 'The machines, materials, road layers and contract terms a foreign team meets on an Algerian site, in French, English, Arabic and Simplified Chinese.',
      eyebrow: 'Working in Algeria',
      h1: 'Public works glossary: French, English, Arabic and Chinese terms used on Algerian sites',
      lead: 'Algerian site documents are in French, the crews speak Arabic, and more and more of the engineers reading the drawings speak Chinese or English. {{company}}, which works with international contractors from its bases in Djelfa and Ghardaïa, has compiled the terms that come up most often.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'rental',
      related: ['fleet', 'rental', 'roads', 'partners'],
      blocks: [
        {
          type: 'prose',
          title: 'How to use this glossary',
          paragraphs: [
            'The French column is the one that appears in Algerian specifications, bills of quantities and site reports; the Arabic column gives the standard written term, with the word commonly heard on site in brackets where it differs; the Chinese column uses the mainland engineering term. Terms are grouped by theme. Where several words exist, the most common one on Algerian sites is given.',
          ],
        },
        {
          type: 'table',
          title: 'Earthmoving and paving machines',
          caption: 'Machine names in the four languages',
          head: ['French', 'English', 'Arabic', 'Chinese'],
          rows: [
            ['pelle hydraulique', 'hydraulic excavator', 'حفّارة هيدروليكية', '液压挖掘机'],
            ['bouteur (bulldozer)', 'bulldozer', 'جرّافة (بلدوزر)', '推土机'],
            ['chargeuse sur pneus', 'wheel loader', 'محمّلة بعجلات (شارجور)', '轮式装载机'],
            ['niveleuse', 'motor grader', 'آلة تسوية (نيفلوز)', '平地机'],
            ['finisseur', 'asphalt paver', 'فرّاشة الإسفلت (فينيسور)', '沥青摊铺机'],
            ['compacteur vibrant', 'vibratory roller', 'مدحلة اهتزازية', '振动压路机'],
            ['camion-benne', 'tipper truck, dump truck', 'شاحنة قلاّبة', '自卸卡车'],
            ['semi-remorque benne', 'tipper semi-trailer', 'نصف مقطورة قلاّبة', '自卸半挂车'],
            ['répandeuse de bitume', 'bitumen distributor', 'رشّاشة القار', '沥青洒布车'],
            ['citerne à bitume', 'bitumen tanker', 'صهريج القار', '沥青运输罐车'],
            ['chariot de forage (carrière)', 'surface rock drill', 'آلة حفر الصخور', '露天钻机'],
            ['atelier de forage sur camion', 'truck-mounted drilling rig', 'جهاز حفر محمول على شاحنة', '车载钻机'],
          ],
        },
        {
          type: 'table',
          title: 'Aggregates and the crushing plant',
          caption: 'Aggregate and plant vocabulary in the four languages',
          head: ['French', 'English', 'Arabic', 'Chinese'],
          rows: [
            ['carrière', 'quarry', 'محجرة', '采石场'],
            ['station de concassage', 'crushing plant', 'محطة تكسير (كسّارة)', '破碎站'],
            ['concasseur à mâchoires', 'jaw crusher', 'كسّارة فكّية', '颚式破碎机'],
            ['concasseur à cône', 'cone crusher', 'كسّارة مخروطية', '圆锥破碎机'],
            ['concasseur à percussion', 'impact crusher', 'كسّارة صدمية', '反击式破碎机'],
            ['crible', 'screen', 'غربال', '筛分机'],
            ['granulats', 'aggregates', 'ركام (حصى)', '骨料'],
            ['sable concassé', 'crushed sand, manufactured sand', 'رمل مكسّر', '机制砂'],
            ['gravillon', 'fine gravel, chippings', 'حصى صغير (غرافييه)', '碎石'],
            ['grave non traitée (GNT)', 'unbound graded aggregate', 'حصى مدرّج غير معالج', '级配碎石'],
            ['fines', 'fines', 'الدقائق (الغبار)', '石粉'],
            ['équivalent de sable', 'sand equivalent', 'مكافئ الرمل', '砂当量'],
          ],
        },
        {
          type: 'table',
          title: 'Roads and earthworks',
          caption: 'Road construction terms in the four languages',
          head: ['French', 'English', 'Arabic', 'Chinese'],
          rows: [
            ['terrassement', 'earthworks', 'أشغال ترابية', '土方工程'],
            ['déblai / remblai', 'cut / fill', 'حفر / ردم', '挖方 / 填方'],
            ['plate-forme', 'subgrade, platform', 'أرضية (الطبقة الحاملة)', '路基'],
            ['couche de forme', 'capping layer', 'طبقة التشكيل', '路床'],
            ['couche de fondation', 'sub-base', 'طبقة الأساس', '底基层'],
            ['couche de base', 'base course', 'الطبقة القاعدية', '基层'],
            ['couche de roulement', 'wearing course', 'طبقة السطح', '面层'],
            ['béton bitumineux (enrobé à chaud)', 'hot-mix asphalt', 'خرسانة إسفلتية', '热拌沥青混合料'],
            ['grave-bitume', 'bituminous base', 'حصى مقيّر', '沥青稳定碎石'],
            ['couche d’accrochage', 'tack coat', 'طبقة التثبيت', '粘层'],
            ['compactage', 'compaction', 'دكّ (رصّ)', '压实'],
            ['piste d’accès', 'access track', 'مسلك الدخول', '施工便道'],
            ['installation de chantier', 'site mobilization, site set-up', 'تجهيز الورشة', '施工进场 (三通一平)'],
            ['forage d’eau (puits)', 'water well', 'بئر (فوراج)', '水井'],
          ],
        },
        {
          type: 'table',
          title: 'Contracts and site documents',
          caption: 'Contract and administrative vocabulary in the four languages',
          head: ['French', 'English', 'Arabic', 'Chinese'],
          rows: [
            ['maître d’ouvrage (service contractant)', 'project owner, contracting authority', 'صاحب المشروع (المصلحة المتعاقدة)', '业主（发包方）'],
            ['maître d’œuvre', 'engineer, supervising consultant', 'صاحب العمل (مكتب الدراسات)', '监理/设计单位'],
            ['entreprise titulaire', 'main contractor', 'المقاول الرئيسي', '总承包商'],
            ['sous-traitance / sous-traitant', 'subcontracting / subcontractor', 'المناولة / المناول', '分包 / 分包商'],
            ['marché public', 'public contract', 'صفقة عمومية', '公共采购合同'],
            ['CCTP (cahier des clauses techniques particulières)', 'technical specification', 'دفتر الشروط التقنية الخاصة', '技术规范'],
            ['bordereau des prix unitaires', 'schedule of unit prices', 'جدول الأسعار الوحدوية', '单价表'],
            ['devis quantitatif et estimatif', 'bill of quantities', 'الكشف الكمي والتقديري', '工程量清单'],
            ['ordre de service (ODS)', 'notice to proceed', 'أمر بالخدمة', '开工令'],
            ['PV de réception', 'acceptance report', 'محضر الاستلام', '验收记录'],
            ['attachement', 'measurement sheet', 'كشف الأشغال المنجزة', '计量单'],
            ['situation de travaux', 'progress payment statement', 'وضعية الأشغال', '进度款报表'],
            ['location avec opérateur', 'rental with operator', 'كراء مع سائق', '带操作手租赁'],
            ['registre de commerce (RC)', 'commercial register extract', 'السجل التجاري', '商业登记证'],
            ['certificat de qualification et classification', 'qualification and classification certificate', 'شهادة التأهيل والتصنيف المهنيين', '资质等级证书'],
          ],
        },
        {
          type: 'callout',
          variant: 'tip',
          title: 'Three words that cause confusion',
          paragraphs: [
            '“Leasing” in Algeria usually means bank crédit-bail, not operational rental. “Forage” means a drilled well, not just the act of drilling. “Attachement” is the measurement record signed on site, not an attachment to an email.',
          ],
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'gl-language', q: 'What language are construction contracts in Algeria written in?', a: 'Public contracts, specifications and site documents in Algeria are in general written in French, with Arabic used in administration and on site; a bilingual site team, or a local partner working in both, saves a foreign contractor considerable time.' },
            { id: 'gl-finisseur', q: 'What is a finisseur?', a: 'A finisseur is the French word for an asphalt paver, the machine that lays hot-mix asphalt in an even layer ahead of the rollers; in Arabic it is فرّاشة الإسفلت and in Chinese 沥青摊铺机.' },
            { id: 'gl-attachement', q: 'What is an attachement on an Algerian site?', a: 'An attachement is the measurement sheet, signed by the contractor and the supervising engineer, that records the quantities of work executed during a period and forms the basis of the progress payment statement (situation de travaux).' },
            { id: 'gl-gnt', q: 'What does GNT mean in a road specification?', a: 'GNT stands for grave non traitée, an unbound graded crushed aggregate such as a 0/31.5 used for sub-base and base layers; in English it is called unbound graded aggregate and in Chinese 级配碎石.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}} works in French and Arabic on site and corresponds with partners in English and Chinese; this website and the company profile exist in all four languages. The machines in the first table are the categories of its own [fleet](page:fleet), offered for [rental and leasing](page:rental); the road terms describe its [road construction](page:roads) work; and the [international partners](page:partners) page explains how cooperation with a foreign contractor starts.',
          ],
        },
        {
          type: 'cta',
          title: 'Missing a term?',
          text: 'Tell us which word you need in which language and we will add it.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'International partners', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    'subcontracting-algeria': {
      slug: 'public-works-subcontracting-algeria',
      nav: 'How public works subcontracting works in Algeria',
      title: 'Public Works Subcontracting in Algeria Explained | ETAHG',
      description: 'Subcontracting in Algerian public works: legal basis, the 40 percent ceiling, prior approval by the contracting authority, payment and typical scopes.',
      summary: 'Civil code, the 2015 procurement decree and the 2023 law, the approval workflow, payment and the scopes typically subcontracted: how subcontracting works in Algerian public works, for main contractors and subcontractors.',
      eyebrow: 'Working in Algeria',
      h1: 'How public works subcontracting works in Algeria',
      lead: 'Most large projects in Algeria are delivered by a main contractor and a ring of Algerian subcontractors doing the earthworks, the haulage, the aggregates, the wells and the finishing. {{company}} has worked on both sides of that relationship. Here is how it is framed by the texts and how it works in practice, in general terms.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'roads',
      related: ['roads', 'partners', 'mobilization'],
      blocks: [
        {
          type: 'prose',
          title: 'The legal basis',
          paragraphs: [
            'Three layers of text frame subcontracting in Algeria. The civil code allows a contractor to subcontract all or part of the work unless the contract forbids it, while remaining fully responsible towards the owner for the subcontractor’s work. The public procurement regulation, the presidential decree 15-247 of 2015 and the law 23-12 of 2023 that is replacing its principles while implementing texts are issued, adds the conditions specific to public contracts: a ceiling, a prior approval and declarations. And the contract itself, through its special conditions, may restrict subcontracting further or require the subcontractors to be named in the bid.',
          ],
        },
        {
          type: 'prose',
          title: 'The 40 percent ceiling and what cannot be subcontracted',
          paragraphs: [
            'Under the 2015 regulation, the part of a public contract that is subcontracted may not exceed 40 percent of its total amount. Current supplies contracts cannot be subcontracted at all. The bidder states in its offer the amount of the transferable share of the contract that corresponds to services subcontracted to companies under Algerian law, a point of particular interest to foreign bidders, since it connects subcontracting to the share of the contract that may be paid in foreign currency. The implementing decrees of the 2023 law may adjust these figures; the texts applicable to a given tender are those stated in its documents.',
          ],
        },
        {
          type: 'steps',
          title: 'The approval workflow',
          intro: 'The sequence usually followed on a public contract; private contracts are freer but often copy it.',
          items: [
            { title: 'Identification', text: 'The main contractor identifies the scope to subcontract and the Algerian company it intends to use, ideally already in the bid.' },
            { title: 'File', text: 'The subcontractor provides its commercial register extract, tax and social clearances, qualification certificate and a description of its means.' },
            { title: 'Request for approval', text: 'The main contractor submits the subcontractor and the draft subcontract to the contracting authority for prior approval.' },
            { title: 'Approval and contract', text: 'Once approved, the subcontract is signed with the mandatory mentions required by the regulation, and a copy is filed with the contracting authority.' },
            { title: 'Declaration on site', text: 'The subcontractor declares its presence to the contracting authority when it starts, and its staff are registered with social security.' },
            { title: 'Execution and payment', text: 'Work is measured in the main contractor’s attachements; the subcontractor is paid by the main contractor, or directly by the contracting authority when the contract provides for it.' },
          ],
        },
        {
          type: 'prose',
          title: 'Payment',
          paragraphs: [
            'In the general case the main contractor pays the subcontractor from the progress payments it receives, under the terms of the subcontract. The regulation also provides for direct payment of an approved subcontractor by the contracting authority when the contract allows it, a protection worth negotiating for a subcontractor whose scope is large. Either way, the cash flow of a subcontractor follows the rhythm of the main contract’s situations de travaux, with the delays that public accounting can involve; the subcontract should say what happens when the main contractor is paid late. Payments are made in dinars through Algerian banks.',
          ],
        },
        {
          type: 'prose',
          title: 'What a main contractor checks before approving a subcontractor',
          paragraphs: [
            'The file is the first filter: a valid commercial register entry in the right activity, up-to-date tax and social certificates, and a qualification certificate in the field concerned. The second filter is capacity: does the subcontractor own, or have reliable access to, the machines the scope needs, and where are they? Can it mobilize to the site in the time available, and does it know the terrain? The third is organization: a site manager who can read the drawings, laboratory follow-up, safety practice, and someone who answers the phone. Main contractors who skip the second and third filters tend to discover them in the first month of works.',
          ],
        },
        {
          type: 'table',
          title: 'Scopes most often subcontracted',
          intro: 'Typical packages on Algerian infrastructure projects and what the subcontractor must bring.',
          caption: 'Common subcontracted scopes and the means they require',
          head: ['Scope', 'What is expected', 'Typical means'],
          rows: [
            ['Earthworks and platforms', 'Cut and fill to the drawings, compaction to density', 'Excavators, bulldozers, graders, rollers, water tankers'],
            ['Road layers', 'Sub-base, base and sometimes asphalt to the specification', 'Graders, rollers, paver, bitumen distributor, laboratory follow-up'],
            ['Aggregate supply and haulage', 'Fractions to the specification, at the delivery rate', 'Quarry and crushing plant, trucks and semi-trailers'],
            ['Site start-up', 'Access tracks, platforms, first earthworks, water', 'Mobilized fleet, drilling rig'],
            ['Water wells', 'Authorized borehole, completed and tested', 'Drilling rig, pumping test equipment'],
            ['Equipment with operator', 'Machines available on site for the main contractor', 'Fleet, operators, maintenance support'],
          ],
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'sc-limit', q: 'What is the subcontracting limit in Algerian public contracts?', a: 'Under the 2015 public procurement regulation (decree 15-247), subcontracting may not exceed 40 percent of the total amount of a public contract, and current supplies contracts may not be subcontracted at all; the implementing texts of the 2023 law should be checked for the tender concerned.' },
            { id: 'sc-approval', q: 'Does a subcontractor need to be approved in Algeria?', a: 'Yes. On a public contract the subcontractor must be approved in advance by the contracting authority, a copy of the subcontract is filed with it, and the subcontractor declares its presence on site when it starts.' },
            { id: 'sc-foreign', q: 'Can a foreign main contractor subcontract to an Algerian company?', a: 'Yes, and it is expected: bidders identify in their offer the share of the contract subcontracted to companies under Algerian law, foreign bidders in international tenders must commit to a partnership with an Algerian-majority company under the 2023 law, and local subcontracting is the usual way to supply earthworks, haulage, aggregates and wells.' },
            { id: 'sc-payment', q: 'Who pays the subcontractor on an Algerian public contract?', a: 'In general the main contractor pays the subcontractor from its own progress payments under the terms of the subcontract, but the regulation also allows direct payment of an approved subcontractor by the contracting authority when the contract provides for it.' },
            { id: 'sc-documents', q: 'What documents does a subcontractor need in Algeria?', a: 'Typically a commercial register extract in the relevant activity, the tax identification number and an up-to-date tax statement, up-to-date social security certificates (CNAS and CASNOS), the qualification and classification certificate for its field, and a description of its equipment and staff.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}}, an Algerian SARL established in 1997, works as a subcontractor on defined scopes such as earthworks, road layers, asphalt paving, site preparation, aggregate supply and water wells, using its own fleet based in Djelfa and its own quarry and crushing plant at Oued Sdeur near Aïn El Ibel. Its registration documents are available to main contractors preparing an approval file. See [road construction](page:roads), [local partner for international contractors](page:partners) and [project mobilization](page:mobilization).',
          ],
        },
        {
          type: 'cta',
          title: 'Looking for an approved-ready subcontractor?',
          text: 'Send us the scope, the location and the schedule. We reply with our capacity and the documents for your approval file.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'International partners', page: 'partners', variant: 'secondary' },
          ],
        },
      ],
    },

    'crushing-plant-explained': {
      slug: 'how-a-crushing-plant-produces-fine-aggregate',
      nav: 'How a crushing and screening plant produces fine aggregate',
      title: 'How a Crushing Plant Produces Fine Aggregate | ETAHG',
      description: 'From blasting to the stockpile: jaw, cone and vertical shaft impact crushers, screens, fines control and what decides a plant’s output of crushed sand.',
      summary: 'A buyer-side explainer of a quarry crushing circuit: extraction, primary, secondary and tertiary crushing, screening, the control of fines, and the factors that decide output and consistency of fine aggregate.',
      eyebrow: 'Aggregates',
      h1: 'How a crushing and screening plant produces fine aggregate',
      lead: 'A crushing plant turns blasted rock into graded, consistent material through a sequence of machines that each reduce the size a little further and sort what comes out. {{company}}, which operates its own quarry and stone crushing plant in the wilaya of Djelfa, explains the circuit for the buyers of its product rather than for the people who build such plants.',
      datePublished: '2026-10-06',
      dateModified: '2026-10-06',
      service: 'aggregates',
      related: ['aggregates', 'fleet'],
      blocks: [
        {
          type: 'prose',
          title: 'It starts at the rock face',
          paragraphs: [
            'A quarry is a bench cut into a deposit of rock, in Algeria most often limestone, under a mining title issued by the national mining agency and renewed under the 2025 mining law. A surface rock drill bores a pattern of holes into the bench, explosives are placed and fired by a licensed team, and the blast brings down a pile of fragmented rock, the muck pile, whose size distribution depends on the drilling pattern and the charge. A loader or an excavator feeds this rock into trucks or directly into the primary crusher. The quality of the final sand is already being decided here: a hard, clean, unweathered rock gives strong, clean aggregates; a rock with clay seams gives harmful fines that the plant will have to remove.',
          ],
        },
        {
          type: 'steps',
          title: 'The circuit, stage by stage',
          intro: 'A typical three-stage circuit for fine aggregate; plants differ in detail.',
          items: [
            { title: 'Feeding and scalping', text: 'A hopper and a vibrating feeder meter the rock into the circuit; a grizzly or scalping screen takes out the natural fines and soil before they enter the crusher.' },
            { title: 'Primary crushing: the jaw crusher', text: 'Two jaws, one fixed and one moving, squeeze the rock until it breaks and falls through the gap; the primary reduces blocks of several hundred millimetres to a product of roughly 100 to 200 mm.' },
            { title: 'Secondary crushing: cone or impact crusher', text: 'A cone crusher squeezes the rock between a rotating mantle and a bowl; an impact crusher throws it against plates. Both bring the material down to a few tens of millimetres and begin to shape the grains.' },
            { title: 'Tertiary crushing: the vertical shaft impactor', text: 'A VSI accelerates the stones in a rotor and throws them against an anvil ring or a bed of rock, breaking them on their weak planes; this is the stage that produces cubical grains and most of the crushed sand.' },
            { title: 'Screening', text: 'Multi-deck vibrating screens split the stream into the fractions sold, 0/3, 3/8, 8/15 and so on, and send oversize back to the crusher it came from; this closed circuit is what gives a controlled curve.' },
            { title: 'Fines control and stockpiling', text: 'Dust is captured by spraying or extraction, and the fines content of the sand is adjusted by screening, air classification or washing; conveyors build the stockpiles the trucks load from.' },
          ],
        },
        {
          type: 'prose',
          title: 'Why the tertiary stage decides sand quality',
          paragraphs: [
            'Jaw and cone crushers work by compression and leave flaky, elongated grains, which is acceptable for a sub-base but not ideal for concrete and asphalt. Impact crushing, and especially the vertical shaft impactor, breaks the rock along its natural planes and rounds the corners, giving a more cubical, better-graded product and generating the sand fraction in quantity. A plant that sells fine aggregate for concrete and asphalt therefore lives by its tertiary stage: its rotor speed, the wear of its parts and the feed it receives set the curve and the shape of the sand. This is also where grinding and milling machines come in for the finest products.',
          ],
        },
        {
          type: 'table',
          title: 'What decides the output of a plant',
          intro: 'The factors a buyer should ask about when a project needs a high and steady rate of supply.',
          caption: 'Factors influencing the capacity and consistency of a crushing plant',
          head: ['Factor', 'Effect', 'What to ask the supplier'],
          rows: [
            ['Rock hardness and abrasiveness', 'Harder rock means slower crushing and faster wear', 'Which rock, and what are its Los Angeles and Micro-Deval values'],
            ['Feed size and blasting', 'Well-fragmented feed keeps the primary flowing', 'How is the quarry face worked'],
            ['Crusher settings and wear parts', 'The closed-side setting and the wear of liners move the curve', 'How often are settings and liners checked'],
            ['Screen area and decks', 'Screening is often the bottleneck', 'Which fractions can be produced simultaneously'],
            ['Closed circuit', 'Oversize returned to the crusher stabilizes the product', 'Is the circuit closed on the sand fraction'],
            ['Moisture and fines', 'Wet or clayey feed blinds the screens', 'How are fines controlled; is the sand washed or classified'],
            ['Stock and haulage', 'Stockpiles absorb peaks; trucks set the delivered rate', 'Stock on the ground; own trucks or hired'],
          ],
        },
        {
          type: 'prose',
          title: 'Consistency is the product',
          paragraphs: [
            'For the buyer, the value of a plant is not its peak tonnage but the sameness of its sand from week to week: the same curve, the same fines, the same cleanliness. That consistency comes from a steady feed, from maintenance of the crushers and screens, and from testing at the plant, with grading and sand equivalent run on production samples and recorded. Projects that need high production rates, such as a large concrete pour programme or the layers of a long road, should ask to see those records and visit the plant; the stockpiles, the state of the screens and the dust control say a great deal in ten minutes.',
          ],
        },
        {
          type: 'faq',
          title: 'Frequently asked questions',
          items: [
            { id: 'cp-stages', q: 'What are the stages of a crushing plant?', a: 'A typical plant has a primary stage (a jaw crusher that breaks blasted rock to roughly 100–200 mm), a secondary stage (a cone or impact crusher that brings it to a few tens of millimetres), a tertiary stage (often a vertical shaft impactor that shapes the grains and produces sand) and screens that sort the fractions and return oversize to the crushers.' },
            { id: 'cp-jaw-vs-cone', q: 'What is the difference between a jaw crusher and a cone crusher?', a: 'A jaw crusher breaks large blocks by squeezing them between a fixed and a moving jaw and is used as the primary crusher, while a cone crusher squeezes already-reduced rock between a rotating mantle and a bowl and is used as a secondary or tertiary crusher for finer, more uniform products.' },
            { id: 'cp-vsi', q: 'What is a VSI crusher used for?', a: 'A vertical shaft impactor (VSI) throws stones at high speed against an anvil ring or a rock bed so that they break along their natural planes; it is used in the tertiary stage to produce cubical grains and crushed sand for concrete and asphalt.' },
            { id: 'cp-fines', q: 'How are fines controlled in crushed sand?', a: 'By screening, by air classification or by washing, after dust has been limited at source with water sprays and extraction; the target fines content is the one the project specification asks for, and the methylene blue test checks that the remaining fines are not clayey.' },
            { id: 'cp-capacity', q: 'How much aggregate can a crushing plant produce?', a: 'It depends on the size of the crushers and screens, the hardness of the rock, the fractions produced at the same time and the organization of the quarry and haulage; rather than a headline tonnage, a buyer should ask for the sustained rate the plant can hold for the fractions it needs and the stock available.' },
          ],
        },
        {
          type: 'prose',
          title: 'How ETAHG can help',
          paragraphs: [
            '{{company}} operates its own quarry and stone crushing plant, Carrière Djellal El Gharbi at Oued Sdeur near Aïn El Ibel in the wilaya of Djelfa, with crushing and grinding machines that produce high-quality fine aggregates and are especially suited to projects requiring high production rates, and it hauls with its own trucks and tipper semi-trailers. Visits to the plant can be arranged. See [fine aggregate production](page:aggregates) and the [fleet](page:fleet) page.',
          ],
        },
        {
          type: 'cta',
          title: 'A project with a high aggregate demand?',
          text: 'Tell us the fractions, the rate and the location. We reply with what the plant can hold and how deliveries would run.',
          ctas: [
            { label: 'Contact us', page: 'contact', variant: 'primary' },
            { label: 'Fine aggregate production', page: 'aggregates', variant: 'secondary' },
          ],
        },
      ],
    },
  },
};
