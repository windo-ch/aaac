'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { type Piece } from '@/lib/types'
import { ImageWithBlur } from '@/components/ui/ImageWithBlur'

interface PieceFocusProps {
  pieces: Piece[]
}

export function PieceFocus({ pieces }: PieceFocusProps) {
  const [index, setIndex] = useState(0)

  const piece = pieces[index]
  const hasPrev = index > 0
  const hasNext = index < pieces.length - 1

  const navButtonStyle = {
    border: `1px solid var(--color-border)`,
    color: 'var(--color-text-secondary)',
    background: 'transparent',
    fontFamily: 'var(--font-mono)',
  }

  return (
    <section className="w-full" aria-label="Featured piece">
      <AnimatePresence mode="wait">
        <motion.div
          key={piece.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Image */}
          <Link
            href={`/piece/${piece.slug}`}
            className="relative aspect-square overflow-hidden block"
            style={{ background: 'var(--color-surface)' }}
          >
            <ImageWithBlur
              src={piece.images[0]}
              alt={piece.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </Link>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight">
                {piece.title}
              </h1>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {piece.description}
            </p>

            <div className="flex gap-3">
              <Link
                href={`/piece/${piece.slug}`}
                className="font-mono text-xs uppercase tracking-widest px-5 py-2.5 transition-all"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-bg)',
                }}
              >
                View Piece
              </Link>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <button
                onClick={() => hasPrev && setIndex(index - 1)}
                disabled={!hasPrev}
                className="font-mono text-xs uppercase tracking-widest px-4 py-2 transition-opacity disabled:opacity-30"
                style={navButtonStyle}
              >
                ← Previous
              </button>

              <span
                className="font-mono text-xs"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {index + 1} / {pieces.length}
              </span>

              <button
                onClick={() => hasNext && setIndex(index + 1)}
                disabled={!hasNext}
                className="font-mono text-xs uppercase tracking-widest px-4 py-2 transition-opacity disabled:opacity-30"
                style={navButtonStyle}
              >
                Next →
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
