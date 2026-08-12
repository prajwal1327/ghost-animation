import { useEffect, useRef } from 'react'

const SERVICES = [
  {
    icon: '🎬',
    iconBg: 'service-icon--yellow',
    card: 'service-card--light',
    title: 'Animation',
    desc: 'Bringing your ideas and stories to life through expressive, fluid animation — from character to concept.',
  },
  {
    icon: '⚡',
    iconBg: 'service-icon--purple',
    card: 'service-card--dark',
    title: 'Motion Design',
    desc: 'Dynamic visual systems and motion graphics designed to capture attention and communicate your message instantly.',
  },
  {
    icon: '🌐',
    iconBg: 'service-icon--green',
    card: 'service-card--border',
    title: '3D & Visuals',
    desc: 'Immersive 3D worlds, product visuals and cinematic renders that make your brand impossible to ignore.',
  },
  {
    icon: '🏷️',
    iconBg: 'service-icon--yellow',
    card: 'service-card--border',
    title: 'Brand Animation',
    desc: 'Turning static brand identities into living, breathing motion experiences across every platform.',
  },
  {
    icon: '🎞️',
    iconBg: 'service-icon--purple',
    card: 'service-card--light',
    title: 'Video & Post',
    desc: 'Editing, compositing and visual finishing that elevates every frame from good to unforgettable.',
  },
  {
    icon: '✍️',
    iconBg: 'service-icon--green',
    card: 'service-card--dark',
    title: 'Creative Story',
    desc: 'Concept to final frame — we craft narratives that move audiences emotionally and drive real results.',
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.service-card')
    if (!cards) return
    const observers = []
    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(30px)'
      card.style.transition = `opacity 0.6s ease ${i * 0.08}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.08}s`
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; obs.disconnect() }
      }, { threshold: 0.1 })
      obs.observe(card)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section className="section section--grey" id="services">
      <div style={{ textAlign: 'center' }}>
        <div className="pill">What We Do</div>
        <h2 className="section-title">
          What We <span style={{ color: 'var(--purple)' }}>Make Move</span>
        </h2>
        <p style={{ fontSize: 17, color: 'var(--text-body)', maxWidth: 520, margin: '16px auto 0' }}>
          From a single logo animation to a full brand film — we handle every stage of the motion design process.
        </p>
      </div>

      <div className="services-grid" ref={ref}>
        {SERVICES.map(({ icon, iconBg, card, title, desc }) => (
          <div key={title} className={`service-card ${card}`}>
            <div className={`service-icon ${iconBg}`}>{icon}</div>
            <div className="service-title">{title}</div>
            <p className="service-desc">{desc}</p>
            <div className="service-link">
              Learn More
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
