import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { awards } from '../../data/awards';
import SectionHeading from '../ui/SectionHeading';

export default function Awards() {
  return (
    <section id="awards" className="py-24 sm:py-32 bg-bg-surface/50 dark:bg-bg-dark-surface/30">
      <div className="container-page">
        <SectionHeading eyebrow="awards & recognition" title="Measured, not self-declared" />

        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-line dark:border-line-dark p-7"
            >
              <Award className="h-5 w-5 text-signal dark:text-signal-dark mb-4" strokeWidth={1.75} />
              <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-dark leading-snug">
                {award.title}
              </h3>
              <p className="mt-1.5 text-sm text-accent dark:text-accent-dark font-medium">{award.issuer}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">
                {award.description}
              </p>
              <p className="mt-4 font-mono text-xs text-ink-soft/70 dark:text-ink-dark-soft/70">{award.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
