import AIImagePlaceholder from '@/components/AIImagePlaceholder'
import ContactForm from '@/components/ContactForm'

type Product = { name: string; desc: string }

const categories = [
  {
    title: 'Sports Medicine & ACL Allografts',
    eyebrow: 'Category 01',
    desc: 'Human tendon and soft tissue allografts for ligament reconstruction and joint restoration surgery. Our sports medicine portfolio includes grafts for ACL reconstruction, PCL reconstruction, meniscus transplantation, and multi-ligament procedures.',
    prompt: 'Tendon allograft tissue surgical preparation, sterile field, medical photography, clinical blue tones',
    imageLeft: false,
    products: [
      { name: 'Achilles Tendon Allograft', desc: 'For ACL and multi-ligament reconstruction' },
      { name: 'Patellar Ligament Allograft', desc: '10mm and split (hemi) options available' },
      { name: 'Semitendinosus Allograft', desc: 'Hamstring graft for ACL reconstruction' },
      { name: 'Gracilis Allograft', desc: 'Slender hamstring tendon for ligament repair' },
      { name: 'Tibialis Tendon Allograft', desc: 'Anterior and posterior, multiple diameters' },
      { name: 'Peroneus Longus Allograft', desc: 'Small and large diameter options' },
      { name: 'Meniscus Allograft', desc: 'For meniscus transplantation procedures' },
      { name: 'Osteochondral Allograft (OCA)', desc: 'For cartilage restoration and joint surface repair' },
    ] as Product[],
  },
  {
    title: 'Bone Allografts',
    eyebrow: 'Category 02',
    desc: 'Cortical and cancellous bone grafts for orthopedic, trauma, and reconstructive procedures. Available in multiple forms and sizes to match specific surgical requirements.',
    prompt: 'Macro photograph of cortical bone graft chips, clinical white background, medical product photography, sharp detail, professional studio lighting',
    imageLeft: true,
    products: [
      { name: 'Cortical Bone Allograft', desc: 'Structural support for load-bearing applications' },
      { name: 'Cancellous Bone Allograft', desc: 'Highly porous graft for bone void filling' },
      { name: 'Demineralized Bone Matrix (DBM)', desc: 'Osteoinductive matrix for bone regeneration' },
      { name: 'Demineralized Cortical Fiber Matrix', desc: 'Enhanced handling with growth factor preservation' },
      { name: 'Structural Bone Grafts', desc: 'Precision-machined for specific anatomical applications' },
      { name: 'Bone Void Fillers', desc: 'Cancellous chips and particulate for cavity filling' },
    ] as Product[],
  },
  {
    title: 'Spine Allografts',
    eyebrow: 'Category 03',
    desc: 'Precision bone grafts and biological matrices for spinal fusion, disc replacement support, and vertebral reconstruction procedures.',
    prompt: 'Abstract macro photography of biological tissue structure, microscopic collagen fibers, teal and deep blue color palette, scientific beauty, award-winning nature photography style',
    imageLeft: false,
    products: [
      { name: 'Cervical Spacers', desc: 'Cortical bone spacers for anterior cervical fusion' },
      { name: 'Lumbar Spacers', desc: 'Structural grafts for posterior and anterior lumbar fusion' },
      { name: 'Cortical Dowels', desc: 'Cylindrical grafts for interbody fusion procedures' },
      { name: 'Demineralized Bone Matrix for Spine', desc: 'Osteoinductive support for fusion' },
      { name: 'Cancellous Chips', desc: 'Loose graft material for posterolateral fusion' },
    ] as Product[],
  },
  {
    title: 'Wound Care & Soft Tissue',
    eyebrow: 'Category 04',
    desc: 'Biological allografts for wound closure, reconstructive surgery, and soft tissue reinforcement — including acellular dermal matrices and placental membrane products.',
    prompt: 'Macro close-up of cancellous bone structure showing trabecular network, clinical white background, medical product photography',
    imageLeft: true,
    products: [
      { name: 'Acellular Dermal Matrix', desc: 'Collagen scaffold for tissue reconstruction and wound closure' },
      { name: 'Placental Membrane Allograft', desc: 'Growth factor-rich barrier for chronic wound care' },
      { name: 'Acellular Dermis for Sports Medicine', desc: 'Reinforcement of tendon, ligament, and rotator cuff' },
      { name: 'Soft Tissue Allografts for Rotator Cuff', desc: 'Biological support for rotator cuff repair' },
    ] as Product[],
  },
]

const tickerItems = [
  'ACL Allografts', 'Cortical Bone', 'Cancellous Grafts', 'DBM', 'Soft Tissue', 'Spinal Allografts', 'Wound Care',
  'ACL Allografts', 'Cortical Bone', 'Cancellous Grafts', 'DBM', 'Soft Tissue', 'Spinal Allografts', 'Wound Care',
]

