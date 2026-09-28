'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/site/logo'
import { navLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen((v) => !v)
  const closeMenu = () => setIsOpen(false)

  return (
    <div className="sticky top-0 z-50 flex w-full justify-center px-4 pt-4 sm:pt-6">
      <div className="relative flex w-full max-w-4xl items-center justify-between rounded-full border border-black/5 bg-white/90 px-4 py-2.5 shadow-lg shadow-navy/5 backdrop-blur-md sm:px-6">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item, i) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors hover:text-brand',
                    isActive ? 'text-brand' : 'text-navy/80',
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-dot"
                      className="absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-brand"
                    />
                  )}
                </Link>
              </motion.div>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand"
          >
            Get a Quote
            <ArrowRight className="size-3.5" />
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="flex items-center justify-center rounded-full p-2 text-navy md:hidden"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Open menu"
          aria-expanded={isOpen}
        >
          <Menu className="size-6" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-white px-6 pt-8 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <motion.button
                className="rounded-full p-2 text-navy"
                onClick={toggleMenu}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X className="size-6" />
              </motion.button>
            </div>

            <nav className="mt-12 flex flex-col gap-6">
              {navLinks.map((item, i) => {
                const isActive = pathname === item.href
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.08 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        'text-2xl font-semibold',
                        isActive ? 'text-brand' : 'text-navy',
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.45 }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-navy px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand"
                >
                  Get a Quote
                  <ArrowRight className="size-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
