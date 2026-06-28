export default function Hero() {
  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 40px',
      background: 'radial-gradient(ellipse at 60% 40%, #e8e4f0 0%, #f5f3ee 40%, #FAFAF8 100%)',
      position: 'relative',
    }}>
      <p style={{
        fontSize: '13px',
        color: '#666666',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        marginBottom: '24px',
      }}>
        Product Designer & Frontend Developer
      </p>
      <h1 style={{
        fontSize: '72px',
        fontWeight: '500',
        lineHeight: '1.1',
        color: '#111111',
        maxWidth: '800px',
        marginBottom: '48px',
      }}>
        Designing products that think, feel, and scale.
      </h1>
      <div style={{ display: 'flex', gap: '16px' }}>
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
          border: '1px solid #E7E7E7',
        }}>
          Download Resume
        </a>
      </div>
    </section>
  )
}