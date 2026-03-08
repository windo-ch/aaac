/**
 * Direct piece importer — uses better-sqlite3 directly.
 * No HTTP, no Payload API, no timeouts.
 * Run: npx tsx import-pieces.ts
 */
import Database from 'better-sqlite3'
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const DB_PATH    = path.resolve('./aaac.db')
const IMAGES_BASE = path.resolve('./public/images/pieces')
const MEDIA_DIR  = path.resolve('./public/media')

// ── Piece definitions ─────────────────────────────────────────────────────────
const PIECES = [
  {
    folder: 'Genesis', slug: 'genesis', title: 'Genesis', available: 'available', sortOrder: 1,
    description: "This ceramic vessel reinterprets the Genesis narrative through the lens of crypto ethos, transforming the Garden of Eden's temptation into a contemporary memento mori coiled around glazed clay — where Adam himself was formed from clay (Genesis 2:7). The handmade vase depicts Adam and Eve reaching for forbidden fruit beneath the Tree of Knowledge, with Pepe as the sly tempter snake between them. The reverse depicts the Baroque-like scripture 'Don't Trust, Verify', referencing deception, blockchain truth, and humanity's fall. Drawing from Genesis iconography, crypto ethos, and historical ceramic craftsmanship, Barrows blends Renaissance with the tactile ritual of clay.",
    material: 'Glazed ceramic', glaze: 'Cobalt blue, white slip, underglaze illustration', dimensions: '29 × 19 cm', year: 2025,
    nftMinted: 0, nfcLinked: 1, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['mythology', 'bitcoin', 'genesis block', 'pepe', 'origin stories'],
    tags: ['vase', 'blue', 'pepe', 'genesis', 'adam and eve'],
  },
  {
    folder: 'This is Fine', slug: 'this-is-fine', title: 'This Is Fine', available: 'available', sortOrder: 2,
    description: "Adapted from 'This Is Fine' (2013) by KC Green — Barrows transforms KC Green's iconic internet meme into a contemporary memento mori, translating the meme's sardonic optimism into a lasting object of reflection. The handmade glazed vase reimagines the calm dog amid flames on one side and his skeletal form on the other — a Baroque-like meditation on humor, denial, and decay. A crown of lush, hand-sculpted roses and sharp thorns rises from the burnt rim, merging beauty and pain while evoking the vanitas tradition. What once adorned domestic interiors now becomes commentary on fragility in the age of digital permanence.",
    material: 'Glazed ceramic', glaze: 'Oxide red, black, white slip, rose detail', dimensions: '46 × 37 cm', year: 2024,
    nftMinted: 0, nfcLinked: 1, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['internet culture', 'memento mori', 'denial', 'vanitas', 'meme mythology'],
    tags: ['vase', 'skeleton dog', 'this is fine', 'flames', 'roses'],
  },
  {
    folder: '2030', slug: '2030', title: 'The Year Is 2030', available: 'available', sortOrder: 3,
    description: "Barrows transforms the ceramic vessel into a rotating narrative surface where meme culture, cryptocurrency fantasy, and pop-cultural nostalgia converge. Five walking Pepe figures encircle the form in a rhythmic procession referencing Grateful Dead's Dancing Bears, suggesting optimism, collectivity, and speculative movement toward a promised digital future. Rendered in a bright pastoral landscape beneath a rainbow sky, a painted pizza box references Bitcoin's first transaction — a secular relic marking the moment digital abstraction entered material exchange. The painted text reads: 'THE YEAR IS 2030. YOU GLANCE AT YOUR BITCOIN WALLET AND IT DISPLAYS AN ASTRONOMICAL VALUE. YOU GRIN AND GO BACK TO YOUR BUSY DAY.'",
    material: 'Glazed ceramic', glaze: 'Rainbow glaze, multi-color underglaze illustration', dimensions: '30 × 25 cm', year: 2024,
    nftMinted: 0, nfcLinked: 1, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['bitcoin', 'future', 'pepe', 'meme culture', 'crypto history'],
    tags: ['vase', 'rainbow', 'pepe', 'bitcoin', '2030'],
  },
  {
    folder: 'GM', slug: 'gm', title: 'GM', available: 'available', sortOrder: 4,
    description: "This brightly glazed ceramic vessel brings together internet meme culture and crypto. On one side, a 'Salt Bae'-like Pepe throws tokens and BTC instead of salt, turning a famous gesture into a playful take on hype, value, and online trends. On the other side, a red 'GM' fries carton shows a small Pepe hiding inside — a simple nod to hustle culture and the dream of turning everyday work into crypto success.",
    material: 'Glazed ceramic', glaze: 'Warm amber, black underglaze', dimensions: '16 × 14 cm', year: 2025,
    nftMinted: 0, nfcLinked: 1, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['web3 culture', 'morning ritual', 'pepe', 'bitcoin'],
    tags: ['vase', 'gm', 'pepe', 'salt bae', 'fries'],
  },
  {
    folder: 'CREAM', slug: 'cream', title: 'CREAM', available: 'available', sortOrder: 5,
    description: "Cash Rules Everything Around Me. Wu-Tang Clan's financial manifesto plays out through Tom and Jerry chasing each other across this ceramic vessel. The irony is the point — fiat chase rendered in hand-painted earthenware.",
    material: 'Glazed ceramic', glaze: 'Cream glaze, hand-painted illustration', dimensions: '~28 cm', year: 2024,
    nftMinted: 0, nfcLinked: 0, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['wu-tang', 'money', 'pop culture', 'tom and jerry'],
    tags: ['vase', 'cream', 'wu-tang', 'tom and jerry', 'cash'],
  },
  {
    folder: 'Homer', slug: 'homer', title: 'Homer', available: 'available', sortOrder: 6,
    description: "Barrows transforms a viral internet GIF from The Simpsons into a sculptural ceramic vessel. The work references the widely circulated image of Homer Simpson disappearing into a hedge — an enduring meme symbolizing social withdrawal, awkwardness, and digital-era self-erasure. The cylindrical form is fully encrusted with individually handmade ceramic leaves, glazed in layered greens and carved with detailed veining. From within this dense foliage, the cartoon figure emerges mid-disappearance, creating a visual tension between flat, digital animation and tactile, hand-built clay. Open and hollow, the vessel reinforces themes of concealment and absence.",
    material: 'Glazed ceramic', glaze: 'Leaf green, natural earth tones', dimensions: '21 × 20 cm', year: 2024,
    nftMinted: 0, nfcLinked: 0, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['internet culture', 'meme', 'simpsons', 'disappearing'],
    tags: ['vase', 'homer', 'green', 'leaf glaze', 'simpsons'],
  },
  {
    folder: 'Magic Internet Money', slug: 'magic-internet-money', title: 'Magic Internet Money', available: 'available', sortOrder: 7,
    description: 'Wizard Pepe conjures the blockchain in warm amber glaze. Floating equations — elliptic curves, hash functions, the whole arcane apparatus — orbit the wizard who started a thousand memes. This piece is for the person who explained Bitcoin at Thanksgiving 2017 and was right.',
    material: 'Glazed ceramic', glaze: 'Amber orange, black underglaze detail', dimensions: '~38 cm', year: 2024,
    nftMinted: 1, nfcLinked: 1, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['bitcoin', 'magic', 'wizard pepe', 'crypto', 'meme mythology'],
    tags: ['vase', 'orange', 'wizard pepe', 'bitcoin', 'equations', 'crypto'],
  },
  {
    folder: 'SEEDPHRSE', slug: 'seedphrase', title: 'Seed Phrase', available: 'available', sortOrder: 8,
    description: "Never share your seed phrase. Not with your bank, not with your exchange, not with the helpful DM. Barrows captures the cardinal rule of crypto through Simpsons iconography — the characters who have seen everything, who explain everything, rendered on ceramic that will hold flowers for decades.",
    material: 'Glazed ceramic', glaze: 'Yellow ochre, black underglaze illustration', dimensions: '~30 cm', year: 2024,
    nftMinted: 0, nfcLinked: 1, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['crypto security', 'simpsons', 'meme', 'self-custody'],
    tags: ['vase', 'seed phrase', 'simpsons', 'crypto', 'security'],
  },
  {
    folder: 'TRUST-THE-PROCESS', slug: 'trust-the-process', title: 'Trust the Process', available: 'available', sortOrder: 9,
    description: 'Pepe has faith. The meme becomes a meditation — trust the process, have faith in the journey. Applied to crypto culture, it maps perfectly: the HODL mentality, the conviction through the bear market, the ceramic permanence of a volatile belief.',
    material: 'Glazed ceramic', glaze: 'Multi-tone glaze, Pepe illustration', dimensions: '~35 cm', year: 2024,
    nftMinted: 0, nfcLinked: 1, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['faith', 'crypto culture', 'pepe', 'patience', 'bitcoin'],
    tags: ['vase', 'pepe', 'trust', 'process', 'bitcoin'],
  },
  {
    folder: 'Buy the Dip', slug: 'buy-the-dip', title: 'Buy the Dip', available: 'available', sortOrder: 10,
    description: "In Buy the Dip, Barrows combines contemporary ceramic practice with internet and crypto culture. On one side, a male and female Pepe stand beside a bowl of guacamole labeled 'BUY THE DIP,' merging crypto slang with a literal food joke. On the reverse, a group of Pepe figures dance and play music in front of a church, suggesting belief, ritual, and collective celebration — paralleling the communal spirit often found in online spaces and cryptocurrency movements. In crypto, volatility itself becomes material for comedy. When prices rise and fall with unsettling speed, humor becomes a collective coping mechanism — a way to soften risk through irony and shared laughter.",
    material: 'Glazed ceramic', glaze: 'Multi-color underglaze illustration', dimensions: '26.5 × 25 cm', year: 2025,
    nftMinted: 0, nfcLinked: 0, chain: 'Base', shipsWorldwide: 1, estimatedDays: '7–14 days', notes: 'Custom packed in archival foam. Certificate of authenticity included.',
    themes: ['crypto culture', 'humor', 'pepe', 'meme mythology', 'community'],
    tags: ['vase', 'buy the dip', 'pepe', 'guacamole', 'crypto'],
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────
function getImageFiles(folder: string): string[] {
  const dir = path.join(IMAGES_BASE, folder)
  if (!fs.existsSync(dir)) { console.warn(`  ⚠ folder missing: ${dir}`); return [] }
  return fs.readdirSync(dir)
    .filter(f =>
      !f.startsWith('.') &&
      !f.startsWith('Screenshot') &&
      !/\.(png|jpe?g)\.jpg$/i.test(f) &&
      /\.(png|jpe?g)$/i.test(f)
    )
    .sort((a, b) => {
      const na = parseInt(a), nb = parseInt(b)
      return (!isNaN(na) && !isNaN(nb)) ? na - nb : a.localeCompare(b)
    })
}

function safeName(s: string): string {
  return s.replace(/\s+/g, '-').replace(/\.\.+/g, '.').replace(/-{2,}/g, '-')
}

function mime(filename: string): string {
  return /\.jpe?g$/i.test(filename) ? 'image/jpeg' : 'image/png'
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  // Ensure public/media exists
  fs.mkdirSync(MEDIA_DIR, { recursive: true })

  const db = new Database(DB_PATH)
  db.pragma('journal_mode = WAL')
  db.pragma('foreign_keys = OFF')  // disable FK checks during bulk delete

  // Wipe existing piece + media data (keep users)
  db.exec(`
    DELETE FROM pieces_images;
    DELETE FROM pieces_themes;
    DELETE FROM pieces_tags;
    DELETE FROM pieces;
    DELETE FROM media;
  `)
  // Clear orphaned media files
  for (const f of fs.readdirSync(MEDIA_DIR)) {
    try { fs.unlinkSync(path.join(MEDIA_DIR, f)) } catch { /* skip */ }
  }
  console.log('✓ Cleared existing pieces and media\n')

  db.pragma('foreign_keys = ON')

  const stmtMedia = db.prepare(`
    INSERT INTO media (alt, url, filename, mime_type, filesize, width, height)
    VALUES (@alt, @url, @filename, @mimeType, @filesize, @width, @height)
  `)
  const stmtPiece = db.prepare(`
    INSERT INTO pieces
      (title, slug, available, description,
       metadata_material, metadata_glaze, metadata_dimensions, metadata_year,
       onchain_nft_minted, onchain_nfc_linked, onchain_chain,
       shipping_ships_worldwide, shipping_estimated_days, shipping_notes,
       sort_order)
    VALUES
      (@title, @slug, @available, @description,
       @material, @glaze, @dimensions, @year,
       @nftMinted, @nfcLinked, @chain,
       @shipsWorldwide, @estimatedDays, @notes,
       @sortOrder)
  `)
  const stmtImage  = db.prepare(`INSERT INTO pieces_images (_order, _parent_id, id, image_id, alt) VALUES (@ord, @parentId, @id, @imageId, @alt)`)
  const stmtTheme  = db.prepare(`INSERT INTO pieces_themes (_order, _parent_id, id, theme)        VALUES (@ord, @parentId, @id, @theme)`)
  const stmtTag    = db.prepare(`INSERT INTO pieces_tags   (_order, _parent_id, id, tag)          VALUES (@ord, @parentId, @id, @tag)`)

  for (const piece of PIECES) {
    const files = getImageFiles(piece.folder)
    if (files.length === 0) { console.warn(`⚠  No images for "${piece.title}" — skipped\n`); continue }

    // Insert piece row
    const { lastInsertRowid: pieceId } = stmtPiece.run({
      title: piece.title, slug: piece.slug, available: piece.available, description: piece.description,
      material: piece.material, glaze: piece.glaze, dimensions: piece.dimensions, year: piece.year,
      nftMinted: piece.nftMinted, nfcLinked: piece.nfcLinked, chain: piece.chain,
      shipsWorldwide: piece.shipsWorldwide, estimatedDays: piece.estimatedDays, notes: piece.notes,
      sortOrder: piece.sortOrder,
    })

    // Upload images
    let imgOrder = 1
    for (const filename of files) {
      const src = path.join(IMAGES_BASE, piece.folder, filename)
      let destName = safeName(filename)
      // Dedup: if name already taken, prefix with slug
      if (fs.existsSync(path.join(MEDIA_DIR, destName))) {
        const ext = path.extname(destName)
        destName = `${piece.slug}-${destName}`
      }
      fs.copyFileSync(src, path.join(MEDIA_DIR, destName))

      // Get dimensions
      let width: number | null = null, height: number | null = null
      try { const m = await sharp(src).metadata(); width = m.width ?? null; height = m.height ?? null } catch { /* skip */ }

      const { lastInsertRowid: mediaId } = stmtMedia.run({
        alt: `${piece.title} — image ${imgOrder}`,
        url: `/api/media/file/${destName}`,
        filename: destName,
        mimeType: mime(destName),
        filesize: fs.statSync(src).size,
        width,
        height,
      })

      stmtImage.run({ ord: imgOrder, parentId: pieceId, id: `${pieceId}_i${imgOrder}`, imageId: mediaId, alt: piece.title })
      process.stdout.write('.')
      imgOrder++
    }

    // Themes + tags
    piece.themes.forEach((t, i) => stmtTheme.run({ ord: i+1, parentId: pieceId, id: `${pieceId}_t${i}`, theme: t }))
    piece.tags.forEach((t, i)   => stmtTag.run({   ord: i+1, parentId: pieceId, id: `${pieceId}_g${i}`, tag: t }))

    console.log(`  ✓ "${piece.title}" — ${files.length} image${files.length !== 1 ? 's' : ''}`)
  }

  db.close()
  console.log('\nAll done. Restart the dev server.')
}

main().catch((err) => { console.error(err); process.exit(1) })
