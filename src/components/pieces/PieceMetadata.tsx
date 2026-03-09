'use client'

import { type Piece } from '@/lib/types'
import { Tag } from '@/components/ui/Tag'

interface PieceMetadataProps {
  piece: Piece
}

export function PieceMetadata({ piece }: PieceMetadataProps) {
  const dividerStyle = { borderColor: 'var(--color-border)' }
  const labelStyle = { color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }
  const valueStyle = { color: 'var(--color-text-primary)' }

  return (
    <div className="flex flex-col gap-6">
      {/* Traits grid */}
      <div>
        <h3
          className="font-mono text-[10px] uppercase tracking-widest mb-3"
          style={labelStyle}
        >
          Details
        </h3>
        <div className="grid grid-cols-2 gap-px" style={{ background: 'var(--color-border)' }}>
          {piece.metadata.traits.map((trait) => (
            <div
              key={trait.label}
              className="flex flex-col gap-0.5 p-3"
              style={{ background: 'var(--color-bg)' }}
            >
              <span className="text-[10px] uppercase tracking-widest" style={labelStyle}>
                {trait.label}
              </span>
              <span className="text-sm font-medium" style={valueStyle}>
                {trait.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="border-t pt-5" style={dividerStyle}>
        <h3
          className="font-mono text-[10px] uppercase tracking-widest mb-3"
          style={labelStyle}
        >
          About This Piece
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {piece.description}
        </p>
      </div>

      {/* Themes */}
      <div className="border-t pt-5" style={dividerStyle}>
        <h3
          className="font-mono text-[10px] uppercase tracking-widest mb-3"
          style={labelStyle}
        >
          Themes
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {piece.themes.map((theme) => (
            <Tag key={theme} label={theme} />
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="border-t pt-5" style={dividerStyle}>
        <div className="flex flex-wrap gap-1.5">
          {piece.tags.map((tag) => (
            <Tag key={tag} label={`#${tag}`} />
          ))}
        </div>
      </div>

    </div>
  )
}
