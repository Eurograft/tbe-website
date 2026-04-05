# Eurograft Website — Phase 3: Inner Pages Design Spec

**Date:** 2026-04-05
**Phase:** 3 of 4

## Overview

Implement the three inner pages — About, Products, and Contact. The contact form reappears on both Products and Contact pages, so it is extracted into a shared `components/ContactForm.tsx` client component. The home page form stays inline (no changes to Phase 2). All page files are server components except where noted.

## File Map

| Path | Action | Responsibility |
|---|---|---|
| `components/ContactForm.tsx` | Create | Shared 'use client' form component with Formspree integration |
| `app/about/page.tsx` | Modify | Full About page — 4 sections |
| `app/products/page.tsx` | Modify | Full Products page — hero + 4 categories + inquiry form |
| `app/contact/page.tsx` | Modify | Full Contact page — hero + contact details + form |
| `app/about/page.test.tsx` | Create | Tests for About page |
| `app/products/page.test.tsx` | Create | Tests for Products page |
| `app/contact/page.test.tsx` | Create | Tests for Contact page |
| `components/ContactForm.test.tsx` | Create | Tests for ContactForm component |

---

## Component Spec: `components/ContactForm.tsx`

Extracted from the home page form (but the home page form is NOT modified — this component is used only by the new pages).

**Props:** none (self-contained)

**Behaviour:**
- `'use client'`
- `useState` for `submitted` (bool) and `submitError` (bool)
- `handleSubmit`: `fetch('https://formspree.io/f/xbdpqjvd', POST, JSON)`, sets `submitted` or `submitError`
- On success: replace form with success message
- On error: show inline error message below submit button
- Wrap `fetch` in `try/catch` — set `submitError(true)` on network failure

**Fields:**
| Field | Type | Required |
|---|---|---|
| Name | text | Yes |
| Email | email | Yes |
| Phone | tel | No |
| Organisation | text | No |
| Country | select | No |
| Area of Interest | select | No |
| Message | textarea | No |

**Country options:** Albania, Andorra, Austria, Belarus, Belgium, Bosnia & Herzegovina, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Kosovo, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Moldova, Monaco, Montenegro, Netherlands, North Macedonia, Norway, Poland, Portugal, Romania, San Marino, Serbia, Slovakia, Slovenia, Spain, Sweden, Switzerland, Turkey, Ukraine, United Kingdom, Vatican City

**Area of Interest options:** Cortical Bone Grafts · Cancellous Grafts · Demineralised Bone Matrix (DBM) · Soft Tissue Allografts · General Enquiry

**Field styling:** `bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded px-3 py-2 w-full`
**Submit button:** `bg-brand-cyan text-white px-6 py-2 rounded font-semibold hover:opacity-90 self-start`, label "Send Request"
**Success message:** `"Thank you — we'll be in touch shortly."`
**Error message:** `"Something went wrong. Please try again."`

Note: The form fields use dark/transparent styling (`bg-white/10`) designed for placement on a `bg-dark-slate` background.

---

## About Page (`app/about/page.tsx`)

Server component (no `'use client'`).

### Section 1 — Hero
- Background: `bg-dark-slate`
- Min-height: `min-h-[40vh]` with `flex items-end pb-16`
- H1 (DM Serif): "About Eurograft Tissue Bank"
- Sub-line (DM Sans, `text-white/70`): "EU-licensed · FDA-sourced · Asenovgrad, Bulgaria"

### Section 2 — Who We Are
- Background: `bg-white py-20`
- H2 (DM Serif): "Who We Are"
- Body text (2 paragraphs, `text-body-text`, `max-w-3xl`):
  - P1: "Eurograft Tissue Bank is an EU-licensed tissue establishment based in Asenovgrad, Bulgaria, specialising in the storage, distribution, and supply of human allograft tissue and cellular products for surgical use across Europe. Founded in 2024, Eurograft was established to bridge the gap between world-class American allograft technology and the growing demand for high-quality, reliably sourced human tissue products across European healthcare facilities."
  - P2: "We work exclusively with FDA-registered, AATB-accredited tissue banks in the United States — ensuring every product we distribute meets the most rigorous standards of donor screening, processing, and sterilization available anywhere in the world."

