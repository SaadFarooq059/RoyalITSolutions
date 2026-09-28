import Link from 'next/link'
import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/lib/utils'

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'dark' | 'ghost'
  size?: 'default' | 'lg'
  className?: string
  children: React.ReactNode
  href?: string
}

const variantClasses: Record<NonNullable<BaseProps['variant']>, string> = {
  primary:
    'bg-brand text-white hover:bg-[#0056c4] shadow-[0_8px_24px_-8px_rgba(0,102,230,0.55)]',
  secondary:
    'bg-white text-navy border border-slate/25 hover:border-brand/40 hover:bg-surface',
  dark: 'bg-white/10 text-white border border-white/20 hover:bg-white/15 backdrop-blur-sm',
  ghost: 'text-navy hover:text-brand',
}

const sizeClasses: Record<NonNullable<BaseProps['size']>, string> = {
  default: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
}

export function SiteButton({
  variant = 'primary',
  size = 'default',
  className,
  children,
  href,
  ...props
}: BaseProps & Omit<ComponentPropsWithoutRef<ElementType>, 'className' | 'children' | 'href'>) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:translate-y-px whitespace-nowrap',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
