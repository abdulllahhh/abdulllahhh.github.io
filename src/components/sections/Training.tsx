import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { training } from '../../data/training';
import { projects } from '../../data/projects';
import SectionHeading from '../ui/SectionHeading';

export default function Training() {
  const bookify = projects.find((p) => p.id === training.relatedProjectId);

  return (
    <section id="training" className="py-24 sm:py-32 bg-bg-surface/50 dark:bg-bg-dark-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="professional training"
          title="DEPI — Digital Egypt Pioneers Initiative"
          description="Why this one is worth calling out specifically, rather than listing as a line under education."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 rounded-2xl border border-line dark:border-line-dark p-7 sm:p-9"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h3 className="font-display font-semibold text-xl text-ink dark:text-ink-dark">
              {training.program}
            </h3>
            <span className="font-mono text-xs text-ink-soft dark:text-ink-dark-soft whitespace-nowrap">
              {training.duration}
            </span>
          </div>
          <p className="text-accent dark:text-accent-dark text-sm font-medium mt-1">{training.issuer}</p>

          <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">
            {training.description}
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {training.highlights.map((h) => (
              <div
                key={h.label}
                className="flex items-start gap-3 rounded-xl border border-line dark:border-line-dark p-4"
              >
                <Trophy className="h-4 w-4 mt-0.5 shrink-0 text-signal dark:text-signal-dark" />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft dark:text-ink-dark-soft">
                    {h.label}
                  </p>
                  <p className="text-sm font-medium text-ink dark:text-ink-dark mt-0.5">{h.value}</p>
                </div>
              </div>
            ))}
          </div>

          {bookify && (
            <div className="mt-8 rounded-xl border border-dashed border-line dark:border-line-dark p-5">
              <p className="font-mono text-xs text-ink-soft dark:text-ink-dark-soft">
                Capstone project ↓ <span className="text-ink dark:text-ink-dark font-medium">{bookify.name}</span> — see full breakdown in{' '}
                <a href="#projects" className="text-accent dark:text-accent-dark hover:underline">
                  Projects
                </a>
                .
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
