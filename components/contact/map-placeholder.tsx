import { MapPin } from 'lucide-react'
import { TechBackground } from '@/components/site/tech-background'

/**
 * Placeholder map panel. Swap the contents of this component for a Google
 * Maps embed / react-leaflet map once an API key or tile provider is wired
 * up — the surrounding layout will not need to change.
 */
export function MapPlaceholder() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-border bg-surface sm:h-96">
      <TechBackground />
      <div className="relative flex h-full flex-col items-center justify-center gap-3">
        <span className="flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_30px_-8px_rgba(0,102,230,0.6)]">
          <MapPin className="size-6" />
        </span>
        <div className="text-center">
          <p className="text-sm font-semibold text-navy">G-11/1 Islamabad, Pakistan</p>
          <p className="text-xs text-slate">Map view coming soon</p>
        </div>
      </div>
    </div>
  )
}
