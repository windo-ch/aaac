import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from './ScrollReveal'

interface GalleryCard {
  slug: string
  title: string
  imageUrl: string
  imageAlt: string
}

function PieceLink({
  piece,
  className,
  style,
  sizes,
  priority,
}: {
  piece: GalleryCard
  className: string
  style?: React.CSSProperties
  sizes: string
  priority?: boolean
}) {
  return (
    <Link href={`/piece/${piece.slug}`} className={`piece-card ${className}`} style={style}>
      {piece.imageUrl && (
        <Image
          src={piece.imageUrl}
          alt={piece.imageAlt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="piece-label">
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
          }}
        >
          {piece.title}
        </p>
      </div>
    </Link>
  )
}

// Row patterns cycle: solo-right → solo-left → duo → solo-center → repeat
type SoloVariant = 'e-solo-r' | 'e-solo-l' | 'e-solo-c'
type Row =
  | { kind: 'solo'; piece: GalleryCard; variant: SoloVariant; ar: string }
  | { kind: 'duo'; a: GalleryCard; b: GalleryCard }

const SOLO_CYCLE: Array<{ variant: SoloVariant; ar: string }> = [
  { variant: 'e-solo-r', ar: '4/5' },
  { variant: 'e-solo-l', ar: '3/4' },
  { variant: 'e-solo-c', ar: '4/5' },
]

function buildRows(pieces: GalleryCard[]): Row[] {
  const rows: Row[] = []
  let i = 0
  let patternPos = 0 // 0,1,2,3 → solo-r, solo-l, duo, solo-c
  let soloIdx = 0

  while (i < pieces.length) {
    const isDuoSlot = patternPos % 4 === 2
    patternPos++

    if (isDuoSlot && i + 1 < pieces.length) {
      rows.push({ kind: 'duo', a: pieces[i], b: pieces[i + 1] })
      i += 2
    } else {
      const cfg = SOLO_CYCLE[soloIdx % SOLO_CYCLE.length]
      soloIdx++
      rows.push({ kind: 'solo', piece: pieces[i], variant: cfg.variant, ar: cfg.ar })
      i++
    }
  }

  return rows
}

export function GalleryGrid({ pieces }: { pieces: GalleryCard[] }) {
  if (pieces.length === 0) return null

  const rows = buildRows(pieces)

  return (
    <section
      className="mx-auto max-w-[1200px] px-6 py-16 flex flex-col"
      style={{ gap: 'clamp(3rem, 7vw, 8rem)' }}
    >
      {rows.map((row, ri) => (
        <ScrollReveal key={ri} delay={ri * 80}>
          {row.kind === 'solo' ? (
            <PieceLink
              piece={row.piece}
              className={`e-solo ${row.variant}`}
              style={{ aspectRatio: row.ar }}
              sizes="(max-width: 640px) 90vw, (max-width: 1200px) 70vw, 820px"
              priority={ri === 0}
            />
          ) : (
            <div className="e-duo">
              <PieceLink
                piece={row.a}
                className="e-duo-a"
                sizes="(max-width: 640px) 90vw, (max-width: 1200px) 55vw, 650px"
              />
              <PieceLink
                piece={row.b}
                className="e-duo-b"
                sizes="(max-width: 640px) 90vw, (max-width: 1200px) 36vw, 430px"
              />
            </div>
          )}
        </ScrollReveal>
      ))}
    </section>
  )
}
