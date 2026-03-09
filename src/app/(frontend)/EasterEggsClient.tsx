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

const MEMES = [
  'probably nothing.',
  'few understand.',
  'gm, fren.',
  'number go up.',
  '1 BTC = 1 BTC.',
  "don't trust, verify.",
  'not your keys, not your coins.',
  'have fun staying poor.',
  'ser, this is a ceramics gallery.',
  'WAGMI.',
  'we are so back.',
  'the vibes are immaculate.',
  'touch some grass (or ceramic).',
  'ngmi if you sell.',
  'based and ceramicpilled.',
  'it\'s just a vase, ser.',
  'gm to everyone except paper hands.',
  'this is fine.',
]

const PEPE = `
⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢠⡾⠛⠀⢰⣦⣤⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢰⣟⣡⣾⣿⣯⣴⣶⣦⠙⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⣿⣿⣿⠁⠈⡿⠋⠉⢻⣧⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠁⢀⢸⣿⢻⣿⣿⠋⢀⠀⢰⣿⢧⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣾⣟⡿⢾⣿⣟⡳⢦⡀⠀⠀⠀
⣴⣿⡟⣱⣾⠟⠁⠀⣈⠀⠘⢻⣞⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣥⣿⠛⠻⠿⠋⠙⢿⣦⣿⣆⠀⠀
⣿⡏⣴⡟⠁⠀⢀⣴⣿⣷⣄⣼⡿⢀⣸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣀⣀⣀⠀⠀⠐⣸⡏⣿⡇⠀⠀⠀⢼⣿⣏⠻⣿⡀⠀
⣿⣽⡟⠀⠀⣠⣿⢋⣤⣾⣻⣿⣭⠾⣱⠟⢷⣄⠀⠀⠀⠀⠀⣀⣤⠶⣛⣩⣥⣾⣿⣭⣭⣏⡳⢾⡉⣼⣏⢀⣠⣤⣄⠀⠙⠛⢷⣌⢻⣄
⢿⣿⠀⠀⣼⠟⣡⣾⡿⢸⣏⡤⠔⠒⠻⠦⢤⣍⣙⣿⡟⠛⢛⣩⡶⠟⠋⠁⠀⠀⠀⠀⠈⠙⢿⣮⡻⠾⠛⠛⢿⣥⡙⢷⣤⡀⠀⢿⣦⠛
⣾⡇⠀⣸⡏⢴⣿⣿⡷⠟⠁⠀⠀⢀⣀⣀⣀⣈⣙⣛⣷⣾⠟⠁⠀⠀⣀⣤⣶⡾⠿⣿⣿⣿⡿⠿⠿⠿⠿⣷⣦⣍⢻⣿⣟⢷⡄⠀⢿⡿
⣿⠇⠀⣿⣷⣶⡿⠋⠀⢀⣤⠶⠛⠉⠉⠁⠀⠀⠉⠙⠻⠿⠦⢤⡶⠛⠉⢉⣤⡶⠟⠋⠉⣀⣀⣀⠠⠤⢾⣶⣽⣿⣿⣟⣻⡟⣿⠀⠸⣷
⣿⠀⠀⣿⣿⠋⠀⠀⠼⠋⠀⠀⠀⠀⠀⢀⣠⣴⣶⣾⣿⠿⣤⣤⣤⣄⣐⠛⠁⠀⢀⣴⡿⢛⣷⡾⣿⣿⣶⣀⠀⠉⠛⢿⡏⣷⣿⠀⠀⣿
⣿⠀⠀⣿⣿⠀⠀⡏⠀⠀⠀⠀⢀⣤⡾⢟⣽⠿⣻⣤⣴⣶⣶⣄⡀⠈⠙⠻⣶⠾⠋⠉⠀⣼⣿⣶⣿⡋⢹⣿⡆⠀⠀⢸⣿⢻⣿⠀⠀⣿
⣿⠀⠀⢻⣿⠀⠀⠀⠀⣀⣠⣴⡿⣋⣴⠟⠁⢸⣿⣧⣼⣿⠉⢹⣿⡄⠀⢰⡏⠀⠀⠀⠀⢿⣿⣷⢿⣿⣿⣿⣷⣤⣤⣾⠁⢸⡇⠀⠀⣿
⣿⡇⠀⢸⣿⡀⠀⠀⠘⠛⠉⣾⣿⡋⠀⠀⠀⢸⣿⣿⡿⣿⣿⣿⣿⣧⣤⣾⠷⣦⣤⣤⣤⣼⣿⡿⠿⠛⠉⣁⣹⣿⣟⣿⣤⣼⠇⠀⠀⣿
⣿⡇⠀⠘⣿⡇⠀⠀⠀⠀⠀⠈⠉⠻⠷⣦⣤⣬⣿⣿⣿⣿⡿⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣿⠿⠋⣿⣿⠉⣿⠀⠀⠀⣿
⣿⡇⠀⠀⣿⣷⠀⠀⢠⣤⣶⠶⠶⠶⠶⠿⢿⣿⣿⣿⣏⣁⣀⣀⣀⣀⣀⣤⣤⣤⣤⣤⣴⣶⣶⠿⠿⠛⠋⢁⣀⣴⡿⠁⢸⡟⠀⠀⠀⣿
⣿⠇⠀⠀⣿⣿⡇⠀⣿⡏⠀⠀⢠⣤⣤⣤⣀⣀⣀⠉⠉⠉⠉⠉⠉⠉⠉⠉⢉⣭⣭⣥⣴⣷⣶⣷⣾⡿⠿⠛⠙⣿⠀⣰⡿⠁⠀⠀⢠⡿
⣿⡆⠀⠀⢸⣿⣧⠀⠙⠻⢷⣦⣤⣬⣉⣉⠉⠛⠛⠛⠿⠿⠿⠿⠿⠿⠿⠿⠛⠿⢛⣿⣏⣉⢉⣉⣀⣀⣠⣤⣾⣿⡼⠟⠀⠀⠀⢀⣿⢃
⣿⡇⠀⠀⠘⣿⣿⣇⠀⠀⠀⠀⠉⠉⠛⠛⠛⠿⠷⢶⣶⣶⣶⣶⣾⣷⣾⣷⣾⠷⠾⠿⠿⠿⠛⠛⠛⠋⠉⢁⣼⡏⠀⠀⠀⢀⣤⡿⣱⡿
⣻⣧⠀⠀⠀⠘⣿⣿⣷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣶⣾⠿⢻⣿⣤⣤⡴⢛⣵⠾⠏⠲
⣿⢿⣧⠀⠀⠀⠈⠻⣿⡟⢿⣿⣶⣦⣄⣀⣀⡀⠀⠀⠀⣀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣶⣾⣿⠟⠋⠁⠀⠀⢸⣿⠻⣷⡶⠋⠀⠀⠀⠀
⢻⡄⢿⣧⡀⠀⠀⠀⢹⣿⠀⠈⠙⠛⠿⠿⠿⢿⣶⣶⣾⣿⠿⠿⠛⠛⠛⠛⠛⠛⠛⠛⠛⠉⠀⢀⠠⠀⠀⠀⠈⠻⣷⣿⡳⣆⡀⠀⠀⠀
⣿⢷⣬⣿⣿⣦⡀⠀⣾⣿⠀⠀⢐⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⠻⣷⡜⢳⣄⠀⠀
⠹⠉⣿⡏⠙⢿⣿⣿⣿⣏⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⣤⢀⣤⢀⣀⠀⡀⠀⠀⠀⠀⠀⠀⢄⣠⢀⣠⠀⠀⠀⠀⠀⠘⣿⡌⠉⠇⢠
`

