import React from 'react'

export function TurningIdeasDoodle({ className = '', style = {} }) {
  return (
    <div
      className={`turning-ideas-doodle ${className}`}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        ...style,
      }}
    >
      <div
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '1.35rem',
          lineHeight: '1.1',
          color: '#5A677D',
          fontWeight: 600,
          transform: 'rotate(-6deg)',
          textAlign: 'left',
          letterSpacing: '0.01em',
        }}
      >
        <div>Turning ideas into</div>
        <div>intelligent products</div>
      </div>
      <svg
        viewBox="0 0 80 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '56px',
          height: '40px',
          marginLeft: '24px',
          marginTop: '6px',
        }}
      >
        <path
          d="M6 6 C 24 10, 44 18, 48 38"
          stroke="#8A99AD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 3"
        />
        <path
          d="M38 32 L 48 40 L 54 30"
          stroke="#8A99AD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export function SameDriveDoodle({ className = '', style = {} }) {
  return (
    <div
      className={`same-drive-doodle ${className}`}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 5,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 50 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '36px', height: '28px', transform: 'rotate(-15deg)' }}
      >
        <path
          d="M8 8 C 22 10, 36 18, 38 32"
          stroke="#FF5E2B"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M30 28 L 38 32 L 40 22"
          stroke="#FF5E2B"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontFamily: "'Caveat', cursive",
          fontSize: '1.18rem',
          color: '#FF5E2B',
          fontWeight: 600,
          transform: 'rotate(-2deg)',
          whiteSpace: 'nowrap',
        }}
      >
        Same drive. More to build.
      </span>
    </div>
  )
}

export function MouseScrollIndicator() {
  return (
    <div className="mouse-scroll-indicator">
      <div className="mouse-pill">
        <span className="mouse-dot" />
      </div>
      <span className="mouse-caption">Scroll to explore</span>
    </div>
  )
}
