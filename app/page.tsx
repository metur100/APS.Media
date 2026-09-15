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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'APS Media',
  legalName: site.legalName,
  description:
    'Izrada reklamnih tabli, LED i 3D reklama, branding poslovnih prostora, grafički dizajn i video produkcija.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: '74260',
    addressLocality: 'Tešanj',
    addressCountry: 'BA',
  },
  areaServed: 'Bosna i Hercegovina',
  foundingDate: '2025-11-19',
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
