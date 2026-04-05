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
