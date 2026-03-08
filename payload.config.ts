import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import sharp from 'sharp'
import { Pieces } from './src/collections/Pieces'
import { Media } from './src/collections/Media'
import { Pages } from './src/collections/Pages'
import { Users } from './src/collections/Users'

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: { titleSuffix: ' — AAAC Studio' },
  },
  collections: [Pieces, Media, Pages, Users],
  editor: lexicalEditor({}),
  db: sqliteAdapter({
    client: { url: process.env.DATABASE_URI || 'file:./aaac.db' },
    push: true,
  }),
  typescript: {
    outputFile: path.resolve(process.cwd(), 'src/payload-types.ts'),
  },
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-in-production',
  sharp,
})
