import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eurograft',
  description: 'Тъканна Банка Еурографт ЕООД',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
