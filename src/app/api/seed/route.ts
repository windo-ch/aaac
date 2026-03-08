import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import fs from 'fs'
import path from 'path'

const IMAGES_BASE = path.join(process.cwd(), 'public/images/pieces')

// ── Piece definitions ────────────────────────────────────────────────────────
const PIECES = [
  {
    folder: 'Genesis',
    slug: 'genesis',
    title: 'Genesis',
    available: 'available' as const,
    description:
      "Pepe becomes the serpent and the genesis block becomes the fruit of knowledge. Adam and Eve navigate the garden with full blockchain awareness — don't trust, verify. The front face depicts the temptation, the back traces the ledger. A vessel for the original believers.",
    themes: [{ theme: 'mythology' }, { theme: 'bitcoin' }, { theme: 'genesis block' }, { theme: 'pepe' }, { theme: 'origin stories' }],
    tags: [{ tag: 'vase' }, { tag: 'blue' }, { tag: 'pepe' }, { tag: 'genesis' }, { tag: 'adam and eve' }],
    metadata: { material: 'Stoneware', glaze: 'Cobalt blue, white slip, underglaze illustration', dimensions: '~14 inches', year: 2024 },
    onchain: { nftMinted: false, nfcLinked: true, chain: 'Base' },
    shipping: { shipsWorldwide: true, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.' },
    sortOrder: 1,
  },
  {
    folder: 'This is Fine',
    slug: 'this-is-fine',
    title: 'This Is Fine',
    available: 'available' as const,
    description:
      "The most honest meme about everything. A skeleton dog sits in a burning room, surrounded by roses, the fire indistinguishable from the garden. Barrows paints the internet's deepest coping mechanism onto ceramic that will outlast the meme cycle by centuries.",
    themes: [{ theme: 'internet culture' }, { theme: 'chaos' }, { theme: 'denial' }, { theme: 'meme mythology' }],
    tags: [{ tag: 'vase' }, { tag: 'skeleton dog' }, { tag: 'this is fine' }, { tag: 'flames' }, { tag: 'roses' }],
    metadata: { material: 'Stoneware', glaze: 'Oxide red, black, white slip, rose detail', dimensions: '~13 inches', year: 2024 },
    onchain: { nftMinted: false, nfcLinked: true, chain: 'Base' },
    shipping: { shipsWorldwide: true, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.' },
    sortOrder: 2,
  },
  {
    folder: '2030',
    slug: '2030',
    title: '2030',
    available: 'available' as const,
    description:
      "A vision of 2030 through Pepe's rainbow lens. Bitcoin's first pizza transaction, the SHA-256 hash, a meme landscape rendered in vivid porcelain. When historians want to understand crypto culture, they will look at pieces like this.",
    themes: [{ theme: 'bitcoin' }, { theme: 'future' }, { theme: 'pepe' }, { theme: 'meme culture' }, { theme: 'crypto history' }],
    tags: [{ tag: 'vase' }, { tag: 'rainbow' }, { tag: 'pepe' }, { tag: 'bitcoin' }, { tag: '2030' }],
    metadata: { material: 'Porcelain', glaze: 'Rainbow glaze, multi-color underglaze illustration', dimensions: '~15 inches', year: 2024 },
    onchain: { nftMinted: false, nfcLinked: true, chain: 'Base' },
    shipping: { shipsWorldwide: true, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.' },
    sortOrder: 3,
  },
  {
    folder: 'GM',
    slug: 'gm',
    title: 'GM',
    available: 'available' as const,
    description:
      'The morning greeting of a culture. Pepe as Salt Bae, Bitcoin in the fries, the daily ritual of onchain good mornings embedded in clay. GM is politics as much as a greeting, and this vessel carries both.',
    themes: [{ theme: 'web3 culture' }, { theme: 'morning ritual' }, { theme: 'pepe' }, { theme: 'bitcoin' }],
    tags: [{ tag: 'vase' }, { tag: 'gm' }, { tag: 'pepe' }, { tag: 'salt bae' }, { tag: 'fries' }],
    metadata: { material: 'Stoneware', glaze: 'Warm amber, black underglaze', dimensions: '~12 inches', year: 2024 },
    onchain: { nftMinted: false, nfcLinked: true, chain: 'Base' },
    shipping: { shipsWorldwide: true, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.' },
    sortOrder: 4,
  },
  {
    folder: 'CREAM',
    slug: 'cream',
    title: 'CREAM',
    available: 'available' as const,
    description:
      "Cash Rules Everything Around Me. Wu-Tang Clan's financial manifesto plays out through Tom and Jerry chasing each other across this ceramic vessel. The irony is the point — fiat chase rendered in hand-painted earthenware.",
    themes: [{ theme: 'wu-tang' }, { theme: 'money' }, { theme: 'pop culture' }, { theme: 'tom and jerry' }],
    tags: [{ tag: 'vase' }, { tag: 'cream' }, { tag: 'wu-tang' }, { tag: 'tom and jerry' }, { tag: 'cash' }],
    metadata: { material: 'Earthenware', glaze: 'Cream glaze, hand-painted illustration', dimensions: '~11 inches', year: 2024 },
    onchain: { nftMinted: false, nfcLinked: false, chain: 'Base' },
    shipping: { shipsWorldwide: true, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.' },
    sortOrder: 5,
  },
  {
    folder: 'Homer',
    slug: 'homer',
    title: 'Homer',
    available: 'available' as const,
    description:
      "Homer disappears into the bush, into the void, into the ceramic. This vessel carries the internet's most relatable exit strategy — a leafy retreat from anything that requires explaining yourself.",
    themes: [{ theme: 'internet culture' }, { theme: 'meme' }, { theme: 'simpsons' }, { theme: 'disappearing' }],
    tags: [{ tag: 'vase' }, { tag: 'homer' }, { tag: 'green' }, { tag: 'leaf glaze' }, { tag: 'simpsons' }],
    metadata: { material: 'Stoneware', glaze: 'Leaf green, natural earth tones', dimensions: '~13 inches', year: 2024 },
    onchain: { nftMinted: false, nfcLinked: false, chain: 'Base' },
    shipping: { shipsWorldwide: true, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.' },
    sortOrder: 6,
  },
  {
    folder: 'Magic Internet Money',
    slug: 'magic-internet-money',
    title: 'Magic Internet Money',
    available: 'available' as const,
    description:
      'Wizard Pepe conjures the blockchain in warm amber glaze. Floating equations — elliptic curves, hash functions, the whole arcane apparatus — orbit the wizard who started a thousand memes. This piece is for the person who explained Bitcoin at Thanksgiving 2017 and was right.',
    themes: [{ theme: 'bitcoin' }, { theme: 'magic' }, { theme: 'wizard pepe' }, { theme: 'crypto' }, { theme: 'meme mythology' }],
    tags: [{ tag: 'vase' }, { tag: 'orange' }, { tag: 'wizard pepe' }, { tag: 'bitcoin' }, { tag: 'equations' }, { tag: 'crypto' }],
    metadata: { material: 'Stoneware', glaze: 'Amber orange, black underglaze detail', dimensions: '~15 inches', year: 2024 },
    onchain: { nftMinted: true, nfcLinked: true, chain: 'Base' },
    shipping: { shipsWorldwide: true, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.' },
    sortOrder: 7,
  },
  {
    folder: 'TRUST-THE-PROCESS',
    slug: 'trust-the-process',
    title: 'Trust the Process',
    available: 'available' as const,
    description:
      'Pepe has faith. The meme becomes a meditation — trust the process, have faith in the journey. Applied to crypto culture, it maps perfectly: the HODL mentality, the conviction through the bear market, the ceramic permanence of a volatile belief.',
    themes: [{ theme: 'faith' }, { theme: 'crypto culture' }, { theme: 'pepe' }, { theme: 'patience' }, { theme: 'bitcoin' }],
    tags: [{ tag: 'vase' }, { tag: 'pepe' }, { tag: 'trust' }, { tag: 'process' }, { tag: 'bitcoin' }],
    metadata: { material: 'Porcelain', glaze: 'Multi-tone glaze, Pepe illustration', dimensions: '~14 inches', year: 2024 },
    onchain: { nftMinted: false, nfcLinked: true, chain: 'Base' },
    shipping: { shipsWorldwide: true, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.' },
    sortOrder: 8,
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

function getImageFiles(folder: string): string[] {
  const dir = path.join(IMAGES_BASE, folder)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir)
    .filter((f) => {
      if (f.startsWith('.')) return false               // .DS_Store etc
      if (f.startsWith('Screenshot')) return false      // screen captures
      if (/\.(png|jpe?g)\.(jpg)$/i.test(f)) return false // double extension
      return /\.(png|jpe?g)$/i.test(f)
    })
    .sort((a, b) => {
      const na = parseInt(a), nb = parseInt(b)
      if (!isNaN(na) && !isNaN(nb)) return na - nb
      return a.localeCompare(b)
    })
}

function safeName(filename: string): string {
  return filename.replace(/\s+/g, '-').replace(/\.\.+/g, '.').replace(/-{2,}/g, '-')
}

function mimeType(filename: string): string {
  return /\.jpe?g$/i.test(filename) ? 'image/jpeg' : 'image/png'
}

// ── Route ────────────────────────────────────────────────────────────────────

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  if (token !== (process.env.SEED_SECRET ?? 'seed-aaac-2024')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const reset = searchParams.get('reset') !== 'false' // default true
  const payload = await getPayload({ config })
  const results: string[] = []

  // ── Reset existing data ─────────────────────────────────────────────────
  if (reset) {
    const existingPieces = await payload.find({ collection: 'pieces', limit: 200, depth: 0 })
    for (const p of existingPieces.docs) {
      await payload.delete({ collection: 'pieces', id: p.id })
    }
    const existingMedia = await payload.find({ collection: 'media', limit: 500, depth: 0 })
    for (const m of existingMedia.docs) {
      await payload.delete({ collection: 'media', id: m.id })
    }
    // Clear orphaned files from public/media
    const mediaDir = path.join(process.cwd(), 'public/media')
    if (fs.existsSync(mediaDir)) {
      for (const f of fs.readdirSync(mediaDir)) {
        try { fs.unlinkSync(path.join(mediaDir, f)) } catch { /* ignore */ }
      }
    }
    results.push(`✓ Cleared ${existingPieces.totalDocs} pieces and ${existingMedia.totalDocs} media`)
  }

  // ── Admin user ──────────────────────────────────────────────────────────
  const existingUsers = await payload.find({ collection: 'users', limit: 1 })
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { email: 'dimitria@artasaconsequence.net', password: 'change-me-immediately', name: 'Dimitria Barrows' },
    })
    results.push('✓ Created admin user')
  } else {
    results.push('— Admin user already exists')
  }

  // ── Pieces with images ──────────────────────────────────────────────────
  for (const { folder, ...piece } of PIECES) {
    const files = getImageFiles(folder)

    if (files.length === 0) {
      results.push(`⚠ No images found for "${piece.title}" (folder: ${folder}) — skipped`)
      continue
    }

    // Upload each image
    const imageRefs: { image: number; alt: string }[] = []
    for (const filename of files) {
      const filePath = path.join(IMAGES_BASE, folder, filename)
      try {
        const buffer = fs.readFileSync(filePath)
        const name = safeName(filename)
        const media = await payload.create({
          collection: 'media',
          data: { alt: `${piece.title} — ${name}` },
          file: { data: buffer, mimetype: mimeType(name), name, size: buffer.length },
        })
        imageRefs.push({ image: media.id as number, alt: piece.title })
      } catch (err) {
        results.push(`  ⚠ Upload failed: ${filename} — ${err}`)
      }
    }

    if (imageRefs.length === 0) {
      results.push(`⚠ All uploads failed for "${piece.title}" — skipped`)
      continue
    }

    await payload.create({
      collection: 'pieces',
      data: { ...piece, images: imageRefs },
    })
    results.push(`✓ "${piece.title}" — ${imageRefs.length} image${imageRefs.length !== 1 ? 's' : ''}`)
  }

  results.push('\nDone. Login at /admin')
  return NextResponse.json({ ok: true, results })
}
