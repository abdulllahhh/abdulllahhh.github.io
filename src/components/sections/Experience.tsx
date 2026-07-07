import { motion } from 'framer-motion';
import { experience } from '../../data/experience';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';
import { CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="experience"
          title="Where the work happened"
          description="Both roles are backend-first engagements — one enterprise and ongoing, one freelance and shipped end to end."
        />

        <div className="mt-14 space-y-8">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-line dark:border-line-dark p-7 sm:p-9"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <div>
                  <h3 className="font-display font-semibold text-xl text-ink dark:text-ink-dark">
                    {entry.role}
                  </h3>
                  <p className="text-accent dark:text-accent-dark font-medium mt-0.5">{entry.company}</p>
                </div>
                <div className="font-mono text-xs text-ink-soft dark:text-ink-dark-soft whitespace-nowrap">
                  {entry.duration} · {entry.location}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">
                {entry.impact}
              </p>

              <ul className="mt-5 space-y-2.5">
                {entry.achievements.map((a) => (
                  <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-ink dark:text-ink-dark">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-signal dark:text-signal-dark" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {entry.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
