export function Footer() {
  return (
    <footer className="border-t border-[#E8E4DE] bg-[#F5F2ED] py-12">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-12 gap-8 items-end">

        <div className="md:col-span-5">
          <p className="font-heading text-2xl text-[#1A1915] mb-2">LV PA Thüringen</p>
          <p className="text-xs text-[#A8A49C] leading-relaxed">
            Landesverband der Pflege- und Adoptivfamilien<br />
            Thüringen e.V. · Gegründet 1994 · Gemeinnützig
          </p>
        </div>

        <nav className="md:col-span-4 flex flex-col gap-2">
          {[
            { label: 'Wer sind wir', href: '#ueber-uns' },
            { label: 'Was bieten wir', href: '#leistungen' },
            { label: 'Pflegefamilie werden', href: '#pflegefamilie' },
            { label: 'Kontakt', href: '#kontakt' },
          ].map(l => (
            <a key={l.label} href={l.href} className="text-xs text-[#6E6B63] hover:text-[#1A1915] transition-colors w-fit">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="md:col-span-3 flex flex-col gap-2 md:text-right">
          {['Impressum', 'Datenschutz', 'Satzung'].map(l => (
            <a key={l} href="#" className="text-xs text-[#A8A49C] hover:text-[#6E6B63] transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="md:col-span-12 border-t border-[#E8E4DE] pt-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-[#A8A49C]">© 2026 Landesverband der Pflege- und Adoptivfamilien Thüringen e.V.</p>
          <p className="text-xs text-[#A8A49C]">Lessingplatz 10 · 99631 Weißensee/ OT Schönstedt </p>
        </div>
      </div>
    </footer>
  )
}
