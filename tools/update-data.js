/*
 * Regenerates ../data.js from the stock Excel file.
 *
 * Usage:
 *   npm install            (once, inside the tools folder)
 *   node update-data.js "C:\path\to\stock.xlsx" [sheet name]
 *
 * The Excel must have a header row containing "Part Name" and "Part No.",
 * followed by one row per part. Rows from "Total"/"shipping" onward are ignored.
 *
 * NOTE: quantities are intentionally NOT exported — the public site only says
 * in stock / not in stock, never how many.
 */
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const COMPANY = {
  name: 'EURL KAYLE KENNY',
  address: 'El Djenina 200 Logts Social Participatif, Lido, Mohammadia, Algiers, Algeria',
  phone: '+213 558 96 10 49',
  phoneRaw: '+213558961049',
  whatsapp: 'https://wa.me/213558961049',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=El+Djenina+200+Logts+Lido+Mohammadia+Alger',
  nif: '002416105252219',
  nis: '002416290068050',
  rc: '16/00-1052522B24',
};

const CONFIG = {
  currency: 'DZD',
  priceMultiplier: 1,
};

/*
 * Selling-price formula (baked into data.js — the invoice USD cost prices are
 * never published):
 *   landed cost = invoice USD x TAX_FACTOR x USD_TO_DZD
 *   selling     = landed cost x margin, rounded to the nearest 100 DZD
 * The margin slides smoothly (log scale) from MARGIN_CHEAP on the cheapest
 * invoice line to MARGIN_EXPENSIVE on the most expensive one.
 */
const TAX_FACTOR = 1.5;
const USD_TO_DZD = 250;
const MARGIN_CHEAP = 1.5;     // +50% on the cheapest items
const MARGIN_EXPENSIVE = 1.3; // +30% on the most expensive items

function sellingPriceDZD(invoiceUsd, minUsd, maxUsd) {
  const span = Math.log(maxUsd) - Math.log(minUsd);
  const pos = span > 0 ? (Math.log(invoiceUsd) - Math.log(minUsd)) / span : 0;
  const margin = MARGIN_CHEAP - (MARGIN_CHEAP - MARGIN_EXPENSIVE) * pos;
  const dzd = invoiceUsd * TAX_FACTOR * USD_TO_DZD * margin;
  return Math.max(100, Math.round(dzd / 100) * 100);
}

const file = process.argv[2];
if (!file) {
  console.error('Usage: node update-data.js "path\\to\\stock.xlsx" [sheet name]');
  process.exit(1);
}

const wb = XLSX.readFile(file);
const sheetName = process.argv[3] || wb.SheetNames[0];
const ws = wb.Sheets[sheetName];
if (!ws) {
  console.error(`Sheet "${sheetName}" not found. Sheets: ${wb.SheetNames.join(', ')}`);
  process.exit(1);
}
console.log(`Reading sheet: "${sheetName}"`);
const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null });

const headerIdx = rows.findIndex(
  (r) => r && r.some((c) => typeof c === 'string' && c.trim().toLowerCase() === 'part name')
);
if (headerIdx === -1) {
  console.error('Could not find a header row containing "Part Name".');
  process.exit(1);
}
const header = rows[headerIdx].map((c) => (c === null ? '' : String(c).trim().toLowerCase()));
const cName = header.findIndex((h) => h === 'part name');
const cNo = header.findIndex((h) => h.startsWith('part no'));
// exact 'unit' only — a startsWith match would also hit 'unit price (usd)...'
const cUnit = header.findIndex((h) => h === 'unit');
const cQty = header.findIndex((h) => h === 'qty' || h.includes('qty'));
const cPrice = header.findIndex((h) => h.includes('unit price'));
if ([cName, cNo, cQty, cPrice].includes(-1)) {
  console.error('Missing one of the required columns: Part Name, Part No., Qty, Unit price.');
  process.exit(1);
}

