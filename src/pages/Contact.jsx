import { useState } from 'react'
import { Link } from 'react-router-dom'

const contactDetails = [
  { icon: 'fa-map-marker-alt', label: 'Address', value: '123 Wellness Ave, New York, NY 10001' },
  { icon: 'fa-phone', label: 'Phone', value: '(516) 505-1550', href: 'tel:5165051550' },
  { icon: 'fa-fax', label: 'Fax (for providers)', value: '(516) 505-1551' },
  { icon: 'fa-envelope', label: 'Email', value: 'info@healthpointrx.com', href: 'mailto:info@healthpointrx.com' },
  { icon: 'fa-clock', label: 'Hours', value: 'Mon–Fri: 9am–7pm\nSaturday: 10am–5pm\nSunday: Closed', multi: true },
]

const quickActions = [
  { icon: 'fa-exchange-alt', title: 'Transfer a Prescription', desc: 'Moving from another pharmacy? We make it easy.', label: 'Start transfer', to: '/rx-forms' },
  { icon: 'fa-sync-alt', title: 'Request a Refill', desc: 'Submit a refill request online and we\'ll have it ready.', label: 'Request refill', to: '/rx-forms' },
  { icon: 'fa-user-plus', title: 'New Patient Forms', desc: 'First time here? Complete intake forms in advance.', label: 'Fill out forms', to: '/rx-forms' },
  { icon: 'fa-star', title: 'Join Membership', desc: 'Save more and get closer access to our pharmacists.', label: 'View plans', to: '/membership' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <>
      {/* PAGE HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&q=80')" }}
      >
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="text-white/70 text-sm mb-2">
            <Link to="/" className="text-white/70 hover:text-white no-underline">Home</Link>
            {' / Contact'}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-3">Get in Touch</h1>
          <p className="text-white/80 text-lg max-w-xl">
            We&apos;re here to help. Reach out with questions, transfers, or just to say hello.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Info */}
          <div className="reveal">
            <p className="section-eyebrow">Contact Information</p>
            <h2 className="font-heading text-3xl font-bold text-[#111] mb-4">We&apos;d Love to Hear From You</h2>
            <p className="text-[#666] mb-7">
              Whether you want to transfer a prescription, ask about a medication, inquire about membership, or just have a health question — our team is ready to help.
            </p>
            <div className="flex flex-col gap-5 mb-7">
              {contactDetails.map(({ icon, label, value, href, multi }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center flex-shrink-0">
                    <i className={`fas ${icon} text-primary`}></i>
                  </div>
                  <div>
                    <strong className="font-heading font-bold text-[#111] text-sm block">{label}</strong>
                    {href ? (
                      <a href={href} className="text-[#666] text-sm hover:text-primary transition-colors no-underline">{value}</a>
                    ) : multi ? (
                      <span className="text-[#666] text-sm whitespace-pre-line">{value}</span>
                    ) : (
                      <span className="text-[#666] text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="map-box">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1000000000000"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="HealthPoint location"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-card p-8 reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="font-heading font-bold text-[#111] text-xl mb-6">Send Us a Message</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">First Name *</label>
                  <input type="text" placeholder="John" required />
                </div>
                <div>
                  <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">Last Name *</label>
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>
              <div className="mb-4">
                <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">Email Address *</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="mb-4">
                <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">Phone Number</label>
                <input type="tel" placeholder="(555) 000-0000" />
              </div>
              <div className="mb-4">
                <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">Subject *</label>
                <select required defaultValue="">
                  <option value="" disabled>Select a topic</option>
                  <option>Prescription Transfer</option>
                  <option>Prescription Refill</option>
                  <option>General Inquiry</option>
                  <option>Membership Sign-up</option>
                  <option>Consultation Request</option>
                  <option>Insurance / Billing</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="font-heading font-semibold text-xs text-[#333] block mb-1.5">Message *</label>
                <textarea rows="5" placeholder="How can we help you today?" required></textarea>
              </div>
              <div className="mb-5">
                <label className="checkbox-label">
                  <input type="checkbox" required />
                  <span className="text-xs text-[#666]">I consent to being contacted by HealthPoint Pharmacy about my inquiry.</span>
                </label>
              </div>
              <button
                type="submit"
                className={`btn btn-full ${submitted ? 'bg-green-600 border-green-600 text-white' : 'btn-primary'}`}
                disabled={submitted}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
              <p className="text-center text-xs text-[#666] mt-3">
                <i className="fas fa-lock mr-1"></i> Your information is always kept private and HIPAA-compliant.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="py-20 px-4 bg-[#f5f7fa]">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">Quick Actions</p>
            <h2 className="font-heading text-4xl font-bold text-[#111]">Need Something Specific?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickActions.map(({ icon, title, desc, label, to }) => (
              <Link
                key={title}
                to={to}
                className="bg-white rounded-xl shadow-card p-6 hover:shadow-card-lg hover:-translate-y-1 transition-all duration-300 no-underline reveal"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                  <i className={`fas ${icon} text-primary text-xl`}></i>
                </div>
                <h3 className="font-heading font-bold text-[#111] text-base mb-1">{title}</h3>
                <p className="text-[#666] text-sm mb-3">{desc}</p>
                <span className="text-primary font-heading font-semibold text-sm flex items-center gap-1">
                  {label} <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
