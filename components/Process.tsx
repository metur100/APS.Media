'use client';

import Image from 'next/image';
import { processSteps } from '@/data/process';
import { asset } from '@/lib/asset';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section id="o-nama" aria-labelledby="proces-naslov" className="border-t border-white/10 py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <SectionHeading
          label="05 — Proces"
          id="proces-naslov"
          title={
            <>
              Od ideje do <span className="text-volt">gotove reklame.</span>
            </>
          }
          lead="Četiri koraka koja se ne dijele na više firmi. Skica, vizual, izrada i montaža ostaju u istim rukama."
          className="max-w-4xl"
        />
      </div>

      <div className="mt-16 sm:mt-20">
        <ol className="shell grid gap-px border border-white/12 bg-white/12 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.index}
              delay={i * 0.07}
              className={`relative flex flex-col bg-ink p-5 sm:p-6 ${i % 2 === 1 ? 'lg:pt-16' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-[3.4rem] leading-none tracking-tightest text-volt sm:text-[4.2rem]">
                  {step.index}
                </span>
                <span className="label">{step.note}</span>
              </div>

              <h3 className="mt-4 font-display text-2xl uppercase tracking-tightest sm:text-3xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone/60">{step.text}</p>

              <div className="mt-6 overflow-hidden border border-white/10">
                <Image
                  src={asset(step.image)}
                  alt={step.alt}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>

              {i < processSteps.length - 1 && (
                <span aria-hidden className="label mt-5 hidden text-volt lg:block">
                  →
                </span>
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
