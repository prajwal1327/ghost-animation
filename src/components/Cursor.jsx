import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const [label, setLabel] = useState('')
  const [expanded, setExpanded] = useState(false)
  const rafId = useRef(null)

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
      if (labelRef.current) {
        labelRef.current.style.left = e.clientX + 'px'
        labelRef.current.style.top = e.clientY + 'px'
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1)
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1)
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    // Interactive element detection
    const onEnter = (e) => {
      const el = e.currentTarget
      const lbl = el.dataset.cursorLabel || ''
      setLabel(lbl)
      setExpanded(true)
    }
    const onLeave = () => {
      setLabel('')
      setExpanded(false)
    }

    const interactives = document.querySelectorAll(
      'a, button, [data-cursor], .work-item, .service-item, .process-step'
    )
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    window.addEventListener('mousemove', onMove)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null
  }

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className={`cursor-ring${expanded ? ' expanded' : ''}`} ref={ringRef} />
      <div className={`cursor-label${label ? ' visible' : ''}`} ref={labelRef}>
        {label}
      </div>
    </>
  )
}
