'use client'

import { useState } from 'react'
import Link from 'next/link'

type WhyCard = { title: string; body: string; icon: React.ReactElement }
type ProductCard = { title: string; desc: string }

const whyCards: WhyCard[] = [
  {
    title: 'FDA-Sourced',
    body: 'All grafts sourced from FDA-registered, AATB-accredited US tissue banks.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'EU Licensed',
    body: 'Operating under EU tissue establishment licence, full regulatory compliance.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    title: 'Pan-European Reach',
    body: 'Shipping to surgical teams across EU member states with cold-chain logistics.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Responsive Service',
    body: 'Dedicated support from inquiry through post-operative follow-up.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  },
]

const productCards: ProductCard[] = [
  { title: 'Cortical Bone Grafts', desc: 'Structural support for load-bearing defects.' },
  { title: 'Cancellous Grafts', desc: 'Osteoconductive filler for voids and cavities.' },
  { title: 'Demineralised Bone Matrix (DBM)', desc: 'Osteoinductive putty, gel, and sheet formats.' },
  { title: 'Soft Tissue Allografts', desc: 'Tendon and membrane grafts for reconstruction.' },
]

type QualityColumn = { title: string; body: string; icon: React.ReactElement }

const qualityColumns: QualityColumn[] = [
  {
    title: 'Processing & Sterilisation',
    body: 'FDA-regulated processing facilities with terminal sterilisation. Full donor screening, serological testing, and documented traceability from recovery to implantation.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'EU Regulatory Framework',
    body: 'Authorised under EU Directive 2004/23/EC. Tissue establishment licence held by Eurograft Tissue Bank Ltd. Ongoing compliance with Bulgarian and EU competent authority requirements.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
      </svg>
    ),
  },
  {
    title: 'Cold Chain & Distribution',
    body: 'Validated temperature-controlled packaging and logistics. Documented chain of custody for every shipment. Shelf-life and storage requirements met at every step.',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    ),
  },
]

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(false)
    const data = Object.fromEntries(new FormData(e.currentTarget).entries())
    const res = await fetch('FORMSPREE_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      setSubmitted(true)
    } else {
      setSubmitError(true)
    }
  }

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-dark-slate min-h-screen flex items-center overflow-hidden">
        {/* Decorative background SVG */}
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 w-96 h-96 pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="2" />
          <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="2" />
          <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="2" />
          <path d="M20 200h360M200 20v360" stroke="white" strokeWidth="2" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-3xl">
            Premium Bone &amp; Tissue Allografts — Available Across Europe
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Eurograft partners with FDA-regulated US tissue banks to deliver high-quality bone and
            soft-tissue allografts to surgical teams across the EU.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-brand-cyan text-white font-semibold rounded hover:opacity-90 transition"
            >
              View Our Products
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-white/10 transition"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Eurograft ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-dark-slate text-center mb-12">
            Why Surgical Teams Choose Eurograft
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="border border-divider rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="text-brand-cyan mb-4">{card.icon}</div>
                <h3 className="font-semibold text-dark-slate mb-2">{card.title}</h3>
                <p className="text-sm text-body-text/80">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Teaser ── */}
      <section className="bg-light-tint py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-dark-slate text-center mb-4">
            Our Allograft Portfolio
          </h2>
          <p className="text-body-text/70 text-center mb-12">
            A focused range of bone and soft-tissue products for reconstructive and orthopaedic
            procedures.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {productCards.map((card) => (
              <Link
                key={card.title}
                href="/products"
                className="bg-white rounded-lg p-6 border border-divider hover:shadow-md transition block"
              >
                <h3 className="font-semibold text-dark-slate mb-2">{card.title}</h3>
                <p className="text-sm text-body-text/70 mb-2">{card.desc}</p>
                <span className="text-brand-cyan text-sm">View Products →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quality & Compliance ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-dark-slate text-center mb-12">
            Uncompromising Quality Standards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityColumns.map((col) => (
              <div key={col.title}>
                <div className="text-brand-cyan mb-4">{col.icon}</div>
                <h3 className="font-semibold text-dark-slate text-lg mb-3">{col.title}</h3>
                <p className="text-body-text/80 text-sm leading-relaxed">{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
