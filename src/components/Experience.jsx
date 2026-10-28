import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { LuGraduationCap } from 'react-icons/lu'
import LottiePlayer from './LottiePlayer'
import workingAnim from '../assets/Man Working on Laptop.json'

const WORK_EXPERIENCE = [
  {
    period: 'Dec 2024\n— Present',
    isActive: true,
    company: 'SAAP Technologies',
    role: 'AI & Software Products · Hyderabad',
    logo: '/saap.png',
    subProjects: [
      {
        logo: '/novo wellness.ico',
        title: 'NOVO Wellness — Emotional Intelligence (AI)',
        desc: 'AI-ed-tech platform for Grades 6–10 focused on emotional intelligence with assessments, games, resources and teacher dashboards.',
        tags: ['Assessment', 'React', 'FastAPI', 'Azure'],
      },
      {
        logo: '/novo health care.png',
        title: 'NOVO Neurotech — Clinical Neurological Insights',
        desc: 'AI/ML models for neurological disorders (Parkinson\'s, Alzheimer\'s, Epilepsy) using medical data and ML pipelines.',
        tags: ['Modeling', 'Python', 'Clinical AI', 'Research'],
      },
    ],
  },
  {
    period: 'Nov 2023\n— Jan 2024',
    isActive: false,
    company: 'Web Development Intern',
    role: 'CodeClause · India',
    logo: '/coderscave.png',
    desc: 'Built responsive web apps using HTML, React and modern JS. Gained hands-on experience in deployment and real-world development workflows.',
  },
  {
    period: 'Apr 2021\n— Nov 2021',
    isActive: false,
    company: 'Treasurer',
    role: 'Computer Society of India · CMR College',
    logo: '/csi_logo.png',
  },
]

const EDUCATION = [
  {
    institution: 'Jawaharlal Nehru Technological University',
    degree: 'B.Tech — Computer Science & IT',
    score: 'CGPA: 8.7',
    period: '2018 — 2022 | Hyderabad',
    logo: '/cvr.webp',
    hasCapBadge: true,
  },
  {
    institution: 'Intermediate — MPC',
    degree: 'Vijayawada Junior College',
    period: '2016 — 2018',
    logo: '/kmjc.png',
  },
  {
    institution: 'Secondary School (SSC)',
    degree: 'Narayana English Medium School',
    period: '2015 — 2016',
    logo: '/hps-ramanthapur.jpg',
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="experience-section" id="experience" aria-label="Experience & Education" ref={ref}>
      <div className="experience-container">
        {/* Header with Eyebrow and Handwritten Subtitle with Arrow */}
        <div className="experience-header-row">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="experience-eyebrow">MY JOURNEY</div>
            <h2 className="experience-main-title">Experience</h2>
          </motion.div>

          {/* Subtitle with curved doodle arrow placed under the text in orange */}
          <div className="experience-header-subtitle-wrap">
            <span className="experience-handwritten-text">
              Building real products, solving real problems.
            </span>
            <svg
              viewBox="0 0 60 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="experience-doodle-arrow"
            >
              <path
                d="M48 4 C 32 8, 16 16, 14 30"
                stroke="#FF5E2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="4 3"
              />
              <path
                d="M22 24 L 14 30 L 8 22"
                stroke="#FF5E2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* 2-Column Experience & Education Grid */}
        <div className="experience-grid">
          {/* ── Left Column: Timeline ── */}
          <motion.div
            className="experience-timeline-col"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="exp-timeline-wrapper">
              {WORK_EXPERIENCE.map((item, idx) => (
                <div key={idx} className="exp-timeline-item">
                  {/* Left Date column */}
                  <div className="exp-timeline-date">
                    <span className="date-text">{item.period}</span>
                  </div>

                  {/* Center Dot & Track perfectly aligned with Logo center */}
                  <div className="exp-timeline-axis">
                    <div className={`exp-dot ${item.isActive ? 'is-active' : ''}`} />
                    {idx < WORK_EXPERIENCE.length - 1 && <div className="exp-line" />}
                  </div>

                  {/* Right Content */}
                  <div className="exp-timeline-content">
                    {/* Header: Logo and text */}
                    <div className="exp-company-header">
                      {item.logo && (
                        <div className="exp-company-logo-wrap">
                          <img
                            src={item.logo}
                            alt={item.company}
                            className="exp-company-logo"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="exp-company-text-group">
                        <h3 className="exp-company-name">{item.company}</h3>
                        <div className="exp-company-role">{item.role}</div>
                      </div>
                    </div>

                    {/* Simple description if not subProjects */}
                    {item.desc && (
                      <p className="exp-simple-desc">{item.desc}</p>
                    )}

                    {/* Subprojects (NOVO Wellness & NOVO Neurotech) */}
                    {item.subProjects && (
                      <div className="exp-subprojects-list">
                        {item.subProjects.map((sub, sIdx) => (
                          <div key={sIdx} className="exp-subproject-card">
                            <div className="exp-sub-header">
                              <img
                                src={sub.logo}
                                alt={sub.title}
                                className="exp-sub-logo"
                                loading="lazy"
                              />
                              <h4 className="exp-sub-title">{sub.title}</h4>
                            </div>
                            <p className="exp-sub-desc">{sub.desc}</p>
                            <div className="exp-sub-tags">
                              {sub.tags.map((tag) => (
                                <span key={tag} className="exp-sub-tag">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Column: Education & Laptop Illustration ── */}
          <motion.div
            className="experience-education-col"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Education Cards */}
            <div className="education-cards-stack">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="edu-card-item">
                  <div className="edu-card-left">
                    <div className="edu-logo-wrapper">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="edu-logo-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="edu-info">
                      <h4 className="edu-institution-name">{edu.institution}</h4>
                      <div className="edu-degree-text">{edu.degree}</div>
                      {edu.score && <div className="edu-score-pill">{edu.score}</div>}
                      <div className="edu-period-text">{edu.period}</div>
                    </div>
                  </div>

                  {edu.hasCapBadge && (
                    <div className="edu-cap-badge">
                      <LuGraduationCap size={18} color="#1F2937" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Man Working on Laptop Lottie */}
            <div className="exp-laptop-illustration">
              <LottiePlayer
                src={workingAnim}
                style={{ width: '100%', maxWidth: '340px', height: 'auto' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
