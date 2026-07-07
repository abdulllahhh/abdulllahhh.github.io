import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data/education';
import SectionHeading from '../ui/SectionHeading';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading eyebrow="education" title="Formal foundation" />

        <div className="mt-12 space-y-6">
          {education.map((ed, i) => (
            <motion.div
              key={ed.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-5 rounded-2xl border border-line dark:border-line-dark p-7"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 dark:bg-accent-dark/15 text-accent dark:text-accent-dark">
                <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-dark">
                  {ed.degree} — {ed.major}
                </h3>
                <p className="text-accent dark:text-accent-dark text-sm font-medium mt-0.5">
                  {ed.institution}
                </p>
                <p className="font-mono text-xs text-ink-soft dark:text-ink-dark-soft mt-2">
                  {ed.duration}
                  {ed.gpa ? ` · GPA ${ed.gpa}` : ''}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
