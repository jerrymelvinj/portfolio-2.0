import { projects } from '../content/projects'
import ProjectCard from './ProjectCard'

export default function WorkSection() {
  return (
    <section id="work" className="work-section">
      <p style={{
        fontSize: '12px',
        color: '#888888',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '64px',
      }}>
        Selected Work
      </p>
      <div className="grid-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
