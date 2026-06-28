'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          padding: '48px 0',
          borderTop: '1px solid #E7E7E7',
          cursor: 'pointer',
          transition: 'opacity 0.2s ease',
          opacity: isHovered ? 0.6 : 1,
        }}
      >
        <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
          {project.category}
        </p>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '500',
          color: '#111111',
          marginBottom: '16px',
          transition: 'transform 0.2s ease',
          transform: isHovered ? 'translateX(8px)' : 'translateX(0px)'
        }}>
          {project.title}
        </h2>
        <p style={{ fontSize: '18px', color: '#666666', maxWidth: '600px', marginBottom: '24px' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: '32px' }}>
          <span style={{ fontSize: '14px', color: '#666666' }}>{project.role}</span>
          <span style={{ fontSize: '14px', color: '#666666' }}>{project.year}</span>
        </div>
      </div>
    </Link>
  )
}