// Deterministic brand textures, generated at build time (no randomness between builds).
//  - topo.svg   : topographic contour rings (used on dark sections: hero, footer)
//  - strata.svg : horizontal strata lines (used subtly on light sections)

function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
}

// Closed smooth path through points (Catmull-Rom -> cubic Bézier).
function closedPath(pts) {
  const n = pts.length;
  const f = (v) => Math.round(v * 10) / 10;
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d + 'Z';
}
function openPath(pts) {
  const n = pts.length;
  const f = (v) => Math.round(v * 10) / 10;
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[Math.max(i - 1, 0)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(i + 2, n - 1)];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${f(c1[0])} ${f(c1[1])} ${f(c2[0])} ${f(c2[1])} ${f(p2[0])} ${f(p2[1])}`;
  }
  return d;
}

export function topoSvg() {
  const W = 1600, H = 900;
  const r = rng(20240917);
  const centers = [
    { x: 1180, y: 300, rings: 13, step: 34 },
    { x: 260, y: 760, rings: 9, step: 30 },
    { x: 1500, y: 880, rings: 6, step: 28 },
  ];
  const paths = [];
  for (const c of centers) {
    const harm = Array.from({ length: 4 }, (_, j) => ({ a: (0.16 / (j + 1)) * (0.6 + r()), p: r() * Math.PI * 2, k: j + 2 }));
    for (let k = 1; k <= c.rings; k++) {
      const pts = [];
      const N = 40;
      const drift = k * 0.08;
      for (let i = 0; i < N; i++) {
        const t = (i / N) * Math.PI * 2;
        let m = 1;
        for (const h of harm) m += h.a * Math.sin(h.k * t + h.p + drift);
        const rad = k * c.step * m;
        pts.push([c.x + Math.cos(t) * rad * 1.25, c.y + Math.sin(t) * rad * 0.85]);
      }
      paths.push(`<path d="${closedPath(pts)}"${k % 5 === 0 ? ' stroke-width="1.6"' : ''}/>`);
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="#E9E3D6" stroke-opacity=".09" stroke-width="1">${paths.join('')}</g></svg>`;
}

export function strataSvg() {
  const W = 1600, H = 240;
  const r = rng(7);
  const lines = [];
  const phase = Array.from({ length: 3 }, () => r() * Math.PI * 2);
  for (let k = 0; k < 11; k++) {
    const pts = [];
    for (let i = 0; i <= 24; i++) {
      const x = (i / 24) * W;
      const t = i / 24;
      const y = 22 + k * 19 + Math.sin(t * 5.2 + phase[0] + k * 0.18) * 7 + Math.sin(t * 11 + phase[1] + k * 0.3) * 2.5 + Math.sin(t * 2.1 + phase[2]) * 10;
      pts.push([x, y]);
    }
    lines.push(`<path d="${openPath(pts)}"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><g fill="none" stroke="#0F1318" stroke-opacity=".08" stroke-width="1">${lines.join('')}</g></svg>`;
}
