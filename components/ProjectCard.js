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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ cursor: 'none' }}
        >
          {/* Image */}
          <div
            ref={imageRef}
            onMouseMove={handleMouseMove}
            style={{
              width: '100%',
              height: '360px',
              backgroundColor: project.placeholderColor || '#E7E7E7',
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '20px',
            }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.25)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                {project.title}
              </span>
            </div>

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

          {/* Text row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '16px',
            alignItems: 'flex-start',
          }}>
            <div>
              <h2 style={{
                fontSize: '20px',
                fontWeight: '500',
                color: '#111111',
                marginBottom: '6px',
                lineHeight: '1.2',
              }}>
                {project.title}
              </h2>
              <p style={{
                fontSize: '14px',
                color: '#666666',
                lineHeight: '1.6',
              }}>
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'flex-end',
              flexShrink: 0,
            }}>
              {project.tags?.map(tag => (
                <span key={tag} style={{
                  fontSize: '10px',
                  color: '#666666',
                  border: '1px solid #D8D8D8',
                  borderRadius: '100px',
                  padding: '4px 10px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
