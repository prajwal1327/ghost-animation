import { useEffect, useRef } from 'react'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const children = el.querySelectorAll('.reveal')
    const observers = []
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.12}s`
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { child.classList.add('visible'); obs.disconnect() }
      }, { threshold: 0.15 })
      obs.observe(child)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section className="section section--grey" id="about" ref={ref}>
      <div className="about-grid">
        {/* Image */}
        <div className="reveal">
          <div className="about-img-wrap">
            {/* Subtle decorative circles inside purple panel */}
            <div style={{ position:'absolute', top:-40, right:-40, width:180, height:180, border:'30px solid rgba(255,255,255,0.08)', borderRadius:'50%' }} />
            <div style={{ position:'absolute', bottom:-50, left:-50, width:200, height:200, border:'35px solid rgba(255,255,255,0.05)', borderRadius:'50%' }} />

            <img
              src="/image1.png"
              alt="Shubham Gadge — Founder & Creative Director, Ghost Animation"
              className="about-img"
              loading="lazy"
            />

            <div className="about-img-badge">
              <div className="about-img-badge-dot" />
              <div className="about-img-badge-text">Available for Projects</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="reveal pill">Who We Are</div>

          <h2 className="about-title reveal">
            Get the Best <span>Digital</span> Motion Experience
          </h2>

          <p className="about-desc reveal">
            Ghost Animation is a creative motion design studio built for brands that
            have something to say. We believe every idea deserves to move — to breathe,
            to tell its story, and to leave a lasting mark on the people who see it.
          </p>

          <p className="about-desc reveal">
            From concept to final frame, we partner with brands, agencies, and creators
            to produce animation and motion work that isn't just beautiful — it's strategic,
            purposeful, and built to perform.
          </p>

          <div className="about-stats reveal">
            {[
              { num: '50+', label: 'Projects Delivered' },
              { num: '30+', label: 'Happy Clients' },
              { num: '4+',  label: 'Years of Motion' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div className="about-stat-num">{num}</div>
                <div className="about-stat-label">{label}</div>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button
              className="btn btn-purple"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
            </button>
            <a href="mailto:Shubhamgadge602@gmail.com" className="btn btn-outline">
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
