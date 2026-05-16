import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Phone, Send, User } from 'lucide-react'

const vorstand = [
  { role: 'Vorsitzende', name: 'Vera Schade', tel: '03634 – 622 756' },
  { role: 'Stellv. Vorsitzende', name: 'Elke Maroldt', tel: '03634 – 609 171' },
]

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="kontakt" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-sm font-bold tracking-widest text-[#4BA661] uppercase mb-3">Kontakt</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1B4332] mb-5">Wir sind für Sie da</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Schreiben Sie uns oder rufen Sie direkt an — wir melden uns so schnell wie möglich.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Kontaktdaten */}
            <div className="bg-[#1B4332] rounded-3xl p-7 text-white">
              <h3 className="font-heading text-xl mb-6">Kontaktdaten</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4BA661] flex items-center justify-center shrink-0">
                    <Phone size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#88D498] text-xs font-bold uppercase tracking-wider mb-0.5">Mobil</p>
                    <a href="tel:+4915751019536" className="text-white text-sm hover:text-[#88D498] transition-colors">
                      01575 1019536
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4BA661] flex items-center justify-center shrink-0">
                    <Mail size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#88D498] text-xs font-bold uppercase tracking-wider mb-0.5">E-Mail</p>
                    <a
                      href="mailto:landesverband.pflege.und.adoptivfamilien@web.de"
                      className="text-white text-xs leading-relaxed hover:text-[#88D498] transition-colors break-all"
                    >
                      landesverband.pflege.und.adoptivfamilien@web.de
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#4BA661] flex items-center justify-center shrink-0">
                    <MapPin size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[#88D498] text-xs font-bold uppercase tracking-wider mb-0.5">Adresse</p>
                    <p className="text-white text-sm">
                      Vorderstraße 76<br />99610 Wenigensömmern
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vorstand */}
            <div className="bg-[#F9F7F2] rounded-2xl p-6 border border-gray-100">
              <h3 className="font-heading text-lg text-[#1B4332] mb-4">Vorstand</h3>
              <div className="space-y-4">
                {vorstand.map((v) => (
                  <div key={v.name} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#4BA661]/15 flex items-center justify-center shrink-0">
                      <User size={16} className="text-[#4BA661]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#4BA661] font-bold uppercase tracking-wide">{v.role}</p>
                      <p className="font-heading font-semibold text-[#1B4332] text-sm">{v.name}</p>
                      <a href={`tel:${v.tel.replace(/[^0-9]/g, '')}`} className="text-xs text-gray-500 hover:text-[#4BA661] transition-colors">
                        Tel: {v.tel}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formular */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16 bg-[#F0FAF3] rounded-3xl border border-[#88D498]/30"
              >
                <div className="w-16 h-16 rounded-full bg-[#4BA661] flex items-center justify-center mb-5">
                  <Send size={28} className="text-white" />
                </div>
                <h3 className="font-heading text-2xl text-[#1B4332] mb-2">Nachricht gesendet!</h3>
                <p className="text-gray-500">Wir melden uns so schnell wie möglich bei Ihnen.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#F9F7F2] rounded-3xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id: 'vorname', label: 'Vorname', placeholder: 'Max' },
                    { id: 'nachname', label: 'Nachname', placeholder: 'Mustermann' },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-sm font-semibold text-[#1B4332] mb-2">{f.label}</label>
                      <input
                        id={f.id}
                        type="text"
                        placeholder={f.placeholder}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4BA661]/40 focus:border-[#4BA661] transition"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1B4332] mb-2">E-Mail</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="max@beispiel.de"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4BA661]/40 focus:border-[#4BA661] transition"
                  />
                </div>

                <div>
                  <label htmlFor="anliegen" className="block text-sm font-semibold text-[#1B4332] mb-2">Ihr Anliegen</label>
                  <select
                    id="anliegen"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4BA661]/40 focus:border-[#4BA661] transition"
                  >
                    <option value="">Bitte wählen…</option>
                    <option>Pflegefamilie werden</option>
                    <option>Adoptivfamilie werden</option>
                    <option>Beratungsgespräch</option>
                    <option>Fortbildung / Veranstaltung</option>
                    <option>Mitgliedschaft im Landesverband</option>
                    <option>Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="nachricht" className="block text-sm font-semibold text-[#1B4332] mb-2">Nachricht</label>
                  <textarea
                    id="nachricht"
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen…"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4BA661]/40 focus:border-[#4BA661] transition resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="datenschutz" required className="mt-1 accent-[#4BA661] w-4 h-4" />
                  <label htmlFor="datenschutz" className="text-xs text-gray-500">
                    Ich habe die <a href="#" className="text-[#4BA661] underline">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#4BA661] text-white font-bold hover:bg-[#1B4332] transition-all hover:scale-[1.02] shadow-lg shadow-[#4BA661]/25"
                >
                  Nachricht senden <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
