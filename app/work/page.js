import { projects } from '../../content/projects'
import ProjectCard from '../../components/ProjectCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function Work() {
  return (
    <>
      <main>
        <Navbar />
        <section className="work-section">
          <p style={{
            fontSize: '13px',
            color: '#888888',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}>
            Work
          </p>
          <h1 className="work-h1">
            Selected projects
          </h1>
          <div className="grid-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
