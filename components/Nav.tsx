'use client'

import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 bg-[#293241] transition-all duration-300"
      style={{
        borderBottom: scrolled ? '1px solid #E07B4F' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/TBE-Logo-White-EN.png"
              alt="Eurograft logo"
              width={200}
              height={48}
              priority
              className="h-12 w-auto brightness-0 invert"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontWeight: 500,
                  color: pathname === link.href ? '#E07B4F' : '#ffffff',
                  borderBottom: pathname === link.href ? '2px solid #E07B4F' : '2px solid transparent',
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => {
                  if (pathname !== link.href) (e.currentTarget as HTMLAnchorElement).style.color = '#2EAEE0'
                }}
                onMouseLeave={e => {
                  if (pathname !== link.href) (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2 text-white text-[14px] transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 600,
                backgroundColor: '#E07B4F',
                borderRadius: '2px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#c5623a' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E07B4F' }}
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
        className={`md:hidden bg-[#293241] border-t border-white/10 ${menuOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-1 text-[14px]"
              style={{
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 500,
                color: pathname === link.href ? '#E07B4F' : '#ffffff',
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-4 py-2 text-white text-center text-[14px]"
            style={{
              fontFamily: 'var(--font-space-grotesk)',
              fontWeight: 600,
              backgroundColor: '#E07B4F',
              borderRadius: '2px',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Request Information
          </Link>
        </div>
      </div>
    </nav>
  )
}
