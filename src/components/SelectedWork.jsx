import { useEffect, useRef } from 'react'

const PROJECTS = [
  { id: 1, cat: '2D Animation',       title: 'Phantom Rebrand',   gc: 'gc-1', year: '2024' },
  { id: 2, cat: 'Motion Graphics',    title: 'Kinetic Pulse',     gc: 'gc-2', year: '2024' },
  { id: 3, cat: '3D Motion',          title: 'Orbit 3D',          gc: 'gc-3', year: '2024' },
  { id: 4, cat: 'Brand Animation',    title: 'Dream Sequence',    gc: 'gc-4', year: '2024' },
  { id: 5, cat: 'Character Animation',title: 'Frame Perfect',     gc: 'gc-5', year: '2023' },
  { id: 6, cat: 'Visual Storytelling',title: 'Static No More',    gc: 'gc-6', year: '2023' },
]

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 13L13 3M13 3H5M13 3V11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function SelectedWork() {
  const ref = useRef(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.work-card')
    if (!cards) return
    const observers = []
    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(40px)'
      card.style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1}s`
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; obs.disconnect() }
      }, { threshold: 0.1 })
      obs.observe(card)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section className="section" id="work">
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 0 }}>
        <div>
          <div className="pill">Our Portfolio</div>
          <h2 className="section-title">
            Selected <span style={{ color: 'var(--purple)' }}>Work</span>
          </h2>
        </div>
        <p style={{ fontSize: 15, color: 'var(--text-body)', maxWidth: 360, paddingBottom: 8 }}>
          A curated selection of projects we're proud to have made move.
        </p>
      </div>

      <div className="work-grid" ref={ref}>
        {PROJECTS.map(({ id, cat, title, gc, year }) => (
          <div key={id} className="work-card">
            <div className="work-card-thumb">
              <div className={`work-card-thumb-bg ${gc}`} style={{ position: 'absolute', inset: 0 }} />
              <div className="work-card-link"><ArrowIcon /></div>
              {/* Frame number overlay */}
              <div style={{
                position: 'absolute', bottom: 16, left: 16,
                fontFamily: 'Poppins, sans-serif', fontSize: 11,
                fontWeight: 700, letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.5)'
              }}>
                {String(id).padStart(2,'0')} / {String(PROJECTS.length).padStart(2,'0')}
              </div>
              <div style={{
                position: 'absolute', bottom: 16, right: 52,
                fontFamily: 'Poppins, sans-serif', fontSize: 11,
                fontWeight: 500, color: 'rgba(255,255,255,0.5)'
              }}>{year}</div>
            </div>
            <div className="work-card-body">
              <div className="work-card-cat">{cat}</div>
              <div className="work-card-title">{title}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <button className="btn btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
          Start Your Project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
