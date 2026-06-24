'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Fortbildungen',
    description:
      'Regelmäßige Fortbildungen zu aktuellen wissenschaftlichen Erkenntnissen rund um Pflege- und Adoptivkinder — praxisnah und fundiert. Auf Orts- und Landesebene.',
  },
  {
    num: '02',
    title: 'Krisengespräche',
    description:
      'In schwierigen Situationen stehen wir Ihnen mit erfahrenen Fachkräften zur Seite — einfühlsam, vertraulich und lösungsorientiert.',
  },
  {
    num: '03',
    title: 'Begleitung bei Jugendämtern',
    description:
      'Wir begleiten und unterstützen Pflege- und Adoptivfamilien bei Gesprächen mit Jugendämtern und Behörden — kompetent und an Ihrer Seite.',
  },
  {
    num: '04',
    title: 'Gruppenarbeit & Vernetzung',
    description:
      'Pflege- und Adoptiveltern tauschen sich aus, unterstützen einander und wachsen gemeinsam. Unsere Gruppen bieten Halt und Gemeinschaft.',
  },
  {
    num: '05',
    title: 'Fachtagungen',
    description:
      'Wir organisieren Fachtagungen, bei denen aktuelle Themen aus dem Pflege- und Adoptionswesen mit Expert:innen diskutiert werden.',
  },
  {
    num: '06',
    title: 'Politische Interessensvertretung',
    description:
      'Der Landesverband setzt sich für die Rechte von Pflege- und Adoptivfamilien auf politischer Ebene ein — damit sich etwas ändert.',
  },
]

export function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="leistungen" className="py-32 bg-[#F5F2ED]" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">

        {/* Header */}
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="md:col-span-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#A8A49C] mt-2">Was bieten wir</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="md:col-span-9"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-[#1A1915] leading-tight">
              Alles dreht sich um<br />
              <em className="italic text-[#4A7260]">einen Leitspruch.</em>
              - Kindern eine Zukunft geben
            </h2>
          </motion.div>
        </div>

        {/* Liste */}
        <div className="divide-y divide-[#E8E4DE]">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="grid md:grid-cols-12 gap-8 py-10 group"
            >
              <div className="md:col-span-3 flex items-start gap-6">
                <span className="text-xs text-[#A8A49C] tracking-widest mt-1">{s.num}</span>
                <h3 className="font-heading text-2xl text-[#1A1915]">{s.title}</h3>
              </div>
              <p className="md:col-span-7 text-[#6E6B63] leading-relaxed self-center">
                {s.description}
              </p>
              <div className="md:col-span-2 flex items-center justify-end">
                <span className="text-[#4A7260] text-xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
