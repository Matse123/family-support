import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { FosterFamily } from '@/components/FosterFamily'
import { FAQ } from '@/components/FAQ'
import { Aktuelles } from '@/components/Aktuelles'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { getAllNews } from '@/lib/news'

export default function HomePage() {
  const latestNews = getAllNews().slice(0, 4)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <FosterFamily />
        <Aktuelles entries={latestNews} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
