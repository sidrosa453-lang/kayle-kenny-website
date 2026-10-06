import { html, raw, attrs } from './html.mjs';
import { icon, whatsappIcon } from './icons.mjs';

// Screen-reader note for links that open a new tab or an external app (WCAG G201).
export const newTab = (ctx) => (ctx.ui.openExternal ? html`<span class="sr-only"> ${ctx.ui.openExternal}</span>` : '');
import { PRIMARY_NAV, SERVICE_PAGES, FOOTER_COLUMNS } from './structure.mjs';
import { headMeta, jsonLd } from './seo.mjs';

export function breadcrumbs(ctx) {
  const trail = ctx.crumbTrail();
  if (trail.length < 2) return '';
  return html`<nav class="crumbs" aria-label="${ctx.ui.breadcrumbLabel}"><ol>${trail.map((c, i) =>
    i === trail.length - 1
      ? html`<li><span aria-current="page">${c.name}</span></li>`
      : html`<li><a href="${ctx.href(c.id)}">${c.name}</a></li>`)}</ol></nav>`;
}

function brand(ctx) {
  return html`<a class="brand" href="${ctx.href('home')}" aria-label="${ctx.ui.brandAria || `${ctx.site.companyName}${ctx.P.comma}${ctx.ui.homeLabel}`}">
<span class="brand-mark" aria-hidden="true">${ctx.logoSvg()}</span>
<span class="brand-text" aria-hidden="true"><span class="brand-word">${ctx.site.shortName}</span><span class="brand-cap">${ctx.ui.logoCaption}</span></span>
</a>`;
}

function langSwitch(ctx, cls = '') {
  const alts = ctx.alternates();
  if (alts.length < 2) return '';
  return html`<ul class="lang-switch${cls ? ' ' + cls : ''}" aria-label="${ctx.ui.languageLabel}">${alts.map((a) => html`<li><a${attrs({
    href: ctx.href(ctx.switchPage, a.lang),
    hreflang: a.hreflang,
    lang: a.htmlLang,
    'aria-current': a.lang === ctx.lang ? 'true' : null,
    title: a.name,
  })}>${a.label}</a></li>`)}</ul>`;
}

