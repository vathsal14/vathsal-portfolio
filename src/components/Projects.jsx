import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FiArrowRight,
  FiFileText,
  FiTarget,
  FiShield,
} from 'react-icons/fi'
import LottiePlayer from './LottiePlayer'
import welcomeAnim from '../assets/welcome.json'
import catAnim from '../assets/Loader cat.json'

export const FEATURED_PROJECTS = [
  {
    num: '01',
    title: 'Agentic Seminar Report Writer',
    desc: 'Multi-agent RAG platform that takes a seminar topic, retrieves and synthesises research papers via vector search, then autonomously plans, writes, and critic-reviews a structured technical report with IEEE citations and PDF/DOCX export via a React frontend.',
    tags: ['Python', 'LangChain', 'LlamaIndex', 'ChromaDB', 'FastAPI', 'React'],
    link: 'https://rptcrft.vercel.app/',
  },
  {
    num: '02',
    title: 'Autonomous Barista Agent',
    desc: 'Voice-enabled LLM agent that accepts live customer calls, interprets natural language orders, and uses tool calling to write and confirm orders in real time — with persistent memory, fallback logic, and multi-step orchestration for edge cases.',
    tags: ['Python', 'LangChain', 'OpenAI API', 'Twilio Voice API'],
    link: 'https://github.com/vathsal14/agentic-coffee-calling',
  },
  {
    num: '03',
    title: 'PDF Safety Compliance Detection',
    desc: 'Real-time workplace safety monitor using YOLOv8 to detect missing PPE from live video feeds with DeepSORT worker tracking, a FastAPI inference backend, and a React dashboard with live violation alerts and compliance logs.',
    tags: ['Python', 'YOLOv8', 'DeepSORT', 'FastAPI', 'React', 'PostgreSQL'],
    link: 'https://vatsafe.vercel.app/dashboard',
  },
  {
    num: '04',
    title: 'Voice-Enabled Insurance RAG Assistant',
    desc: 'Developed a specialized RAG system to automate policy retrieval and complex calculations for insurance agents. Integrated Sarvam AI for vernacular speech-to-text, enabling users to seamlessly query complex policy databases using natural spoken language.',
    tags: ['Python', 'RAG', 'Sarvam AI', 'Voice-to-Text', 'LangChain'],
    link: 'https://github.com/vathsal14/LIC-backend',
  },
  {
    num: '05',
    title: 'Deep Learning Image Colorizer',
    desc: 'Built an automated image colorization pipeline utilizing a pre-trained Caffe neural network to predict LAB color space channels for grayscale inputs. Deployed with a Tkinter GUI for local processing and OpenCV DNN module for rapid edge inference.',
    tags: ['Python', 'OpenCV', 'Deep Learning', 'NumPy', 'Tkinter'],
    link: 'https://github.com/vathsal14/Colorizer',
  },
  {
    num: '06',
    title: 'Real-Time Pose Estimation',
    desc: 'Engineered a low-latency human pose detection system by porting the CMU OpenPose architecture to TensorFlow. Optimized MobileNet variants to achieve real-time joint tracking on consumer hardware and edge devices like the Jetson TX2.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision'],
    link: 'https://github.com/vathsal14/Pose_Detection',
  },
  {
    num: '07',
    title: 'Clinical Image Analysis API',
    desc: 'Built a Flask-based diagnostic application leveraging Google Gemini Pro-Vision models to generate comprehensive medical descriptions from clinical imagery, utilizing a secondary LLM validation step to rigorously enforce domain-specific accuracy.',
    tags: ['Python', 'Flask', 'Google Generative AI', 'Medical NLP'],
    link: 'https://github.com/vathsal14/Medical_Image_Recognition',
  },
  {
    num: '08',
    title: 'DQN Reinforcement Learning Snake',
    desc: 'Engineered a Deep Q-Network (DQN) reinforcement learning agent to autonomously play Snake. Implemented experience replay and PyTorch neural networks for policy optimization, wrapped in a Streamlit interface for live training visualization.',
    tags: ['Python', 'PyTorch', 'Reinforcement Learning', 'Streamlit'],
    link: 'https://github.com/vathsal14/Snake_AI',
  },
  {
    num: '09',
    title: 'MediaPipe Spatial Hand Tracking',
    desc: 'Implemented a real-time hand landmark tracking application utilizing Google MediaPipe and OpenCV. Achieved high frame-rate spatial coordinate extraction tailored for interactive gesture-based interfaces and VR applications.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Spatial Tracking'],
    link: 'https://github.com/vathsal14/Hand_Tracking',
  },
  {
    num: '10',
    title: 'High-Throughput Article Scraper',
    desc: 'Developed a robust web extraction architecture designed to scrape, parse, and normalize structured data from complex article feeds. Implemented automated retry logic, rate-limiting, and data serialization pipelines for scalable text corpus generation.',
    tags: ['Python', 'Web Scraping', 'Data Engineering', 'ETL'],
    link: 'https://github.com/vathsal14/Article_Scraper',
  },
  {
    num: '11',
    title: 'Automated Smile Capture',
    desc: 'Created a lightweight computer vision script using OpenCV and Haar cascade classifiers to autonomously detect smiles in live webcam feeds and trigger image capture, demonstrating highly efficient real-time facial feature extraction.',
    tags: ['Python', 'OpenCV', 'Haar Cascades', 'Computer Vision'],
    link: 'https://github.com/vathsal14/Smile_Selfie',
  },
]

