import { Link } from 'react-router-dom'

const values = [
  { icon: 'fa-heart', title: 'Patient First', desc: 'Your health outcomes and experience always take priority. We measure our success by yours.' },
  { icon: 'fa-handshake', title: 'Trust & Transparency', desc: 'We explain everything clearly — costs, side effects, alternatives. No surprises, ever.' },
  { icon: 'fa-award', title: 'Clinical Excellence', desc: 'Our pharmacists stay current with the latest research and guidelines to give you the best care.' },
  { icon: 'fa-users', title: 'Community', desc: 'We\'re your neighbors. We sponsor local health fairs, offer free screenings, and give back every year.' },
  { icon: 'fa-lock', title: 'Privacy & Dignity', desc: 'Your health information is treated with absolute discretion and respect — always.' },
  { icon: 'fa-seedling', title: 'Whole-Person Wellness', desc: 'We look beyond the prescription to support your lifestyle, nutrition, and long-term wellbeing.' },
]

const team = [
  { initials: 'MC', name: 'Dr. Maria Chen, PharmD', role: 'Founder & Chief Pharmacist', bio: '20+ years of clinical pharmacy experience. Specializes in medication therapy management and chronic disease care.', credentials: ['PharmD, RPh', 'MTM Certified'], bg: 'linear-gradient(135deg,#0081d7,#005fa3)' },
  { initials: 'JR', name: 'James Rivera, RPh', role: 'Clinical Pharmacist', bio: 'Specializes in pediatric medications, compounding, and helping families navigate complex medication regimens.', credentials: ['RPh, BS Pharm', 'Compounding Specialist'], bg: 'linear-gradient(135deg,#16a34a,#14532d)' },
  { initials: 'AP', name: 'Aisha Patel, PharmD', role: 'Wellness Pharmacist', bio: 'Focuses on integrative wellness, supplements, and helping patients achieve health goals beyond just their prescriptions.', credentials: ['PharmD, RPh', 'Integrative Health Cert.'], bg: 'linear-gradient(135deg,#7c3aed,#4c1d95)' },
  { initials: 'TK', name: 'Thomas Kim, CPhT', role: 'Lead Pharmacy Technician', bio: '10 years of experience ensuring accurate, efficient prescription processing and exceptional patient service.', credentials: ['CPhT', 'PTCB Certified'], bg: 'linear-gradient(135deg,#dc2626,#7f1d1d)' },
]

const stats = [
  { num: '15+', label: 'Years Serving NYC' },
  { num: '5,000+', label: 'Patients Served' },
  { num: '4', label: 'Licensed Pharmacists' },
  { num: '98%', label: 'Patient Satisfaction' },
]

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section
        className="page-hero"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80')" }}
      >
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="text-white/70 text-sm mb-2">
            <Link to="/" className="text-white/70 hover:text-white no-underline">Home</Link>
            {' / About'}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-3">About Us</h1>
          <p className="text-white/80 text-lg max-w-xl">
            15 years of community-focused pharmacy care — and we&apos;re just getting started.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 px-4">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="about-img-box">
              <div
                className="about-img-inner"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80')" }}
              ></div>
              <div className="about-badge">
                <span className="badge-num">2010</span>
                <span className="badge-text">Est. New York</span>
              </div>
            </div>
          </div>
          <div className="reveal">
            <p className="section-eyebrow">Our Story</p>
            <h2 className="font-heading text-3xl font-bold text-[#111] mb-4">
              Founded on the Belief That Healthcare is Personal
            </h2>
            <p className="text-[#666] mb-4">
              HealthPoint Pharmacy was founded in 2010 by Dr. Maria Chen, a clinical pharmacist who grew frustrated watching patients leave chain pharmacies without truly understanding their medications. She believed pharmacy care should be a conversation, not a transaction.
            </p>
            <p className="text-[#666] mb-4">
              What started as a small storefront in lower Manhattan has grown into a full-service pharmacy and wellness center serving thousands of families. Our team has stayed true to one principle:{' '}
              <strong className="text-[#111]">every patient deserves time, attention, and expertise.</strong>
            </p>
            <p className="text-[#666]">
              Today we offer everything from prescription filling and compounding to one-on-one consultations and wellness memberships — all under one roof, with the personal touch that defines us.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-4 bg-[#f5f7fa]">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">What Drives Us</p>
            <h2 className="font-heading text-4xl font-bold text-[#111] mb-3">Our Core Values</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              Everything we do is guided by these principles — from how we fill prescriptions to how we answer the phone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-7 shadow-card reveal">
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

      {/* TEAM */}
      <section className="py-20 px-4">
        <div className="max-w-container mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="section-eyebrow">The People Behind Your Care</p>
            <h2 className="font-heading text-4xl font-bold text-[#111] mb-3">Meet Our Team</h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              A dedicated group of licensed pharmacists, technicians, and wellness specialists committed to your health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ initials, name, role, bio, credentials, bg }) => (
              <div key={name} className="bg-white rounded-xl shadow-card overflow-hidden reveal">
                <div
                  className="h-28 flex items-center justify-center"
                  style={{ background: bg }}
                >
                  <span className="font-heading font-bold text-white text-3xl">{initials}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-bold text-[#111] text-base mb-0.5">{name}</h3>
                  <p className="text-primary font-semibold text-xs mb-3">{role}</p>
                  <p className="text-[#666] text-xs leading-relaxed mb-3">{bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {credentials.map(c => (
                      <span key={c} className="bg-primary-light text-primary text-xs font-heading font-semibold px-2.5 py-1 rounded-full">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-primary py-14 px-4">
        <div className="max-w-container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ num, label }) => (
            <div key={label} className="text-center reveal">
              <span className="font-heading text-4xl font-extrabold text-white block">{num}</span>
              <span className="font-heading text-xs font-semibold text-white/70 uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="py-20 px-4">
        <div className="max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="section-eyebrow">Giving Back</p>
            <h2 className="font-heading text-3xl font-bold text-[#111] mb-4">Rooted in Our Community</h2>
            <p className="text-[#666] mb-4">
              HealthPoint isn&apos;t just a business — it&apos;s a neighbor. Every year we organize free health screenings, sponsor local school wellness programs, and partner with community clinics to reach underserved populations.
            </p>
            <p className="text-[#666] mb-6">
              We offer a sliding-scale discount program for patients facing financial hardship and work with nonprofit partners to ensure nobody in our community goes without essential medications.
            </p>
            <ul className="flex flex-col gap-2 mb-7 p-0">
              {[
                'Annual free blood pressure & glucose screening events',
                'School wellness education partnership program',
                'Sliding-scale pricing for qualifying patients',
                'Flu shot clinics open to the whole community',
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#333]">
                  <i className="fas fa-check-circle text-primary mt-0.5"></i> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary">Join Our Community</Link>
          </div>
          <div className="reveal">
            <div className="about-img-box">
              <div
                className="about-img-inner"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-dark to-primary py-16 px-4">
        <div className="max-w-container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-white mb-2">Want to become part of the HealthPoint family?</h2>
            <p className="text-white/80">Transfer your prescriptions today or reach out to learn more about our services.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link to="/rx-forms" className="btn-white btn-lg">Transfer My Rx</Link>
            <Link to="/contact" className="btn-outline-white btn-lg">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
