import { motion } from 'framer-motion'
import { ArrowRight, Heart, Shield, Users } from 'lucide-react'

const pills = [
  { icon: Heart, label: 'Mit Herz & Fachwissen' },
  { icon: Shield, label: 'Sicher & vertrauensvoll' },
  { icon: Users, label: 'Für alle Familien' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F9F7F2]">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#4BA661]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#88D498]/15 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4BA661]/10 text-[#1B4332] text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#4BA661] animate-pulse" />
            Landesverband Pflege- & Adoptivfamilien
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#1B4332] mb-6"
          >
            Kindern eine{' '}
            <span className="relative inline-block text-[#4BA661]">
              Zukunft
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6c40-4 80-4 120-2s76 2 76 2" stroke="#88D498" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>{' '}
            geben!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
          >
            Das ist das arbeitsübergreifende Motto des Landesverbandes. Nichts kann
            wichtiger und lohnender sein — stets das Kindeswohl im Blick.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#4BA661] text-white font-bold text-base hover:bg-[#1B4332] transition-all hover:scale-105 shadow-lg shadow-[#4BA661]/30"
            >
              Beratung vereinbaren
              <ArrowRight size={18} />
            </a>
            <a
              href="#aktuelles"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-[#4BA661] text-[#4BA661] font-bold text-base hover:bg-[#4BA661]/5 transition-all"
            >
              Aktuelles
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            {pills.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-sm text-gray-600 font-medium shadow-sm">
                <Icon size={15} className="text-[#4BA661]" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] relative">
            <img
              src="https://picsum.photos/seed/family1/700/875"
              alt="Familie sitzt gemeinsam auf dem Boden"
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
                t.parentElement!.style.background = 'linear-gradient(135deg, #88D498 0%, #4BA661 50%, #1B4332 100%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/30 to-transparent" />
          </div>

          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#4BA661] flex items-center justify-center">
              <Heart size={22} className="text-white" fill="white" />
            </div>
            <div>
              <p className="font-heading font-bold text-lg text-[#1B4332]">200+</p>
              <p className="text-xs text-gray-500">Familien begleitet</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
          >
            <div className="w-12 h-12 rounded-xl bg-[#88D498] flex items-center justify-center">
              <Shield size={22} className="text-[#1B4332]" />
            </div>
            <div>
              <p className="font-heading font-bold text-lg text-[#1B4332]">15 Jahre</p>
              <p className="text-xs text-gray-500">Erfahrung</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 font-medium">Scrollen</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-6 rounded-full bg-[#4BA661]/40"
        />
      </motion.div>
    </section>
  )
}
