'use client'

import { type Piece } from '@/lib/types'

interface CrossmintCheckoutProps {
  piece: Piece
}

/**
 * Crossmint checkout stub.
 * When NEXT_PUBLIC_CROSSMINT_CLIENT_ID is set, this renders a Crossmint
 * hosted checkout button. Until configured, it shows a styled placeholder.
 *
 * To upgrade: import CrossmintHostedCheckout from @crossmint/client-sdk-react-ui
 * and wire up the clientId + orderIdentifier props.
 */
export function CrossmintCheckout({ piece }: CrossmintCheckoutProps) {
  const clientId = process.env.NEXT_PUBLIC_CROSSMINT_CLIENT_ID

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 24px',
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'all 0.2s',
    border: 'none',
    background: 'var(--color-text-primary)',
    color: 'var(--color-bg)',
    display: 'block',
  }

  const handleClick = () => {
    if (!clientId) {
      alert(
        'Checkout not yet configured.\n\nAdd NEXT_PUBLIC_CROSSMINT_CLIENT_ID to .env.local to enable Crossmint payments.'
      )
      return
    }
    // With clientId, open Crossmint hosted checkout
    // TODO: Replace with CrossmintHostedCheckout component from @crossmint/client-sdk-react-ui
    window.open(`https://www.crossmint.com/checkout?clientId=${clientId}`, '_blank')
  }

  return (
    <button style={buttonStyle} onClick={handleClick}>
      Acquire
    </button>
  )
}
