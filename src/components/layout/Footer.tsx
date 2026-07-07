import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line dark:border-line-dark">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-ink dark:text-ink-dark">{profile.name}</p>
          <p className="font-mono text-xs text-ink-soft dark:text-ink-dark-soft mt-1">
            {profile.title} — {profile.social.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-soft dark:text-ink-dark-soft hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-soft dark:text-ink-dark-soft hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.social.email}`}
            aria-label="Email"
            className="text-ink-soft dark:text-ink-dark-soft hover:text-accent dark:hover:text-accent-dark transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="font-mono text-xs text-ink-soft/70 dark:text-ink-dark-soft/70">
          © {year} — built with React &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
