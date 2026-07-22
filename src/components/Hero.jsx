import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import LottiePlayer from './LottiePlayer'
import developerAnim from '../assets/developer.json'
import scrollAnim from '../assets/Scroll Down.json'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section className="hero section" ref={ref} id="hero" aria-label="Vathsal Vuppala — AI Software Developer">
      <motion.div
        className="container"
        style={{ y, opacity, position: 'relative', zIndex: 1, width: '100%' }}
      >
        <div className="hero-inner">
          {/* ── Left: Text content ── */}
          <div className="hero-text">
            <motion.div
              className="hero-eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="hero-eyebrow-line" />
              <span className="label">AI Software Developer · Hyderabad, India</span>
            </motion.div>

            <motion.h1
              className="display"
              style={{ marginBottom: 24 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vathsal
              <br />
              <span style={{ color: 'var(--text-muted)' }}>Vuppala.</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Building production-grade intelligent systems that think, reason, and act.
              Specializing in LLM-based multi-agent architectures — from training to deployment.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#projects" className="btn btn-primary">View Projects</a>
              <a href="mailto:vathsal14@gmail.com" className="btn btn-ghost">Get in Touch</a>
              <a href="/vuppala_vathsal.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Resume ↓
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              {[
                { num: '1.5+', label: 'Years Experience' },
                { num: '5+', label: 'Production Systems Shipped' },
                { num: '10+', label: 'AI / ML Technologies' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Lottie animation ── */}
          <motion.div
            className="hero-lottie"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            aria-hidden="true"
          >
            <LottiePlayer
              src={developerAnim}
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: 20, left: '50%',
          transform: 'translateX(-50%)', zIndex: 1,
          width: '60px', pointerEvents: 'none'
        }}
      >
        <LottiePlayer src={scrollAnim} style={{ width: '100%', height: 'auto', opacity: 0.7 }} />
      </div>
    </section>
  )
}
