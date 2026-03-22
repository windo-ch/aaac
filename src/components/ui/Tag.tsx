import Link from 'next/link'

interface TagProps {
  label: string
  href?: string
}

export function Tag({ label, href }: TagProps) {
  const inner = (
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
  if (href) {
    return (
      <Link href={href} className="hover:opacity-60 transition-opacity">
        {inner}
      </Link>
    )
  }
  return inner
}
