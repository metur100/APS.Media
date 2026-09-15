# APS Media — web sajt

Statični Next.js (App Router) sajt za **APS MEDIA VL PIRO SAID TEŠANJ**, Džemilić Planje 28, 74260 Tešanj, BiH.
Jednostranični vizualni prikaz: reklamne table, LED i 3D natpisi, branding prostora, grafički dizajn i video.

## Tehnologije

- Next.js 14 (App Router, `output: "export"`)
- React 18 + TypeScript (strict)
- Tailwind CSS
- Framer Motion (uz podršku za `prefers-reduced-motion`)
- Lucide ikone

## Pokretanje lokalno

```bash
npm i
npm run dev      # http://localhost:3000
```

Produkcijski build i statični export (rezultat je folder `out/`):

```bash
npm run build
```

## Struktura

```
app/
  layout.tsx          # fontovi, SEO metadata, Open Graph
  page.tsx            # kompozicija sekcija + JSON-LD (LocalBusiness)
  not-found.tsx
components/
  Navbar, Hero, Marquee, Services, PhysicalAdvertising,
  SignageShowcase, DigitalCreative, Process, Projects,
  ProjectModal, WhyUs, CTA, Contact, Footer, MobileCta,
  Reveal, SectionHeading, MagneticButton
data/
  site.ts             # adresa, kontakt placeholderi, navigacija, form endpoint
  services.ts         # 5 kategorija usluga
  projects.ts         # portfolio (tipiziran array)
  process.ts          # 4 koraka procesa
  why.ts              # 6 razloga
lib/
  asset.ts            # basePath prefiks za statične fajlove
  motion.ts
public/
  placeholders/*.svg  # privremeni vizuali
  favicon.svg, robots.txt, sitemap.xml, .nojekyll
```

## Šta treba zamijeniti pravim podacima

Svi placeholderi su na jednom mjestu — `data/site.ts`:

- `contact.phoneLabel` / `contact.phoneHref` → `[BROJ TELEFONA]`
- `contact.emailLabel` / `contact.emailHref` → `[EMAIL]`
- `social` → `[INSTAGRAM LINK]`, `[FACEBOOK LINK]`
- `formEndpoint` → prazan string dok forma nije povezana

Pravni tekstovi (Impressum, Politika privatnosti) su linkovani, ali sadržaj nije napisan — dodaj ga kad bude spreman.

## Zamjena vizuala pravim fotografijama

1. Ubaci fotografije u `public/projects/` (npr. `public/projects/led-fasada.jpg`).
2. U `data/projects.ts` promijeni `image` na `/projects/led-fasada.jpg`, prilagodi `alt` i postavi `placeholder: false`.
3. Isto vrijedi za `data/services.ts` i `data/process.ts` (polje `image`).
4. `span` kontrolira format tile-a u galeriji: `'wide' | 'tall' | 'square'`.

Preporuka: JPG/WebP, širina 1600–2000 px, do ~300 KB po slici. `next/image` je u `unoptimized` modu (obavezno za statični export), pa slike optimiziraj prije uploada.

## Povezivanje kontakt forme

Frontend je spreman, backend namjerno nije implementiran. Najlakše preko Formspree-a:

1. Napravi formu na formspree.io i kopiraj endpoint.
2. U `data/site.ts` postavi:
   ```ts
   formEndpoint: 'https://formspree.io/f/XXXXXXX',
   ```
3. Forma tada radi klasičnim `POST`-om (`multipart/form-data`, uključujući prilog) i ne treba server.

Alternative: Getform, Web3Forms, Netlify Forms ili vlastiti API na drugoj domeni (u tom slučaju koristi `fetch` u `components/Contact.tsx`).

## Deploy na GitHub Pages

### A) Automatski (GitHub Actions — preporučeno)

1. Push koda na `main` u novi repozitorij.
2. U repozitoriju: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` je već uključen. Na svaki push na `main` radi build i deploy.
4. Sajt će biti na `https://<korisnik>.github.io/<repo>/`.

Workflow automatski postavlja `NEXT_PUBLIC_BASE_PATH=/<repo>` — to je neophodno da CSS, slike i fontovi rade u poddirektoriju.

### B) Ručno

```bash
NEXT_PUBLIC_BASE_PATH=/<repo> npm run build
touch out/.nojekyll
# sadržaj foldera out/ push-uj na branch gh-pages
```

### Root repozitorij ili custom domena

Ako je repo `<korisnik>.github.io` ili koristiš vlastitu domenu, `basePath` mora biti **prazan**:

```bash
NEXT_PUBLIC_BASE_PATH= NEXT_PUBLIC_SITE_URL=https://apsmedia.ba npm run build
```

Za custom domenu dodatno:

1. Dodaj `public/CNAME` sa jednim redom: `apsmedia.ba`
2. U DNS-u postavi `A` zapise na GitHub Pages IP-ove (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) ili `CNAME` na `<korisnik>.github.io`.
3. U Actions workflow-u ostavi `NEXT_PUBLIC_BASE_PATH` prazno i postavi `NEXT_PUBLIC_SITE_URL` na pravu domenu.
4. Ažuriraj domenu u `public/robots.txt` i `public/sitemap.xml`.

`.nojekyll` je već u `public/` da GitHub ne ignoriše `_next` folder.

## Napomene o sadržaju

Sajt ne sadrži izmišljene klijente, reference, testimoniale, statistike ni brojeve realizovanih projekata. Svi vizuali su jasno označeni placeholderi. Kad stignu prave fotografije i podaci, zamjena je izmjena u `data/` folderu.

## Pristupačnost i performanse

- Semantični HTML, ispravna hijerarhija naslova, `alt` tekstovi, vidljiv focus state
- Skip-link, tastaturna navigacija, `aria` atributi na meniju, filterima i modalu
- Sve animacije su `transform`/`opacity`; `prefers-reduced-motion` se respektuje
- Nema background videa; lazy loading na svim slikama osim hero vizuala
