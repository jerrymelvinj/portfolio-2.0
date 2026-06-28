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
      <div style={{ display: 'flex', gap: '32px' }}>
        <Link href="/work" style={{ textDecoration: 'none', color: '#666666' }}>Work</Link>
        <Link href="/about" style={{ textDecoration: 'none', color: '#666666' }}>About</Link>
        <Link href="/contact" style={{ textDecoration: 'none', color: '#666666' }}>Contact</Link>
      </div>
    </nav>
  )
}