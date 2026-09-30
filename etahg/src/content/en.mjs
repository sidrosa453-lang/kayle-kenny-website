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
 * Keep "ETAHG" in Latin capitals in every language; never expand the acronym.
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
 *   meta   optional overrides of src/templates/structure.mjs LANG_META (label, dir, ogLocale…)
 *   ui     interface strings (header, footer, facts panel, locations, map, 404…)
 *   pages  one object per page id (see structure.mjs PAGES)
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
 *   layout       optional: 'profile' (printable company profile)
 *   blocks       ordered array of blocks (below). `label` = small numbered section label.
 *                Any block may set `id` (anchor) and `tone`: 'light' | 'sand' | 'ink'.
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
      title: 'SARL ETAHG | Aggregates, Heavy Equipment & Roads, Algeria',
      description: 'SARL ETAHG, established in 1997, is an Algerian company for fine aggregates, road construction, equipment rental, site mobilization and water wells.',
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
      title: 'Civil Works & Construction Services in Algeria | ETAHG',
      description: 'SARL ETAHG services in Algeria: crushed fine aggregates, road construction, heavy equipment rental and leasing, site mobilization and water well drilling.',
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
      title: 'Fine Aggregate Supplier in Djelfa, Algeria | ETAHG',
      description: 'Crushed fine aggregates (manufactured sand) from SARL ETAHG’s plant near Djelfa, Algeria, for concrete, asphalt and roads at high production rates.',
      summary: 'High-quality crushed fine aggregates from SARL ETAHG’s own quarry and stone crushing plant at Oued Sdeur, near Aïn El Ibel (Djelfa), suited to high production rates.',
      service: { name: 'Fine aggregate production and supply', serviceType: 'Crushed fine aggregate (manufactured sand) production' },
      whatsapp: 'Hello SARL ETAHG, I would like information on fine aggregate supply (location, use, quantities, schedule).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Aggregate production',
          title: 'Crushed fine aggregates for high-volume projects in Algeria',
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
      title: 'Heavy Equipment Rental & Leasing in Algeria | ETAHG',
      description: 'Rent or lease heavy equipment in Algeria from SARL ETAHG: excavators, bulldozers, loaders, graders, rollers, pavers and trucks, terms agreed per project.',
      summary: 'Rental and leasing of SARL ETAHG’s own heavy equipment fleet in Algeria, dispatched from Djelfa.',
      service: { name: 'Heavy equipment rental and leasing', serviceType: 'Heavy equipment rental' },
      whatsapp: 'Hello SARL ETAHG, I would like to rent heavy equipment (machines, location, start date, duration).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Equipment rental and leasing',
          title: 'Heavy equipment for rent and lease, from a road builder’s own fleet',
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
      title: 'Project Mobilization & Site Start-up in Algeria | ETAHG',
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
      title: 'Road Construction Contractor in Algeria | ETAHG',
      description: 'SARL ETAHG builds roads in Algeria with its own complete fleet: earthworks, grading, compaction, bitumen spraying and asphalt paving, in many regions.',
      summary: 'Road construction, SARL ETAHG’s original activity, carried out with its own fleet and aggregates.',
      service: { name: 'Road construction', serviceType: 'Road construction and earthworks' },
      whatsapp: 'Hello SARL ETAHG, I would like to discuss a road construction project (location, length, scope).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Road construction',
          title: 'Road construction across Algeria, from earthworks to asphalt',
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
      description: 'SARL ETAHG drills water wells in Algeria with its own rigs, for construction sites and for agricultural, industrial and community needs, on request.',
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
            '{{company}} is a limited liability company (SARL) under Algerian law, established in 1997, with its registered office at Cité 400 Logements, Sidi Abbaz, Bounoura, in the wilaya of Ghardaïa. Its equipment depot is in Djelfa. Its own quarry and stone crushing plant, Carrière Djellal El Gharbi, is at Oued Sdeur, near Aïn El Ibel, south of Djelfa: the company extracts the rock and crushes it into high-quality fine aggregates. The short name ETAHG is used in all languages.',
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
};
