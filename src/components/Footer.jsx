const YEAR = new Date().getFullYear()

const go = (href) => {
  if (href.startsWith('#')) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        {/* Brand */}
        <div>
          <div className="footer-logo">
            <span className="footer-logo-icon">👻</span>
            Ghost<span style={{ color:'var(--purple)' }}>Animation</span>
          </div>
          <p className="footer-tagline">
            We turn ideas into motion. Premium animation, motion design, and visual
            storytelling — built frame by frame.
          </p>
          <div style={{ display:'flex', gap:12 }}>
            {['🎬','📸','🎵'].map((icon, i) => (
              <div key={i} style={{
                width:40, height:40, background:'rgba(255,255,255,0.06)',
                borderRadius:10, display:'flex', alignItems:'center',
                justifyContent:'center', fontSize:18, cursor:'pointer',
                transition:'background 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background='var(--purple)'}
              onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.06)'}
              >{icon}</div>
            ))}
          </div>
        </div>

        {/* Nav links */}
        <div>
          <div className="footer-col-title">Quick Links</div>
          <ul className="footer-links">
            {[
              { label:'Home', href:'#hero' },
              { label:'Our Work', href:'#work' },
              { label:'Services', href:'#services' },
              { label:'About Us', href:'#about' },
              { label:'Process', href:'#process' },
              { label:'Contact', href:'#contact' },
            ].map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={e => { e.preventDefault(); go(href) }}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="footer-col-title">Get In Touch</div>
          <div className="footer-contact">
            <a href="tel:+918431452860">📞 +91 84314 52860</a>
            <a href="mailto:Shubhamgadge602@gmail.com">✉️ Shubhamgadge602@gmail.com</a>
            <a href="#contact" onClick={e => { e.preventDefault(); go('#contact') }}>🚀 Start a Project</a>
          </div>
          <div style={{ marginTop:24 }}>
            <div className="footer-col-title" style={{ marginBottom:12 }}>Services</div>
            {['Animation', 'Motion Design', '3D Visuals', 'Brand Films', 'Explainer Video'].map(s => (
              <div key={s} style={{ fontSize:13, color:'rgba(255,255,255,0.4)', marginBottom:6 }}>— {s}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© {YEAR} Ghost Animation. All rights reserved.</span>
        <span className="footer-made">Made with <span>♥</span> and Motion.</span>
      </div>
    </footer>
  )
}
