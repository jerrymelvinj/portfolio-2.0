import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function About() {
  return (
    <>
    <main>
          <Navbar />

          {/* Hero */}
          <section className="about-hero">
              <p style={{
                  fontSize: '13px',
                  color: '#666666',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
              }}>
                  About
              </p>
              <h1 className="about-h1">
                  Designer who thinks in systems and feels in details.
              </h1>
              <p style={{
                  fontSize: '20px',
                  color: '#666666',
                  lineHeight: '1.7',
                  maxWidth: '620px',
              }}>
                  I'm Jerry Melvin — a product designer and frontend developer based in Bengaluru. I work at the intersection of UX thinking, visual craft, and frontend code. I care about products that are both well-reasoned and well-felt.
              </p>
          </section>

          <div className="divider" />

          {/* Bio */}
          <section className="page-section">
              <p style={{ fontSize: '18px', color: '#444444', lineHeight: '1.8', maxWidth: '640px', marginBottom: '24px' }}>
                  I started in UI/UX with a focus on design systems — learning how to build consistency at scale before learning how to break it intentionally. Over time I moved toward full-stack product work: designing, building, and shipping end-to-end.
              </p>
              <p style={{ fontSize: '18px', color: '#444444', lineHeight: '1.8', maxWidth: '640px', marginBottom: '24px' }}>
                  Outside of client work, I'm building ReflexityAI — an AI-powered platform for automating personalised client communication. It's where I test every idea I'm not yet ready to sell.
              </p>
              <p style={{ fontSize: '18px', color: '#444444', lineHeight: '1.8', maxWidth: '640px' }}>
                  I also write — journal-style prose, stream-of-consciousness vignettes, things that don't have a brief. Writing keeps my design thinking honest.
              </p>
          </section>

          <div className="divider" />

          {/* Skills */}
          <section className="page-section">
              <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '48px' }}>
                  Skills
              </p>
              <div className="grid-3">
                  <div>
                      <p style={{ fontSize: '13px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Design</p>
                      {['Figma', 'Adobe XD', 'Adobe Photoshop', 'Adobe Illustrator', 'Prototyping', 'Visual Design'].map(skill => (
                          <p key={skill} style={{ fontSize: '16px', color: '#111111', marginBottom: '10px' }}>{skill}</p>
                      ))}
                  </div>
                  <div>
                      <p style={{ fontSize: '13px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>UX Research</p>
                      {['User Interviews', 'Usability Testing', 'Information Architecture', 'User Flows', 'Wireframing', 'Data Visualization'].map(skill => (
                          <p key={skill} style={{ fontSize: '16px', color: '#111111', marginBottom: '10px' }}>{skill}</p>
                      ))}
                  </div>
                  <div>
                      <p style={{ fontSize: '13px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Collaboration</p>
                      {['Design Systems', 'Agile / Scrum', 'Developer Handoff', 'Stakeholder Management', 'UX Writing', 'Storytelling'].map(skill => (
                          <p key={skill} style={{ fontSize: '16px', color: '#111111', marginBottom: '10px' }}>{skill}</p>
                      ))}
                  </div>
              </div>
          </section>

          <div className="divider" />

          {/* Experience */}
          <section className="page-section">
              <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '48px' }}>
                  Experience
              </p>
              {[
                  {
                      role: 'Product Designer (UI/UX)',
                      company: 'AKOI Marketing Hub Pvt. Ltd.',
                      period: 'Jul 2024 — Present',
                      description: 'Leading UI/UX for an internal SaaS reporting tool and high-conversion D2C landing pages. Established a scalable design system using Figma variables and components. Drove a 30% increase in marketplace sales through optimised layout and clear calls-to-action.',
                  },
                  {
                      role: 'UI/UX Designer',
                      company: 'Griticon Technologies Pvt. Ltd.',
                      period: 'Dec 2024 — Feb 2025',
                      description: 'Freelance engagement. Designed responsive, minimal-themed interfaces for mobile and tablet apps, adhering to iOS and Material Design guidelines. Created interactive prototypes to validate user flows before development.',
                  },
                  {
                      role: 'Graphic Design Trainer',
                      company: 'Academy of Media and Design',
                      period: 'May 2024 — Jul 2024',
                      description: 'Mentored students on design principles and tools as part of the government\'s Kalike Jothege Kaushalya initiative. Translated complex design concepts into accessible lessons.',
                  },
              ].map((job) => (
                  <div key={job.role} className="exp-row">
                      <div>
                          <p style={{ fontSize: '14px', color: '#666666' }}>{job.period}</p>
                      </div>
                      <div>
                          <p style={{ fontSize: '18px', fontWeight: '500', color: '#111111', marginBottom: '4px' }}>{job.role}</p>
                          <p style={{ fontSize: '14px', color: '#666666', marginBottom: '12px' }}>{job.company}</p>
                          <p style={{ fontSize: '16px', color: '#444444', lineHeight: '1.7' }}>{job.description}</p>
                      </div>
                  </div>
              ))}
          </section>

          <div className="divider" />

          {/* Contact CTA */}
          <section className="page-section" style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '40px', fontWeight: '500', color: '#111111', marginBottom: '16px' }}>
                  Let's work together
              </h2>
              <p style={{ fontSize: '18px', color: '#666666', marginBottom: '40px' }}>
                  Open to freelance projects, full-time roles, and interesting conversations.
              </p>
              <a href="mailto:jerry@jerrymelvinj.com" style={{
                  padding: '14px 40px',
                  backgroundColor: '#111111',
                  color: '#FAFAF8',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '4px',
                  display: 'inline-block',
              }}>
                  Get in touch
              </a>
          </section>
    </main>
    <Footer />
    </>
  )
}
