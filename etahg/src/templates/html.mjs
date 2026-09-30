// Tiny HTML templating helpers. Everything interpolated into `html` is
// HTML-escaped unless it is wrapped with raw() (or is itself the result of
// another html`` call). Arrays are flattened and joined. null/undefined/false
// render as nothing, so conditional fragments can be written as
// `${cond && html`...`}`.

export class Safe {
  constructor(value) { this.value = String(value); }
  toString() { return this.value; }
}

export const raw = (value) => (value instanceof Safe ? value : new Safe(value ?? ''));

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ESC[c]);

function flatten(value) {
  if (value === null || value === undefined || value === false || value === true) return '';
  if (value instanceof Safe) return value.value;
  if (Array.isArray(value)) return value.map(flatten).join('');
  return esc(value);
}

export function html(strings, ...values) {
  let out = strings[0];
  for (let i = 0; i < values.length; i++) out += flatten(values[i]) + strings[i + 1];
  return new Safe(out);
}

// Attribute helper: attrs({class: 'a', hidden: true, href: null}) -> ` class="a" hidden`
export function attrs(obj) {
  let out = '';
  for (const [k, v] of Object.entries(obj)) {
    if (v === null || v === undefined || v === false) continue;
    out += v === true ? ` ${k}` : ` ${k}="${esc(v)}"`;
  }
  return raw(out);
}

// Inline rich text used in content strings:
//   **bold**              -> <strong>
//   [label](page:id)      -> internal link to page id (resolved by ctx.link)
//   [label](page:id#frag) -> internal link with fragment
//   [label](https://...)  -> external link (rel noopener)
//   [label](tel:) / (whatsapp:) / (mailto:) -> contact links from config
// Everything else is escaped.
export function inline(text, ctx) {
  if (text === null || text === undefined) return raw('');
  let s = esc(text);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label, target) => {
    const t = target.replace(/&amp;/g, '&');
    const r = ctx && ctx.resolveLink ? ctx.resolveLink(t) : { href: t };
    if (!r || !r.href) return label;
    const ext = r.external ? ' rel="noopener" target="_blank"' : '';
    return `<a href="${esc(r.href)}"${ext}>${label}</a>`;
  });
  return raw(s);
}

// Plain-text version of an inline string (for meta, JSON-LD, llms-full).
export function plain(text) {
  return String(text ?? '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1');
}

// Markdown version of an inline string (for llms-full.txt).
export function markdown(text, resolveAbs) {
  return String(text ?? '').replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label, target) => {
    const href = resolveAbs ? resolveAbs(target) : target;
    return href ? `[${label}](${href})` : label;
  });
}
