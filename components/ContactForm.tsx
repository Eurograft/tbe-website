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
      <button
        type="submit"
        disabled={submitting}
        className="bg-brand-cyan text-white px-6 py-2 rounded font-semibold hover:opacity-90 self-start"
      >
        Send Request
      </button>
      {submitError && (
        <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
