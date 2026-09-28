'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type TimelineProps = {
  children: ReactNode
  rotation?: number
  initialLeft?: number
  minWidth?: number
  containerClassName?: string
  handleClassName?: string
  handleIndicatorClassName?: string
}

export function Timeline({
  children,
  rotation = 0,
  initialLeft = 50,
  minWidth = 40,
  containerClassName,
  handleClassName,
  handleIndicatorClassName,
}: TimelineProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [width, setWidth] = useState(0)
  const draggingRef = useRef(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const measure = () => {
      const w = el.getBoundingClientRect().width
      setContainerWidth(w)
      setWidth((prev) => (prev === 0 ? Math.max(minWidth, (initialLeft / 100) * w) : prev))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      if (!draggingRef.current || !wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const next = e.clientX - rect.left
      setWidth(Math.min(rect.width, Math.max(minWidth, next)))
    }
    function onPointerUp() {
      draggingRef.current = false
    }
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
    }
  }, [minWidth])

  return (
    <div
      ref={wrapperRef}
      className={cn('relative inline-block', containerClassName)}
      style={{ touchAction: 'none' }}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[6%] origin-left"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div
          className={cn('h-[3px] rounded-full', handleIndicatorClassName ?? 'bg-current')}
          style={{ width: containerWidth ? `${width}px` : `${initialLeft}%` }}
        />
      </div>
      <button
        type="button"
        aria-label="Drag to adjust underline"
        onPointerDown={(e) => {
          e.preventDefault()
          draggingRef.current = true
        }}
        className={cn(
          'absolute bottom-[6%] z-10 flex size-6 -translate-y-1/2 translate-x-[-50%] cursor-grab items-center justify-center rounded-full border-2 shadow-sm active:cursor-grabbing',
          handleClassName,
        )}
        style={{
          left: containerWidth ? `${width}px` : `${initialLeft}%`,
          transform: `translate(-50%, 50%) rotate(${rotation}deg)`,
        }}
      >
        <span className={cn('size-2 rounded-full', handleIndicatorClassName ?? 'bg-current')} />
      </button>
    </div>
  )
}

export function TimelineText({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <span className={cn('inline-block', className)}>{children}</span>
}
