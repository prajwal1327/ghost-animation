import { useEffect, useRef } from 'react'

export default function Hero() {
  const leftRef = useRef(null)

  useEffect(() => {
    const el = leftRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(30px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 200)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      {/* Left — content */}
      <div className="hero-left" ref={leftRef}>
        {/* Floating decorative shapes */}
        <div className="shape hero-shape-1" />
        <div className="shape hero-shape-2" />
        <div className="shape hero-shape-3" />

        <div className="pill">✨ Motion Design Studio</div>

        <h1 className="hero-title">
          Bringing Your<br />
          <span>Ideas</span> To Life<br />
          Through Motion.
        </h1>

        <p className="hero-subtitle">
          We are Ghost Animation — a creative motion design studio that transforms
          ideas into stunning visual experiences. Animation, motion graphics, 3D
          visuals, and brand films that people remember.
        </p>

        <div className="hero-actions">
          <button className="btn btn-purple" onClick={() => scrollTo('work')}>
            Explore Our Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="play-btn" onClick={() => scrollTo('contact')}>
            <span className="play-circle">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 4L14 9L6 14V4Z" fill="#151718"/>
              </svg>
            </span>
            Let's Create
          </button>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {[
            { num: '50+', label: 'Projects Done' },
            { num: '30+', label: 'Happy Clients' },
            { num: '4+',  label: 'Years Active'  },
            { num: '100%', label: 'Client Satisfaction' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="hero-stat-num">{num}</div>
              <div className="hero-stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — purple panel with image */}
      <div className="hero-right">
        <div className="hero-circle-1" />
        <div className="hero-circle-2" />
        <div className="hero-dot-1" />
        <div className="hero-dot-2" />

        <img
          src="/image1.png"
          alt="Shubham Gadge — Founder, Ghost Animation"
          className="hero-img"
          loading="eager"
        />
      </div>
    </section>
  )
}
