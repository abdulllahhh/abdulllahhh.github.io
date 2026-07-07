import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';
import Badge from '../ui/Badge';

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-bg-surface/50 dark:bg-bg-dark-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="skills"
          title="Technical surface area"
          description="Grouped the way the work actually breaks down, not as a flat tag cloud."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-line dark:border-line-dark p-7"
            >
              <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-dark">
                {category.title}
              </h3>
              <p className="mt-1.5 text-sm text-ink-soft dark:text-ink-dark-soft">
                {category.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Badge key={item.name}>{item.name}</Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
