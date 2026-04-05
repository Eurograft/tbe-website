# Phase 3 — Inner Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the About, Products, and Contact pages, plus a shared ContactForm component used by the last two.

**Architecture:** `components/ContactForm.tsx` is a `'use client'` component with the Formspree form logic (including `try/catch` for network errors). The three page files are server components that import it. Products and Contact pages mock ContactForm in tests so their tests don't depend on form internals. Home page (`app/page.tsx`) is NOT touched — it has its own inline form.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Jest + React Testing Library, Formspree (`https://formspree.io/f/xbdpqjvd`)

---

## File Map

| Path | Action |
|---|---|
| `components/ContactForm.tsx` | Create — shared 'use client' form |
| `components/ContactForm.test.tsx` | Create — form unit tests |
| `app/about/page.tsx` | Modify — full About page |
| `app/about/page.test.tsx` | Create — About page tests |
| `app/products/page.tsx` | Modify — full Products page |
| `app/products/page.test.tsx` | Create — Products page tests |
| `app/contact/page.tsx` | Modify — full Contact page |
| `app/contact/page.test.tsx` | Create — Contact page tests |

---

### Task 1: ContactForm component

**Files:**
- Create: `components/ContactForm.tsx`
- Create: `components/ContactForm.test.tsx`

- [ ] **Step 1: Write failing tests**

Create `components/ContactForm.test.tsx`:

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from './ContactForm'

afterEach(() => {
  jest.restoreAllMocks()
})

