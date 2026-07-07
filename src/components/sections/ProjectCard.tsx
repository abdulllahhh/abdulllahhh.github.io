import { motion } from 'framer-motion';
import { GitBranch, ArrowRight } from 'lucide-react';
import type { ProjectEntry } from '../../types';
import Badge from '../ui/Badge';
import PlaceholderVisual from '../ui/PlaceholderVisual';

interface ProjectCardProps {
  project: ProjectEntry;
  index: number;
}

const sizeLabel: Record<ProjectEntry['size'], string> = {
  flagship: 'Flagship project',
  major: 'Major project',
  standard: 'Project',
};

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">
          <span className="mt-2 h-1 w-1 rounded-full bg-accent dark:bg-accent-dark shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-mono text-[11px] uppercase tracking-wide text-ink-soft dark:text-ink-dark-soft mb-3">
      {children}
    </h4>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isFlagship = project.size === 'flagship';
  const isStandard = project.size === 'standard';

  return (
    <motion.article
      id={`project-${project.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.2), ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border p-7 sm:p-9 ${
        isFlagship
          ? 'border-accent/30 dark:border-accent-dark/30 bg-bg-surface dark:bg-bg-dark-surface'
          : 'border-line dark:border-line-dark'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <p className="eyebrow mb-2">{sizeLabel[project.size]}</p>
          <h3 className="font-display font-semibold text-2xl text-ink dark:text-ink-dark">
            {project.name}
          </h3>
          <p className="mt-1.5 text-ink-soft dark:text-ink-dark-soft">{project.tagline}</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-mono text-xs text-ink-soft dark:text-ink-dark-soft whitespace-nowrap">
            {project.duration}
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line dark:border-line-dark text-ink-soft dark:text-ink-dark-soft hover:text-accent dark:hover:text-accent-dark hover:border-accent dark:hover:border-accent-dark transition-colors"
              aria-label={`${project.name} on GitHub`}
            >
              <GitBranch className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {!project.githubUrl && (
        <p className="mt-3 font-mono text-xs text-ink-soft/70 dark:text-ink-dark-soft/70">
          Private / client project — no public repository.
        </p>
      )}

      <p className="mt-6 text-sm leading-relaxed text-ink dark:text-ink-dark">{project.overview}</p>

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <div>
          <SubHeading>Business problem</SubHeading>
          <p className="text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">
            {project.businessProblem}
          </p>
        </div>
        <div>
          <SubHeading>My responsibilities</SubHeading>
          <List items={project.responsibilities} />
        </div>
      </div>

      {!isStandard && (
        <div className="mt-6">
          <SubHeading>Engineering problems solved</SubHeading>
          <List items={project.engineeringProblems} />
        </div>
      )}

      <div className="mt-6 grid sm:grid-cols-2 gap-6">
        <div>
          <SubHeading>Architecture</SubHeading>
          <List items={project.architecture} />
        </div>
        {(isFlagship || project.size === 'major') && (
          <div>
            <SubHeading>Implementation details</SubHeading>
            <List items={project.implementationDetails} />
          </div>
        )}
      </div>

      <div className="mt-6">
        <SubHeading>Technologies</SubHeading>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Badge key={t} tone={isFlagship ? 'accent' : 'neutral'}>
              {t}
            </Badge>
          ))}
        </div>
      </div>

      {project.lessonsLearned.length > 0 && (
        <div className="mt-6">
          <SubHeading>Lessons learned</SubHeading>
          <List items={project.lessonsLearned} />
        </div>
      )}

      {(project.hasScreenshotPlaceholder || project.hasArchitectureDiagramPlaceholder) && (
        <div className="mt-7 grid sm:grid-cols-2 gap-4">
          {project.hasScreenshotPlaceholder && <PlaceholderVisual kind="screenshot" />}
          {project.hasArchitectureDiagramPlaceholder && <PlaceholderVisual kind="diagram" />}
        </div>
      )}

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent dark:text-accent-dark hover:gap-2.5 transition-all"
        >
          View repository <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </motion.article>
  );
}
