import { html, raw, attrs, inline, esc } from './html.mjs';
import { icon, whatsappIcon } from './icons.mjs';
import { corridorMap } from './map.mjs';

// Block renderers. Each receives (block, ctx) and returns Safe HTML.
// ctx is built per page by build.mjs (see makeContext there).

const pad = (n) => String(n).padStart(2, '0');

// Section wrapper with optional numbered label, title and intro.
function section(block, ctx, inner, { cls = '', headCls = '', tone } = {}) {
  const t = tone || block.tone || ctx.nextTone(block.type);
  const num = block.label ? ctx.nextNumber() : null;
  const id = block.id || (block.label ? ctx.slugId(block.label) : null);
  const titleId = block.title ? ctx.uid('h') : null;
  return html`<section${attrs({ class: `section tone-${t} sec-${block.type}${cls ? ' ' + cls : ''}`, id, 'aria-labelledby': titleId })}>
<div class="wrap">
${(block.label || block.title || block.intro) && html`<header class="section-head${headCls ? ' ' + headCls : ''}">
${block.label && html`<p class="label"><span class="label-num">${pad(num)}</span><span class="label-text">${block.label}</span></p>`}
${block.title && html`<h2 id="${titleId}">${inline(block.title, ctx)}</h2>`}
${block.intro && html`<p class="intro">${inline(block.intro, ctx)}</p>`}
</header>`}
${inner}
</div>
</section>`;
}

export function ctaLink(cta, ctx, extraCls = '') {
  if (!cta) return '';
  const variant = cta.variant || 'primary';
  let href, external = false, ico = icon('arrow', 'icon-dir'), extra = {};
  if (cta.kind === 'whatsapp') { href = ctx.whatsappUrl(cta.message); external = true; ico = whatsappIcon(); }
  else if (cta.kind === 'tel') { href = ctx.telUrl(); ico = icon('phone'); }
  else if (cta.kind === 'mailto') { href = ctx.mailUrl(); ico = icon('mail'); if (!href) return ''; }
  else if (cta.kind === 'pdf') { const p = ctx.pdf(); href = p.href; ico = icon(p.isPdf ? 'download' : 'arrow', p.isPdf ? '' : 'icon-dir'); if (p.isPdf) extra = { download: p.filename, type: 'application/pdf' }; }
  else if (cta.kind === 'vcard') { href = ctx.asset('etahg.vcf'); ico = icon('card'); extra = { download: 'etahg.vcf' }; }
  else if (cta.page) href = ctx.href(cta.page, cta.lang, cta.hash);
  else if (cta.href) { href = cta.href; external = /^https?:/.test(cta.href); if (external) ico = icon('external'); }
  if (!href) return '';
  const lead = cta.kind === 'whatsapp';
  return html`<a${attrs({ class: `btn btn-${variant}${extraCls ? ' ' + extraCls : ''}`, href, rel: external ? 'noopener' : null, target: external ? '_blank' : null, ...extra })}>${lead && ico}<span>${cta.label}</span>${!lead && ico}</a>`;
}

const ctaRow = (ctas, ctx, cls = '') => (ctas && ctas.length ? html`<div class="cta-row${cls ? ' ' + cls : ''}">${ctas.map((c) => ctaLink(c, ctx))}</div>` : '');

const paras = (list, ctx) => (list || []).map((p) => html`<p>${inline(p, ctx)}</p>`);
const bullets = (list, ctx, cls = 'ticks') => (list && list.length ? html`<ul class="${cls}">${list.map((i) => html`<li>${inline(i, ctx)}</li>`)}</ul>` : '');

