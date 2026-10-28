import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'
import { Link } from 'react-scroll'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechTicker from './components/TechTicker'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AllProjectsView from './components/AllProjectsView'

const NAV_LINKS = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('typing')
  const [text, setText] = useState('')
  const [targetPos, setTargetPos] = useState({ top: 24, left: 40 })
  const fullText = 'vathsal.dev'

  useEffect(() => {
    if (phase !== 'typing') return
    let i = 0
    const id = setInterval(() => {
      i++
      setText(fullText.slice(0, i))
      if (i === fullText.length) {
        clearInterval(id)
        setTimeout(() => {
          const navLogo = document.querySelector('.nav-logo')
          if (navLogo) {
            const rect = navLogo.getBoundingClientRect()
            setTargetPos({ top: rect.top, left: rect.left })
          }
          setPhase('moving')
        }, 600)
      }
    }, 90)
    return () => clearInterval(id)
  }, [phase])

  const handleMoveComplete = () => {
    if (phase === 'moving') setTimeout(onDone, 60)
  }

  return (
    <>
      <motion.div
        animate={{ opacity: phase === 'moving' ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--bg)',
          zIndex: 9998,
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={
          phase === 'moving'
            ? {
                top: targetPos.top,
                left: targetPos.left,
                x: '0%',
                y: '0%',
                fontSize: '1rem',
                fontWeight: 600,
              }
            : {
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
              }
        }
        onAnimationComplete={handleMoveComplete}
        transition={
          phase === 'moving'
            ? { duration: 0.9, ease: [0.4, 0, 0.2, 1] }
            : { duration: 0 }
        }
        style={{
          position: 'fixed',
          zIndex: 9999,
          pointerEvents: 'none',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-primary)',
          letterSpacing: '0.02em',
          whiteSpace: 'nowrap',
          display: 'inline-block',
          top: '50%',
          left: '50%',
        }}
      >
        {text}
      </motion.div>
    </>
  )
}

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [splashDone, setSplashDone] = useState(
    () => !!sessionStorage.getItem('splashShown')
  )

  const handleSplashDone = () => {
    sessionStorage.setItem('splashShown', 'true')
    setSplashDone(true)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="portfolio-app-root">
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}

      {/* Navbar */}
      <motion.div
        animate={{ opacity: splashDone ? 1 : 0 }}
        transition={{ duration: 0.01 }}
        style={{ pointerEvents: splashDone ? 'auto' : 'none' }}
      >
        <Navbar />
      </motion.div>

      {/* Main Content */}
      <motion.div
        animate={{ opacity: splashDone ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {showAllProjects ? (
          <AllProjectsView
            onBack={() => {
              setShowAllProjects(false)
              window.scrollTo(0, 0)
            }}
          />
        ) : (
          <main aria-label="Portfolio content">
            <Hero />
            <TechTicker />
            <About />
            <Skills />
            <Experience />
            <Projects onSeeAll={() => setShowAllProjects(true)} />
            <Contact />
          </main>
        )}

        {/* Footer matching Image 2 */}
        <footer className="footer-section" role="contentinfo" aria-label="Site footer">
          <div className="footer-container">
            <div className="footer-left">
              <a href="#" className="footer-brand-logo">vathsal.dev</a>
            </div>

            <div className="footer-center">
              <ul className="footer-nav-links">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      smooth
                      duration={700}
                      offset={-80}
                      className="footer-nav-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-right">
              <span className="footer-copyright">
                © {new Date().getFullYear()} Vathsal Vuppala
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                className="footer-scroll-top-btn"
                aria-label="Scroll back to top"
              >
                <FiArrowUp size={14} />
              </button>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}
