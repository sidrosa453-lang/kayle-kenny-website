# SARL ETAHG illustrations

Original engineering line-art SVGs for the site, meant to be inlined into the HTML.

## Style contract (applies to every file)

- All line work uses `stroke="currentColor"` (set on the root `<svg>`), so the text colour of the parent element sets the ink colour. Works on light and dark backgrounds.
- The accent is `fill="var(--accent, #E2A21B)"` (machine body panels, road centre-line dashes, stake flags). Set `--accent` on a parent to re-theme.
- Secondary tones use `fill="currentColor"` with `fill-opacity` 0.03–0.3 (ground, glass, stockpiles, asphalt).
- There is no text, no numbers, no manufacturer brands, no gradients, no filters, no raster images, no `id` attributes, no XML prolog and no fixed `width`/`height`. Size the SVG with CSS, e.g. `svg { width: 100%; height: auto; }`.
- The root has no `role` or `aria-*`. The site adds `role="img"` + `aria-label` (or `aria-hidden="true"` for decorative use).
- Machines face right and stand on a ground line at y = 272 in the 480 × 320 files, so cards line up in a grid.

## Files

| File | viewBox | Content |
|---|---|---|
| `hero-terrain.svg` | `0 0 1200 600` | Wide scene. A road under construction winds through layered Atlas ridgelines, the High Plateaus horizon with mesas, and dunes on the right. In the foreground, a tandem roller and an asphalt paver work on the fresh mat, fed by a tipper semi-truck. Survey stakes mark the unpaved section ahead. In the mid-ground, an excavator on a berm feeds a jaw-crusher plant with its conveyor and stockpile, and a water-well drilling rig stands at the right. Faint topographic contours sit in the sky. The upper-left area is left empty for headline copy. |
| `crusher.svg` | `0 0 480 320` | Crushing plant: feed hopper with rock, vibrating feeder on springs, jaw crusher with flywheel and V-belt motor drive on a steel structure, inclined belt conveyor, fine-aggregate stockpile. |
| `excavator.svg` | `0 0 480 320` | Hydraulic crawler excavator in a digging pose: undercarriage, house and cab, banana boom with boom, stick and bucket cylinders, bucket linkage, loaded bucket at a spoil heap. |
| `bulldozer.svg` | `0 0 480 320` | Crawler dozer: tracks with sprocket and idler, hood, ROPS cab, push arm, lift cylinder, concave blade, rear single-shank ripper. |
| `semi-truck.svg` | `0 0 480 320` | Cab-over 6x4 tractor unit with a tri-axle tipper semi-trailer, front telescopic ram and landing gear. |
| `dump-truck.svg` | `0 0 480 320` | Rigid 6x4 tipper truck with the body raised, the hoist ram extended and aggregate spilling onto a heap. |
| `paver.svg` | `0 0 480 320` | Tracked asphalt paver: front hopper with push rollers, hood, operator platform and canopy, tow arm and levelling cylinder, auger, screed with walkway, fresh mat behind. |
| `drill-rig.svg` | `0 0 480 320` | Truck-mounted water-well drilling rig: raised lattice mast with crown block, top-drive head and drill pipe, raising cylinder, power pack, pipe rack and stabiliser jacks. A cut-away below ground shows the borehole casing and the water table. |
| `spare-parts.svg` | `0 0 480 320` | Generic diesel engine parts: piston with ring grooves and con-rod with split big end, spur gear, two bearing half-shells, fuel injector. |
| `mobilization.svg` | `0 0 480 320` | Convoy of a tractor unit and a low-bed trailer carrying an excavator in transport position, heading to a new site on a rise marked by a site container, a flag and cones. |
| `terrain-coastal.svg` | `0 0 480 240` | Coastal Tell: rolling hills with terraces, cypresses and olive shrubs, and a road winding down to the sea. |
| `terrain-mountain.svg` | `0 0 480 240` | Atlas mountains: layered peaks, a switchback road climbing the massif, cedars. |
| `terrain-plateau.svg` | `0 0 480 240` | High Plateaus steppe: flat horizon with mesas, field lines, alfa-grass tufts, and a straight road to the vanishing point. |
| `terrain-desert.svg` | `0 0 480 240` | Sahara: dune ranges with slip faces, a stony reg plain, sand drift, and a road curving to the horizon. |
| `logo-mark.svg` | `0 0 64 64` | Brand mark: an abstract E (currentColor) whose middle bar is an accent road chevron pointing forward. Two colours. Legible at 16 px. |

## Usage notes

- The accent-filled panels are opaque, so the illustrations read correctly on any background colour. Unfilled areas are transparent.
- The road markings and stake flags in the hero use `stroke="var(--accent, #E2A21B)"`.
- To make the hero decorative only, add `aria-hidden="true"` and `focusable="false"` when inlining it.
- QA renders (light and dark) and the generator scripts are in `.qa/illustrations/` (not deployed).
