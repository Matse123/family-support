import { getAllNews, formatDate } from '@/lib/news'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Aktuelles – LV PA Thüringen',
  description: 'Neuigkeiten und Mitteilungen des Landesverbandes der Pflege- und Adoptivfamilien Thüringen e.V.',
}

export default function AktuellesPage() {
  const entries = getAllNews()

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Header />
      <div className="h-20" />

      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="mb-16">
          <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            Neuigkeiten
          </p>
          <h1 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontWeight: 400 }}
            className="text-4xl md:text-5xl mb-6">
            Aktuelles
          </h1>
          <div className="w-12 h-px" style={{ backgroundColor: 'var(--color-brand)' }} />
        </div>

        <div>
          {entries.map((entry) => (
            <article
              key={entry.slug}
              className="py-10 border-b"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <time
                dateTime={entry.date}
                className="text-xs tracking-[0.15em] uppercase block mb-3"
                style={{ color: 'var(--color-subtle)' }}
              >
                {formatDate(entry.date)}
              </time>
              <h2
                className="text-xl md:text-2xl mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontWeight: 400 }}
              >
                {entry.title}
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-muted)' }}>
                {entry.excerpt}
              </p>
              <Link
                href={`/aktuelles/${entry.slug}`}
                className="text-xs tracking-[0.15em] uppercase transition-colors hover:opacity-70"
                style={{ color: 'var(--color-brand)' }}
              >
                Weiterlesen →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
