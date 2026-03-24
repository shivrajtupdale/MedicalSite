import { useState } from 'react'
import { Link } from 'react-router-dom'

const serviceDetails = [
  {
    icon: 'fa-pills',
    title: 'Prescriptions',
    desc: 'We fill prescriptions quickly, accurately, and with care. Our pharmacists review every order for interactions, dosage accuracy, and insurance coverage — and they\'re always available to answer your questions before you leave.',
    points: [
      'Same-day filling for most prescriptions',
      'Easy transfer from any pharmacy — we handle the paperwork',
      'Insurance billing for all major providers',
      'Automatic refill reminders via text or phone',
    ],
    ctaLabel: 'Transfer Your Prescription',
    ctaTo: '/rx-forms',
  },
  {
    icon: 'fa-leaf',
    title: 'Vitamins & Supplements',
    desc: 'Our pharmacist-curated selection of vitamins, minerals, probiotics, and wellness supplements focuses on quality and efficacy. We stock only brands that meet strict third-party testing standards.',
    points: [
      'Pharmacist guidance on supplement interactions',
      'Brands verified for purity and potency',
      'Custom wellness supplement packs available',
      'Discounts for Membership plan holders',
    ],
    ctaLabel: 'See Membership Discounts',
    ctaTo: '/membership',
    reverse: true,
  },
  {
    icon: 'fa-briefcase-medical',
    title: 'Surgical & Medical Supplies',
    desc: 'From post-operative wound care to long-term home health equipment, we stock a wide range of medical-grade supplies. Our staff can help you understand how to use them properly and safely.',
    points: [
      'Wound care, bandages, and dressings',
      'Compression stockings and braces',
      'Blood pressure monitors and glucose meters',
      'Mobility aids and home care equipment',
    ],
    ctaLabel: 'Ask About Supply Needs',
    ctaTo: '/contact',
  },
  {
    icon: 'fa-capsules',
    title: 'Blister Packing',
    desc: 'Managing multiple medications can be confusing and risky. Our blister pack service organizes your pills by day and time in pre-sealed, labeled packs — so you never miss a dose or accidentally double-dose.',
    points: [
      'Weekly or monthly packs available',
      'Ideal for seniors and complex regimens',
      'Reduces medication errors significantly',
      'Free setup for Plus and Premium members',
    ],
    ctaLabel: 'Request Blister Pack Setup',
    ctaTo: '/contact',
    reverse: true,
  },
  {
    icon: 'fa-flask',
    title: 'Medication Flavoring',
    desc: 'For children or adults who have trouble with the taste of liquid medications, our flavoring service can transform an unpleasant experience into a pleasant one — without affecting efficacy.',
    points: [
      '30+ flavor options including fruit and candy varieties',
      'Safe for all ages including infants',
      'Sugar-free and allergen-free options available',
      'Free for Plus and Premium members',
    ],
    ctaLabel: 'Request Flavoring',
    ctaTo: '/contact',
  },
  {
    icon: 'fa-user-nurse',
    title: '1-on-1 Consultations',
    desc: 'Our pharmacists are medication experts and your best resource for questions about drug interactions, side effects, chronic disease management, and wellness optimization. Walk in or text us anytime.',
    points: [
      'In-store private consultation room',
      'Text-based pharmacist access for members',
      'Medication therapy management (MTM)',
      'Chronic disease counseling (diabetes, hypertension)',
    ],
    ctaLabel: 'Book a Consultation',
    ctaTo: '/contact',
    reverse: true,
  },
]

const faqs = [
  { q: 'How do I transfer my prescription?', a: 'Simply bring your current medication bottle to our pharmacy or fill out the online Rx Transfer form. We\'ll contact your previous pharmacy and handle everything — usually within a few hours.' },
  { q: 'Do you accept my insurance?', a: 'We accept most major insurance plans including Medicare Part D, Medicaid, Blue Cross, Aetna, Cigna, UnitedHealth, and many more. Call us to verify your coverage before your first visit.' },
  { q: 'Can I get my prescriptions delivered?', a: 'Yes! We offer free local delivery for Plus and Premium members. Standard delivery is available for all patients for a small fee. Same-day delivery is available within a 5-mile radius.' },
  { q: 'What is medication therapy management?', a: 'MTM is a comprehensive review of all your medications by a pharmacist. We check for interactions, duplications, and opportunities to optimize your regimen — reducing risks and improving outcomes.' },
  { q: 'How long does blister pack setup take?', a: 'Initial setup typically takes 1–2 business days while we coordinate your medication list. After that, your packs are ready for pickup or delivery on a weekly or monthly schedule you choose.' },
  { q: 'Is flavoring safe for all medications?', a: 'Most liquid medications can be flavored safely. Our pharmacists will verify compatibility before adding any flavoring to ensure it won\'t affect the medication\'s stability or effectiveness.' },
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

export default function Services() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="text-white/70 text-sm mb-2">
            <Link to="/" className="text-white/70 hover:text-white no-underline">Home</Link>
            {' / Services'}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-3">Our Services</h1>
          <p className="text-white/80 text-lg max-w-xl">
            Comprehensive pharmacy and wellness services tailored to every stage of your health journey.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-4">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="section-eyebrow">What We Offer</p>
            <h2 className="font-heading text-3xl font-bold text-[#111] mb-4">More Than Just a Prescription</h2>
            <p className="text-[#666] mb-3">
              At HealthPoint, we believe your health deserves more than a quick transaction. Our licensed pharmacists provide expert guidance, personalized care, and a full suite of services designed to keep you well — not just medicated.
            </p>
            <p className="text-[#666] mb-6">
              Whether you&apos;re managing a chronic condition, recovering from surgery, or simply looking to optimize your wellness, we have a service for you.
            </p>
            <Link to="/contact" className="btn-primary">Book a Consultation</Link>
          </div>
          <div className="grid grid-cols-2 gap-5 reveal">
            {[
              { num: '15+', label: 'Years of Service' },
              { num: '5,000+', label: 'Happy Patients' },
              { num: '98%', label: 'Satisfaction Rate' },
              { num: '24hr', label: 'Rx Turnaround' },
            ].map(({ num, label }) => (
              <div key={label} className="bg-primary-light rounded-xl p-6 text-center">
                <span className="font-heading text-3xl font-extrabold text-primary block">{num}</span>
                <span className="font-heading text-xs font-semibold text-[#333] uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="py-20 px-4 bg-[#f5f7fa]">
        <div className="max-w-container mx-auto flex flex-col gap-16">
          {serviceDetails.map(({ icon, title, desc, points, ctaLabel, ctaTo, reverse }) => (
            <div
              key={title}
              className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 items-start reveal`}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center flex-shrink-0">
                <i className={`fas ${icon} text-primary text-2xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-[#111] text-2xl mb-3">{title}</h3>
                <p className="text-[#666] mb-4">{desc}</p>
                <ul className="flex flex-col gap-2 mb-5 p-0">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#333]">
                      <i className="fas fa-check-circle text-primary mt-0.5"></i> {p}
                    </li>
                  ))}
                </ul>
                <Link to={ctaTo} className="btn-outline">{ctaLabel}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">Common Questions</p>
            <h2 className="font-heading text-4xl font-bold text-[#111]">Frequently Asked Questions</h2>
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

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-primary-dark to-primary py-16 px-4">
        <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-2">Ready to experience better pharmacy care?</h2>
            <p className="text-white/80">Transfer your prescriptions today — it&apos;s free and takes less than 5 minutes.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link to="/rx-forms" className="btn-white btn-lg">Transfer My Rx</Link>
            <Link to="/contact" className="btn-outline-white btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
