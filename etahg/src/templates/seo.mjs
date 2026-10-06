import { html, raw, plain } from './html.mjs';
import { SERVICE_PAGES } from './structure.mjs';

// <head> SEO tags and the JSON-LD @graph for a page.

// Search snippets and social previews may show bidi isolates as stray characters.
const noBidi = (t) => String(t ?? '').replace(/[\u2066-\u2069]/g, '');

export function headMeta(ctx) {
  const { page, site, lang } = ctx;
  const alts = ctx.alternates(); // [{lang, hreflang, url, ogLocale}]
  const og = ctx.ogImage();
  const title = page.ogTitle || page.title;
  return html`<title>${page.title}</title>
<meta name="description" content="${noBidi(page.description)}">
<meta name="robots" content="${ctx.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}">
${!ctx.noindex && html`<link rel="canonical" href="${ctx.abs(ctx.pageId, lang)}">
${alts.map((a) => html`<link rel="alternate" hreflang="${a.hreflang}" href="${a.url}">
`)}<link rel="alternate" hreflang="x-default" href="${ctx.abs(ctx.pageId, site.defaultLanguage)}">`}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.companyName}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${noBidi(page.description)}">
<meta property="og:url" content="${ctx.abs(ctx.pageId, lang)}">
<meta property="og:locale" content="${ctx.L.ogLocale}">
${alts.filter((a) => a.lang !== lang).map((a) => html`<meta property="og:locale:alternate" content="${a.ogLocale}">
`)}${og && html`<meta property="og:image" content="${og.url}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/png">
<meta property="og:image:alt" content="${site.companyName}${ctx.P.colon}${ctx.ui.og.tagline}">`}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${noBidi(page.description)}">
${og && html`<meta name="twitter:image" content="${og.url}">`}`;
}

const clean = (o) => {
  // Drop empty values recursively so JSON-LD never contains null / "".
  if (Array.isArray(o)) { const a = o.map(clean).filter((v) => v !== undefined); return a.length ? a : undefined; }
  if (o && typeof o === 'object') {
    const r = {};
    for (const [k, v] of Object.entries(o)) { const c = clean(v); if (c !== undefined) r[k] = c; }
    return Object.keys(r).length ? r : undefined;
  }
  if (o === null || o === undefined || o === '' || (typeof o === 'number' && !Number.isFinite(o))) return undefined;
  return o;
};

function postal(a, country = 'DZ') {
  return {
    '@type': 'PostalAddress',
    streetAddress: a.street || undefined,
    addressLocality: a.locality,
    addressRegion: a.region,
    postalCode: a.postalCode || undefined,
    addressCountry: a.country || country,
  };
}

// The Organization node is LANGUAGE-NEUTRAL and identical on every page (English canonical
// text, English service URLs), so graph consumers merging by @id never see conflicting values.
// Localized text lives on the per-page WebPage / Service / FAQPage nodes.
const LANG_NAMES_EN = { ar: 'Arabic', fr: 'French', en: 'English', zh: 'Chinese' };

export const geoNode = (g) => (g && Number.isFinite(g.lat) && Number.isFinite(g.lng) ? { '@type': 'GeoCoordinates', latitude: g.lat, longitude: g.lng } : undefined);

