# Homepage Visual Improvements — Design Spec
Date: 2026-04-24  
File: `app/page.tsx` only

## Context
B2B medical/surgical corporate site. Palette: dark-slate (#293241) + brand-cyan (#2EAEE0) + white. Target: European surgical teams and hospital procurement managers.

---

## Improvement 1 — Fix White Gaps

**Problem:** Two `bg-white py-20` sections (Why Eurograft, Quality & Compliance) create visually heavy white blocks between the dark hero and the coloured sections around them.  
**Fix:** Reduce `py-20` → `py-14` on both `bg-white` sections only. No content or colour changes.

---

## Improvement 2 — Product Card Icons

**Change:** Add `icon: React.ReactElement` field to `ProductCard` type and populate `productCards` array with inline SVG icons. Render above the card title in `text-brand-cyan`.

| Card | Icon concept |
|---|---|
| Cortical Bone Grafts | Stacked horizontal bars (dense layered bone) |
| Cancellous Grafts | Hexagonal lattice / dot grid (spongy structure) |
| Demineralised Bone Matrix | Molecule nodes + bonds |
| Soft Tissue Allografts | Sinuous wave lines (tendon/tissue) |

---

## Improvement 3 — Trust Bar

**Position:** Between Hero and Why Eurograft sections.  
**Background:** `bg-[#243347]` (mid-tone between dark-slate and transparent — distinct but same family).  
**Padding:** `py-6` (slim band, not a full section).  
**Layout:** `grid-cols-2 md:grid-cols-4` with icon + bold white label + `white/60` subtitle per item.

| Item | Label |
|---|---|
| Shield/checkmark | EU Licensed Tissue Establishment |
| FDA badge | FDA-Sourced Products |
| CE mark | CE Marked Supply Chain |
| Globe | Ships Across 30+ European Countries |

---

## Improvement 4 — Stats Section

**Position:** Between Quality & Compliance and Contact Form sections.  
**Background:** `bg-dark-slate` (matches contact — creates a cohesive dark block).  
**Layout:** `grid-cols-2 md:grid-cols-4`.  
**Style:** Large bold `text-brand-cyan` number/text + `text-white/70` supporting label (font-serif for the large value).

| Value | Label |
|---|---|
| 2024 | Year Founded |
| EU Licensed | Tissue Establishment |
| FDA-Regulated | Source Facilities |
| 30+ Countries | European Reach |

---

## Constraints
- No content copy changes
- No colour palette changes  
- No Nav or Footer changes
- All routing and form functionality preserved
- Single file edit: `app/page.tsx`