export default function EasterEggsClient() {
  useEffect(() => {
    // Console logo — orange so it's visible on both light and dark DevTools
    console.log(
      `%c${ASCII_LOGO}`,
      'color: #f97316; font-family: monospace; font-size: 12px; line-height: 1.4;'
    )
    console.log(
      '%cArt As A Consequence — hello@artasaconsequence.net',
      'color: #78716c; font-family: monospace; font-size: 11px;'
    )
    console.log(
      '%c↑↑↓↓←→←→BA',
      'color: #a3a3a3; font-family: monospace; font-size: 10px; letter-spacing: 0.1em;'
    )

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
      if (document.getElementById('degen-overlay')) return

      const isActive = document.documentElement.classList.contains('degen-mode')
      const meme = MEMES[Math.floor(Math.random() * MEMES.length)]

      console.log(
        '%c🏺 you found the code. degen mode awaits.',
        'color: #f97316; font-size: 13px; font-family: monospace;'
      )

      const overlay = document.createElement('div')
      overlay.id = 'degen-overlay'
      overlay.style.cssText = [
        'position:fixed',
        'inset:0',
        'z-index:9999',
        'background:rgba(6,6,6,0.97)',
        'display:flex',
        'align-items:center',
        'justify-content:center',
        'cursor:pointer',
        'font-family:monospace',
      ].join(';')

      overlay.innerHTML = `
        <div style="text-align:center;max-width:560px;padding:2.5rem;user-select:none;">
          <pre style="color:#22c55e;font-size:8px;line-height:1.2;margin:0 0 2rem;letter-spacing:0;">${PEPE}</pre>

          <div style="font-size:0.55rem;letter-spacing:0.35em;color:#525252;text-transform:uppercase;margin-bottom:0.4rem;">
            ${isActive ? 'currently active — click to exit' : 'secret unlocked'}
          </div>
          <div style="font-size:3rem;font-weight:900;letter-spacing:0.12em;text-transform:uppercase;color:#f97316;line-height:1;margin-bottom:1.75rem;">
            ${isActive ? 'EXIT' : 'DEGEN'}<br>MODE
          </div>

          <div style="font-size:0.8rem;color:#737373;letter-spacing:0.04em;margin-bottom:2.25rem;font-style:italic;">
            &ldquo;${meme}&rdquo;
          </div>

          <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
            <div style="font-size:0.6rem;letter-spacing:0.18em;text-transform:uppercase;color:#f97316;border:1px solid #f97316;padding:0.45rem 1.1rem;">
              click — ${isActive ? 'ngmi' : 'wagmi'}
            </div>
            <div style="font-size:0.6rem;letter-spacing:0.18em;text-transform:uppercase;color:#404040;border:1px solid #2a2a2a;padding:0.45rem 1.1rem;">
              esc — exit
            </div>
          </div>
        </div>
      `

      document.body.appendChild(overlay)

      const dismiss = (toggle: boolean) => {
        overlay.remove()
        window.removeEventListener('keydown', escHandler)
        if (!toggle) return

        const willBeActive = !document.documentElement.classList.contains('degen-mode')
        document.documentElement.classList.toggle('degen-mode')

        // GM badge
        const existing = document.getElementById('gm-badge')
        if (willBeActive && !existing) {
          const badge = document.createElement('div')
          badge.id = 'gm-badge'
          badge.textContent = 'GM'
          badge.style.cssText = [
            'position:fixed',
            'bottom:1.25rem',
            'right:1.5rem',
            'font-family:monospace',
            'font-size:0.6rem',
            'letter-spacing:0.22em',
            'color:#f97316',
            'z-index:9998',
            'cursor:pointer',
            'text-transform:uppercase',
          ].join(';')
          badge.title = 'exit degen mode'
          badge.addEventListener('click', () => {
            document.documentElement.classList.remove('degen-mode')
            badge.remove()
          })
          document.body.appendChild(badge)
        } else if (!willBeActive && existing) {
          existing.remove()
        }
      }

      const escHandler = (e: KeyboardEvent) => {
        if (e.key === 'Escape') dismiss(false)
      }

      overlay.addEventListener('click', () => dismiss(true))
      window.addEventListener('keydown', escHandler)
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return null
}
