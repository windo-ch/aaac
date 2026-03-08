import type { MetadataRoute } from 'next'
import { getAllPieces } from '@/lib/pieces'

const BASE = 'https://artasaconsequence.net'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pieces = await getAllPieces()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE}/work`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE}/blast-from-the-past`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE}/blast-from-the-past/about`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE}/blast-from-the-past/art-direction`, lastModified: new Date(), priority: 0.6 },
    { url: `${BASE}/blast-from-the-past/interviews`, lastModified: new Date(), priority: 0.6 },
  ]

  const pieceRoutes: MetadataRoute.Sitemap = pieces.map((p) => ({
    url: `${BASE}/piece/${p.slug}`,
    lastModified: new Date(),
    priority: 0.9,
  }))

  return [...staticRoutes, ...pieceRoutes]
}
