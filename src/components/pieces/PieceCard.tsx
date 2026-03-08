'use client'

import Link from 'next/link'
import { type Piece } from '@/lib/types'
import { ImageWithBlur } from '@/components/ui/ImageWithBlur'

interface PieceCardProps {
  piece: Piece
}

export function PieceCard({ piece }: PieceCardProps) {
  return (
    <Link
      href={`/piece/${piece.slug}`}
      className="group block"
      aria-label={`View ${piece.title}`}
    >
      <article>
        {/* Image */}
        <div
          className="relative overflow-hidden mb-4"
          style={{ aspectRatio: '3/4' }}
        >
          <ImageWithBlur
            src={piece.images[0]}
            alt={piece.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Availability badge */}
          {!piece.available && (
            <div
              className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-widest px-2 py-1"
              style={{
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
              }}
            >
              Sold
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-4">
          <h2 className="text-sm font-bold leading-snug truncate">
            {piece.title}
          </h2>
        </div>
      </article>
    </Link>
  )
}
