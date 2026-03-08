export interface PieceMetadataTrait {
  label: string
  value: string
}

export interface PieceMetadata {
  traits: PieceMetadataTrait[]
}

export interface OnchainInfo {
  nft: boolean
  nfc: boolean
  chain: string
  contractAddress: string | null
  tokenId: string | null
}

export interface ShippingInfo {
  available: boolean
  domestic: string
  international: string
  handling: string
  notes: string
}

export interface Piece {
  slug: string
  title: string
  available: boolean
  images: string[]
  description: string
  themes: string[]
  tags: string[]
  metadata: PieceMetadata
  onchain: OnchainInfo
  shipping: ShippingInfo
}
