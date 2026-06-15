'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Wer sind wir', href: '#ueber-uns' },
  { label: 'Was bieten wir', href: '#leistungen' },
  { label: 'Pflegefamilie werden', href: '#pflegefamilie' },
  { label: 'Aktuelles', href: '/aktuelles' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#FAFAF8]/95 backdrop-blur-sm border-b border-[#E8E4DE]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-heading text-xl text-[#1A1915] tracking-wide">
          LV PA Thüringen
        </a>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#6E6B63] hover:text-[#1A1915] transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center text-sm text-[#4A7260] border-b border-[#4A7260] pb-px hover:text-[#2D4A3E] hover:border-[#2D4A3E] transition-colors tracking-wide"
        >
          Kontakt aufnehmen
        </a>

        {/* Mobile */}
        <button
          className="md:hidden text-[#1A1915]"
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FAFAF8] border-t border-[#E8E4DE] overflow-hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-5">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base text-[#6E6B63] hover:text-[#1A1915] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#4A7260] border-b border-[#4A7260] pb-px w-fit"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
