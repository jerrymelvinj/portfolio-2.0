import { projects } from '../content/projects'
import ProjectCard from './ProjectCard'

export default function WorkSection() {
  return (
    <section style={{ padding: '0 48px', maxWidth: '1200px' }}>
      <p style={{ fontSize: '12px', color: '#666666', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '48px' }}>
        Selected Work
      </p>
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </section>
  )
}