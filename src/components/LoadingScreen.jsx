import { useEffect, useRef, useState } from 'react'

export default function LoadingScreen({ onComplete }) {
  const loaderRef = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Animate the counter 0 → 100
    let start = null
    const duration = 1800
    const tick = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setCount(Math.floor(progress * 100))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)

    // Exit after bar finishes
    const timer = setTimeout(() => {
      if (loaderRef.current) {
        loaderRef.current.classList.add('exit')
        setTimeout(onComplete, 900)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="loader" ref={loaderRef}>
      <div>
        <div className="loader__logo">
          <span style={{ animationDelay: '0s' }}>
            <span className="accent">G</span>HOST
          </span>
        </div>
        <div className="loader__logo" style={{ marginTop: '-8px' }}>
          <span style={{ animationDelay: '0.12s' }}>ANIMATION</span>
        </div>
        <div className="loader__sub">
          <span>Motion Design Studio</span>
        </div>
      </div>

      <div className="loader__bar-wrap">
        <div className="loader__bar" />
      </div>

      <div className="loader__count">{String(count).padStart(2, '0')}</div>
    </div>
  )
}
