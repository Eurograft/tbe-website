# Eurograft Phase 1 — Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish brand tokens, Google Fonts, sticky Nav, Footer, empty page stubs, and a Privacy Policy placeholder — the complete shell that all subsequent phases build on.

**Architecture:** Tailwind config extended with brand colors and font families. DM Sans + DM Serif Display loaded via `next/font/google` and exposed as CSS variables. Nav and Footer are standalone React components imported into the root layout. All 5 routes exist as stubs so nav links resolve correctly.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, next/font/google, next/image, next/link

---

## File Map

| Path | Action | Responsibility |
|---|---|---|
| `tailwind.config.ts` | Modify | Brand color tokens + font family config |
| `app/globals.css` | Modify | Base body color, font variable application |
| `app/layout.tsx` | Modify | Load fonts, wrap children in Nav + Footer, base metadata |
| `app/page.tsx` | Modify | Home stub (replaces splash page) |
| `app/about/page.tsx` | Create | About stub |
| `app/products/page.tsx` | Create | Products stub |
| `app/contact/page.tsx` | Create | Contact stub |
| `app/privacy/page.tsx` | Create | Privacy Policy placeholder |
| `components/Nav.tsx` | Create | Sticky nav with logo, links, CTA, mobile hamburger |
| `components/Footer.tsx` | Create | Full footer with logo, tagline, links, contact info |
| `app/layout.test.tsx` | Create | Tests: Nav + Footer render on root layout |
| `components/Nav.test.tsx` | Create | Tests: nav links, CTA, mobile menu |
| `components/Footer.test.tsx` | Create | Tests: footer links, contact info, no email |

---

### Task 1: Update Tailwind config with brand tokens

**Files:**
- Modify: `tailwind.config.ts`

- [ ] **Step 1: Write the failing test**

Create `tailwind.config.test.ts`:

```ts
import config from './tailwind.config'

describe('Tailwind brand tokens', () => {
  const colors = config.theme?.extend?.colors as Record<string, string>
  const fonts = config.theme?.extend?.fontFamily as Record<string, string[]>

  it('has brand-cyan color', () => {
    expect(colors['brand-cyan']).toBe('#2EAEE0')
  })

  it('has dark-slate color', () => {
    expect(colors['dark-slate']).toBe('#293241')
  })

  it('has body-text color', () => {
    expect(colors['body-text']).toBe('#3A3A3A')
  })

  it('has light-tint color', () => {
    expect(colors['light-tint']).toBe('#E8F6FC')
  })

  it('has divider color', () => {
    expect(colors['divider']).toBe('#E0E0E0')
  })

  it('has sans font family', () => {
    expect(fonts['sans']).toContain('var(--font-dm-sans)')
  })

  it('has serif font family', () => {
    expect(fonts['serif']).toContain('var(--font-dm-serif)')
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest tailwind.config.test.ts
```

Expected: FAIL — colors not found on current config.

- [ ] **Step 3: Replace tailwind.config.ts**

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 4: Run test to confirm it passes**

```bash
npx jest tailwind.config.test.ts
```

Expected: PASS — 7 tests passing.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts tailwind.config.test.ts
git commit -m "feat: add brand color and font tokens to Tailwind config"
```

---

### Task 2: Load Google Fonts and update root layout

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Write the failing test**

Create `app/layout.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import RootLayout from './layout'