function header(ctx) {
  const cur = ctx.pageId;
  const isSvc = cur === 'services' || SERVICE_PAGES.includes(cur);
  const navItem = (id) => {
    if (!ctx.hasPage(id)) return '';
    if (id === 'services') {
      return html`<li class="nav-item has-sub${isSvc ? ' is-active' : ''}">
<a class="nav-link" href="${ctx.href('services')}"${attrs({ 'aria-current': cur === 'services' ? 'page' : null })}>${ctx.pageNav('services')}</a>
<button type="button" class="sub-toggle" aria-expanded="false" aria-controls="sub-services"><span class="sr-only">${ctx.ui.subMenuLabel || ctx.pageNav('services')}</span>${icon('chevron')}</button>
<div class="sub" id="sub-services"><ul>
${SERVICE_PAGES.filter((s) => ctx.hasPage(s)).map((s) => html`<li><a href="${ctx.href(s)}"${attrs({ 'aria-current': cur === s ? 'page' : null })}>${ctx.pageNav(s)}</a></li>`)}
<li class="sub-all"><a href="${ctx.href('services')}">${ctx.ui.servicesOverview}${icon('arrow', 'icon-dir')}</a></li>
</ul></div>
</li>`;
    }
    return html`<li class="nav-item${cur === id ? ' is-active' : ''}"><a class="nav-link" href="${ctx.href(id)}"${attrs({ 'aria-current': cur === id ? 'page' : null })}>${ctx.pageNav(id)}</a></li>`;
  };
  // Mail-first header shortcut where WhatsApp is not usable (ui.headerChannel = 'email', e.g. Chinese pages).
  const mailFirst = ctx.ui.headerChannel === 'email' && ctx.mailUrl();
  // The menu toggle comes BEFORE the nav in the DOM so Tab moves from the toggle into the
  // open menu; CSS `order` keeps it at the end of the header visually.
  return html`<header class="site-header" data-header>
<div class="wrap header-inner">
${brand(ctx)}
<button type="button" class="nav-toggle" aria-expanded="false" aria-controls="site-nav"><span class="nav-toggle-bars" aria-hidden="true"></span><span class="sr-only" data-open="${ctx.ui.menu}" data-close="${ctx.ui.close}">${ctx.ui.menu}</span></button>
<nav class="nav" id="site-nav" aria-label="${ctx.ui.primaryNav}">
<ul class="nav-list">${PRIMARY_NAV.map(navItem)}${ctx.hasPage('contact') && html`<li class="nav-item nav-item-contact${cur === 'contact' ? ' is-active' : ''}"><a class="nav-link" href="${ctx.href('contact')}">${ctx.pageNav('contact')}</a></li>`}</ul>
<div class="nav-extra">
${langSwitch(ctx, 'lang-switch-mobile')}
${mailFirst && html`<a class="btn btn-primary" href="${ctx.mailUrl()}">${icon('mail')}<span>${ctx.site.contact.email}</span></a>`}
<a class="btn ${mailFirst ? 'btn-secondary' : 'btn-primary'}" href="${ctx.whatsappUrl()}" rel="noopener" target="_blank">${whatsappIcon()}<span>${ctx.ui.whatsappLabel} <span dir="ltr">${ctx.site.contact.phone}</span></span>${newTab(ctx)}</a>
</div>
</nav>
<div class="header-actions">
${langSwitch(ctx, 'lang-switch-desktop')}
${mailFirst
    ? html`<a class="icon-btn" href="${ctx.mailUrl()}" aria-label="${ctx.ui.emailAria || ctx.site.contact.email}">${icon('mail')}</a>`
    : html`<a class="icon-btn" href="${ctx.whatsappUrl()}" rel="noopener" target="_blank" aria-label="${ctx.ui.whatsappAria} ${ctx.ui.openExternal || ''}">${whatsappIcon()}</a>`}
<a class="btn btn-primary btn-sm header-cta" href="${ctx.href('contact')}">${ctx.ui.contactCta}</a>
</div>
</div>
</header>`;
}

