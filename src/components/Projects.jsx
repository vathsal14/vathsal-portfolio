import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export const FEATURED_PROJECTS = [
  {
    num: '01',
    title: 'Agentic Seminar Report Writer',
    desc: 'Multi-agent RAG platform that takes a seminar topic, retrieves and synthesises research papers via vector search, then autonomously plans, writes, and critic-reviews a structured technical report with IEEE citations and PDF/DOCX export via a React frontend.',
    tags: ['Python', 'LangChain', 'LlamaIndex', 'ChromaDB', 'FastAPI', 'React'],
    link: 'https://rptcrft.vercel.app/'
  },
  {
    num: '02',
    title: 'Autonomous Barista Agent',
    desc: 'Voice-enabled LLM agent that accepts live customer calls, interprets natural language orders, and uses tool calling to write and confirm orders in real time — with persistent memory, fallback logic, and multi-step orchestration for edge cases.',
    tags: ['Python', 'LangChain', 'OpenAI API', 'Twilio Voice API'],
    link: 'https://github.com/vathsal14/agentic-coffee-calling'
  },
  {
    num: '03',
    title: 'PPE Safety Compliance Detection',
    desc: 'Real-time workplace safety monitor using YOLOv8 to detect missing PPE from live video feeds with DeepSORT worker tracking, a FastAPI inference backend, and a React dashboard with live violation alerts and compliance logs.',
    tags: ['Python', 'YOLOv8', 'DeepSORT', 'FastAPI', 'React', 'PostgreSQL'],
    link: 'https://vatsafe.vercel.app/dashboard'
  },
  {
    num: '04',
    title: 'Voice-Enabled Insurance RAG Assistant',
    desc: 'Developed a specialized RAG system to automate policy retrieval and complex calculations for insurance agents. Integrated Sarvam AI for vernacular speech-to-text, enabling users to seamlessly query complex policy databases using natural spoken language.',
    tags: ['Python', 'RAG', 'Sarvam AI', 'Voice-to-Text', 'LangChain'],
    link: 'https://github.com/vathsal14/LIC-backend'
  },
  {
    num: '05',
    title: 'Deep Learning Image Colorizer',
    desc: 'Built an automated image colorization pipeline utilizing a pre-trained Caffe neural network to predict LAB color space channels for grayscale inputs. Deployed with a Tkinter GUI for local processing and OpenCV DNN module for rapid edge inference.',
    tags: ['Python', 'OpenCV', 'Deep Learning', 'NumPy', 'Tkinter'],
    link: 'https://github.com/vathsal14/Colorizer'
  },
  {
    num: '06',
    title: 'Real-Time Pose Estimation',
    desc: 'Engineered a low-latency human pose detection system by porting the CMU OpenPose architecture to TensorFlow. Optimized MobileNet variants to achieve real-time joint tracking on consumer hardware and edge devices like the Jetson TX2.',
    tags: ['Python', 'TensorFlow', 'OpenCV', 'Computer Vision'],
    link: 'https://github.com/vathsal14/Pose_Detection'
  },
  {
    num: '07',
    title: 'Clinical Image Analysis API',
    desc: 'Built a Flask-based diagnostic application leveraging Google Gemini Pro-Vision models to generate comprehensive medical descriptions from clinical imagery, utilizing a secondary LLM validation step to rigorously enforce domain-specific accuracy.',
    tags: ['Python', 'Flask', 'Google Generative AI', 'Medical NLP'],
    link: 'https://github.com/vathsal14/Medical_Image_Recognition'
  },
  {
    num: '08',
    title: 'DQN Reinforcement Learning Snake',
    desc: 'Engineered a Deep Q-Network (DQN) reinforcement learning agent to autonomously play Snake. Implemented experience replay and PyTorch neural networks for policy optimization, wrapped in a Streamlit interface for live training visualization.',
    tags: ['Python', 'PyTorch', 'Reinforcement Learning', 'Streamlit'],
    link: 'https://github.com/vathsal14/Snake_AI'
  },
  {
    num: '09',
    title: 'MediaPipe Spatial Hand Tracking',
    desc: 'Implemented a real-time hand landmark tracking application utilizing Google MediaPipe and OpenCV. Achieved high frame-rate spatial coordinate extraction tailored for interactive gesture-based interfaces and VR applications.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'Spatial Tracking'],
    link: 'https://github.com/vathsal14/Hand_Tracking'
  },
  {
    num: '10',
    title: 'High-Throughput Article Scraper',
    desc: 'Developed a robust web extraction architecture designed to scrape, parse, and normalize structured data from complex article feeds. Implemented automated retry logic, rate-limiting, and data serialization pipelines for scalable text corpus generation.',
    tags: ['Python', 'Web Scraping', 'Data Engineering', 'ETL'],
    link: 'https://github.com/vathsal14/Article_Scraper'
  },
  {
    num: '11',
    title: 'Automated Smile Capture',
    desc: 'Created a lightweight computer vision script using OpenCV and Haar cascade classifiers to autonomously detect smiles in live webcam feeds and trigger image capture, demonstrating highly efficient real-time facial feature extraction.',
    tags: ['Python', 'OpenCV', 'Haar Cascades', 'Computer Vision'],
    link: 'https://github.com/vathsal14/Smile_Selfie'
  }
]

