export type ProjectCategory =
  | 'Reklamne table'
  | 'LED reklame'
  | '3D reklame'
  | 'Branding'
  | 'Grafički dizajn'
  | 'Video'
  | 'Kreativna produkcija';

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Zamijeni pravom fotografijom: /projects/<naziv>.jpg */
  image: string;
  alt: string;
  description: string;
  services: string[];
  placeholder: boolean;
  span: 'wide' | 'tall' | 'square';
};

export const projectCategories: ('Sve' | ProjectCategory)[] = [
  'Sve',
  'Reklamne table',
  'LED reklame',
  '3D reklame',
  'Branding',
  'Grafički dizajn',
  'Video',
  'Kreativna produkcija',
];

export const projects: Project[] = [
  {
    slug: 'svjetleci-natpis-fasada',
    title: 'Svjetleći natpis na fasadi',
    category: 'LED reklame',
    image: '/images/led-wall.webp',
    alt: '',
    description:
      'Natpis firme sa LED osvjetljenjem, predviđen za vanjsku montažu. Slova se rade u dubini, svjetlo je ravnomjerno i čitko i danju i noću.',
    services: ['3D slova', 'LED osvjetljenje', 'Montaža'],
    placeholder: true,
    span: 'wide',
  },
  {
    slug: 'reklamna-tabla-pvc',
    title: 'Reklamna tabla po mjeri',
    category: 'Reklamne table',
    image: '/images/panel-plastic.webp',
    alt: '',
    description:
      'Tabla u dimenziji koju traži objekat, sa štampom u punoj boji. Rješenje za ulaze, ograde, parkinge i radne prostore.',
    services: ['Digitalna štampa', 'PVC / pleksi', 'Priprema dizajna'],
    placeholder: true,
    span: 'square',
  },
  {
    slug: 'xps-3d-element',
    title: 'XPS 3D element',
    category: '3D reklame',
    image: '/images/panel-xps.webp',
    alt: '',
    description:
      'Lagani prostorni element od stiropora/XPS-a sa zaštitnim slojem. Idealno kad treba volumen bez težine konstrukcije.',
    services: ['XPS obrada', 'Bojenje', '3D forma'],
    placeholder: true,
    span: 'tall',
  },
  {
    slug: 'logo-na-zidu',
    title: 'Logo na zidu',
    category: 'Branding',
    image: '/images/wall-logo.webp',
    alt: '',
    description:
      'Logotip izrađen kao prostorni element i montiran na zid — u kancelariji, salonu ili proizvodnoj hali.',
    services: ['3D izrada', 'Montaža', 'Branding prostora'],
    placeholder: true,
    span: 'square',
  },
  {
    slug: 'recepcija-branding',
    title: 'Branding recepcije',
    category: 'Branding',
    image: '/images/reception.webp',
    alt: '',
    description:
      'Prva točka kontakta u prostoru. Natpis, logo i dodatni vizualni elementi usklađeni sa identitetom firme.',
    services: ['Natpis', 'Osvjetljenje', 'Dizajn'],
    placeholder: true,
    span: 'wide',
  },
  {
    slug: 'izlog-trgovine',
    title: 'Izlog i ulazna zona',
    category: 'Reklamne table',
    image: '/images/storefront.webp',
    alt: '',
    description:
      'Kompletna ulazna zona: natpis, folije na staklu i informativni elementi. Vidljivo sa ulice, čitko iz vozila.',
    services: ['Folije', 'Natpis', 'Vanjska reklama'],
    placeholder: true,
    span: 'square',
  },
  {
    slug: 'social-vizuali',
    title: 'Set vizuala za mreže',
    category: 'Grafički dizajn',
    image: '/images/social-post.webp',
    alt: '',
    description:
      'Serija objava u istom vizualnom jeziku — spremna za Instagram i Facebook, u formatima za feed i story.',
    services: ['Grafički dizajn', 'Social media vizuali', 'Priprema formata'],
    placeholder: true,
    span: 'square',
  },
  {
    slug: 'promo-video',
    title: 'Promo video za firmu',
    category: 'Video',
    image: '/images/video-frame.webp',
    alt: '',
    description:
      'Kratki promo materijal: montaža, tipografija u pokretu i verzije prilagođene za horizontalni i vertikalni format.',
    services: ['Video montaža', 'Video dizajn', 'Kratke forme'],
    placeholder: true,
    span: 'tall',
  },
  {
    slug: 'reklamni-banner',
    title: 'Reklamni banner',
    category: 'Kreativna produkcija',
    image: '/images/banner.webp',
    alt: '',
    description:
      'Banner za event, gradilište ili sezonsku akciju. Dizajn i produkcija u jednom prolazu, bez posrednika.',
    services: ['Dizajn', 'Štampa', 'Velike forme'],
    placeholder: true,
    span: 'wide',
  },
];
