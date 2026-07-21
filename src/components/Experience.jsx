import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import LottiePlayer from './LottiePlayer'
import workingAnim from '../assets/Man Working on Laptop.json'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div ref={ref} className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <span className="label">Work History</span>
          <h2 className="heading-xl" style={{ marginTop: 12 }}>Experience</h2>
        </motion.div>

        <div className="grid-2" style={{ gap: 72, gridTemplateColumns: '1.4fr 1fr' }}>
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="timeline">
              
              {/* SAAP */}
              <div className="timeline-item">
                <div className="timeline-left">
                  <div className="timeline-year">Dec 2024<br />— Present</div>
                </div>
                <div className="timeline-right">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <img src="/saap.png" alt="SAAP" className="edu-logo" />
                    <div>
                      <div className="timeline-company" style={{ marginBottom: 0 }}>SAAP Technologies</div>
                      <div className="timeline-role" style={{ marginBottom: 0 }}>AI Software Developer · Hyderabad</div>
                    </div>
                  </div>

                  <div className="card" style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <img src="/novo wellness.ico" alt="NOVO Wellness" className="edu-logo" style={{ width: 36, height: 36 }} />
                      <div className="timeline-sub-title" style={{ marginBottom: 0 }}>NOVO Wellness — Student Mental Health AI</div>
                    </div>
                    <div className="timeline-sub-desc">
                      Architected an end-to-end agentic AI platform for students, teachers, and schools using Python, FastAPI, and React. Designed multi-agent pipelines with LLaMA and Mistral for psychometric assessment interpretation, student profiling, and personalized recommendations. Dashboards enabled early identification of behavioral patterns and improved counselor intervention speed.
                    </div>
                    <div className="timeline-tags">
                      {['LLaMA', 'Mistral', 'FastAPI', 'React', 'Multi-Agent'].map(t => (
                        <span key={t} className="tag" style={{ fontSize: '0.67rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <img src="/novo health care.png" alt="NOVO Neurotech" className="edu-logo" style={{ width: 28, height: 28 }} />
                      <div className="timeline-sub-title" style={{ marginBottom: 0 }}>NOVO Neurotech — Clinical Neurological Insights</div>
                    </div>
                    <div className="timeline-sub-desc">
                      Built AI analysis pipelines for neurological scan data to support doctor decision-making. Implemented DICOM preprocessing, feature extraction, and deep learning model training using TensorFlow and PyTorch. Deployed scalable inference APIs for consistent clinical interpretation across multi-site environments.
                    </div>
                    <div className="timeline-tags">
                      {['TensorFlow', 'PyTorch', 'DICOM', 'FastAPI', 'Clinical AI'].map(t => (
                        <span key={t} className="tag" style={{ fontSize: '0.67rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CodersCave */}
              <div className="timeline-item">
                <div className="timeline-left">
                  <div className="timeline-year">May 2024<br />— Jun 2024</div>
                </div>
                <div className="timeline-right">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                    <img src="/coderscave.png" alt="CodersCave" className="edu-logo" />
                    <div>
                      <div className="timeline-company" style={{ marginBottom: 0 }}>Web Development Intern</div>
                      <div className="timeline-role" style={{ marginBottom: 0 }}>CodersCave · India</div>
                    </div>
                  </div>
                  <div className="timeline-sub-desc">
                    Crafted my personal portfolio website using HTML, focusing on semantic tags for accessibility and clear structure. Designed with user-friendly navigation to showcase my skills and experiences effectively.
                  </div>
                </div>
              </div>

              {/* CSI */}
              <div className="timeline-item">
                <div className="timeline-left">
                  <div className="timeline-year">Mar 2023<br />— Mar 2024</div>
                </div>
                <div className="timeline-right">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                    <img src="/csi_logo.png" alt="Computer Society of India" className="edu-logo" />
                    <div>
                      <div className="timeline-company" style={{ marginBottom: 0 }}>Treasurer</div>
                      <div className="timeline-role" style={{ marginBottom: 0 }}>Computer Society of India · CVR College</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}>
            <span className="label" style={{ display: 'block', marginBottom: 28 }}>Education</span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* B.Tech */}
              <div className="card edu-card">
                <div className="edu-row">
                  <div className="edu-content-left">
                    <img src="/cvr.webp" alt="CVR College Logo" className="edu-logo" />
                    <div>
                      <div className="edu-degree">B.Tech — Computer Science & IT</div>
                      <div className="edu-college">CVR College of Engineering (JNTUH)</div>
                      <div className="label" style={{ marginTop: 4 }}>July 2021 – May 2025 · Hyderabad</div>
                    </div>
                  </div>
                  <span className="tag tag-dark edu-score">8.7 CGPA</span>
                </div>
              </div>

              {/* Intermediate */}
              <div className="card edu-card">
                <div className="edu-row">
                  <div className="edu-content-left">
                    <img src="/kmjc.png" alt="Krishnamurthy Junior College Logo" className="edu-logo" />
                    <div>
                      <div className="edu-degree">Intermediate — MPC</div>
                      <div className="edu-college">Krishnamurthy Junior College</div>
                      <div className="label" style={{ marginTop: 4 }}>2019 – 2021</div>
                    </div>
                  </div>
                  <span className="tag tag-dark edu-score">95.6%</span>
                </div>
              </div>

              {/* Schooling */}
              <div className="card edu-card">
                <div className="edu-row">
                  <div className="edu-content-left">
                    <img src="/hps-ramanthapur.jpg" alt="HPS Ramanthapur Logo" className="edu-logo" />
                    <div>
                      <div className="edu-degree">Secondary School (CBSEdecra)</div>
                      <div className="edu-college">The Hyderabad Public School, Ramanthapur</div>
                      <div className="label" style={{ marginTop: 4 }}>2009 – 2019</div>
                    </div>
                  </div>
                  <span className="tag tag-dark edu-score">87%</span>
                </div>
              </div>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 40, opacity: 0.8 }}>
              <div style={{ width: 450, height: 450 }}>
                <LottiePlayer src={workingAnim} style={{ width: '100%', height: '100%' }} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
