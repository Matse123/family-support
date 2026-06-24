'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const vorstand = [
  { role: 'Vorsitzende', name: 'Alexandra Huth', tel: '0175 4181348' },
  { role: 'Stellvertretung', name: 'Elke Marold', tel: '0157 0109536' },
  { role: 'Stellvertretung', name: 'Wolfram Staufenbiel', tel: '0171 3333597' },
  { role: 'Kasse', name: 'Kathrin Voigt', tel: '0177 8256084' },
  { role: 'Beisitzerin', name: 'Mary Ann Knabe', tel: '' },
  { role: 'Beisitzerin', name: 'Wiebke Eis', tel: '' },
  { role: 'Beisitzerin', name: 'Christina Vogelbacher', tel: '' },
  { role: 'Beisitzerin', name: 'Corinna Vonhof', tel: '' },
  { role: 'Beisitzer', name: 'Heiko Mäder-Höhn', tel: '' },
  { role: 'Beisitzer', name: 'Peggy und Udo Reimann', tel: '' },
  { role: 'Beisitzer', name: 'Friedemann Göppel', tel: '' },
]

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = {
      vorname: (form.elements.namedItem('vorname') as HTMLInputElement).value,
      nachname: (form.elements.namedItem('nachname') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      anliegen: (form.elements.namedItem('anliegen') as HTMLSelectElement).value,
      nachricht: (form.elements.namedItem('nachricht') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setSent(true)
      } else {
        const body = await res.json().catch(() => ({}))
        const detail = body?.detail ? ` (${body.detail})` : ''
        setError(`Leider ist ein Fehler aufgetreten${detail}. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt eine E-Mail.`)
      }
    } catch {
      setError('Leider ist ein Fehler aufgetreten. Bitte prüfen Sie Ihre Internetverbindung.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="kontakt" className="py-32 bg-[#FAFAF8]" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">

        {/* Headline */}
        <div className="grid md:grid-cols-12 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="md:col-span-3"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-[#A8A49C] mt-2">Kontakt</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="md:col-span-9"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-[#1A1915] leading-tight">
              Wir sind für<br />
              <em className="italic text-[#4A7260]">Sie da.</em>
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-12 gap-16">

          {/* Kontaktinfos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 space-y-10"
          >
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#A8A49C] mb-4">Adresse</p>
              <p className="text-[#6E6B63] text-sm leading-relaxed">
                Lessingplatz 10<br />
                99631 Weißensee/ OT Schönstedt
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#A8A49C] mb-4">Erreichbarkeit</p>
              <a href="tel:+4915751019536" className="block text-[#1A1915] text-sm hover:text-[#4A7260] transition-colors mb-1">01575 1019536</a>
              <a href="mailto:landesverband.pflege.und.adoptivfamilien@web.de" className="text-[#1A1915] text-xs hover:text-[#4A7260] transition-colors break-all leading-relaxed">
                landesverband.pflege.und.<br />adoptivfamilien@web.de
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#A8A49C] mb-4">Vorstand</p>
              {vorstand.map(v => (
                <div key={v.name} className="mb-4">
                  <p className="text-[#A8A49C] text-xs mb-0.5">{v.role}</p>
                  <p className="text-[#1A1915] text-sm">{v.name}</p>
                  {v.tel && <p className="text-[#6E6B63] text-xs">{v.tel}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formular */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="md:col-span-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <p className="font-heading text-4xl text-[#1A1915] mb-4">Danke für Ihre Nachricht.</p>
                <p className="text-[#6E6B63]">Wir melden uns so schnell wie möglich bei Ihnen.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { id: 'vorname', label: 'Vorname', placeholder: 'Max' },
                    { id: 'nachname', label: 'Nachname', placeholder: 'Mustermann' },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-xs tracking-[0.15em] uppercase text-[#A8A49C] mb-3">{f.label}</label>
                      <input
                        id={f.id}
                        type="text"
                        placeholder={f.placeholder}
                        required
                        className="w-full border-b border-[#E8E4DE] bg-transparent pb-3 text-sm text-[#1A1915] placeholder:text-[#A8A49C] focus:outline-none focus:border-[#4A7260] transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs tracking-[0.15em] uppercase text-[#A8A49C] mb-3">E-Mail</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    required
                    className="w-full border-b border-[#E8E4DE] bg-transparent pb-3 text-sm text-[#1A1915] placeholder:text-[#A8A49C] focus:outline-none focus:border-[#4A7260] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="anliegen" className="block text-xs tracking-[0.15em] uppercase text-[#A8A49C] mb-3">Ihr Anliegen</label>
                  <select
                    id="anliegen"
                    className="w-full border-b border-[#E8E4DE] bg-transparent pb-3 text-sm text-[#6E6B63] focus:outline-none focus:border-[#4A7260] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Bitte wählen …</option>
                    <option>Pflegefamilie werden</option>
                    <option>Adoptivfamilie werden</option>
                    <option>Beratungsgespräch</option>
                    <option>Fortbildung / Veranstaltung</option>
                    <option>Mitgliedschaft</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nachricht" className="block text-xs tracking-[0.15em] uppercase text-[#A8A49C] mb-3">Nachricht</label>
                  <textarea
                    id="nachricht"
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen …"
                    className="w-full border-b border-[#E8E4DE] bg-transparent pb-3 text-sm text-[#1A1915] placeholder:text-[#A8A49C] focus:outline-none focus:border-[#4A7260] transition-colors resize-none"
                  />
                </div>

                <div className="flex items-start gap-4">
                  <input type="checkbox" id="datenschutz" required className="mt-0.5 accent-[#4A7260] w-4 h-4 shrink-0" />
                  <label htmlFor="datenschutz" className="text-xs text-[#A8A49C] leading-relaxed">
                    Ich habe die <a href="#" className="underline text-[#6E6B63] hover:text-[#4A7260]">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.
                  </label>
                </div>

                {error && (
                  <p className="text-xs text-red-600 leading-relaxed">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="text-sm text-[#FAFAF8] bg-[#4A7260] px-8 py-4 rounded-full hover:bg-[#2D4A3E] transition-colors tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? 'Wird gesendet …' : 'Nachricht senden'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
