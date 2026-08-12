import { useRef, useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', service:'', message:'' })

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:Shubhamgadge602@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="section section--grey" id="contact">
      <div style={{ textAlign:'center' }}>
        <div className="pill">Get In Touch</div>
        <h2 className="section-title">
          Contact <span style={{ color:'var(--purple)' }}>Directly</span>
        </h2>
        <p style={{ fontSize:17, color:'var(--text-body)', maxWidth:500, margin:'16px auto 0' }}>
          Have an idea? Let's talk. We'd love to hear about your project and explore how we can bring it to life.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact info */}
        <div>
          <h3 style={{ fontFamily:'Poppins, sans-serif', fontSize:'clamp(22px,2.5vw,30px)', fontWeight:600, color:'var(--black)', marginBottom:8, letterSpacing:'-0.01em' }}>
            Let's Make Something<br />
            <span style={{ color:'var(--purple)' }}>Great Together.</span>
          </h3>
          <p style={{ fontSize:15, color:'var(--text-body)', lineHeight:1.8, marginBottom:32 }}>
            Whether you need a single animation or a full motion campaign — we're ready
            to bring your vision to life, frame by frame.
          </p>

          {[
            { icon:'📞', label:'Phone', val:'+91 84314 52860', href:'tel:+918431452860', bg:'var(--yellow-light)' },
            { icon:'✉️', label:'Email', val:'Shubhamgadge602@gmail.com', href:'mailto:Shubhamgadge602@gmail.com', bg:'var(--purple-light)' },
            { icon:'🎬', label:'Services', val:'Animation, Motion, 3D & More', href:'#services', bg:'var(--green-light)' },
          ].map(({ icon, label, val, href, bg }) => (
            <a
              key={label}
              href={href}
              className="contact-info-item"
              onClick={href.startsWith('#') ? (e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior:'smooth' }) } : undefined}
            >
              <div className="contact-info-icon" style={{ background: bg }}>{icon}</div>
              <div>
                <div className="contact-info-label">{label}</div>
                <div className="contact-info-val">{val}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="contact-form-card">
          <h4 style={{ fontFamily:'Poppins, sans-serif', fontSize:20, fontWeight:600, color:'var(--black)', marginBottom:24 }}>
            Send a Message
          </h4>
          <form onSubmit={handleSubmit}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input className="form-input" type="text" placeholder="Shubham Gadge" required value={form.name} onChange={set('name')} />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input className="form-input" type="email" placeholder="hello@brand.com" required value={form.email} onChange={set('email')} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Service Needed</label>
              <input className="form-input" type="text" placeholder="e.g. Brand Animation, 2D Character, Motion Graphics" value={form.service} onChange={set('service')} />
            </div>
            <div className="form-group">
              <label className="form-label">Your Message</label>
              <textarea className="form-textarea" placeholder="Tell us about your project, timeline and any references..." required value={form.message} onChange={set('message')} />
            </div>
            <button type="submit" className="btn btn-purple" style={{ width:'100%', justifyContent:'center' }}>
              Send Message
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 2L2 7L7 9M14 2L9 14L7 9M14 2L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
