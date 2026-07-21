import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

const LINKS = [
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docH > 0 ? window.scrollY / docH : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">vathsal.dev</a>
          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.to}>
                <Link to={l.to} smooth duration={700} offset={-80} style={{ cursor: 'pointer' }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}
