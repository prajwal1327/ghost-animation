const YEAR = new Date().getFullYear()

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleClick = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="footer__inner">
        {/* Brand */}
        <div>
          <div className="footer__logo">
            <span className="accent">Ghost</span>Animation
          </div>
          <div className="footer__tagline">Made With Motion.</div>
        </div>

        {/* Nav */}
        <nav className="footer__links" aria-label="Footer navigation">
          {LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => { e.preventDefault(); handleClick(href) }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end' }}>
          <a
            href="mailto:Shubhamgadge602@gmail.com"
            className="footer__links"
            style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Shubhamgadge602@gmail.com
          </a>
          <a
            href="tel:+918431452860"
            className="footer__links"
            style={{ display: 'block', fontSize: 13, color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            +91 84314 52860
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        borderTop: '1px solid var(--border)',
        marginTop: 24,
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <span className="footer__copy">© {YEAR} Ghost Animation. All rights reserved.</span>
        <span className="footer__copy">Animation. Motion. Stories.</span>
      </div>
    </footer>
  )
}