export const FREELANCE_PROJECTS = [
  {
    logo: '/prahalad.png',
    title: 'Prahalad ID Cards',
    desc: 'Architected a full-stack digital identity management system to automate and scale ID card generation workflows. Engineered a robust data-processing pipeline that eliminated manual data entry errors and significantly improved batch-processing efficiency for enterprise clients.',
    tags: ['TypeScript', 'Python', 'React', 'Next.js', 'Cloudflare Workers'],
    link: 'https://prahaladidcards.com'
  },
  {
    logo: '/artbeat.png',
    title: 'Artbeat Institute',
    desc: 'Developed a high-conversion marketing platform for a creative arts institute. Designed and implemented a performant, SEO-optimized architecture that establishes brand authority and serves as the primary digital acquisition funnel for prospective students.',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    link: 'https://artbeatinstitute.com'
  },
  {
    logo: '/aqube.png',
    logoBg: '#000',
    title: 'AqubeXP Esports Platform',
    desc: 'Built a comprehensive esports tournament platform enabling organizers to host, manage, and scale competitive events across major gaming titles. Implemented secure OAuth authentication, real-time match tracking, and a scalable database architecture to handle high-traffic registration spikes.',
    tags: ['Next.js', 'React', 'Firebase', 'OAuth', 'Drizzle ORM'],
    link: 'https://aqubexp.app'
  },
  {
    logo: '/aqube.png',
    logoBg: '#000',
    title: 'Aqube Crowdfunding',
    desc: 'Engineered a specialized crowdfunding platform tailored for independent game developers. Built end-to-end campaign management tools, secure payment gateways, and community feedback loops allowing creators to fundraise and distribute beta builds seamlessly.',
    tags: ['React', 'Vite', 'PostgreSQL', 'OAuth', 'Cloudflare'],
    link: 'https://aqubecrowdfunding.vercel.app'
  },
  {
    logo: '/avron.png',
    title: 'Avron AI Automation Agency',
    desc: 'Designed and launched a high-conversion marketing platform for an automation agency specializing in n8n workflows. Built an optimized, SEO-friendly architecture to serve as a primary client acquisition funnel for B2B automation services.',
    tags: ['React', 'Web Design', 'Marketing', 'SEO'],
    link: 'https://avronai.com'
  }
]

export const INTERNAL_PROJECTS = [
  {
    logo: '/novo wellness.ico',
    title: 'NOVO Sales CRM — AI Agentic Layer',
    desc: 'Architected a next-generation CRM platform supercharged with an agentic AI layer. Developed a custom LLM integration capable of autonomously querying the sales database via natural language, allowing executives to instantly fetch complex analytics and reports through a conversational interface.',
    tags: ['Python', 'FastAPI', 'LLaMA', 'RAG', 'React', 'SQL'],
    link: 'https://novo-sales.vercel.app'
  },
  {
    logo: '/saap.png',
    title: 'Zero-Infra Expense Tracker',
    desc: 'Designed and deployed a zero-infrastructure expense tracking system, replacing manual paper workflows with an automated digital pipeline. Integrated Google Drive API for cost-free receipt storage and Outlook API for real-time reimbursement event notifications, reducing administrative overhead.',
    tags: ['Node.js', 'TypeScript', 'Google Drive API', 'Outlook API'],
    link: 'https://novobillflow.vercel.app'
  },
  {
    logo: '/saap.png',
    title: 'Agile Task Management Dashboard',
    desc: 'Architected a Jira-style internal issue tracking and project management platform to streamline engineering workflows. Implemented robust state management, ticket assignment logic, and Kanban-style boards to increase team velocity and cross-department visibility.',
    tags: ['React', 'Node.js', 'State Management', 'Enterprise Tooling']
  }
]

