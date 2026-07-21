import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import LottiePlayer from './components/LottiePlayer'
import AllProjectsView from './components/AllProjectsView'
import monitoAnim from './assets/monito.json'
const MARQUEE_ITEMS = [
  'Python', '·', 'LangChain', '·', 'PyTorch', '·', 'FastAPI', '·',
  'React', '·', 'LLaMA', '·', 'Mistral', '·', 'LlamaIndex', '·',
  'RAG', '·', 'Docker', '·', 'YOLOv8', '·', 'PEFT/LoRA', '·',
  'Multi-Agent', '·', 'ChromaDB', '·', 'TensorFlow', '·',
]

function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  )
}

function ParallaxDivider({ lottieSrc }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8px', '8px'])
  return (
    <motion.div ref={ref} style={{ y, position: 'relative', zIndex: 50 }}>
      <div className="divider" />
      {lottieSrc && (
        <div style={{ position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-20%)', width: '400px', height: '400px', zIndex: 50 }}>
          <LottiePlayer src={lottieSrc} style={{ width: '100%', height: '100%' }} />
        </div>
      )}
    </motion.div>
  )
}

function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('typing')
  const [text, setText] = useState('')
  const [targetPos, setTargetPos] = useState({ top: 22, left: 40 })
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
          // Read the exact position of the real navbar logo before moving
          const navLogo = document.querySelector('.nav-logo')
          if (navLogo) {
            const rect = navLogo.getBoundingClientRect()
            setTargetPos({ top: rect.top, left: rect.left })
          }
          setPhase('moving')
        }, 700)
      }
    }, 100)
    return () => clearInterval(id)
  }, [phase])

  const handleMoveComplete = () => {
    if (phase === 'moving') setTimeout(onDone, 80)
  }

  return (
    <>
      <motion.div
        animate={{ opacity: phase === 'moving' ? 0 : 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        style={{ position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 9998, pointerEvents: 'none' }}
      />
      <motion.div
        animate={phase === 'moving'
          ? { top: targetPos.top, left: targetPos.left, x: '0%', y: '0%', fontSize: '1rem', fontWeight: 600 }
          : { top: '50%', left: '50%', x: '-50%', y: '-50%', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700 }
        }
        onAnimationComplete={handleMoveComplete}
        transition={phase === 'moving' ? { duration: 0.9, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }}
        style={{
          position: 'fixed', zIndex: 9999, pointerEvents: 'none',
          fontFamily: 'var(--font-mono)', color: 'var(--text-primary)',
          letterSpacing: '0.02em', whiteSpace: 'nowrap', display: 'inline-block',
          top: '50%', left: '50%',
        }}
      >
        {text}
      </motion.div>
    </>
  )
}

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [splashDone, setSplashDone] = useState(() => !!sessionStorage.getItem('splashShown'))

  const handleSplashDone = () => {
    sessionStorage.setItem('splashShown', 'true')
    setSplashDone(true)
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {!splashDone && <SplashScreen onDone={handleSplashDone} />}

      {/* Navbar hidden until splash logo flies into position */}
      <motion.div
        animate={{ opacity: splashDone ? 1 : 0 }}
        transition={{ duration: 0.01 }}
        style={{ pointerEvents: splashDone ? 'auto' : 'none' }}
      >
        <Navbar />
      </motion.div>

      {/* Main content fades in after splash */}
      <motion.div
        animate={{ opacity: splashDone ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        {showAllProjects ? (
          <AllProjectsView onBack={() => { setShowAllProjects(false); window.scrollTo(0, 0) }} />
        ) : (
          <main>
            <Hero />
            <Marquee />
            <ParallaxDivider />
            <About />
            <ParallaxDivider lottieSrc={monitoAnim} />
            <Skills />
            <ParallaxDivider />
            <Experience />
            <ParallaxDivider />
            <Projects onSeeAll={() => setShowAllProjects(true)} />
            <ParallaxDivider />
            <Contact />
          </main>
        )}

        <footer className="footer">
          <div className="container footer-inner">
            <div className="footer-copy">
              © 2025 Vathsal Vuppala · Built with React + Framer Motion
            </div>
            <div className="footer-copy">Hyderabad, India</div>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}

