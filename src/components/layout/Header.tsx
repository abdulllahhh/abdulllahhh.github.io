import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 dark:bg-bg-dark/80 backdrop-blur-md border-b border-line dark:border-line-dark'
          : 'bg-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <a href="#top" className="font-display font-semibold text-ink dark:text-ink-dark tracking-tight">
          AI<span className="text-accent dark:text-accent-dark">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-ink-dark-soft hover:text-accent dark:hover:text-accent-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line dark:border-line-dark text-ink dark:text-ink-dark"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-line dark:border-line-dark bg-bg dark:bg-bg-dark">
          <div className="container-page flex flex-col py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-mono text-sm uppercase tracking-wide text-ink-soft dark:text-ink-dark-soft hover:text-accent dark:hover:text-accent-dark py-3 border-b border-line/50 dark:border-line-dark/50 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
