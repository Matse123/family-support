'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#FAFAF8] pt-20">
      <div className="max-w-6xl mx-auto px-8 w-full">

        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs tracking-[0.2em] uppercase text-[#4A7260] mb-8 font-sans"
        >
          Landesverband der Pflege- &amp; Adoptivfamilien Thüringen e.V.
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-heading text-[clamp(3.5rem,10vw,9rem)] text-[#1A1915] leading-[1.0] mb-12 max-w-4xl"
        >
          Kindern eine<br />
          <em className="italic text-[#4A7260]">Zukunft</em> geben.
        </motion.h1>

        {/* Bild + Text nebeneinander */}
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <img
              src="https://picsum.photos/seed/family-warm/800/600"
              alt="Familie"
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget
                t.style.display = 'none'
                t.parentElement!.style.background = 'linear-gradient(160deg, #EDF2F0 0%, #C5D8D1 100%)'
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65 }}
            className="pb-4"
          >
            <p className="text-[#6E6B63] text-lg leading-relaxed mb-10 max-w-md">
              Das ist das arbeitsübergreifende Motto des Landesverbandes.
              Nichts kann wichtiger und lohnender sein — stets das Kindeswohl im Blick.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#kontakt"
                className="text-sm text-[#FAFAF8] bg-[#4A7260] px-7 py-3.5 rounded-full hover:bg-[#2D4A3E] transition-colors tracking-wide"
              >
                Beratung anfragen
              </a>
              <a
                href="#ueber-uns"
                className="text-sm text-[#4A7260] border-b border-[#4A7260] pb-px hover:text-[#2D4A3E] hover:border-[#2D4A3E] transition-colors tracking-wide self-center"
              >
                Mehr erfahren
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll-Linie */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="mx-auto mt-16 w-px h-16 bg-[#E8E4DE] origin-top"
      />
    </section>
  )
}
