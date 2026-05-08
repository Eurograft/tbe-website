# Homepage Visual Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply 4 sequential visual improvements to the Eurograft homepage without changing content, colours, routing, or the Nav/Footer.

**Architecture:** All changes are confined to `app/page.tsx` (data arrays + JSX) and `app/page.test.tsx` (new section tests). No new files, no new components, no dependency installs.

**Tech Stack:** Next.js 14 App Router, React 18, Tailwind CSS 3, Jest + React Testing Library, inline SVGs (lucide-react not installed).

---

## File Map

| File | Change type | What changes |
|---|---|---|
| `app/page.tsx` | Modify | All 4 improvements: padding, new data arrays, new JSX sections, icon fields |
| `app/page.test.tsx` | Modify | Add tests for trust bar (Improvement 3) and stats section (Improvement 4) |

---

## Task 1: Fix white gaps — reduce padding on bg-white sections

**Files:**
- Modify: `app/page.tsx` (lines 171, 218)

- [ ] **Step 1: Change Why Eurograft section padding**

In `app/page.tsx` line 171, change:
```tsx
<section className="bg-white py-20">
```
to:
```tsx
<section className="bg-white py-14">
```

- [ ] **Step 2: Change Quality & Compliance section padding**

In `app/page.tsx` line 218, change:
```tsx
<section className="bg-white py-20">
```
to:
```tsx
<section className="bg-white py-14">
```

- [ ] **Step 3: Run existing tests to confirm nothing broke**

```bash
npx jest app/page.test.tsx --no-coverage
```

Expected: all tests pass. These tests check text content and form behaviour — padding class changes do not affect them.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "fix: reduce padding on bg-white sections to eliminate white gaps"
```

---

## Task 2: Add icons to product cards

**Files:**
- Modify: `app/page.tsx` (lines 7, 52–57, ~201–214)

- [ ] **Step 1: Update the ProductCard type** (line 7)

Change:
```tsx
type ProductCard = { title: string; desc: string }
```
to:
```tsx
type ProductCard = { title: string; desc: string; icon: React.ReactElement }
```

- [ ] **Step 2: Replace the productCards array** (lines 52–57) with icon-bearing entries

Replace the entire `productCards` array with:
```tsx
const productCards: ProductCard[] = [
  {
    title: 'Cortical Bone Grafts',
    desc: 'Structural support for load-bearing defects.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <rect x="3" y="16" width="18" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Cancellous Grafts',
    desc: 'Osteoconductive filler for voids and cavities.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <circle cx="4.5" cy="4.5" r="1.8" />
        <circle cx="12" cy="4.5" r="1.8" />
        <circle cx="19.5" cy="4.5" r="1.8" />
        <circle cx="4.5" cy="12" r="1.8" />
        <circle cx="12" cy="12" r="1.8" />
        <circle cx="19.5" cy="12" r="1.8" />
        <circle cx="4.5" cy="19.5" r="1.8" />
        <circle cx="12" cy="19.5" r="1.8" />
        <circle cx="19.5" cy="19.5" r="1.8" />
      </svg>
    ),
  },
  {
    title: 'Demineralised Bone Matrix (DBM)',
    desc: 'Osteoinductive putty, gel, and sheet formats.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="12" cy="12" r="2.5" />
        <circle cx="4.5" cy="6.5" r="1.5" />
        <circle cx="19.5" cy="6.5" r="1.5" />
        <circle cx="4.5" cy="17.5" r="1.5" />
        <circle cx="19.5" cy="17.5" r="1.5" />
        <line x1="6.2" y1="7.8" x2="10.1" y2="10.5" strokeLinecap="round" />
        <line x1="17.8" y1="7.8" x2="13.9" y2="10.5" strokeLinecap="round" />
        <line x1="6.2" y1="16.2" x2="10.1" y2="13.5" strokeLinecap="round" />
        <line x1="17.8" y1="16.2" x2="13.9" y2="13.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Soft Tissue Allografts',
    desc: 'Tendon and membrane grafts for reconstruction.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path strokeLinecap="round" d="M2 8c2.5-4 5-4 7.5 0s5 4 7.5 0 5-4 7.5 0" />
        <path strokeLinecap="round" d="M2 14c2.5-4 5-4 7.5 0s5 4 7.5 0 5-4 7.5 0" />
      </svg>
    ),
  },
]
```

- [ ] **Step 3: Render the icon in the product card JSX**

Find the product card Link element (~line 201). The current inner JSX is:
```tsx
<Link
  key={card.title}
  href="/products"
  className="bg-white rounded-lg p-6 border border-divider hover:shadow-md transition block"
>
  <h3 className="font-semibold text-dark-slate mb-2">{card.title}</h3>
  <p className="text-sm text-body-text/70 mb-2">{card.desc}</p>
  <span className="text-brand-cyan text-sm">View Products →</span>
</Link>
```

Replace with:
```tsx
<Link
  key={card.title}
  href="/products"
  className="bg-white rounded-lg p-6 border border-divider hover:shadow-md transition block"
>
  <div className="text-brand-cyan mb-4">{card.icon}</div>
  <h3 className="font-semibold text-dark-slate mb-2">{card.title}</h3>
  <p className="text-sm text-body-text/70 mb-2">{card.desc}</p>
  <span className="text-brand-cyan text-sm">View Products →</span>
</Link>
```

- [ ] **Step 4: Run existing tests**

```bash
npx jest app/page.test.tsx --no-coverage
```

Expected: all tests pass. The product card tests check heading text and link `href` — the icon `div` addition does not affect these assertions.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add SVG icons to homepage product cards"
```

---

## Task 3: Add trust/credentials bar

**Files:**
- Modify: `app/page.tsx` (add `trustItems` array near top; insert section after Hero JSX)
- Modify: `app/page.test.tsx` (add trust bar describe block)

