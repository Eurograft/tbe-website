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

const fieldStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: 0,
  fontFamily: 'var(--font-inter)',
  fontSize: 15,
  color: '#ffffff',
  width: '100%',
  padding: '12px 16px',
  outline: 'none',
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitError(false)
    setSubmitting(true)
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
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return <p className="text-white text-lg" style={{ fontFamily: 'var(--font-inter)' }}>Thank you — we&apos;ll be in touch shortly.</p>
  }

  return (
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
          className="placeholder:text-white/40"
          style={fieldStyle}
        />
      ))}
      <select
        name="country"
        defaultValue=""
        style={fieldStyle}
      >
        <option value="" disabled className="text-slate-800 bg-white">Country</option>
        {europeanCountries.map(c => (
          <option key={c} value={c} className="text-slate-800 bg-white">{c}</option>
        ))}
      </select>
      <select
        name="area"
        defaultValue=""
        style={fieldStyle}
      >
        <option value="" disabled className="text-slate-800 bg-white">Area of Interest</option>
        {areasOfInterest.map(a => (
          <option key={a} value={a} className="text-slate-800 bg-white">{a}</option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Message"
        rows={4}
        className="placeholder:text-white/40 resize-none"
        style={fieldStyle}
      />
      {submitError && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-4 text-white transition-colors duration-200"
        style={{
          backgroundColor: submitting ? '#c5623a' : '#E07B4F',
          fontFamily: 'var(--font-space-grotesk)',
          fontWeight: 700,
          fontSize: 15,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          borderRadius: 0,
          cursor: submitting ? 'not-allowed' : 'pointer',
        }}
        onMouseEnter={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#c5623a' }}
        onMouseLeave={e => { if (!submitting) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#E07B4F' }}
      >
        {submitting ? 'Sending…' : 'Send Request'}
      </button>
    </form>
  )
}
