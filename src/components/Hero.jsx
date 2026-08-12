import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const actionsRef = useRef(null)
  const parallaxRef = useRef(null)
  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(() => {
    // Stagger word reveals
    const words = titleRef.current?.querySelectorAll('.word')
    if (words) {
      words.forEach((word, i) => {
        setTimeout(() => {
          word.style.transform = 'translateY(0)'
          word.style.opacity = '1'
          word.style.transition = 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease'
        }, 100 + i * 120)
      })
    }

    // Desc and actions fade in
    const descTimer = setTimeout(() => {
      if (descRef.current) {
        descRef.current.style.opacity = '1'
        descRef.current.style.transition = 'opacity 0.8s ease'
      }
    }, 700)

    const actionsTimer = setTimeout(() => {
      if (actionsRef.current) {
        actionsRef.current.style.opacity = '1'
        actionsRef.current.style.transition = 'opacity 0.8s ease'
      }
    }, 950)

    // Parallax on mouse move
    const onMove = (e) => {
      if (!parallaxRef.current) return
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      parallaxRef.current.style.transform = `translate(${dx * 16}px, ${dy * 10}px)`
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      clearTimeout(descTimer)
      clearTimeout(actionsTimer)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-glow" />
      <div className="hero__bg-grid" />

      {/* Left: Typography */}
      <div className="hero__left">
        <div className="hero__eyebrow">
          Ghost Animation Studio
        </div>

        <h1 className="hero__title" ref={titleRef}>
          <span className="line">
            <span className="word">WE</span>&nbsp;
            <span className="word accent">MAKE</span>
          </span>
          <span className="line">
            <span className="word">IDEAS</span>
          </span>
          <span className="line">
            <span className="word outline">MOVE.</span>
          </span>
        </h1>

        <p className="hero__desc" ref={descRef}>
          We are a motion design studio that transforms ideas into cinematic visual
          experiences. Every frame crafted with purpose. Every second designed to
          captivate.
        </p>

        <div className="hero__actions" ref={actionsRef}>
          <button
            className="btn-primary"
            onClick={scrollToWork}
            data-cursor-label="EXPLORE →"
          >
            Explore The Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="btn-secondary"
            onClick={scrollToContact}
            data-cursor-label="TALK →"
          >
            Let's Create
            <span className="btn-arrow">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Right: Brand Image */}
      <div className="hero__right">
        <div className="hero__image-wrap" ref={parallaxRef}>
          <div className="hero__image-ring-2" />
          <div className="hero__image-ring" />
          <div className="hero__image-glow" />

          {/* Floating dots */}
          <div className="hero__float-el" style={{ width: 8, height: 8, top: '10%', right: '5%', background: 'var(--accent)', position: 'absolute', borderRadius: '50%', animation: 'heroFloat 5s ease-in-out infinite' }} />
          <div className="hero__float-el" style={{ width: 5, height: 5, top: '70%', right: '15%', background: 'rgba(202,255,77,0.5)', position: 'absolute', borderRadius: '50%', animation: 'heroFloat 7s ease-in-out 2s infinite' }} />
          <div className="hero__float-el" style={{ width: 3, height: 3, top: '30%', left: '8%', background: 'var(--accent)', position: 'absolute', borderRadius: '50%', animation: 'heroFloat 6s ease-in-out 1s infinite' }} />
          <div className="hero__float-el" style={{ width: 6, height: 6, bottom: '20%', left: '20%', background: 'rgba(255,255,255,0.3)', position: 'absolute', borderRadius: '50%', animation: 'heroFloat 8s ease-in-out 3s infinite' }} />

          <img
            src="/image1.png"
            alt="Ghost Animation — Shubham Gadge, Motion Design Director"
            className={`hero__image${imgLoaded ? ' loaded' : ''}`}
            onLoad={() => setImgLoaded(true)}
            loading="eager"
          />
        </div>

        {/* Stats strip */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {[
            { num: '50+', label: 'Projects' },
            { num: '30+', label: 'Clients' },
            { num: '4+', label: 'Years' },
          ].map(({ num, label }) => (
            <div key={label} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
              padding: '12px 20px',
              textAlign: 'center',
              backdropFilter: 'blur(12px)',
            }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, color: 'var(--accent)' }}>{num}</div>
              <div style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
