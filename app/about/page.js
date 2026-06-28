import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const skills = [
  { category: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping', 'Visual Design'] },
  { category: 'UX Research', items: ['User Interviews', 'Usability Testing', 'Information Architecture', 'User Flows', 'Wireframing', 'Data Visualization'] },
  { category: 'Collaboration', items: ['Design Systems', 'Agile / Scrum', 'Developer Handoff', 'Stakeholder Management', 'UX Writing', 'Storytelling'] },
]

const experience = [
  {
    period: 'Jul 2024 – Present',
    role: 'Product Designer (UI/UX)',
    company: 'AKOI Marketing Hub Pvt. Ltd.',
    description: 'Leading UI/UX for an internal SaaS reporting tool and D2C landing pages. Established a scalable design system and drove a 30% increase in marketplace sales.',
  },
  {
    period: 'Dec 2024 – Feb 2025',
    role: 'UI/UX Designer',
    company: 'Griticon Technologies Pvt. Ltd.',
    description: 'Designed responsive, minimal-themed interfaces for mobile and tablet apps following iOS and Material Design guidelines.',
  },
  {
    period: 'May 2024 – Jul 2024',
    role: 'Graphic Design Trainer',
    company: 'Academy of Media and Design',
    description: "Mentored students on design principles as part of the government's Kalike Jothege Kaushalya initiative.",
  },
]

export default function About() {
  return (
    <>
      <main>
        <Navbar />

        <div className="about-container">

          {/* Top: Bio + Info card */}
          <div className="about-top-cols">

            {/* Left — bio */}
            <div>
              <p className="about-eyebrow">About me</p>
              <h1 className="about-h1">
                Someone who feels first, then designs.
              </h1>
              <p style={{ fontSize: '18px', color: '#555555', lineHeight: '1.8', marginBottom: '20px' }}>
                I'm Jerry Melvin. A product designer and frontend developer based in Bengaluru. I don't always know where a design is going when I start, but somewhere in the middle, it finds its shape. That's the part I live for.
              </p>
              <p style={{ fontSize: '18px', color: '#555555', lineHeight: '1.8', marginBottom: '20px' }}>
                I got into UI/UX quietly, without a grand plan. Learned design systems first, the boring but necessary kind, then slowly started understanding when to break them. Over time, I found myself designing and building together, not separately. One fed the other.
              </p>
            </div>

            {/* Right — info card */}
            <div className="about-info-card">
              <div className="about-info-row">
                <p style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>Role</p>
                <p style={{ fontSize: '15px', color: '#111111', fontWeight: '600' }}>Product Designer</p>
              </div>
              <div className="about-info-row">
                <p style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>Based in</p>
                <p style={{ fontSize: '15px', color: '#111111', fontWeight: '600' }}>Bengaluru, India</p>
              </div>
              <div className="about-info-row">
                <p style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>Since</p>
                <p style={{ fontSize: '15px', color: '#111111', fontWeight: '600' }}>2024</p>
              </div>
              <div className="about-info-row">
                <p style={{ fontSize: '11px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>Currently building</p>
                <p style={{ fontSize: '15px', color: '#111111', fontWeight: '600' }}>-</p>
              </div>
            </div>

          </div>

          {/* Skills — tabular */}
          <div style={{ marginBottom: '80px' }}>
            <p className="about-section-label">Skills</p>
            {skills.map(s => (
              <div key={s.category} className="about-skill-row">
                <p style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.08em', paddingTop: '2px' }}>
                  {s.category}
                </p>
                <p style={{ fontSize: '15px', color: '#111111', lineHeight: '1.85' }}>
                  {s.items.join(' · ')}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #E8E8E8' }} />
          </div>

          {/* Bottom: Experience + Currently Building — two cards */}
          <div className="about-bottom-cards">

            {/* Experience card */}
            <div className="about-card">
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#111111', letterSpacing: '0.01em', marginBottom: '20px' }}>
                Experience
              </p>
              {experience.map(job => (
                <div key={job.role} className="about-card-job">
                  <p style={{ fontSize: '11px', color: '#999999', marginBottom: '4px', letterSpacing: '0.02em' }}>
                    {job.period}
                  </p>
                  <p style={{ fontSize: '15px', fontWeight: '600', color: '#111111', marginBottom: '1px' }}>
                    {job.role}
                  </p>
                  <p style={{ fontSize: '13px', color: '#888888' }}>
                    {job.company}
                  </p>
                </div>
              ))}
            </div>

            {/* Currently Building card */}
            <div className="about-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: '14px', fontWeight: '700', color: '#111111', letterSpacing: '0.01em', marginBottom: '20px' }}>
                Currently Building
              </p>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '22px', fontWeight: '700', color: '#111111', marginBottom: '10px', lineHeight: '1.2' }}>
                  OMRON
                </p>
                <p style={{ fontSize: '14px', color: '#666666', lineHeight: '1.7', marginBottom: '24px' }}>
                  An AI-powered platform that automates and personalises client communication, built from the ground up as designer and developer.
                </p>
                <p style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Product Design · 2026
                </p>
              </div>
              <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid #E8E8E8' }}>
                <a href="/work/omron" className="text-link" style={{
                  fontSize: '13px',
                  color: '#4361EE',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  View case study →
                </a>
              </div>
            </div>

          </div>

          {/* Contact CTA */}
          <div style={{ textAlign: 'center', paddingBottom: '100px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#111111', marginBottom: '12px', letterSpacing: '-0.01em' }}>
              If something here felt familiar, let's talk.
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', marginBottom: '32px' }}>
              Freelance, full-time, or just a conversation that goes somewhere: I'm around.
            </p>
            <a href="https://wa.me/8248604075" className="btn btn-blue" style={{
              padding: '14px 40px',
              backgroundColor: '#4361EE',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              borderRadius: '100px',
              display: 'inline-block',
            }}>
              Get in Touch
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
