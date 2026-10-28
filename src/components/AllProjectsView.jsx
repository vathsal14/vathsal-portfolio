import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { ProjectList, FEATURED_PROJECTS, FREELANCE_PROJECTS, INTERNAL_PROJECTS } from './Projects'

export default function AllProjectsView({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ paddingTop: 110, paddingBottom: 80, background: 'var(--bg)', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <button
          onClick={onBack}
          className="btn-hero-light"
          style={{ marginBottom: 32, cursor: 'pointer' }}
        >
          <FiArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="projects-eyebrow">PORTFOLIO ARCHIVE</div>
          <h1 className="projects-main-title" style={{ marginBottom: 12 }}>
            All <span className="text-orange">Projects</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 54, maxWidth: 640, fontSize: '0.95rem' }}>
            A comprehensive list of featured engineering work, company initiatives, and freelance client platforms I've architected and shipped.
          </p>
        </motion.div>

        <ProjectList title="Featured AI Projects" projects={FEATURED_PROJECTS} delayOffset={0.1} layout="grid" />
        <ProjectList title="Company Engineering Initiatives" projects={INTERNAL_PROJECTS} delayOffset={0.25} layout="grid" />
        <ProjectList title="Freelance Client Work" projects={FREELANCE_PROJECTS} delayOffset={0.4} layout="grid" />
      </div>
    </div>
  )
}
