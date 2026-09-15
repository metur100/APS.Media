'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { asset } from '@/lib/asset';
import { easeStudio } from '@/lib/motion';
import Reveal from './Reveal';

const examples = [
  { src: '/images/led-letters.webp', alt: '', title: 'LED slova' },
  { src: '/images/led-logo.webp', alt: '', title: 'Svjetleći logo' },
  { src: '/images/reception.webp', alt: '', title: 'Recepcija' },
  { src: '/images/storefront.webp', alt: '', title: 'Izlog' },
];

export default function SignageShowcase() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="led-naslov" className="relative overflow-hidden border-t border-white/10 bg-black py-24 sm:py-32 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[60vh]">
        <div className="absolute left-1/2 top-[18%] h-[38vh] w-[70vw] -translate-x-1/2 rounded-full bg-volt/18 blur-[130px]" />
      </div>

      <div className="shell relative">
        <Reveal className="text-center">
          <p className="label justify-center">03 — LED &amp; 3D natpisi</p>
        </Reveal>

        <motion.h2
          id="led-naslov"
          initial={reduce ? {} : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: easeStudio }}
          className="mt-10 text-center display-xl"
        >
          <span className={`neon ${reduce ? '' : 'animate-flicker'} text-white`}>APS MEDIA</span>
        </motion.h2>

        <Reveal delay={0.12} className="mt-8 text-center">
          <p className="mx-auto max-w-[44ch] text-base leading-relaxed text-bone/55 sm:text-lg">
            Ovako izgleda natpis koji radi i kad padne mrak. Isti princip primjenjujemo na vaš logotip — u dubini,
            sa LED osvjetljenjem i montažom na mjeru.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {examples.map((item, i) => (
            <Reveal key={item.src} delay={i * 0.07}>
              <figure className="group relative overflow-hidden border border-white/12 bg-ink-900">
                <Image
                  src={asset(item.src)}
                  alt={item.alt}
                  width={1000}
                  height={700}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-[900ms] ease-studio group-hover:scale-[1.05]"
                />
                <figcaption className="flex items-center justify-between border-t border-white/10 px-3 py-3">
                  <span className="label text-bone/70">{item.title}</span>
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_12px_2px_rgba(255,77,0,0.8)]" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
