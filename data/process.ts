export type ProcessStep = {
  index: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  note: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Ideja',
    text: 'Pošaljete logo, fotografiju objekta ili samo rečenicu šta želite. Mi kažemo šta je izvedivo i u kojem materijalu.',
    image: '/images/process-01.webp',
    alt: '',
    note: 'Skica / dogovor',
  },
  {
    index: '02',
    title: 'Dizajn',
    text: 'Ideja postaje precizan vizual sa dimenzijama, bojama i pozicijom. Vidite kako izgleda prije nego što se bilo šta reže.',
    image: '/images/process-02.webp',
    alt: '',
    note: 'Vizual / dimenzije',
  },
  {
    index: '03',
    title: 'Produkcija',
    text: 'Izrada u odabranom materijalu — ploča, pleksi, XPS, folija, LED. Kontrola prije nego što napusti radionicu.',
    image: '/images/process-03.webp',
    alt: '',
    note: 'Materijal / izrada',
  },
  {
    index: '04',
    title: 'Finalni rezultat',
    text: 'Gotova reklama na svom mjestu. Ista logika prenesena i na digitalne formate ako vam trebaju.',
    image: '/images/process-04.webp',
    alt: '',
    note: 'Montirano / vidljivo',
  },
];
