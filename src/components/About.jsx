import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CHIPS = [
  { icon: '📍', text: 'Hyderabad, India' },
  { icon: '📧', text: 'vathsal14@gmail.com' },
  { icon: '📞', text: '+91 87904 23358' },
]

const TAGS = ['Multi-Agent AI', 'LLM Deployment', 'RAG Systems', 'Full-Stack', 'Computer Vision', 'Clinical AI']

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="about" aria-label="About Vathsal Vuppala" ref={ref}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>

          {/* Monogram block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}>
            <div className="about-image-wrapper">
              <img src="/image.png" alt="Vathsal Vuppala — AI Software Developer based in Hyderabad, India" className="about-image" loading="lazy" />
            </div>

            <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {CHIPS.map(c => (
                <span key={c.text} className="tag" style={{ fontSize: '0.72rem', padding: '5px 12px' }}>
                  {c.icon}&nbsp;{c.text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <span className="label" style={{ display: 'block', marginBottom: 14 }}>Who I am</span>
              <h2 className="heading-xl" style={{ marginBottom: 8 }}>
                Building AI that actually ships
              </h2>
              <div style={{ width: 40, height: 2, background: 'var(--border-strong)', marginBottom: 28 }} />
            </div>

            <p className="about-highlight">
              I'm an <strong>AI Software Developer</strong> with 1.5+ years designing and shipping
              production-grade intelligent systems — from model training and inference APIs
              to full-stack front-end interfaces.
            </p>
            <p className="about-highlight">
              My expertise spans <strong>LLM-based multi-agent architectures</strong>, agentic workflow
              design (LLaMA, Mistral, LangChain), and end-to-end full-stack AI platforms
              across clinical AI and ed-tech domains.
            </p>
            <p className="about-highlight">
              I care deeply about systems that are <strong>reliable, maintainable, and built for scale</strong> —
              not just demos.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {TAGS.map(t => (
                <span key={t} className="tag tag-outline">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
