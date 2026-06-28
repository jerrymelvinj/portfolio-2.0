import { projects } from '../../content/projects'
import ProjectCard from '../../components/ProjectCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ContactCTA from '../../components/ContactCTA'

export default function Work() {
  return (
    <>
      <main>
        <Navbar />
        <section className="work-section">
          <p style={{
            fontSize: '12px',
            color: '#4361EE',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '16px',
            textAlign: 'center',
            fontWeight: '600',
          }}>
            Work
          </p>
          <h1 className="work-h1">
            Selected projects
          </h1>
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div className="grid-1">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
