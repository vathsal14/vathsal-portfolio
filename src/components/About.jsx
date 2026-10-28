import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import { SameDriveDoodle } from './Doodles'

const CONTACT_PILLS = [
  { icon: <FiMapPin size={12} color="#FF5E2B" />, text: 'Hyderabad, India' },
  { icon: <FiMail size={12} color="#3B82F6" />, text: 'vathsal74@gmail.com' },
  { icon: <FiPhone size={12} color="#FF5E2B" />, text: '+91 97008 20023' },
]

const EXPERTISE_TAGS = [
  'LLM / Agentic AI',
  'RAG',
  'Multi-agent',
  'Cloud Systems',
  'Full Stack',
  'Computer Vision',
  'Clinical AI',
  'EdTech',
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="about-section" id="about" aria-label="About Me" ref={ref}>
      <div className="about-container">
        <div className="about-grid">
          {/* ── Left Column: Profile Card ── */}
          <motion.div
            className="about-image-column"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="about-card-wrapper">
              {/* Main Photo Card */}
              <div className="about-profile-card">
                <div className="profile-img-container">
                  <img
                    src="/image.png"
                    alt="Vathsal Vuppala"
                    className="about-profile-img"
                    loading="lazy"
                  />
                </div>

                {/* Contact quick chips */}
                <div className="about-chips-row">
                  {CONTACT_PILLS.map((chip) => (
                    <div key={chip.text} className="about-chip-pill">
                      <span className="chip-icon">{chip.icon}</span>
                      <span className="chip-text">{chip.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Text & Tags ── */}
          <motion.div
            className="about-text-column"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Eyebrow */}
            <div className="about-eyebrow">ABOUT ME</div>

            {/* Heading with handwritten note */}
            <div className="about-heading-row">
              <h2 className="about-main-title">
                Building AI that
                <br />
                actually <span className="text-orange">ships</span>
              </h2>

              <SameDriveDoodle
                style={{
                  top: '-18px',
                  right: '10px',
                }}
              />
            </div>

            {/* Paragraphs */}
            <div className="about-body-text">
              <p>
                I'm an <strong>AI Software Developer</strong> with 1.5+ years designing and
                deploying production-grade intelligent systems — from model training
                and inference APIs to full-stack frontends and interfaces.
              </p>
              <p>
                My expertise spans <strong>LLM-based multi-agent architectures</strong>, agentic
                workflow design (LLMs, RAGs, LangChain), and end-to-end full-stack AI platforms
                across clinical AI and ed-tech domains.
              </p>
              <p>
                I care about AI that creates real user value — <strong>reliable, maintainable,
                and built for scale</strong> — not just demos.
              </p>
            </div>

            {/* Expertise Pills */}
            <div className="about-tags-list">
              {EXPERTISE_TAGS.map((tag) => (
                <span key={tag} className="about-tag-badge">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