### Section 3 — Our Mission
- Background: `bg-light-tint py-20`
- Label (small caps, `text-brand-cyan text-sm font-semibold tracking-widest uppercase`): "Our Mission"
- Quote (DM Serif, `text-3xl md:text-4xl text-dark-slate`, `max-w-4xl mx-auto`):
  "Our mission is simple: to give European surgeons and healthcare facilities reliable, fast access to the highest quality human allograft products — so they can focus on what matters most: their patients."
- Centred layout

### Section 4 — Regulatory Standing
- Background: `bg-white py-20`
- H2 (DM Serif): "Regulatory Standing"
- Body paragraph: "Eurograft Tissue Bank is fully licensed by the Bulgarian Executive Agency for Medical Oversight and operates in full compliance with EU Directive 2015/566 on human tissues and cells. Our operations are subject to regular inspection and oversight, ensuring full traceability and compliance at every step of the supply chain."
- 3-column compliance highlights (icon + heading + text):
  1. Icon: shield/check — "EU Directive 2015/566" — "Full compliance with EU regulations on human tissues and cells"
  2. Icon: building/authority — "Bulgarian EAMO Licensed" — "Licenced and regularly inspected by the Bulgarian Executive Agency for Medical Oversight"
  3. Icon: chain — "Full Traceability" — "Complete chain of custody from donor bank to surgical team, documented at every step"
- All icons: inline SVG, `aria-hidden="true"`, `text-brand-cyan w-8 h-8`

---

## Products Page (`app/products/page.tsx`)

Server component. Imports `<ContactForm />`.

### Section 1 — Hero
- Background: `bg-dark-slate min-h-[40vh] flex items-end pb-16`
- H1 (DM Serif): "Our Allograft Portfolio"
- Intro paragraph (`text-white/80 max-w-2xl`): "Eurograft distributes a comprehensive range of human allograft products sourced exclusively from FDA-registered, AATB-accredited tissue banks in the United States. Our portfolio covers the full spectrum of surgical needs — from ACL reconstruction and meniscus transplantation to spinal fusion and wound care. All products are available for delivery to healthcare facilities across Europe. To inquire about specific products, availability, or pricing — use the form below or call us directly."

### Sections 2–5 — Product Categories

Each category follows this pattern:
- Alternating `bg-white` / `bg-light-tint`
- H2 (DM Serif): category name
- Description paragraph
- Product grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
- Each product card: `border border-divider rounded-lg p-4`, product name (`font-semibold text-dark-slate`), one-line description (`text-sm text-body-text/70`)

**Category 1 — Sports Medicine & ACL Allografts** (`bg-white`)
Description: "Human tendon and soft tissue allografts for ligament reconstruction and joint restoration surgery. Our sports medicine portfolio includes grafts for ACL reconstruction, PCL reconstruction, meniscus transplantation, and multi-ligament procedures."

Products (name — description):
1. Achilles Tendon Allograft — For ACL and multi-ligament reconstruction
2. Patellar Ligament Allograft — 10mm and split (hemi) options available
3. Semitendinosus Allograft — Hamstring graft for ACL reconstruction
4. Gracilis Allograft — Slender hamstring tendon for ligament repair
5. Tibialis Tendon Allograft — Anterior and posterior, multiple diameters
6. Peroneus Longus Allograft — Small and large diameter options
7. Meniscus Allograft — For meniscus transplantation procedures
8. Osteochondral Allograft (OCA) — For cartilage restoration and joint surface repair

