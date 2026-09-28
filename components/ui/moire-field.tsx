"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface MoireFieldProps extends React.ComponentProps<"div"> {
  /** Period of one ruling in CSS pixels. The whole geometry scales with it, so this is the size knob. */
  pitch?: number
  /** Fraction of each period that is ink, 0–1. Thin ink and wide gaps read as engraving. */
  duty?: number
  /** How much wider the moving ruling's period is, in percent. This alone produces fringes at zero offset. */
  detune?: number
  /** Opacity of the whole field, 0–1. Fringe contrast scales with it linearly — see the note on ink below. */
  intensity?: number
  /** Draw the rulings in the theme's primary color instead of the foreground. */
  accent?: boolean
  /** Explicit ink color (any CSS color). Overrides `accent`; leave unset to follow the theme. */
  color?: string
  /** Let the pointer pull the moving source. When false the field only drifts. */
  interactive?: boolean
  /** How far the pointer can pull the source, as a fraction of the box. Capped so fringes stay in frame. */
  reach?: number
  /** Easing toward the target per 60Hz frame, 0–1. Lower feels heavier. */
  follow?: number
  /** Amplitude of the idle drift, 0–1. `0` parks the source and lets the loop stop entirely. */
  drift?: number
  /** Horizontal position of the anchored ruling, 0–1 of the box. */
  originX?: number
  /** Vertical position of the anchored ruling, 0–1 of the box. */
  originY?: number
  /** Radial edge mask, 0–1, so the field dissolves into the page instead of ending at a hard edge. */
  fade?: number
}

/**
 * Resting separation of the two sources, in multiples of `pitch`. Separation ÷ period *is* the fringe
 * count, so tying it to the pitch keeps the same number of fringes on a phone and on a 27-inch display;
 * a separation expressed as a fraction of the box collapses into plain concentric rings when the section
 * is narrow.
 */
const REST_X = 5.9
const REST_Y = -3.8
/** Idle drift amplitude, also in multiples of `pitch`, at `drift: 1`. */
const DRIFT_AMP = 5.5
/** Extra detune (percent) at the peak of a tap impulse, and how long that impulse takes to settle. */
const SWELL = 4.5
const SWELL_MS = 620
/** Drift periods. Deliberately coprime so the path never visibly repeats. */
const DRIFT_X_MS = 24_000
const DRIFT_Y_MS = 31_000
/** How far the moving layer overhangs the box, and the travel that overhang can absorb. */
const OVERHANG = 0.46
const MAX_TRAVEL = 0.44

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)

/** Layout runs in the browser only; useLayoutEffect avoids one frame at the previous geometry. */
const useIsomorphicLayoutEffect = typeof window === "undefined" ? React.useEffect : React.useLayoutEffect

/**
 * One grating as a CSS gradient. The ink band sits in the middle of each period, so a ring ruling has
 * no solid disc at its centre, and a sub-pixel ramp on both edges keeps fine pitches from aliasing into
 * a shimmer at large radii — the fringes have to come from the interference, not from the rasteriser.
 *
 * The ink is fully opaque on purpose. Two *translucent* gratings stacked make their absorbances add, and
 * a sum barely changes when the lines coincide: at 18% duty and 0.3 alpha per layer the whole fringe
 * field is a 1.6% luminance modulation, which is invisible. Opaque ink makes the layers behave like real
 * overlaid rulings — coincident lines cover 18% of the field, interleaved lines cover 36% — and the
 * field is dimmed once, on the parent, so contrast between the fringes stays linear in `intensity`.
 */
function grating(pitch: number, duty: number, cx: number, cy: number) {
  const p = Math.max(2, pitch)
  const ink = clamp(p * clamp(duty, 0.02, 0.9), 0.5, p - 0.5)
  const aa = Math.min(0.6, ink / 3)
  const a = (p - ink) / 2
  const b = a + ink
  const stops =
    `transparent 0px, transparent ${Math.max(0, a - aa).toFixed(2)}px, ` +
    `currentColor ${(a + aa).toFixed(2)}px, currentColor ${(b - aa).toFixed(2)}px, ` +
    `transparent ${(b + aa).toFixed(2)}px, transparent ${p.toFixed(2)}px`
  return `repeating-radial-gradient(circle at ${(cx * 100).toFixed(2)}% ${(cy * 100).toFixed(2)}%, ${stops})`
}

/**
 * Two identical rulings of concentric rings, one anchored to the section and one pulled around by the
 * pointer. Their interference draws moiré fringes across the whole field, so a few pixels of pointer
 * travel reorganise everything, and bringing the two sources together widens the fringes into flatness.
 *
 * Use it as a hero or footer background: the section's content goes in as children and renders above the
 * field in normal flow. The field is decorative — hidden from assistive tech, transparent to clicks — and
 * costs one composited transform per frame, with no canvas, no shader and no dependency.
 */
