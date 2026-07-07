interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <p className="eyebrow mb-3">// {eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink dark:text-ink-dark">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft dark:text-ink-dark-soft">
          {description}
        </p>
      )}
    </div>
  );
}
