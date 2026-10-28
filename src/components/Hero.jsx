import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight, FiMail, FiFileText } from 'react-icons/fi'
import LottiePlayer from './LottiePlayer'
import developerAnim from '../assets/developer.json'
import { TurningIdeasDoodle, MouseScrollIndicator } from './Doodles'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section className="hero-section" ref={ref} id="hero" aria-label="Hero">
      {/* Background ambient light */}
      <div className="hero-ambient-glow" />

      <motion.div
        className="hero-container"
        style={{ y, opacity, position: 'relative', zIndex: 2 }}
      >
        <div className="hero-grid">
          {/* ── Left: Headline & Content ── */}
          <div className="hero-content">
            {/* Pill Eyebrow */}
            <motion.div
              className="hero-badge-pill"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="badge-dot" />
              <span className="badge-text">AI SOFTWARE DEVELOPER</span>
              <span className="badge-sep">›</span>
              <span className="badge-text">HYDERABAD, INDIA</span>
            </motion.div>

            {/* Headline with Orange Accent */}
            <motion.div
              className="hero-heading-wrapper"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="hero-main-title">
                Vathsal
                <br />
                <span className="text-orange">Vuppala.</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              Building production-grade intelligent systems that think, reason,
              and act. Specializing in LLM-based multi-agent architectures — from
              training to deployment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="hero-button-group"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <a href="#projects" className="btn-hero-dark">
                <span>View Projects</span>
                <FiArrowUpRight size={16} />
              </a>
              <a href="#contact" className="btn-hero-light">
                <FiMail size={15} />
                <span>Get in Touch</span>
              </a>
              <a
                href="/vuppala_vathsal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero-light"
              >
                <FiFileText size={15} />
                <span>Resume ↓</span>
              </a>
            </motion.div>

            {/* Stats Row without any stars or emojis */}
            <motion.div
              className="hero-stats-bar"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              {/* Stat 1 */}
              <div className="stat-unit">
                <div className="stat-number">1.5+</div>
                <div className="stat-title">
                  Years<br />Experience
                </div>
              </div>

              {/* Stat 2 */}
              <div className="stat-unit">
                <div className="stat-number">5+</div>
                <div className="stat-title">
                  Production Systems<br />Shipped
                </div>
              </div>

              {/* Stat 3 */}
              <div className="stat-unit">
                <div className="stat-number">10+</div>
                <div className="stat-title">
                  AI / ML<br />Technologies
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="hero-scroll-col">
                <MouseScrollIndicator />
              </div>
            </motion.div>
          </div>

          {/* ── Right: Illustration + Handwritten Annotation ── */}
          <motion.div
            className="hero-illustration-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          >
            {/* Handwritten note & arrow pointing to developer */}
            <TurningIdeasDoodle
              style={{
                top: '-32px',
                right: '40px',
              }}
            />

            {/* Lottie Animation */}
            <div className="hero-lottie-container">
              <LottiePlayer
                src={developerAnim}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
