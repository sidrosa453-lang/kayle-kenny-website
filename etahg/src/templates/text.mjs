import { plain, markdown } from './html.mjs';

// Markdown rendering of a page's blocks, used for llms-full.txt. Generated from
// the same content as the HTML so it can never drift.

export function pageMarkdown(ctx) {
  const md = (s) => markdown(s, (t) => ctx.absLink(t));
  const out = [];
  const push = (...l) => out.push(...l, '');
  const list = (items) => (items || []).map((i) => `- ${md(i)}`).join('\n');
  for (const b of ctx.page.blocks || []) {
    switch (b.type) {
      case 'hero':
        push(`# ${plain(b.title)}`);
        if (b.lead) push(md(b.lead));
        if (b.points?.length) push(list(b.points));
        break;
      case 'pillars':
        if (b.title) push(`## ${plain(b.title)}`);
        for (const s of ctx.stats()) out.push(`- ${s.label}: ${s.value}`);
        push(b.items.map((i) => `- **${i.title}**: ${md(i.text)}`).join('\n'));
        break;
      case 'prose': case 'split':
        push(`## ${plain(b.title)}`);
        if (b.lead) push(md(b.lead));
        for (const p of b.paragraphs || []) push(md(p));
        if (b.list?.length) push(list(b.list));
        if (b.note) push(`_${md(b.note)}_`);
        break;
      case 'cards': case 'features': case 'links':
        push(`## ${plain(b.title)}`);
        if (b.intro) push(md(b.intro));
        for (const i of b.items) push(`### ${i.title}`, md(i.text) + (i.page ? ` (${ctx.abs(i.page, ctx.lang)})` : i.href ? ` (${i.href})` : ''));
        break;
      case 'steps':
        push(`## ${plain(b.title)}`);
        if (b.intro) push(md(b.intro));
        push(b.items.map((i, n) => `${n + 1}. **${i.title}**: ${md(i.text)}`).join('\n'));
        break;
      case 'terrain': case 'equipment':
        push(`## ${plain(b.title)}`);
        if (b.intro) push(md(b.intro));
        for (const i of b.items) {
          const n = b.type === 'equipment' && i.count && ctx.config.fleet?.[i.count] ? ` (${ctx.config.fleet[i.count]} ${ctx.ui.fleetLabels.units})` : '';
          push(`### ${i.title}${n}`, md(i.text), list(i.points || i.uses));
        }
        break;
      case 'facts':
        push(`## ${plain(b.title)}`, ctx.facts(b.variant || 'full').map((r) => `- ${r.label}: ${r.value}`).join('\n'));
        break;
      case 'locations': {
        push(`## ${plain(b.title)}`);
        if (b.intro) push(md(b.intro));
        const ui = ctx.ui.locations;
        push((ctx.config.locations || []).map((l) =>
          `- **${ui.types[l.id] || l.type}**: ${ctx.locName(l)}${l.region ? ` (${ui.wilaya.replace('{{region}}', ctx.regionName(l))})` : ''}. ${plain(ui.details?.[l.id] || '')}${l.mapsUrl ? ` Map: ${l.mapsUrl}` : ''}`.trim()).join('\n'));
        break;
      }
      case 'group':
        push(`## ${plain(b.title)}`);
        for (const p of b.paragraphs || []) push(md(p));
        if (b.disclaimer) push(`_${plain(b.disclaimer)}_`);
        if (b.cta?.href) push(`Website: ${b.cta.href}`);
        break;
      case 'faq': {
        const items = ctx.faqItems(b);
        if (!items.length) break;
        push(`## ${plain(b.title)}`);
        for (const i of items) push(`### ${plain(i.q)}`, md(i.a));
        break;
      }
      case 'records': {
        const regions = (ctx.config.regions || []).map((r) => ctx.localize(r)).filter(Boolean);
        const projects = ctx.config.projects || [];
        if (!regions.length && !projects.length) { if (b.emptyText) push(`## ${plain(b.title)}`, md(b.emptyText)); break; }
        push(`## ${plain(b.title)}`);
        if (regions.length) push(`### ${b.regionsTitle}`, list(regions));
        if (projects.length) push(`### ${b.projectsTitle}`, projects.map((p) => `- ${[ctx.localize(p.name), ctx.localize(p.region), p.year, ctx.localize(p.scope)].filter(Boolean).join(', ')}`).join('\n'));
        break;
      }
      case 'table':
        push(`## ${plain(b.title)}`,
          `| ${b.head.join(' | ')} |\n| ${b.head.map(() => '---').join(' | ')} |\n` + b.rows.map((r) => `| ${r.map((c) => plain(c)).join(' | ')} |`).join('\n'));
        break;
      case 'contact': {
        const c = ctx.config.contact;
        push(`## ${plain(b.title)}`);
        if (b.intro) push(md(b.intro));
        push([`- ${ctx.ui.phoneLabel}: ${c.phone}`, `- ${ctx.ui.whatsappLabel}: https://wa.me/${c.whatsapp}`, c.email && `- ${ctx.ui.emailLabel}: ${c.email}`].filter(Boolean).join('\n'));
        push(`### ${b.checklistTitle}`, list(b.checklist));
        break;
      }
      case 'download':
        push(`## ${plain(b.title)}`, `${b.label || ctx.ui.downloadProfile}: ${ctx.pdfAbs()}`);
        break;
      case 'cta':
        push(`**${plain(b.title)}**${b.text ? ' ' + md(b.text) : ''}`);
        break;
      default:
        break;
    }
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
