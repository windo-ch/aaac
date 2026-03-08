'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 sm:px-6 py-24 text-center">
      <div className="flex flex-col items-center gap-4">
        <p
          className="font-mono text-6xl font-bold"
          style={{ color: 'var(--color-border)' }}
        >
          404
        </p>
        <h1
          className="text-2xl font-bold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Page not found
        </h1>
        <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
          The page you were looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-4 font-mono text-xs uppercase tracking-widest px-6 py-3 transition-opacity hover:opacity-70"
          style={{
            background: 'var(--color-text-primary)',
            color: 'var(--color-bg)',
          }}
        >
          ← Back to Collection
        </Link>
      </div>
    </div>
  )
}
