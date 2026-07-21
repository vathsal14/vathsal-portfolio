import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Only the most relevant, impactful skills
const FEATURE_SKILL = {
  category: 'AI / ML & LLMs',
  level: 95,
  description: 'End-to-end model training, fine-tuning, and production deployment. From transformer architecture to quantized inference.',
  tools: ['PyTorch', 'PEFT / LoRA', 'RLHF / DPO', 'Sentence Transformers', 'Hybrid RAG', 'vLLM / Ollama'],
}

const SECONDARY_SKILLS = [
  {
    category: 'Agentic Systems',
    level: 88,
    tools: ['LangGraph', 'Tool Calling / ReAct', 'CrewAI', 'AutoGen'],
  },
  {
    category: 'Full-Stack',
    level: 84,
    tools: ['React', 'Next.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Languages',
    level: 92,
    tools: ['Python', 'TypeScript', 'SQL', 'Bash / Shell'],
  },
  {
    category: 'Cloud & Infra',
    level: 80,
    tools: ['Docker', 'Azure App Service', 'CI/CD', 'PostgreSQL'],
  },
]

function AnimatedBar({ level, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const barRef = useRef(null)

  useEffect(() => {
    if (inView && barRef.current) {
      setTimeout(() => {
        barRef.current.style.width = `${level}%`
        barRef.current.style.transition = `width 1.4s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`
      }, 100)
    }
  }, [inView, level, delay])

  return (
    <div ref={ref} style={{ height: 3, background: 'var(--border)', borderRadius: 999, overflow: 'hidden' }}>
      <div ref={barRef} style={{ height: '100%', background: 'var(--accent)', borderRadius: 999, width: 0 }} />
    </div>
  )
}

function AnimatedNumber({ value, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const spanRef = useRef(null)

  useEffect(() => {
    if (!inView || !spanRef.current) return
    let start = 0
    const end = value
    const duration = 1200 + delay
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      spanRef.current.textContent = Math.floor(progress * end)
      if (progress < 1) requestAnimationFrame(step)
      else spanRef.current.textContent = end
    }
    setTimeout(() => requestAnimationFrame(step), delay)
  }, [inView, value, delay])

  return <span ref={ref}><span ref={spanRef}>0</span>%</span>
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="skills" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="label">Technical Arsenal</span>
          <h2 className="heading-xl" style={{ marginTop: 12, marginBottom: 12 }}>Skills & Tools</h2>
        </motion.div>

        <div className="skills-bento">

          {/* ── Feature Card ── */}
          <motion.div
            className="skill-feature-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <div className="skill-feat-top">
              <span className="label">Primary Specialization</span>
              <div className="skill-feat-level">
                <AnimatedNumber value={FEATURE_SKILL.level} delay={200} />
              </div>
            </div>
            <h3 className="skill-feat-title">{FEATURE_SKILL.category}</h3>
            <p className="skill-feat-desc">{FEATURE_SKILL.description}</p>
            <AnimatedBar level={FEATURE_SKILL.level} delay={200} />
            <div className="skill-feat-tools">
              {FEATURE_SKILL.tools.map(t => (
                <span key={t} className="skill-chip">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* ── Secondary Grid ── */}
          <div className="skills-secondary">
            {SECONDARY_SKILLS.map((s, i) => (
              <motion.div
                key={s.category}
                className="skill-mini-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <div className="skill-mini-name">{s.category}</div>
                  <div className="skill-mini-level">
                    <AnimatedNumber value={s.level} delay={300 + i * 80} />
                  </div>
                </div>
                <AnimatedBar level={s.level} delay={300 + i * 80} />
                <div className="skill-mini-tools">
                  {s.tools.map(t => (
                    <span key={t} className="skill-chip">{t}</span>
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
