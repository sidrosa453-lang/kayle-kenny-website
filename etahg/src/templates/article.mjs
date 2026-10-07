import { html, inline, plain } from './html.mjs';
import { icon } from './icons.mjs';
import { renderBlocks } from './blocks.mjs';
import { SERVICE_PAGES } from './structure.mjs';

// Article page (Insights): hero with byline, table of contents built from the
// H2 of each titled block, the content blocks, related services, previous / next.

const titledBlocks = (blocks) => (blocks || []).filter((b) => b.title && !['hero', 'cta', 'callout'].includes(b.type));

export function articlePage(ctx) {
  const a = ctx.page;
  const A = ctx.ui.article;
  // Stable anchor ids for every titled block (used by the TOC and section ids).
  for (const b of titledBlocks(a.blocks)) if (!b.id) b.id = ctx.slugId(plain(b.title));
  const toc = titledBlocks(a.blocks);
  const related = (a.related || (a.service ? [a.service] : [])).filter((id) => ctx.hasPage(id));
  const { prev, next } = ctx.articleNeighbours();
  const dateMod = a.dateModified || a.datePublished;
  const hero = html`<section class="hero hero-page hero-article hero-textonly" aria-labelledby="page-title">
<div class="hero-texture" aria-hidden="true"></div>
<div class="wrap hero-grid">
<div class="hero-copy">
${ctx.breadcrumbs()}
${a.eyebrow && html`<p class="eyebrow">${a.eyebrow}</p>`}
<h1 id="page-title">${inline(a.h1 || a.nav, ctx)}</h1>
${a.lead && html`<p class="lead">${inline(a.lead, ctx)}</p>`}
<p class="byline">
<span class="byline-item">${A.by}${/[:：]$/.test(A.by) ? '' : ' '}${ctx.site.companyName}</span>
<span class="byline-item">${icon('calendar')}<span>${A.updated} <time datetime="${dateMod}">${ctx.formatDate(dateMod)}</time></span></span>
<span class="byline-item">${icon('clock')}<span>${A.readingTime.replaceAll('{{min}}', String(ctx.readingMinutes(a)))}</span></span>
${a.service && ctx.hasPage(a.service) && html`<span class="byline-item"><a class="byline-tag" href="${ctx.href(a.service)}">${ctx.pageNav(a.service)}</a></span>`}
</p>
</div>
</div>
</section>`;
  const tocHtml = toc.length > 1 ? html`<nav class="toc section-slim" aria-labelledby="toc-title"><div class="wrap"><div class="toc-inner">
<p class="toc-title" id="toc-title">${A.toc}</p>
<ol class="toc-list">${toc.map((b) => html`<li><a href="#${b.id}">${plain(b.title)}</a></li>`)}</ol>
</div></div></nav>` : '';
  // CTA bands stay full-width below the two-column body (desktop layout, see site.css .layout-article).
  const body = renderBlocks(a.blocks.filter((b) => b.type !== 'cta'), ctx);
  const ctaHtml = renderBlocks(a.blocks.filter((b) => b.type === 'cta'), ctx);
  const relatedHtml = related.length ? html`<section class="section tone-stone sec-related" aria-labelledby="related-title"><div class="wrap">
<h2 id="related-title" class="related-title">${A.related}</h2>
<ul class="link-list">${related.map((id) => {
    const p = ctx.t.pages[id];
    return html`<li><a href="${ctx.href(id)}"><strong>${ctx.pageNav(id)}</strong><span>${inline(p?.summary || p?.description || '', ctx)}</span>${icon('arrow', 'icon-dir')}</a></li>`;
  })}</ul>
</div></section>` : '';
  const pn = (prev || next) ? html`<nav class="article-nav section-slim" aria-label="${A.navLabel}"><div class="wrap"><div class="article-nav-inner">
${prev ? html`<a class="article-nav-link is-prev" href="${ctx.href(prev.id)}" rel="prev">${icon('arrow', 'icon-dir icon-back')}<span><span class="article-nav-label">${A.prev}</span><span class="article-nav-title">${prev.nav}</span></span></a>` : html`<span></span>`}
<a class="article-nav-all link-arrow" href="${ctx.href('insights')}">${A.all}</a>
${next ? html`<a class="article-nav-link is-next" href="${ctx.href(next.id)}" rel="next"><span><span class="article-nav-label">${A.next}</span><span class="article-nav-title">${next.nav}</span></span>${icon('arrow', 'icon-dir')}</a>` : html`<span></span>`}
</div></div></nav>` : '';
  return html`${hero}
<article class="article" lang="${ctx.L.htmlLang}">
${tocHtml}
<div class="article-body">${body}</div>
</article>
${ctaHtml}
${relatedHtml}
${pn}`;
}

export { SERVICE_PAGES };
