'use client'

import { useState, useRef, useEffect } from 'react'

const PLAYLIST = [
  { title: 'Ceramic Dreams Vol. 1', src: '/audio/track-01.mp3' },
  { title: 'Studio Sessions', src: '/audio/track-02.mp3' },
]

export function MusicPlayer() {
  const [expanded, setExpanded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [trackIndex, setTrackIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const track = PLAYLIST[trackIndex]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted
    }
  }, [muted])

  const handlePlay = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play().catch(() => {
        // Audio file may not exist yet — expected during dev
        setPlaying(false)
      })
      setPlaying(true)
    }
  }

  const handleNext = () => {
    const next = (trackIndex + 1) % PLAYLIST.length
    setTrackIndex(next)
    setPlaying(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.load()
    }
  }

  const handleEnded = () => {
    handleNext()
  }

  return (
    <div
      className="fixed bottom-4 left-4 z-50 font-mono transition-all"
      style={{
        border: `1px solid var(--color-border)`,
        background: 'rgba(255,255,255,0.95)',
        color: 'var(--color-text-primary)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      }}
    >
      <audio
        ref={audioRef}
        src={track.src}
        onEnded={handleEnded}
        preload="none"
      />

      {/* Collapsed state */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="flex items-center gap-2 px-3 py-2 text-xs hover:opacity-70 transition-opacity"
          aria-label="Open music player"
        >
          <span style={{ color: 'var(--color-accent)' }}>♫</span>
          <span style={{ color: 'var(--color-text-muted)' }}>
            {playing ? track.title : 'Music'}
          </span>
        </button>
      )}

      {/* Expanded state */}
      {expanded && (
        <div className="flex flex-col gap-2 p-3 min-w-[200px]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
              Now Playing
            </span>
            <button
              onClick={() => setExpanded(false)}
              className="text-xs hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-text-muted)' }}
              aria-label="Collapse player"
            >
              ×
            </button>
          </div>

          <p className="text-xs truncate max-w-[160px]" style={{ color: 'var(--color-text-secondary)' }}>
            {track.title}
          </p>

          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <button
              onClick={handlePlay}
              className="text-base hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-accent)' }}
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? '⏸' : '▶'}
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className="text-xs hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label="Next track"
            >
              ⏭
            </button>

            {/* Mute */}
            <button
              onClick={() => setMuted((m) => !m)}
              className="text-xs hover:opacity-70 transition-opacity ml-auto"
              style={{ color: 'var(--color-text-muted)' }}
              aria-label={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? '🔇' : '🔊'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
