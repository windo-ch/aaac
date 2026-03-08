'use client'

import { type Piece } from '@/lib/types'
import { CrossmintCheckout } from '@/components/commerce/CrossmintCheckout'

interface PiecePurchaseProps {
  piece: Piece
}

export function PiecePurchase({ piece }: PiecePurchaseProps) {
  return (
    <div
      className="border-t pt-6"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="flex items-center justify-end mb-4">
        {piece.available ? (
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-1"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-muted)',
            }}
          >
            Available
          </span>
        ) : (
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-1"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-muted)',
            }}
          >
            Sold
          </span>
        )}
      </div>

      {piece.available && (
        <CrossmintCheckout piece={piece} />
      )}

      {!piece.available && (
        <p
          className="font-mono text-sm text-center py-3"
          style={{ color: 'var(--color-text-muted)' }}
        >
          This piece has found its home.
        </p>
      )}
    </div>
  )
}
