import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiFileText,
  FiArrowRight,
  FiCheckCircle,
} from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import LottiePlayer from './LottiePlayer'
import leaningAnim from '../assets/Person Leaning Holding Smartphone.json'

const CONTACT_LINKS = [
  {
    icon: <FiMail size={18} color="#374151" />,
    label: 'Email',
    value: 'vathsal74@gmail.com',
    href: 'mailto:vathsal74@gmail.com',
  },
  {
    icon: <FiLinkedin size={18} color="#374151" />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vathsal-vuppala',
    href: 'https://linkedin.com/in/vathsalvuppala',
  },
  {
    icon: <FiGithub size={18} color="#374151" />,
    label: 'GitHub',
    value: 'github.com/vathsal10',
    href: 'https://github.com/vathsal14',
  },
  {
    icon: <FiFileText size={18} color="#374151" />,
    label: 'Resume',
    value: 'Download PDF',
    href: '/vuppala_vathsal.pdf',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [sent, setSent] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        'service_c8kbvl9',
        'template_6uavkcr',
        e.target,
        'Rd3EXvPlfxF5FUKnh'
      )
      .then(() => {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setIsSending(false)
      })
      .catch((error) => {
        console.error('EmailJS Error:', error)
        alert('Failed to send message. Please try again or reach out directly at vathsal74@gmail.com')
        setIsSending(false)
      })
  }

  return (
    <section className="contact-section" id="contact" aria-label="Contact" ref={ref}>
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-eyebrow">LET'S WORK TOGETHER</div>
            <h2 className="contact-main-title">
              Get In <span className="text-orange">Touch</span>
            </h2>
            <p className="contact-subtitle">
              Always open to discussing AI architecture, freelance engineering
              projects, and innovative technical ideas. Whether it's an uncooked
              product, a computer vision system, or a full-stack AI platform — I'd
              love to hear about what you're building.
            </p>
          </motion.div>
        </div>

        {/* 2-Part Layout: Quick links on left, Form with leaning figure on right */}
        <div className="contact-grid">
          {/* ── Left Column: 4 Contact Link Cards ── */}
          <motion.div
            className="contact-links-column"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-card-link"
              >
                <div className="contact-card-icon-wrap">
                  {link.icon}
                </div>
                <div className="contact-card-info">
                  <div className="contact-card-label">{link.label}</div>
                  <div className="contact-card-value">{link.value}</div>
                </div>
                <div className="contact-card-arrow">
                  <FiArrowRight size={15} />
                </div>
              </a>
            ))}
          </motion.div>

          {/* ── Right Column: Form Card with Leaning Figure attached to its right edge ── */}
          <motion.div
            className="contact-form-column"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="contact-form-with-figure-wrap">
              <div className="contact-form-card">
                {sent ? (
                  <div className="contact-success-state">
                    <FiCheckCircle size={48} color="#10B981" />
                    <h3 className="success-title">Message Sent!</h3>
                    <p className="success-desc">
                      Thank you for reaching out. I will get back to you shortly!
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="btn-send-another"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-actual-form">
                    <input type="hidden" name="from_name" value={form.name} />
                    <input type="hidden" name="from_email" value={form.email} />
                    <input type="hidden" name="reply_to" value={form.email} />

                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="contact-input-field"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="contact-input-field"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="contact-textarea-field"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSending}
                      className="btn-submit-message"
                    >
                      <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                      <FiArrowRight size={15} />
                    </button>
                  </form>
                )}
              </div>

              {/* Figure leaning right on the right edge of the card */}
              <div className="contact-leaning-figure-connected">
                <LottiePlayer
                  src={leaningAnim}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
