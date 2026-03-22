'use client'

import { useState } from 'react'
import Link from 'next/link'
import { type Piece } from '@/lib/types'
import { PieceGrid } from '@/components/pieces/PieceGrid'
import { PieceFocus } from '@/components/pieces/PieceFocus'
import { ViewToggle } from '@/components/pieces/ViewToggle'

interface CollectionViewProps {
  pieces: Piece[]
  activeFilter?: string
}

export function CollectionView({ pieces, activeFilter }: CollectionViewProps) {
  const [view, setView] = useState<'grid' | 'individual'>('grid')

  const toggleView = () => setView((v) => (v === 'grid' ? 'individual' : 'grid'))

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-16">
      {/* Page header row */}
      <div className="flex items-end justify-between mb-10 sm:mb-14">
        <div>
          <p
            className="font-mono text-[10px] uppercase tracking-widest mb-1"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Collection
          </p>
          <h1
            className="text-xl sm:text-2xl font-bold"
            style={{ color: 'var(--color-text-primary)' }}
          >
            AAAC Vessels
          </h1>
          <p
            className="mt-1 text-sm"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Made in Crypto Valley
          </p>
          {activeFilter && (
            <div className="mt-2 flex items-center gap-2">
              <span
                className="font-mono text-[10px] uppercase tracking-widest"
                style={{ color: 'var(--color-text-muted)' }}
              >
                {activeFilter}
              </span>
              <Link
                href="/work"
                className="font-mono text-[10px] uppercase tracking-widest hover:opacity-50 transition-opacity"
                style={{ color: 'var(--color-text-muted)' }}
              >
                ×
              </Link>
            </div>
          )}
        </div>

        <ViewToggle view={view} onToggle={toggleView} />
      </div>

      {view === 'grid' ? (
        <PieceGrid pieces={pieces} />
      ) : (
        <PieceFocus pieces={pieces} />
      )}
    </div>
  )
}
