'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Film, Image as ImageIcon, LayoutTemplate, Sparkles } from 'lucide-react';
import { asset } from '@/lib/asset';
import { easeStudio } from '@/lib/motion';
import Reveal from './Reveal';

const capabilities = [
  { icon: LayoutTemplate, title: 'Grafički dizajn', text: 'Vizuali za štampu i ekran, u istom vizualnom jeziku.' },
  { icon: ImageIcon, title: 'Social vizuali', text: 'Objave, story formati, reklamni baneri.' },
  { icon: Film, title: 'Video', text: 'Promo video, montaža, kratke forme i reels.' },
  { icon: Sparkles, title: 'Kampanje', text: 'Digitalni materijal usklađen sa fizičkom reklamom.' },
];

export default function DigitalCreative() {
  const reduce = useReducedMotion();

  return (
    <section aria-labelledby="digital-naslov" className="relative border-t border-white/10 bg-bone py-24 text-ink sm:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-4">
              <span aria-hidden className="h-px w-8 bg-volt sm:w-14" />
              <span className="text-[0.625rem] font-medium uppercase tracking-label text-ink/50 sm:text-[0.6875rem]">
                04 — Digitalna produkcija
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 id="digital-naslov" className="mt-6 max-w-[20ch] display-lg text-ink">
                A reklama ne mora biti <span className="text-volt">samo na zidu.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="lg:col-span-5">
            <p className="max-w-[46ch] text-base leading-relaxed text-ink/65 sm:text-lg">
              Isti brend treba da funkcioniše i na telefonu. Radimo vizuale, banere i video materijale koji nastavljaju
              priču započetu na tabli ili fasadi.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:mt-20 lg:grid-cols-12 lg:gap-6">
          <motion.figure
            initial={reduce ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: easeStudio }}
            className="overflow-hidden border border-ink/12 bg-white lg:col-span-7"
          >
            <Image
              src={asset('/images/video-frame.webp')}
              alt=""
              width={1200}
              height={675}
              loading="lazy"
              className="h-auto w-full"
            />
            <figcaption className="flex items-center justify-between border-t border-ink/12 px-4 py-3">
              <span className="text-[0.625rem] uppercase tracking-label text-ink/50">Promo video — kadar</span>
              <span className="text-[0.625rem] uppercase tracking-label text-volt">16:9 / 9:16</span>
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={reduce ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.08, ease: easeStudio }}
            className="overflow-hidden border border-ink/12 bg-white lg:col-span-5"
          >
            <Image
              src={asset('/images/social-post.webp')}
              alt=""
              width={800}
              height={800}
              loading="lazy"
              className="h-auto w-full"
            />
            <figcaption className="flex items-center justify-between border-t border-ink/12 px-4 py-3">
              <span className="text-[0.625rem] uppercase tracking-label text-ink/50">Social objava</span>
              <span className="text-[0.625rem] uppercase tracking-label text-volt">1:1</span>
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={reduce ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.16, ease: easeStudio }}
            className="overflow-hidden border border-ink/12 bg-white lg:col-span-12"
          >
            <Image
              src={asset('/images/banner.webp')}
              alt=""
              width={1200}
              height={500}
              loading="lazy"
              className="h-auto w-full"
            />
            <figcaption className="border-t border-ink/12 px-4 py-3">
              <span className="text-[0.625rem] uppercase tracking-label text-ink/50">Reklamni baner — placeholder</span>
            </figcaption>
          </motion.figure>
        </div>

        <ul className="mt-14 grid gap-px border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 0.05} className="bg-bone p-6 sm:p-7">
              <item.icon size={20} aria-hidden className="text-volt" />
              <h3 className="mt-5 font-display text-xl uppercase tracking-tightest text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
