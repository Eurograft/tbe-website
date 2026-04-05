'use client'

import { useState } from 'react'
import Link from 'next/link'

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
    </main>
  )
}
