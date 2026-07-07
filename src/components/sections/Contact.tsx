import { Github, Linkedin, Mail, MapPin, FileDown } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const contactRows = [
  { icon: Mail, label: 'Email', value: profile.social.email, href: `mailto:${profile.social.email}` },
  {
    icon: Github,
    label: 'GitHub',
    value: profile.social.github.replace('https://', ''),
    href: profile.social.github,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: profile.social.linkedin.replace('http://www.', ''),
    href: profile.social.linkedin,
  },
  { icon: MapPin, label: 'Location', value: profile.social.location, href: undefined },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-bg-surface/50 dark:bg-bg-dark-surface/30">
      <div className="container-page">
        <SectionHeading
          eyebrow="contact"
          title="Let's talk about the role"
          description="Open to backend / .NET engineering opportunities. Reach out directly, or grab the resume for the full picture."
        />

        <div className="mt-12 grid sm:grid-cols-2 gap-6 items-start">
          <div className="rounded-2xl border border-line dark:border-line-dark p-7 sm:p-9 space-y-5">
            {contactRows.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 dark:bg-accent-dark/15 text-accent dark:text-accent-dark">
                  <row.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft dark:text-ink-dark-soft">
                    {row.label}
                  </p>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.href.startsWith('http') ? '_blank' : undefined}
                      rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-ink dark:text-ink-dark hover:text-accent dark:hover:text-accent-dark break-all"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-ink dark:text-ink-dark">{row.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-dashed border-line dark:border-line-dark p-7 sm:p-9 flex flex-col items-start gap-4">
            <p className="text-sm leading-relaxed text-ink-soft dark:text-ink-dark-soft">
              Prefer a document you can forward internally? The full resume covers everything above in
              PDF form.
            </p>
            <Button
              href="/resume/Abdullah-Ibrahim-Resume.pdf"
              download
              icon={<FileDown className="h-4 w-4" />}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
