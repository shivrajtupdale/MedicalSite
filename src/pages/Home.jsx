import { Link } from 'react-router-dom'
import { useState } from 'react'

const trustItems = [
  { icon: 'fa-user-md', label: 'Licensed Pharmacists' },
  { icon: 'fa-shipping-fast', label: 'Free Local Delivery' },
  { icon: 'fa-comments', label: '1-on-1 Consultations' },
  { icon: 'fa-shield-alt', label: 'Trusted Since 2010' },
]

const services = [
  { icon: 'fa-pills', title: 'Prescriptions', desc: 'Fast, accurate prescription filling with same-day service and easy online transfers from any pharmacy.' },
  { icon: 'fa-leaf', title: 'Vitamins & Supplements', desc: 'Curated selection of high-quality vitamins, minerals, and wellness supplements chosen by our pharmacists.' },
  { icon: 'fa-briefcase-medical', title: 'Surgical Supplies', desc: 'Medical-grade surgical and first-aid supplies for home care and post-operative recovery needs.' },
  { icon: 'fa-capsules', title: 'Blister Packing', desc: 'Organized weekly medication packaging for patients managing multiple daily medications with ease.' },
  { icon: 'fa-flask', title: 'Medication Flavoring', desc: 'Child-friendly flavoring options to make taking medication easier and more pleasant for all ages.' },
  { icon: 'fa-user-nurse', title: '1-on-1 Consultations', desc: 'Private, personalized consultations with our licensed pharmacists — in-store or via text messaging.' },
]

const testimonials = [
  {
    initial: 'S', name: 'Sarah M.', since: 'Patient since 2018',
    text: '"HealthPoint is the only pharmacy that actually calls me to check in. They caught a dangerous drug interaction my doctor missed. Truly above and beyond."',
  },
  {
    initial: 'R', name: 'Robert K.', since: 'Patient since 2015',
    text: '"The blister packing service changed my life. I take 7 different medications and now I never miss a dose. The staff is incredibly patient and kind."',
  },
  {
    initial: 'J', name: 'Jessica T.', since: 'Patient since 2021',
    text: '"My kids used to fight me on taking medicine. The flavoring service has been a game-changer. They actually ask for their meds now!"',
  },
]

