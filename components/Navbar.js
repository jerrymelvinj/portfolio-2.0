import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 48px',
      borderBottom: '1px solid #E7E7E7'
    }}>
      <Link href="/" style={{ textDecoration: 'none', color: '#111111', fontWeight: '500' }}>
        Jerry Melvin
      </Link>
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        <Link href="/work" style={{ textDecoration: 'none', color: '#666666' }}>Work</Link>
        <Link href="/about" style={{ textDecoration: 'none', color: '#666666' }}>About</Link>
        <Link href="https://wa.me/8248604075" style={{
          textDecoration: 'none',
          color: '#FAFAF8',
          backgroundColor: '#111111',
          padding: '10px 20px',
          borderRadius: '100px',
          fontSize: '14px',
          fontWeight: '500',
        }}>
          Get in Touch
        </Link>
      </div>
    </nav>
  )
}