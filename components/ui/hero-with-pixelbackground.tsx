'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import PixelBackground from '@/components/ui/hero-with-pixelbackground-utils/pixel-background'

export default function HeroSectionWithPixelBackground() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      >
        <PixelBackground
          gap={6}
          speed={60}
          colors="#d4d4d4,#e5e5e5,#c4c4c4,#bababa"
          opacity={0.7}
          direction="top"
          className="h-full w-full"
        />
      </div>

      <div className="relative flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-2"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Est. 2015
            </span>
            <span className="h-px w-8 bg-zinc-300" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Royal IT Solution
            </span>
          </motion.div>

          <div className="flex flex-col items-center gap-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center text-4xl font-black leading-none tracking-tight text-zinc-900 md:text-7xl lg:text-9xl"
            >
              We Engineer
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="text-center text-4xl font-black leading-none tracking-tight text-zinc-900 md:text-7xl lg:text-9xl"
            >
              The Future
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="text-center text-4xl font-black leading-none tracking-tight text-brand md:text-7xl lg:text-9xl"
            >
              Of Your Business
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="mt-12 max-w-md text-center text-sm leading-relaxed text-zinc-500"
          >
            Crafting reliable software and technology solutions that live at the intersection
            of performance, precision and business impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
            className="mt-10 flex items-center gap-4"
          >
            <Link
              href="/contact"
              className="border-2 border-brand bg-brand px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-brand-light hover:bg-brand-light"
            >
              Start a Project
            </Link>
            <Link
              href="/services"
              className="border-2 border-zinc-300 px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-600 transition-colors duration-300 hover:border-zinc-500 hover:text-zinc-900"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-zinc-300/60 to-transparent" />
    </div>
  )
}
