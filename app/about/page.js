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
    description: 'Leading UI/UX for an internal SaaS reporting tool and high-conversion D2C landing pages. Established a scalable design system using Figma variables and components. Drove a 30% increase in marketplace sales through optimised layout and clear calls-to-action.',
  },
  {
    period: 'Dec 2024 – Feb 2025',
    role: 'UI/UX Designer',
    company: 'Griticon Technologies Pvt. Ltd.',
    description: 'Designed responsive, minimal-themed interfaces for mobile and tablet apps, adhering to iOS and Material Design guidelines. Created interactive prototypes to validate user flows before development.',
  },
  {
    period: 'May 2024 – Jul 2024',
    role: 'Graphic Design Trainer',
    company: 'Academy of Media and Design',
    description: "Mentored students on design principles and tools as part of the government's Kalike Jothege Kaushalya initiative. Translated complex design concepts into accessible lessons.",
  },
]

export default function About() {
  return (
    <>
      <main>
        <Navbar />

        <div className="about-container">

          {/* Hero */}
          <div style={{ marginBottom: '56px' }}>
            <p className="about-eyebrow">About</p>
            <h1 className="about-h1">
              Designer who thinks in<br />systems and feels in details.
            </h1>
            <p style={{ fontSize: '18px', color: '#666666', lineHeight: '1.7', maxWidth: '540px' }}>
              I'm Jerry Melvin — a product designer and frontend developer based in Bengaluru, working at the intersection of UX thinking, visual craft, and frontend code.
            </p>
          </div>

          {/* Meta strip */}
          <div className="about-meta-strip">
            <div className="about-meta-item">
              <p className="about-meta-label">Role</p>
              <p className="about-meta-value">Product Designer</p>
            </div>
            <div className="about-meta-item">
              <p className="about-meta-label">Location</p>
              <p className="about-meta-value">Bengaluru, India</p>
            </div>
          </div>

          {/* Bio */}
          <div style={{ marginBottom: '80px' }}>
            <p style={{ fontSize: '17px', color: '#444444', lineHeight: '1.85', maxWidth: '620px', marginBottom: '20px' }}>
              I started in UI/UX with a focus on design systems — learning how to build consistency at scale before learning how to break it intentionally. Over time I moved toward full-stack product work: designing, building, and shipping end-to-end.
            </p>
            <p style={{ fontSize: '17px', color: '#444444', lineHeight: '1.85', maxWidth: '620px' }}>
              Outside of client work, I'm building ReflexityAI — an AI-powered platform for automating personalised client communication. It's where I test every idea I'm not yet ready to sell.
            </p>
          </div>

          {/* Skills */}
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
            <div style={{ borderTop: '1px solid #E7E7E7' }} />
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '80px' }}>
            <p className="about-section-label">Experience</p>
            {experience.map(job => (
              <div key={job.role} className="about-exp-row">
                <p style={{ fontSize: '13px', color: '#999999', lineHeight: '1.5', paddingTop: '2px' }}>
                  {job.period}
                </p>
                <div>
                  <p style={{ fontSize: '17px', fontWeight: '500', color: '#111111', marginBottom: '3px' }}>
                    {job.role}
                  </p>
                  <p style={{ fontSize: '13px', color: '#AAAAAA', marginBottom: '14px', letterSpacing: '0.02em' }}>
                    {job.company}
                  </p>
                  <p style={{ fontSize: '15px', color: '#444444', lineHeight: '1.75' }}>
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #E7E7E7' }} />
          </div>

          {/* Contact CTA */}
          <div style={{ textAlign: 'center', paddingBottom: '100px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '500', color: '#111111', marginBottom: '12px' }}>
              Let's work together
            </h2>
            <p style={{ fontSize: '16px', color: '#666666', marginBottom: '32px' }}>
              Open to freelance projects, full-time roles, and interesting conversations.
            </p>
            <a href="https://wa.me/8248604075" style={{
              padding: '14px 40px',
              backgroundColor: '#111111',
              color: '#FAFAF8',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              borderRadius: '4px',
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
