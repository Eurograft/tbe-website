import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Eurograft Tissue Bank',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-4 py-20">
      <h1 className="font-serif text-3xl text-body-text mb-6">Privacy Policy</h1>
      <p className="text-body-text">
        This privacy policy will be updated shortly. For any questions regarding
        your data or privacy, please contact us directly at{' '}
        <span className="font-medium">+359 877 06 3134</span>.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 text-brand-cyan hover:underline text-sm"
      >
        ← Back to Home
      </Link>
    </main>
  )
}
