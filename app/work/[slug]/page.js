import Link from 'next/link'
import { projects } from '../../../content/projects'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ProjectCard from '../../../components/ProjectCard'

export default async function CaseStudy({ params }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProjects = [
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ]

  if (!project) {
    return <h1>Project not found</h1>
  }

  return (
    <main>
      <Navbar />

      {/* Back */}
      <div style={{ padding: '24px 48px 0' }}>
        <Link href="/" style={{ fontSize: '14px', color: '#666666', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          ← Back
        </Link>
      </div>

      {/* Hero */}
      <section style={{ padding: '80px 48px', maxWidth: '900px' }}>
        <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
          {project.category}
        </p>
        <h1 style={{ fontSize: '56px', fontWeight: '500', color: '#111111', marginBottom: '24px', lineHeight: '1.1' }}>
          {project.title}
        </h1>
        <p style={{ fontSize: '20px', color: '#666666', marginBottom: '64px', maxWidth: '600px' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: '48px', borderTop: '1px solid #E7E7E7', paddingTop: '32px' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Role</p>
            <p style={{ fontSize: '16px', color: '#111111' }}>{project.role}</p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Year</p>
            <p style={{ fontSize: '16px', color: '#111111' }}>{project.year}</p>
          </div>
        </div>
      </section>

      {/* Cover Image Placeholder */}
      <section style={{ padding: '0 48px', marginBottom: '96px' }}>
        <div style={{ width: '100%', height: '560px', backgroundColor: '#E7E7E7', borderRadius: '8px' }} />
      </section>

      {/* Problem */}
      <section style={{ padding: '0 48px', maxWidth: '900px', marginBottom: '96px' }}>
        <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>01 — Problem</p>
        <h2 style={{ fontSize: '36px', fontWeight: '500', color: '#111111', marginBottom: '24px' }}>
          What were we solving?
        </h2>
        <p style={{ fontSize: '18px', color: '#666666', lineHeight: '1.7', maxWidth: '680px' }}>
          Placeholder — describe the core problem this project addressed. What was broken, missing, or painful for users? What was the business context?
        </p>
      </section>

      {/* Research */}
      <section style={{ padding: '0 48px', maxWidth: '900px', marginBottom: '96px' }}>
        <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>02 — Research</p>
        <h2 style={{ fontSize: '36px', fontWeight: '500', color: '#111111', marginBottom: '24px' }}>
          Understanding the user
        </h2>
        <p style={{ fontSize: '18px', color: '#666666', lineHeight: '1.7', maxWidth: '680px' }}>
          Placeholder — what methods did you use? Interviews, surveys, competitive analysis? What were the key insights that shaped your design decisions?
        </p>
      </section>

      {/* Process Image Placeholder */}
      <section style={{ padding: '0 48px', marginBottom: '96px' }}>
        <div style={{ width: '100%', height: '400px', backgroundColor: '#F0F0EE', borderRadius: '8px' }} />
      </section>

      {/* Design Process */}
      <section style={{ padding: '0 48px', maxWidth: '900px', marginBottom: '96px' }}>
        <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>03 — Design Process</p>
        <h2 style={{ fontSize: '36px', fontWeight: '500', color: '#111111', marginBottom: '24px' }}>
          From ideas to decisions
        </h2>
        <p style={{ fontSize: '18px', color: '#666666', lineHeight: '1.7', maxWidth: '680px' }}>
          Placeholder — walk through your design thinking. User flows, information architecture, wireframes, and the key tradeoffs you made along the way.
        </p>
      </section>

      {/* Final Design */}
      <section style={{ padding: '0 48px', maxWidth: '900px', marginBottom: '96px' }}>
        <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>04 — Final Design</p>
        <h2 style={{ fontSize: '36px', fontWeight: '500', color: '#111111', marginBottom: '24px' }}>
          The outcome
        </h2>
        <p style={{ fontSize: '18px', color: '#666666', lineHeight: '1.7', maxWidth: '680px' }}>
          Placeholder — show and describe the final screens. What decisions are visible in the UI? What micro-interactions or systems thinking is embedded here?
        </p>
      </section>

      {/* Final Screens Placeholder */}
      <section style={{ padding: '0 48px', marginBottom: '96px', display: 'flex', gap: '24px' }}>
        <div style={{ flex: 1, height: '480px', backgroundColor: '#E7E7E7', borderRadius: '8px' }} />
        <div style={{ flex: 1, height: '480px', backgroundColor: '#E7E7E7', borderRadius: '8px' }} />
      </section>

      {/* Reflection */}
      <section style={{ padding: '0 48px', maxWidth: '900px', marginBottom: '96px' }}>
        <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>05 — Reflection</p>
        <h2 style={{ fontSize: '36px', fontWeight: '500', color: '#111111', marginBottom: '24px' }}>
          What I learned
        </h2>
        <p style={{ fontSize: '18px', color: '#666666', lineHeight: '1.7', maxWidth: '680px' }}>
          Placeholder — what would you do differently? What did this project teach you about design, users, or collaboration? What are the next steps?
        </p>
      </section>

      {/* Next Up */}
      <section style={{ padding: '0 48px 96px' }}>
        <div style={{ borderTop: '1px solid #E7E7E7', paddingTop: '64px', marginBottom: '48px' }}>
          <p style={{
            fontSize: '12px',
            color: '#666666',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
          }}>
            Next Up
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {nextProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}