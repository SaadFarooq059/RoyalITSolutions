import { cn } from '@/lib/utils'
import { EyebrowBadge } from '@/components/site/eyebrow-badge'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  variant = 'light',
  className,
}: {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  align?: 'center' | 'left'
  variant?: 'light' | 'dark'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? <EyebrowBadge variant={variant}>{eyebrow}</EyebrowBadge> : null}
      <h2
        className={cn(
          'text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[42px] leading-[1.15]',
          variant === 'dark' ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed sm:text-lg',
            variant === 'dark' ? 'text-white/65' : 'text-slate',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
