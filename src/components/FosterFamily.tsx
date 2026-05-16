import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, ChevronRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Erstberatung',
    desc: 'Unverbindliches Kennenlerngespräch — wir beantworten alle Ihre Fragen offen und ehrlich.',
  },
  {
    num: '02',
    title: 'Eignungsprüfung',
    desc: 'Gemeinsam prüfen wir, ob eine Pflegefamilie zu Ihrer Lebenssituation passt.',
  },
  {
    num: '03',
    title: 'Vorbereitung & Schulung',
    desc: 'Unsere Fortbildungen bereiten Sie umfassend auf das Leben mit einem Pflegekind vor.',
  },
  {
    num: '04',
    title: 'Begleitung',
    desc: 'Wir begleiten Sie bei Gesprächen mit Jugendämtern und stehen in Krisensituationen zur Seite.',
  },
  {
    num: '05',
    title: 'Dauerhaftes Netzwerk',
    desc: 'Als Mitglied profitieren Sie dauerhaft von Gruppenarbeit, Fachtagungen und gegenseitiger Unterstützung.',
  },
]

const zielgruppen = [
  'Pflege- und Adoptivfamilien',
  'Unmittelbare Angehörige der Pflege- und Adoptionsfamilien',
  'Adoptiv- und Pflegeelternbewerber',
  'Kinder, Jugendliche und Erwachsene aus Pflege-/Adoptivfamilien',
  'Fachkräfte in Familienberatung und Jugendhilfe',
  'Alle am Thema Interessierten',
]

export function FosterFamily() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pflegefamilie" className="py-24 bg-[#F9F7F2]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-[#4BA661] uppercase mb-3">Pflegefamilie werden</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B4332] mb-5">
            Ein Kind braucht ein Zuhause
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Pflegeeltern schenken Kindern in schwierigen Lebenssituationen Geborgenheit,
            Stabilität und Perspektive. Wir begleiten Sie auf diesem Weg.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Steps */}
          <div>
            <h3 className="font-heading text-2xl text-[#1B4332] mb-8">Der Weg zur Pflegefamilie</h3>
            <div className="space-y-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.45 }}
                  className="flex gap-5 relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#4BA661] text-white font-heading font-bold text-sm flex items-center justify-center shrink-0 z-10">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[#88D498] my-1" />
                    )}
                  </div>
                  <div className={`pb-8 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                    <h4 className="font-heading text-lg text-[#1B4332] mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#kontakt"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-8 inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#4BA661] text-white font-bold hover:bg-[#1B4332] transition-all hover:scale-105 shadow-lg shadow-[#4BA661]/25"
            >
              Jetzt Beratungsgespräch anfragen <ChevronRight size={18} />
            </motion.a>
          </div>

          {/* Zielgruppe + Bild */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="https://picsum.photos/seed/foster2/700/256"
                alt="Familie mit Pflegekind"
                className="w-full h-56 object-cover"
                onError={(e) => {
                  const t = e.currentTarget
                  t.style.display = 'none'
                  t.parentElement!.style.background = 'linear-gradient(135deg, #4BA661, #1B4332)'
                  t.parentElement!.style.minHeight = '120px'
                }}
              />
              <div className="bg-[#1B4332] px-6 py-5">
                <p className="text-[#88D498] font-bold text-sm mb-1">Pflegegeld in Deutschland</p>
                <p className="text-white text-2xl font-heading font-bold">800 – 1.200 € / Monat</p>
                <p className="text-white/60 text-sm mt-1">je nach Alter des Kindes und Bundesland</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-heading text-xl text-[#1B4332] mb-5">Wen sprechen wir an?</h3>
              <ul className="space-y-3">
                {zielgruppen.map((z, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <CheckCircle2 size={18} className="text-[#4BA661] shrink-0 mt-0.5" />
                    {z}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
