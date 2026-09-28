'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

type Direction = 'top' | 'bottom' | 'left' | 'right'

type PixelBackgroundProps = {
  gap?: number
  speed?: number
  colors?: string
  opacity?: number
  direction?: Direction
  className?: string
}

export default function PixelBackground({
  gap = 6,
  speed = 60,
  colors = '#d4d4d4,#e5e5e5,#c4c4c4,#bababa',
  opacity = 0.7,
  direction = 'top',
  className,
}: PixelBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const palette = colors
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean)

    const reducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let cols = 0
    let rows = 0
    let dpr = 1
    let rafId = 0
    let start = performance.now()

    function resize() {
      const rect = canvas!.parentElement?.getBoundingClientRect()
      width = rect?.width ?? canvas!.clientWidth
      height = rect?.height ?? canvas!.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = Math.max(1, Math.floor(width * dpr))
      canvas!.height = Math.max(1, Math.floor(height * dpr))
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      const cell = gap * 2
      cols = Math.max(1, Math.ceil(width / cell))
      rows = Math.max(1, Math.ceil(height / cell))
    }

    function draw(time: number) {
      const cell = gap * 2
      const elapsed = (time - start) / 1000
      const velocity = speed / 40

      ctx!.clearRect(0, 0, width, height)

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * cell
          const y = row * cell

          let travel = 0
          if (direction === 'top') travel = row / rows
          else if (direction === 'bottom') travel = 1 - row / rows
          else if (direction === 'left') travel = col / cols
          else travel = 1 - col / cols

          const phase = travel * Math.PI * 2 + (row * 0.35 + col * 0.27)
          const wave = reducedMotion ? 0 : Math.sin(phase + elapsed * velocity)
          const alpha = Math.max(0, (wave + 1) / 2) * opacity

          if (alpha < 0.03) continue

          const colorIndex = (row * 7 + col * 3) % palette.length
          ctx!.globalAlpha = alpha
          ctx!.fillStyle = palette[colorIndex]
          ctx!.fillRect(x, y, gap, gap)
        }
      }

      ctx!.globalAlpha = 1
      if (!reducedMotion) {
        rafId = requestAnimationFrame(draw)
      }
    }

    resize()
    draw(start)

    const handleResize = () => {
      resize()
    }
    window.addEventListener('resize', handleResize)

    if (!reducedMotion) {
      rafId = requestAnimationFrame(draw)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [gap, speed, colors, opacity, direction])

  return (
    <div className={cn('relative', className)}>
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  )
}
