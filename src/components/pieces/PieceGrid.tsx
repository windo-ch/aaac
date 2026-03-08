import { type Piece } from '@/lib/types'
import { PieceCard } from './PieceCard'

interface PieceGridProps {
  pieces: Piece[]
}

export function PieceGrid({ pieces }: PieceGridProps) {
  return (
    <section aria-label="Ceramics collection">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14">
        {pieces.map((piece) => (
          <PieceCard key={piece.slug} piece={piece} />
        ))}
      </div>
    </section>
  )
}
