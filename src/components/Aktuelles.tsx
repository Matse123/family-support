'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { formatDate } from '@/lib/format'
import type { NewsEntry } from '@/lib/news'

interface Props {
  entries: NewsEntry[]
}

export function Aktuelles({ entries }: Props) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="aktuelles" className="py-32" style={{ backgroundColor: 'var(--color-bg-warm)' }} ref={ref}>
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid md:grid-cols-12 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase mt-2" style={{ color: 'var(--color-subtle)' }}>
              Neuigkeiten
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-9 flex items-end justify-between gap-8"
          >
            <h2
              className="text-5xl md:text-6xl leading-tight"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontWeight: 400 }}
            >
              Aktuelles
            </h2>
            <Link
              href="/aktuelles"
              className="hidden md:inline-flex text-xs tracking-[0.15em] uppercase shrink-0 pb-px border-b transition-colors hover:opacity-70"
              style={{ color: 'var(--color-brand)', borderColor: 'var(--color-brand)' }}
            >
              Alle Mitteilungen →
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-3" />
          <div className="md:col-span-9">
            {entries.map((entry, index) => (
              <motion.article
                key={entry.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                className="py-8 border-b"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1 min-w-0">
                    <time
                      dateTime={entry.date}
                      className="text-xs tracking-[0.15em] uppercase block mb-2"
                      style={{ color: 'var(--color-subtle)' }}
                    >
                      {formatDate(entry.date)}
                    </time>
                    <h3
                      className="text-lg mb-2 leading-snug"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontWeight: 400 }}
                    >
                      {entry.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                      {entry.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/aktuelles/${entry.slug}`}
                    className="shrink-0 text-xs tracking-[0.1em] uppercase mt-1 transition-colors hover:opacity-70"
                    style={{ color: 'var(--color-brand)' }}
                  >
                    Lesen →
                  </Link>
                </div>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="pt-8 md:hidden"
            >
              <Link
                href="/aktuelles"
                className="text-xs tracking-[0.15em] uppercase pb-px border-b transition-colors hover:opacity-70"
                style={{ color: 'var(--color-brand)', borderColor: 'var(--color-brand)' }}
              >
                Alle Mitteilungen →
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
