import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * Compact "R" mark, pre-cropped from the full logo artwork and exported at
 * 160px (4x the 40px display size) — used where space is tight, like the navbar.
 */
function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn('block shrink-0 overflow-hidden rounded-[10px] bg-white p-0.5', className)}>
      <Image
        src="/images/logo-mark.webp"
        alt="Royal IT Solution mark"
        width={160}
        height={160}
        priority
        className="size-full object-contain"
      />
    </span>
  )
}

export function Logo({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Royal IT Solution home">
      <LogoMark className="size-10 ring-1 ring-black/5" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-[15px] font-extrabold tracking-wide',
            isDark ? 'text-white' : 'text-navy',
          )}
        >
          ROYAL
        </span>
        <span
          className={cn(
            'text-[10px] font-semibold tracking-[0.18em]',
            isDark ? 'text-white/60' : 'text-slate',
          )}
        >
          IT SOLUTION
        </span>
      </span>
    </Link>
  )
}

/** Full logo artwork (mark + wordmark) for larger, uncrowded placements like the footer brand panel. */
export function LogoFull({ className }: { className?: string }) {
  return (
    <span className={cn('inline-flex items-center justify-center rounded-2xl bg-white p-3', className)}>
      <Image
        src="/images/logo-full.webp"
        alt="Royal IT Solution"
        width={288}
        height={288}
        className="h-20 w-20 object-contain sm:h-24 sm:w-24"
      />
    </span>
  )
}
