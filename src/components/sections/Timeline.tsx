import { motion } from 'framer-motion';
import {
  GraduationCap,
  Shield,
  FolderGit2,
  BookOpen,
  Trophy,
  Briefcase,
  Laptop,
} from 'lucide-react';
import { timeline } from '../../data/timeline';
import SectionHeading from '../ui/SectionHeading';
import type { TimelineEvent } from '../../types';

const categoryIcon: Record<TimelineEvent['category'], typeof GraduationCap> = {
  education: GraduationCap,
  military: Shield,
  project: FolderGit2,
  training: BookOpen,
  award: Trophy,
  work: Briefcase,
  freelance: Laptop,
};

const categoryColor: Record<TimelineEvent['category'], string> = {
  education: 'text-ink-soft dark:text-ink-dark-soft',
  military: 'text-ink-soft dark:text-ink-dark-soft',
  project: 'text-accent dark:text-accent-dark',
  training: 'text-accent dark:text-accent-dark',
  award: 'text-signal dark:text-signal-dark',
  work: 'text-signal dark:text-signal-dark',
  freelance: 'text-signal dark:text-signal-dark',
};

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="engineering timeline"
          title="How this profile was built"
          description="University, a graduation ML project, mandatory military service, then a deliberate return to backend engineering — training, freelance work, and a current full-time role."
        />

        <div className="mt-14 relative">
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-line dark:bg-line-dark" />
          <ol className="space-y-8">
            {timeline.map((event, i) => {
              const Icon = categoryIcon[event.category];
              return (
                <motion.li
                  key={event.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-14 sm:pl-16"
                >
                  <span
                    className={`absolute left-0 top-0 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-line dark:border-line-dark bg-bg dark:bg-bg-dark ${categoryColor[event.category]}`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
                  </span>
                  <p className="font-mono text-xs text-ink-soft dark:text-ink-dark-soft">{event.date}</p>
                  <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-dark mt-1">
                    {event.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft max-w-xl">
                    {event.description}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
