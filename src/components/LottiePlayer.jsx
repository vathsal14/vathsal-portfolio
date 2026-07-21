import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

/**
 * A dependency-free Lottie player using lottie-web directly.
 * Avoids the lottie-react CJS/ESM interop issues with Vite + React 19.
 */
export default function LottiePlayer({ src, style, className, grayscale = false }) {
  const containerRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: src,
    })

    return () => {
      animRef.current?.destroy()
      animRef.current = null
    }
  }, [src])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ...style,
        filter: grayscale ? 'grayscale(100%) contrast(1.05)' : undefined,
        transition: 'filter 0.4s',
      }}
      onMouseEnter={() => {
        if (containerRef.current && grayscale) {
          containerRef.current.style.filter = 'grayscale(0%) contrast(1)'
        }
      }}
      onMouseLeave={() => {
        if (containerRef.current && grayscale) {
          containerRef.current.style.filter = 'grayscale(100%) contrast(1.05)'
        }
      }}
    />
  )
}
