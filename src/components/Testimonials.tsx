import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Familie Bauer',
    role: 'Pflegeeltern seit 2019',
    avatar: 'https://i.pravatar.cc/80?img=5',
    text: 'Die Familienhilfe hat uns von Anfang an begleitet und uns das nötige Vertrauen gegeben. Ohne ihre Unterstützung hätten wir diesen Schritt nie gewagt.',
  },
  {
    name: 'Sabine M.',
    role: 'Alleinerziehende Mutter',
    avatar: 'https://i.pravatar.cc/80?img=9',
    text: 'In einer sehr schwierigen Phase meines Lebens war die Beratung mein Anker. Kompetent, einfühlsam und immer da — ich bin unendlich dankbar.',
  },
  {
    name: 'Familie Krüger',
    role: 'Pflegeeltern seit 2021',
    avatar: 'https://i.pravatar.cc/80?img=12',
    text: 'Die Schulungen haben uns wirklich auf alles vorbereitet. Das Team ist professionell und man spürt, dass sie die Arbeit wirklich mit Herzblut machen.',
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ueber-uns" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-[#4BA661] uppercase mb-3">Erfahrungsberichte</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B4332]">Was Familien sagen</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="bg-[#F9F7F2] rounded-2xl p-6 relative"
            >
              <Quote size={32} className="text-[#88D498] mb-4" fill="#88D498" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-heading font-bold text-[#1B4332] text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-[#4BA661] text-sm">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