describe('RootLayout', () => {
  it('renders children', () => {
    render(
      <RootLayout>
        <div data-testid="child">hello</div>
      </RootLayout>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test to confirm it fails**

```bash
npx jest app/layout.test.tsx
```

Expected: FAIL — layout imports Nav and Footer which don't exist yet. This is expected — we'll make it pass after creating Nav and Footer in Tasks 3–4.

- [ ] **Step 3: Update app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  background-color: #ffffff;
  color: #3A3A3A;
  margin: 0;
  padding: 0;
}
```

- [ ] **Step 4: Update app/layout.tsx**

```tsx
import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Eurograft Tissue Bank',
  description: 'EU-licensed distributor of FDA-sourced bone allografts, ACL allografts, tendon grafts and soft tissue allografts. Serving hospitals and surgical centres across Europe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 5: Commit globals.css (layout commit deferred until Nav/Footer exist)**

```bash
git add app/globals.css
git commit -m "feat: update globals with brand body color"
```

---

### Task 3: Create Nav component

**Files:**
- Create: `components/Nav.tsx`
- Create: `components/Nav.test.tsx`

- [ ] **Step 1: Write the failing tests**

Create `components/Nav.test.tsx`:

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Nav from './Nav'

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Nav', () => {
  it('renders the logo image', () => {
    render(<Nav />)
    const logo = screen.getByRole('img', { name: /eurograft logo/i })
    expect(logo).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /products/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the Request Information CTA button', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: /request information/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Nav />)
    const hamburger = screen.getByRole('button', { name: /toggle menu/i })
    expect(screen.queryByTestId('mobile-menu')).not.toBeVisible()
    fireEvent.click(hamburger)
    expect(screen.getByTestId('mobile-menu')).toBeVisible()
  })
})
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
npx jest components/Nav.test.tsx
```

Expected: FAIL — `Cannot find module './Nav'`.

- [ ] **Step 3: Create components/Nav.tsx**

First create the `components/` directory:

```bash
mkdir -p components
```

Then create `components/Nav.tsx`:

```tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-dark-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/TBE-Logo-White-EN.png"
              alt="Eurograft logo"
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-brand-cyan'
                    : 'text-white hover:text-brand-cyan'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 text-sm font-medium bg-brand-cyan text-white rounded hover:bg-opacity-90 transition-colors"
            >
              Request Information
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        data-testid="mobile-menu"
        className={`md:hidden bg-dark-slate border-t border-white/10 ${menuOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-brand-cyan text-sm font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-4 py-2 text-sm font-medium bg-brand-cyan text-white rounded text-center"
            onClick={() => setMenuOpen(false)}
          >
            Request Information
          </Link>
        </div>
      </div>
    </nav>
  )
}
```

- [ ] **Step 4: Run tests to confirm they pass**

```bash
npx jest components/Nav.test.tsx
```

Expected: PASS — 4 tests passing.

- [ ] **Step 5: Commit**

```bash
git add components/Nav.tsx components/Nav.test.tsx
git commit -m "feat: add sticky Nav component with mobile hamburger menu"
```

---

### Task 4: Create Footer component

**Files:**
- Create: `components/Footer.tsx`
- Create: `components/Footer.test.tsx`

- [ ] **Step 1: Write the failing tests**

Create `components/Footer.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByRole('img', { name: /eurograft logo/i })).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/advancing surgery through trusted allografts/i)).toBeInTheDocument()
  })

  it('renders all nav links including Privacy Policy', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /products/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /privacy policy/i })).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Footer />)
    expect(screen.getByText(/\+359 877 06 3134/i)).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<Footer />)
    expect(screen.getByText(/asenovgrad/i)).toBeInTheDocument()
  })

  it('does NOT render an email address', () => {
    render(<Footer />)
    expect(screen.queryByText(/@/)).not.toBeInTheDocument()
  })

  it('renders copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/eurograft tissue bank ltd/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests to confirm they fail**

```bash
npx jest components/Footer.test.tsx
```

Expected: FAIL — `Cannot find module './Footer'`.

- [ ] **Step 3: Create components/Footer.tsx**

```tsx
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + tagline */}
          <div>
            <Link href="/">
              <Image
                src="/TBE-Logo-White-EN.png"
                alt="Eurograft logo"
                width={140}
                height={35}
                className="h-8 w-auto mb-3"
              />
            </Link>
            <p className="text-sm text-white/70 mt-2">
              Advancing surgery through trusted allografts
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-brand-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Contact
            </h3>
            <p className="text-sm text-white/80">+359 877 06 3134</p>
            <p className="text-sm text-white/80 mt-2">
              St. Industrialna 2A, Floor 1, Office 9,<br />
              Asenovgrad 4230, Bulgaria
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40 text-center">
            Est. 2024 · Eurograft Tissue Bank Ltd. · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Run tests to confirm they pass**

```bash
npx jest components/Footer.test.tsx
```

Expected: PASS — 7 tests passing.

- [ ] **Step 5: Commit**

```bash
git add components/Footer.tsx components/Footer.test.tsx
git commit -m "feat: add Footer component with logo, links, and contact info"
```

---

### Task 5: Update root layout and run layout tests

**Files:**
- Modify: `app/layout.tsx` (already written in Task 2 Step 4 — now apply it)
- Test: `app/layout.test.tsx` (written in Task 2 Step 1)

- [ ] **Step 1: Apply the layout.tsx from Task 2**

Write `app/layout.tsx` exactly as specified in Task 2, Step 4. (Nav and Footer now exist so the import will resolve.)

- [ ] **Step 2: Run the layout test**

```bash
npx jest app/layout.test.tsx
```

Expected: PASS — 1 test passing.

- [ ] **Step 3: Run all tests to confirm nothing broke**

```bash
npx jest
```

Expected: All tests pass (layout, Nav, Footer, page, tailwind config).

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/layout.test.tsx tailwind.config.test.ts
git commit -m "feat: wire Nav and Footer into root layout with Google Fonts"
```

---

### Task 6: Create page stubs and Privacy Policy

**Files:**
- Modify: `app/page.tsx`
- Create: `app/about/page.tsx`
- Create: `app/products/page.tsx`
- Create: `app/contact/page.tsx`
- Create: `app/privacy/page.tsx`

- [ ] **Step 1: Update app/page.tsx (Home stub) and fix its test**

Replace `app/page.tsx`:

```tsx
export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-body-text text-lg">Home page — coming in Phase 2</p>
    </main>
  )
}
```

Replace `app/page.test.tsx` (the existing test checks for the old logo splash — update it to match the new stub):

```tsx
import { render, screen } from '@testing-library/react'
import Page from './page'

