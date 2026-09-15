import { ArrowUpRight, Phone } from 'lucide-react';
import { site } from '@/data/site';
import Reveal from './Reveal';
import MagneticButton from './MagneticButton';

export default function CTA() {
  return (
    <section aria-labelledby="cta-naslov" className="relative overflow-hidden border-t border-white/10 bg-volt py-24 text-black sm:py-32 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute -right-20 -top-24 select-none font-display text-[26vw] leading-none tracking-tightest text-black/10">
        APS
      </div>

      <div className="shell relative">
        <Reveal>
          <p className="text-[0.625rem] font-semibold uppercase tracking-label text-black/55 sm:text-[0.6875rem]">
            08 — Sljedeći korak
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 id="cta-naslov" className="mt-6 max-w-[18ch] display-lg text-black">
            Imaš ideju? Napravimo je vidljivom.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-[50ch] text-base leading-relaxed text-black/70 sm:text-lg">
            Pošalji nam logo, fotografiju objekta, skicu ili samo ideju. Zajedno ćemo pronaći rješenje — materijal,
            dimenziju i način izrade.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#kontakt" className="!bg-black !text-bone hover:!bg-ink-700">
              Pošalji upit <ArrowUpRight size={15} aria-hidden />
            </MagneticButton>
            <MagneticButton href={site.contact.phoneHref} variant="ghost" className="!border-black/35 !text-black hover:!border-black hover:!text-black">
              <Phone size={14} aria-hidden /> Pozovi nas
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
