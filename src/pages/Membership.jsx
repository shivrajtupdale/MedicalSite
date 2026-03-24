import { useState } from 'react'
import { Link } from 'react-router-dom'

const benefits = [
  { icon: 'fa-comments', title: 'Direct Pharmacist Access', desc: 'Text your pharmacist directly with questions — no hold times, no phone trees. Get answers when you need them.' },
  { icon: 'fa-tags', title: 'Exclusive Discounts', desc: 'Save on vitamins, supplements, and health products with member-only pricing up to 15% off.' },
  { icon: 'fa-shipping-fast', title: 'Free Delivery', desc: 'Skip the trip. Get your prescriptions and products delivered free to your door — same day for local orders.' },
  { icon: 'fa-calendar-check', title: 'Annual Medication Review', desc: 'A comprehensive pharmacist review of all your medications to identify risks, interactions, and cost savings.' },
  { icon: 'fa-flask', title: 'Free Flavoring', desc: 'Make medications more palatable for children and sensitive adults with complimentary flavoring service.' },
  { icon: 'fa-capsules', title: 'Blister Pack Setup', desc: 'We\'ll organize your medications into easy, pre-sorted blister packs at no extra charge.' },
]

const plans = [
  {
    name: 'Basic', price: '10',
    tagline: 'Perfect for individuals who want more access to their pharmacist.',
    features: [
      'Text-based pharmacist consultations',
      '5% discount on vitamins & supplements',
      'Monthly wellness newsletter',
      'Priority prescription pickup lane',
      'Refill reminder notifications',
    ],
    featured: false,
  },
  {
    name: 'Plus', price: '15',
    tagline: 'Best value for families and those managing multiple medications.',
    features: [
      'Everything in Basic',
      'Free medication flavoring',
      '10% discount on supplements',
      'Free blister pack setup',
      'Same-day local delivery',
      '1 free in-store consultation/month',
    ],
    featured: true,
  },
  {
    name: 'Premium', price: '25',
    tagline: 'Full-service care for patients who want the ultimate pharmacy experience.',
    features: [
      'Everything in Plus',
      'Unlimited pharmacist consultations',
      '15% discount on all products',
      'Free surgical supply starter kit',
      'Annual medication therapy review',
      'Priority after-hours support',
    ],
    featured: false,
  },
]

const comparisonRows = [
  { feature: 'Text pharmacist consultations', basic: true, plus: true, premium: true },
  { feature: 'Supplement discount', basic: '5%', plus: '10%', premium: '15%' },
  { feature: 'All product discount', basic: '—', plus: '—', premium: '15%' },
  { feature: 'Refill reminders', basic: true, plus: true, premium: true },
  { feature: 'Priority pickup', basic: true, plus: true, premium: true },
  { feature: 'Medication flavoring', basic: '—', plus: true, premium: true },
  { feature: 'Free blister pack setup', basic: '—', plus: true, premium: true },
  { feature: 'Same-day delivery', basic: '—', plus: true, premium: true },
  { feature: 'In-store consultations', basic: '—', plus: '1/month', premium: 'Unlimited' },
  { feature: 'Surgical supply kit', basic: '—', plus: '—', premium: true },
  { feature: 'Annual medication review', basic: '—', plus: '—', premium: true },
  { feature: 'After-hours support', basic: '—', plus: '—', premium: true },
]

const faqs = [
  { q: 'Is there a contract or commitment?', a: 'No contracts — all plans are month-to-month. You can cancel anytime with no fees or penalties.' },
  { q: 'When do benefits start?', a: 'Benefits begin immediately upon sign-up. You can start using your discounts and text access the same day.' },
  { q: 'Can I add family members?', a: 'Each membership covers one primary patient. Family plans with discounts for multiple members are coming soon — ask us about household pricing.' },
  { q: 'How does the text consultation work?', a: 'You\'ll receive a secure number to text our pharmacist team. We typically respond within 2 hours during business hours for non-urgent questions.' },
  { q: 'Can I upgrade or downgrade my plan?', a: 'Yes, you can change your plan at any time. Upgrades take effect immediately; downgrades take effect at the start of the next billing cycle.' },
  { q: 'Is membership covered by insurance?', a: 'Membership fees are not covered by insurance, but the savings on products and consultations often outweigh the monthly cost significantly.' },
]