export const FREELANCE_PROJECTS = [
  {
    logo: '/prahalad.png',
    title: 'Prahalad ID Cards',
    desc: 'Architected a full-stack digital identity management system to automate and scale ID card generation workflows. Engineered a robust data-processing pipeline that eliminated manual data entry errors and significantly improved batch-processing efficiency for enterprise clients.',
    tags: ['TypeScript', 'Python', 'React', 'Next.js', 'Cloudflare Workers'],
    link: 'https://prahaladidcards.com',
  },
  {
    logo: '/artbeat.png',
    title: 'Artbeat Institute',
    desc: 'Developed a high-conversion marketing platform for a creative arts institute. Designed and implemented a performant, SEO-optimized architecture that establishes brand authority and serves as the primary digital acquisition funnel for prospective students.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    link: 'https://artbeatinstitute.com',
  },
  {
    logo: '/aqube.png',
    title: 'Aqube Studio',
    desc: 'Architected an interactive design agency platform featuring high-fidelity animations, responsive case study showcases, and smooth client engagement funnels.',
    tags: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://aqubestudio.com',
  },
  {
    logo: '/avron.png',
    title: 'Avron Electronics',
    desc: 'Built an enterprise e-commerce and catalog portal featuring automated inventory synchronization, structured search, and optimized checkout flow.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    link: 'https://avron.in',
  },
]

export const INTERNAL_PROJECTS = [
  {
    logo: '/novo wellness.ico',
    title: 'NOVO Wellness — Emotional Intelligence (AI)',
    desc: 'AI-ed-tech platform for Grades 6–10 focused on emotional intelligence with assessments, games, resources and teacher dashboards.',
    tags: ['Assessment', 'React', 'FastAPI', 'Azure', 'LLaMA'],
  },
  {
    logo: '/novo health care.png',
    title: 'NOVO Neurotech — Clinical Neurological Insights',
    desc: 'AI/ML models for neurological disorders (Parkinson\'s, Alzheimer\'s, Epilepsy) using medical data and ML pipelines.',
    tags: ['Modeling', 'Python', 'Clinical AI', 'Research', 'PyTorch'],
  },
]

