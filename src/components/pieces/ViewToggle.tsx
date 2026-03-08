'use client'

interface ViewToggleProps {
  view: 'grid' | 'individual'
  onToggle: () => void
}

export function ViewToggle({ view, onToggle }: ViewToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${view === 'grid' ? 'focus' : 'grid'} view`}
      title={view === 'grid' ? 'Switch to Focus' : 'Switch to Grid'}
      className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest transition-colors"
      style={{ color: 'var(--color-text-secondary)' }}
    >
      {view === 'grid' ? (
        <>
          <GridIcon />
          <span className="hidden sm:inline">Grid</span>
        </>
      ) : (
        <>
          <FocusIcon />
          <span className="hidden sm:inline">Focus</span>
        </>
      )}
    </button>
  )
}

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="1" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="1" y="9" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function FocusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="14" height="14" rx="0.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
