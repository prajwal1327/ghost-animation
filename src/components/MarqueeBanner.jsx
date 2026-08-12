const ITEMS = [
  'Animation',
  'Motion Design',
  '3D Visuals',
  'Brand Animation',
  'Visual Storytelling',
  'Character Animation',
  'Motion Graphics',
  'VFX',
  'Explainer Video',
  'Creative Direction',
]

function MarqueeTrack() {
  return (
    <div className="marquee-track" aria-hidden>
      {[...ITEMS, ...ITEMS].map((item, i) => (
        <span className="marquee-item" key={i}>
          {item}
          <span className="dot" />
        </span>
      ))}
    </div>
  )
}

export default function MarqueeBanner() {
  return (
    <div className="marquee-wrap" aria-label="Services: Animation, Motion Design and more">
      <MarqueeTrack />
    </div>
  )
}
