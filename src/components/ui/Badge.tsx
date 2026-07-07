interface BadgeProps {
  children: React.ReactNode;
  tone?: 'neutral' | 'accent';
}

export default function Badge({ children, tone = 'neutral' }: BadgeProps) {
  const toneClasses =
    tone === 'accent'
      ? 'bg-accent/10 text-accent dark:bg-accent-dark/15 dark:text-accent-dark border-accent/20 dark:border-accent-dark/30'
      : 'bg-bg-surface text-ink-soft dark:bg-bg-dark-surface dark:text-ink-dark-soft border-line dark:border-line-dark';

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs leading-none ${toneClasses}`}
    >
      {children}
    </span>
  );
}
