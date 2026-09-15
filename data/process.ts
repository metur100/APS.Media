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
    image: '/placeholders/process-01.svg',
    alt: 'Placeholder vizual početne skice reklame',
    note: 'Skica / dogovor',
  },
  {
    index: '02',
    title: 'Dizajn',
    text: 'Ideja postaje precizan vizual sa dimenzijama, bojama i pozicijom. Vidite kako izgleda prije nego što se bilo šta reže.',
    image: '/placeholders/process-02.svg',
    alt: 'Placeholder vizual digitalne pripreme dizajna',
    note: 'Vizual / dimenzije',
  },
  {
    index: '03',
    title: 'Produkcija',
    text: 'Izrada u odabranom materijalu — ploča, pleksi, XPS, folija, LED. Kontrola prije nego što napusti radionicu.',
    image: '/placeholders/process-03.svg',
    alt: 'Placeholder vizual materijala u produkciji',
    note: 'Materijal / izrada',
  },
  {
    index: '04',
    title: 'Finalni rezultat',
    text: 'Gotova reklama na svom mjestu. Ista logika prenesena i na digitalne formate ako vam trebaju.',
    image: '/placeholders/process-04.svg',
    alt: 'Placeholder vizual gotove montirane reklame',
    note: 'Montirano / vidljivo',
  },
];
