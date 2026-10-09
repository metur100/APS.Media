import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import PhysicalAdvertising from '@/components/PhysicalAdvertising';
import SignageShowcase from '@/components/SignageShowcase';
import DigitalCreative from '@/components/DigitalCreative';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCta from '@/components/MobileCta';
import { site } from '@/data/site';

const siteUrl = `${(process.env.NEXT_PUBLIC_SITE_URL || 'https://metur100.github.io/APS.Media').replace(/\/$/, '')}/`;

const services = [
  ['Reklamne table', 'Izrada i montaža reklamnih tabli i panela (plastika, print, XPS).'],
  ['LED reklame', 'Svjetleće LED reklame, LED slova i LED zidovi.'],
  ['3D slova', '3D reklamna slova i logotipi za fasade i enterijer.'],
  ['Branding poslovnih prostora', 'Brendiranje izloga, recepcija, zidova i enterijera.'],
  ['Grafički dizajn', 'Logotipi, vizuelni identitet, objave za društvene mreže i print.'],
  ['Video produkcija', 'Reklamni i promotivni video za firme.'],
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${siteUrl}#business`,
  name: 'APS Media',
  legalName: site.legalName,
  url: siteUrl,
  image: `${siteUrl}images/og.jpg`,
  logo: `${siteUrl}icon-512.png`,
  description:
    'Izrada reklamnih tabli, LED i 3D reklama, branding poslovnih prostora, grafički dizajn i video produkcija.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: '74260',
    addressLocality: 'Tešanj',
    addressRegion: 'Zeničko-dobojski kanton',
    addressCountry: 'BA',
  },
  areaServed: [
    { '@type': 'City', name: 'Tešanj' },
    { '@type': 'AdministrativeArea', name: 'Zeničko-dobojski kanton' },
    { '@type': 'Country', name: 'Bosna i Hercegovina' },
  ],
  knowsLanguage: ['bs', 'hr', 'sr'],
  foundingDate: '2025-11-19',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Usluge',
    itemListElement: services.map(([name, description]) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name, description, areaServed: 'Bosna i Hercegovina' },
    })),
  },
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}#website`,
  url: siteUrl,
  name: 'APS Media',
  inLanguage: 'bs',
  publisher: { '@id': `${siteUrl}#business` },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      <Navbar />
      <main id="glavni-sadrzaj">
        <Hero />
        <Marquee />
        <Services />
        <PhysicalAdvertising />
        <SignageShowcase />
        <DigitalCreative />
        <Process />
        <Projects />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