export function organization(ctx) {
  const { site } = ctx;
  const D = ctx.def; // default-language view
  const c = site.contact || {};
  const base = site.siteUrl;
  const locs = site.locations || [];
  // Operating places of the company itself (the group company is a subOrganization).
  const own = locs.filter((l) => ['hq', 'depot', 'quarry'].includes(l.id));
  const types = D.ui.locations.types;
  const typesL = ctx.ui.locations.types;
  const reg = site.registry || {};
  const idents = [['RC', reg.rc], ['NIF', reg.nif], ['NIS', reg.nis], ['AI', reg.ai]]
    .filter(([, v]) => v)
    .map(([k, v]) => ({ '@type': 'PropertyValue', propertyID: k, value: v }));
  const social = Object.values(site.social || {}).filter((v) => typeof v === 'string' && /^https?:/.test(v));
  const kk = (site.group || [])[0];
  const logo = ctx.logoPng();
  // Languages: the owner's confirmed working languages, else the four languages of the website.
  const spoken = (site.spokenLanguages || []).filter(Boolean);
  const langs = spoken.length ? spoken : ctx.languagesPresent;
  return {
    '@type': ['Organization', 'GeneralContractor'],
    '@id': `${base}/#organization`,
    name: site.companyName,
    legalName: site.companyName,
    alternateName: [site.shortName, site.fullName?.fr, site.fullName?.ar].filter(Boolean),
    // Separates the company from unrelated organisations sharing the acronym (search engines, AI answers).
    disambiguatingDescription: 'SARL ETAHG (Entreprise de Travaux d\'Aménagement Hydraulique de Ghardaïa) is an Algerian public-works company established in 1997 in Ghardaïa, Algeria: aggregates, road construction, heavy equipment rental and water well drilling. Not to be confused with unrelated organisations using the acronym ETAHG.',
    url: `${base}/`,
    logo: logo ? { '@type': 'ImageObject', '@id': `${base}/#logo`, url: logo.url, width: logo.size, height: logo.size, caption: site.companyName } : undefined,
    image: ctx.ogImageDefault() ? ctx.ogImageDefault().url : logo ? logo.url : undefined,
    // The entity statement, in the language of the page (same sentence in every language).
    description: plain(ctx.ui.footer.tagline),
    telephone: c.phone,
    email: c.email || undefined,
    address: postal(c.address || {}),
    faxNumber: c.fax || undefined,
    location: own.map((l) => ({
      '@type': 'Place',
      '@id': `${base}/#place-${l.id}`,
      name: l.name ? `${l.name} (${typesL[l.id] || types[l.id] || l.type}), ${ctx.locName(l)}` : `${typesL[l.id] || types[l.id] || l.type}, ${ctx.locName(l)}`,
      address: postal(l.id === 'hq' ? (c.address || {}) : { street: l.street, locality: l.locality, region: l.region }),
      telephone: (l.phones || [])[0] || (l.id === 'hq' ? c.phone : undefined),
      faxNumber: l.fax || (l.id === 'hq' ? c.fax : undefined) || undefined,
      geo: geoNode(l.geo),
      hasMap: l.mapsUrl || (l.id === 'hq' ? c.mapsUrl : undefined) || undefined,
    })),
    hasMap: c.mapsUrl || undefined,
    areaServed: { '@type': 'Country', name: 'Algeria', identifier: 'DZ' },
    knowsLanguage: langs,
    knowsAbout: [
      'Fine aggregate production', 'Quarrying', 'Stone crushing', 'Crushed sand', 'Road construction',
      'Asphalt paving', 'Bitumen spraying', 'Earthworks',
      'Heavy equipment rental', 'Heavy equipment leasing', 'Construction site mobilization',
      'Water well drilling', 'Heavy-duty spare parts', 'Road building on Algerian terrains', 'Algeria',
    ],
    contactPoint: [{
      '@type': 'ContactPoint', telephone: c.phone, email: c.email || undefined, contactType: 'sales',
      areaServed: 'DZ', availableLanguage: langs.map((l) => LANG_NAMES_EN[l] || l),
    }, ...(Array.isArray(c.phones) ? c.phones : []).filter(Boolean).map((n) => ({
      '@type': 'ContactPoint', telephone: n, faxNumber: c.fax || undefined, contactType: 'customer service', areaServed: 'DZ',
    }))],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${site.companyName} services`,
      itemListElement: SERVICE_PAGES.filter((id) => ctx.hasPage(id, ctx.site.defaultLanguage)).map((id) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', '@id': `${D.abs(id)}#service`, name: D.serviceName(id), url: D.abs(id) },
      })),
    },
    subOrganization: kk ? {
      '@type': 'AutoPartsStore',
      // Same @id as the store node published on kaylekenny.com, so the two graphs join.
      '@id': kk.jsonldId || `${kk.url.replace(/\/$/, '')}/#organization`,
      name: kk.name,
      url: kk.url.replace(/\/?$/, '/'),
      telephone: kk.phone,
      description: /cummins/i.test(kk.activity || '') ? `${kk.activity}. Independent supplier, not affiliated with or endorsed by Cummins Inc.` : kk.activity,
      address: postal({ street: kk.street, locality: kk.addressLocality || 'Mohammadia', region: kk.addressRegion || 'Algiers', country: 'DZ' }),
      parentOrganization: { '@id': `${base}/#organization` },
    } : undefined,
    sameAs: social.length ? social : undefined,
    foundingDate: site.foundedYear ? String(site.foundedYear) : undefined,
    identifier: idents.length ? idents : undefined,
    taxID: reg.nif || undefined,
    hasCredential: (site.certifications || []).filter(Boolean).map((cname) => ({ '@type': 'EducationalOccupationalCredential', name: typeof cname === 'string' ? cname : cname.name })),
  };
}

