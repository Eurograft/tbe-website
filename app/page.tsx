import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Image
        src="/TBE-Logo-White-EN.png"
        alt="Eurograft logo"
        width={320}
        height={120}
        priority
        className="w-full max-w-xs drop-shadow-logo"
      />
    </main>
  )
}
