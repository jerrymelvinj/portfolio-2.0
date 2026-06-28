import { projects } from '../content/projects'
import ProjectCard from './ProjectCard'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

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
      <ScrollStack>
        {projects.map((project, index) => (
          <ScrollStackItem key={project.slug}>
            <ProjectCard project={project} index={index} />
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  )
}