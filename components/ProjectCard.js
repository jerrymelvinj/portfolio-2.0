'use client'

/*
 * MEDIA NOTE — adding video or GIF to the card image area
 *
 * Video is strongly preferred over GIF (same visual, ~10× smaller file).
 * Use <video> with these attributes:
 *
 *   <video autoPlay muted loop playsInline>
 *     <source src="/projects/reflexity-ai.mp4" type="video/mp4" />
 *   </video>
 *
 * `muted` and `playsInline` are required for autoplay to work in all browsers.
 *
 * Dimensions to design for:
 *   - Card image area: 360px tall, ~660–720px wide (half the page)
 *   - Aspect ratio: 16:9
 *   - Export resolution: 1280 × 720 (sharp at card size, fast to load)
 *   - Format: MP4 (H.264) for widest support; add WebM as a fallback for smaller files
 *
 * GIF caveat: a 16:9 GIF at 1280×720 easily hits 20–40MB — convert to MP4 instead.
 *
 * When ready, add a `media` field to the project in content/projects.js:
 *   media: { type: 'video', src: '/projects/reflexity-ai.mp4' }
 *   media: { type: 'image', src: '/projects/reflexity-ai.jpg' }
 * Then swap the placeholder <div> below for <video> or <img> accordingly.
 */

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  function handleMouseMove(e) {
    const rect = imageRef.current.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

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
        <div
          className="card-wrap"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ cursor: 'none' }}
        >
          {/* Image area */}
          <div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            className="card-img"
            style={{ backgroundColor: project.placeholderColor || '#D8D6D3' }}
          >
            {/* Media */}
            {project.media?.type === 'image' && (
              <Image
                src={project.media.src}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            {project.media?.type === 'video' && (
              <video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}>
                <source src={project.media.src} type="video/mp4" />
              </video>
            )}
            {!project.media && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.12)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {project.title}
                </span>
              </div>
            )}

            {/* Tag pills — bottom-left overlay */}
            {project.tags && (
              <div style={{
                position: 'absolute',
                bottom: '14px',
                left: '14px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                zIndex: 2,
              }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '10px',
                    background: 'rgba(17,17,17,0.72)',
                    color: '#FFFFFF',
                    borderRadius: '100px',
                    padding: '4px 10px',
                    letterSpacing: '0.06em',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Cursor badge */}
            <div style={{
              position: 'absolute',
              left: cursorPos.x,
              top: cursorPos.y,
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.95)',
              color: '#111111',
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'grid',
              placeItems: 'center',
              transform: isHovered
                ? 'translate(-50%, -50%) scale(1)'
                : 'translate(-50%, -50%) scale(0)',
              opacity: isHovered ? 1 : 0,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              pointerEvents: 'none',
            }}>
              View
            </div>
          </div>

          {/* Card content */}
          <div className="card-content">
            <h2 style={{
              fontSize: '18px',
              fontWeight: '500',
              color: '#111111',
              marginBottom: '5px',
              lineHeight: '1.3',
            }}>
              {project.title}
            </h2>
            <p style={{
              fontSize: '13px',
              color: '#888888',
              lineHeight: '1.55',
            }}>
              {project.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  )
}
