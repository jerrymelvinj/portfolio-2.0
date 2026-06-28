import { projects } from '../content/projects'
import ProjectCard from './ProjectCard'

export default function WorkSection() {
  return (
    <section id="work" style={{ padding: '96px 48px' }}>
      <p style={{
        fontSize: '12px',
        color: '#666666',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        marginBottom: '64px',
      }}>
        Selected Work
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
      }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}