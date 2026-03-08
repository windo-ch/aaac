import type { Piece } from './types'
export type { Piece, PieceMetadata, PieceMetadataTrait, OnchainInfo, ShippingInfo } from './types'
import piecesData from '@/data/pieces.json'

const pieces = piecesData as unknown as Piece[]

export async function getAllPieces(): Promise<Piece[]> {
  return pieces
}

export async function getPieceBySlug(slug: string): Promise<Piece | null> {
  return pieces.find((p) => p.slug === slug) ?? null
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return pieces.map((p) => ({ slug: p.slug }))
}

export function getPieceIndex(slug: string, all: Piece[]): number {
  return all.findIndex((p) => p.slug === slug)
}

export function getPrevPiece(slug: string, all: Piece[]): Piece | null {
  const i = getPieceIndex(slug, all)
  return i <= 0 ? null : all[i - 1]
}

export function getNextPiece(slug: string, all: Piece[]): Piece | null {
  const i = getPieceIndex(slug, all)
  return i < 0 || i >= all.length - 1 ? null : all[i + 1]
}