export function MoireField({
  pitch = 18,
  duty = 0.18,
  detune = 3.6,
  intensity = 0.42,
  accent = false,
  color,
  interactive = true,
  reach = 0.3,
  follow = 0.12,
  drift = 0.55,
  originX = 0.5,
  originY = 0.46,
  fade = 0.45,
  className,
  style,
  ref,
  children,
  onPointerMove,
  onPointerDown,
  onPointerLeave,
  ...rest
}: MoireFieldProps) {
  const rootRef = React.useRef<HTMLDivElement | null>(null)
  const moverRef = React.useRef<HTMLDivElement | null>(null)
  const wakeRef = React.useRef<(() => void) | null>(null)
  const reduceRef = React.useRef(false)
  const boxRef = React.useRef({ w: 0, h: 0 })

  const restX = pitch * REST_X
  const restY = pitch * REST_Y
  const frame = React.useRef({ x: restX, y: restY, tx: restX, ty: restY, impulse: 0, tapAt: 0, tracking: false })

  const paint = React.useCallback(
    (x: number, y: number, extraDetune: number) =>
      `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) scale(${(1 + (detune + extraDetune) / 100).toFixed(5)})`,
    [detune]
  )

  // Everything the loop reads lives in a ref, so turning a knob changes the next frame instead of
  // tearing down the observers and restarting the animation.
  const live = React.useRef({ paint, follow, drift, reach, pitch, restX, restY })
  live.current = { paint, follow, drift, reach: clamp(reach, 0, MAX_TRAVEL), pitch, restX, restY }

  // The resting frame is also the server-rendered frame, so hydration has nothing to correct and
  // `prefers-reduced-motion` needs no JavaScript at all.
  const restTransform = paint(restX, restY, 0)

  // Only a change of *rest* geometry moves the source. `detune` must not, or dragging that knob would
  // yank a drifting field back to its resting separation on every input event.
  useIsomorphicLayoutEffect(() => {
    const f = frame.current
    if (f.tracking) return
    f.x = f.tx = restX
    f.y = f.ty = restY
  }, [restX, restY])

  // Whatever the knobs did, show it now: the loop may be parked and never come back on its own.
  useIsomorphicLayoutEffect(() => {
    const f = frame.current
    if (moverRef.current) moverRef.current.style.transform = paint(f.x, f.y, f.impulse * SWELL)
  }, [paint, restX, restY])

  React.useEffect(() => {
    const root = rootRef.current
    const mover = moverRef.current
    if (!root || !mover) return

    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    reduceRef.current = reduceQuery.matches
    let raf = 0
    let last = 0
    let onScreen = true

    const stop = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
      mover.style.willChange = ""
    }

    const tick = (now: number) => {
      raf = 0
      const f = frame.current
      const o = live.current
      const dt = last ? clamp(now - last, 0, 64) : 16.7
      last = now

      if (!f.tracking) {
        // Ambient drift: a slow Lissajous around the resting separation, low enough in amplitude to read
        // as "alive" rather than as motion competing with the content on top.
        const a = o.drift * DRIFT_AMP * o.pitch
        f.tx = o.restX + a * Math.sin((now / DRIFT_X_MS) * Math.PI * 2)
        f.ty = o.restY + a * 0.7 * Math.sin((now / DRIFT_Y_MS) * Math.PI * 2)
      }

      // The overhang can only absorb so much travel. Clamping here rather than in the ResizeObserver is
      // what actually holds: the drift above rewrites the target every frame, so a clamp applied once
      // outside the loop is undone immediately and the moving layer's edge slides into a narrow box.
      const b = boxRef.current
      if (b.w && b.h) {
        const lx = b.w * MAX_TRAVEL
        const ly = b.h * MAX_TRAVEL
        f.tx = clamp(f.tx, -lx, lx)
        f.ty = clamp(f.ty, -ly, ly)
      }

      if (f.tapAt) {
        const u = clamp((now - f.tapAt) / SWELL_MS, 0, 1)
        f.impulse = (1 - u) ** 3
        if (u >= 1) {
          f.tapAt = 0
          f.impulse = 0
        }
      }

      // Frame-rate independent easing: `follow` is the fraction of the gap closed in one 60Hz frame.
      const k = clamp(1 - (1 - clamp(o.follow + f.impulse * 0.35, 0.01, 0.9)) ** (dt / 16.7), 0, 1)
      f.x += (f.tx - f.x) * k
      f.y += (f.ty - f.y) * k
      mover.style.transform = o.paint(f.x, f.y, f.impulse * SWELL)

      const settled = Math.abs(f.tx - f.x) < 0.05 && Math.abs(f.ty - f.y) < 0.05
      // Nothing left to draw: park until the pointer, the viewport or a knob wakes us again.
      if (settled && !f.impulse && o.drift === 0 && !f.tracking) {
        mover.style.willChange = ""
        return
      }
      raf = requestAnimationFrame(tick)
    }

    const wake = () => {
      if (raf || reduceRef.current || !onScreen || document.hidden) return
      last = 0
      mover.style.willChange = "transform"
      raf = requestAnimationFrame(tick)
    }
    wakeRef.current = wake

    const ro = new ResizeObserver(([entry]) => {
      const size = entry?.contentRect
      if (!size?.width || !size.height) return
      boxRef.current = { w: size.width, h: size.height }
      const f = frame.current
      const lx = size.width * MAX_TRAVEL
      const ly = size.height * MAX_TRAVEL
      f.x = clamp(f.x, -lx, lx)
      f.y = clamp(f.y, -ly, ly)
      mover.style.transform = live.current.paint(f.x, f.y, f.impulse * SWELL)
      wake()
    })
    ro.observe(root)

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry?.isIntersecting ?? true
        if (onScreen) wake()
        else stop()
      },
      { rootMargin: "96px" }
    )
    io.observe(root)

    const onVisibility = () => (document.hidden ? stop() : wake())
    const onReduceChange = () => {
      reduceRef.current = reduceQuery.matches
      if (!reduceQuery.matches) return wake()
      stop()
      const f = frame.current
      const o = live.current
      f.x = f.tx = o.restX
      f.y = f.ty = o.restY
      f.impulse = 0
      f.tapAt = 0
      f.tracking = false
      mover.style.transform = o.paint(o.restX, o.restY, 0)
    }

    document.addEventListener("visibilitychange", onVisibility)
    reduceQuery.addEventListener("change", onReduceChange)
    wake()

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener("visibilitychange", onVisibility)
      reduceQuery.removeEventListener("change", onReduceChange)
      wakeRef.current = null
    }
  }, [])

  // Turning the drift back up has to restart a loop that parked itself at `drift: 0`.
  React.useEffect(() => {
    if (drift > 0) wakeRef.current?.()
  }, [drift])

  /** Pointer position as an offset from the anchor in CSS pixels, clamped to `reach`. */
  const aim = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    if (!rect.width || !rect.height) return
    const f = frame.current
    const r = live.current.reach
    f.tx = clamp(event.clientX - rect.left - originX * rect.width, -rect.width * r, rect.width * r)
    f.ty = clamp(event.clientY - rect.top - originY * rect.height, -rect.height * r, rect.height * r)
    f.tracking = true
    wakeRef.current?.()
  }

  // Read at event time, not render time: the media query can flip without a re-render. Under reduced
  // motion the field is a still image, so pointer input is ignored outright rather than recorded — the
  // source cannot jump to a remembered position when the preference is turned back off.
  const armed = () => interactive && !reduceRef.current
  const mask = `radial-gradient(ellipse at ${(originX * 100).toFixed(1)}% ${(originY * 100).toFixed(1)}%, black ${((1 - fade) * 100).toFixed(1)}%, transparent 100%)`

  return (
    <div
      ref={(node) => {
        rootRef.current = node
        if (typeof ref === "function") ref(node)
        else if (ref) ref.current = node
      }}
      data-slot="moire-field"
      className={cn("relative overflow-hidden", className)}
      style={style}
      onPointerMove={(event) => {
        // Touch drags belong to the scroller; a touch tap still aims, through onPointerDown.
        if (armed() && event.pointerType !== "touch") aim(event)
        onPointerMove?.(event)
      }}
      onPointerDown={(event) => {
        if (armed()) {
          aim(event)
          frame.current.tapAt = performance.now()
          wakeRef.current?.()
        }
        onPointerDown?.(event)
      }}
      onPointerLeave={(event) => {
        if (armed()) {
          frame.current.tracking = false
          wakeRef.current?.()
        }
        onPointerLeave?.(event)
      }}
      {...rest}
    >
      <div
        aria-hidden="true"
        data-slot="moire-rulings"
        className={cn("pointer-events-none absolute inset-0", accent ? "text-primary" : "text-foreground")}
        style={{ color, opacity: intensity, maskImage: mask, WebkitMaskImage: mask }}
      >
        <div className="absolute inset-0" style={{ backgroundImage: grating(pitch, duty, originX, originY) }} />
        <div
          ref={moverRef}
          className="absolute"
          style={{
            inset: `${(-OVERHANG * 100).toFixed(0)}%`,
            backgroundImage: grating(pitch, duty, 0.5, 0.5),
            transform: restTransform,
          }}
        />
      </div>
      {children}
    </div>
  )
}

export default MoireField
