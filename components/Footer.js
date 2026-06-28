export default function Footer() {
  return (
    <footer className="footer-inner">
      <p style={{ fontSize: '14px', color: '#999999' }}>
        © 2026 Jerry Melvin
      </p>
      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="https://linkedin.com/in/jerrymelvinjm" target="_blank" style={{ fontSize: '14px', color: '#999999', textDecoration: 'none' }}>
          LinkedIn
        </a>
        <a href="https://instagram.com/jerrymelvinjm" target="_blank" style={{ fontSize: '14px', color: '#999999', textDecoration: 'none' }}>
          Instagram
        </a>
      </div>
    </footer>
  )
}
