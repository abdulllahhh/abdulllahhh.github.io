import { projects, projectSizeOrder } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const ordered = [...projects].sort(
    (a, b) => projectSizeOrder[a.size] - projectSizeOrder[b.size],
  );

  return (
    <section id="projects" className="py-24 sm:py-32 bg-bg-surface/50 dark:bg-bg-dark-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="projects"
          title="Projects, in the depth they earned"
          description="Flagship and major projects get the full engineering write-up; smaller ones stay focused. Nothing here is padded to look bigger than it is."
        />

        <div className="mt-14 space-y-8">
          {ordered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
