import { cn } from '@/lib/utils'

/**
 * Very subtle circuit-board / digital-grid texture used behind hero and
 * section content. Purely decorative, so it is hidden from assistive tech.
 */
export function TechBackground({
  variant = 'light',
  className,
}: {
  variant?: 'light' | 'dark'
  className?: string
}) {
  const line = variant === 'dark' ? 'rgba(0,155,255,0.35)' : 'rgba(0,102,230,0.14)'
  const dot = variant === 'dark' ? 'rgba(0,155,255,0.55)' : 'rgba(0,102,230,0.3)'
  const grid = variant === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(7,17,31,0.04)'

  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke={grid} strokeWidth="1" />
          </pattern>
          <pattern id="circuit-pattern" width="180" height="180" patternUnits="userSpaceOnUse">
            <path
              d="M20 20 H90 V70 H160 M90 20 V0 M90 70 V140 H20 M160 70 V180 M160 70 H180"
              fill="none"
              stroke={line}
              strokeWidth="1.5"
            />
            <circle cx="20" cy="20" r="2.5" fill={dot} />
            <circle cx="90" cy="70" r="2.5" fill={dot} />
            <circle cx="160" cy="70" r="2.5" fill={dot} />
            <circle cx="20" cy="140" r="2.5" fill={dot} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  )
}
