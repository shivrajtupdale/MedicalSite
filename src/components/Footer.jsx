import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-16 pb-0">
      <div className="max-w-container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4 no-underline">
            <span className="text-primary text-2xl leading-none">
              <i className="fas fa-plus-circle"></i>
            </span>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-white text-[15px] leading-tight">HealthPoint</span>
              <span className="font-heading text-[11px] text-white/60">Pharmacy &amp; Wellness</span>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            Your trusted community pharmacy, dedicated to personalized care and your overall wellness.
          </p>
          <div className="flex gap-3">
            {['facebook-f', 'instagram', 'twitter'].map(icon => (
              <a
                key={icon}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-colors no-underline text-sm"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">Services</h4>
          <ul className="flex flex-col gap-2 p-0 m-0">
            {['Prescriptions', 'Vitamins & Supplements', 'Blister Packing', 'Consultations'].map(item => (
              <li key={item}>
                <Link to="/services" className="text-white/60 text-sm hover:text-white transition-colors no-underline">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-2 p-0 m-0">
            {[
              { to: '/about', label: 'About Us' },
              { to: '/membership', label: 'Membership' },
              { to: '/contact', label: 'Contact' },
              { to: '/rx-forms', label: 'Transfer Rx' },
            ].map(link => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/60 text-sm hover:text-white transition-colors no-underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading font-bold text-white text-sm mb-4 uppercase tracking-wider">Hours</h4>
          <ul className="flex flex-col gap-2 p-0 m-0">
            {[
              ['Mon – Fri', '9am – 7pm'],
              ['Saturday', '10am – 5pm'],
              ['Sunday', 'Closed'],
            ].map(([day, hours]) => (
              <li key={day} className="flex justify-between text-sm">
                <span className="text-white/60">{day}</span>
                <span className="text-white font-medium">{hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-white/40 text-xs">
        &copy; 2026 HealthPoint Pharmacy &amp; Wellness. All rights reserved.
      </div>
    </footer>
  )
}
