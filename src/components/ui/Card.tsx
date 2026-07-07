import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-line dark:border-line-dark bg-bg-surface dark:bg-bg-dark-surface p-6 sm:p-8 transition-all duration-300 ${
        hoverable ? 'hover:border-accent/40 dark:hover:border-accent-dark/40 hover:shadow-lg hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
