import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCpu, FiFeather, FiLayers, FiCode, FiCloud } from 'react-icons/fi'
import LottiePlayer from './LottiePlayer'
import monitoAnim from '../assets/monito.json'

const FEATURED_SKILL = {
  title: 'AI / ML & LLMs',
  percentage: 95,
  desc: 'Production-grade ML, training, fine-tuning, and generative development from transformer architectures to agentic inference.',
  tags: [
    'Python',
    'GPT / LLMs',
    'RAG / APIs',
    'Agentic Workflows',
    'LangChain',
    'NLP',
    'PyTorch',
  ],
}

const SECONDARY_SKILLS = [
  {
    icon: <FiFeather size={18} color="#2563EB" />,
    badgeBg: '#EFF6FF',
    title: 'Agentic Systems',
    percentage: 88,
    tags: ['LangGraph', 'Multi-Agent Systems', 'RAG', 'Tool Use'],
  },
  {
    icon: <FiLayers size={18} color="#7C3AED" />,
    badgeBg: '#F5F3FF',
    title: 'Full Stack',
    percentage: 84,
    tags: ['React', 'Next.js', 'FastAPI', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: <FiCode size={18} color="#2563EB" />,
    badgeBg: '#EFF6FF',
    title: 'Languages',
    percentage: 92,
    tags: ['Python', 'TypeScript', 'SQL', 'Bash', 'C / C++'],
  },
  {
    icon: <FiCloud size={18} color="#EA580C" />,
    badgeBg: '#FFF7ED',
    title: 'Cloud & Infra',
    percentage: 80,
    tags: ['Azure', 'Docker', 'CI/CD', 'Linux', 'Monitoring'],
  },
]

function SkillProgressBar({ percentage, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const barRef = useRef(null)

  useEffect(() => {
    if (inView && barRef.current) {
      setTimeout(() => {
        barRef.current.style.width = `${percentage}%`
        barRef.current.style.transition = `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
      }, 100)
    }
  }, [inView, percentage, delay])

  return (
    <div ref={ref} className="skill-progress-track">
      <div ref={barRef} className="skill-progress-fill" style={{ width: 0 }} />
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="skills-section" id="skills" aria-label="Technical Skills" ref={ref}>
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header-row">
          <motion.div
            className="skills-header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="skills-eyebrow">TECHNICAL ARSENAL</div>
            <h2 className="skills-main-title">
              Skills & <span className="text-orange">Tools</span>
            </h2>
            <p className="skills-subtitle">
              Continuously learning, building, and shipping with modern AI and
              full-stack technologies.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="skills-bento-grid">
          {/* ── Left: Feature Card (AI / ML & LLMs) ── */}
          <motion.div
            className="skill-card-feature"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="skill-card-top">
              <div className="skill-title-group">
                <div className="skill-icon-badge purple-chip">
                  <FiCpu size={22} color="#7C3AED" />
                </div>
                <h3 className="skill-card-title">{FEATURED_SKILL.title}</h3>
              </div>
              <div className="skill-percentage-orange">
                {FEATURED_SKILL.percentage}%
              </div>
            </div>

            <p className="skill-feature-description">
              {FEATURED_SKILL.desc}
            </p>

            <SkillProgressBar percentage={FEATURED_SKILL.percentage} delay={150} />

            <div className="skill-feature-tags">
              {FEATURED_SKILL.tags.map((tag) => (
                <span key={tag} className="skill-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── Right: 4 Secondary Cards (2x2 Grid) ── */}
          <div className="skills-secondary-grid">
            {SECONDARY_SKILLS.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="skill-card-secondary"
                style={{
                  position: 'relative',
                  zIndex: skill.title === 'Languages' ? 3 : 1,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + index * 0.08 }}
              >
                {/* Monkey hanging with its top tucked under the Languages card */}
                {skill.title === 'Languages' && (
                  <div className="monkey-hanging-languages">
                    <LottiePlayer
                      src={monitoAnim}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                )}

                <div className="skill-card-secondary-top">
                  <div className="skill-sec-title-group">
                    <div
                      className="skill-sec-icon-badge"
                      style={{ background: skill.badgeBg }}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="skill-sec-title">{skill.title}</h4>
                  </div>
                  <span className="skill-sec-percentage">
                    {skill.percentage}%
                  </span>
                </div>

                <div className="skill-sec-tags-row">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="skill-sec-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
