import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-dark-slate min-h-[40vh] flex items-end pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Contact Us
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            We respond to all enquiries within one business day.
          </p>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-12">
            {/* Contact details */}
            <div className="mb-10 md:mb-0">
              <h2 className="font-serif text-3xl text-dark-slate mb-8">Get in Touch</h2>
              <div className="space-y-6 text-body-text">
                <div>
                  <p className="text-sm font-semibold text-dark-slate uppercase tracking-wide mb-1">
                    Phone
                  </p>
                  <a href="tel:+359877063134" className="text-brand-cyan hover:underline text-lg">
                    +359 877 06 3134
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark-slate uppercase tracking-wide mb-1">
                    Address
                  </p>
                  <p className="leading-relaxed">
                    St. Industrialna 2A, Floor 1, Office 9<br />
                    Asenovgrad 4230, Bulgaria
                  </p>
                </div>
                <p className="text-sm text-body-text/70">
                  We do not accept unsolicited commercial emails. Please use the form or call us
                  directly.
                </p>
              </div>
            </div>

            {/* Form on dark card so ContactForm's transparent-white fields render correctly */}
            <div className="bg-dark-slate rounded-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