/* ------------------------------------------------------------------ hero */
function hero(b, ctx) {
  const size = b.size || 'page';
  const media = b.illustration ? ctx.visual(b.illustration, { eager: true, cls: 'hero-visual', sizes: '(min-width: 960px) 40vw, 90vw' }) : null;
  const crumbs = size !== 'home' ? ctx.breadcrumbs() : '';
  return html`<section class="hero hero-${size}${media ? '' : ' hero-textonly'}" aria-labelledby="page-title">
<div class="hero-texture" aria-hidden="true"></div>
<div class="wrap hero-grid">
<div class="hero-copy">
${crumbs}
${b.eyebrow && html`<p class="eyebrow">${b.eyebrow}</p>`}
<h1 id="page-title">${inline(b.title, ctx)}</h1>
${b.lead && html`<p class="lead">${inline(b.lead, ctx)}</p>`}
${ctaRow(b.ctas, ctx)}
${size === 'profile' && html`<button type="button" class="btn btn-ghost print-btn" data-print>${icon('print')}<span>${ctx.ui.printProfile}</span></button>`}
</div>
${media && html`<div class="hero-media">${media}</div>`}
</div>
${b.points?.length > 0 && html`<div class="wrap"><ul class="hero-points">${b.points.map((p, i) => html`<li><span class="hp-num">${pad(i + 1)}</span><span>${inline(p, ctx)}</span></li>`)}</ul></div>`}
</section>`;
}

/* --------------------------------------------------------------- pillars */
function pillars(b, ctx) {
  const stats = b.stats ? ctx.stats() : [];
  const inner = html`${stats.length > 0 && html`<dl class="stats">${stats.map((s) => html`<div class="stat"><dt>${s.label}</dt><dd>${s.value}</dd></div>`)}</dl>`}
<ul class="pillars">${b.items.map((it, i) => html`<li class="pillar"><span class="pillar-num">${pad(i + 1)}</span><h3>${it.title}</h3><p>${inline(it.text, ctx)}</p></li>`)}</ul>`;
  if (!b.title && !b.label) return html`<section class="band-pillars" aria-label="${b.items.map((i) => i.title).join(', ')}"><div class="wrap">${inner}</div></section>`;
  return section(b, ctx, inner);
}

/* ----------------------------------------------------------------- prose */
function prose(b, ctx) {
  return section(b, ctx, html`<div class="prose">
${b.lead && html`<p class="lead-sm">${inline(b.lead, ctx)}</p>`}
${paras(b.paragraphs, ctx)}
${bullets(b.list, ctx)}
${b.note && html`<p class="note">${inline(b.note, ctx)}</p>`}
</div>`, { cls: 'sec-narrow' });
}

/* ----------------------------------------------------------------- split */
function split(b, ctx) {
  const media = ctx.visual(b.illustration, { cls: 'split-visual' });
  const num = b.label ? ctx.nextNumber() : null;
  const tone = b.tone || ctx.nextTone('split');
  const titleId = ctx.uid('h');
  return html`<section${attrs({ class: `section tone-${tone} sec-split${b.reverse ? ' is-reverse' : ''}`, id: b.id || (b.label ? ctx.slugId(b.label) : null), 'aria-labelledby': titleId })}>
<div class="wrap split">
<div class="split-copy">
${b.label && html`<p class="label"><span class="label-num">${pad(num)}</span><span class="label-text">${b.label}</span></p>`}
<h2 id="${titleId}">${inline(b.title, ctx)}</h2>
${b.lead && html`<p class="lead-sm">${inline(b.lead, ctx)}</p>`}
<div class="prose">${paras(b.paragraphs, ctx)}${bullets(b.list, ctx)}</div>
${ctaRow(b.ctas, ctx)}
</div>
<div class="split-media">${media}</div>
</div>
</section>`;
}

/* ----------------------------------------------------------------- cards */
function cards(b, ctx) {
  const style = b.style || 'services';
  const list = html`<ul class="cards cards-${style}">${b.items.map((it, i) => {
    const href = it.page ? ctx.href(it.page) : it.href || null;
    const ext = it.href && /^https?:/.test(it.href);
    return html`<li class="card">
${style === 'services' && it.illustration && html`<div class="card-media">${ctx.visual(it.illustration, { cls: 'card-visual' })}</div>`}
<div class="card-body">
<span class="card-num">${pad(i + 1)}</span>
<h3>${href ? html`<a${attrs({ href, rel: ext ? 'noopener' : null, target: ext ? '_blank' : null })} class="card-link">${it.title}</a>` : it.title}</h3>
<p>${inline(it.text, ctx)}</p>
${href && style === 'services' && html`<span class="card-more" aria-hidden="true">${ctx.ui.readMore}${icon('arrow', 'icon-dir')}</span>`}
</div>
</li>`;
  })}</ul>`;
  return section(b, ctx, list);
}

