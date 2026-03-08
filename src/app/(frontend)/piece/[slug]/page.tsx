import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  getAllPieces,
  getPieceBySlug,
  getPrevPiece,
  getNextPiece,
  generateStaticParams as getStaticParams,
} from '@/lib/pieces'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { PieceMetadata } from '@/components/pieces/PieceMetadata'

export { getStaticParams as generateStaticParams }

export const revalidate = 60

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const piece = await getPieceBySlug(slug)
  if (!piece) return {}
  const desc = piece.description.slice(0, 155)
  return {
    title: `${piece.title} — AAAC`,
    description: desc,
    openGraph: {
      title: piece.title,
      description: desc,
      images: piece.images[0] ? [{ url: piece.images[0] }] : [{ url: '/AAAC-OG-img.png' }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@dimitria1337',
      creator: '@dimitria1337',
    },
  }
}

export default async function PiecePage({ params }: PageProps) {
  const { slug } = await params
  const [piece, allPieces] = await Promise.all([
    getPieceBySlug(slug),
    getAllPieces(),
  ])

  if (!piece) notFound()

  const prev = getPrevPiece(slug, allPieces)
  const next = getNextPiece(slug, allPieces)
  const currentIndex = allPieces.findIndex((p) => p.slug === slug)

  const mediumTrait = piece.metadata.traits.find((t) => t.label === 'Medium')
  const artworkSchema = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: piece.title,
    description: piece.description,
    image: piece.images,
    url: `https://artasaconsequence.net/piece/${piece.slug}`,
    artform: 'Ceramic',
    ...(mediumTrait ? { artMedium: mediumTrait.value } : {}),
    creator: {
      '@type': 'Person',
      name: 'Dimitria Barrows',
      url: 'https://artasaconsequence.net/about',
    },
    offers: {
      '@type': 'Offer',
      availability: piece.available
        ? 'https://schema.org/InStock'
        : 'https://schema.org/SoldOut',
      priceCurrency: 'USD',
      seller: {
        '@type': 'Organization',
        name: 'Art As A Consequence',
        url: 'https://artasaconsequence.net',
      },
    },
  }

  return (
    <div style={{ paddingTop: 'var(--header-h)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(artworkSchema) }}
      />
      <div className="mx-auto max-w-[1200px] px-6 py-12">
        {/* Main grid: image left, info right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
          {/* Left: gallery */}
          <ImageGallery images={piece.images} title={piece.title} />

          {/* Right: sticky info panel */}
          <div
            className="flex flex-col gap-6"
            style={{
              position: 'sticky',
              top: 'calc(var(--header-h) + 2rem)',
              alignSelf: 'start',
            }}
          >
            {/* Back link */}
            <Link
              href="/"
              className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-50 inline-flex items-center gap-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              ← All work
            </Link>

            {/* Title */}
            <h1
              className="leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                textTransform: 'uppercase',
                color: 'var(--color-text-primary)',
              }}
            >
              {piece.title}
            </h1>

            {/* Metadata */}
            <PieceMetadata piece={piece} />
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div
          className="mt-16 pt-8 border-t flex items-center justify-between gap-4"
          style={{ borderColor: 'var(--color-border)' }}
        >
          {prev ? (
            <Link
              href={`/piece/${prev.slug}`}
              className="font-mono text-xs uppercase tracking-widest hover:opacity-50 transition-opacity flex items-center gap-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <span>←</span>
              <span className="hidden sm:inline">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}

          <span
            className="font-mono text-[10px]"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {currentIndex + 1} of {allPieces.length}
          </span>

          {next ? (
            <Link
              href={`/piece/${next.slug}`}
              className="font-mono text-xs uppercase tracking-widest hover:opacity-50 transition-opacity flex items-center gap-2"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              <span className="hidden sm:inline">{next.title}</span>
              <span>→</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
