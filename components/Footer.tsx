import { site } from '@/data/site';

const columns = [
  {
    title: 'Navigacija',
    links: [
      { label: 'Početna', href: '#pocetna' },
      { label: 'Usluge', href: '#usluge' },
      { label: 'Radovi', href: '#radovi' },
      { label: 'O nama', href: '#o-nama' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
  },
  {
    title: 'Društvene mreže',
    links: site.social.map((item) => ({ label: item.label, href: item.href })),
  },
  {
    title: 'Pravno',
    links: [
      { label: 'Impressum', href: '#impressum' },
      { label: 'Politika privatnosti', href: '#privatnost' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900 pb-28 pt-16 sm:pb-16 sm:pt-20">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl uppercase tracking-tightest sm:text-4xl">
              APS <span className="text-volt">MEDIA</span>
            </p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-bone/55">
              {site.address.street}
              <br />
              {site.address.city}
              <br />
              {site.address.country}
            </address>
            <p className="mt-5 max-w-[36ch] text-xs leading-relaxed text-bone/35">
              {site.legalName} — registrovano {site.registered}
            </p>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
              <p className="label">{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="link-underline text-sm text-bone/60 transition-colors hover:text-bone">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-bone/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} APS Media. Sva prava zadržana.</p>
          <p className="label">Reklame / Dizajn / Video — Tešanj, BiH</p>
        </div>
      </div>
    </footer>
  );
}
