export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#4BA661] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-heading font-bold text-xl">LV PA Thüringen</span>
            </div>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed mb-4">
              Landesverband der Pflege- und Adoptivfamilien Thüringen e.V. — gemeinnützig, seit 1994.
            </p>
            <p className="text-white/40 text-xs">
              Vorderstraße 76 · 99610 Wenigensömmern<br />
              Mobil: 01575 1019536
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-[#88D498]">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {[
                { label: 'Wer sind wir', href: '#ueber-uns' },
                { label: 'Was bieten wir', href: '#leistungen' },
                { label: 'Pflegefamilie werden', href: '#pflegefamilie' },
                { label: 'Aktuelles', href: '#aktuelles' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map(l => (
                <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm mb-4 text-[#88D498]">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {['Impressum', 'Datenschutz', 'Satzung'].map(l => (
                <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">© 2025 Landesverband der Pflege- und Adoptivfamilien Thüringen e.V.</p>
          <p className="text-white/40 text-xs">Gegründet 1994 · Gemeinnützig anerkannt</p>
        </div>
      </div>
    </footer>
  )
}