describe('Home page stub', () => {
  it('renders the home placeholder', () => {
    render(<Page />)
    expect(screen.getByText(/home page/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Create app/about/page.tsx**

```bash
mkdir -p app/about
```

```tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-body-text text-lg">About page — coming in Phase 3</p>
    </main>
  )
}
```

- [ ] **Step 3: Create app/products/page.tsx**

```bash
mkdir -p app/products
```

```tsx
export default function ProductsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-body-text text-lg">Products page — coming in Phase 3</p>
    </main>
  )
}
```

- [ ] **Step 4: Create app/contact/page.tsx**

```bash
mkdir -p app/contact
```

```tsx
export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-body-text text-lg">Contact page — coming in Phase 3</p>
    </main>
  )
}
```

- [ ] **Step 5: Create app/privacy/page.tsx**

```bash
mkdir -p app/privacy
```

```tsx
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Eurograft Tissue Bank',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-4 py-20">
      <h1 className="font-serif text-3xl text-body-text mb-6">Privacy Policy</h1>
      <p className="text-body-text">
        This privacy policy will be updated shortly. For any questions regarding
        your data or privacy, please contact us directly at{' '}
        <span className="font-medium">+359 877 06 3134</span>.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 text-brand-cyan hover:underline text-sm"
      >
        ← Back to Home
      </Link>
    </main>
  )
}
```

- [ ] **Step 6: Run all tests**

```bash
npx jest
```

Expected: All tests pass.

- [ ] **Step 7: Verify dev server renders nav/footer on all routes**

```bash
npm run dev
```

Open each route and confirm Nav and Footer appear:
- `http://localhost:3000/`
- `http://localhost:3000/about`
- `http://localhost:3000/products`
- `http://localhost:3000/contact`
- `http://localhost:3000/privacy`

Also verify mobile hamburger works at 375px width.

- [ ] **Step 8: Commit**

```bash
git add app/page.tsx app/about/page.tsx app/products/page.tsx app/contact/page.tsx app/privacy/page.tsx
git commit -m "feat: add page stubs and privacy policy placeholder"
```

---

### Task 7: Push to GitHub and verify Vercel deployment

**Files:** none

- [ ] **Step 1: Run full test suite**

```bash
npx jest
```

Expected: All tests pass.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: `✓ Compiled successfully` with routes listed for /, /about, /products, /contact, /privacy.

- [ ] **Step 3: Push to both branches**

```bash
git push origin master
git push origin master:main --force
```

Expected: Both pushes succeed.

- [ ] **Step 4: Verify Vercel deployment**

Vercel auto-deploys on push to `main`. Wait ~1 minute, then confirm at `https://www.eurograft-tb.com` that:
- Nav appears at top (dark slate, logo, links, CTA button)
- Footer appears at bottom
- Home stub text visible
- No console errors
