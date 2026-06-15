import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
export { formatDate } from './format'

export interface NewsEntry {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

const contentDir = path.join(process.cwd(), 'content', 'aktuelles')

export function getAllNews(): NewsEntry[] {
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'))

  const entries = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const filePath = path.join(contentDir, filename)
    const raw = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(raw)

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      content,
    }
  })

  return entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getNewsBySlug(slug: string): NewsEntry | undefined {
  return getAllNews().find(e => e.slug === slug)
}

