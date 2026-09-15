'use client';

import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/data/site';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const needs = [
  'Reklamna tabla',
  'LED / svjetleća reklama',
  '3D slova',
  'Branding prostora',
  'Grafički dizajn',
  'Video / social',
  'Nisam siguran — trebam savjet',
];

const fieldClass =
  'w-full border border-white/15 bg-transparent px-4 py-3.5 text-base text-bone placeholder:text-bone/30 transition-colors duration-300 focus:border-volt';

export default function Contact() {
  const [sent, setSent] = useState(false);

  /**
   * Frontend-only. Poveži sa Formspree / Getform / vlastitim endpointom
   * postavljanjem `site.formEndpoint` i zamjenom ovog handlera.
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!site.formEndpoint) {
      event.preventDefault();
      setSent(true);
    }
  };

  return (
    <section id="kontakt" aria-labelledby="kontakt-naslov" className="border-t border-white/10 py-24 sm:py-32 lg:py-40">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            label="09 — Kontakt"
            id="kontakt-naslov"
            title={
              <>
                Javi se. <span className="text-volt">Kratko i jasno.</span>
              </>
            }
            lead="Odgovaramo direktno — bez formulara koji nikad ne stigne do onoga ko radi."
          />

          <Reveal delay={0.16}>
            <address className="mt-12 space-y-6 not-italic">
              <div className="flex gap-4 border-t border-white/12 pt-6">
                <MapPin size={17} aria-hidden className="mt-1 shrink-0 text-volt" />
                <div>
                  <p className="label">Adresa</p>
                  <p className="mt-1.5 text-base text-bone/80">
                    {site.address.street}
                    <br />
                    {site.address.city}
                    <br />
                    {site.address.country}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 border-t border-white/12 pt-6">
                <Phone size={17} aria-hidden className="mt-1 shrink-0 text-volt" />
                <div>
                  <p className="label">Telefon</p>
                  <a href={site.contact.phoneHref} className="link-underline mt-1.5 inline-block text-base text-bone/80">
                    {site.contact.phoneLabel}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 border-t border-white/12 pt-6">
                <Mail size={17} aria-hidden className="mt-1 shrink-0 text-volt" />
                <div>
                  <p className="label">Email</p>
                  <a href={site.contact.emailHref} className="link-underline mt-1.5 inline-block text-base text-bone/80">
                    {site.contact.emailLabel}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/12 pt-6">
                {site.social.map((item) => (
                  <a key={item.label} href={item.href} className="link-underline label text-bone/70">
                    {item.label}
                  </a>
                ))}
              </div>
            </address>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              action={site.formEndpoint || undefined}
              method={site.formEndpoint ? 'POST' : undefined}
              encType="multipart/form-data"
              className="border border-white/12 p-5 sm:p-8"
              noValidate={false}
            >
              <p className="label">Upit</p>
              <h3 className="mt-3 display-md">Pošalji upit</h3>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="ime" className="label block">
                    Ime i prezime *
                  </label>
                  <input id="ime" name="ime" type="text" required autoComplete="name" className={`${fieldClass} mt-2`} placeholder="Vaše ime" />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="firma" className="label block">
                    Firma
                  </label>
                  <input id="firma" name="firma" type="text" autoComplete="organization" className={`${fieldClass} mt-2`} placeholder="Naziv firme" />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="label block">
                    Email *
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={`${fieldClass} mt-2`} placeholder="ime@firma.ba" />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="telefon" className="label block">
                    Telefon
                  </label>
                  <input id="telefon" name="telefon" type="tel" autoComplete="tel" inputMode="tel" className={`${fieldClass} mt-2`} placeholder="+387" />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="potreba" className="label block">
                    Šta vam je potrebno?
                  </label>
                  <select id="potreba" name="potreba" className={`${fieldClass} mt-2 appearance-none`} defaultValue="">
                    <option value="" disabled>
                      Odaberite
                    </option>
                    {needs.map((need) => (
                      <option key={need} value={need} className="bg-ink-800">
                        {need}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="poruka" className="label block">
                    Poruka *
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    required
                    rows={5}
                    className={`${fieldClass} mt-2 resize-y`}
                    placeholder="Opišite ideju, dimenzije ili lokaciju montaže."
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="fajl" className="label block">
                    Prilog (logo, skica, fotografija) — opcionalno
                  </label>
                  <input
                    id="fajl"
                    name="fajl"
                    type="file"
                    accept="image/*,.pdf,.ai,.eps,.svg"
                    className="mt-2 w-full border border-dashed border-white/20 px-4 py-3.5 text-sm text-bone/60 file:mr-4 file:border-0 file:bg-volt file:px-4 file:py-2 file:text-[0.6875rem] file:font-semibold file:uppercase file:tracking-label file:text-black"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex min-h-[3.5rem] w-full items-center justify-center gap-2 bg-volt px-8 text-[0.75rem] font-semibold uppercase tracking-label text-black transition-colors duration-500 ease-studio hover:bg-white sm:w-auto"
              >
                Pošalji upit <ArrowUpRight size={16} aria-hidden />
              </button>

              <p aria-live="polite" className="mt-4 text-sm text-bone/50">
                {sent
                  ? 'Forma još nije povezana sa servisom za slanje. Postavite endpoint u data/site.ts.'
                  : 'Podaci se koriste isključivo za odgovor na upit.'}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
