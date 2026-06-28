export default function ContactCTA() {
  return (
    <section style={{ padding: '0 48px 96px' }}>
      <div style={{
        background: '#4361EE',
        borderRadius: '24px',
        padding: '72px 48px',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '12px',
          color: 'rgba(255,255,255,0.6)',
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          marginBottom: '20px',
          fontWeight: '600',
        }}>
          Let's work together
        </p>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#FFFFFF',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          maxWidth: '520px',
          margin: '0 auto 36px',
        }}>
          Have a project in mind? Let's talk.
        </h2>
        <a href="https://wa.me/8248604075" className="btn btn-dark" style={{
          display: 'inline-block',
          background: '#111111',
          color: '#FFFFFF',
          padding: '14px 36px',
          borderRadius: '100px',
          fontSize: '15px',
          fontWeight: '600',
          textDecoration: 'none',
          letterSpacing: '0.01em',
        }}>
          Get in Touch
        </a>
      </div>
    </section>
  )
}