/* -------------------------------------------------------------- features */
function features(b, ctx) {
  return section(b, ctx, html`<ul class="features">${b.items.map((it, i) => html`<li class="feature"><span class="feature-num">${pad(i + 1)}</span><h3>${it.title}</h3><p>${inline(it.text, ctx)}</p></li>`)}</ul>`);
}

/* ----------------------------------------------------------------- steps */
function steps(b, ctx) {
  return section(b, ctx, html`<ol class="steps">${b.items.map((it, i) => html`<li class="step"><span class="step-num" aria-hidden="true">${pad(i + 1)}</span><div class="step-body"><h3>${it.title}</h3><p>${inline(it.text, ctx)}</p></div></li>`)}</ol>`);
}

/* --------------------------------------------------------------- terrain */
function terrain(b, ctx) {
  return section(b, ctx, html`<ul class="terrain">${b.items.map((it) => html`<li class="terrain-item">
<div class="terrain-media">${ctx.visual(it.illustration, { cls: 'terrain-visual' })}</div>
<h3>${it.title}</h3>
<p>${inline(it.text, ctx)}</p>
${bullets(it.points, ctx, 'tags')}
</li>`)}</ul>`, { tone: b.tone || 'ink' });
}

/* ------------------------------------------------------------- equipment */
function equipment(b, ctx) {
  const fleet = ctx.config.fleet || {};
  return section(b, ctx, html`<ul class="equipment">${b.items.map((it) => {
    const n = it.count && Number.isFinite(fleet[it.count]) && fleet[it.count] > 0 ? fleet[it.count] : null;
    return html`<li class="equip">
<div class="equip-media">${ctx.visual(it.illustration, { cls: 'equip-visual' })}</div>
<div class="equip-body">
<h3>${it.title}${n !== null && html` <span class="equip-count">${n} ${ctx.ui.fleetLabels.units}</span>`}</h3>
<p>${inline(it.text, ctx)}</p>
${bullets(it.uses, ctx, 'tags')}
</div>
</li>`;
  })}</ul>`);
}

/* ----------------------------------------------------------------- facts */
function facts(b, ctx) {
  const rows = ctx.facts(b.variant || 'full');
  const dl = html`<dl class="facts">${rows.map((r) => html`<div class="fact"><dt>${r.label}</dt><dd>${r.html ? raw(r.html) : r.value}</dd></div>`)}</dl>`;
  if (b.variant === 'legal') return section(b, ctx, dl, { cls: 'sec-narrow' });
  const aside = html`<aside class="facts-aside">
<p class="facts-aside-title">${ctx.config.companyName}</p>
<p>${ctx.ui.footer.tagline}</p>
<div class="cta-row cta-stack">
${ctaLink({ kind: 'pdf', label: ctx.ui.downloadProfile, variant: 'primary' }, ctx)}
${ctaLink({ kind: 'vcard', label: ctx.ui.vcard, variant: 'secondary' }, ctx)}
</div>
</aside>`;
  return section(b, ctx, html`<div class="facts-grid">${dl}${ctx.pageId !== 'profile' && aside}</div>`);
}

