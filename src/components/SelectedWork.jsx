import { useEffect, useRef } from 'react'
import { projects } from '../data/projects'

function WorkItem({ project, index }) {
  const itemRef = useRef(null)

  useEffect(() => {
    const el = itemRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={itemRef}
      className="work-item"
      data-cursor-label="VIEW PROJECT"
      style={{
        opacity: 0,
        transform: 'translateY(50px)',
        transition: `opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`,
      }}
    >
      {/* Gradient BG */}
      <div className={`work-item__bg ${project.gradient}`}>
        {/* Decorative shapes */}
        {project.shapes.map((s, i) => (
          <div
            key={i}
            className="proj-shape"
            style={{
              width: s.size,
              height: s.size,
              left: s.x,
              top: s.y,
              background: s.color,
              transform: `translate(-50%, -50%)`,
              filter: 'blur(80px)',
            }}
          />
        ))}
        {/* Subtle grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Frame number */}
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          fontFamily: 'Syne, sans-serif',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.15em',
          color: 'rgba(255,255,255,0.25)',
        }}>
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="work-item__overlay" />

      <div className="work-item__content">
        <div className="work-item__category">{project.category}</div>
        <div className="work-item__name">{project.name}</div>
        <div className="work-item__year">{project.year}</div>
      </div>
    </div>
  )
}

export default function SelectedWork() {
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" id="work">
      <div
        ref={headerRef}
        className="work-header"
        style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
      >
        <div>
          <div className="section-label">Selected Work</div>
          <h2 className="work-title">
            A Few Things<br />
            <span style={{ color: 'var(--accent)' }}>We've Made</span> Move.
          </h2>
        </div>
        <div className="work-count">({String(projects.length).padStart(2, '0')}) Projects</div>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <WorkItem key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
