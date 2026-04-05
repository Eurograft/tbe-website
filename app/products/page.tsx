import ContactForm from '@/components/ContactForm'

type Product = { name: string; desc: string }
type Category = { title: string; desc: string; products: Product[]; bg: string }

const categories: Category[] = [
  {
    title: 'Sports Medicine & ACL Allografts',
    bg: 'bg-white',
    desc: 'Human tendon and soft tissue allografts for ligament reconstruction and joint restoration surgery. Our sports medicine portfolio includes grafts for ACL reconstruction, PCL reconstruction, meniscus transplantation, and multi-ligament procedures.',
    products: [
      { name: 'Achilles Tendon Allograft', desc: 'For ACL and multi-ligament reconstruction' },
      { name: 'Patellar Ligament Allograft', desc: '10mm and split (hemi) options available' },
      { name: 'Semitendinosus Allograft', desc: 'Hamstring graft for ACL reconstruction' },
      { name: 'Gracilis Allograft', desc: 'Slender hamstring tendon for ligament repair' },
      { name: 'Tibialis Tendon Allograft', desc: 'Anterior and posterior, multiple diameters' },
      { name: 'Peroneus Longus Allograft', desc: 'Small and large diameter options' },
      { name: 'Meniscus Allograft', desc: 'For meniscus transplantation procedures' },
      { name: 'Osteochondral Allograft (OCA)', desc: 'For cartilage restoration and joint surface repair' },
    ],
  },
  {
    title: 'Bone Allografts',
    bg: 'bg-light-tint',
    desc: 'Cortical and cancellous bone grafts for orthopedic, trauma, and reconstructive procedures. Available in multiple forms and sizes to match specific surgical requirements.',
    products: [
      { name: 'Cortical Bone Allograft', desc: 'Structural support for load-bearing applications' },
      { name: 'Cancellous Bone Allograft', desc: 'Highly porous graft for bone void filling' },
      { name: 'Demineralized Bone Matrix (DBM)', desc: 'Osteoinductive matrix for bone regeneration' },
      { name: 'Demineralized Cortical Fiber Matrix', desc: 'Enhanced handling with growth factor preservation' },
      { name: 'Structural Bone Grafts', desc: 'Precision-machined for specific anatomical applications' },
      { name: 'Bone Void Fillers', desc: 'Cancellous chips and particulate for cavity filling' },
    ],
  },
  {
    title: 'Spine Allografts',
    bg: 'bg-white',
    desc: 'Precision bone grafts and biological matrices for spinal fusion, disc replacement support, and vertebral reconstruction procedures.',
    products: [
      { name: 'Cervical Spacers', desc: 'Cortical bone spacers for anterior cervical fusion' },
      { name: 'Lumbar Spacers', desc: 'Structural grafts for posterior and anterior lumbar fusion' },
      { name: 'Cortical Dowels', desc: 'Cylindrical grafts for interbody fusion procedures' },
      { name: 'Demineralized Bone Matrix for Spine', desc: 'Osteoinductive support for fusion' },
      { name: 'Cancellous Chips', desc: 'Loose graft material for posterolateral fusion' },
    ],
  },
  {
    title: 'Wound Care & Soft Tissue',
    bg: 'bg-light-tint',
    desc: 'Biological allografts for wound closure, reconstructive surgery, and soft tissue reinforcement — including acellular dermal matrices and placental membrane products.',
    products: [
      { name: 'Acellular Dermal Matrix', desc: 'Collagen scaffold for tissue reconstruction and wound closure' },
      { name: 'Placental Membrane Allograft', desc: 'Growth factor-rich barrier for chronic wound care' },
      { name: 'Acellular Dermis for Sports Medicine', desc: 'Reinforcement of tendon, ligament, and rotator cuff' },
      { name: 'Soft Tissue Allografts for Rotator Cuff', desc: 'Biological support for rotator cuff repair' },
    ],
  },
]

export default function ProductsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-dark-slate min-h-[40vh] flex items-end pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl text-white leading-tight">
            Our Allograft Portfolio
          </h1>
          <p className="mt-6 text-white/80 max-w-2xl leading-relaxed">
            Eurograft distributes a comprehensive range of human allograft products sourced
            exclusively from FDA-registered, AATB-accredited tissue banks in the United States.
            Our portfolio covers the full spectrum of surgical needs — from ACL reconstruction and
            meniscus transplantation to spinal fusion and wound care. All products are available
            for delivery to healthcare facilities across Europe. To inquire about specific
            products, availability, or pricing — use the form below or call us directly.
          </p>
        </div>
      </section>

      {/* ── Categories ── */}
      {categories.map((cat) => (
        <section key={cat.title} className={`${cat.bg} py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl text-dark-slate mb-4">{cat.title}</h2>
            <p className="text-body-text max-w-3xl mb-10 leading-relaxed">{cat.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.products.map((p) => (
                <div key={p.name} className="border border-divider rounded-lg p-4 bg-white">
                  <h3 className="font-semibold text-dark-slate mb-1">{p.name}</h3>
                  <p className="text-sm text-body-text/70">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Inquiry Form ── */}
      <section className="bg-dark-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:grid md:grid-cols-2 md:gap-12">
            <div className="mb-10 md:mb-0">
              <h2 className="font-serif text-3xl text-white mb-4">Request Information</h2>
              <p className="text-white/70">
                To inquire about specific products, availability, or pricing — complete the form
                below or call us at +359 877 06 3134.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
