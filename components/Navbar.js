'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav-inner">
      <Link href="/" style={{ textDecoration: 'none', color: '#EDEBE8', fontWeight: '500' }}>
        Jerry Melvin
      </Link>

      {/* Desktop links */}
      <div className="nav-links">
        <Link href="/work" style={{ textDecoration: 'none', color: '#888888' }}>Work</Link>
        <Link href="/about" style={{ textDecoration: 'none', color: '#888888' }}>About</Link>
        <Link href="https://wa.me/8248604075" style={{
          textDecoration: 'none',
          color: '#111111',
          backgroundColor: '#EDEBE8',
          padding: '10px 20px',
          borderRadius: '100px',
          fontSize: '14px',
          fontWeight: '500',
        }}>
          Get in Touch
        </Link>
      </div>

      {/* Hamburger (mobile only) */}
      <button className="nav-hamburger" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={24} />
      </button>

      {/* Mobile overlay */}
      <div className={`nav-overlay ${open ? 'open' : ''}`}>
        <button className="nav-overlay-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={28} />
        </button>
        <Link href="/work" onClick={() => setOpen(false)}>Work</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="https://wa.me/8248604075" onClick={() => setOpen(false)} style={{
          fontSize: '18px',
          fontWeight: '500',
          color: '#111111',
          backgroundColor: '#EDEBE8',
          padding: '14px 32px',
          borderRadius: '100px',
          textDecoration: 'none',
        }}>
          Get in Touch
        </Link>
      </div>
    </nav>
  )
}
