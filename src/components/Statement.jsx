import { useEffect, useRef } from 'react'

const WORDS = [
  { text: 'EVERY', highlight: false },
  { text: 'FRAME', highlight: true },
  { text: 'HAS', highlight: false },
  { text: 'A', highlight: false },
  { text: 'STORY.', highlight: false },
]

const LINE_2 = [
  { text: 'WE', highlight: false },
  { text: "DON'T", highlight: false },
  { text: 'JUST', highlight: false },
  { text: 'CREATE', highlight: true },
  { text: 'VISUALS.', highlight: false },
]

const LINE_3 = [
  { text: 'WE', highlight: false },
  { text: 'CREATE', highlight: false },
  { text: 'MOMENTS', highlight: true },
  { text: 'PEOPLE', highlight: false },
  { text: 'REMEMBER.', highlight: false },
]

function WordReveal({ words }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animated')
          el.querySelectorAll('.word span').forEach((span, i) => {
            span.style.transitionDelay = `${i * 0.08}s`
          })
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="statement__text" ref={ref}>
      {words.map(({ text, highlight }, i) => (
        <span key={i} className="word" style={{ color: highlight ? 'var(--accent)' : undefined }}>
          <span>{text}</span>
        </span>
      ))}
    </div>
  )
}

export default function Statement() {
  return (
    <section className="statement">
      <div className="statement__bg-text" aria-hidden>GHOST</div>

      <div className="section-label" style={{ marginBottom: 48 }}>Our Philosophy</div>

      <WordReveal words={WORDS} />

      <div style={{ marginTop: 24 }}>
        <WordReveal words={LINE_2} />
      </div>

      <div style={{ marginTop: 24 }}>
        <WordReveal words={LINE_3} />
      </div>

      <p className="statement__sub" style={{ marginTop: 60 }}>
        Static is only the starting point. Motion is where stories come alive — where brands
        become experiences and ideas become something people feel.
      </p>

      {/* Accent line */}
      <div style={{
        width: 80,
        height: 2,
        background: 'var(--accent)',
        marginTop: 40,
        borderRadius: 1,
      }} />
    </section>
  )
}
