import type { CollectionConfig } from 'payload'

export const Pieces: CollectionConfig = {
  slug: 'pieces',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'available', 'sortOrder'],
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && !data.slug && data.title) {
          data.slug = (data.title as string)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
        }
        return data
      },
    ],
    afterChange: [
      async ({ doc }) => {
        const { revalidatePath } = await import('next/cache')
        revalidatePath('/')
        revalidatePath('/piece/[slug]', 'page')
        return doc
      },
    ],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      admin: {
        description: 'Auto-generated from title if left blank',
      },
    },
    {
      name: 'available',
      type: 'select',
      required: true,
      defaultValue: 'available',
      options: [
        { label: 'Available', value: 'available' },
        { label: 'Sold', value: 'sold' },
        { label: 'Reserved', value: 'reserved' },
        { label: 'Unlisted', value: 'unlisted' },
      ],
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'themes',
      type: 'array',
      fields: [
        {
          name: 'theme',
          type: 'text',
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'metadata',
      type: 'group',
      fields: [
        {
          name: 'dimensions',
          type: 'text',
        },
        {
          name: 'weight',
          type: 'text',
        },
        {
          name: 'material',
          type: 'text',
        },
        {
          name: 'glaze',
          type: 'text',
        },
        {
          name: 'year',
          type: 'number',
        },
      ],
    },
    {
      name: 'onchain',
      type: 'group',
      fields: [
        {
          name: 'nftMinted',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'nfcLinked',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'chain',
          type: 'text',
          defaultValue: 'Base',
        },
        {
          name: 'contractAddress',
          type: 'text',
        },
        {
          name: 'tokenId',
          type: 'text',
        },
      ],
    },
    {
      name: 'shipping',
      type: 'group',
      fields: [
        {
          name: 'shipsWorldwide',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'estimatedDays',
          type: 'text',
          defaultValue: '7–14 days',
        },
        {
          name: 'notes',
          type: 'textarea',
        },
      ],
    },
    {
      name: 'buyer',
      type: 'group',
      access: {
        read: ({ req }) => !!req.user,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'email',
          type: 'email',
        },
        {
          name: 'address',
          type: 'textarea',
        },
        {
          name: 'transactionId',
          type: 'text',
        },
        {
          name: 'soldDate',
          type: 'date',
        },
      ],
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 100,
      admin: {
        description: 'Lower numbers appear first',
      },
    },
  ],
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
}
