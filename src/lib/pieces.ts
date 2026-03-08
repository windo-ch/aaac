import 'server-only'
import { getPayload } from 'payload'
import config from '@payload-config'
import type { Piece } from './types'

// Re-export types so existing imports still work
export type {
  Piece,
  PieceMetadata,
  PieceMetadataTrait,
  OnchainInfo,
  ShippingInfo,
} from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function adaptPiece(doc: any): Piece {
  return {
    slug: doc.slug ?? '',
    title: doc.title ?? '',
    available: doc.available === 'available',
    images: (doc.images ?? []).map((img: any) => {
      const image = img.image
      if (!image) return ''
      if (typeof image === 'string') return image
      return image.url ?? ''
    }).filter(Boolean),
    description: doc.description ?? '',
    themes: (doc.themes ?? []).map((t: any) => t.theme).filter(Boolean),
    tags: (doc.tags ?? []).map((t: any) => t.tag).filter(Boolean),
    metadata: {
      traits: [
        { label: 'Year', value: doc.metadata?.year?.toString() ?? '' },
        { label: 'Medium', value: doc.metadata?.material ?? '' },
        { label: 'Dimensions', value: doc.metadata?.dimensions ?? '' },
      ].filter((t) => t.value),
    },
    onchain: {
      nft: doc.onchain?.nftMinted ?? false,
      nfc: doc.onchain?.nfcLinked ?? false,
      chain: doc.onchain?.chain ?? 'Base',
      contractAddress: doc.onchain?.contractAddress ?? null,
      tokenId: doc.onchain?.tokenId ?? null,
    },
    shipping: {
      available: doc.shipping?.shipsWorldwide ?? true,
      domestic: 'Free',
      international: '$45',
      handling: doc.shipping?.estimatedDays ?? '7–14 days',
      notes: doc.shipping?.notes ?? '',
    },
  }
}

export async function getAllPieces(): Promise<Piece[]> {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'pieces',
      where: { available: { not_equals: 'unlisted' } },
      sort: 'sortOrder',
      limit: 100,
      depth: 2,
    })
    return docs.map(adaptPiece)
  } catch {
    return []
  }
}

export async function getPieceBySlug(slug: string): Promise<Piece | null> {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'pieces',
      where: { slug: { equals: slug } },
      depth: 2,
      limit: 1,
    })
    return docs[0] ? adaptPiece(docs[0]) : null
  } catch {
    return null
  }
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({
      collection: 'pieces',
      select: { slug: true },
      limit: 200,
      depth: 0,
    })
    return docs.map((d) => ({ slug: (d.slug as string) ?? '' })).filter((d) => d.slug)
  } catch {
    // DB not yet initialized (first build before migration) — ISR handles on-demand generation
    return []
  }
}

export function getPieceIndex(slug: string, pieces: Piece[]): number {
  return pieces.findIndex((p) => p.slug === slug)
}

export function getPrevPiece(slug: string, pieces: Piece[]): Piece | null {
  const index = getPieceIndex(slug, pieces)
  if (index <= 0) return null
  return pieces[index - 1]
}

export function getNextPiece(slug: string, pieces: Piece[]): Piece | null {
  const index = getPieceIndex(slug, pieces)
  if (index < 0 || index >= pieces.length - 1) return null
  return pieces[index + 1]
}
