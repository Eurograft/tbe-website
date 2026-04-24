import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
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
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body className="font-sans">
        <Nav />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
