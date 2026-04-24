import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section
        className="min-h-[40vh] flex items-end pb-16"
        style={{ backgroundColor: '#293241' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Contact</p>
          <h1
            className="text-white mb-4"
            style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            <span style={{ borderBottom: '3px solid #E07B4F', paddingBottom: 2 }}>Get</span> in Touch
          </h1>
          <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.65)', fontSize: 18 }}>
            We respond to all enquiries within one business day.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="section-pad" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
            {/* Contact details */}
            <div className="mb-10 md:mb-0">
              <p className="eyebrow mb-6">Direct Contact</p>
              <div className="space-y-8">
                <div>
                  <p
                    className="mb-1"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#293241' }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+359877063134"
                    style={{ fontFamily: 'var(--font-inter)', fontSize: 20, color: '#2EAEE0', textDecoration: 'none' }}
                  >
                    +359 877 06 3134
                  </a>
                </div>
                <div>
                  <p
                    className="mb-1"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#293241' }}
                  >
                    Address
                  </p>
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: 17, lineHeight: 1.75, color: '#3A3A3A' }}>
                    St. Industrialna 2A, Floor 1, Office 9<br />
                    Asenovgrad 4230, Bulgaria
                  </p>
                </div>
                <div
                  className="p-6"
                  style={{ borderLeft: '3px solid #E07B4F', backgroundColor: '#ffffff' }}
                >
                  <p style={{ fontFamily: 'var(--font-inter)', fontSize: 15, color: '#3A3A3A', lineHeight: 1.65 }}>
                    We do not accept unsolicited commercial emails. Please use the form or call us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8" style={{ backgroundColor: '#293241' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
