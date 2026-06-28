export default function Hero() {
  return (
    <section className="hero-section">
      <p style={{
        fontSize: '13px',
        color: 'rgba(255,255,255,0.65)',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '24px',
        fontWeight: '500',
      }}>
        Product Designer & Creative Developer
      </p>
      <h1 className="hero-h1">
        Designing things that quietly{' '}
        <em className="hero-serif">think</em>,{' '}
        <em className="hero-serif">feel</em>, and{' '}
        <em className="hero-serif">scale</em>.
      </h1>
      <div className="hero-ctas">
        <a href="#work" style={{
          padding: '14px 32px',
          backgroundColor: '#FFFFFF',
          color: '#4361EE',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '600',
          borderRadius: '100px',
        }}>
          View Work
        </a>
        <a href="/resume.pdf" target="_blank" style={{
          padding: '14px 32px',
          backgroundColor: 'transparent',
          color: '#FFFFFF',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: '500',
          borderRadius: '100px',
          border: '1px solid rgba(255,255,255,0.4)',
        }}>
          Download Resume
        </a>
      </div>
    </section>
  )
}