export default function ProductsPage() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden" style={{ backgroundColor: '#293241' }}>
        <div className="absolute inset-0" style={{ opacity: 0.2 }}>
          <AIImagePlaceholder
            prompt="Abstract macro photography of biological tissue structure, microscopic collagen fibers, teal and deep blue color palette, scientific beauty, award-winning nature photography style"
            aspectRatio="unset"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(41,50,65,0.78)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-5">Product Portfolio</p>
          <h1
            className="text-white mb-5"
            style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            Our Allograft Portfolio
          </h1>
          <p className="max-w-2xl" style={{ fontFamily: 'var(--font-inter)', fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75 }}>
            A comprehensive range of human allograft products sourced exclusively from FDA-registered,
            AATB-accredited tissue banks. Available for delivery to healthcare facilities across Europe.
          </p>
        </div>
      </section>

      {/* ── TICKER STRIP ── */}
      <div className="overflow-hidden py-4" style={{ backgroundColor: '#E07B4F' }}>
        <div className="flex animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 px-6"
              style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 13, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase' }}
            >
              {item}
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18 }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── PRODUCT CATEGORIES ── */}
      {categories.map(({ title, eyebrow, desc, prompt, imageLeft, products }, catIdx) => (
        <section
          key={title}
          className="section-pad"
          style={{ backgroundColor: catIdx % 2 === 0 ? '#F7F7F7' : '#ffffff' }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-14 items-center ${imageLeft ? '' : ''}`}>
              {/* Image */}
              <div
                className={`${imageLeft ? 'md:order-1' : 'md:order-2'}`}
                style={{ clipPath: imageLeft ? 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' : 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}
              >
                <AIImagePlaceholder
                  prompt={prompt}
                  aspectRatio="4/3"
                  className="w-full"
                />
              </div>

              {/* Text */}
              <div className={imageLeft ? 'md:order-2' : 'md:order-1'}>
                <p className="eyebrow mb-4">{eyebrow}</p>
                <h2 className="mb-6" style={{ fontFamily: 'var(--font-fraunces)', color: '#293241' }}>
                  <span style={{ borderBottom: '3px solid #E07B4F', paddingBottom: 2 }}>
                    {title.split(' ')[0]}
                  </span>{' '}
                  {title.split(' ').slice(1).join(' ')}
                </h2>
                <p className="mb-8" style={{ fontFamily: 'var(--font-inter)', fontSize: 17, lineHeight: 1.75, color: '#3A3A3A' }}>{desc}</p>

                <ul className="space-y-3 mb-8">
                  {products.map(p => (
                    <li key={p.name} className="flex items-start gap-3">
                      <span style={{ color: '#E07B4F', fontSize: 18, lineHeight: 1.4, flexShrink: 0 }}>▸</span>
                      <div>
                        <span style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 15, color: '#293241' }}>{p.name}</span>
                        {' '}
                        <span style={{ fontFamily: 'var(--font-inter)', fontSize: 14, color: '#3A3A3A' }}>— {p.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="#inquiry"
                  className="inline-block px-6 py-3 transition-colors duration-200"
                  style={{
                    border: '1.5px solid #E07B4F',
                    color: '#E07B4F',
                    fontFamily: 'var(--font-space-grotesk)',
                    fontWeight: 600,
                    fontSize: 14,
                    borderRadius: 2,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.backgroundColor = '#E07B4F'
                    el.style.color = '#ffffff'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.backgroundColor = 'transparent'
                    el.style.color = '#E07B4F'
                  }}
                >
                  Request This Product →
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── INQUIRY FORM ── */}
      <section id="inquiry" className="section-pad relative overflow-hidden" style={{ backgroundColor: '#293241' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(60px, 12vw, 160px)', color: 'white', opacity: 0.03, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
            EUROGRAFT
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-16 items-start">
            <div className="mb-10 md:mb-0">
              <p className="eyebrow mb-4">Inquire Now</p>
              <h2 className="text-white mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>
                <span style={{ borderBottom: '3px solid #E07B4F', paddingBottom: 2 }}>Request</span>{' '}
                Information
              </h2>
              <p style={{ fontFamily: 'var(--font-inter)', color: 'rgba(255,255,255,0.65)', fontSize: 17, lineHeight: 1.75 }}>
                To inquire about specific products, availability, or pricing — complete the form
                below or call us at{' '}
                <a href="tel:+359877063134" style={{ color: '#2EAEE0' }}>+359 877 06 3134</a>.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
