# Eurograft Website — Phase 2: Home Page Design Spec

**Date:** 2026-04-05
**Phase:** 2 of 4

## Overview

Implement the full Home page (`app/page.tsx`) with 5 sections. All sections are inline in `page.tsx` — no separate component files (each section is used once). All decorative graphics are inline SVGs. Form submission handled by Formspree (no backend).

## File Map

| Path | Action | Responsibility |
|---|---|---|
| `app/page.tsx` | Modify | Full home page — all 5 sections |
| `app/page.test.tsx` | Modify | Tests for all 5 sections |

No new files. No new dependencies except Formspree (HTTP POST — no package needed).

## Section Specs

### Section 1 — Hero

- **Background:** `bg-dark-slate` (`#293241`), min-height `min-h-screen`
- **Layout:** Centered content with max-width container, text left on desktop / centered on mobile
- **Headline:** DM Serif Display (`font-serif`), large (`text-4xl md:text-6xl`), white — "Premium Bone & Tissue Allografts — Available Across Europe"
- **Subheadline:** DM Sans, `text-lg`, white/80 opacity — "Eurograft partners with FDA-regulated US tissue banks to deliver high-quality bone and soft-tissue allografts to surgical teams across the EU."
- **CTAs (row, gap):**
  - "View Our Products" — `bg-brand-cyan` filled, white text, rounded, links to `/products`
  - "Request Information" — white outline (`border-white text-white`), rounded, links to `/contact`
- **Background graphic:** Inline SVG, absolutely positioned right side, low opacity (`opacity-10`), abstract bone/anatomical silhouette — does not affect layout

### Section 2 — Why Eurograft

- **Background:** white (`bg-white`)
- **Heading:** DM Serif, `text-3xl`, centered — "Why Surgical Teams Choose Eurograft"
- **Layout:** `grid grid-cols-2 md:grid-cols-4 gap-6`
- **4 cards** (`border border-divider rounded-lg p-6`, hover: `shadow-md transition`):

  | # | Title | Icon (inline SVG) | Body copy |
  |---|---|---|---|
  | 1 | FDA-Sourced | Shield with checkmark | "All grafts sourced from FDA-registered, AATB-accredited US tissue banks" |
  | 2 | EU Licensed | Certificate / star ring | "Operating under EU tissue establishment licence, full regulatory compliance" |
  | 3 | Pan-European Reach | Globe outline | "Shipping to surgical teams across EU member states with cold-chain logistics" |
  | 4 | Responsive Service | Person/headset | "Dedicated support from inquiry through post-operative follow-up" |

- Icon: `text-brand-cyan`, `w-10 h-10`, above title

### Section 3 — Products Teaser

- **Background:** `bg-light-tint` (`#E8F6FC`)
- **Heading:** DM Serif, `text-3xl`, centered — "Our Allograft Portfolio"
- **Subheading:** DM Sans, `text-base text-body-text/70`, centered — "A focused range of bone and soft-tissue products for reconstructive and orthopaedic procedures."
- **Layout:** `grid grid-cols-2 md:grid-cols-4 gap-6`
- **4 cards** (`bg-white rounded-lg p-6 border border-divider`, hover: `shadow-md transition`), each is an `<a>` linking to `/products`:

  | Title | Description |
  |---|---|
  | Cortical Bone Grafts | Structural support for load-bearing defects |
  | Cancellous Grafts | Osteoconductive filler for voids and cavities |
  | Demineralised Bone Matrix (DBM) | Osteoinductive putty, gel, and sheet formats |
  | Soft Tissue Allografts | Tendon and membrane grafts for reconstruction |

- Each card: title (`font-semibold text-dark-slate`), description (small, muted), "View Products →" (`text-brand-cyan text-sm mt-2`)

### Section 4 — Quality & Compliance

- **Background:** white (`bg-white`)
- **Heading:** DM Serif, `text-3xl`, centered — "Uncompromising Quality Standards"
- **Layout:** `grid grid-cols-1 md:grid-cols-3 gap-8`
- **3 columns** (no card border — just icon + heading + body):

  | Title | Body |
  |---|---|
  | Processing & Sterilisation | FDA-regulated processing facilities with terminal sterilisation. Full donor screening, serological testing, and documented traceability from recovery to implantation. |
  | EU Regulatory Framework | Authorised under EU Directive 2004/23/EC. Tissue establishment licence held by Eurograft Tissue Bank Ltd. Ongoing compliance with Bulgarian and EU competent authority requirements. |
  | Cold Chain & Distribution | Validated temperature-controlled packaging and logistics. Documented chain of custody for every shipment. Shelf-life and storage requirements met at every step. |

- Column icon: brand-cyan SVG (checkmark circle, microscope, snowflake respectively), `w-8 h-8`
- Title: `font-semibold text-dark-slate text-lg`

### Section 5 — Contact / Lead Capture

- **Background:** `bg-dark-slate`
- **Heading:** DM Serif, `text-3xl`, white — "Request Information"
- **Subtext:** DM Sans, white/70 — "Whether you're evaluating allografts for a procedure or looking to establish a supply relationship — we'll respond within one business day."
- **Layout:** heading + subtext left col (desktop) / form right col — OR stacked on mobile
- **Form:** `<form>` POST to Formspree endpoint (placeholder `FORMSPREE_ENDPOINT` — user replaces with real endpoint)
- **Fields:**

  | Field | Type | Required |
  |---|---|---|
  | Name | `text` | Yes |
  | Email | `email` | Yes |
  | Phone | `tel` | No |
  | Organisation | `text` | No |
  | Country | `select` | No |
  | Area of Interest | `select` | No |
  | Message | `textarea` | No |

- **Country options:** All EU + European countries (Albania, Andorra, Austria, Belarus, Belgium, Bosnia & Herzegovina, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Kosovo, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Moldova, Monaco, Montenegro, Netherlands, North Macedonia, Norway, Poland, Portugal, Romania, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, Ukraine, United Kingdom, Vatican City)
- **Area of Interest options:** Cortical Bone Grafts · Cancellous Grafts · Demineralised Bone Matrix (DBM) · Soft Tissue Allografts · General Enquiry
- **Field styling:** `bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded px-3 py-2 w-full`
- **Submit button:** `bg-brand-cyan text-white px-6 py-2 rounded font-semibold hover:opacity-90`
- **Submit label:** "Send Request"
- **Success state:** `useState` — on successful submit (Formspree returns 200), replace form with inline message: "Thank you — we'll be in touch shortly." (white, centered)
- **Error state:** on non-200, show "Something went wrong. Please try again." below submit button

## Form Handling

Formspree is used via direct `fetch` POST (no SDK):

```tsx
const res = await fetch('FORMSPREE_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(formData),
})
setSubmitted(res.ok)
```

`'use client'` required on `page.tsx` due to `useState`.

The `FORMSPREE_ENDPOINT` string is a placeholder — user replaces with their actual Formspree form URL (e.g. `https://formspree.io/f/xxxxxxxx`).

## Testing

Tests use React Testing Library. Key assertions:

- Hero: heading text renders, both CTA buttons present with correct `href`
- Why Eurograft: all 4 card titles render
- Products Teaser: all 4 product category names render, cards link to `/products`
- Quality: all 3 column headings render
- Contact form: all 7 fields render, submit button present
- Form success state: mock fetch returning `{ok: true}`, verify success message appears

## Out of Scope (Phase 2)

- Per-page SEO metadata (Phase 4)
- OG image (Phase 4)
- Animation / scroll effects
- Real Formspree endpoint (user configures after deploy)
