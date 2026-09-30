import { html, raw, plain } from './html.mjs';
import { SERVICE_PAGES } from './structure.mjs';

// <head> SEO tags and the JSON-LD @graph for a page.

export function headMeta(ctx) {
  const { page, site, lang } = ctx;
  const alts = ctx.alternates(); // [{lang, hreflang, url, ogLocale}]
  const og = ctx.ogImage();
  const title = page.ogTitle || page.title;
  return html`<title>${page.title}</title>
<meta name="description" content="${page.description}">
<meta name="robots" content="${ctx.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}">
${!ctx.noindex && html`<link rel="canonical" href="${ctx.abs(ctx.pageId, lang)}">
${alts.map((a) => html`<link rel="alternate" hreflang="${a.hreflang}" href="${a.url}">
`)}<link rel="alternate" hreflang="x-default" href="${ctx.abs(ctx.pageId, site.defaultLanguage)}">`}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.companyName}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${page.description}">
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
<meta name="twitter:description" content="${page.description}">
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

export function organization(ctx) {
  const { site } = ctx;
  const D = ctx.def; // default-language view
  const c = site.contact || {};
  const base = site.siteUrl;
  const locs = site.locations || [];
  const nonHq = locs.filter((l) => l.id === 'depot' || l.id === 'quarry');
  const types = D.ui.locations.types;
  const reg = site.registry || {};
  const idents = [['RC', reg.rc], ['NIF', reg.nif], ['NIS', reg.nis], ['AI', reg.ai]]
    .filter(([, v]) => v)
    .map(([k, v]) => ({ '@type': 'PropertyValue', propertyID: k, value: v }));
  const social = Object.values(site.social || {}).filter((v) => typeof v === 'string' && /^https?:/.test(v));
  const kk = (site.group || [])[0];
  const logo = ctx.logoPng();
  const spoken = (site.spokenLanguages || []).filter(Boolean);
  return {
    '@type': ['Organization', 'GeneralContractor'],
    '@id': `${base}/#organization`,
    name: site.companyName,
    legalName: site.companyName,
    alternateName: [site.shortName],
    url: `${base}/`,
    logo: logo ? { '@type': 'ImageObject', '@id': `${base}/#logo`, url: logo.url, width: logo.size, height: logo.size, caption: site.companyName } : undefined,
    image: ctx.ogImageDefault() ? ctx.ogImageDefault().url : logo ? logo.url : undefined,
    description: plain(D.ui.footer.tagline),
    telephone: c.phone,
    email: c.email || undefined,
    address: postal(c.address || {}),
    location: nonHq.map((l) => ({
      '@type': 'Place',
      name: `${types[l.id] || l.type}, ${l.locality}`,
      address: postal({ locality: l.locality, region: l.region }),
      hasMap: l.mapsUrl || undefined,
    })),
    hasMap: c.mapsUrl || undefined,
    areaServed: { '@type': 'Country', name: 'Algeria', identifier: 'DZ' },
    // Working languages only once confirmed by the owner (site.config.json spokenLanguages).
    knowsLanguage: spoken.length ? spoken : undefined,
    knowsAbout: [
      'Fine aggregate production', 'Stone crushing', 'Crushed sand', 'Road construction', 'Earthworks',
      'Heavy equipment rental', 'Heavy equipment leasing', 'Construction site mobilization',
      'Water well drilling', 'Heavy-duty spare parts', 'Road building on Algerian terrains', 'Algeria',
    ],
    contactPoint: [{
      '@type': 'ContactPoint', telephone: c.phone, email: c.email || undefined, contactType: 'sales',
      areaServed: 'DZ', availableLanguage: spoken.length ? spoken.map((l) => LANG_NAMES_EN[l] || l) : undefined,
    }],
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
    '@type': pageId === 'faq' ? ['WebPage', 'FAQPage'] : pageId === 'about' || pageId === 'profile' ? ['WebPage', 'AboutPage'] : pageId === 'contact' ? ['WebPage', 'ContactPage'] : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: ctx.L.hreflang,
    isPartOf: { '@id': `${base}/#website` },
    about: { '@id': `${base}/#organization` },
    primaryImageOfPage: ctx.ogImage() ? { '@type': 'ImageObject', url: ctx.ogImage().url } : undefined,
    breadcrumb: crumbs.length > 1 ? { '@id': `${url}#breadcrumb` } : undefined,
    dateModified: ctx.dateModified || ctx.buildDate,
  };
  graph.push(webPage);
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
      description: page.description,
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
