import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 400)
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="accent">Ghost</span>
          <span style={{ marginLeft: 2 }}>Animation</span>
        </a>

        <ul className="nav__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={(e) => { e.preventDefault(); handleNavClick(href) }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="nav__cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            >
              Let's Create
            </a>
          </li>
        </ul>

        <button
          className={`nav__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul className="mobile-menu__links">
          {[...NAV_LINKS, { label: 'Contact', href: '#contact' }].map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
              >
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__footer">
          <span>+91 84314 52860</span>
          <span>Shubhamgadge602@gmail.com</span>
        </div>
      </div>
    </>
  )
}
