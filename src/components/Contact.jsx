import { useEffect, useRef } from 'react'

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.contact-animate').forEach((child, i) => {
            setTimeout(() => {
              child.style.opacity = '1'
              child.style.transform = 'translateY(0)'
            }, i * 100)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const animStyle = {
    opacity: 0,
    transform: 'translateY(40px)',
    transition: 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
  }

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__bg" />

      <div className="contact-animate section-label" style={{ ...animStyle, justifyContent: 'center' }}>
        Get In Touch
      </div>

      <h2 className="contact__title contact-animate" style={animStyle}>
        HAVE AN IDEA?
      </h2>
      <h2 className="contact__subtitle contact-animate" style={animStyle}>
        LET'S MAKE IT MOVE.
      </h2>

      <div className="contact__info contact-animate" style={animStyle}>
        <div className="contact__info-item">
          <span className="contact__info-label">Call Us</span>
          <a href="tel:+918431452860" className="contact__info-value">
            +91 84314 52860
          </a>
        </div>

        <div style={{ width: 1, height: 40, background: 'var(--border)', flexShrink: 0, alignSelf: 'center' }} />

        <div className="contact__info-item">
          <span className="contact__info-label">Email</span>
          <a href="mailto:Shubhamgadge602@gmail.com" className="contact__info-value">
            Shubhamgadge602@gmail.com
          </a>
        </div>
      </div>

      <div className="contact__actions contact-animate" style={animStyle}>
        <a href="mailto:Shubhamgadge602@gmail.com" className="btn-primary" data-cursor-label="EMAIL →">
          Start a Project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <a href="tel:+918431452860" className="btn-secondary" data-cursor-label="CALL →">
          Call Now
          <span className="btn-arrow">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>

        <a href="mailto:Shubhamgadge602@gmail.com" className="btn-secondary" data-cursor-label="EMAIL →">
          Email Us
          <span className="btn-arrow">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </div>

      {/* Decorative large ghost icon */}
      <div style={{
        position: 'absolute',
        bottom: -40,
        right: '5%',
        fontFamily: 'Syne, sans-serif',
        fontSize: 'clamp(120px, 20vw, 280px)',
        fontWeight: 800,
        letterSpacing: '-0.04em',
        color: 'rgba(255,255,255,0.015)',
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 1,
      }} aria-hidden>
        GHOST
      </div>
    </section>
  )
}
