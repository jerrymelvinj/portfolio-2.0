import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function About() {
  return (
    <><main>
          <Navbar />

          {/* Hero */}
          <section style={{
              padding: '120px 48px 80px',
              maxWidth: '900px',
          }}>
              <p style={{
                  fontSize: '13px',
                  color: '#666666',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
              }}>
                  About
              </p>
              <h1 style={{
                  fontSize: '56px',
                  fontWeight: '500',
                  lineHeight: '1.15',
                  color: '#111111',
                  maxWidth: '700px',
                  marginBottom: '32px',
              }}>
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

          {/* Divider */}
          <div style={{ borderTop: '1px solid #E7E7E7', margin: '0 48px' }} />

          {/* Bio */}
          <section style={{ padding: '80px 48px', maxWidth: '900px' }}>
              <p style={{
                  fontSize: '18px',
                  color: '#444444',
                  lineHeight: '1.8',
                  maxWidth: '640px',
                  marginBottom: '24px',
              }}>
                  I started in UI/UX with a focus on design systems — learning how to build consistency at scale before learning how to break it intentionally. Over time I moved toward full-stack product work: designing, building, and shipping end-to-end.
              </p>
              <p style={{
                  fontSize: '18px',
                  color: '#444444',
                  lineHeight: '1.8',
                  maxWidth: '640px',
                  marginBottom: '24px',
              }}>
                  Outside of client work, I'm building ReflexityAI — an AI-powered platform for automating personalised client communication. It's where I test every idea I'm not yet ready to sell.
              </p>
              <p style={{
                  fontSize: '18px',
                  color: '#444444',
                  lineHeight: '1.8',
                  maxWidth: '640px',
              }}>
                  I also write — journal-style prose, stream-of-consciousness vignettes, things that don't have a brief. Writing keeps my design thinking honest.
              </p>
          </section>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #E7E7E7', margin: '0 48px' }} />

          {/* Skills */}
          <section style={{ padding: '80px 48px', maxWidth: '900px' }}>
              <p style={{
                  fontSize: '12px',
                  color: '#666666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '48px',
              }}>
                  Skills
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '48px' }}>
                  <div>
                      <p style={{ fontSize: '13px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Design</p>
                      {['Product Design', 'UX Research', 'Design Systems', 'Figma', 'Prototyping', 'Visual Design'].map(skill => (
                          <p key={skill} style={{ fontSize: '16px', color: '#111111', marginBottom: '10px' }}>{skill}</p>
                      ))}
                  </div>
                  <div>
                      <p style={{ fontSize: '13px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Development</p>
                      {['Next.js', 'React', 'Tailwind CSS', 'HTML & CSS', 'Flutter', 'Framer'].map(skill => (
                          <p key={skill} style={{ fontSize: '16px', color: '#111111', marginBottom: '10px' }}>{skill}</p>
                      ))}
                  </div>
                  <div>
                      <p style={{ fontSize: '13px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Tools</p>
                      {['Tokens Studio', 'Webflow', 'Framer', 'VS Code', 'DaVinci Resolve', 'Notion'].map(skill => (
                          <p key={skill} style={{ fontSize: '16px', color: '#111111', marginBottom: '10px' }}>{skill}</p>
                      ))}
                  </div>
              </div>
          </section>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #E7E7E7', margin: '0 48px' }} />

          {/* Experience */}
          <section style={{ padding: '80px 48px', maxWidth: '900px' }}>
              <p style={{
                  fontSize: '12px',
                  color: '#666666',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '48px',
              }}>
                  Experience
              </p>
              {[
                  {
                      role: 'Freelance Product Designer & Developer',
                      company: 'Independent',
                      period: '2023 — Present',
                      description: 'Working across UI/UX design and frontend development for clients including Eden & Blooms, a nail art studio in Bengaluru, and building ReflexityAI as a solo product.',
                  },
                  {
                      role: 'UI/UX Designer',
                      company: 'Previous Employer',
                      period: '2022 — 2023',
                      description: 'Worked on SaaS tools and web products, building design systems from scratch and establishing component architecture using Figma and Tokens Studio.',
                  },
              ].map((job) => (
                  <div key={job.role} style={{
                      display: 'grid',
                      gridTemplateColumns: '200px 1fr',
                      gap: '32px',
                      marginBottom: '56px',
                  }}>
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

          {/* Divider */}
          <div style={{ borderTop: '1px solid #E7E7E7', margin: '0 48px' }} />

          {/* Contact CTA */}
          <section style={{
              padding: '96px 48px',
              textAlign: 'center',
          }}>
              <h2 style={{
                  fontSize: '40px',
                  fontWeight: '500',
                  color: '#111111',
                  marginBottom: '16px',
              }}>
                  Let's work together
              </h2>
              <p style={{
                  fontSize: '18px',
                  color: '#666666',
                  marginBottom: '40px',
              }}>
                  Open to freelance projects, full-time roles, and interesting conversations.
              </p>

              href="mailto:jerry@jerrymelvinj.com"
              style={{
                  padding: '14px 40px',
                  backgroundColor: '#111111',
                  color: '#FAFAF8',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '4px',
              }}
              {'>'}
              Get in touch
          </a>
      </section><Footer /></>
    </main>
  )
}