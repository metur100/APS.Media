'use client';

import { reasons } from '@/data/why';
import Reveal from './Reveal';

export default function WhyUs() {
  return (
    <section aria-labelledby="zasto-naslov" className="border-t border-white/10 py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal className="flex items-center gap-4">
              <span aria-hidden className="h-px w-8 bg-volt sm:w-14" />
              <span className="label">07 — Zašto APS Media</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 id="zasto-naslov" className="mt-6 display-lg">
                Jedna<br />
                <span className="text-volt">adresa.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-7 max-w-[38ch] text-base leading-relaxed text-bone/60">
                Dizajn i izrada ne moraju biti dva odvojena posla. Kod nas su jedan.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <dl className="mt-10 space-y-4 border-t border-white/12 pt-6 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="label">Registrovano</dt>
                  <dd className="text-bone/70">19.11.2025.</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="label">Sjedište</dt>
                  <dd className="text-bone/70">Tešanj, BiH</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="label">Fokus</dt>
                  <dd className="text-bone/70">B2B</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <ul className="grid gap-px bg-white/12 sm:grid-cols-2 lg:col-span-8">
            {reasons.map((reason, i) => (
              <Reveal as="li" key={reason.index} delay={i * 0.05} className="bg-ink p-6 sm:p-8">
                <span className="font-display text-[3.2rem] leading-none tracking-tightest text-bone/15 sm:text-[4rem]">
                  {reason.index}
                </span>
                <h3 className="mt-4 font-display text-xl uppercase tracking-tightest sm:text-2xl">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/60">{reason.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
