import type { ReactNode } from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  icon?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  external?: boolean;
  download?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  icon,
  variant = 'primary',
  external = false,
  download = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none';

  const variants = {
    primary:
      'bg-accent text-white hover:bg-accent/90 dark:bg-accent-dark dark:text-bg-dark dark:hover:bg-accent-dark/90 shadow-sm hover:shadow-md hover:-translate-y-0.5',
    secondary:
      'border border-line dark:border-line-dark text-ink dark:text-ink-dark hover:border-accent dark:hover:border-accent-dark hover:-translate-y-0.5',
    ghost:
      'text-ink-soft dark:text-ink-dark-soft hover:text-accent dark:hover:text-accent-dark',
  };

  const className = `${base} ${variants[variant]}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={className}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(download ? { download: true } : {})}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {icon}
      {children}
    </button>
  );
}
