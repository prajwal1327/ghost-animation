import { useEffect, useRef, useState } from 'react'

export default function About() {
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    const els = [imageRef.current, contentRef.current]
    const observers = els.map((el, i) => {
      if (!el) return null
      el.style.opacity = '0'
      el.style.transform = i === 0 ? 'translateX(-40px)' : 'translateX(40px)'
      el.style.transition = `opacity 0.9s ease ${i * 0.15}s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translateX(0)'
            obs.disconnect()
          }
        },
        { threshold: 0.2 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach((o) => o?.disconnect())
  }, [])

  return (
    <section className="section" id="about" style={{ background: 'var(--bg)' }}>
      <div className="section-label">Who We Are</div>
      <div className="about-grid">
        {/* Image column */}
        <div className="about__image-wrap" ref={imageRef}>
          <div className="about__image-frame">
            <div className="about__image-tag">Ghost Animation</div>
            <img
              src="/image1.png"
              alt="Shubham Gadge — Founder & Creative Director, Ghost Animation"
              className="about__image"
              onLoad={() => setImgLoaded(true)}
              loading="lazy"
            />
            <div className="about__image-accent" />

            {/* Floating badge */}
            <div style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              padding: '16px 20px',
            }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 13, fontWeight: 700, color: 'var(--accent)', marginBottom: 4 }}>
                Available for Projects
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                Let's build something great
              </div>
            </div>
          </div>
        </div>

        {/* Content column */}
        <div className="about__content" ref={contentRef}>
          <h2 className="about__title">
            Who's Behind<br />
            <span style={{ color: 'var(--accent)' }}>The Motion?</span>
          </h2>

          <p className="about__desc">
            Ghost Animation is a motion design studio built for brands that have something
            to say. We believe static is boring — every idea deserves to move, breathe,
            and leave a mark.
          </p>

          <p className="about__desc" style={{ marginTop: -16 }}>
            From 2D animation and motion graphics to 3D visuals and brand campaigns — we
            craft visual experiences that people watch twice. Not because they have to,
            because they want to.
          </p>

          <div className="about__stats">
            {[
              { num: '50', unit: '+', label: 'Projects Delivered' },
              { num: '30', unit: '+', label: 'Happy Clients' },
              { num: '4', unit: '+', label: 'Years Active' },
            ].map(({ num, unit, label }) => (
              <div key={label}>
                <div className="about__stat-num">
                  {num}<span className="accent">{unit}</span>
                </div>
                <div className="about__stat-label">{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#contact"
              className="btn-primary"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Start a Project
            </a>
            <a
              href="mailto:Shubhamgadge602@gmail.com"
              className="btn-secondary"
            >
              Say Hello
              <span className="btn-arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