function FAQ({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        className={`w-full flex items-center justify-between p-5 bg-white font-heading font-semibold text-sm text-[#111] text-left cursor-pointer border-0 faq-question ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        {q}
        <i className="fas fa-plus text-primary ml-4 flex-shrink-0"></i>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <p className="text-[#666] text-sm">{a}</p>
      </div>
    </div>
  )
}

function CheckCell({ val, featured }) {
  if (val === true) return <i className={`fas fa-check ${featured ? 'text-primary' : 'text-primary'}`}></i>
  return <span className="text-[#999]">{val}</span>
}

export default function Membership() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=80')" }}
      >
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="text-white/70 text-sm mb-2">
            <Link to="/" className="text-white/70 hover:text-white no-underline">Home</Link>
            {' / Membership'}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-3">Membership Plans</h1>
          <p className="text-white/80 text-lg max-w-xl">
            Unlock exclusive perks, save more, and get closer access to your pharmacist team.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">Why Join</p>
            <h2 className="font-heading text-4xl font-bold text-[#111] mb-3">The Benefits of Being a Member</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Our membership plans are designed to make quality pharmacy care more accessible, affordable, and personalized for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow-card p-7 border border-gray-50 reveal">
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                  <i className={`fas ${icon} text-primary text-xl`}></i>
                </div>
                <h3 className="font-heading font-bold text-[#111] text-lg mb-2">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section className="py-20 px-4 bg-[#f5f7fa]">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">Choose Your Plan</p>
            <h2 className="font-heading text-4xl font-bold text-[#111] mb-3">Pick What Fits Your Life</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              All plans are month-to-month with no long-term contracts. Upgrade or cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map(({ name, price, tagline, features, featured }) => (
              <div
                key={name}
                className={`rounded-xl overflow-hidden ${featured ? 'bg-primary shadow-card-lg' : 'bg-white shadow-card border border-gray-100'} reveal`}
              >
                {featured && (
                  <div className="bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider text-center py-2">
                    Most Popular
                  </div>
                )}
                <div className={`p-7 border-b ${featured ? 'border-white/20' : 'border-gray-100'}`}>
                  <h3 className={`font-heading font-bold text-xl mb-2 ${featured ? 'text-white' : 'text-[#111]'}`}>{name}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className={`font-heading text-lg font-bold ${featured ? 'text-white' : 'text-primary'}`}>$</span>
                    <span className={`font-heading text-4xl font-extrabold leading-none ${featured ? 'text-white' : 'text-primary'}`}>{price}</span>
                    <span className={`text-sm mb-1 ${featured ? 'text-white/70' : 'text-[#666]'}`}>/mo</span>
                  </div>
                  <p className={`text-sm ${featured ? 'text-white/75' : 'text-[#666]'}`}>{tagline}</p>
                </div>
                <ul className="p-7 flex flex-col gap-3 m-0">
                  {features.map(f => (
                    <li key={f} className={`flex items-start gap-2 text-sm ${featured ? 'text-white' : 'text-[#333]'}`}>
                      <i className={`fas fa-check mt-0.5 ${featured ? 'text-white/80' : 'text-primary'}`}></i> {f}
                    </li>
                  ))}
                </ul>
                <div className="px-7 pb-7">
                  <Link to="/contact" className={`${featured ? 'btn-white' : 'btn-outline'} btn-full`}>Get Started</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-20 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">Side by Side</p>
            <h2 className="font-heading text-4xl font-bold text-[#111]">Full Feature Comparison</h2>
          </div>
          <div className="overflow-x-auto reveal">
            <table className="comparison-table w-full border-collapse rounded-xl overflow-hidden shadow-card text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 bg-[#f5f7fa] font-heading font-bold text-[#111]">Feature</th>
                  <th className="p-4 bg-[#f5f7fa] font-heading font-bold text-[#111] text-center">
                    Basic <span className="font-normal text-[#666] block text-xs">$10/mo</span>
                  </th>
                  <th className="th-featured p-4 font-heading font-bold text-center">
                    Plus <span className="font-normal opacity-80 block text-xs">$15/mo</span>
                  </th>
                  <th className="p-4 bg-[#f5f7fa] font-heading font-bold text-[#111] text-center">
                    Premium <span className="font-normal text-[#666] block text-xs">$25/mo</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ feature, basic, plus, premium }, i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[#f9fafb]'}>
                    <td className="p-4 text-[#333]">{feature}</td>
                    <td className="p-4 text-center"><CheckCell val={basic} /></td>
                    <td className="p-4 text-center bg-primary-light"><CheckCell val={plus} /></td>
                    <td className="p-4 text-center"><CheckCell val={premium} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#f5f7fa]">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">Questions</p>
            <h2 className="font-heading text-4xl font-bold text-[#111]">Membership FAQ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqs.map(faq => (
              <div key={faq.q} className="reveal">
                <FAQ q={faq.q} a={faq.a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-dark to-primary py-16 px-4">
        <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-2">Ready to join the HealthPoint family?</h2>
            <p className="text-white/80">Sign up in minutes — no paperwork, no commitment, no hassle.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="btn-white btn-lg">Sign Me Up</Link>
            <Link to="/contact" className="btn-outline-white btn-lg">Ask a Question</Link>
          </div>
        </div>
      </section>
    </>
  )
}
