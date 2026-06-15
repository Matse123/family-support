import { getAllNews, getNewsBySlug, formatDate } from '@/lib/news'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllNews().map(e => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = getNewsBySlug(slug)
  if (!entry) return {}
  return {
    title: `${entry.title} – LV PA Thüringen`,
    description: entry.excerpt,
  }
}

function renderContent(content: string) {
  const blocks = content.trim().split(/\n\n+/)

  return blocks.map((block, i) => {
    // Listenblock
    if (block.split('\n').some(l => l.startsWith('- '))) {
      const items = block.split('\n').filter(l => l.startsWith('- '))
      return (
        <ul key={i} className="space-y-2 pl-0 my-1">
          {items.map((item, j) => (
            <li key={j} className="text-sm leading-relaxed flex gap-3" style={{ color: 'var(--color-muted)' }}>
              <span style={{ color: 'var(--color-brand)' }}>—</span>
              <span>{item.replace(/^- /, '')}</span>
            </li>
          ))}
        </ul>
      )
    }

    // Überschrift **Text**
    if (block.startsWith('**') && block.endsWith('**') && !block.slice(2, -2).includes('**')) {
      return (
        <p key={i} className="text-sm font-semibold mt-6 mb-1" style={{ color: 'var(--color-text)' }}>
          {block.slice(2, -2)}
        </p>
      )
    }

    // Normaler Absatz mit inline **fett**
    const parts = block.split(/\*\*(.*?)\*\*/g)
    return (
      <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
        {parts.map((part, j) =>
          j % 2 === 1
            ? <strong key={j} style={{ color: 'var(--color-text)', fontWeight: 600 }}>{part}</strong>
            : part
        )}
      </p>
    )
  })
}

export default async function AktuellesArticlePage({ params }: Props) {
  const { slug } = await params
  const entry = getNewsBySlug(slug)
  if (!entry) notFound()

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Header />
      <div className="h-20" />

      <article className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/aktuelles"
          className="text-xs tracking-[0.15em] uppercase transition-colors hover:opacity-70 mb-12 inline-block"
          style={{ color: 'var(--color-brand)' }}
        >
          ← Alle Mitteilungen
        </Link>

        <time
          dateTime={entry.date}
          className="text-xs tracking-[0.15em] uppercase block mt-8 mb-4"
          style={{ color: 'var(--color-subtle)' }}
        >
          {formatDate(entry.date)}
        </time>

        <h1
          className="text-3xl md:text-4xl mb-8 leading-tight"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)', fontWeight: 400 }}
        >
          {entry.title}
        </h1>

        <div className="w-8 h-px mb-10" style={{ backgroundColor: 'var(--color-brand)' }} />

        <div className="space-y-5">
          {renderContent(entry.content)}
        </div>
      </article>
      <Footer />
    </div>
  )
}
