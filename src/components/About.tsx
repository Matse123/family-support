import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, Lightbulb, Users } from 'lucide-react'

const highlights = [
  {
    icon: Heart,
    title: 'Stets das Kindeswohl im Blick',
    desc: 'Unser oberstes Ziel: Kindern eine Zukunft geben. Jede Entscheidung, jede Beratung, jeder Schritt orientiert sich am Wohl des Kindes.',
  },
  {
    icon: Users,
    title: 'Gemeinschaft stärkt',
    desc: 'Pflege- und Adoptiveltern schließen sich zusammen, um diese verantwortungsvolle Arbeit gemeinsam zu meistern und sich gegenseitig zu unterstützen.',
  },
  {
    icon: Lightbulb,
    title: 'Wissenschaft trifft Praxis',
    desc: 'Wir vermitteln neueste wissenschaftliche Erkenntnisse und helfen dabei, diese direkt in der täglichen Praxis umzusetzen.',
  },
]

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ueber-uns" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Bild */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src="https://picsum.photos/seed/about-family/700/525"
                alt="Pflege- und Adoptivfamilien gemeinsam"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget
                  t.style.display = 'none'
                  t.parentElement!.style.background = 'linear-gradient(135deg, #88D498 0%, #4BA661 60%, #1B4332 100%)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1B4332]/40 to-transparent" />
            </div>

            {/* Gründungsjahr-Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#4BA661] text-white rounded-2xl shadow-xl p-5 max-w-[200px]"
            >
              <p className="font-heading font-bold text-2xl leading-none">seit 1994</p>
              <p className="text-white/80 text-xs mt-1">Gegründet in Gera</p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
            >
              <p className="text-sm font-bold tracking-widest text-[#4BA661] uppercase mb-3">Wer sind wir</p>
              <h2 className="font-heading text-4xl md:text-5xl text-[#1B4332] mb-6">
                Landesverband der Pflege- &amp; Adoptivfamilien Thüringen&nbsp;e.V.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="space-y-4 text-gray-600 leading-relaxed mb-8"
            >
              <p>
                Kinder, die nicht die Möglichkeit haben, in der eigenen Familie aufzuwachsen,
                bedürfen einer besonderen Hilfe. Auf Grund ihrer eigenen Biografie erleben sie
                wenigstens eine, in vielen Fällen jedoch mehrmalige Trennungen, müssen
                Beziehungsabbrüche verkraften und traumatische Erlebnisse auf- und verarbeiten.
              </p>
              <p>
                Pflege- und Adoptiveltern schlossen sich im September 1994 in Gera zusammen,
                um gemeinsam diese verantwortungsvolle Arbeit zu meistern, sich gegenseitig zu
                unterstützen und um neueste wissenschaftliche Erkenntnisse kennen zu lernen und
                in die Praxis umsetzen zu können.
              </p>
              <p>
                Auf Grundlage unserer Satzung ist der Landesverband als{' '}
                <strong className="text-[#1B4332]">gemeinnütziger Verband</strong> beim
                Finanzamt anerkannt. Mitglieder sind Ortsverbände, Gruppen sowie Einzelmitglieder
                aus dem Freistaat Thüringen.
              </p>
            </motion.div>

            <div className="space-y-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F9F7F2]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4BA661]/15 flex items-center justify-center shrink-0">
                    <h.icon size={20} className="text-[#4BA661]" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-[#1B4332] text-sm mb-0.5">{h.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
