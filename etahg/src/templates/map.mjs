import { esc, raw } from './html.mjs';

// Schematic north–south corridor diagram: Mediterranean at the top, then
// Algiers -> Djelfa / Oued Sdeur (Aïn El Ibel) -> Ghardaïa along the RN1 axis.
// Not a geographic map: positions are deliberately schematic ("not to scale").
// Location ids from site.config.json are placed at fixed schematic positions;
// unknown ids are simply not drawn (they still get a card).

const NODE = {
  parts: { y: 104, dx: 0 },
  depot: { y: 262, dx: 0 },
  quarry: { y: 318, dx: 34 },
  hq: { y: 462, dx: 0 },
};
const AXIS_X = 170;

// Zone bands (y ranges) and their ui.locations.map label keys.
const ZONES = [
  { key: 'tell', y0: 74, y1: 170 },
  { key: 'plateaus', y0: 170, y1: 298 },
  { key: 'saharanAtlas', y0: 298, y1: 360 },
  { key: 'sahara', y0: 360, y1: 540 },
];

export function corridorMap({ locations, names, types, labels, uid = 'map', compact = false }) {
  const W = 400, H = 540;
  const nodes = locations
    .map((loc, i) => ({ loc, i, pos: NODE[loc.id] }))
    .filter((n) => n.pos);

  const zoneSvg = ZONES.map((z, i) => {
    const shade = i % 2 === 0 ? 'var(--map-band-a)' : 'var(--map-band-b)';
    return `<rect x="0" y="${z.y0}" width="${W}" height="${z.y1 - z.y0}" fill="${shade}"/>` +
      `<line x1="0" y1="${z.y0}" x2="${W}" y2="${z.y0}" stroke="var(--map-rule)" stroke-dasharray="2 5"/>` +
      `<text class="map-zone" x="16" y="${z.y0 + 22}">${esc(labels[z.key] || '')}</text>`;
  }).join('');

  // Mountain hatching (Tell Atlas + Saharan Atlas), dune dots (Sahara) — subtle texture.
  let texture = '';
  const ridge = (y, x0, x1) => {
    let d = `M${x0} ${y}`;
    for (let x = x0; x < x1; x += 14) d += ` l7 -7 l7 7`;
    return `<path d="${d}" fill="none" stroke="var(--map-ink-soft)" stroke-width="1"/>`;
  };
  texture += ridge(142, 20, 124) + ridge(150, 232, 384) + ridge(338, 20, 124) + ridge(346, 244, 384);
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 14; c++) {
      const x = 22 + c * 28 + (r % 2) * 14;
      const y = 392 + r * 24;
      if (Math.abs(x - AXIS_X) < 18) continue;
      if (x > AXIS_X && x < W - 10 && y > 440 && y < 500) continue;
      texture += `<path d="M${x - 5} ${y} q5 -5 10 0" fill="none" stroke="var(--map-ink-soft)" stroke-width="1"/>`;
    }
  }

  // Sea + coast.
  let coast = `M0 70`;
  for (let x = 0; x <= W; x += 30) coast += ` Q${x + 7.5} ${66} ${x + 15} 70 T${x + 30} 70`;
  const sea = `<rect x="0" y="0" width="${W}" height="72" fill="var(--map-sea)"/>` +
    [16, 58].map((y) => {
      let d = `M${10 + (y % 20)} ${y}`;
      for (let x = 10 + (y % 20); x < W - 20; x += 24) d += ` q6 -4 12 0 t12 0`;
      return `<path d="${d}" fill="none" stroke="var(--map-sea-line)" stroke-width="1"/>`;
    }).join('') +
    `<path d="${coast} L${W} 74 L0 74 Z" fill="var(--map-band-a)"/>` +
    `<path d="${coast}" fill="none" stroke="var(--map-ink)" stroke-width="1.5"/>` +
    `<text class="map-sea" x="${W / 2}" y="41" text-anchor="middle">${esc(labels.sea || '')}</text>`;

  // Axis (RN1).
  const top = NODE.parts.y, bottom = NODE.hq.y;
  const axis = `<line x1="${AXIS_X}" y1="${top}" x2="${AXIS_X}" y2="${bottom}" stroke="var(--map-ink)" stroke-width="3"/>` +
    `<line x1="${AXIS_X}" y1="${top}" x2="${AXIS_X}" y2="${bottom}" stroke="var(--map-bg)" stroke-width="1" stroke-dasharray="6 8"/>` +
    `<g transform="translate(${AXIS_X - 12} ${(top + NODE.depot.y) / 2}) rotate(-90)"><text class="map-axis" text-anchor="middle">${esc(labels.axis || '')}</text></g>` +
    `<g transform="translate(${AXIS_X - 12} ${(NODE.quarry.y + bottom) / 2 + 20}) rotate(-90)"><text class="map-axis" text-anchor="middle">${esc(labels.axis || '')}</text></g>`;

  const nodeSvg = nodes.map(({ loc, i, pos }) => {
    const x = AXIS_X + pos.dx;
    const y = pos.y;
    const isHq = loc.id === 'hq';
    const spur = pos.dx ? `<line x1="${AXIS_X}" y1="${y - 14}" x2="${x}" y2="${y}" stroke="var(--map-ink)" stroke-width="1.5"/>` : '';
    const size = isHq ? 18 : 14;
    const marker = `<rect x="${x - size / 2}" y="${y - size / 2}" width="${size}" height="${size}" fill="${isHq ? 'var(--accent)' : 'var(--map-bg)'}" stroke="var(--map-ink)" stroke-width="2"/>` +
      `<text class="map-num" x="${x}" y="${y + 4}" text-anchor="middle">${i + 1}</text>`;
    const lx = x + size / 2 + 10;
    const label = `<text class="map-place" x="${lx}" y="${y - 1}">${esc(names[loc.id] || loc.locality)}</text>` +
      `<text class="map-type" x="${lx}" y="${y + 14}">${esc(types[loc.id] || loc.type)}</text>`;
    return `<g class="map-node">${spur}${marker}${label}</g>`;
  }).join('');

  const north = `<g transform="translate(${W - 24} 30)"><path d="M0 -16 L7 6 L0 1 L-7 6 Z" fill="var(--map-ink)"/><text class="map-north" x="0" y="20" text-anchor="middle">${esc(labels.north || 'N')}</text></g>`;

  return raw(
    `<figure class="corridor${compact ? ' corridor-compact' : ''}">` +
    `<svg class="corridor-svg" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="${uid}-t" direction="ltr">` +
    `<title id="${uid}-t">${esc(labels.title || '')}</title>` +
    `<rect width="${W}" height="${H}" fill="var(--map-bg)"/>${zoneSvg}${texture}${sea}${axis}${nodeSvg}${north}` +
    `<rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" fill="none" stroke="var(--map-rule)"/>` +
    `</svg><figcaption>${esc(labels.caption || '')}</figcaption></figure>`
  );
}
