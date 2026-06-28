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

          {/* Image area */}
          <div
            className="card-img"
            style={{ backgroundColor: project.placeholderColor || '#E8E8E8' }}
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

            {/* Hover overlay */}
            <div className="card-overlay">
              <span className="card-view-btn">View project →</span>
            </div>

            {/* Tag pills */}
            {project.tags && (
              <div style={{
                position: 'absolute',
                bottom: '14px',
                left: '14px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                zIndex: 4,
              }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '10px',
                    background: 'rgba(255,255,255,0.92)',
                    color: '#111111',
                    borderRadius: '100px',
                    padding: '4px 10px',
                    letterSpacing: '0.04em',
                    fontWeight: '500',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Card content */}
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
            }}>
              {project.description}
            </p>
          </div>

        </div>
      </Link>
    </div>
  )
}