- [ ] **Step 1: Write the failing test first**

Add this describe block to the end of `app/page.test.tsx` (before the final closing):
```tsx
describe('Trust bar section', () => {
  it('renders EU Licensed trust indicator', () => {
    render(<Page />)
    expect(screen.getByText('EU Licensed Tissue Establishment')).toBeInTheDocument()
  })

  it('renders FDA-Sourced trust indicator', () => {
    render(<Page />)
    expect(screen.getByText('FDA-Sourced Products')).toBeInTheDocument()
  })

  it('renders CE Marked trust indicator', () => {
    render(<Page />)
    expect(screen.getByText('CE Marked Supply Chain')).toBeInTheDocument()
  })

  it('renders European shipping trust indicator', () => {
    render(<Page />)
    expect(screen.getByText('Ships Across 30+ European Countries')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run the tests to verify they fail**

```bash
npx jest app/page.test.tsx --no-coverage
```

Expected: 4 new tests FAIL with "Unable to find an element with the text".

- [ ] **Step 3: Add the trustItems data array to `app/page.tsx`**

Add the following after the `qualityColumns` array (after line ~88, before `europeanCountries`):
```tsx
type TrustItem = { label: string; sub: string; icon: React.ReactElement }

const trustItems: TrustItem[] = [
  {
    label: 'EU Licensed Tissue Establishment',
    sub: 'Directive 2004/23/EC',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 flex-shrink-0">
        <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'FDA-Sourced Products',
    sub: 'AATB-accredited US banks',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 flex-shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    label: 'CE Marked Supply Chain',
    sub: 'EU conformity verified',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 flex-shrink-0">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    label: 'Ships Across 30+ European Countries',
    sub: 'Cold-chain validated logistics',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 flex-shrink-0">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
]
```

- [ ] **Step 4: Insert the trust bar section JSX in `app/page.tsx`**

After the closing `</section>` of the Hero section (after line 168) and before the `{/* ── Why Eurograft ── */}` comment, insert:

```tsx
      {/* ── Trust Bar ── */}
      <section className="bg-[#243347] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <div className="text-brand-cyan mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-white text-sm font-semibold leading-snug">{item.label}</p>
                  <p className="text-white/60 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 5: Run the tests to verify they pass**

```bash
npx jest app/page.test.tsx --no-coverage
```

Expected: all tests including the 4 new trust bar tests pass.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx app/page.test.tsx
git commit -m "feat: add trust/credentials bar between hero and product sections"
```

---

## Task 4: Add stats/credibility section

**Files:**
- Modify: `app/page.tsx` (add `statItems` array; insert section before Contact)
- Modify: `app/page.test.tsx` (add stats section describe block)

- [ ] **Step 1: Write the failing test first**

Add this describe block to the end of `app/page.test.tsx`:
```tsx
describe('Stats / credibility section', () => {
  it('renders Founded stat', () => {
    render(<Page />)
    expect(screen.getByText('Year Founded')).toBeInTheDocument()
  })

  it('renders EU Licensed stat', () => {
    render(<Page />)
    // Uses getAllByText because "EU Licensed" also appears in the trust bar
    const matches = screen.getAllByText('EU Licensed')
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })

  it('renders FDA-Regulated stat label', () => {
    render(<Page />)
    expect(screen.getByText('FDA-Regulated')).toBeInTheDocument()
  })

  it('renders European reach stat label', () => {
    render(<Page />)
    expect(screen.getByText('European Reach')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run the tests to verify they fail**

```bash
npx jest app/page.test.tsx --no-coverage
```

Expected: 3 of the 4 new tests FAIL (the `getAllByText('EU Licensed')` test may pass from the trust bar — that is acceptable). The other 3 should FAIL with "Unable to find an element".

- [ ] **Step 3: Add the statItems data array to `app/page.tsx`**

Add the following after the `trustItems` array (before `europeanCountries`):
```tsx
type StatItem = { value: string; label: string }

const statItems: StatItem[] = [
  { value: '2024', label: 'Year Founded' },
  { value: 'EU Licensed', label: 'Tissue Establishment' },
  { value: 'FDA-Regulated', label: 'Source Facilities' },
  { value: '30+', label: 'European Reach' },
]
```

- [ ] **Step 4: Insert the stats section JSX in `app/page.tsx`**

After the closing `</section>` of the Quality & Compliance section (after the `</section>` that closes `{/* ── Quality & Compliance ── */}`) and before `{/* ── Contact Form ── */}`, insert:

```tsx
      {/* ── Stats / Credibility ── */}
      <section className="bg-dark-slate py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statItems.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl md:text-5xl text-brand-cyan font-bold leading-none">
                  {stat.value}
                </p>
                <p className="mt-3 text-white/70 text-sm uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
```

- [ ] **Step 5: Run all tests**

```bash
npx jest app/page.test.tsx --no-coverage
```

Expected: all tests pass.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx app/page.test.tsx
git commit -m "feat: add stats/credibility section before contact form"
```

---

## Final verification

- [ ] **Run full test suite**

```bash
npx jest --no-coverage
```

Expected: all tests in `app/page.test.tsx`, `app/layout.test.tsx`, and `components/*.test.tsx` pass.

- [ ] **Start dev server and visually verify each section**

```bash
npm run dev
```

Open `http://localhost:3000` and check:
1. No large white gaps between hero → trust bar → Why Eurograft → Products → Quality → Stats → Contact
2. Each product card shows its SVG icon in cyan above the title
3. Trust bar is a slim dark band with 4 items and icons
4. Stats section shows 4 bold numbers/values before the contact form
5. Nav and Footer are unchanged
6. Contact form submits and shows success/error messages correctly
