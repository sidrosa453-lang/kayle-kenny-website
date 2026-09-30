/*
 * SARL ETAHG website — ENGLISH CONTENT (default language)
 * ======================================================
 * This file is PURE DATA. Every visible English word of the website lives here.
 * Translators: copy this file to fr.mjs / ar.mjs / zh.mjs, keep every key and
 * every page id, translate the values, and (FR only) translate the `slug`s.
 * Facts must follow BRIEF.md: never add numbers, names, places, certifications.
 *
 * TOKENS (replaced at build time, usable in any string)
 *   {{company}} SARL ETAHG   {{short}} ETAHG   {{phone}} +213 …   {{group}} EURL KAYLE KENNY
 *   {{year}} current year
 *
 * INLINE MARKUP (any text field of a block)
 *   **bold**   [label](page:ID)   [label](page:ID#anchor)   [label](https://…)
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
 *   title        <title>, max 60 chars, must end with "| SARL ETAHG" (home may lead with brand)
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
    phoneLabel: 'Telephone',
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

    footer: {
      tagline: 'Algerian heavy-works company: fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization and water well drilling.',
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
      languagesValue: 'Arabic, French, English (website also in Simplified Chinese)',
      group: 'Group company',
      groupValue: 'EURL KAYLE KENNY: heavy-duty spare parts, Algiers',
      founded: 'Founded',
      rc: 'Trade register (RC)',
      nif: 'Tax ID (NIF)',
      nis: 'Statistical ID (NIS)',
      ai: 'Article of taxation (AI)',
      fleet: 'Fleet',
      capacity: 'Crushing capacity',
      capacityUnit: 'tonnes per hour',
      certifications: 'Certifications',
      phone: 'Telephone / WhatsApp',
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
        quarry: 'Stone crushing plant',
        parts: 'Spare parts store and depot',
      },
      details: {
        hq: 'Where SARL ETAHG is registered. Ghardaïa lies in the northern Algerian Sahara, in the M’zab valley.',
        depot: 'Base of the heavy equipment fleet, on the High Plateaus and on the RN1 north–south axis.',
        quarry: 'Aggregate production site outside Djelfa, about 25 km south of the city.',
        parts: 'EURL KAYLE KENNY, the group’s spare parts company, with stock in Algiers.',
      },
      wilaya: 'Wilaya of {{region}}',
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

    records: {
      region: 'Region',
      project: 'Project',
      year: 'Year',
      client: 'Client',
      scope: 'Scope',
    },

    notFound: {
      title: 'Page not found | SARL ETAHG',
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
      title: 'SARL ETAHG | Aggregates, Roads & Heavy Equipment, Algeria',
      description: 'SARL ETAHG is an Algerian heavy-works company: fine aggregate production, road construction, heavy equipment rental, mobilization and water wells.',
      summary: 'Overview of SARL ETAHG, an Algerian heavy-works company based in Ghardaïa and Djelfa.',
      blocks: [
        {
          type: 'hero',
          size: 'home',
          eyebrow: 'Algerian heavy-works company',
          title: 'SARL ETAHG: fine aggregates, road construction and heavy equipment in Algeria',
          lead: 'We operate stone crushing plants that produce high-quality fine aggregates, a fleet of heavy machines that has built roads in many regions of Algeria, and the know-how to start up new project sites quickly. Our equipment is available for rent and lease.',
          points: [
            'Registered office in Ghardaïa, equipment depot in Djelfa',
            'Stone crushing plant at Oued Seddeur, south of Djelfa',
            'Own fleet: semi-trailer trucks, trucks, bulldozers, excavators, road pavers',
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
            { title: 'Fine aggregates', text: 'Crushed fine aggregates from our own crushing plant, suited to high production rates.' },
            { title: 'Road construction', text: 'Earthworks, pavement layers and surfacing, delivered with our own fleet.' },
            { title: 'Equipment rental', text: 'Trucks, bulldozers, excavators and pavers for rent or lease.' },
            { title: 'Site mobilization', text: 'Opening new project sites: clearing, access, earthworks, aggregate supply.' },
            { title: 'Water wells', text: 'Water well drilling with our own drilling rigs.' },
          ],
        },
        {
          type: 'split',
          label: 'Company',
          title: 'A heavy-works partner positioned between the north and the south of Algeria',
          paragraphs: [
            '{{company}} is an Algerian limited liability company (SARL) registered in **Ghardaïa**, in the northern Sahara. Its heavy equipment is based in **Djelfa**, on the High Plateaus and on the RN1, the main north–south road linking Algiers to the Sahara. Its stone crushing plant is at **Oued Seddeur**, about 25 km south of Djelfa.',
            'For years our fleet was used mainly to build roads for our own projects, in many regions of the country. That experience taught us how Algeria’s terrains behave (coastal plains, mountains, steppe and desert) and how to keep machines productive in each of them. Today we put the same fleet, crushing capacity and site experience at the disposal of project owners and contractors, including international companies looking for a reliable local partner.',
          ],
          ctas: [{ label: 'About the company', page: 'about', variant: 'secondary' }],
          illustration: 'mobilization',
        },
        {
          type: 'cards',
          label: 'Services',
          title: 'What we do',
          intro: 'Six complementary services, delivered with our own machines and people, so that one partner can cover materials, equipment and site work.',
          style: 'services',
          items: [
            { page: 'aggregates', illustration: 'crusher', title: 'Aggregate production', text: 'High-quality fine aggregates from our stone crushing plant, for concrete, asphalt and road layers, especially where high production rates are required.' },
            { page: 'roads', illustration: 'paver', title: 'Road construction', text: 'Earthworks, sub-base and base courses and surfacing, carried out with our own trucks, bulldozers, excavators and pavers.' },
            { page: 'rental', illustration: 'excavator', title: 'Equipment rental and leasing', text: 'Semi-trailer trucks, trucks, bulldozers, excavators and road pavers, with terms agreed per project.' },
            { page: 'mobilization', illustration: 'mobilization', title: 'Project mobilization', text: 'We open new sites: equipment on site, clearing, access tracks, earthworks and aggregate supply set up.' },
            { page: 'drilling', illustration: 'drill-rig', title: 'Water well drilling', text: 'Our own drilling rigs for water wells serving projects, agriculture and communities.' },
            { page: 'parts', illustration: 'spare-parts', title: 'Spare parts (EURL KAYLE KENNY)', text: 'Our group company supplies heavy-duty diesel engine parts from stock in Algiers.' },
          ],
        },
        {
          type: 'features',
          label: 'International partners',
          title: 'Why international companies work with ETAHG',
          intro: 'Foreign contractors, suppliers and investors entering a project in Algeria need a local company that already owns equipment, produces materials and knows the ground. That is what we offer.',
          items: [
            { title: 'Equipment we own', text: 'Our trucks, bulldozers, excavators, pavers and drilling rigs are our own fleet, maintained by us and available to mobilize.' },
            { title: 'Materials at the source', text: 'Our crushing plant produces fine aggregates, so a project can secure a local supply of a critical material early.' },
            { title: 'Central position', text: 'Based in Djelfa and Ghardaïa, on the RN1 axis between Algiers and the Sahara, we can reach projects in the north and in the south.' },
            { title: 'Terrain experience', text: 'Road projects in many regions of Algeria have given us practical knowledge of coastal, mountain, steppe and desert conditions.' },
            { title: 'One partner, several scopes', text: 'Aggregates, equipment, earthworks, roads and water wells can be combined in one agreement, with one point of contact.' },
            { title: 'Parts support in the group', text: 'EURL KAYLE KENNY, our group company in Algiers, supplies heavy-duty spare parts to keep machines running.' },
          ],
        },
        {
          type: 'steps',
          label: 'Mobilization',
          title: 'How we mobilize a new project',
          intro: 'Starting a site is where time is won or lost. Our mobilization follows a clear sequence, adapted to each project and agreed with the client.',
          items: [
            { title: 'Scope and site review', text: 'We study the location, access, terrain, volumes and schedule with you, and identify what must be ready on day one.' },
            { title: 'Equipment and resource plan', text: 'We select the machines, crews and supplies the scope requires and agree on the terms of mobilization.' },
            { title: 'Transport to site', text: 'Heavy equipment is moved by semi-trailer from our Djelfa depot or directly between sites.' },
            { title: 'Site opening', text: 'Clearing, access tracks, platforms and first earthworks, so that the main works can begin.' },
            { title: 'Materials and water', text: 'Aggregate supply is organised and, where needed, a water well is drilled for the site.' },
            { title: 'Production and follow-up', text: 'Machines work to plan, with maintenance and parts support, until the project is running or handed over.' },
          ],
        },
        {
          type: 'terrain',
          label: 'Terrain',
          title: 'Experience across Algeria’s terrains',
          intro: 'Algeria stretches from the Mediterranean coast to the heart of the Sahara. Each landscape changes how roads are built, how machines are used and how water is found. Our teams have worked through these conditions.',
          items: [
            { illustration: 'terrain-coastal', title: 'Coastal Tell', text: 'Plains and hills near the Mediterranean with clay soils, higher rainfall and dense traffic. Drainage and subgrade preparation drive the result.', points: ['Drainage and soil treatment', 'Work alongside live traffic'] },
            { illustration: 'terrain-mountain', title: 'Atlas mountains', text: 'Steep alignments, rock cuts and tight bends. Excavation, embankments and retaining work demand powerful, well-handled machines.', points: ['Cut and fill in rock', 'Heavy dozing and excavation'] },
            { illustration: 'terrain-plateau', title: 'High Plateaus', text: 'Open steppe with long straight alignments, cold winters and hot summers. Productivity and a steady aggregate supply make the schedule.', points: ['Long linear works', 'High aggregate demand'] },
            { illustration: 'terrain-desert', title: 'Sahara', text: 'Sand, heat and long distances. Machines, crews and supply lines must be planned for self-sufficiency, and water is a project in itself.', points: ['Sand and dune conditions', 'Water well drilling'] },
          ],
        },
        {
          type: 'locations',
          label: 'Locations',
          title: 'Our operating footprint',
          intro: 'Four sites along the Algiers – Djelfa – Ghardaïa axis connect the Mediterranean north with the Sahara.',
        },
        {
          type: 'group',
          label: 'Group',
          title: 'EURL KAYLE KENNY: spare parts within the group',
          paragraphs: [
            'EURL KAYLE KENNY is part of the {{company}} portfolio. From its store and parts depot in Mohammadia, Algiers, it supplies heavy-duty diesel engine spare parts, including Cummins-compatible parts, to fleets and workshops.',
            'For our clients and partners this means faster access to parts, and machines that spend more time working.',
          ],
          disclaimer: 'EURL KAYLE KENNY is an independent supplier, not affiliated with or endorsed by Cummins Inc.',
          cta: { label: 'Visit kaylekenny.com', href: 'https://www.kaylekenny.com' },
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
          ids: ['what-is-etahg', 'where', 'foreign-companies', 'rental-terms'],
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
      title: 'Services: Aggregates, Roads, Equipment | SARL ETAHG',
      description: 'The services of SARL ETAHG in Algeria: fine aggregate production, road construction, equipment rental and leasing, mobilization and water wells.',
      summary: 'Overview of all services offered by SARL ETAHG.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Services',
          title: 'Heavy-works services in Algeria',
          lead: '{{company}} combines material production, a heavy equipment fleet and site experience. Each service can be contracted on its own or combined with others in one agreement.',
          illustration: 'hero-terrain',
        },
        {
          type: 'cards',
          label: 'Overview',
          title: 'Our services',
          style: 'services',
          items: [
            { page: 'aggregates', illustration: 'crusher', title: 'Aggregate production', text: 'Stone crushing and grinding plants producing high-quality fine aggregates, particularly suited to projects that need high production rates.' },
            { page: 'roads', illustration: 'paver', title: 'Road construction', text: 'Our original activity: roads built with our own fleet in many regions of Algeria, from earthworks to surfacing.' },
            { page: 'rental', illustration: 'excavator', title: 'Equipment rental and leasing', text: 'The fleet that built our roads, now available to other contractors for rent or lease, on terms agreed per project.' },
            { page: 'mobilization', illustration: 'mobilization', title: 'Project mobilization', text: 'Project initialization: we bring machines and crews to open a new site and prepare it for the main works.' },
            { page: 'drilling', illustration: 'drill-rig', title: 'Water well drilling', text: 'Drilling rigs for water wells, for construction sites, farms, industry and communities.' },
            { page: 'parts', illustration: 'spare-parts', title: 'Spare parts', text: 'Heavy-duty diesel engine parts through our group company EURL KAYLE KENNY in Algiers.' },
          ],
        },
        {
          type: 'prose',
          label: 'Approach',
          title: 'One company, several scopes',
          paragraphs: [
            'Large projects in Algeria often depend on a few critical inputs: reliable aggregate supply, the right heavy machines at the right time, and a site that is opened properly. When these inputs come from different suppliers, coordination costs time. {{company}} can provide them together.',
            'A typical combination for a new infrastructure project is: we mobilize equipment and open the site, produce the fine aggregates the works require, supply trucks and earthmoving machines for the main works and, where the site has no water, drill a well. Spare parts are supported through our group company EURL KAYLE KENNY.',
            'Every engagement starts with a conversation about location, scope, volumes and schedule. Terms (duration, operators, transport, maintenance) are agreed per project and written into the contract.',
          ],
        },
        {
          type: 'table',
          label: 'Summary',
          title: 'Services at a glance',
          caption: 'Services of SARL ETAHG and typical uses',
          head: ['Service', 'What it covers', 'Typical clients'],
          rows: [
            ['Aggregate production', 'Crushing and screening of stone into fine aggregates', 'Concrete producers, road contractors, building projects'],
            ['Road construction', 'Earthworks, pavement layers, surfacing', 'Public and private project owners, main contractors'],
            ['Equipment rental and leasing', 'Semi-trailer trucks, trucks, bulldozers, excavators, road pavers', 'Contractors, EPC companies, industrial projects'],
            ['Project mobilization', 'Equipment on site, clearing, access tracks, earthworks, supply set-up', 'International contractors starting in Algeria'],
            ['Water well drilling', 'Drilling of water wells with our own rigs', 'Construction sites, agriculture, industry'],
            ['Spare parts', 'Heavy-duty diesel engine parts (EURL KAYLE KENNY)', 'Fleet owners, workshops'],
          ],
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
      title: 'Fine Aggregate Production, Algeria | SARL ETAHG',
      description: 'Stone crushing plant at Oued Seddeur near Djelfa producing high-quality fine aggregates for concrete, asphalt and roads, suited to high production rates.',
      summary: 'Fine aggregate production from SARL ETAHG’s stone crushing plant at Oued Seddeur near Djelfa.',
      service: { name: 'Fine aggregate production', serviceType: 'Aggregate production (stone crushing)' },
      whatsapp: 'Hello SARL ETAHG, I would like information on fine aggregate supply (location, quantities, schedule).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Aggregate production',
          title: 'Fine aggregate production in Algeria',
          lead: '{{company}} operates stone crushing and grinding machines that produce high-quality fine aggregates. Our plant at Oued Seddeur, south of Djelfa, is especially suited to projects that require high production rates.',
          ctas: [
            { label: 'Request aggregate supply', kind: 'whatsapp', variant: 'primary' },
            { label: 'Contact us', page: 'contact', variant: 'secondary' },
          ],
          illustration: 'crusher',
        },
        {
          type: 'split',
          label: 'Product',
          title: 'What fine aggregates are, and why quality matters',
          paragraphs: [
            'Fine aggregates are the sand-sized fraction of crushed stone. They fill the space between coarse aggregates in concrete, give asphalt its dense structure and form part of the granular layers of a road. Their cleanliness, grading and particle shape directly affect strength, workability and durability.',
            'Crushed fine aggregate is produced by breaking quarried rock in successive stages and separating the product by size. Because it comes from controlled rock and a controlled process, it offers a consistent alternative to natural sand, whose supply can be limited or irregular.',
          ],
          list: [
            'Concrete for buildings, structures and precast elements',
            'Asphalt mixes and surface treatments',
            'Granular layers of roads and platforms',
            'Mortars and general construction',
          ],
          illustration: 'crusher',
        },
        {
          type: 'steps',
          label: 'Process',
          title: 'How a crushing circuit works',
          intro: 'A stone crushing plant is a chain of machines. Each stage reduces the rock and each screen sorts it, until the product meets the required size.',
          items: [
            { title: 'Extraction and feeding', text: 'Rock is loaded and fed at a regular rate into the primary crusher.' },
            { title: 'Primary crushing', text: 'The rock is broken into smaller pieces that the next stages can handle.' },
            { title: 'Secondary and fine crushing', text: 'Further crushing and grinding reduce the material to the fine fractions and improve particle shape.' },
            { title: 'Screening', text: 'Vibrating screens separate the material by size; oversize is returned to the crushers.' },
            { title: 'Stockpiling and loading', text: 'Finished aggregates are stockpiled by fraction and loaded onto trucks for delivery.' },
          ],
        },
        {
          type: 'pillars',
          label: 'Strengths',
          title: 'Built for high production rates',
          stats: true,
          items: [
            { title: 'Capacity for large projects', text: 'Our crushing and grinding machines are suited to projects where high daily volumes are required.' },
            { title: 'Consistent product', text: 'A controlled process gives consistent fine aggregates, batch after batch.' },
            { title: 'Own haulage', text: 'Our trucks and semi-trailer trucks can deliver the material to your site.' },
            { title: 'Strategic location', text: 'Oued Seddeur lies near the RN1 axis, between northern Algeria and the Sahara.' },
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about aggregate supply',
          items: [
            { id: 'agg-where', q: 'Where is the SARL ETAHG crushing plant?', a: 'The stone crushing plant is at Oued Seddeur, outside Djelfa, about 25 km south of the city, in the wilaya of Djelfa. It is close to the RN1, the main north–south road between Algiers and the Sahara.' },
            { id: 'agg-volume', q: 'Can ETAHG supply large volumes of fine aggregates?', a: 'Yes. Our crushing and grinding machines are especially suited to projects that require high production rates. Volumes, fractions and delivery schedules are agreed per project.' },
            { id: 'agg-delivery', q: 'Does ETAHG deliver aggregates to the site?', a: 'Delivery can be arranged with our own trucks and semi-trailer trucks. Transport conditions are agreed with each client according to distance and volumes.' },
          ],
        },
        {
          type: 'cta',
          title: 'Secure your aggregate supply',
          text: 'Tell us the project location, the quantities and the period of supply.',
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
      title: 'Heavy Equipment Rental & Leasing | SARL ETAHG',
      description: 'Rent or lease heavy equipment in Algeria from SARL ETAHG: semi-trailer trucks, trucks, bulldozers, excavators and road pavers. Terms agreed per project.',
      summary: 'Rental and leasing of SARL ETAHG’s heavy equipment fleet in Algeria.',
      service: { name: 'Heavy equipment rental and leasing', serviceType: 'Heavy equipment rental' },
      whatsapp: 'Hello SARL ETAHG, I would like to rent heavy equipment (machines, location, duration).',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Equipment rental and leasing',
          title: 'Heavy equipment rental and leasing in Algeria',
          lead: 'The fleet that built our roads is now available to other companies. Rent or lease semi-trailer trucks, trucks, bulldozers, excavators and road pavers from {{company}}, with terms agreed for your project.',
          ctas: [
            { label: 'Request equipment', kind: 'whatsapp', variant: 'primary' },
            { label: 'See the fleet', page: 'fleet', variant: 'secondary' },
          ],
          illustration: 'excavator',
        },
        {
          type: 'equipment',
          label: 'Machines',
          title: 'Equipment available',
          intro: 'Machines are available individually or as a complete package for a scope of work.',
          items: [
            { illustration: 'semi-truck', title: 'Semi-trailer trucks', text: 'Tractor units with semi-trailers for heavy haulage and transport of machines.', uses: ['Equipment transport', 'Long-distance haulage'], count: 'semiTrailerTrucks' },
            { illustration: 'dump-truck', title: 'Trucks', text: 'Trucks for moving aggregates, fill and excavated material on and between sites.', uses: ['Earthworks', 'Material delivery'], count: 'dumpTrucks' },
            { illustration: 'bulldozer', title: 'Bulldozers', text: 'Dozers for clearing, pushing, spreading and shaping ground.', uses: ['Site clearing', 'Platforms and embankments'], count: 'bulldozers' },
            { illustration: 'excavator', title: 'Excavators', text: 'Excavators for digging, trenching, loading and rock work.', uses: ['Excavation and trenching', 'Loading trucks'], count: 'excavators' },
            { illustration: 'paver', title: 'Road pavers', text: 'Pavers for laying asphalt and pavement layers to line and level.', uses: ['Asphalt paving', 'Road rehabilitation'], count: 'roadPavers' },
          ],
        },
        {
          type: 'features',
          label: 'Terms',
          title: 'Flexible arrangements, agreed per project',
          intro: 'Every project is different, so rental and leasing terms are not fixed in advance. We agree them with you and write them into the contract.',
          items: [
            { title: 'Duration', text: 'Short-term rental for a phase of work or longer-term leasing for the life of a project.' },
            { title: 'Operators', text: 'Machines can be discussed with or without our operators, depending on the project.' },
            { title: 'Transport', text: 'Mobilization and demobilization of machines by our own semi-trailer trucks can be included.' },
            { title: 'Maintenance', text: 'Responsibilities for servicing and repairs are agreed in advance; parts support is available through our group.' },
          ],
        },
        {
          type: 'prose',
          label: 'Why rent',
          title: 'Why rent from a contractor rather than a rental agency',
          paragraphs: [
            'Our machines were bought and maintained for our own road projects. They are used to the demands of real sites in Algeria, and the people who manage them understand production, not only rental contracts.',
            'For a foreign contractor starting a project, renting locally avoids the cost and delay of importing equipment. For an Algerian company, it adds capacity for a peak of work without buying machines. In both cases, one contact at {{company}} coordinates the equipment, its transport and its support.',
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about equipment rental',
          items: [
            { id: 'rent-operators', q: 'Are operators included in the rental?', a: 'Rental with or without operators can be discussed. Operators, duration, transport and maintenance are agreed per project and written into the contract.' },
            { id: 'rent-where', q: 'Where can ETAHG equipment be used?', a: 'Our fleet is based at our equipment depot in Djelfa, on the RN1 axis, and has worked on road projects in many regions of Algeria. Availability for a given location is confirmed when you send us your project details.' },
            { id: 'rent-lease', q: 'Do you offer long-term leasing?', a: 'Yes. Besides rental for a phase of work, machines can be leased for longer periods, for example for the duration of a project.' },
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
      title: 'Project Mobilization & Site Start-up | SARL ETAHG',
      description: 'SARL ETAHG initializes projects in Algeria: heavy equipment on site, clearing, access tracks, earthworks and aggregate supply to open new sites fast.',
      summary: 'Project initialization and site start-up with SARL ETAHG’s heavy equipment.',
      service: { name: 'Project mobilization and site start-up', serviceType: 'Construction site mobilization' },
      whatsapp: 'Hello SARL ETAHG, we are preparing a new project and would like to discuss site mobilization.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Project mobilization',
          title: 'Project mobilization and site start-up in Algeria',
          lead: 'We initialize projects with our own machines: moving equipment to a new location, clearing and opening the site, building access tracks, carrying out the first earthworks and setting up aggregate supply, so that the main works can start on time.',
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
            'Mobilization is the phase between contract signature and full production. It is short, but it decides whether a project starts smoothly. Equipment has to arrive, the site has to be accessible and safe, and the materials the works depend on must be available.',
            '{{company}} can take charge of this phase for a project owner or a main contractor, using its own fleet and crews.',
          ],
          list: [
            'Transport of heavy equipment to the site by semi-trailer',
            'Clearing and preparation of the site',
            'Access tracks and internal site roads',
            'Platforms for site facilities, stockpiles and plant',
            'First earthworks: excavation, fill, levelling',
            'Organisation of aggregate supply',
            'Water well drilling where the site has no water supply',
          ],
          illustration: 'bulldozer',
          reverse: true,
        },
        {
          type: 'steps',
          label: 'Sequence',
          title: 'A clear mobilization sequence',
          items: [
            { title: 'Brief and site visit', text: 'Location, access, ground conditions, scope, schedule and constraints are reviewed together.' },
            { title: 'Mobilization plan', text: 'Machines, crews, transport and supplies are defined and the terms agreed.' },
            { title: 'Equipment on site', text: 'The fleet is transported from our Djelfa depot or from another site.' },
            { title: 'Site opening', text: 'Clearing, access, platforms and first earthworks are carried out.' },
            { title: 'Supply in place', text: 'Aggregates, and water where needed, are available for the main works.' },
            { title: 'Hand-over or continuation', text: 'The site is handed over to the main works, or our equipment continues under rental or subcontract.' },
          ],
        },
        {
          type: 'prose',
          label: 'For foreign contractors',
          title: 'Starting a project in Algeria from abroad',
          paragraphs: [
            'An international contractor that wins a project in Algeria often faces the same first months: equipment still in transit, local suppliers not yet qualified, and a site that must already show progress. A local mobilization partner that owns machines can start work while the rest of the organisation is being set up.',
            'Our position in Djelfa, on the RN1 between Algiers and the Sahara, and our experience of road projects in many regions of Algeria, allow us to plan realistic mobilizations for northern and southern sites. Read more on our page for [international partners](page:partners).',
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about mobilization',
          items: [
            { id: 'mob-what', q: 'What does ETAHG mean by project initialization?', a: 'Project initialization, or mobilization, means bringing heavy equipment and crews to a new location and preparing the site for the main works: clearing, access tracks, platforms, first earthworks and aggregate supply.' },
            { id: 'mob-after', q: 'Can ETAHG stay on the project after mobilization?', a: 'Yes. After the start-up phase our equipment can continue under a rental or subcontracting agreement, as agreed with the client.' },
            { id: 'mob-remote', q: 'Can ETAHG mobilize to remote or desert sites?', a: 'Our registered office is in Ghardaïa in the northern Sahara and our depot is in Djelfa. We plan transport, supplies and water for remote sites as part of the mobilization plan.' },
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
      title: 'Road Construction in Algeria | SARL ETAHG',
      description: 'Road construction by SARL ETAHG: earthworks, pavement layers and surfacing with its own fleet, with experience of roads in many regions of Algeria.',
      summary: 'Road construction, SARL ETAHG’s original activity, carried out with its own fleet.',
      service: { name: 'Road construction', serviceType: 'Road construction' },
      whatsapp: 'Hello SARL ETAHG, I would like to discuss a road construction project.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Road construction',
          title: 'Road construction across Algeria',
          lead: 'Building roads is where {{company}} started. Our fleet of trucks, bulldozers, excavators and road pavers was assembled to build roads, and we have completed road projects in many regions of Algeria.',
          ctas: [
            { label: 'Discuss a road project', kind: 'whatsapp', variant: 'primary' },
            { label: 'Our experience', page: 'experience', variant: 'secondary' },
          ],
          illustration: 'paver',
        },
        {
          type: 'steps',
          label: 'Method',
          title: 'From ground to surface',
          intro: 'A road is a structure of layers. Each one has to be built on a sound base, with the right materials and the right compaction.',
          items: [
            { title: 'Clearing and earthworks', text: 'The alignment is cleared; cuts and embankments are formed with bulldozers, excavators and trucks.' },
            { title: 'Subgrade preparation', text: 'The natural ground is shaped, treated where necessary and compacted to carry the pavement.' },
            { title: 'Sub-base and base courses', text: 'Granular layers made of crushed aggregates spread the loads and drain the structure.' },
            { title: 'Surfacing', text: 'Asphalt or other surfacing is laid by paver to line and level.' },
            { title: 'Drainage and finishing', text: 'Ditches, culverts, shoulders and finishing works protect the road over time.' },
          ],
        },
        {
          type: 'split',
          label: 'Integration',
          title: 'Materials and machines under one roof',
          paragraphs: [
            'Road construction consumes large quantities of aggregates. Because {{company}} produces fine aggregates at its own crushing plant and operates its own trucks, the supply of materials and the pace of the works can be planned together.',
            'Our own bulldozers, excavators and pavers mean that each phase, from earthworks to surfacing, is carried out by machines and teams that know each other and know the job.',
          ],
          list: ['New roads and access roads', 'Road widening and rehabilitation', 'Site and industrial access roads', 'Platforms and yards'],
          illustration: 'dump-truck',
        },
        {
          type: 'prose',
          label: 'Terrain',
          title: 'Adapting road building to the terrain',
          paragraphs: [
            'On the coastal Tell, clay soils and rainfall make drainage and subgrade treatment the priority. In the Atlas mountains, cuts in rock and embankments demand heavy dozing and excavation. On the High Plateaus, long straight alignments reward productivity and a steady flow of aggregates. In the Sahara, sand, heat and distance require self-sufficient crews and careful planning of water and supplies.',
            'Having built roads in many regions of the country, our teams have learned to adapt methods and machines to each of these environments. More on our [experience](page:experience) page.',
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about road construction',
          items: [
            { id: 'road-experience', q: 'Does ETAHG have experience in road construction?', a: 'Yes. Road construction is the original activity of SARL ETAHG. Its fleet was mainly used to build roads, and the company has completed road projects in many regions of Algeria.' },
            { id: 'road-scope', q: 'Which parts of a road project can ETAHG carry out?', a: 'Earthworks, subgrade preparation, granular layers, surfacing with road pavers, and supply of aggregates and haulage, either as a complete scope or as a subcontract for part of the works.' },
            { id: 'road-subcontract', q: 'Can ETAHG work as a subcontractor on a road project?', a: 'Yes. ETAHG can work for a main contractor, including foreign contractors, on a defined scope such as earthworks, aggregate supply or paving.' },
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
      title: 'Water Well Drilling in Algeria | SARL ETAHG',
      description: 'Water well drilling in Algeria with SARL ETAHG’s own drilling rigs, for construction sites, agriculture, industry and remote projects in the south.',
      summary: 'Water well drilling with SARL ETAHG’s own drilling rigs.',
      service: { name: 'Water well drilling', serviceType: 'Water well drilling' },
      whatsapp: 'Hello SARL ETAHG, I would like information about drilling a water well.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Water well drilling',
          title: 'Water well drilling in Algeria',
          lead: '{{company}} owns water well drilling machines. We drill wells for construction sites, farms, industrial facilities and communities, and we integrate water supply into the start-up of new projects.',
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
            'Earthworks need water for compaction, concrete needs water for mixing, and site camps need water to live. On the High Plateaus and in the Sahara, where surface water is scarce, a well is often the only reliable source.',
            'Drilling a well early, as part of the mobilization, can remove one of the main constraints of a remote project. After the works, the well can continue to serve the owner or the local community.',
          ],
          list: ['Construction and road sites', 'Agricultural irrigation', 'Industrial and mining facilities', 'Community water supply'],
          illustration: 'drill-rig',
        },
        {
          type: 'steps',
          label: 'Process',
          title: 'How a water well is delivered',
          items: [
            { title: 'Needs and location', text: 'Water demand, site location and access are defined with the client.' },
            { title: 'Rig mobilization', text: 'The drilling rig and support equipment are transported to the site.' },
            { title: 'Drilling', text: 'The borehole is drilled through the formations to reach the water-bearing layer.' },
            { title: 'Completion', text: 'The well is cased and equipped according to the agreed specification.' },
            { title: 'Development and hand-over', text: 'The well is cleaned and developed, then handed over for use.' },
          ],
        },
        {
          type: 'prose',
          label: 'Terrain',
          title: 'Drilling in different geological settings',
          paragraphs: [
            'Algeria’s geology varies from the sedimentary basins of the north to the large aquifers of the Sahara. Depth, drilling method and completion depend on the local ground and on the water table.',
            'Each well is therefore planned for its location, and every project starts with an exchange on the site and on the expected water needs. Any permits required under Algerian regulations are part of the project discussion with the owner.',
          ],
        },
        {
          type: 'faq',
          label: 'FAQ',
          title: 'Questions about water well drilling',
          items: [
            { id: 'drill-own', q: 'Does ETAHG own its drilling rigs?', a: 'Yes. SARL ETAHG has its own water well drilling machines, which it uses for its own projects and for clients.' },
            { id: 'drill-combined', q: 'Can a well be drilled as part of a site mobilization?', a: 'Yes. Drilling a water well can be included in the mobilization of a new site, so that water is available for earthworks, concrete and site facilities.' },
            { id: 'drill-where', q: 'Where can ETAHG drill water wells?', a: 'We work from Djelfa and Ghardaïa, on the axis between northern Algeria and the Sahara. Feasibility for a specific location is assessed when you send us the project details.' },
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
      title: 'Heavy-Duty Spare Parts: EURL KAYLE KENNY | SARL ETAHG',
      description: 'EURL KAYLE KENNY, part of the SARL ETAHG group, supplies heavy-duty diesel engine spare parts from its store in Mohammadia, Algiers.',
      summary: 'Heavy-duty spare parts through the group company EURL KAYLE KENNY in Algiers.',
      service: { name: 'Heavy-duty spare parts (EURL KAYLE KENNY)', serviceType: 'Heavy equipment spare parts supply' },
      whatsapp: 'Hello, I am looking for heavy-duty spare parts (reference / engine model):',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Spare parts',
          title: 'Heavy-duty spare parts with EURL KAYLE KENNY',
          lead: 'EURL KAYLE KENNY is part of the {{company}} portfolio. It supplies heavy-duty diesel engine spare parts from its store and parts depot in Mohammadia, Algiers.',
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
            'Heavy machines only earn money when they work. When an engine part fails on a remote site, the time needed to find the right part decides how long a machine stands still. Having a spare parts company inside the group shortens that time for our own fleet and for our clients.',
            'EURL KAYLE KENNY stocks heavy-duty diesel engine parts, including Cummins-compatible parts, in Algiers. Customers can check a part reference on [kaylekenny.com](https://www.kaylekenny.com) and ask for availability and price directly.',
          ],
          list: ['Diesel engine spare parts for heavy-duty machines', 'Cummins-compatible parts', 'Stock in Mohammadia, Algiers', 'Search by part reference online'],
          illustration: 'spare-parts',
          reverse: true,
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
            { id: 'parts-what', q: 'What parts does EURL KAYLE KENNY supply?', a: 'Heavy-duty diesel engine spare parts, including Cummins-compatible parts. EURL KAYLE KENNY is an independent supplier, not affiliated with or endorsed by Cummins Inc.' },
            { id: 'parts-how', q: 'How can I check if a part is available?', a: 'Search the part reference on www.kaylekenny.com or send the reference by WhatsApp to +213 558 96 10 49.' },
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
      title: 'Heavy Equipment Fleet | SARL ETAHG',
      description: 'The SARL ETAHG fleet: crushing plants, semi-trailer trucks, trucks, bulldozers, excavators, road pavers and water well drilling rigs, based in Djelfa.',
      summary: 'The heavy equipment fleet of SARL ETAHG, based at its depot in Djelfa.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Fleet',
          title: 'Our heavy equipment fleet',
          lead: 'Everything we do rests on machines we own. Our fleet is based at our equipment depot in Djelfa and our crushing plant at Oued Seddeur. It works on our own projects and is available for rent and lease.',
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
          intro: 'Our machines cover the full chain of heavy works, from producing materials to finishing a road surface.',
          items: [
            { illustration: 'crusher', title: 'Stone crushing plants', text: 'Crushing and grinding machines that produce high-quality fine aggregates, suited to high production rates.', uses: ['Fine aggregates', 'Road and concrete materials'], count: 'crushingPlants' },
            { illustration: 'semi-truck', title: 'Semi-trailer trucks', text: 'Tractor units and semi-trailers for heavy haulage and for moving our machines between sites.', uses: ['Machine transport', 'Material haulage'], count: 'semiTrailerTrucks' },
            { illustration: 'dump-truck', title: 'Trucks', text: 'Trucks for earthworks and for delivering aggregates and fill.', uses: ['Earthworks', 'Aggregate delivery'], count: 'dumpTrucks' },
            { illustration: 'bulldozer', title: 'Bulldozers', text: 'Tracked dozers for clearing, pushing and shaping ground.', uses: ['Site clearing', 'Embankments'], count: 'bulldozers' },
            { illustration: 'excavator', title: 'Excavators', text: 'Hydraulic excavators for excavation, trenching, loading and rock work.', uses: ['Excavation', 'Loading'], count: 'excavators' },
            { illustration: 'paver', title: 'Road pavers', text: 'Pavers for laying asphalt and pavement layers.', uses: ['Asphalt paving', 'Surfacing'], count: 'roadPavers' },
            { illustration: 'drill-rig', title: 'Water well drilling rigs', text: 'Drilling machines for water wells on sites, farms and in remote areas.', uses: ['Water wells', 'Site water supply'], count: 'drillingRigs' },
          ],
        },
        {
          type: 'features',
          label: 'Care',
          title: 'How we look after our machines',
          intro: 'A fleet is only as good as its availability. Our approach is practical and based on daily use on real sites.',
          items: [
            { title: 'Preventive maintenance', text: 'Machines are serviced according to use, to limit breakdowns on site.' },
            { title: 'Parts within the group', text: 'EURL KAYLE KENNY supplies heavy-duty spare parts from Algiers.' },
            { title: 'Central depot', text: 'The Djelfa depot, on the RN1 axis, is the base for preparing and dispatching machines.' },
            { title: 'Own transport', text: 'Semi-trailer trucks move our machines without depending on third parties.' },
          ],
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
      title: 'Road-Building Experience Across Algeria | SARL ETAHG',
      description: 'SARL ETAHG has built roads in many regions of Algeria. Know-how of the coastal Tell, Atlas mountains, High Plateaus and Sahara for roads and heavy works.',
      summary: 'SARL ETAHG’s road-building experience across Algeria’s terrains.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Experience',
          title: 'Road-building experience across Algeria’s terrains',
          lead: '{{company}} has completed road projects in many regions of Algeria. Our fleet was assembled to build roads, and our teams have learned how each type of terrain changes the work.',
          illustration: 'hero-terrain',
        },
        {
          type: 'prose',
          label: 'Background',
          title: 'Built on road projects',
          paragraphs: [
            'Before offering our equipment to others, we used it mainly to build roads. Road works are demanding: long linear sites, large volumes of earth and aggregates, strict levels and tight schedules. They test machines, crews and organisation every day.',
            'This background shapes how we work today in aggregate production, equipment rental and project mobilization: we plan for production, we plan for the terrain, and we plan for the distances involved in a country as large as Algeria.',
          ],
        },
        {
          type: 'terrain',
          label: 'Terrain',
          title: 'What each terrain demands',
          intro: 'Four broad landscapes, four different ways of building.',
          items: [
            { illustration: 'terrain-coastal', title: 'Coastal Tell', text: 'Near the Mediterranean, soils are often clayey and rainfall is higher. Roads depend on good drainage, subgrade treatment and careful compaction, often next to existing traffic.', points: ['Drainage first', 'Subgrade treatment', 'Traffic management'] },
            { illustration: 'terrain-mountain', title: 'Atlas mountains', text: 'Mountain roads mean cuts in rock, embankments, retaining works and tight bends. Powerful dozers and excavators, and experienced operators, make the difference.', points: ['Rock excavation', 'Cut and fill balance', 'Slope stability'] },
            { illustration: 'terrain-plateau', title: 'High Plateaus', text: 'The steppe between the Tell and the Saharan Atlas offers long alignments and large volumes. Productivity, aggregate supply and seasonal temperature swings shape the schedule.', points: ['High production', 'Steady aggregate supply', 'Seasonal planning'] },
            { illustration: 'terrain-desert', title: 'Sahara', text: 'In the desert, sand, heat and remoteness dominate. Sites must be self-sufficient in fuel, parts and water, and pavement design must account for sand and temperature.', points: ['Self-sufficient sites', 'Water well drilling', 'Heat and sand'] },
          ],
        },
        {
          type: 'records',
          label: 'References',
          title: 'Regions and projects',
          regionsTitle: 'Regions where we have built roads',
          projectsTitle: 'Selected projects',
          emptyText: 'Details of our past road projects are available on request.',
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
          text: 'Tell us about the terrain and the scope. We will tell you how we would approach it.',
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
      title: 'For International Partners in Algeria | SARL ETAHG',
      description: 'Foreign companies partner with SARL ETAHG in Algeria for subcontracting, equipment and aggregate supply, site start-up and local partnership support.',
      summary: 'How foreign companies can cooperate with SARL ETAHG in Algeria.',
      whatsapp: 'Hello SARL ETAHG, we are an international company and would like to discuss cooperation in Algeria.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'International partners',
          title: 'Your local heavy-works partner in Algeria',
          lead: 'For foreign contractors, EPC companies, cement and mining groups, investors and equipment suppliers, {{company}} offers what a project in Algeria needs from day one: equipment, materials, site experience and a local team.',
          ctas: [
            { label: 'Start a conversation', kind: 'whatsapp', variant: 'primary' },
            { label: 'Download company profile (PDF)', kind: 'pdf', variant: 'secondary' },
          ],
          illustration: 'hero-terrain',
        },
        {
          type: 'features',
          label: 'Why ETAHG',
          title: 'Why partner with ETAHG',
          items: [
            { title: 'Own fleet, ready to mobilize', text: 'Semi-trailer trucks, trucks, bulldozers, excavators, road pavers and drilling rigs that we own and maintain.' },
            { title: 'Own aggregate production', text: 'A stone crushing plant at Oued Seddeur producing high-quality fine aggregates, suited to high production rates.' },
            { title: 'Road-building track record', text: 'Road projects completed in many regions of Algeria, with practical knowledge of the terrain.' },
            { title: 'Strategic location', text: 'Registered in Ghardaïa, equipment depot in Djelfa, on the RN1 axis between Algiers and the Sahara.' },
            { title: 'Parts support', text: 'Heavy-duty spare parts through our group company EURL KAYLE KENNY in Algiers.' },
            { title: 'Direct decision-making', text: 'A company of a size where the people you meet are the people who decide and deliver.' },
          ],
        },
        {
          type: 'cards',
          label: 'Cooperation models',
          title: 'Ways to work together',
          intro: 'We adapt to the structure of your project. The most common models are:',
          style: 'compact',
          items: [
            { title: 'Subcontracting', text: 'We carry out a defined scope (earthworks, road layers, paving, site preparation) under your contract.', page: 'roads' },
            { title: 'Equipment supply', text: 'Our machines are rented or leased to your project, on terms agreed per project.', page: 'rental' },
            { title: 'Aggregate supply', text: 'We supply fine aggregates from our crushing plant for your concrete, asphalt or road works.', page: 'aggregates' },
            { title: 'Local partner and joint-venture support', text: 'We can act as your Algerian partner for a project, bringing equipment, materials and local experience to a joint arrangement.' },
            { title: 'Site start-up', text: 'We mobilize equipment and open your site while your own organisation is being set up.', page: 'mobilization' },
            { title: 'Water supply', text: 'We drill water wells to supply your site, especially in the south.', page: 'drilling' },
          ],
        },
        {
          type: 'steps',
          label: 'Process',
          title: 'How cooperation starts',
          items: [
            { title: 'First contact', text: 'Send us a short description of your company and your project by WhatsApp, phone or email.' },
            { title: 'Exchange of information', text: 'We share our company profile and discuss scope, location and schedule; a confidentiality agreement can be signed if needed.' },
            { title: 'Meeting and site visit', text: 'We meet, visit the project location together and review the technical requirements.' },
            { title: 'Proposal', text: 'We send a proposal covering scope, equipment, materials, schedule and commercial terms.' },
            { title: 'Agreement', text: 'The cooperation model is formalised in a contract suited to the project.' },
            { title: 'Mobilization', text: 'Equipment and teams are mobilized according to the agreed plan.' },
          ],
        },
        {
          type: 'split',
          label: 'Checklist',
          title: 'What to send us',
          paragraphs: ['To give you a relevant first answer quickly, please include as much of the following as you can:'],
          list: [
            'Your company name, country and main activity',
            'Project location (wilaya or nearest town)',
            'Scope of work and the cooperation model you have in mind',
            'Equipment types or material volumes needed',
            'Planned start date and duration',
            'Technical documents available (drawings, specifications, bill of quantities)',
          ],
          illustration: 'mobilization',
          reverse: true,
        },
        {
          type: 'prose',
          label: 'Languages',
          title: 'Languages we work in',
          paragraphs: [
            'We work in Arabic, French and English. This website is also published in [Simplified Chinese](page:home) so that partners can review our profile in their own language. Technical and commercial documents can be exchanged in French or English.',
          ],
        },
        {
          type: 'cta',
          title: 'Let us discuss your project in Algeria',
          text: 'Reach us directly. We reply to international enquiries personally.',
          ctas: [
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'primary' },
            { label: 'Contact details', page: 'contact', variant: 'secondary' },
            { label: 'Download company profile (PDF)', kind: 'pdf', variant: 'ghost' },
          ],
        },
      ],
    },

    /* ----------------------------------------------------------------- ABOUT */
    about: {
      slug: 'about',
      nav: 'About',
      title: 'About the Company | SARL ETAHG',
      description: 'About SARL ETAHG: an Algerian SARL registered in Ghardaïa, with an equipment depot in Djelfa, a crushing plant at Oued Seddeur and group company Kayle Kenny.',
      summary: 'Company profile of SARL ETAHG: legal form, locations, activities and group.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'About',
          title: 'About SARL ETAHG',
          lead: '{{company}} is an Algerian heavy-works company. We produce fine aggregates, build roads, rent and lease heavy equipment, mobilize new project sites and drill water wells.',
          ctas: [{ label: 'Download company profile (PDF)', kind: 'pdf', variant: 'primary' }],
          illustration: 'hero-terrain',
        },
        {
          type: 'prose',
          label: 'Profile',
          title: 'Company profile',
          paragraphs: [
            '{{company}} is a limited liability company (SARL) under Algerian law, registered in Ghardaïa. Its equipment depot is in Djelfa, and its stone crushing plant, which produces fine aggregates, is at Oued Seddeur, about 25 km south of Djelfa.',
            'The company built its fleet of semi-trailer trucks, trucks, bulldozers, excavators and road pavers to build roads, and has completed road projects in many regions of Algeria. It has since opened this fleet to other companies through rental and leasing, offers the initialization of new projects with its machines, and operates water well drilling rigs.',
            'The group also includes EURL KAYLE KENNY, a heavy-duty spare parts company in Algiers.',
          ],
        },
        {
          type: 'facts',
          label: 'Key facts',
          title: 'Company at a glance',
        },
        {
          type: 'features',
          label: 'How we work',
          title: 'How we work',
          intro: 'Our working principles come from years of heavy works on real sites.',
          items: [
            { title: 'Safety on site', text: 'Heavy machines demand discipline. We plan work areas, machine movements and access so that crews and third parties stay safe.' },
            { title: 'Quality of materials', text: 'Our aggregates come from a controlled crushing process, and our works follow the specifications agreed with the client.' },
            { title: 'Maintained equipment', text: 'Machines are serviced according to use, with spare parts supported through our group company.' },
            { title: 'Clear commitments', text: 'Scope, schedule and terms are agreed in writing before work starts, and we report progress to the client.' },
            { title: 'Respect for the environment', text: 'We manage dust, water and land use on our sites responsibly and in line with applicable regulations.' },
            { title: 'Long-term relationships', text: 'We prefer partners we can work with again, on project after project.' },
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
      title: 'Frequently Asked Questions | SARL ETAHG',
      description: 'Answers about SARL ETAHG: who we are, where we are based, aggregates, equipment rental, mobilization, water wells, spare parts and working with us.',
      summary: 'Frequently asked questions about SARL ETAHG and its services.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'FAQ',
          title: 'Frequently asked questions about SARL ETAHG',
          lead: 'Short, factual answers about the company, its services and how to work with us.',
        },
        {
          type: 'faq',
          label: 'Company',
          title: 'About the company',
          items: [
            { id: 'what-is-etahg', q: 'What is SARL ETAHG?', a: 'SARL ETAHG is an Algerian heavy-works company (a limited liability company, SARL). It produces high-quality fine aggregates with its own stone crushing plant, builds roads, rents and leases heavy equipment, mobilizes new project sites and drills water wells.' },
            { id: 'where', q: 'Where is SARL ETAHG located?', a: 'The company is registered in Ghardaïa, Algeria. Its equipment depot is in Djelfa and its stone crushing plant is at Oued Seddeur, about 25 km south of Djelfa. Its group company EURL KAYLE KENNY is in Mohammadia, Algiers.' },
            { id: 'group', q: 'Which companies are part of the group?', a: 'EURL KAYLE KENNY, a heavy-duty spare parts company in Algiers (www.kaylekenny.com), is part of the SARL ETAHG portfolio.' },
            { id: 'languages', q: 'In which languages can we contact ETAHG?', a: 'Arabic, French and English. This website is also available in Simplified Chinese.' },
          ],
        },
        {
          type: 'faq',
          label: 'Services',
          title: 'Services',
          items: [
            { id: 'services-list', q: 'What services does ETAHG offer?', a: 'Fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization (site start-up), water well drilling and, through EURL KAYLE KENNY, heavy-duty spare parts.' },
            { id: 'aggregates', q: 'Does ETAHG supply fine aggregates?', a: 'Yes. ETAHG operates stone crushing and grinding machines at Oued Seddeur near Djelfa that produce high-quality fine aggregates, and they are especially suited to projects requiring high production rates.' },
            { id: 'fleet', q: 'What equipment does ETAHG have?', a: 'Semi-trailer trucks, trucks, bulldozers, excavators, road pavers, stone crushing plants and water well drilling rigs.' },
            { id: 'rental-terms', q: 'Can we rent or lease ETAHG equipment?', a: 'Yes. The fleet is available for rent and lease. Duration, operators, transport and maintenance are agreed per project.' },
            { id: 'mobilization', q: 'What is project mobilization?', a: 'It is the start-up of a new project: transporting equipment to the site, clearing, building access tracks and platforms, first earthworks, organising aggregate supply and, where needed, drilling a water well.' },
            { id: 'regions', q: 'Where in Algeria does ETAHG work?', a: 'ETAHG has completed road projects in many regions of Algeria. From its bases in Djelfa and Ghardaïa, on the RN1 axis, it can reach projects in both the north and the south. Availability for a specific location is confirmed on request.' },
          ],
        },
        {
          type: 'faq',
          label: 'Working together',
          title: 'Working with ETAHG',
          items: [
            { id: 'foreign-companies', q: 'Does ETAHG work with foreign companies?', a: 'Yes. ETAHG is open to cooperation with foreign contractors, EPC companies, industrial groups and investors, as a subcontractor, equipment or aggregate supplier, site start-up partner or local partner for a project.' },
            { id: 'quote', q: 'How do we request a quote?', a: 'Send the project location (wilaya), scope of work, equipment or volumes needed, duration and start date by WhatsApp or phone on +213 558 96 10 49.' },
            { id: 'profile', q: 'Is there a company profile we can share internally?', a: 'Yes. A printable company profile is available on this website and as a PDF download.' },
            { id: 'kayle-kenny', q: 'Is EURL KAYLE KENNY affiliated with Cummins?', a: 'No. EURL KAYLE KENNY supplies Cummins-compatible parts as an independent supplier, not affiliated with or endorsed by Cummins Inc.' },
          ],
        },
        {
          type: 'cta',
          title: 'Another question?',
          text: 'Ask us directly. We reply personally.',
          ctas: [
            { label: 'WhatsApp', kind: 'whatsapp', variant: 'primary' },
            { label: 'Contact us', page: 'contact', variant: 'secondary' },
          ],
        },
      ],
    },

    /* --------------------------------------------------------------- CONTACT */
    contact: {
      slug: 'contact',
      nav: 'Contact',
      title: 'Contact SARL ETAHG, Algeria | SARL ETAHG',
      description: 'Contact SARL ETAHG by phone or WhatsApp on +213 558 96 10 49. Registered office in Ghardaïa, equipment depot in Djelfa, Algeria. Quotes on request.',
      summary: 'Contact details of SARL ETAHG and how to request a quote.',
      blocks: [
        {
          type: 'hero',
          size: 'page',
          eyebrow: 'Contact',
          title: 'Contact SARL ETAHG',
          lead: 'Call us or write on WhatsApp. We answer enquiries from Algerian and international companies directly.',
        },
        {
          type: 'contact',
          label: 'Get in touch',
          title: 'Contact details',
          intro: 'The fastest way to reach us is WhatsApp or a phone call on the number below.',
          checklistTitle: 'What to include in your enquiry',
          checklist: [
            'Project location (wilaya or nearest town)',
            'Scope of work',
            'Equipment types or material volumes needed',
            'Expected duration',
            'Planned start date',
          ],
          quoteTitle: 'Request a quote on WhatsApp',
          quoteText: 'Open WhatsApp with a ready-made message and complete the details.',
          quoteLabel: 'Request a quote',
          quoteMessage: 'Hello SARL ETAHG, I would like a quote.\nCompany:\nProject location (wilaya):\nScope of work:\nEquipment or volumes needed:\nDuration:\nStart date:',
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
          ids: ['quote', 'languages', 'foreign-companies'],
          more: { label: 'All questions and answers', page: 'faq' },
        },
      ],
    },

    /* --------------------------------------------------------------- PROFILE */
    profile: {
      slug: 'company-profile',
      nav: 'Company profile',
      title: 'Company Profile | SARL ETAHG',
      description: 'Printable company profile of SARL ETAHG: activities, fleet, crushing plant, locations in Ghardaïa, Djelfa and Oued Seddeur, group and contact details.',
      summary: 'One-page printable company profile of SARL ETAHG, also available as PDF.',
      layout: 'profile',
      blocks: [
        {
          type: 'hero',
          size: 'profile',
          eyebrow: 'Company profile',
          title: 'SARL ETAHG: company profile',
          lead: 'Algerian heavy-works company: fine aggregate production, road construction, heavy equipment rental and leasing, project mobilization and water well drilling.',
          ctas: [{ label: 'Download company profile (PDF)', kind: 'pdf', variant: 'primary' }],
        },
        {
          type: 'prose',
          title: 'Who we are',
          paragraphs: [
            '{{company}} is a limited liability company (SARL) under Algerian law, registered in Ghardaïa, with an equipment depot in Djelfa and a stone crushing plant at Oued Seddeur, about 25 km south of Djelfa. Its fleet was assembled to build roads, and the company has completed road projects in many regions of Algeria. Today it also offers its equipment for rent and lease, starts up new projects with its machines, and drills water wells.',
          ],
        },
        {
          type: 'cards',
          title: 'Activities',
          style: 'compact',
          items: [
            { title: 'Aggregate production', text: 'Stone crushing plant producing high-quality fine aggregates, suited to high production rates.', page: 'aggregates' },
            { title: 'Road construction', text: 'Earthworks, pavement layers and surfacing with our own fleet.', page: 'roads' },
            { title: 'Equipment rental and leasing', text: 'Semi-trailer trucks, trucks, bulldozers, excavators, road pavers.', page: 'rental' },
            { title: 'Project mobilization', text: 'Site opening, access tracks, earthworks, aggregate supply.', page: 'mobilization' },
            { title: 'Water well drilling', text: 'Own drilling rigs for site, agricultural and community wells.', page: 'drilling' },
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
            'Subcontracting, equipment supply, aggregate supply, local partner and joint-venture support, and site start-up. We work in Arabic, French and English.',
          ],
          note: 'EURL KAYLE KENNY is an independent supplier, not affiliated with or endorsed by Cummins Inc.',
        },
      ],
    },

    /* ----------------------------------------------------------------- LEGAL */
    legal: {
      slug: 'legal',
      nav: 'Legal notice',
      title: 'Legal Notice & Privacy | SARL ETAHG',
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
            '**Fonts.** Text fonts are loaded from Google Fonts. When a page is displayed, your browser connects to Google servers, which receive your IP address as part of that technical request.',
            '**Contacting us.** If you contact us by telephone, WhatsApp or email, we use the information you send only to answer your enquiry and to prepare and manage any business relationship. WhatsApp is operated by WhatsApp LLC / Meta under its own privacy policy.',
            '**Your rights.** You can ask us at any time to access, correct or delete the personal data you have sent us, by contacting us on [{{phone}}](tel:).',
          ],
        },
        {
          type: 'prose',
          label: 'Content',
          title: 'Intellectual property and liability',
          paragraphs: [
            'The texts, illustrations and design of this website are the property of {{company}} unless stated otherwise. Reproduction requires prior permission.',
            'The information on this website is provided for general information. It does not constitute a contractual offer; the terms of any service are agreed in writing for each project.',
            'Third-party names are used only for identification. EURL KAYLE KENNY is an independent supplier, not affiliated with or endorsed by Cummins Inc.',
          ],
        },
      ],
    },
  },
};
