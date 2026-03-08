import { getPayload } from 'payload'
import config from './payload.config'

const pieces = [
  {
    slug: 'dont-believe-me',
    title: "Don't Believe Me Vessel",
    available: 'available' as const,
    description:
      "A declaration in glaze. The classic Bart Simpson chalkboard — 'Don't Believe Me' repeated in disciplined cursive — wraps this wheel-thrown vessel in warm terracotta. Cultural artifact meets ceramic tradition. Bart's rebellious repetition becomes a meditation on skepticism, the kind that serves you in a world of noise.",
    themes: [
      { theme: 'skepticism' },
      { theme: 'pop culture' },
      { theme: 'repetition' },
      { theme: 'meme mythology' },
    ],
    tags: [
      { tag: 'vase' },
      { tag: 'orange' },
      { tag: 'pop art' },
      { tag: 'bart simpson' },
      { tag: 'chalkboard' },
    ],
    metadata: {
      material: 'Stoneware',
      glaze: 'Terracotta orange, black underglaze',
      dimensions: '~12 inches',
      year: 2024,
    },
    onchain: { nftMinted: false, nfcLinked: true, chain: 'Base' },
    shipping: {
      shipsWorldwide: true,
      estimatedDays: '7–14 days',
      notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    },
    sortOrder: 1,
  },
  {
    slug: 'garden-of-eden',
    title: 'Garden of Eden Vessel',
    available: 'available' as const,
    description:
      'The original story, retold in cobalt and irony. Adam and Eve navigate their garden with the help of a very contemporary serpent — one who\'s heard of the internet. Pooling blue glaze gives depth to paradise. This piece asks: was the knowledge worth it? (We think yes.)',
    themes: [
      { theme: 'mythology' },
      { theme: 'knowledge' },
      { theme: 'temptation' },
      { theme: 'meme culture' },
      { theme: 'origin stories' },
    ],
    tags: [
      { tag: 'vase' },
      { tag: 'blue' },
      { tag: 'biblical' },
      { tag: 'adam eve' },
      { tag: 'serpent' },
      { tag: 'meme' },
    ],
    metadata: {
      material: 'Porcelain',
      glaze: 'Cobalt blue, white slip, black underglaze',
      dimensions: '~14 inches',
      year: 2024,
    },
    onchain: { nftMinted: false, nfcLinked: true, chain: 'Base' },
    shipping: {
      shipsWorldwide: true,
      estimatedDays: '7–14 days',
      notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    },
    sortOrder: 2,
  },
  {
    slug: 'dont-trust-verify',
    title: "Don't Trust, Verify",
    available: 'available' as const,
    description:
      "Bitcoin's foundational principle rendered in gothic letterforms and delicate florals. The tension is the point — dark, commanding typography softened by botanical detail. A vessel for the paranoid and the principled. Trust the math. Verify the glaze.",
    themes: [
      { theme: 'bitcoin' },
      { theme: 'cryptography' },
      { theme: 'trust' },
      { theme: 'verification' },
      { theme: 'duality' },
    ],
    tags: [
      { tag: 'vase' },
      { tag: 'blue' },
      { tag: 'gothic' },
      { tag: 'bitcoin' },
      { tag: 'flowers' },
      { tag: 'lettering' },
    ],
    metadata: {
      material: 'Stoneware',
      glaze: 'Midnight blue, white slip, botanical detail',
      dimensions: '~13 inches',
      year: 2024,
    },
    onchain: { nftMinted: true, nfcLinked: true, chain: 'Base' },
    shipping: {
      shipsWorldwide: true,
      estimatedDays: '7–14 days',
      notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    },
    sortOrder: 3,
  },
  {
    slug: 'magic-internet-money',
    title: 'Magic Internet Money',
    available: 'available' as const,
    description:
      'Wizard Pepe conjures the blockchain in warm amber glaze. Floating equations — elliptic curves, hash functions, the whole arcane apparatus — orbit the wizard who started a thousand memes. This piece is for the person who explained Bitcoin at Thanksgiving 2017 and was right.',
    themes: [
      { theme: 'bitcoin' },
      { theme: 'magic' },
      { theme: 'wizard pepe' },
      { theme: 'crypto' },
      { theme: 'meme mythology' },
    ],
    tags: [
      { tag: 'vase' },
      { tag: 'orange' },
      { tag: 'wizard pepe' },
      { tag: 'bitcoin' },
      { tag: 'equations' },
      { tag: 'crypto' },
    ],
    metadata: {
      material: 'Stoneware',
      glaze: 'Amber orange, black underglaze detail',
      dimensions: '~15 inches',
      year: 2024,
    },
    onchain: { nftMinted: true, nfcLinked: true, chain: 'Base' },
    shipping: {
      shipsWorldwide: true,
      estimatedDays: '7–14 days',
      notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    },
    sortOrder: 4,
  },
  {
    slug: 'dont-tread',
    title: "Don't Tread",
    available: 'available' as const,
    description:
      "The Gadsden flag reimagined through Pepe, rendered in sovereign yellow. Don't Tread On Me becomes Don't Tread — a vessel for anyone who's felt the boot and said no. The snake coils with purpose. The glaze glows with conviction. A piece for the sovereign individual.",
    themes: [
      { theme: 'sovereignty' },
      { theme: 'liberty' },
      { theme: 'gadsden' },
      { theme: 'pepe' },
      { theme: 'resistance' },
    ],
    tags: [
      { tag: 'vase' },
      { tag: 'yellow' },
      { tag: 'gadsden' },
      { tag: 'pepe' },
      { tag: 'snake' },
      { tag: 'sovereignty' },
    ],
    metadata: {
      material: 'Stoneware',
      glaze: 'Sovereign yellow, black underglaze',
      dimensions: '~13 inches',
      year: 2024,
    },
    onchain: { nftMinted: false, nfcLinked: true, chain: 'Base' },
    shipping: {
      shipsWorldwide: true,
      estimatedDays: '7–14 days',
      notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    },
    sortOrder: 5,
  },
]

async function seed() {
  const payload = await getPayload({ config })

  // Admin user
  const existingUsers = await payload.find({ collection: 'users', limit: 1 })
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'dimitria@artasaconsequence.net',
        password: 'change-me-immediately',
        name: 'Dimitria Barrows',
      },
    })
    console.log('✓ Admin user created')
  } else {
    console.log('— Admin user already exists, skipping')
  }

  // Pieces
  for (const piece of pieces) {
    const existing = await payload.find({
      collection: 'pieces',
      where: { slug: { equals: piece.slug } },
      limit: 1,
    })

    if (existing.totalDocs > 0) {
      console.log(`— "${piece.title}" already exists, skipping`)
      continue
    }

    await payload.create({ collection: 'pieces', data: piece })
    console.log(`✓ Created "${piece.title}"`)
  }

  console.log('\nDone. Login at /admin')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