/* ------------------------------------------------------------- locations */
function locations(b, ctx) {
  const locs = ctx.config.locations || [];
  const ui = ctx.ui.locations;
  const names = {}, types = {};
  for (const l of locs) { names[l.id] = ctx.locName(l); types[l.id] = ui.types[l.id] || l.type; }
  const map = b.map === false ? '' : corridorMap({ locations: locs, names, types, labels: ui.map, uid: ctx.uid('map'), compact: ctx.pageId === 'profile' });
  const list = html`<ol class="locations">${locs.map((l, i) => html`<li class="location${l.id === 'hq' ? ' is-hq' : ''}">
<span class="location-num" aria-hidden="true">${i + 1}</span>
<p class="location-type">${types[l.id]}</p>
<h3 class="location-name">${names[l.id]}</h3>
${l.region && html`<p class="location-region">${ui.wilaya.replace('{{region}}', ctx.regionName(l))}</p>`}
${ui.details && ui.details[l.id] && html`<p class="location-text">${inline(ui.details[l.id], ctx)}</p>`}
${l.mapsUrl && html`<a class="location-map" href="${l.mapsUrl}" rel="noopener" target="_blank">${icon('pin')}<span>${ui.mapLink || ctx.ui.mapLink}</span></a>`}
</li>`)}</ol>`;
  return section(b, ctx, html`<div class="loc-grid${map ? '' : ' no-map'}">${map && html`<div class="loc-map">${map}</div>`}${list}</div>`);
}

/* ----------------------------------------------------------------- group */
function group(b, ctx) {
  const g = (ctx.config.group || [])[0] || {};
  return section(b, ctx, html`<div class="group">
<div class="group-media">${ctx.visual('spare-parts', { cls: 'group-visual' })}</div>
<div class="group-copy">
<p class="group-name">${g.name || ''}</p>
<div class="prose">${paras(b.paragraphs, ctx)}</div>
${b.disclaimer && html`<p class="note">${inline(b.disclaimer, ctx)}</p>`}
<div class="cta-row">
${b.cta && ctaLink({ ...b.cta, variant: 'secondary' }, ctx)}
${ctx.pageId !== 'parts' && ctaLink({ page: 'parts', label: ctx.ui.readMore, variant: 'ghost' }, ctx)}
</div>
</div>
</div>`);
}

/* ------------------------------------------------------------------- faq */
function faq(b, ctx) {
  const items = ctx.faqItems(b);
  if (!items.length) return '';
  const inner = html`<div class="faq">${items.map((it) => html`<details class="faq-item"${attrs({ id: it.id ? 'q-' + it.id : null })}>
<summary><h3 class="faq-q">${it.q}</h3><span class="faq-icon" aria-hidden="true"></span></summary>
<div class="faq-a"><p>${inline(it.a, ctx)}</p></div>
</details>`)}</div>
${b.more && html`<p class="faq-more"><a class="link-arrow" href="${ctx.href(b.more.page)}">${b.more.label}${icon('arrow', 'icon-dir')}</a></p>`}`;
  return section(b, ctx, inner, { cls: 'sec-faq' });
}

/* --------------------------------------------------------------- records */
function records(b, ctx) {
  const regions = (ctx.config.regions || []).map((r) => ctx.localize(r)).filter(Boolean);
  const projects = (ctx.config.projects || []).filter(Boolean);
  if (!regions.length && !projects.length) {
    if (!b.emptyText) return '';
    return section({ ...b, intro: b.intro }, ctx, html`<p class="records-empty">${inline(b.emptyText, ctx)} ${ctaLink({ page: 'contact', label: ctx.ui.contactCta, variant: 'ghost' }, ctx)}</p>`, { cls: 'sec-narrow' });
  }
  const R = ctx.ui.records;
  const inner = html`${regions.length > 0 && html`<h3 class="sub-title">${b.regionsTitle}</h3><ul class="tags tags-lg">${regions.map((r) => html`<li>${r}</li>`)}</ul>`}
${projects.length > 0 && html`<h3 class="sub-title">${b.projectsTitle}</h3><div class="table-wrap"><table class="table"><thead><tr><th scope="col">${R.project}</th><th scope="col">${R.region}</th><th scope="col">${R.year}</th><th scope="col">${R.scope}</th></tr></thead><tbody>${projects.map((p) => html`<tr><th scope="row">${ctx.localize(p.name)}</th><td>${ctx.localize(p.region)}</td><td>${p.year || ''}</td><td>${ctx.localize(p.scope)}</td></tr>`)}</tbody></table></div>`}`;
  return section(b, ctx, inner);
}

