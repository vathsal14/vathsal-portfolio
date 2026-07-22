import { motion } from 'framer-motion'
import LottiePlayer from './LottiePlayer'
import errorAnim from '../assets/Error 404.json'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      color: 'var(--text-primary)',
      padding: '24px',
      textAlign: 'center'
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%', maxWidth: '500px', marginBottom: '24px' }}
      >
        <LottiePlayer src={errorAnim} style={{ width: '100%', height: 'auto' }} />
      </motion.div>
      
      <motion.h1 
        className="heading-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Page Not Found
      </motion.h1>
      
      <motion.p 
        style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '400px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        The page you are looking for doesn't exist or has been moved.
      </motion.p>
      
      <motion.a 
        href="/"
        className="btn btn-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Return Home
      </motion.a>
    </div>
  )
}
