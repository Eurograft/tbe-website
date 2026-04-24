import { ShieldCheck, Building2, Link2 } from 'lucide-react'
import AIImagePlaceholder from '@/components/AIImagePlaceholder'

const regulatoryCards = [
  {
    Icon: ShieldCheck,
    title: 'EU Directive 2004/23/EC',
    desc: 'Full compliance with EU regulations on standards of quality and safety for human tissues and cells.',
  },
  {
    Icon: Building2,
    title: 'Bulgarian EAMO Licensed',
    desc: 'Licensed and regularly inspected by the Bulgarian Executive Agency for Medical Oversight.',
  },
  {
    Icon: Link2,
    title: 'Full Traceability',
    desc: 'Complete chain of custody from donor bank to surgical team, documented at every step.',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden" style={{ backgroundColor: '#293241' }}>
        {/* Background image bleed */}
        <div className="absolute inset-0" style={{ opacity: 0.25 }}>
          <AIImagePlaceholder
            prompt="Wide shot of a sterile biomedical laboratory, cryogenic storage tanks, scientist in full PPE, cool blue ambient light, architectural photography style, ultra-detailed"
            aspectRatio="unset"
            className="w-full h-full"
          />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(41,50,65,0.75)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">About Us</p>
          <h1
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Built on Trust.{' '}
            <br />
            Delivered with Precision.
          </h1>
          <p
            className="max-w-xl"
            style={{ fontFamily: 'var(--font-inter)', fontSize: 18, color: '#2EAEE0', fontStyle: 'italic', lineHeight: 1.7 }}
          >
            EU-licensed · FDA-sourced · Asenovgrad, Bulgaria
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section-pad" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="eyebrow mb-4">Who We Are</p>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', color: '#293241' }} className="mb-8">
                <span style={{ borderBottom: '3px solid #E07B4F', paddingBottom: 2 }}>Europe&apos;s</span>{' '}
                Bridge to World-Class Allografts
              </h2>
              <div className="space-y-5" style={{ fontFamily: 'var(--font-inter)', fontSize: 17, lineHeight: 1.75, color: '#3A3A3A' }}>
                <p>
                  Eurograft Tissue Bank is an EU-licensed tissue establishment based in Asenovgrad,
                  Bulgaria, specialising in the storage, distribution, and supply of human allograft
                  tissue and cellular products for surgical use across Europe.
                </p>
                <p>
                  Founded in 2024, Eurograft was established to bridge the gap between world-class
                  American allograft technology and the growing demand for high-quality, reliably sourced
                  human tissue products across European healthcare facilities.
                </p>
                <p>
                  We work exclusively with FDA-registered, AATB-accredited tissue banks in the United
                  States — ensuring every product we distribute meets the most rigorous standards of
                  donor screening, processing, and sterilization available anywhere in the world.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <AIImagePlaceholder
                prompt="Wide shot of a sterile biomedical laboratory, cryogenic storage tanks, scientist in full PPE, cool blue ambient light, architectural photography style, ultra-detailed"
                aspectRatio="1/1"
                className="w-full max-w-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section className="section-pad relative overflow-hidden" style={{ backgroundColor: '#293241' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="eyebrow mb-6">Our Mission</p>
          {/* Decorative quotation marks */}
          <div className="relative inline-block max-w-4xl">
            <span
              aria-hidden="true"
              className="absolute -top-6 -left-8 leading-none select-none pointer-events-none"
              style={{ fontFamily: 'var(--font-fraunces)', fontSize: 120, color: '#E07B4F', opacity: 0.9, lineHeight: 1 }}
            >
              &ldquo;
            </span>
            <blockquote
              style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: 'clamp(22px, 3vw, 38px)', color: '#ffffff', lineHeight: 1.35 }}
            >
              Our mission is simple: to give European surgeons and healthcare facilities reliable,
              fast access to the highest quality human allograft products — so they can focus on
              what matters most: their patients.
            </blockquote>
            <span
              aria-hidden="true"
              className="absolute -bottom-10 -right-8 leading-none select-none pointer-events-none"
              style={{ fontFamily: 'var(--font-fraunces)', fontSize: 120, color: '#E07B4F', opacity: 0.9, lineHeight: 1 }}
            >
              &rdquo;
            </span>
          </div>
        </div>
      </section>

      {/* ── REGULATORY STANDING ── */}
      <section className="section-pad" style={{ backgroundColor: '#E8F6FC' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow text-center mb-4">Regulatory Standing</p>
          <h2 className="text-center mb-4" style={{ fontFamily: 'var(--font-fraunces)', color: '#293241' }}>
            <span style={{ borderBottom: '3px solid #E07B4F', paddingBottom: 2 }}>Compliance</span>{' '}
            at Every Step
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-14" style={{ fontFamily: 'var(--font-inter)', fontSize: 17, lineHeight: 1.75, color: '#3A3A3A' }}>
            Eurograft Tissue Bank is fully licensed and operates in full compliance with EU Directive 2015/566
            on human tissues and cells. Our operations are subject to regular inspection and oversight.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regulatoryCards.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-8"
                style={{ borderTop: '3px solid #E07B4F' }}
              >
                <div className="mb-5 flex items-center justify-center" style={{ width: 56, height: 56, backgroundColor: '#E8F6FC', borderRadius: '50%' }}>
                  <Icon size={28} color="#2EAEE0" />
                </div>
                <h3 className="mb-3" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 18, color: '#293241' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: 15, color: '#3A3A3A', lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BULGARIA ── */}
      <section className="section-pad" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <AIImagePlaceholder
                prompt="Modern European logistics hub, cold-chain storage facility, temperature-controlled warehouse interior, professional industrial photography, cool blue tones"
                aspectRatio="4/3"
                className="w-full max-w-[480px]"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="eyebrow mb-4">Why Bulgaria</p>
              <h2 style={{ fontFamily: 'var(--font-fraunces)', color: '#293241' }} className="mb-8">
                <span style={{ borderBottom: '3px solid #E07B4F', paddingBottom: 2 }}>Strategic</span>{' '}
                Position in Europe
              </h2>
              <div className="space-y-5" style={{ fontFamily: 'var(--font-inter)', fontSize: 17, lineHeight: 1.75, color: '#3A3A3A' }}>
                <p>
                  Asenovgrad, Bulgaria provides Eurograft with an ideal base for pan-European distribution.
                  Located within the EU and connected to key logistics routes, we can reach surgical teams
                  across 30+ European countries with validated cold-chain logistics.
                </p>
                <p>
                  Bulgaria&apos;s regulatory alignment with EU standards ensures Eurograft operates under
                  the same framework as tissue establishments throughout the European Union — giving
                  hospitals and surgical centres the confidence of full regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
