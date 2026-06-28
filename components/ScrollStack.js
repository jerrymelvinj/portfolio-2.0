'use client'

import { useRef, useEffect, useState } from 'react'
import React from 'react'

export function ScrollStackItem({ children, index = 0 }) {
  const ref = useRef(null)
  const [cardStyle, setCardStyle] = useState({})

  useEffect(() => {
  const handleScroll = () => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const scrolledPast = Math.max(0, -rect.top + 80)
    const scale = Math.max(0.88, 1 - scrolledPast * 0.00025)
    setCardStyle({ transform: `scale(${scale})` })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
  return (
    <div
      ref={ref}
      style={{
        position: 'sticky',
        top: `${64 + index * 20}px`,
        zIndex: index + 1,
        marginBottom: '24px',
        transformOrigin: 'top center',
        transition: 'transform 0.15s ease, opacity 0.15s ease',
        ...cardStyle,
      }}
    >
      {children}
    </div>
  )
}

export default function ScrollStack({ children }) {
  return (
    <div style={{ position: 'relative', paddingBottom: '48px' }}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, { index })
      )}
    </div>
  )
}