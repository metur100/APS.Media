export const site = {
  name: 'APS Media',
  legalName: 'APS MEDIA VL PIRO SAID TEŠANJ',
  address: {
    street: 'Džemilić Planje 28',
    city: '74260 Tešanj',
    country: 'Bosna i Hercegovina',
  },
  registered: '19.11.2025.',
  /** Zamijeni placeholdere pravim podacima — koriste se na cijelom sajtu. */
  contact: {
    phoneLabel: '[BROJ TELEFONA]',
    phoneHref: 'tel:[BROJTELEFONA]',
    emailLabel: '[EMAIL]',
    emailHref: 'mailto:[EMAIL]',
    viberLabel: '[VIBER / WHATSAPP]',
  },
  social: [
    { label: 'Instagram', href: '[INSTAGRAM LINK]' },
    { label: 'Facebook', href: '[FACEBOOK LINK]' },
  ],
  nav: [
    { label: 'Radovi', href: '#radovi' },
    { label: 'Usluge', href: '#usluge' },
    { label: 'O nama', href: '#o-nama' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  /** Odredište forme: Formspree, Getform, vlastiti API… ostavljeno prazno namjerno. */
  formEndpoint: '',
} as const;

export type NavItem = (typeof site.nav)[number];
