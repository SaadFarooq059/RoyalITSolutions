import { cn } from '@/lib/utils'

export function EyebrowBadge({
  children,
  variant = 'light',
  className,
}: {
  children: React.ReactNode
  variant?: 'light' | 'dark'
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide uppercase',
        variant === 'dark'
          ? 'border-white/15 bg-white/5 text-brand-light'
          : 'border-brand/20 bg-brand/5 text-brand',
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-brand-light" />
      {children}
    </span>
  )
}
