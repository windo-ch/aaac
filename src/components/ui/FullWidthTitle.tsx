'use client'

import { usePathname } from 'next/navigation'

// Fixed bottom bar — "ART AS A CONSEQUENCE" at exactly 100vw width via SVG textLength
// On the homepage: foreground (z-index 90, full opacity)
// On all other pages: background layer (z-index -1, low opacity)
export function FullWidthTitle() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <div
      aria-hidden={!isHome}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: isHome ? 90 : -1,
        backgroundColor: 'transparent',
        lineHeight: 0,
        opacity: isHome ? 1 : 0.07,
        pointerEvents: 'none',
      }}
    >
      <svg
        viewBox="0 0 1000 100"
        width="100%"
        style={{ display: 'block' }}
        aria-label="Art As A Consequence"
        role="img"
      >
        <text
          x="0"
          y="90"
          fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="100"
          textLength="1000"
          lengthAdjust="spacingAndGlyphs"
          fill="#1c1917"
        >
          ART AS A CONSEQUENCE
        </text>
      </svg>
    </div>
  )
}
