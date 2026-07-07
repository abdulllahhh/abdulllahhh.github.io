import { motion } from 'framer-motion';
import { Layers, Building2, Compass, BookOpen } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const pillars = [
  {
    icon: Layers,
    title: 'From CRUD to consistency',
    body: 'The graduation project was a machine-learning recommender; the work since has been backend systems where correctness matters more than novelty — accounting ledgers, banking rules, credit-metered payments. The common thread is caring about what happens when an operation fails halfway through.',
  },
  {
    icon: Building2,
    title: 'Architecture as a default, not an add-on',
    body: 'Clean Architecture, DDD, and CQRS show up across nearly every project — not because they were assigned, but because they are the tools that keep a codebase honest as business rules pile up. The ATM system leans hardest into this: aggregates, value objects, and domain events modeling real financial constraints.',
  },
  {
    icon: Compass,
    title: 'Comfortable in ambiguous, high-stakes domains',
    body: 'Accounting, banking, and payments all share the same property: the rules are unforgiving and the data has to reconcile. Freelance work on a Stripe-integrated credit system, and full-time work on a double-entry ERP ledger, both come down to the same instinct — assume every operation can fail partway, and design for that.',
  },
  {
    icon: BookOpen,
    title: 'Deliberate, not just accumulated, learning',
    body: 'Skinet exists purely to drill Repository / Unit of Work / Specification until they are instinctive. DEPI was chosen specifically for its production-style capstone and external evaluation. Growth here has been intentional, not incidental.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="about"
          title="An engineer's journey, not a career objective"
          description="A quick honest account of how the backend focus formed, and what keeps it interesting."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-line dark:border-line-dark p-7"
            >
              <pillar.icon className="h-5 w-5 text-accent dark:text-accent-dark mb-4" strokeWidth={1.75} />
              <h3 className="font-display font-semibold text-lg text-ink dark:text-ink-dark mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
