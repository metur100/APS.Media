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
  /** Placeholder vizual — ukloni kad dodaš stvarnu fotografiju. */
  placeholder: boolean;
  /** Format tile-a u galeriji. */
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
    image: '/placeholders/led-wall.svg',
    alt: 'Placeholder vizual svjetlećeg natpisa na tamnoj fasadi',
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
    image: '/placeholders/panel-plastic.svg',
    alt: 'Placeholder vizual plastične reklamne table',
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
    image: '/placeholders/panel-xps.svg',
    alt: 'Placeholder vizual reklamnog elementa od XPS-a',
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
    image: '/placeholders/wall-logo.svg',
    alt: 'Placeholder vizual logotipa montiranog na zid',
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
    image: '/placeholders/reception.svg',
    alt: 'Placeholder vizual brandirane recepcije',
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
    image: '/placeholders/storefront.svg',
    alt: 'Placeholder vizual reklame na izlogu trgovine',
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
    image: '/placeholders/social-post.svg',
    alt: 'Placeholder vizual objave za društvene mreže',
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
    image: '/placeholders/video-frame.svg',
    alt: 'Placeholder vizual kadra promo videa',
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
    image: '/placeholders/banner.svg',
    alt: 'Placeholder vizual reklamnog bannera',
    description:
      'Banner za event, gradilište ili sezonsku akciju. Dizajn i produkcija u jednom prolazu, bez posrednika.',
    services: ['Dizajn', 'Štampa', 'Velike forme'],
    placeholder: true,
    span: 'wide',
  },
];
