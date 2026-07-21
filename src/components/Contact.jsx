import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import LottiePlayer from './LottiePlayer'
import leaningAnim from '../assets/Person Leaning Holding Smartphone.json'
import { FiMail, FiLinkedin, FiGithub, FiFileText } from 'react-icons/fi'

const LINKS = [
  { icon: <FiMail size={18} strokeWidth={2} />, label: 'Email', sub: 'vathsal14@gmail.com', href: 'mailto:vathsal14@gmail.com' },
  { icon: <FiLinkedin size={18} strokeWidth={2} />, label: 'LinkedIn', sub: 'linkedin.com/in/vathsalvuppala', href: 'https://linkedin.com/in/vathsalvuppala' },
  { icon: <FiGithub size={18} strokeWidth={2} />, label: 'GitHub', sub: 'github.com/vathsal14', href: 'https://github.com/vathsal14' },
  { icon: <FiFileText size={18} strokeWidth={2} />, label: 'Resume', sub: 'Download PDF', href: '/vuppala_vathsal.pdf' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    window.open(`mailto:vathsal14@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${message}`)}`)
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div ref={ref} className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <span className="label">Let's Work Together</span>
          <h2 className="heading-xl" style={{ marginTop: 12, marginBottom: 12 }}>Get In Touch</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Always open to discussing AI architecture, freelance engineering projects, and innovative technical ideas.
          </p>
        </motion.div>

        <div className="contact-wrapper">
          <motion.div
            style={{ marginTop: '-50px' }}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: 28 }}>
              Whether it's an LLM-powered product, a computer vision system, or a
              full-stack AI platform — I'd love to hear about what you're building.
            </p>
            <div>
              {LINKS.map((l, i) => (
                <motion.a key={l.label} href={l.href}
                  target={l.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact-link-item"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}>
                  <div className="contact-link-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {l.icon}
                  </div>
                  <div>
                    <div className="contact-link-text">{l.label}</div>
                    <div className="contact-link-sub">{l.sub}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: 'var(--text-muted)', fontSize: '0.9rem' }}>→</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={{ position: 'relative', marginRight: '80px' }}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>

            <div style={{ position: 'absolute', right: '-160px', top: '50%', transform: 'translateY(-50%)', width: '220px', zIndex: 10, pointerEvents: 'none' }}>
              <LottiePlayer src={leaningAnim} style={{ width: '100%', height: 'auto' }} />
            </div>

            {sent ? (
              <div className="card" style={{ textAlign: 'center', padding: '56px 32px' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✓</div>
                <h3 className="heading-md" style={{ marginBottom: 8 }}>Message sent.</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                  I'll get back to you within 24 hours.
                </p>
                <button className="btn btn-ghost" style={{ marginTop: 24 }} onClick={() => setSent(false)}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="card" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                <div className="input-group">
                  <label className="input-label">Name</label>
                  <input className="input-field" type="text" required placeholder="Your name"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label className="input-label">Email</label>
                  <input className="input-field" type="email" required placeholder="your@email.com"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>
                <div className="input-group">
                  <label className="input-label">Message</label>
                  <textarea className="input-field" rows={5} required placeholder="Tell me about your project..."
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 8 }}>
                  Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
