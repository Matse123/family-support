import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="ueber-uns" className="py-32 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16 items-start">

          {/* Sticky Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#A8A49C] mt-2">Wer sind wir</p>
          </motion.div>

          {/* Hauptinhalt */}
          <div className="md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-5xl md:text-6xl text-[#1A1915] mb-12 leading-tight"
            >
              Seit 1994 für<br />
              <em className="italic text-[#4A7260]">Pflege- &amp; Adoptivfamilien</em><br />
              in Thüringen.
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-16 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <p className="text-[#6E6B63] leading-relaxed mb-6">
                  Kinder, die nicht die Möglichkeit haben, in der eigenen Familie aufzuwachsen,
                  bedürfen einer besonderen Hilfe. Auf Grund ihrer eigenen Biografie erleben sie
                  wenigstens eine, in vielen Fällen jedoch mehrmalige Trennungen — müssen
                  Beziehungsabbrüche verkraften und traumatische Erlebnisse verarbeiten.
                </p>
                <p className="text-[#6E6B63] leading-relaxed">
                  Pflege- und Adoptiveltern schlossen sich im September 1994 in Gera zusammen,
                  um gemeinsam diese verantwortungsvolle Arbeit zu meistern und sich gegenseitig
                  zu unterstützen.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <p className="text-[#6E6B63] leading-relaxed mb-6">
                  Unser Ziel: neueste wissenschaftliche Erkenntnisse kennen zu lernen und
                  in die Praxis umsetzen zu können — immer mit dem Kindeswohl als
                  oberstem Leitprinzip.
                </p>
                <p className="text-[#6E6B63] leading-relaxed">
                  Auf Grundlage unserer Satzung ist der Landesverband als gemeinnütziger
                  Verband beim Finanzamt anerkannt. Mitglieder sind Ortsverbände, Gruppen
                  sowie Einzelmitglieder aus dem Freistaat Thüringen.
                </p>
              </motion.div>
            </div>

            {/* Bild */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="rounded-2xl overflow-hidden aspect-[16/7]"
            >
              <img
                src="https://picsum.photos/seed/about-warm/1200/525"
                alt="Pflege- und Adoptivfamilien"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget
                  t.style.display = 'none'
                  t.parentElement!.style.background = 'linear-gradient(160deg, #EDF2F0, #C5D8D1)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