export function ProjectList({ title, projects, delayOffset = 0, layout = 'list' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (!projects.length) return null

  return (
    <div ref={ref} style={{ marginBottom: 56 }}>
      <motion.h3
        className="label"
        style={{ display: 'block', marginBottom: 24, paddingLeft: 4 }}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: delayOffset }}
      >
        {title}
      </motion.h3>

      {layout === 'grid' ? (
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: delayOffset + 0.1 + (i * 0.1) }}>

              <div className="project-card-header">
                {p.logo ? (
                  <div className="project-logo-wrap" style={{ background: p.logoBg || 'transparent', borderRadius: p.logoBg ? 4 : 0 }}>
                    <img src={p.logo} alt={`${p.title} logo`} className="project-logo" style={{ padding: p.logoBg ? 4 : 0 }} loading="lazy" />
                  </div>
                ) : (
                  <div className="project-num" style={{ fontSize: '1rem', paddingTop: 0 }}>{p.num}</div>
                )}
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-arrow link-hover">↗</a>
                ) : (
                  <div className="project-arrow">↗</div>
                )}
              </div>

              <div className="project-card-body">
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
              </div>

              <div className="project-card-footer">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(t => (
                    <span key={t} className="tag" style={{ fontSize: '0.67rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="projects-list">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="project-row"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: delayOffset + 0.1 + (i * 0.1) }}>

              {p.logo ? (
                <div className="project-logo-wrap" style={{ background: p.logoBg || 'transparent', borderRadius: p.logoBg ? 4 : 0 }}>
                  <img src={p.logo} alt={`${p.title} logo`} className="project-logo" style={{ padding: p.logoBg ? 4 : 0 }} loading="lazy" />
                </div>
              ) : (
                <div className="project-num">{p.num}</div>
              )}

              <div className="project-body">
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.tags.map(t => (
                    <span key={t} className="tag" style={{ fontSize: '0.67rem' }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-right">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-arrow link-hover">↗</a>
                ) : (
                  <div className="project-arrow">↗</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

import LottiePlayer from './LottiePlayer'
import welcomeAnim from '../assets/welcome.json'
import catAnim from '../assets/Loader cat.json'

export default function Projects({ onSeeAll }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="projects" aria-label="Featured Projects and Portfolio" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <motion.div ref={ref} className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <span className="label">What I've Built</span>
          <h2 className="heading-xl" style={{ marginTop: 12, marginBottom: 12 }}>Featured Projects</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Production systems with real users, real constraints, real stakes.
          </p>
        </motion.div>

        {/* Bento featured layout */}
        <motion.div
          className="featured-bento"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Left: large Lottie card */}
          <div className="featured-lottie-card">
            <div className="label" style={{ marginBottom: 16 }}>Featured AI Projects</div>
            <LottiePlayer src={welcomeAnim} style={{ width: '100%', height: 'auto' }} />
          </div>

          {/* Right: 3 compact project cards stacked */}
          <div className="featured-cards-col">
            {FEATURED_PROJECTS.slice(0, 3).map((p, i) => (
              <motion.div
                key={p.title}
                className="featured-project-card"
                style={{ position: 'relative' }}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              >
                {/* Cat on top of the first container */}
                {i === 0 && (
                  <div className="lottie-cat-float" style={{ position: 'absolute', top: '-360px', right: '-80px', width: '500px', height: '500px', pointerEvents: 'none', zIndex: 10 }}>
                    <LottiePlayer src={catAnim} style={{ width: '100%', height: '100%' }} />
                  </div>
                )}

                <div className="featured-card-top">
                  <span className="project-num" style={{ paddingTop: 0, fontSize: '0.75rem' }}>{p.num}</span>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-arrow" style={{ fontSize: '1rem' }}>↗</a>
                  )}
                </div>
                <div className="project-title" style={{ fontSize: '1rem', marginBottom: 8 }}>{p.title}</div>
                <div className="project-desc" style={{ fontSize: '0.82rem', WebkitLineClamp: 3, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' }}>{p.desc}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 'auto', paddingTop: 14 }}>
                  {p.tags.map(t => (
                    <span key={t} className="tag" style={{ fontSize: '0.63rem' }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: 20, textAlign: 'center' }}>
          <button
            onClick={onSeeAll}
            className="btn btn-ghost"
            style={{ fontSize: '1.05rem', padding: '16px 32px' }}
          >
            See all projects & client work →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
