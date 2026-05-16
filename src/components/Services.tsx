import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, BookOpen, Heart, Home, MessageCircle, Smile, Users } from 'lucide-react'

const services = [
  {
    icon: BookOpen,
    title: 'Fortbildungen',
    description: 'Regelmäßige Fortbildungen zu aktuellen wissenschaftlichen Erkenntnissen rund um Pflege- und Adoptivkinder — praxisnah und fundiert.',
    color: '#4BA661',
    bg: '#F0FAF3',
  },
  {
    icon: MessageCircle,
    title: 'Krisengespräche',
    description: 'In schwierigen Situationen stehen wir Ihnen mit erfahrenen Fachkräften zur Seite — einfühlsam, vertraulich und lösungsorientiert.',
    color: '#1B4332',
    bg: '#E8F5ED',
  },
  {
    icon: Home,
    title: 'Gespräche in Jugendämtern',
    description: 'Wir begleiten und unterstützen Pflege- und Adoptivfamilien bei Gesprächen mit Jugendämtern und Behörden.',
    color: '#4BA661',
    bg: '#F0FAF3',
  },
  {
    icon: Users,
    title: 'Gegenseitige Unterstützung',
    description: 'Pflege- und Adoptiveltern schließen sich zusammen, um diese verantwortungsvolle Arbeit gemeinsam zu meistern.',
    color: '#1B4332',
    bg: '#E8F5ED',
  },
  {
    icon: Heart,
    title: 'Kindeswohl im Mittelpunkt',
    description: 'Alles dreht sich um einen Leitspruch: Kindern eine Zukunft geben! Stets das Kindeswohl im Blick — in jeder Entscheidung.',
    color: '#4BA661',
    bg: '#F0FAF3',
  },
  {
    icon: Smile,
    title: 'Trauma & Biografie',
    description: 'Kinder, die Trennungen und Beziehungsabbrüche erlebt haben, erhalten gezielte Unterstützung beim Aufarbeiten traumatischer Erlebnisse.',
    color: '#1B4332',
    bg: '#E8F5ED',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

export function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="leistungen" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-[#4BA661] uppercase mb-3">Unsere Services</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B4332] mb-5">Wie wir helfen</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Von der ersten Anfrage bis zur dauerhaften Begleitung — wir sind immer für Sie da.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group rounded-2xl p-6 border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: s.bg }}
              >
                <s.icon size={22} style={{ color: s.color }} />
              </div>
              <h3 className="font-heading text-xl text-[#1B4332] mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#4BA661] group-hover:gap-3 transition-all"
              >
                Mehr erfahren <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