/* ----------------------------------------------------------------- table */
function table(b, ctx) {
  return section(b, ctx, html`<div class="table-wrap"><table class="table">
${b.caption && html`<caption>${b.caption}</caption>`}
<thead><tr>${b.head.map((h) => html`<th scope="col">${h}</th>`)}</tr></thead>
<tbody>${b.rows.map((row) => html`<tr>${row.map((c, i) => (i === 0 ? html`<th scope="row">${inline(c, ctx)}</th>` : html`<td>${inline(c, ctx)}</td>`))}</tr>`)}</tbody>
</table></div>`);
}

/* ----------------------------------------------------------------- links */
function links(b, ctx) {
  return section(b, ctx, html`<ul class="link-list">${b.items.map((it) => html`<li><a href="${ctx.href(it.page)}"><strong>${it.title}</strong><span>${inline(it.text, ctx)}</span>${icon('arrow', 'icon-dir')}</a></li>`)}</ul>`);
}

/* --------------------------------------------------------------- contact */
function contact(b, ctx) {
  const c = ctx.config.contact || {};
  const ui = ctx.ui;
  const inner = html`<div class="contact-grid">
<div class="contact-channels">
<ul class="channels">
<li class="channel"><span class="channel-icon">${icon('phone')}</span><div><p class="channel-label">${ui.phoneLabel}</p><a class="channel-value" href="${ctx.telUrl()}" dir="ltr">${c.phone}</a></div></li>
<li class="channel"><span class="channel-icon">${whatsappIcon()}</span><div><p class="channel-label">${ui.whatsappLabel}</p><a class="channel-value" href="${ctx.whatsappUrl()}" rel="noopener" target="_blank" dir="ltr">${c.phone}</a></div></li>
${c.email && html`<li class="channel"><span class="channel-icon">${icon('mail')}</span><div><p class="channel-label">${ui.emailLabel}</p><a class="channel-value" href="${ctx.mailUrl()}">${c.email}</a></div></li>`}
</ul>
${c.hours && html`<p class="contact-hours"><strong>${ui.facts.hours}:</strong> ${ctx.localize(c.hours)}</p>`}
<div class="cta-row cta-stack">
${ctaLink({ kind: 'vcard', label: ui.vcard, variant: 'secondary' }, ctx)}
${ctaLink({ kind: 'pdf', label: ui.downloadProfile, variant: 'ghost' }, ctx)}
</div>
</div>
<div class="contact-brief">
<h3>${b.checklistTitle}</h3>
<ul class="checklist">${b.checklist.map((i) => html`<li>${icon('check')}<span>${inline(i, ctx)}</span></li>`)}</ul>
<div class="quote">
<h3>${b.quoteTitle}</h3>
<p>${inline(b.quoteText, ctx)}</p>
${ctaLink({ kind: 'whatsapp', label: b.quoteLabel, message: b.quoteMessage, variant: 'primary' }, ctx)}
</div>
</div>
</div>`;
  return section(b, ctx, inner);
}

/* -------------------------------------------------------------- download */
function download(b, ctx) {
  return section(b, ctx, html`<div class="download">${ctaLink({ kind: 'pdf', label: b.label || ctx.ui.downloadProfile, variant: 'primary' }, ctx)}</div>`);
}

/* ------------------------------------------------------------------- cta */
function cta(b, ctx) {
  const titleId = ctx.uid('h');
  return html`<section class="band-cta" aria-labelledby="${titleId}">
<div class="wrap band-cta-inner">
<div>
<h2 id="${titleId}">${inline(b.title, ctx)}</h2>
${b.text && html`<p>${inline(b.text, ctx)}</p>`}
</div>
${ctaRow(b.ctas, ctx)}
</div>
</section>`;
}

export const RENDERERS = { hero, pillars, prose, split, cards, features, steps, terrain, equipment, facts, locations, group, faq, records, table, links, contact, download, cta };

export function renderBlocks(blocks, ctx) {
  return (blocks || []).map((b) => {
    const r = RENDERERS[b.type];
    if (!r) { ctx.warn(`unknown block type "${b.type}" on page ${ctx.pageId} (${ctx.lang})`); return ''; }
    return r(b, ctx);
  });
}
