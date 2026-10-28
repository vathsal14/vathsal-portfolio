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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              vathsal.dev
            </a>

            {/* Desktop links */}
            <ul className="nav-links">
              {LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    smooth
                    duration={700}
                    offset={-90}
                    className="nav-link"
                    activeClass="active"
                    spy
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile hamburger */}
            <button
              className={`nav-hamburger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="nav-logo">vathsal.dev</span>
              <button
                className="mobile-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="mobile-menu-links">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  smooth
                  duration={700}
                  offset={-80}
                  className="mobile-menu-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