const clean = (s) => String(s == null ? '' : s).replace(/\s+/g, ' ').trim();

// Numeric cells: strip float artifacts (3801106.0000001 -> "3801106").
// Leading zeros in numeric cells cannot be recovered — store such refs as text in Excel.
const cellToRef = (v) => (typeof v === 'number' ? String(Number(v.toFixed(6))) : clean(v));

function parsePartNumbers(raw) {
  // "3950661 / 4966244 -1" -> refs ["3950661","4966244"]; a trailing " -1"
  // (whitespace required) is a supplier variant marker, not part of the reference.
  // "4981796(Grey)" -> ref 4981796 with note "Grey". Notes are collected across tokens.
  const display = cellToRef(raw).replace(/\s+-1$/, '');
  const notes = [];
  const numbers = display
    .split('/')
    .map((t) => {
      let tok = clean(t);
      const m = tok.match(/\(([^)]+)\)/);
      if (m) {
        notes.push(m[1]);
        tok = clean(tok.replace(/\([^)]*\)/, ''));
      }
      return tok;
    })
    .filter(Boolean);
  const note = notes.length ? notes.join(', ') : null;
  return { numbers, note, display: numbers.join(' / ') + (note ? ` (${note})` : '') };
}

const isNumericCell = (v) => v !== null && v !== '' && Number.isFinite(Number(v));

const parts = [];
for (let i = headerIdx + 1; i < rows.length; i++) {
  const r = rows[i];
  if (!r) continue;
  const first = clean(r[0]).toLowerCase();
  // Footer starts where the Item column stops being a number ("Total", "shipping cost").
  if (!isNumericCell(r[0]) && (first.startsWith('total') || first.startsWith('shipping'))) break;
  const name = clean(r[cName]);
  const rawNo = r[cNo];
  if (!name || rawNo == null || rawNo === '') continue;
  const qty = Number(r[cQty]);
  const rawPrice = r[cPrice];
  const price = isNumericCell(rawPrice) && Number(rawPrice) > 0
    ? Math.round((Number(rawPrice) + Number.EPSILON) * 100) / 100
    : null; // empty / zero / non-numeric price -> "on request", never $0.00
  const { numbers, note, display } = parsePartNumbers(rawNo);
  if (!numbers.length) continue;
  parts.push({
    id: parts.length + 1,
    name,
    category: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
    numbers,
    display,
    note,
    unit: clean(r[cUnit]).toLowerCase() || 'pc',
    // Unknown/non-numeric qty counts as in stock (the row exists on the sheet);
    // only an explicit 0 marks it out of stock.
    inStock: !Number.isFinite(qty) || qty > 0,
    price,
  });
}

if (!parts.length) {
  console.error('No parts parsed — check the Excel layout.');
  process.exit(1);
}

// Convert invoice USD cost prices to DZD selling prices (see formula above).
const priced = parts.filter((p) => p.price != null).map((p) => p.price);
const minUsd = Math.min(...priced);
const maxUsd = Math.max(...priced);
parts.forEach((p) => {
  if (p.price != null) p.price = sellingPriceDZD(p.price, minUsd, maxUsd);
});

const out = `// Generated by tools/update-data.js — do not edit by hand.
// Source: ${path.basename(file)} (sheet "${sheetName}")
// Generated rows: ${parts.length}
window.PARTS_DATA = ${JSON.stringify({ company: COMPANY, config: CONFIG, parts }, null, 2)};
`;
const target = path.join(__dirname, '..', 'data.js');
fs.writeFileSync(target, out, 'utf8');
console.log(`Wrote ${parts.length} parts to ${target}`);
console.log(`Categories: ${new Set(parts.map((p) => p.category)).size}`);
console.log(`No price (shown as "on request"): ${parts.filter((p) => !p.price).length}`);
console.log(`Out of stock: ${parts.filter((p) => !p.inStock).length}`);
