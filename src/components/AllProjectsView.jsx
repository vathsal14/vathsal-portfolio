import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ProjectList, FEATURED_PROJECTS, FREELANCE_PROJECTS, INTERNAL_PROJECTS } from './Projects'

export default function AllProjectsView({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ paddingTop: 120, paddingBottom: 80, background: 'var(--bg-2)', minHeight: '100vh' }}>
      <div className="container">
        <button onClick={onBack} className="btn btn-ghost" style={{ marginBottom: 40 }}>
          ← Back to Portfolio
        </button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading-xl" style={{ marginBottom: 12 }}>All Projects</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 64, maxWidth: 600 }}>
            A comprehensive list of featured engineering work, company initiatives, and freelance client platforms I've architected and shipped.
          </p>
        </motion.div>

        <ProjectList title="Featured AI Projects" projects={FEATURED_PROJECTS} delayOffset={0.1} layout="grid" />
        <ProjectList title="Company Engineering Initiatives" projects={INTERNAL_PROJECTS} delayOffset={0.3} layout="grid" />
        <ProjectList title="Freelance Client Work" projects={FREELANCE_PROJECTS} delayOffset={0.5} layout="grid" />
      </div>
    </div>
  )
}