export function ProjectList({ title, projects, delayOffset = 0, layout = 'grid' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  if (!projects || !projects.length) return null

  return (
    <div ref={ref} style={{ marginBottom: 56 }}>
      <motion.h3
        className="skills-eyebrow"
        style={{ marginBottom: 20 }}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: delayOffset }}
      >
        {title}
      </motion.h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 20,
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="featured-project-card-link"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: delayOffset + 0.05 + i * 0.05 }}
          >
            <div className="feat-proj-top">
              <div className="feat-proj-title-group">
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.title}
                    style={{ width: 28, height: 28, objectFit: 'contain' }}
                  />
                ) : (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#FF5E2B',
                    }}
                  >
                    {p.num}
                  </span>
                )}
                <h4 className="feat-proj-title">{p.title}</h4>
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feat-proj-chevron"
                  style={{ textDecoration: 'none' }}
                >
                  ↗
                </a>
              )}
            </div>

            <p className="feat-proj-desc">{p.desc}</p>

            <div className="feat-proj-tags">
              {p.tags.map((t) => (
                <span key={t} className="feat-proj-tag-chip">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const TOP_THREE = [
  {
    icon: <FiFileText size={18} color="#FF5E2B" />,
    badgeBg: '#FFF7ED',
    title: 'Agentic Seminar Report Writer',
    desc: 'Multi-agent RAG system that reads academic topics, retrieves sources and generates structured reports with citations.',
    tags: ['Python', 'LangChain', 'LLMs', 'Streamlit', 'FastAPI', 'Agentic AI'],
    link: 'https://rptcrft.vercel.app/',
  },
  {
    icon: <FiTarget size={18} color="#E11D48" />,
    badgeBg: '#FFF1F2',
    title: 'Autonomous Barista Agent',
    desc: 'Voice-enabled AI agent that accepts natural-language orders, orchestrates tools and maintains real-time inventory.',
    tags: ['Python', 'LangChain', 'OpenAI', 'IoT', 'Real-time', 'RAG'],
    link: 'https://github.com/vathsal14/agentic-coffee-calling',
  },
  {
    icon: <FiShield size={18} color="#EA580C" />,
    badgeBg: '#FFF7ED',
    title: 'PDF Safety Compliance Detection',
    desc: 'End-to-end RAG system for safety, compliance and policy detection in PDFs with structured outputs.',
    tags: ['Python', 'Vision', 'LangChain', 'FastAPI', 'React', 'PostgreSQL'],
    link: 'https://vatsafe.vercel.app/dashboard',
  },
]

export default function Projects({ onSeeAll }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="projects-section" id="projects" aria-label="Featured Projects" ref={ref}>
      <div className="projects-container">
        {/* Header Row */}
        <div className="projects-header-row">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="projects-eyebrow">FEATURED WORK</div>
            <h2 className="projects-main-title">
              Featured <span className="text-orange">Projects</span>
            </h2>
            <p className="projects-subtitle">
              Production systems with real users, real constraints, real impact.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid: Browser Card Left + 3 Stacked Cards Right */}
        <div className="projects-bento-grid">
          {/* ── Left Column: Browser Mockup Card ── */}
          <motion.div
            className="projects-browser-card"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Browser top chrome with traffic light dots */}
            <div className="browser-chrome-header">
              <div className="browser-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
            </div>

            {/* Browser window body with welcome Lottie */}
            <div className="browser-window-content">
              <LottiePlayer
                src={welcomeAnim}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </motion.div>

          {/* ── Right Column: 3 Project Cards ── */}
          <div className="projects-cards-stack">
            {TOP_THREE.map((proj, idx) => (
              <motion.a
                key={proj.title}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="featured-project-card-link"
                style={{ position: 'relative' }}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + idx * 0.1 }}
              >
                {/* Cat perched directly on top edge of the first card (Agentic Seminar Report Writer) */}
                {idx === 0 && (
                  <div className="agentic-cat-perch">
                    <LottiePlayer
                      src={catAnim}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                )}

                <div className="feat-proj-top">
                  <div className="feat-proj-title-group">
                    <div
                      className="feat-proj-icon-badge"
                      style={{ background: proj.badgeBg }}
                    >
                      {proj.icon}
                    </div>
                    <h3 className="feat-proj-title">{proj.title}</h3>
                  </div>
                  <span className="feat-proj-chevron">›</span>
                </div>

                <p className="feat-proj-desc">{proj.desc}</p>

                <div className="feat-proj-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="feat-proj-tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="projects-bottom-cta">
          <button onClick={onSeeAll} className="btn-projects-see-all">
            <span>See all projects & client work</span>
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