**Category 2 — Bone Allografts** (`bg-light-tint`)
Description: "Cortical and cancellous bone grafts for orthopedic, trauma, and reconstructive procedures. Available in multiple forms and sizes to match specific surgical requirements."

Products:
1. Cortical Bone Allograft — Structural support for load-bearing applications
2. Cancellous Bone Allograft — Highly porous graft for bone void filling
3. Demineralized Bone Matrix (DBM) — Osteoinductive matrix for bone regeneration
4. Demineralized Cortical Fiber Matrix — Enhanced handling with growth factor preservation
5. Structural Bone Grafts — Precision-machined for specific anatomical applications
6. Bone Void Fillers — Cancellous chips and particulate for cavity filling

**Category 3 — Spine Allografts** (`bg-white`)
Description: "Precision bone grafts and biological matrices for spinal fusion, disc replacement support, and vertebral reconstruction procedures."

Products:
1. Cervical Spacers — Cortical bone spacers for anterior cervical fusion
2. Lumbar Spacers — Structural grafts for posterior and anterior lumbar fusion
3. Cortical Dowels — Cylindrical grafts for interbody fusion procedures
4. Demineralized Bone Matrix for Spine — Osteoinductive support for fusion
5. Cancellous Chips — Loose graft material for posterolateral fusion

**Category 4 — Wound Care & Soft Tissue** (`bg-light-tint`)
Description: "Biological allografts for wound closure, reconstructive surgery, and soft tissue reinforcement — including acellular dermal matrices and placental membrane products."

Products:
1. Acellular Dermal Matrix — Collagen scaffold for tissue reconstruction and wound closure
2. Placental Membrane Allograft — Growth factor-rich barrier for chronic wound care
3. Acellular Dermis for Sports Medicine — Reinforcement of tendon, ligament, and rotator cuff
4. Soft Tissue Allografts for Rotator Cuff — Biological support for rotator cuff repair

### Section 6 — Inquiry Form
- Background: `bg-dark-slate py-20`
- H2 (DM Serif, white): "Request Information"
- Subtext (`text-white/70`): "To inquire about specific products, availability, or pricing — complete the form below or call us at +359 877 06 3134."
- `<ContactForm />` component

---

## Contact Page (`app/contact/page.tsx`)

Server component. Imports `<ContactForm />`.

### Section 1 — Hero
- Background: `bg-dark-slate min-h-[40vh] flex items-end pb-16`
- H1 (DM Serif): "Contact Us"
- Sub-line (`text-white/70`): "We respond to all enquiries within one business day."

### Section 2 — Contact Section
- Background: `bg-white py-20`
- Layout: `md:grid md:grid-cols-2 md:gap-12`
- **Left column** — contact details:
  - H2 (DM Serif): "Get in Touch"
  - Phone: `+359 877 06 3134` (clickable `tel:` link)
  - Address: St. Industrialna 2A, Floor 1, Office 9, Asenovgrad 4230, Bulgaria
  - Note (`text-body-text/70 text-sm`): "We do not accept unsolicited commercial emails. Please use the form or call us directly."
- **Right column** — the form sits on a `bg-dark-slate rounded-xl p-8` card so the form's transparent-white field styling renders correctly against a dark background

---

## Testing

- `components/ContactForm.test.tsx`: renders all 7 fields, submit button, success/error states (fetch mock), try/catch network error path
- `app/about/page.test.tsx`: h1 heading, "Who We Are" h2, mission quote snippet, "Regulatory Standing" h2, 3 compliance column headings
- `app/products/page.test.tsx`: h1 heading, all 4 category h2 headings, spot-check product names from each category, `<ContactForm />` renders (submit button present)
- `app/contact/page.test.tsx`: h1 heading, phone number visible, address visible, `<ContactForm />` renders (submit button present)

## Out of Scope (Phase 3)

- Per-page SEO metadata (Phase 4)
- OG images (Phase 4)
- Sitemap / robots.txt (Phase 4)
- Animation or scroll effects
- Product filtering or search
