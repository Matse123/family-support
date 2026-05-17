import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '1994', label: 'Gegründet in Gera' },
  { value: '30+', label: 'Jahre Erfahrung' },
  { value: 'Thüringen', label: 'Freistaat' },
  { value: 'e.V.', label: 'Gemeinnützig anerkannt' },
]

export function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-20 border-y border-[#E8E4DE] bg-[#F5F2ED]" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <p className="font-heading text-4xl md:text-5xl text-[#1A1915] mb-1">{s.value}</p>
              <p className="text-xs tracking-widest uppercase text-[#A8A49C]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
