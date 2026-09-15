'use client';

import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Play } from 'lucide-react';
import { useRef } from 'react';
import { asset } from '@/lib/asset';
import { easeStudio } from '@/lib/motion';

const lines = ['TVOJ BREND.', 'NAŠA', 'PRODUKCIJA.'];

const floaters = [
  {
    src: '/placeholders/hero-sign.svg',
    alt: 'Placeholder vizual svjetlećeg natpisa APS Media',
    className: 'right-[-6%] top-[12%] w-[62%] sm:right-[2%] sm:w-[42%] lg:right-[4%] lg:top-[14%] lg:w-[30%]',
    depth: 90,
  },
  {
    src: '/placeholders/letters-3d.svg',
    alt: 'Placeholder vizual 3D slova',
    className: 'left-[-8%] top-[52%] w-[50%] sm:left-[2%] sm:w-[32%] lg:left-[3%] lg:top-[46%] lg:w-[20%]',
    depth: -70,
  },
  {
    src: '/placeholders/panel-print.svg',
    alt: 'Placeholder vizual reklamnog panela',
    className: 'hidden lg:block right-[16%] bottom-[6%] w-[22%]',
    depth: 50,
  },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0.15]);

  return (
    <section
      ref={ref}
      id="pocetna"
      aria-labelledby="hero-naslov"
      className="grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-32 sm:pb-14 sm:pt-36"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[38%] h-[46vh] w-[86vw] -translate-x-1/2 rounded-full bg-volt/14 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)',
            backgroundSize: 'clamp(70px, 12vw, 160px) clamp(70px, 12vw, 160px)',
          }}
        />
      </div>

      {floaters.map((item) => (
        <Floater key={item.src} {...item} progress={scrollYProgress} reduce={!!reduce} />
      ))}

      <div className="shell relative z-10 w-full">
        <motion.p
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="label flex flex-wrap items-center gap-x-3 gap-y-1"
        >
          <span className="text-volt">APS MEDIA</span>
          <span aria-hidden className="text-bone/25">/</span>
          <span>TEŠANJ</span>
          <span aria-hidden className="text-bone/25">/</span>
          <span>ADVERTISING &amp; CREATIVE</span>
        </motion.p>

        <motion.h1 id="hero-naslov" style={{ y: yText, opacity }} className="mt-8 display-xl sm:mt-10">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={reduce ? {} : { y: '108%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.2 + i * 0.12, ease: easeStudio }}
              >
                {i === 2 ? (
                  <>
                    <span className="text-volt">PRO</span>DUKCIJA.
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <div className="mt-10 grid gap-8 border-t border-white/12 pt-8 lg:grid-cols-12 lg:items-end">
          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeStudio }}
            className="max-w-[46ch] text-base leading-relaxed text-bone/65 sm:text-lg lg:col-span-5"
          >
            Reklamne table, svjetleći natpisi, 3D slova, branding prostora, grafički dizajn i video. Od prve skice do
            montirane reklame — na jednom mjestu.
          </motion.p>

          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.72, ease: easeStudio }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center lg:col-span-5 lg:col-start-8 lg:justify-end"
          >
            <a
              href="#kontakt"
              className="inline-flex min-h-[3.5rem] items-center justify-center gap-2 bg-volt px-8 text-[0.75rem] font-semibold uppercase tracking-label text-black transition-colors duration-500 ease-studio hover:bg-white"
            >
              Pošalji upit <ArrowUpRight size={16} aria-hidden />
            </a>
            <a
              href="#radovi"
              className="inline-flex min-h-[3.5rem] items-center justify-center gap-2 border border-white/25 px-8 text-[0.75rem] font-semibold uppercase tracking-label text-bone transition-colors duration-500 ease-studio hover:border-volt hover:text-volt"
            >
              <Play size={14} aria-hidden /> Pogledaj šta radimo
            </a>
          </motion.div>
        </div>

        <div className="mt-10 flex items-center gap-3 text-bone/40">
          <motion.span
            aria-hidden
            animate={reduce ? {} : { y: [0, 7, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex"
          >
            <ArrowDown size={15} />
          </motion.span>
          <span className="label">Skrolaj</span>
        </div>
      </div>
    </section>
  );
}

type FloaterProps = {
  src: string;
  alt: string;
  className: string;
  depth: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  reduce: boolean;
};

function Floater({ src, alt, className, depth, progress, reduce }: FloaterProps) {
  const y = useTransform(progress, [0, 1], [0, reduce ? 0 : depth]);

  return (
    <motion.div
      style={{ y }}
      initial={reduce ? {} : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.35, ease: easeStudio }}
      className={`pointer-events-none absolute z-0 border border-white/10 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] ${className}`}
    >
      <Image
        src={asset(src)}
        alt={alt}
        width={1200}
        height={800}
        priority
        className="h-auto w-full opacity-70 mix-blend-screen"
      />
    </motion.div>
  );
}