describe('ContactForm', () => {
  it('renders all 7 form fields', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText('Name *')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email *')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Organisation')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    const selects = screen.getAllByRole('combobox')
    expect(selects).toHaveLength(2)
  })

  it('renders the submit button', () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument()
  })

  it('shows success message after successful submission', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: true } as Response)
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Name *'), { target: { value: 'Dr. Test' } })
    fireEvent.change(screen.getByPlaceholderText('Email *'), { target: { value: 'test@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => {
      expect(screen.getByText(/thank you — we'll be in touch shortly/i)).toBeInTheDocument()
    })
  })

  it('shows error message when submission returns non-200', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({ ok: false } as Response)
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Name *'), { target: { value: 'Dr. Test' } })
    fireEvent.change(screen.getByPlaceholderText('Email *'), { target: { value: 'test@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })

  it('shows error message on network failure', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Network error'))
    render(<ContactForm />)
    fireEvent.change(screen.getByPlaceholderText('Name *'), { target: { value: 'Dr. Test' } })
    fireEvent.change(screen.getByPlaceholderText('Email *'), { target: { value: 'test@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: /send request/i }))
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()
    })
  })
})
```

- [ ] **Step 2: Run tests — expect FAIL**

```bash
PATH="/c/Program Files/nodejs:$PATH" npx jest --testPathPattern=components/ContactForm.test.tsx --no-coverage 2>&1 | tail -15
```

Expected: FAIL — `Cannot find module './ContactForm'`

- [ ] **Step 3: Create `components/ContactForm.tsx`**

```tsx
'use client'

import { useState } from 'react'

const europeanCountries: string[] = [
  'Albania', 'Andorra', 'Austria', 'Belarus', 'Belgium', 'Bosnia & Herzegovina',
  'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia',
  'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland',
  'Italy', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg',
  'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'North Macedonia',
  'Norway', 'Poland', 'Portugal', 'Romania', 'San Marino', 'Serbia', 'Slovakia',
  'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine',
  'United Kingdom', 'Vatican City',
]

const areasOfInterest: string[] = [
  'Cortical Bone Grafts',
  'Cancellous Grafts',
  'Demineralised Bone Matrix (DBM)',
  'Soft Tissue Allografts',
  'General Enquiry',
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(false)
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget).entries())
      const res = await fetch('https://formspree.io/f/xbdpqjvd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    }
  }

  if (submitted) {
    return (
      <p className="text-white text-lg">Thank you — we&apos;ll be in touch shortly.</p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Name *"
        required
        className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded px-3 py-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email *"
        required
        className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded px-3 py-2 w-full"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded px-3 py-2 w-full"
      />
      <input
        type="text"
        name="organisation"
        placeholder="Organisation"
        className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded px-3 py-2 w-full"
      />
      <select
        name="country"
        defaultValue=""
        className="bg-white/10 border border-white/20 text-white rounded px-3 py-2 w-full"
      >
        <option value="" disabled>Country</option>
        {europeanCountries.map((c) => (
          <option key={c} value={c} className="text-dark-slate bg-white">{c}</option>
        ))}
      </select>
      <select
        name="area"
        defaultValue=""
        className="bg-white/10 border border-white/20 text-white rounded px-3 py-2 w-full"
      >
        <option value="" disabled>Area of Interest</option>
        {areasOfInterest.map((a) => (
          <option key={a} value={a} className="text-dark-slate bg-white">{a}</option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded px-3 py-2 w-full"
      />
      {submitError && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        className="bg-brand-cyan text-white px-6 py-2 rounded font-semibold hover:opacity-90 self-start"
      >
        Send Request
      </button>
    </form>
  )
}
```

- [ ] **Step 4: Run tests — expect PASS**

```bash
PATH="/c/Program Files/nodejs:$PATH" npx jest --testPathPattern=components/ContactForm.test.tsx --no-coverage 2>&1 | tail -15
```

Expected:
```
PASS  components/ContactForm.test.tsx
  ContactForm
    ✓ renders all 7 form fields
    ✓ renders the submit button
    ✓ shows success message after successful submission
    ✓ shows error message when submission returns non-200
    ✓ shows error message on network failure
```

- [ ] **Step 5: Commit**

```bash
cd "C:/Users/bsavo/OneDrive - Тъканна Банка Еурографт ЕООД/Marketing/Website" && git add components/ContactForm.tsx components/ContactForm.test.tsx && git commit -m "feat: add shared ContactForm component"
```

---

### Task 2: About page

**Files:**
- Create: `app/about/page.test.tsx`
- Modify: `app/about/page.tsx`

- [ ] **Step 1: Write failing tests**

Create `app/about/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import AboutPage from './page'

describe('About page', () => {
  it('renders the main heading', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'About Eurograft Tissue Bank'
    )
  })

  it('renders the Who We Are section heading', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { level: 2, name: /who we are/i })
    ).toBeInTheDocument()
  })

  it('renders the mission quote', () => {
    render(<AboutPage />)
    expect(screen.getByText(/focus on what matters most/i)).toBeInTheDocument()
  })

  it('renders the Regulatory Standing section heading', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { level: 2, name: /regulatory standing/i })
    ).toBeInTheDocument()
  })

  it('renders all 3 compliance column headings', () => {
    render(<AboutPage />)
    expect(
      screen.getByRole('heading', { level: 3, name: /eu directive 2015\/566/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /bulgarian eamo licensed/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /full traceability/i })
    ).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests — expect FAIL**

```bash
PATH="/c/Program Files/nodejs:$PATH" npx jest --testPathPattern=app/about/page.test.tsx --no-coverage 2>&1 | tail -15
```

Expected: FAIL — tests cannot find the expected headings in the stub page.

- [ ] **Step 3: Replace `app/about/page.tsx` with full implementation**

```tsx
export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-dark-slate min-h-[40vh] flex items-end pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            About Eurograft Tissue Bank
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            EU-licensed · FDA-sourced · Asenovgrad, Bulgaria
          </p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-dark-slate mb-8">Who We Are</h2>
          <div className="max-w-3xl space-y-6 text-body-text leading-relaxed">
            <p>
              Eurograft Tissue Bank is an EU-licensed tissue establishment based in Asenovgrad,
              Bulgaria, specialising in the storage, distribution, and supply of human allograft
              tissue and cellular products for surgical use across Europe. Founded in 2024,
              Eurograft was established to bridge the gap between world-class American allograft
              technology and the growing demand for high-quality, reliably sourced human tissue
              products across European healthcare facilities.
            </p>
            <p>
              We work exclusively with FDA-registered, AATB-accredited tissue banks in the United
              States — ensuring every product we distribute meets the most rigorous standards of
              donor screening, processing, and sterilization available anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Mission ── */}
      <section className="bg-light-tint py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-6">
            Our Mission
          </p>
          <blockquote className="font-serif text-3xl md:text-4xl text-dark-slate leading-snug max-w-4xl mx-auto">
            Our mission is simple: to give European surgeons and healthcare facilities reliable,
            fast access to the highest quality human allograft products — so they can focus on
            what matters most: their patients.
          </blockquote>
        </div>
      </section>

      {/* ── Regulatory Standing ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-dark-slate mb-6">Regulatory Standing</h2>
          <p className="text-body-text max-w-3xl mb-12 leading-relaxed">
            Eurograft Tissue Bank is fully licensed by the Bulgarian Executive Agency for Medical
            Oversight and operates in full compliance with EU Directive 2015/566 on human tissues
            and cells. Our operations are subject to regular inspection and oversight, ensuring
            full traceability and compliance at every step of the supply chain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-brand-cyan mb-4">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-slate text-lg mb-2">EU Directive 2015/566</h3>
              <p className="text-body-text/80 text-sm leading-relaxed">
                Full compliance with EU regulations on human tissues and cells.
              </p>
            </div>
            <div>
              <div className="text-brand-cyan mb-4">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-slate text-lg mb-2">Bulgarian EAMO Licensed</h3>
              <p className="text-body-text/80 text-sm leading-relaxed">
                Licenced and regularly inspected by the Bulgarian Executive Agency for Medical Oversight.
              </p>
            </div>
            <div>
              <div className="text-brand-cyan mb-4">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-slate text-lg mb-2">Full Traceability</h3>
              <p className="text-body-text/80 text-sm leading-relaxed">
                Complete chain of custody from donor bank to surgical team, documented at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 4: Run tests — expect PASS**

```bash
PATH="/c/Program Files/nodejs:$PATH" npx jest --testPathPattern=app/about/page.test.tsx --no-coverage 2>&1 | tail -15
```

Expected:
```
PASS  app/about/page.test.tsx
  About page
    ✓ renders the main heading
    ✓ renders the Who We Are section heading
    ✓ renders the mission quote
    ✓ renders the Regulatory Standing section heading
    ✓ renders all 3 compliance column headings
```

- [ ] **Step 5: Commit**

```bash
cd "C:/Users/bsavo/OneDrive - Тъканна Банка Еурографт ЕООД/Marketing/Website" && git add app/about/page.tsx app/about/page.test.tsx && git commit -m "feat: add About page"
```

---

### Task 3: Products page

**Files:**
- Create: `app/products/page.test.tsx`
- Modify: `app/products/page.tsx`

- [ ] **Step 1: Write failing tests**

Create `app/products/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import ProductsPage from './page'

jest.mock('@/components/ContactForm', () => ({
  __esModule: true,
  default: () => <button type="submit">Send Request</button>,
}))

describe('Products page', () => {
  it('renders the main heading', () => {
    render(<ProductsPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Our Allograft Portfolio'
    )
  })

  it('renders all 4 category headings', () => {
    render(<ProductsPage />)
    expect(
      screen.getByRole('heading', { level: 2, name: /sports medicine/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /bone allografts/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /spine allografts/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /wound care/i })
    ).toBeInTheDocument()
  })

  it('renders spot-check products from each category', () => {
    render(<ProductsPage />)
    expect(
      screen.getByRole('heading', { level: 3, name: 'Achilles Tendon Allograft' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Cortical Bone Allograft' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Cervical Spacers' })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Acellular Dermal Matrix' })
    ).toBeInTheDocument()
  })

  it('renders the inquiry form (ContactForm)', () => {
    render(<ProductsPage />)
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests — expect FAIL**

```bash
PATH="/c/Program Files/nodejs:$PATH" npx jest --testPathPattern=app/products/page.test.tsx --no-coverage 2>&1 | tail -15
```

Expected: FAIL — stub page has no real headings or products.

- [ ] **Step 3: Replace `app/products/page.tsx` with full implementation**

```tsx
import ContactForm from '@/components/ContactForm'

type Product = { name: string; desc: string }
type Category = { title: string; desc: string; products: Product[]; bg: string }

const categories: Category[] = [
  {
    title: 'Sports Medicine & ACL Allografts',
    bg: 'bg-white',
    desc: 'Human tendon and soft tissue allografts for ligament reconstruction and joint restoration surgery. Our sports medicine portfolio includes grafts for ACL reconstruction, PCL reconstruction, meniscus transplantation, and multi-ligament procedures.',
    products: [
      { name: 'Achilles Tendon Allograft', desc: 'For ACL and multi-ligament reconstruction' },
      { name: 'Patellar Ligament Allograft', desc: '10mm and split (hemi) options available' },
      { name: 'Semitendinosus Allograft', desc: 'Hamstring graft for ACL reconstruction' },
      { name: 'Gracilis Allograft', desc: 'Slender hamstring tendon for ligament repair' },
      { name: 'Tibialis Tendon Allograft', desc: 'Anterior and posterior, multiple diameters' },
      { name: 'Peroneus Longus Allograft', desc: 'Small and large diameter options' },
      { name: 'Meniscus Allograft', desc: 'For meniscus transplantation procedures' },
      { name: 'Osteochondral Allograft (OCA)', desc: 'For cartilage restoration and joint surface repair' },
    ],
  },
  {
    title: 'Bone Allografts',
    bg: 'bg-light-tint',
    desc: 'Cortical and cancellous bone grafts for orthopedic, trauma, and reconstructive procedures. Available in multiple forms and sizes to match specific surgical requirements.',
    products: [
      { name: 'Cortical Bone Allograft', desc: 'Structural support for load-bearing applications' },
      { name: 'Cancellous Bone Allograft', desc: 'Highly porous graft for bone void filling' },
      { name: 'Demineralized Bone Matrix (DBM)', desc: 'Osteoinductive matrix for bone regeneration' },
      { name: 'Demineralized Cortical Fiber Matrix', desc: 'Enhanced handling with growth factor preservation' },
      { name: 'Structural Bone Grafts', desc: 'Precision-machined for specific anatomical applications' },
      { name: 'Bone Void Fillers', desc: 'Cancellous chips and particulate for cavity filling' },
    ],
  },
  {
    title: 'Spine Allografts',
    bg: 'bg-white',
    desc: 'Precision bone grafts and biological matrices for spinal fusion, disc replacement support, and vertebral reconstruction procedures.',
    products: [
      { name: 'Cervical Spacers', desc: 'Cortical bone spacers for anterior cervical fusion' },
      { name: 'Lumbar Spacers', desc: 'Structural grafts for posterior and anterior lumbar fusion' },
      { name: 'Cortical Dowels', desc: 'Cylindrical grafts for interbody fusion procedures' },
      { name: 'Demineralized Bone Matrix for Spine', desc: 'Osteoinductive support for fusion' },
      { name: 'Cancellous Chips', desc: 'Loose graft material for posterolateral fusion' },
    ],
  },
  {
    title: 'Wound Care & Soft Tissue',
    bg: 'bg-light-tint',
    desc: 'Biological allografts for wound closure, reconstructive surgery, and soft tissue reinforcement — including acellular dermal matrices and placental membrane products.',
    products: [
      { name: 'Acellular Dermal Matrix', desc: 'Collagen scaffold for tissue reconstruction and wound closure' },
      { name: 'Placental Membrane Allograft', desc: 'Growth factor-rich barrier for chronic wound care' },
      { name: 'Acellular Dermis for Sports Medicine', desc: 'Reinforcement of tendon, ligament, and rotator cuff' },
      { name: 'Soft Tissue Allografts for Rotator Cuff', desc: 'Biological support for rotator cuff repair' },
    ],
  },
]

export default function ProductsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-dark-slate min-h-[40vh] flex items-end pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Our Allograft Portfolio
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl leading-relaxed">
            Eurograft distributes a comprehensive range of human allograft products sourced
            exclusively from FDA-registered, AATB-accredited tissue banks in the United States.
            Our portfolio covers the full spectrum of surgical needs — from ACL reconstruction and
            meniscus transplantation to spinal fusion and wound care. All products are available
            for delivery to healthcare facilities across Europe. To inquire about specific
            products, availability, or pricing — use the form below or call us directly.
          </p>
        </div>
      </section>

      {/* ── Categories ── */}
      {categories.map((cat) => (
        <section key={cat.title} className={`${cat.bg} py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-dark-slate mb-4">{cat.title}</h2>
            <p className="text-body-text max-w-3xl mb-10 leading-relaxed">{cat.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.products.map((p) => (
                <div key={p.name} className="border border-divider rounded-lg p-4 bg-white">
                  <h3 className="font-semibold text-dark-slate mb-1">{p.name}</h3>
                  <p className="text-sm text-body-text/70">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Inquiry Form ── */}
      <section className="bg-dark-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-12">
            <div className="mb-10 md:mb-0">
              <h2 className="font-serif text-3xl text-white mb-4">Request Information</h2>
              <p className="text-white/70">
                To inquire about specific products, availability, or pricing — complete the form
                below or call us at +359 877 06 3134.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 4: Run tests — expect PASS**

```bash
PATH="/c/Program Files/nodejs:$PATH" npx jest --testPathPattern=app/products/page.test.tsx --no-coverage 2>&1 | tail -15
```

Expected:
```
PASS  app/products/page.test.tsx
  Products page
    ✓ renders the main heading
    ✓ renders all 4 category headings
    ✓ renders spot-check products from each category
    ✓ renders the inquiry form (ContactForm)
```

- [ ] **Step 5: Commit**

```bash
cd "C:/Users/bsavo/OneDrive - Тъканна Банка Еурографт ЕООД/Marketing/Website" && git add app/products/page.tsx app/products/page.test.tsx && git commit -m "feat: add Products page"
```

---

### Task 4: Contact page

**Files:**
- Create: `app/contact/page.test.tsx`
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Write failing tests**

Create `app/contact/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import ContactPage from './page'

jest.mock('@/components/ContactForm', () => ({
  __esModule: true,
  default: () => <button type="submit">Send Request</button>,
}))

describe('Contact page', () => {
  it('renders the main heading', () => {
    render(<ContactPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Contact Us')
  })

  it('renders the Get in Touch heading', () => {
    render(<ContactPage />)
    expect(
      screen.getByRole('heading', { level: 2, name: /get in touch/i })
    ).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<ContactPage />)
    expect(screen.getByText('+359 877 06 3134')).toBeInTheDocument()
  })

  it('renders the address', () => {
    render(<ContactPage />)
    expect(screen.getByText(/asenovgrad/i)).toBeInTheDocument()
  })

  it('renders the ContactForm', () => {
    render(<ContactPage />)
    expect(screen.getByRole('button', { name: /send request/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run tests — expect FAIL**

```bash
PATH="/c/Program Files/nodejs:$PATH" npx jest --testPathPattern=app/contact/page.test.tsx --no-coverage 2>&1 | tail -15
```

Expected: FAIL — stub page has no real content.

- [ ] **Step 3: Replace `app/contact/page.tsx` with full implementation**

```tsx
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-dark-slate min-h-[40vh] flex items-end pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            We respond to all enquiries within one business day.
          </p>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-12">
            {/* Contact details */}
            <div className="mb-10 md:mb-0">
              <h2 className="font-serif text-3xl text-dark-slate mb-8">Get in Touch</h2>
              <div className="space-y-6 text-body-text">
                <div>
                  <p className="text-sm font-semibold text-dark-slate uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a href="tel:+359877063134" className="text-brand-cyan hover:underline text-lg">
                    +359 877 06 3134
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-slate uppercase tracking-wide mb-1">
                    Address
                  </p>
                  <p className="leading-relaxed">
                    St. Industrialna 2A, Floor 1, Office 9<br />
                    Asenovgrad 4230, Bulgaria
                  </p>
                </div>
                <p className="text-sm text-body-text/60">
                  We do not accept unsolicited commercial emails. Please use the form or call us
                  directly.
                </p>
              </div>
            </div>

            {/* Form on dark card so ContactForm's transparent-white fields render correctly */}
            <div className="bg-dark-slate rounded-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
```

- [ ] **Step 4: Run tests — expect PASS**

```bash
PATH="/c/Program Files/nodejs:$PATH" npx jest --testPathPattern=app/contact/page.test.tsx --no-coverage 2>&1 | tail -15
```

Expected:
```
PASS  app/contact/page.test.tsx
  Contact page
    ✓ renders the main heading
    ✓ renders the Get in Touch heading
    ✓ renders the phone number
    ✓ renders the address
    ✓ renders the ContactForm
```

- [ ] **Step 5: Run the full test suite to confirm no regressions**

```bash
PATH="/c/Program Files/nodejs:$PATH" npx jest --no-coverage 2>&1 | tail -20
```

Expected: All test suites pass (page.test.tsx + about + products + contact + ContactForm).

- [ ] **Step 6: Commit**

```bash
cd "C:/Users/bsavo/OneDrive - Тъканна Банка Еурографт ЕООД/Marketing/Website" && git add app/contact/page.tsx app/contact/page.test.tsx && git commit -m "feat: add Contact page"
```

---

### Task 5: Production build + deploy

**Files:** None modified.

- [ ] **Step 1: Run production build**

```bash
PATH="/c/Program Files/nodejs:$PATH" npm run build 2>&1 | tail -20
```

Expected output ends with `✓ Compiled successfully` and shows all 6 routes (`/`, `/about`, `/products`, `/contact`, `/privacy`, `/_not-found`).

If there are TypeScript or build errors, fix them before proceeding.

- [ ] **Step 2: Push to GitHub**

```bash
cd "C:/Users/bsavo/OneDrive - Тъканна Банка Еурографт ЕООД/Marketing/Website" && git push origin master && git push origin master:main --force
```

Expected: Both pushes succeed. Vercel auto-deploys from `main` within ~1 minute.
