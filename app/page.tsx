'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ShieldCheck,
  Award,
  Globe,
  Headphones,
  Layers,
  Grid3x3,
  FlaskConical,
  Dna,
} from 'lucide-react'
import AIImagePlaceholder from '@/components/AIImagePlaceholder'

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

const whyCards = [
  {
    title: 'FDA-Sourced',
    body: 'All grafts sourced from FDA-registered, AATB-accredited US tissue banks.',
    Icon: ShieldCheck,
  },
  {
    title: 'EU Licensed',
    body: 'Operating under EU tissue establishment licence, full regulatory compliance.',
    Icon: Award,
  },
  {
    title: 'Pan-European Reach',
    body: 'Shipping to surgical teams across EU member states with cold-chain logistics.',
    Icon: Globe,
  },
  {
    title: 'Responsive Service',
    body: 'Dedicated support from inquiry through post-operative follow-up.',
    Icon: Headphones,
  },
]

const productCards = [
  {
    title: 'Cortical Bone Grafts',
    desc: 'Structural support for load-bearing defects.',
    Icon: Layers,
    prompt: 'Macro photograph of cortical bone graft chips, clinical white background, medical product photography, sharp detail, professional studio lighting',
  },
  {
    title: 'Cancellous Grafts',
    desc: 'Osteoconductive filler for voids and cavities.',
    Icon: Grid3x3,
    prompt: 'Macro close-up of cancellous bone structure showing trabecular network, clinical white background, medical product photography',
  },
  {
    title: 'Demineralised Bone Matrix (DBM)',
    desc: 'Osteoinductive putty, gel, and sheet formats.',
    Icon: FlaskConical,
    prompt: 'Putty and gel format DBM medical product on clinical white background, biomedical product photography, surgical setting',
  },
  {
    title: 'Soft Tissue Allografts',
    desc: 'Tendon and membrane grafts for reconstruction.',
    Icon: Dna,
    prompt: 'Tendon allograft tissue surgical preparation, sterile field, medical photography, clinical blue tones',
  },
]

