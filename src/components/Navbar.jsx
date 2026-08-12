import { useState, useEffect } from 'react'

const LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const go = (href) => {
    setMenuOpen(false)
    setActive(href)
    setTimeout(() => {
      const id = href.replace('#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); go('#hero') }}>
          <span className="nav-logo-icon">👻</span>
          Ghost<span style={{ color: 'var(--purple)' }}>Animation</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href ? 'active' : ''}
                onClick={e => { e.preventDefault(); go(href) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="nav-right">
          <a
            href="#contact"
            className="nav-contact"
            onClick={e => { e.preventDefault(); go('#contact') }}
          >
            Let's Talk
          </a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        <ul>
          {LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} onClick={e => { e.preventDefault(); go(href) }}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="mobile-nav-footer">
          <a href="tel:+918431452860">📞 +91 84314 52860</a>
          <a href="mailto:Shubhamgadge602@gmail.com">✉️ Shubhamgadge602@gmail.com</a>
        </div>
      </div>
    </>
  )
}
