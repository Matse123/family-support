import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '1994', label: 'Gegründet in Gera' },
  { value: '30+', label: 'Jahre Erfahrung' },
  { value: 'ganz TH', label: 'Freistaat Thüringen' },
  { value: 'e.V.', label: 'Gemeinnützig anerkannt' },
]

export function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-16 bg-[#1B4332]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-4xl md:text-5xl font-bold text-[#88D498] mb-2">{s.value}</p>
              <p className="text-white/70 text-sm font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
