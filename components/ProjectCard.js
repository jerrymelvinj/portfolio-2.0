'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const cardRef = useRef(null)

  // Scroll into view animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  // Parallax on image
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.04

  return (
    <div
      ref={cardRef}
      style={{
        marginBottom: '32px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0px)' : 'translateY(48px)',
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      <Link href={`/work/${project.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid #E7E7E7',
            cursor: 'pointer',
            transition: 'transform 0.4s ease, box-shadow 0.4s ease',
            transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)',
            boxShadow: isHovered
              ? '0 24px 64px rgba(0,0,0,0.1)'
              : '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          {/* Image Area with Parallax */}
          <div style={{
            width: '100%',
            height: '480px',
            backgroundColor: project.placeholderColor || '#E7E7E7',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              inset: '-10%',
              backgroundColor: project.placeholderColor || '#E7E7E7',
              transform: `translateY(${parallaxOffset}px)`,
              transition: 'transform 0.1s linear',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                {project.title}
              </span>
            </div>
          </div>

          {/* Text Area */}
          <div style={{
            padding: '32px',
            backgroundColor: '#FAFAF8',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
            <div>
              <p style={{
                fontSize: '12px',
                color: '#666666',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '8px',
              }}>
                {project.category}
              </p>
              <h2 style={{
                fontSize: '28px',
                fontWeight: '500',
                color: '#111111',
                marginBottom: '8px',
              }}>
                {project.title}
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#666666',
                maxWidth: '560px',
              }}>
                {project.description}
              </p>
            </div>
            <div style={{
              fontSize: '24px',
              color: '#111111',
              transition: 'transform 0.3s ease',
              transform: isHovered ? 'translate(4px, -4px)' : 'translate(0,0)',
              marginLeft: '32px',
              flexShrink: 0,
            }}>
              ↗
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}