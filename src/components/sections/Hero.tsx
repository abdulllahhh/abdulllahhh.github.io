import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileDown } from 'lucide-react';
import { profile } from '../../data/profile';
import Button from '../ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          color: 'currentColor',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      <div className="container-page relative">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-mono text-xs text-signal dark:text-signal-dark flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal dark:bg-signal-dark opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal dark:bg-signal-dark" />
          </span>
          {profile.status}
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-3xl text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] text-ink dark:text-ink-dark"
        >
          {profile.name}
          <span className="block mt-2 text-accent dark:text-accent-dark">{profile.title}</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft dark:text-ink-dark-soft"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button href="/resume/Abdullah-Ibrahim-Resume.pdf" download icon={<FileDown className="h-4 w-4" />}>
            Download Resume
          </Button>
          <Button href="#projects" variant="secondary" icon={<ArrowDown className="h-4 w-4" />}>
            View Projects
          </Button>
          <Button href="#contact" variant="secondary" icon={<Mail className="h-4 w-4" />}>
            Contact Me
          </Button>
          <Button href={profile.social.github} external variant="ghost" icon={<Github className="h-4 w-4" />}>
            GitHub
          </Button>
          <Button href={profile.social.linkedin} external variant="ghost" icon={<Linkedin className="h-4 w-4" />}>
            LinkedIn
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
