import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Wer kann Pflegeeltern werden?',
    a: 'Pflegeeltern können Einzelpersonen, Ehepaare oder unverheiratete Paare sein — unabhängig von Familienstand oder Alter. Wichtig sind Stabilität, Einfühlungsvermögen und die Bereitschaft, ein Kind langfristig zu begleiten.',
  },
  {
    q: 'Erhalte ich finanziell Unterstützung als Pflegefamilie?',
    a: 'Ja. Pflegeeltern erhalten monatlich Pflegegeld, das die Kosten für Unterkunft, Verpflegung, Kleidung und Freizeitaktivitäten des Kindes abdeckt. Die genaue Höhe variiert je nach Alter des Kindes und Bundesland (ca. 800–1.200 €).',
  },
  {
    q: 'Wie lange dauert der Zulassungsprozess?',
    a: 'Der gesamte Prozess dauert in der Regel 3–6 Monate — von der Erstberatung über Schulungen bis zur offiziellen Anerkennung als Pflegefamilie.',
  },
  {
    q: 'Was passiert, wenn ich als Pflegeelternteil Probleme habe?',
    a: 'Wir begleiten Sie dauerhaft. Bei Herausforderungen stehen unsere Fachkräfte sofort zur Verfügung — telefonisch, per Video oder persönlich. Unsere Krisenhotline ist rund um die Uhr erreichbar.',
  },
  {
    q: 'Kann ich auch ein Pflegekind aus dem Ausland aufnehmen?',
    a: 'In bestimmten Fällen ja — dies unterliegt jedoch besonderen rechtlichen Voraussetzungen. Wir beraten Sie gern individuell zu Ihren Möglichkeiten.',
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
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08 }}
      className="border border-gray-200 rounded-2xl overflow-hidden"
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#F9F7F2] transition-colors"
        onClick={() => setOpen(v => !v)}
      >
        <span className="font-heading font-semibold text-[#1B4332] text-base pr-4">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={20} className="text-[#4BA661] shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">{a}</p>
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
    <section id="faq" className="py-24 bg-[#F9F7F2]" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold tracking-widest text-[#4BA661] uppercase mb-3">Häufige Fragen</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B4332]">
            Ihre Fragen — unsere Antworten
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
