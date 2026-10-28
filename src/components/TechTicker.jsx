import React from 'react'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiFastapi,
  SiDocker,
  SiPytorch,
  SiLangchain,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { TbBrandOpenai } from 'react-icons/tb'

const TECH_ITEMS = [
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#00D8FE' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#111111' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Azure', icon: VscAzure, color: '#0078D4' },
  { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
  { name: 'OpenAI', icon: TbBrandOpenai, color: '#111111' },
  { name: 'FastAPI', icon: SiFastapi, color: '#05998B' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
]

export default function TechTicker() {
  const repeated = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS]

  return (
    <div className="tech-ticker-section">
      <div className="tech-ticker-container">
        <div className="tech-ticker-badge">
          <span>I WORK WITH</span>
          <span className="ticker-chevron">›</span>
        </div>
        <div className="tech-ticker-marquee-wrapper">
          <div className="tech-ticker-track">
            {repeated.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="tech-ticker-item">
                  <Icon className="tech-ticker-icon" style={{ color: item.color }} />
                  <span className="tech-ticker-name">{item.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

