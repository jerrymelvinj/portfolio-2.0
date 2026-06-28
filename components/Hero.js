export default function Hero() {
  return (
    <section className="hero-section">
      <p style={{
        fontSize: '13px',
        color: '#999999',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '24px',
      }}>
        Product Designer & Frontend Developer
      </p>
      <h1 className="hero-h1">
        Designing products that{' '}
        <em className="hero-serif">think</em>,{' '}
        <em className="hero-serif">feel</em>, and{' '}
        <em className="hero-serif">scale</em>.
      </h1>
      <div className="hero-ctas">
        <a href="#work" style={{
          padding: '14px 32px',
          backgroundColor: '#111111',
          color: '#FAFAF8',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '4px',
        }}>
          View Work
        </a>
        <a href="/resume.pdf" target="_blank" style={{
          padding: '14px 32px',
          backgroundColor: 'transparent',
          color: '#111111',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '4px',
          border: '1px solid #D5D3D0',
        }}>
          Download Resume
        </a>
      </div>
    </section>
  )
}
