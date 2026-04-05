export default function AboutPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-dark-slate min-h-[40vh] flex items-end pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            About Eurograft Tissue Bank
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            EU-licensed · FDA-sourced · Asenovgrad, Bulgaria
          </p>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-dark-slate mb-8">Who We Are</h2>
          <div className="max-w-3xl space-y-6 text-body-text leading-relaxed">
            <p>
              Eurograft Tissue Bank is an EU-licensed tissue establishment based in Asenovgrad,
              Bulgaria, specialising in the storage, distribution, and supply of human allograft
              tissue and cellular products for surgical use across Europe. Founded in 2024,
              Eurograft was established to bridge the gap between world-class American allograft
              technology and the growing demand for high-quality, reliably sourced human tissue
              products across European healthcare facilities.
            </p>
            <p>
              We work exclusively with FDA-registered, AATB-accredited tissue banks in the United
              States — ensuring every product we distribute meets the most rigorous standards of
              donor screening, processing, and sterilization available anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Mission ── */}
      <section className="bg-light-tint py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-cyan text-sm font-semibold tracking-widest uppercase mb-6">
            Our Mission
          </p>
          <blockquote className="font-serif text-3xl md:text-4xl text-dark-slate leading-snug max-w-4xl mx-auto">
            Our mission is simple: to give European surgeons and healthcare facilities reliable,
            fast access to the highest quality human allograft products — so they can focus on
            what matters most: their patients.
          </blockquote>
        </div>
      </section>

      {/* ── Regulatory Standing ── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-dark-slate mb-6">Regulatory Standing</h2>
          <p className="text-body-text max-w-3xl mb-12 leading-relaxed">
            Eurograft Tissue Bank is fully licensed by the Bulgarian Executive Agency for Medical
            Oversight and operates in full compliance with EU Directive 2015/566 on human tissues
            and cells. Our operations are subject to regular inspection and oversight, ensuring
            full traceability and compliance at every step of the supply chain.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-brand-cyan mb-4">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path d="M12 2L4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6l-8-4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-slate text-lg mb-2">EU Directive 2015/566</h3>
              <p className="text-body-text/80 text-sm leading-relaxed">
                Full compliance with EU regulations on human tissues and cells.
              </p>
            </div>
            <div>
              <div className="text-brand-cyan mb-4">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-slate text-lg mb-2">Bulgarian EAMO Licensed</h3>
              <p className="text-body-text/80 text-sm leading-relaxed">
                Licenced and regularly inspected by the Bulgarian Executive Agency for Medical Oversight.
              </p>
            </div>
            <div>
              <div className="text-brand-cyan mb-4">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark-slate text-lg mb-2">Full Traceability</h3>
              <p className="text-body-text/80 text-sm leading-relaxed">
                Complete chain of custody from donor bank to surgical team, documented at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
