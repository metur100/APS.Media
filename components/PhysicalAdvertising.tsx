'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { asset } from '@/lib/asset';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const materials = [
  { name: 'PVC ploča', note: 'Table, natpisi, informativni paneli' },
  { name: 'Pleksiglas', note: 'Logotipi, distancirani natpisi' },
  { name: 'XPS / stiropor', note: 'Lagani 3D volumen' },
  { name: 'Folija i print', note: 'Stakla, zidovi, velike forme' },
  { name: 'LED modul', note: 'Osvjetljenje natpisa i slova' },
];

export default function PhysicalAdvertising() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 60, reduce ? 0 : -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -40, reduce ? 0 : 70]);

  return (
    <section aria-labelledby="fizicka-naslov" className="relative border-t border-white/10 bg-ink-900 py-24 sm:py-32 lg:py-40">
      <div className="shell" ref={ref}>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              label="02 — Fizička produkcija"
              id="fizicka-naslov"
              title={
                <>
                  Od ploče do <span className="text-volt">prepoznatljivog</span> brenda.
                </>
              }
              align="wide"
              lead="Logo koji trenutno postoji samo u fajlu može postati stvar koja stoji na zidu, fasadi ili recepciji. Vi pošaljete logotip ili ideju, mi predlažemo materijal, dimenziju i način montaže."
            />

            <Reveal delay={0.18}>
              <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
                {materials.map((material, i) => (
                  <li key={material.name} className="group flex items-baseline gap-5 py-4">
                    <span className="label w-8 shrink-0 text-volt/80">0{i + 1}</span>
                    <span className="font-display text-lg uppercase tracking-tightest sm:text-xl">{material.name}</span>
                    <span className="ml-auto text-right text-xs text-bone/45 sm:text-sm">{material.note}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-8 max-w-[44ch] text-sm leading-relaxed text-bone/45">
                Izrada je uvijek po mjeri — dimenzije se prilagođavaju objektu, a ne obrnuto.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-6 lg:gap-6">
            <motion.figure style={{ y: y1 }} className="col-span-2 overflow-hidden border border-white/10">
              <Image
                src={asset('/placeholders/panel-print.svg')}
                alt="Placeholder vizual velikog reklamnog panela sa digitalnom štampom"
                width={1200}
                height={700}
                loading="lazy"
                className="h-auto w-full"
              />
              <figcaption className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                <span className="label">Reklamni panel</span>
                <span className="label text-volt">[PROJECT IMAGE]</span>
              </figcaption>
            </motion.figure>

            <motion.figure style={{ y: y2 }} className="overflow-hidden border border-white/10">
              <Image
                src={asset('/placeholders/panel-xps.svg')}
                alt="Placeholder vizual reklamnog elementa od XPS-a"
                width={1000}
                height={700}
                loading="lazy"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-white/10 px-4 py-3">
                <span className="label">XPS element</span>
              </figcaption>
            </motion.figure>

            <motion.figure style={{ y: y1 }} className="overflow-hidden border border-white/10">
              <Image
                src={asset('/placeholders/wall-logo.svg')}
                alt="Placeholder vizual logotipa montiranog na zid"
                width={1000}
                height={700}
                loading="lazy"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-white/10 px-4 py-3">
                <span className="label">Logo na zidu</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
