import { useEffect, useRef } from 'react'
import { services } from '../data/projects'

export default function Services() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('.service-item')
    if (!items) return

    const observers = []
    items.forEach((item, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              item.style.opacity = '1'
              item.style.transform = 'translateX(0)'
            }, i * 80)
            obs.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      item.style.opacity = '0'
      item.style.transform = 'translateX(-30px)'
      item.style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
      obs.observe(item)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="section" id="services" ref={sectionRef} style={{ background: 'var(--bg2)' }}>
      <div className="section-label">What We Do</div>
      <h2 className="services-title">
        What We<br />
        <span style={{ color: 'var(--accent)' }}>Make Move</span>
      </h2>

      <div className="service-list">
        {services.map((s) => (
          <div className="service-item" key={s.num} data-cursor-label="LEARN MORE">
            <span className="service-num">{s.num}</span>
            <span className="service-name">{s.name}</span>
            <span className="service-tag">{s.tag}</span>
          </div>
        ))}
      </div>

      {/* Bottom descriptor */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        marginTop: 80,
        paddingTop: 48,
        borderTop: '1px solid var(--border)',
      }}>
        {[
          { title: 'Frame-Perfect Quality', desc: 'Every project delivered at the highest visual standard — no shortcuts.' },
          { title: 'Creative & Strategic', desc: 'We think about why before we think about how. Concept first.' },
          { title: 'Built for Impact', desc: 'Motion designed to stop the scroll, hold attention, and drive action.' },
        ].map(({ title, desc }) => (
          <div key={title}>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: '-0.01em' }}>{title}</div>
            <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7 }}>{desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
