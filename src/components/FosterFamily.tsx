import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const zielgruppen = [
  'Pflege- und Adoptivfamilien',
  'Angehörige der Pflege- und Adoptionsfamilien',
  'Adoptiv- und Pflegeelternbewerber',
  'Kinder und Jugendliche aus Pflegefamilien',
  'Erwachsene, die in Pflegefamilien aufgewachsen sind',
  'Fachkräfte in Familienberatung und Jugendhilfe',
  'Alle am Thema Interessierten',
]

const steps = [
  { title: 'Erstgespräch', desc: 'Ein unverbindliches, offenes Gespräch — ohne Druck und ohne Erwartungen.' },
  { title: 'Orientierung', desc: 'Wir begleiten Sie bei der Frage: Ist eine Pflegefamilie der richtige Weg für uns?' },
  { title: 'Vorbereitung', desc: 'Fortbildungen und Schulungen bereiten Sie einfühlsam auf das vor, was kommt.' },
  { title: 'Begleitung', desc: 'Auch danach sind wir an Ihrer Seite — bei Ämtern, in Krisen, im Alltag.' },
]

export function FosterFamily() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pflegefamilie" className="py-32 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">

        {/* Headline */}
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="md:col-span-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#A8A49C] mt-2">Pflegefamilie werden</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="md:col-span-9"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-[#1A1915] leading-tight mb-6">
              Ein Kind braucht<br />
              <em className="italic text-[#4A7260]">ein Zuhause.</em>
            </h2>
            <p className="text-[#6E6B63] text-lg max-w-xl leading-relaxed">
              Pflegeeltern schenken Kindern in schwierigen Lebenssituationen Geborgenheit,
              Stabilität und Perspektive. Wir begleiten Sie auf diesem Weg — von Anfang an.
            </p>
          </motion.div>
        </div>

        {/* Bild + Steps */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="rounded-2xl overflow-hidden aspect-[3/4]"
          >
            <img
              src="https://picsum.photos/seed/foster-soft/600/800"
              alt="Familie"
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
                t.parentElement!.style.background = 'linear-gradient(160deg, #EDF2F0, #C5D8D1)'
              }}
            />
          </motion.div>

          <div className="flex flex-col justify-center space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.6 }}
                className="border-t border-[#E8E4DE] pt-8"
              >
                <h3 className="font-heading text-2xl text-[#1A1915] mb-2">{step.title}</h3>
                <p className="text-[#6E6B63] text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#kontakt"
                className="inline-flex text-sm text-[#FAFAF8] bg-[#4A7260] px-7 py-3.5 rounded-full hover:bg-[#2D4A3E] transition-colors tracking-wide"
              >
                Beratungsgespräch anfragen
              </a>
            </motion.div>
          </div>
        </div>

        {/* Zielgruppen */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-[#F5F2ED] rounded-2xl p-10"
        >
          <p className="text-xs tracking-[0.2em] uppercase text-[#A8A49C] mb-8">Wen sprechen wir an</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {zielgruppen.map((z, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.45 + i * 0.06 }}
                className="flex items-center gap-3"
              >
                <span className="w-1 h-1 rounded-full bg-[#4A7260] shrink-0" />
                <span className="text-sm text-[#6E6B63]">{z}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
