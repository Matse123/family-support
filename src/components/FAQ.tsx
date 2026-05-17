import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Wer kann Pflegeeltern werden?',
    a: 'Pflegeeltern können Einzelpersonen, Ehepaare oder unverheiratete Paare sein — unabhängig von Familienstand oder Alter. Wichtig sind Stabilität, Einfühlungsvermögen und die Bereitschaft, ein Kind langfristig zu begleiten.',
  },
  {
    q: 'Erhalte ich finanzielle Unterstützung als Pflegefamilie?',
    a: 'Ja. Pflegeeltern erhalten monatlich Pflegegeld, das die Kosten für Unterkunft, Verpflegung, Kleidung und Freizeitaktivitäten des Kindes abdeckt. Die genaue Höhe variiert je nach Alter des Kindes und Bundesland.',
  },
  {
    q: 'Wie lange dauert der Zulassungsprozess?',
    a: 'Der gesamte Prozess dauert in der Regel 3–6 Monate — von der Erstberatung über Schulungen bis zur offiziellen Anerkennung als Pflegefamilie.',
  },
  {
    q: 'Was passiert, wenn ich als Pflegeelternteil Probleme habe?',
    a: 'Wir begleiten Sie dauerhaft. Bei Herausforderungen stehen unsere Fachkräfte zur Verfügung — telefonisch oder persönlich. Krisengespräche sind ein zentraler Teil unserer Arbeit.',
  },
  {
    q: 'Behalten die leiblichen Eltern Kontakt zum Kind?',
    a: 'Das hängt vom Einzelfall und der Art der Pflegebetreuung ab. Bei Vollzeitpflegekindschaft gibt es oft geregelte Kontaktzeiten. Wir klären dies gemeinsam und begleiten alle Beteiligten.',
  },
]

function FAQItem({ q, a, i, inView }: { q: string; a: string; i: number; inView: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.6 }}
      className="border-t border-[#E8E4DE]"
    >
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <span className="font-heading text-xl text-[#1A1915] pr-8">{q}</span>
        <span className="text-[#4A7260] text-xl shrink-0 transition-transform duration-300" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>+</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-[#6E6B63] text-sm leading-relaxed pb-7 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" className="py-32 bg-[#F5F2ED]" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="md:col-span-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#A8A49C] mt-2">Fragen</p>
          </motion.div>

          <div className="md:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="font-heading text-5xl md:text-6xl text-[#1A1915] leading-tight mb-14"
            >
              Ihre Fragen,<br />
              <em className="italic text-[#4A7260]">unsere Antworten.</em>
            </motion.h2>

            <div>
              {faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} i={i} inView={inView} />
              ))}
              <div className="border-t border-[#E8E4DE]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
