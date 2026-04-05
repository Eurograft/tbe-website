# Eurograft Website — Phase 1: Foundation Design Spec

**Date:** 2026-04-05
**Phase:** 1 of 4

## Overview

Establish the brand foundation, global layout components (Nav + Footer), and empty page stubs. No page content yet — just the shell that all subsequent phases build on top of.

## Brand Tokens

| Token | Value | Usage |
|---|---|---|
| `brand-cyan` | `#2EAEE0` | Accents, buttons, highlights |
| `dark-slate` | `#293241` | Nav, footer, hero backgrounds |
| `body-text` | `#3A3A3A` | Body copy |
| `light-tint` | `#E8F6FC` | Section backgrounds |
| `divider` | `#E0E0E0` | Borders, dividers |
| White | `#FFFFFF` | Page background |

## Typography

- **Body / Nav / Buttons:** DM Sans (Google Fonts) — loaded via `next/font/google`
- **Section headings only:** DM Serif Display (Google Fonts) — loaded via `next/font/google`
- Both fonts loaded in `app/layout.tsx` and exposed as CSS variables: `--font-dm-sans`, `--font-dm-serif`
- Base font applied to `<body>` via Tailwind class

## File Structure

```
app/
├── layout.tsx              Modify — root layout: fonts, Nav, Footer, base metadata
├── globals.css             Modify — Tailwind directives + base typography styles
├── page.tsx                Modify — placeholder stub (Home)
├── about/
│   └── page.tsx            Create — placeholder stub
├── products/
│   └── page.tsx            Create — placeholder stub
├── contact/
│   └── page.tsx            Create — placeholder stub
├── privacy/
│   └── page.tsx            Create — minimal privacy policy placeholder
components/
├── Nav.tsx                 Create — sticky navigation
└── Footer.tsx              Create — site footer
tailwind.config.ts          Modify — brand color tokens + font families
```

## Component Specs

### Nav (`components/Nav.tsx`)

- **Background:** dark slate (`#293241`)
- **Position:** sticky top, full width, z-index above page content
- **Layout:** logo left — nav links + CTA right
- **Logo:** `<Image>` from `/public/TBE-Logo-White-EN.png`, height 40px, links to `/`
- **Links:** Home · About · Products · Contact — white text, hover: cyan underline
- **CTA button:** "Request Information" — cyan background (`#2EAEE0`), white text, small, rounded, links to `/contact`
- **Mobile (< 768px):** hamburger icon (3 lines, white), toggles a dropdown menu with all links + CTA stacked vertically
- **Hamburger state:** managed with `useState`, closes on route change

### Footer (`components/Footer.tsx`)

- **Background:** dark slate (`#293241`), white text
- **Layout (desktop):** 3 columns — logo+tagline | nav links | contact info
- **Layout (mobile):** stacked vertically, centred
- **Logo:** same as nav, smaller (height 32px)
- **Tagline:** "Advancing surgery through trusted allografts" — muted white (`opacity-70`)
- **Nav links:** Home · About · Products · Contact · Privacy Policy
- **Contact:** `+359 877 06 3134` · `St. Industrialna 2A, Floor 1, Office 9, Asenovgrad 4230, Bulgaria`
- **NO email address**
- **Copyright line:** "Est. 2024 · Eurograft Tissue Bank Ltd. · All rights reserved" — small, muted

### Root Layout (`app/layout.tsx`)

```tsx
// Structure:
<html>
  <body className={dmSans.variable}>
    <Nav />
    {children}
    <Footer />
  </body>
</html>
```

- Base metadata: site name "Eurograft Tissue Bank", default OG image placeholder
- Imports `globals.css`

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  background-color: #ffffff;
  color: #3A3A3A;
}
```

### Tailwind Config

Extend theme with:
```ts
colors: {
  'brand-cyan': '#2EAEE0',
  'dark-slate': '#293241',
  'body-text': '#3A3A3A',
  'light-tint': '#E8F6FC',
  'divider': '#E0E0E0',
},
fontFamily: {
  sans: ['var(--font-dm-sans)', 'sans-serif'],
  serif: ['var(--font-dm-serif)', 'serif'],
},
dropShadow: {
  logo: '0 0 20px #2EAEE0',
},
```

### Page Stubs

Each stub returns a minimal placeholder so nav/footer render correctly:

```tsx
// Example: app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-body-text">About — coming in Phase 3</p>
    </main>
  )
}
```

Home stub (`app/page.tsx`) replaces the existing splash page content.

### Privacy Policy Page (`app/privacy/page.tsx`)

Minimal placeholder with:
- Heading: "Privacy Policy"
- Text: "This privacy policy will be updated shortly. For any questions, contact us at +359 877 06 3134."
- Link back to home

## Dependencies to Install

```bash
# No new runtime dependencies for Phase 1
# DM Sans + DM Serif Display loaded via next/font/google (built into Next.js)
```

## Testing

- Nav renders on all 5 routes (/, /about, /products, /contact, /privacy)
- Footer renders on all 5 routes
- Mobile hamburger opens/closes correctly
- Logo links to /
- "Request Information" links to /contact
- All nav links navigate correctly
- No console errors

## Out of Scope (Phase 1)

- Page content (Phase 2 and 3)
- SEO metadata per page (Phase 4)
- Sitemap / robots.txt (Phase 4)
- Contact form (Phase 2)
- SVG graphics (Phase 2)
