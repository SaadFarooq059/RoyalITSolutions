'use client'

import { motion } from 'framer-motion'
import { Server, Database, Cloud, CheckCircle2 } from 'lucide-react'

export function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]">
      {/* connective network lines */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="absolute inset-0 h-full w-full text-brand/25"
      >
        <line x1="80" y1="120" x2="220" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="220" y1="80" x2="330" y2="180" stroke="currentColor" strokeWidth="1.5" />
        <line x1="80" y1="120" x2="120" y2="280" stroke="currentColor" strokeWidth="1.5" />
        <line x1="120" y1="280" x2="280" y2="320" stroke="currentColor" strokeWidth="1.5" />
        <line x1="330" y1="180" x2="280" y2="320" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="80" cy="120" r="3" fill="currentColor" />
        <circle cx="220" cy="80" r="3" fill="currentColor" />
        <circle cx="330" cy="180" r="3" fill="currentColor" />
        <circle cx="120" cy="280" r="3" fill="currentColor" />
        <circle cx="280" cy="320" r="3" fill="currentColor" />
      </svg>

      {/* glow */}
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />

      {/* code window - center */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 0.6 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute top-[28%] left-1/2 w-[68%] -translate-x-1/2 rounded-xl border border-border bg-white p-4 shadow-[0_30px_60px_-20px_rgba(7,17,31,0.25)]"
      >
        <div className="mb-3 flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-amber-400" />
          <span className="size-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="h-2 w-3/4 rounded-full bg-brand/25" />
          <div className="h-2 w-1/2 rounded-full bg-navy/10" />
          <div className="h-2 w-5/6 rounded-full bg-brand/15" />
        </div>
      </motion.div>

      {/* server card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 0.15 }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute top-[6%] left-[2%] flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-3 shadow-[0_20px_45px_-18px_rgba(7,17,31,0.25)]"
      >
        <span className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
          <Server className="size-4.5" />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-navy">Server Uptime</span>
          <span className="text-[11px] text-slate">99.9%</span>
        </div>
      </motion.div>

      {/* database card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -12, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 0.3 }, y: { duration: 8, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute top-[62%] right-[0%] flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-3 shadow-[0_20px_45px_-18px_rgba(7,17,31,0.25)]"
      >
        <span className="flex size-9 items-center justify-center rounded-lg bg-brand-light/10 text-brand-light">
          <Database className="size-4.5" />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-navy">Data Sync</span>
          <span className="text-[11px] text-slate">Real-time</span>
        </div>
      </motion.div>

      {/* cloud card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { duration: 0.6, delay: 0.45 }, y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' } }}
        className="absolute bottom-[4%] left-[8%] flex items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-3 shadow-[0_20px_45px_-18px_rgba(7,17,31,0.25)]"
      >
        <span className="flex size-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
          <Cloud className="size-4.5" />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold text-navy">Cloud Infra</span>
          <span className="text-[11px] text-slate">Auto-scaling</span>
        </div>
      </motion.div>

      {/* deploy success chip */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute top-[46%] right-[6%] flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-1.5 text-white shadow-[0_20px_45px_-18px_rgba(7,17,31,0.4)]"
      >
        <CheckCircle2 className="size-3.5 text-emerald-400" />
        <span className="text-[11px] font-semibold">Deploy successful</span>
      </motion.div>
    </div>
  )
}
