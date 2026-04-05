# Eurograft Splash Page — Design Spec

**Date:** 2026-04-05

## Overview

A minimal Next.js 14 website for Eurograft (Тъканна Банка Еурографт ЕООД). The site is a single splash page showing the company logo centered on a white background. It is Vercel-ready with no additional configuration required.

## Brand

| Token | Value |
|---|---|
| Primary cyan | `#2EAEE0` |
| Dark text | `#3A3A3A` |
| Background | `#FFFFFF` |

## Architecture

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (included in the default Next.js scaffold)
- **Routing:** Single route only — `app/page.tsx`
- **Static assets:** Logo served from `public/TBE-Logo-White-EN.png`
- **No database, no API routes, no authentication**

## Page Design

- Full-viewport white (`#FFFFFF`) background
- Logo centered horizontally and vertically using flexbox
- Logo max-width: `320px`, scales down on smaller screens via `w-full max-w-xs`
- Logo is the white version (`TBE-Logo-White-EN.png`); made visible against the white background using a CSS `drop-shadow` filter in cyan (`#2EAEE0`) at 20px blur
- No other content on the page

### CSS drop-shadow value

```css
filter: drop-shadow(0 0 20px #2EAEE0);
```

## File Structure

```
Website/
├── app/
│   ├── layout.tsx        # Root layout with metadata and global styles
│   ├── page.tsx          # Single splash page
│   └── globals.css       # Tailwind directives
├── public/
│   └── TBE-Logo-White-EN.png   # Copied from Marketing/Logo White/
├── tailwind.config.ts
├── postcss.config.js
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Logo Source

Original file location: `../Logo White/TBE-Logo-White-EN.png`
Deployed location: `public/TBE-Logo-White-EN.png`

## Vercel Deployment

No `vercel.json` required. Next.js projects are auto-detected by Vercel. Deploy by connecting the repository or running `vercel` from the project root.

## Out of Scope

- Additional pages or navigation
- CMS or dynamic content
- Authentication
- Analytics