const statItems = [
  { value: '2024', label: 'Year Founded' },
  { value: 'EU', label: 'Licensed Tissue Establishment' },
  { value: 'FDA', label: 'Regulated Source Facilities' },
  { value: '30+', label: 'European Countries Served' },
]

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(false)
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
  }

  return (
    <main>
      {/* ── SECTION 1: HERO ── */}
      <section className="relative bg-[#293241] min-h-screen flex items-center overflow-hidden">
        {/* Crosshair behind text */}
        <svg
          className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: 600, height: 600, opacity: 0.06 }}
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="60" stroke="white" strokeWidth="1.5" />
          <path d="M20 200h360M200 20v360" stroke="white" strokeWidth="1.5" />
        </svg>

        {/* Left: text */}
        <div className="relative z-10 w-full md:w-1/2 px-8 sm:px-12 lg:px-20 py-24">
          <div className="mb-8" style={{ width: 4, height: 80, backgroundColor: '#E07B4F', borderRadius: 2 }} />
          <p className="eyebrow mb-4">EU-Licensed · FDA-Sourced · Asenovgrad, Bulgaria</p>
          <h1 className="text-white mb-6" style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(46px, 5vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            Premium Bone &amp; Tissue Allografts — Available Across Europe
          </h1>
          <p className="mb-10 max-w-lg" style={{ fontFamily: 'var(--font-inter)', fontSize: 18, lineHeight: 1.7, color: '#2EAEE0' }}>
            Eurograft partners with FDA-regulated US tissue banks to deliver high-quality bone and soft-tissue allografts to surgical teams across the EU.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn-primary">View Our Products</Link>
            <Link href="/contact" className="btn-secondary-light">Request Information</Link>
          </div>
        </div>

        {/* Right: AI image with diagonal clip */}
        <div
          className="hidden md:block absolute right-0 top-0 h-full w-1/2"
          style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <AIImagePlaceholder
            prompt="Extreme close-up of a surgical team's hands during a complex orthopaedic procedure, operating theatre lighting, clinical blue tones, cinematic depth of field, photorealistic, 4K"
            aspectRatio="unset"
            className="w-full h-full"
            style={{ height: '100%' }}
          />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-scroll-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E07B4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── SECTION 2: TRUST CREDENTIALS BAR ── */}
      <section className="py-7" style={{ backgroundColor: '#E07B4F' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { Icon: ShieldCheck, label: 'EU Licensed Tissue Establishment', sub: 'Directive 2004/23/EC' },
              { Icon: Award, label: 'FDA-Sourced Products', sub: 'AATB-accredited US banks' },
              { Icon: Globe, label: 'CE Marked Supply Chain', sub: 'EU conformity verified' },
              { Icon: Globe, label: 'Ships Across 30+ Countries', sub: 'Cold-chain validated logistics' },
            ].map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3">
                <Icon className="text-white flex-shrink-0 mt-0.5" size={22} />
                <div>
                  <p className="text-white leading-snug" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 14 }}>{label}</p>
                  <p className="text-white/75 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHY CHOOSE EUROGRAFT ── */}
      <section className="section-pad" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-center mb-4">The Eurograft Difference</p>
          <h2 className="text-center mb-14" style={{ fontFamily: 'var(--font-fraunces)', color: '#293241' }}>
            <span style={{ borderBottom: '3px solid #E07B4F', paddingBottom: 2 }}>Precision.</span>{' '}
            Compliance. Partnership.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map(({ title, body, Icon }) => (
              <div
                key={title}
                className="bg-white p-6 transition-all duration-200"
                style={{ borderLeft: '3px solid #E07B4F' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                <div className="mb-5 flex items-center justify-center" style={{ width: 56, height: 56, backgroundColor: '#E8F6FC', borderRadius: '50%' }}>
                  <Icon size={28} color="#2EAEE0" />
                </div>
                <h3 className="mb-2" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 18, color: '#293241' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 15, color: '#3A3A3A', lineHeight: 1.65 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PRODUCT PORTFOLIO ── */}
      <section className="section-pad" style={{ backgroundColor: '#293241' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-center mb-4">Our Portfolio</p>
          <h2 className="text-center text-white mb-14" style={{ fontFamily: 'var(--font-fraunces)' }}>
            <span style={{ borderBottom: '3px solid #E07B4F', paddingBottom: 2 }}>Allograft</span>{' '}
            Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCards.map(({ title, desc, prompt }) => (
              <div
                key={title}
                className="transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E07B4F' }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                <AIImagePlaceholder prompt={prompt} aspectRatio="4/3" className="w-full" />
                <div className="p-6">
                  <h3 className="mb-2 text-white" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 17 }}>{title}</h3>
                  <p className="mb-4" style={{ fontFamily: 'var(--font-inter)', fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{desc}</p>
                  <Link
                    href="/products"
                    style={{ color: '#E07B4F', fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 14 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none' }}
                  >
                    View Products →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: STATS ROW ── */}
      <section className="section-pad" style={{ backgroundColor: '#E8F6FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {statItems.map(({ value, label }, i) => (
              <div key={label} className="text-center px-6 py-4" style={{ borderRight: i < statItems.length - 1 ? '1px solid #E0E0E0' : 'none' }}>
                <p style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1, color: '#E07B4F' }}>{value}</p>
                <p className="mt-3" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#293241' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CONTACT / CTA ── */}
      <section className="section-pad relative overflow-hidden" style={{ backgroundColor: '#293241' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(80px, 15vw, 200px)', color: 'white', opacity: 0.03, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
            EUROGRAFT
          </span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
            <div className="mb-10 md:mb-0">
              <p className="eyebrow mb-4">Get In Touch</p>
              <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>
                <span style={{ borderBottom: '3px solid #E07B4F', paddingBottom: 2 }}>Request</span>{' '}
                Information
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.65)', fontSize: 17, lineHeight: 1.75 }}>
                Whether you&apos;re evaluating allografts for a procedure or looking to establish a supply relationship — we&apos;ll respond within one business day.
              </p>
            </div>

            <div>
              {submitted ? (
                <p className="text-white text-lg" style={{ fontFamily: 'var(--font-inter)' }}>Thank you — we&apos;ll be in touch shortly.</p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {[
                    { type: 'text', name: 'name', placeholder: 'Name *', required: true },
                    { type: 'email', name: 'email', placeholder: 'Email *', required: true },
                    { type: 'tel', name: 'phone', placeholder: 'Phone', required: false },
                    { type: 'text', name: 'organisation', placeholder: 'Organisation', required: false },
                  ].map(({ type, name, placeholder, required }) => (
                    <input
                      key={name}
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required={required}
                      className="w-full px-4 py-3 text-white placeholder:text-white/40 outline-none"
                      style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 0, fontFamily: 'var(--font-inter)', fontSize: 15 }}
                    />
                  ))}
                  <select
                    name="country"
                    defaultValue=""
                    className="w-full px-4 py-3 text-white outline-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 0, fontFamily: 'var(--font-inter)', fontSize: 15 }}
                  >
                    <option value="" disabled className="text-slate-800 bg-white">Country</option>
                    {europeanCountries.map(c => <option key={c} value={c} className="text-slate-800 bg-white">{c}</option>)}
                  </select>
                  <select
                    name="area"
                    defaultValue=""
                    className="w-full px-4 py-3 text-white outline-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 0, fontFamily: 'var(--font-inter)', fontSize: 15 }}
                  >
                    <option value="" disabled className="text-slate-800 bg-white">Area of Interest</option>
                    {areasOfInterest.map(a => <option key={a} value={a} className="text-slate-800 bg-white">{a}</option>)}
                  </select>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 text-white placeholder:text-white/40 outline-none resize-none"
                    style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 0, fontFamily: 'var(--font-inter)', fontSize: 15 }}
                  />
                  {submitError && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
                  <button
                    type="submit"
                    className="w-full py-4 text-white transition-colors duration-200"
                    style={{ backgroundColor: '#E07B4F', fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 15, letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 0 }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#c5623a' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#E07B4F' }}
                  >
                    Send Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
