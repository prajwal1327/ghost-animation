import { useEffect, useRef } from 'react'

const STEPS = [
  { num: '01', title: 'Discover',  desc: 'We dig into your idea, your brand, and your audience. Understanding comes before creating.' },
  { num: '02', title: 'Concept',   desc: 'Your idea becomes a visual direction — moodboards, storyboards, and motion references.' },
  { num: '03', title: 'Create',    desc: 'Frame by frame, keyframe by keyframe. The concept becomes a living, moving thing.' },
  { num: '04', title: 'Polish',    desc: 'Every detail refined — timing, easing, colour, sound. Perfection lives in the details.' },
  { num: '05', title: 'Deliver',   desc: 'We ship something worth remembering — export-ready, on-time, beyond expectations.' },
]

export default function Process() {
  const ref = useRef(null)

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.process-card')
    if (!cards) return
    const observers = []
    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(30px)'
      card.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`
      const obs = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { card.style.opacity='1'; card.style.transform='translateY(0)'; obs.disconnect() }
      }, { threshold: 0.1 })
      obs.observe(card)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section className="section" id="process">
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:40, alignItems:'end', marginBottom:0, flexWrap:'wrap' }}>
        <div>
          <div className="pill">How We Work</div>
          <h2 className="section-title">From Idea <span style={{ color:'var(--purple)' }}>To Motion.</span></h2>
        </div>
        <p style={{ fontSize:16, color:'var(--text-body)', lineHeight:1.8, paddingBottom:8 }}>
          Our process is built to reduce friction and maximise the quality of
          what we deliver — every single time.
        </p>
      </div>

      <div className="process-grid" ref={ref}>
        {STEPS.map(({ num, title, desc }) => (
          <div key={num} className="process-card">
            <div className="process-num">{num}</div>
            <div className="process-card-title">{title}</div>
            <p className="process-card-desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
