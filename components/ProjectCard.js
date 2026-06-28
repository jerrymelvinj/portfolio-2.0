'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function ProjectCard({ project, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
        <div className="card-wrap">

          {/* Inset thumbnail */}
          <div className="card-thumb">
            <div
              className="card-thumb-inner"
              style={{ backgroundColor: project.placeholderColor || '#DDDBD8' }}
            >
              {project.media?.type === 'image' && (
                <Image
                  src={project.media.src}
                  alt={project.title}
                  fill
                  className="card-media"
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}
              {project.media?.type === 'video' && (
                <video
                  autoPlay muted loop playsInline
                  className="card-media"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  <source src={project.media.src} type="video/mp4" />
                </video>
              )}
              <div className="card-thumb-overlay" />
            </div>
          </div>

          {/* Text content */}
          <div className="card-content">
            <h2 style={{
              fontSize: '17px',
              fontWeight: '600',
              color: '#111111',
              marginBottom: '6px',
              lineHeight: '1.3',
            }}>
              {project.title}
            </h2>
            <p style={{
              fontSize: '13px',
              color: '#666666',
              lineHeight: '1.6',
              marginBottom: project.tags ? '12px' : '0',
            }}>
              {project.description}
            </p>
            {project.tags && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '11px',
                    background: '#E8E7E4',
                    color: '#555555',
                    borderRadius: '100px',
                    padding: '3px 10px',
                    fontWeight: '500',
                    letterSpacing: '0.02em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

        </div>
      </Link>
    </div>
  )
}
