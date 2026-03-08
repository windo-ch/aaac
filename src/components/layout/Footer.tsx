export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="w-full border-t mt-24 py-8"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <p
          className="font-mono text-xs text-center"
          style={{ color: 'var(--color-text-muted)' }}
        >
          © {year} ART AS A CONSEQUENCE. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
