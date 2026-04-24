import type { Metadata } from 'next'
import { Fraunces, Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['700', '900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Eurograft Tissue Bank',
  description: 'EU-licensed distributor of FDA-sourced bone allografts, ACL allografts, tendon grafts and soft tissue allografts. Serving hospitals and surgical centres across Europe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
