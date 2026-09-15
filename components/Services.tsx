'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/data/services';
import { asset } from '@/lib/asset';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Services() {
  const [active, setActive] = useState(services[0].id);

  return (
    <section id="usluge" aria-labelledby="usluge-naslov" className="relative py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHeading
          label="01 — Šta radimo"
          id="usluge-naslov"
          title={
            <>
              Šta pretvaramo <span className="text-volt">u reklamu?</span>
            </>
          }
          lead="Pet područja koja se u praksi rijetko rade odvojeno. Najčešće se jedan projekat provuče kroz nekoliko njih."
          className="max-w-4xl"
        />

        <div className="mt-14 sm:mt-20">
          <ul className="border-t border-white/12">
            {services.map((service, i) => {
              const isActive = active === service.id;
              const offset = i % 2 === 0 ? 'lg:pl-0' : 'lg:pl-[8%]';

              return (
                <li key={service.id} className="border-b border-white/12">
                  <Reveal
                    as="div"
                    delay={i * 0.04}
                    className={`group relative ${offset}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActive(isActive ? '' : service.id)}
                      aria-expanded={isActive}
                      aria-controls={`usluga-${service.id}`}
                      className="flex w-full items-start gap-5 py-7 text-left transition-colors duration-500 ease-studio sm:items-center sm:gap-10 sm:py-9"
                    >
                      <span
                        className={`font-display text-sm leading-none transition-colors duration-500 ${
                          isActive ? 'text-volt' : 'text-bone/35'
                        }`}
                      >
                        {service.index}
                      </span>

                      <span className="flex-1">
                        <span
                          className={`block font-display text-[2rem] uppercase leading-[0.9] tracking-tightest transition-colors duration-500 sm:text-[3.2rem] lg:text-[4.4rem] ${
                            isActive ? 'text-bone' : 'text-bone/70 group-hover:text-bone'
                          }`}
                        >
                          {service.title}
                        </span>
                        <span className="mt-2 block text-sm text-bone/45 sm:text-base">{service.claim}</span>
                      </span>

                      <ArrowUpRight
                        size={20}
                        aria-hidden
                        className={`mt-2 shrink-0 transition-all duration-500 ease-studio sm:mt-0 ${
                          isActive ? 'rotate-90 text-volt' : 'text-bone/35 group-hover:text-volt'
                        }`}
                      />
                    </button>

                    <div
                      id={`usluga-${service.id}`}
                      hidden={!isActive}
                      className="grid gap-8 pb-9 lg:grid-cols-12 lg:items-start"
                    >
                      <div className="lg:col-span-5 lg:col-start-2">
                        <p className="max-w-[46ch] text-base leading-relaxed text-bone/65">{service.description}</p>
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {service.items.map((item) => (
                            <li key={item} className="border border-white/15 px-3 py-1.5 text-[0.6875rem] uppercase tracking-label text-bone/60">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative overflow-hidden border border-white/10 lg:col-span-5 lg:col-start-8">
                        <Image
                          src={asset(service.image)}
                          alt={service.alt}
                          width={1200}
                          height={800}
                          loading="lazy"
                          className="h-auto w-full transition-transform duration-[900ms] ease-studio hover:scale-[1.03]"
                        />
                        <span className="absolute left-3 top-3 bg-black/70 px-2 py-1 text-[0.625rem] uppercase tracking-label text-bone/70">
                          Placeholder vizual
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
