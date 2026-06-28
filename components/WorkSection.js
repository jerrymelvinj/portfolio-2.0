import { projects } from '../content/projects'
import ProjectCard from './ProjectCard'

export default function WorkSection() {
  return (
    <section id="work" className="work-section">
      <p style={{
        fontSize: '12px',
        color: '#4361EE',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        marginBottom: '20px',
        textAlign: 'center',
        fontWeight: '600',
      }}>
        Selected Work
      </p>
      <h2 style={{
        fontSize: '40px',
        fontWeight: '700',
        color: '#111111',
        textAlign: 'center',
        marginBottom: '64px',
        letterSpacing: '-0.02em',
        lineHeight: '1.1',
      }}>
        Projects I've worked on
      </h2>
      <div className="grid-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
