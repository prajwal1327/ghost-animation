import { useEffect, useRef } from 'react'

const STEPS = [
  { num: '01', title: 'Discover', desc: 'We dig into your idea, your audience, and your goals. Understanding comes before creating.' },
  { num: '02', title: 'Concept', desc: 'We turn the idea into a visual direction — moodboards, storyboards, motion references.' },
  { num: '03', title: 'Create', desc: 'Frame by frame. Keyframe by keyframe. The concept becomes a living, moving thing.' },
  { num: '04', title: 'Polish', desc: 'We refine every detail — timing, easing, colour, sound. Perfection lives in the details.' },
  { num: '05', title: 'Deliver', desc: 'We ship something worth remembering — export-ready, on-time, and beyond expectations.' },
]

export default function Process() {
  const stepsRef = useRef(null)

  useEffect(() => {
    const steps = stepsRef.current?.querySelectorAll('.process-step')
    if (!steps) return

    const observers = []
    steps.forEach((step, i) => {
      step.style.opacity = '0'
      step.style.transform = 'translateY(40px)'
      step.style.transition = `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1}s`

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            step.style.opacity = '1'
            step.style.transform = 'translateY(0)'
            obs.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      obs.observe(step)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <section className="section" id="process" style={{ background: 'var(--bg2)' }}>
      <div className="process-header">
        <div>
          <div className="section-label">How We Work</div>
          <h2 className="process-title">
            From Idea<br />
            <span style={{ color: 'var(--accent)' }}>To Motion.</span>
          </h2>
        </div>
        <p className="process-intro">
          Every project follows a deliberate creative process — designed to reduce friction
          and maximise the quality of what we ship together.
        </p>
      </div>

      <div className="process-list" ref={stepsRef}>
        {STEPS.map((step) => (
          <div className="process-step" key={step.num}>
            <div className="process-step__num">{step.num}</div>
            <div className="process-step__title">{step.title}</div>
            <p className="process-step__desc">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <div style={{
        marginTop: 80,
        padding: '48px',
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
      }}>
        <div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Ready to start your project?
          </div>
          <div style={{ fontSize: 15, color: 'var(--text-muted)', marginTop: 8 }}>
            Tell us your idea — we'll take it from concept to final frame.
          </div>
        </div>
        <a
          href="#contact"
          className="btn-primary"
          onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          style={{ flexShrink: 0 }}
        >
          Let's Talk
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
