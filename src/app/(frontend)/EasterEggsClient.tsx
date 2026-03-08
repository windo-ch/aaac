'use client'

import { useEffect } from 'react'

const ASCII_LOGO = `
 ___  ___  ___  ___
/  / /  / /  / /  /
/__/ /__/ /__/ /__/
 A    A    A    C
ART AS A CONSEQUENCE
`

const KONAMI = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export default function EasterEggsClient() {
  useEffect(() => {
    // Console logo
    console.log(
      `%c${ASCII_LOGO}`,
      'color: #1c1917; font-family: monospace; font-size: 12px;'
    )
    console.log(
      '%cArt As A Consequence — hello@artasaconsequence.net',
      'color: #44403c; font-family: monospace; font-size: 11px;'
    )

    // Konami code
    let progress = 0

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[progress]) {
        progress++
        if (progress === KONAMI.length) {
          progress = 0
          triggerKonami()
        }
      } else {
        progress = 0
      }
    }

    const triggerKonami = () => {
      // Brief flash
      const el = document.documentElement
      el.style.animation = 'glitch 0.3s steps(2) 3'
      setTimeout(() => {
        el.style.animation = ''
      }, 1000)

      console.log(
        '%c🏺 You found the code.',
        'color: #1c1917; font-size: 14px; font-family: monospace;'
      )
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return null
}
