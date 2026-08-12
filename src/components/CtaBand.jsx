export default function CtaBand() {
  return (
    <div className="cta-band">
      <div className="cta-band-bg" />
      <div className="cta-band-bg-2" />

      <h2 className="cta-band-title">
        Think. <span>Create.</span><br />
        Make It Move.
      </h2>

      <div style={{ display:'flex', flexDirection:'column', gap:16, alignItems:'flex-start', position:'relative', zIndex:1 }}>
        <button
          className="btn btn-white"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior:'smooth' })}
        >
          Start a Project
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <a href="tel:+918431452860" style={{ fontSize:14, color:'rgba(255,255,255,0.7)', marginLeft:8 }}>
          📞 +91 84314 52860
        </a>
      </div>
    </div>
  )
}