export default function Home() {
  const [submitted, setSubmitted] = useState(false)

  function handleContact(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center"
        style={{ background: "url('https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1600&q=80') center/cover no-repeat" }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,50,100,0.55) 100%)' }}></div>
        <div className="relative z-10 max-w-container mx-auto px-4 py-24 text-white">
          <p className="section-eyebrow !text-white/80 reveal">Your Neighborhood Pharmacy</p>
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mt-2 mb-5 leading-tight reveal">
            HealthPoint Pharmacy<br />&amp; Wellness
          </h1>
          <p className="text-lg text-white/80 max-w-xl mb-8 reveal">
            Navigating your health can be overwhelming, which is why our pharmacy isn&apos;t just about filling prescriptions — it&apos;s about fostering a real partnership in your wellness journey.
          </p>
          <div className="flex flex-wrap gap-4 reveal">
            <Link to="/services" className="btn-white btn-lg">Explore Services</Link>
            <Link to="/contact" className="btn-outline-white btn-lg">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-[#111] py-6">
        <div className="max-w-container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-white reveal">
              <i className={`fas ${icon} text-primary text-xl`}></i>
              <span className="font-heading font-semibold text-sm">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-4" id="services">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">What We Offer</p>
            <h2 className="font-heading text-4xl font-bold text-[#111] mb-3">Our Services</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              We go beyond filling prescriptions — we offer a full suite of personalized pharmacy and wellness services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow-card p-8 border border-gray-50 hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 reveal">
                <div className="w-14 h-14 rounded-xl bg-primary-light flex items-center justify-center mb-5">
                  <i className={`fas ${icon} text-primary text-xl`}></i>
                </div>
                <h3 className="font-heading font-bold text-[#111] text-lg mb-2">{title}</h3>
                <p className="text-[#666] text-sm leading-relaxed">{desc}</p>
                <Link to="/services" className="card-link">
                  Learn more <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-4 bg-[#f5f7fa]" id="about">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="about-img-box">
              <div
                className="about-img-inner"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80')" }}
              ></div>
              <div className="about-badge">
                <span className="badge-num">15+</span>
                <span className="badge-text">Years of Care</span>
              </div>
            </div>
          </div>
          <div className="reveal">
            <p className="section-eyebrow">Who We Are</p>
            <h2 className="font-heading text-3xl font-bold text-[#111] mb-4">
              More Than a Pharmacy — A Wellness Partner
            </h2>
            <p className="text-[#666] mb-4">
              At HealthPoint, we believe great healthcare starts with genuine relationships. Our team of licensed pharmacists takes the time to know you, your health history, and your goals.
            </p>
            <p className="text-[#666] mb-6">
              We&apos;ve served our community for over 15 years, offering personalized attention that chain pharmacies simply can&apos;t match. From prescription management to lifestyle advice, we&apos;re with you every step of the way.
            </p>
            <ul className="flex flex-col gap-2 mb-7 p-0">
              {[
                'Personalized medication counseling',
                'Insurance assistance & billing support',
                'Same-day prescription pickup or delivery',
                'Easy prescription transfer — we handle it all',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-[#333] text-sm">
                  <i className="fas fa-check-circle text-primary"></i> {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary">Learn More About Us</Link>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="py-20 px-4" id="membership">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">Join the Family</p>
            <h2 className="font-heading text-4xl font-bold text-[#111] mb-3">Membership Plans</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Unlock exclusive perks and save more on your health with one of our membership tiers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Basic */}
            <div className="bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden reveal">
              <div className="p-7 border-b border-gray-100">
                <h3 className="font-heading font-bold text-[#111] text-xl mb-2">Basic</h3>
                <div className="flex items-end gap-1">
                  <span className="font-heading text-primary text-lg font-bold">$</span>
                  <span className="font-heading text-primary text-4xl font-extrabold leading-none">10</span>
                  <span className="text-[#666] text-sm mb-1">/mo</span>
                </div>
              </div>
              <ul className="p-7 flex flex-col gap-3 m-0">
                {['Text-based pharmacist consultations', '5% discount on supplements', 'Monthly wellness newsletter', 'Priority prescription pickup'].map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#333]">
                    <i className="fas fa-check text-primary mt-0.5"></i> {f}
                  </li>
                ))}
              </ul>
              <div className="px-7 pb-7">
                <Link to="/membership" className="btn-outline btn-full">Get Started</Link>
              </div>
            </div>

            {/* Plus — featured */}
            <div className="bg-primary rounded-xl shadow-card-lg overflow-hidden relative reveal">
              <div className="bg-white/20 text-white text-xs font-heading font-bold uppercase tracking-wider text-center py-2">
                Most Popular
              </div>
              <div className="p-7 border-b border-white/20">
                <h3 className="font-heading font-bold text-white text-xl mb-2">Plus</h3>
                <div className="flex items-end gap-1">
                  <span className="font-heading text-white text-lg font-bold">$</span>
                  <span className="font-heading text-white text-4xl font-extrabold leading-none">15</span>
                  <span className="text-white/70 text-sm mb-1">/mo</span>
                </div>
              </div>
              <ul className="p-7 flex flex-col gap-3 m-0">
                {['Everything in Basic', 'Free medication flavoring', '10% discount on supplements', 'Free blister pack setup', 'Same-day delivery (local)'].map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white">
                    <i className="fas fa-check text-white/80 mt-0.5"></i> {f}
                  </li>
                ))}
              </ul>
              <div className="px-7 pb-7">
                <Link to="/membership" className="btn-white btn-full">Get Started</Link>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-xl shadow-card border border-gray-100 overflow-hidden reveal">
              <div className="p-7 border-b border-gray-100">
                <h3 className="font-heading font-bold text-[#111] text-xl mb-2">Premium</h3>
                <div className="flex items-end gap-1">
                  <span className="font-heading text-primary text-lg font-bold">$</span>
                  <span className="font-heading text-primary text-4xl font-extrabold leading-none">25</span>
                  <span className="text-[#666] text-sm mb-1">/mo</span>
                </div>
              </div>
              <ul className="p-7 flex flex-col gap-3 m-0">
                {['Everything in Plus', 'Unlimited consultations', '15% discount on all products', 'Free surgical supply kit', 'Annual medication review'].map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#333]">
                    <i className="fas fa-check text-primary mt-0.5"></i> {f}
                  </li>
                ))}
              </ul>
              <div className="px-7 pb-7">
                <Link to="/membership" className="btn-outline btn-full">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-4 bg-[#f5f7fa]">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">What People Say</p>
            <h2 className="font-heading text-4xl font-bold text-[#111]">Patient Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ initial, name, since, text }) => (
              <div key={name} className="bg-white rounded-xl shadow-card p-8 reveal">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                  ))}
                </div>
                <p className="text-[#333] text-sm leading-relaxed mb-5">{text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-heading font-bold text-sm">
                    {initial}
                  </div>
                  <div>
                    <strong className="font-heading font-bold text-[#111] text-sm block">{name}</strong>
                    <span className="text-[#666] text-xs">{since}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Info */}
          <div className="reveal">
            <p className="section-eyebrow">Reach Out</p>
            <h2 className="font-heading text-3xl font-bold text-[#111] mb-4">Get in Touch</h2>
            <p className="text-[#666] mb-7">
              Have questions about your prescriptions or want to transfer from another pharmacy? We make it easy.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: 'fa-map-marker-alt', label: 'Address', value: '123 Wellness Ave, New York, NY 10001' },
                { icon: 'fa-phone', label: 'Phone', value: '(516) 505-1550', href: 'tel:5165051550' },
                { icon: 'fa-envelope', label: 'Email', value: 'info@healthpointrx.com', href: 'mailto:info@healthpointrx.com' },
                { icon: 'fa-clock', label: 'Hours', value: 'Mon–Fri: 9am–7pm | Sat: 10am–5pm' },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${icon} text-primary`}></i>
                  </div>
                  <div>
                    <strong className="font-heading font-bold text-[#111] text-sm block">{label}</strong>
                    {href ? (
                      <a href={href} className="text-[#666] text-sm hover:text-primary transition-colors no-underline">{value}</a>
                    ) : (
                      <span className="text-[#666] text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-card p-8 reveal">
            <form className="contact-form" onSubmit={handleContact}>
              <h3 className="font-heading font-bold text-[#111] text-xl mb-6">Send Us a Message</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">First Name</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div>
                  <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">Last Name</label>
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>
              <div className="mb-4">
                <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="mb-4">
                <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">Subject</label>
                <select>
                  <option>Prescription Transfer</option>
                  <option>General Inquiry</option>
                  <option>Membership</option>
                  <option>Consultation Request</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">Message</label>
                <textarea rows="4" placeholder="How can we help you?"></textarea>
              </div>
              <button
                type="submit"
                className={`btn btn-full ${submitted ? 'bg-green-600 border-green-600 text-white' : 'btn-primary'}`}
                disabled={submitted}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
              <p className="text-center text-xs text-[#666] mt-3">
                <i className="fas fa-lock mr-1"></i> Your information is always kept private and secure.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