function footer(ctx) {
  const c = ctx.site.contact;
  const f = ctx.ui.footer;
  const locs = ctx.site.locations || [];
  const nap = locs.filter((l) => l.id === 'hq' || l.id === 'depot');
  const kk = (ctx.site.group || [])[0];
  const col = (key, ids) => html`<div class="f-col"><h2 class="f-title">${f[key]}</h2><ul>${ids.filter((id) => ctx.hasPage(id)).map((id) => html`<li><a href="${ctx.href(id)}">${id === 'services' ? ctx.ui.servicesOverview : ctx.pageNav(id)}</a></li>`)}</ul></div>`;
  const pdf = ctx.pdf();
  return html`<footer class="site-footer">
<div class="footer-texture" aria-hidden="true"></div>
<div class="wrap">
<div class="footer-top">
<div class="footer-brand">
${brand(ctx)}
<p class="footer-tagline">${f.tagline}</p>
<address class="nap">
<p class="nap-name">${ctx.site.companyName}</p>
${nap.map((l) => html`<p><span class="nap-type">${ctx.ui.locations.types[l.id] || l.type}${ctx.P.colon}</span>${ctx.addressLine(l)}</p>`)}
<p><span class="nap-type">${ctx.ui.phoneLabel}${ctx.P.colon}</span><a href="${ctx.telUrl()}" dir="ltr">${c.phone}</a></p>
${c.email && html`<p><span class="nap-type">${ctx.ui.emailLabel}${ctx.P.colon}</span><a href="${ctx.mailUrl()}">${c.email}</a></p>`}
</address>
</div>
<nav class="footer-nav" aria-label="${ctx.ui.footerNav}">
${FOOTER_COLUMNS.map(([key, ids]) => col(key, ids))}
<div class="f-col">
<h2 class="f-title">${f.contactTitle}</h2>
<ul>
${c.email && html`<li><a href="${ctx.mailUrl()}">${ctx.ui.emailLabel}</a></li>`}
<li><a href="${ctx.whatsappUrl()}" rel="noopener" target="_blank">${ctx.ui.whatsappLabel}${newTab(ctx)}</a></li>
<li><a href="${ctx.telUrl()}">${ctx.ui.phoneLabel}</a></li>
<li><a href="${ctx.asset('etahg.vcf')}" download="etahg.vcf">${ctx.ui.vcard}</a></li>
</ul>
<h2 class="f-title f-title-gap">${f.groupTitle}</h2>
${kk && html`<ul><li><a href="${kk.url}" rel="noopener" target="_blank">${kk.name}${newTab(ctx)}</a><span class="f-sub">${f.groupText}</span></li></ul>`}
<h2 class="f-title f-title-gap">${f.languagesTitle}</h2>
<ul class="f-langs">${ctx.alternates().map((a) => html`<li><a href="${ctx.href(ctx.switchPage, a.lang)}" hreflang="${a.hreflang}" lang="${a.htmlLang}">${a.name}</a></li>`)}</ul>
</div>
</nav>
</div>
<div class="footer-bottom">
<p>${f.copyright}</p>
<p class="footer-links">
<a${attrs({ href: pdf.href, download: pdf.isPdf ? pdf.filename : null })}>${icon(pdf.isPdf ? 'download' : 'arrow', pdf.isPdf ? '' : 'icon-dir')}<span>${ctx.ui.downloadProfile}</span></a>
${ctx.hasPage('legal') && html`<a href="${ctx.href('legal')}">${ctx.pageNav('legal')}</a>`}
<span>${f.privacyNote}</span>
</p>
</div>
</div>
</footer>`;
}

export function documentShell(ctx, mainHtml) {
  const L = ctx.L;
  return html`<!doctype html>
<html lang="${L.htmlLang}" dir="${L.dir}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>document.documentElement.className='js'</script>
${headMeta(ctx)}
<meta name="theme-color" content="#0F1318">
<meta name="format-detection" content="telephone=no">
${Object.entries({ 'google-site-verification': ctx.site.verification?.google, 'msvalidate.01': ctx.site.verification?.bing, 'baidu-site-verification': ctx.site.verification?.baidu }).filter(([, v]) => v).map(([k, v]) => html`<meta name="${k}" content="${v}">
`)}
${ctx.hasFile('favicon.ico') && html`<link rel="icon" href="${ctx.asset('favicon.ico')}" sizes="48x48">`}
${ctx.hasFile('icon-192.png') && html`<link rel="icon" href="${ctx.asset('icon-192.png')}" type="image/png" sizes="192x192">`}
<link rel="icon" href="${ctx.asset('favicon.svg')}" type="image/svg+xml">
${ctx.hasFile('apple-touch-icon.png') && html`<link rel="apple-touch-icon" href="${ctx.asset('apple-touch-icon.png')}">`}
<link rel="manifest" href="${ctx.asset('site.webmanifest')}">
${ctx.fontPreloads().map((f) => html`<link rel="preload" href="${f}" as="font" type="font/woff2" crossorigin>
`)}<link rel="stylesheet" href="${ctx.asset(ctx.cssFile)}">
<script src="${ctx.asset(ctx.jsFile)}" defer></script>
${jsonLd(ctx)}
</head>
<body class="${`lang-${ctx.lang} page-${ctx.pageId}${ctx.page.layout ? ' layout-' + ctx.page.layout : ''}`}">
<a class="skip-link" href="#main">${ctx.ui.skip}</a>
${header(ctx)}
<main id="main" tabindex="-1">
${mainHtml}
</main>
${footer(ctx)}
</body>
</html>
`;
}
