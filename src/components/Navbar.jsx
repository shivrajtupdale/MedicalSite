import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/membership', label: 'Membership' },
  { to: '/rx-forms', label: 'Rx Forms' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav className={`sticky top-0 z-50 bg-white border-b border-gray-100 transition-shadow duration-300 ${scrolled ? 'shadow-card' : ''}`}>
      <div className="max-w-container mx-auto px-4 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-primary text-2xl leading-none">
            <i className="fas fa-plus-circle"></i>
          </span>
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-bold text-[#111] text-[15px] leading-tight">HealthPoint</span>
            <span className="font-heading text-[11px] text-[#666]">Pharmacy &amp; Wellness</span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7 m-0 p-0">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-heading font-semibold text-sm transition-colors no-underline ${
                  location.pathname === link.to
                    ? 'text-primary'
                    : 'text-[#333] hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/rx-forms" className="btn-outline">Transfer Rx</Link>
          <a href="tel:5165051550" className="btn-primary">
            <i className="fas fa-phone"></i> (516) 505-1550
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-0"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-[#333] transition-all"></span>
          <span className="block w-6 h-0.5 bg-[#333] transition-all"></span>
          <span className="block w-6 h-0.5 bg-[#333] transition-all"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading font-semibold text-sm py-3 border-b border-gray-50 no-underline transition-colors ${
                location.pathname === link.to ? 'text-primary' : 'text-[#333]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/rx-forms" className="btn-primary text-center mt-3">
            Transfer Rx
          </Link>
        </div>
      )}
    </nav>
  )
}
