const ITEMS = [
  '2D Animation', '3D Motion', 'Motion Graphics', 'Brand Films',
  'Visual Storytelling', 'Character Animation', 'VFX', 'Explainer Video',
  'Creative Direction', 'Concept to Frame',
]

function Track() {
  const all = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-track">
      {all.map((item, i) => (
        <span className="marquee-item" key={i}>
          {item}
          <span className="star">★</span>
        </span>
      ))}
    </div>
  )
}

export default function MarqueeBanner() {
  return (
    <div className="marquee-section" aria-label="Our services">
      <Track />
    </div>
  )
}
