import { ImageIcon, GitBranch } from 'lucide-react';

interface PlaceholderVisualProps {
  kind: 'screenshot' | 'diagram';
  label?: string;
}

export default function PlaceholderVisual({ kind, label }: PlaceholderVisualProps) {
  const Icon = kind === 'screenshot' ? ImageIcon : GitBranch;
  const defaultLabel = kind === 'screenshot' ? 'Screenshot coming soon' : 'Architecture diagram coming soon';

  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line dark:border-line-dark bg-bg dark:bg-bg-dark/40 py-10 px-4 text-center">
      <Icon className="h-6 w-6 text-ink-soft/50 dark:text-ink-dark-soft/50" strokeWidth={1.5} />
      <span className="font-mono text-xs text-ink-soft/70 dark:text-ink-dark-soft/70">
        {label ?? defaultLabel}
      </span>
    </div>
  );
}
