export type Service = {
  id: string;
  index: string;
  title: string;
  claim: string;
  description: string;
  items: string[];
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: 'fizicka-reklama',
    index: '01',
    title: 'Fizička reklama',
    claim: 'Reklama koja zauzima prostor.',
    description:
      'Table, paneli i reklamni elementi izrađeni po mjeri vašeg objekta — od male natpisne ploče do velike fasadne reklame.',
    items: ['Reklamne table', 'PVC i pleksi paneli', 'XPS / stiropor elementi', 'Fasadne reklame', 'Digitalna štampa'],
    image: '/placeholders/panel-print.svg',
    alt: 'Placeholder vizual reklamnog panela sa digitalnom štampom',
  },
  {
    id: '3d-led',
    index: '02',
    title: '3D & LED',
    claim: 'Kad brend treba svjetlo.',
    description:
      'Prostorna slova i svjetleći natpisi koji rade i noću. Kombinacija materijala, dubine i LED osvjetljenja.',
    items: ['3D slova', 'Svjetleće reklame', 'LED natpisi firme', 'Osvjetljeni logotipi', 'Totemi i konzole'],
    image: '/placeholders/led-letters.svg',
    alt: 'Placeholder vizual svjetlećih LED slova na tamnom zidu',
  },
  {
    id: 'graficki-dizajn',
    index: '03',
    title: 'Grafički dizajn',
    claim: 'Prvo se rješava ideja.',
    description:
      'Vizualna priprema svega što izlazi iz radionice i svega što ide online. Jedan vizualni jezik, više formata.',
    items: ['Dizajn reklama', 'Vizuali za štampu', 'Reklamne grafike', 'Priprema za produkciju', 'Vizualna rješenja po mjeri'],
    image: '/placeholders/design-desk.svg',
    alt: 'Placeholder vizual dizajnerskog radnog prostora',
  },
  {
    id: 'video-digital',
    index: '04',
    title: 'Video & digital',
    claim: 'Reklama koja se kreće.',
    description:
      'Kratke forme za društvene mreže i promo video materijali — snimljeno, montirano i pripremljeno za objavu.',
    items: ['Promo video', 'Video montaža', 'Reels i kratke forme', 'Video dizajn', 'Social media vizuali'],
    image: '/placeholders/video-frame.svg',
    alt: 'Placeholder vizual kadra iz promo videa',
  },
  {
    id: 'branding-prostora',
    index: '05',
    title: 'Branding prostora',
    claim: 'Prostor koji priča vašim glasom.',
    description:
      'Ulaz, recepcija, izlog, hodnik, radionica — prostor obrađen kao cjelina, a ne kao skup nalijepljenih detalja.',
    items: ['Branding interijera', 'Vanjska reklama', 'Logo na zidu', 'Recepcijski natpisi', 'Izlozi i ulazi'],
    image: '/placeholders/interior.svg',
    alt: 'Placeholder vizual brandiranog poslovnog interijera',
  },
];