export function jsonLd(ctx) {
  const { site, lang, page, pageId } = ctx;
  const base = site.siteUrl;
  const url = ctx.abs(pageId, lang);
  const org = organization(ctx);
  const graph = [org];
  graph.push({
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: `${base}/`,
    name: site.companyName,
    alternateName: site.shortName,
    inLanguage: ctx.languagesPresent.map((l) => ctx.langMeta(l).hreflang),
    publisher: { '@id': `${base}/#organization` },
  });
  const crumbs = ctx.crumbTrail();
  const webPage = {
    '@type': pageId === 'faq' ? ['WebPage', 'FAQPage'] : pageId === 'about' || pageId === 'profile' ? ['WebPage', 'AboutPage'] : pageId === 'contact' ? ['WebPage', 'ContactPage'] : pageId === 'insights' || pageId === 'locations' ? ['WebPage', 'CollectionPage'] : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: noBidi(page.description),
    inLanguage: ctx.L.hreflang,
    isPartOf: { '@id': `${base}/#website` },
    about: { '@id': `${base}/#organization` },
    primaryImageOfPage: ctx.ogImage() ? { '@type': 'ImageObject', url: ctx.ogImage().url } : undefined,
    breadcrumb: crumbs.length > 1 ? { '@id': `${url}#breadcrumb` } : undefined,
    datePublished: ctx.isArticle ? page.datePublished : undefined,
    dateModified: ctx.dateModified || ctx.buildDate,
  };
  graph.push(webPage);
  if (ctx.isArticle) {
    const img = ctx.ogImage();
    const serviceAbout = page.service && ctx.hasPage(page.service) ? { '@id': `${ctx.abs(page.service, lang)}#service` } : undefined;
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: plain(page.h1 || page.nav).slice(0, 110),
      description: noBidi(page.description),
      articleSection: page.eyebrow || undefined,
      datePublished: page.datePublished,
      dateModified: page.dateModified || page.datePublished,
      author: { '@id': `${base}/#organization` },
      publisher: { '@id': `${base}/#organization` },
      image: img ? img.url : undefined,
      inLanguage: ctx.L.hreflang,
      mainEntityOfPage: { '@id': `${url}#webpage` },
      isPartOf: { '@id': `${base}/#website` },
      about: serviceAbout,
      wordCount: ctx.wordCount(page) || undefined,
      url,
    });
    webPage.mainEntity = { '@id': `${url}#article` };
  }
  if (ctx.isLocation) {
    const l = ctx.location;
    const c = site.contact || {};
    const isHq = l.id === 'hq';
    const types = ctx.ui.locations.types;
    const node = {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      '@id': `${url}#place`,
      name: `${site.companyName}${ctx.P.comma}${types[l.id] || l.type}${ctx.P.comma}${ctx.locName(l)}`,
      description: noBidi(page.description),
      url,
      image: ctx.ogImage() ? ctx.ogImage().url : undefined,
      parentOrganization: { '@id': `${base}/#organization` },
      address: postal(isHq ? (c.address || {}) : { street: l.street, locality: l.locality, region: l.region }),
      telephone: (l.phones || [])[0] || c.phone,
      faxNumber: l.fax || (isHq ? c.fax : undefined) || undefined,
      email: isHq ? c.email || undefined : undefined,
      geo: geoNode(l.geo),
      hasMap: l.mapsUrl || (isHq ? c.mapsUrl : undefined) || undefined,
      areaServed: { '@type': 'Country', name: ctx.ui.facts.countryValue || 'Algeria', identifier: 'DZ' },
      containedInPlace: { '@type': 'AdministrativeArea', name: ctx.ui.locations.wilaya.replaceAll('{{region}}', ctx.regionName(l)) },
    };
    graph.push(node);
    webPage.about = { '@id': `${url}#place` };
  }
  if (crumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: ctx.abs(c.id, lang) })),
    });
  }
  if (page.service) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: page.service.name,
      serviceType: page.service.serviceType,
      description: noBidi(page.description),
      url,
      provider: { '@id': pageId === 'parts' && org.subOrganization ? org.subOrganization['@id'] : `${base}/#organization` },
      areaServed: { '@type': 'Country', name: ctx.ui.facts.countryValue || 'Algeria', identifier: 'DZ' },
      availableChannel: { '@type': 'ServiceChannel', servicePhone: { '@type': 'ContactPoint', telephone: site.contact.phone }, serviceUrl: ctx.abs('contact', lang) },
    });
  }
  const faqs = ctx.pageFaqs();
  if (faqs.length) {
    const faqNode = {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: ctx.L.hreflang,
      isPartOf: { '@id': `${url}#webpage` },
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: plain(f.q), acceptedAnswer: { '@type': 'Answer', text: plain(f.a) } })),
    };
    if (pageId === 'faq') {
      // The FAQ page itself is the FAQPage: merge instead of adding a second node.
      Object.assign(webPage, { mainEntity: faqNode.mainEntity });
    } else graph.push(faqNode);
  }
  const data = clean({ '@context': 'https://schema.org', '@graph': graph });
  return raw(`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`);
}
