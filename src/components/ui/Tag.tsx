interface TagProps {
  label: string
}

export function Tag({ label }: TagProps) {
  return (
    <span
      className="inline-block rounded-sm px-2 py-0.5 text-xs font-mono uppercase tracking-wider transition-colors"
      style={{
        border: `1px solid var(--color-border)`,
        color: 'var(--color-text-secondary)',
        background: 'var(--color-surface)',
      }}
    >
      {label}
    </span>
  )
}
