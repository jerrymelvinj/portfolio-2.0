export default function Footer() {
  return (
    <footer style={{
      padding: '48px',
      borderTop: '1px solid #E7E7E7',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '96px'
    }}>
      <p style={{ fontSize: '14px', color: '#666666' }}>
        © 2026 Jerry Melvin
      </p>
      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="https://linkedin.com/in/jerrymelvinjm" target="_blank" style={{ fontSize: '14px', color: '#666666', textDecoration: 'none' }}>
          LinkedIn
        </a>
        <a href="https://instagram.com/jerrymelvinjm" target="_blank" style={{ fontSize: '14px', color: '#666666', textDecoration: 'none' }}>
          Instagram
        </a>
      </div>
    </footer>
  )
}