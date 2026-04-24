'use client'

import Image from 'next/image'
import Link from 'next/link'

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-space-grotesk)',
  fontWeight: 600,
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  color: '#ffffff',
  marginBottom: 16,
  display: 'block',
}

const linkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-inter)',
  fontSize: 14,
  color: 'rgba(255,255,255,0.6)',
  display: 'block',
  marginBottom: 10,
  textDecoration: 'none',
  transition: 'color 0.2s',
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a2130', borderTop: '3px solid #E07B4F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 0: Logo + tagline */}
          <div className="md:col-span-1">
            <Link href="/">
              <Image
                src="/TBE-Logo-White-EN.png"
                alt="Eurograft logo"
                width={160}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
            </Link>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
              EU-licensed tissue bank. Advancing surgery through trusted allografts from FDA-regulated sources.
            </p>
          </div>

          {/* Col 1: Company */}
          <div>
            <span style={sectionTitleStyle}>Company</span>
            {[
              { href: '/about', label: 'About' },
              { href: '/products', label: 'Products' },
              { href: '/contact', label: 'Contact' },
              { href: '/privacy', label: 'Privacy Policy' },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={linkStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)' }}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Col 2: Compliance */}
          <div>
            <span style={sectionTitleStyle}>Compliance</span>
            {[
              'EU Directive 2004/23/EC',
              'FDA-Regulated Sources',
              'CE Marked Supply Chain',
              'AATB-Accredited Partners',
            ].map(item => (
              <span key={item} style={{ ...linkStyle, cursor: 'default' }}>{item}</span>
            ))}
          </div>

          {/* Col 3: Contact */}
          <div>
            <span style={sectionTitleStyle}>Contact</span>
            <a
              href="tel:+359877063134"
              style={linkStyle}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)' }}
            >
              +359 877 06 3134
            </a>
            <p style={{ fontFamily: 'var(--font-inter)', fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: 16 }}>
              St. Industrialna 2A, Floor 1, Office 9<br />
              Asenovgrad 4230, Bulgaria
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 text-white text-xs transition-colors duration-200"
              style={{
                backgroundColor: '#E07B4F',
                fontFamily: 'var(--font-space-grotesk)',
                fontWeight: 600,
                borderRadius: 2,
                letterSpacing: '0.05em',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#c5623a' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#E07B4F' }}
            >
              Request Information
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', backgroundColor: 'transparent' }}
        >
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Eurograft Tissue Bank Ltd. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            Asenovgrad, Bulgaria
          </p>
        </div>
      </div>
    </footer>
  )
}
