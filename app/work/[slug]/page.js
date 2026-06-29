import Link from 'next/link'
import { projects } from '../../../content/projects'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import ProjectCard from '../../../components/ProjectCard'

export default async function CaseStudy({ params }) {
  const { slug } = await params  // ← must await in Next.js 15
  const project = projects.find((p) => p.slug === slug)
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProjects = [
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
  ]

  if (!project) {
  return (
    <div>
      <h1>Project not found</h1>
      <p>Slug received: "{slug}"</p>
      <p>Available slugs: {projects.map(p => p.slug).join(', ')}</p>
    </div>
  )
}

  return (
    <main>
      <Navbar />

      {/* Back */}
      <div style={{ padding: '24px 48px 0', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <Link href="/" style={{ fontSize: '14px', color: '#999999', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          ← Back
        </Link>
      </div>

      {/* Hero */}
      <section className="case-hero">
        <p style={{ fontSize: '12px', color: '#4361EE', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', fontWeight: '600' }}>
          {project.category}
        </p>
        <h1 className="case-h1">{project.title}</h1>
        <p style={{ fontSize: '20px', color: '#666666', maxWidth: '600px', margin: '0 auto 64px', textAlign: 'center' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', gap: '48px', borderTop: '1px solid #E8E8E8', paddingTop: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div>
            <p style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Role</p>
            <p style={{ fontSize: '16px', color: '#111111', fontWeight: '500' }}>{project.role}</p>
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Year</p>
            <p style={{ fontSize: '16px', color: '#111111', fontWeight: '500' }}>{project.year}</p>
          </div>
        </div>
      </section>

      {/* Cover placeholder */}
      <section className="page-section-sm">
        {project.media && project.media.type === 'video' ? (
          <video src={project.media.src} style={{ width: '100%', maxWidth: '900px', borderRadius: '8px', margin: '0 auto' }} autoPlay muted loop playsInline />
        ) : (
          <img src={project.media?.src || `/${project.slug}.jpg`} alt={`${project.title} cover`} style={{ width: '100%', maxWidth: '900px', borderRadius: '8px', margin: '0 auto' }} />
        )}
      </section>

      {/* Dynamic sections — edit content in content/projects.js */}
      {project.sections && project.sections.map((section, i) => (
        <section key={i} className="page-section-sm">
          <p style={{ fontSize: '12px', color: '#4361EE', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px', fontWeight: '600' }}>
            {section.label}
          </p>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#111111', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            {section.heading}
          </h2>
          <p style={{ fontSize: '18px', color: '#555555', lineHeight: '1.7', maxWidth: '680px', margin: '0 auto' }}>
            {section.body}
          </p>
        </section>
      ))}

      {/* Next Up */}
      <section className="next-up-section">
        <div style={{ borderTop: '1px solid #E8E8E8', paddingTop: '64px', marginBottom: '48px' }}>
          <p style={{ fontSize: '12px', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            Next Up
          </p>
        </div>
        <div className="grid-2">
          {nextProjects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

