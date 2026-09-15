'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { projects, projectCategories, type Project } from '@/data/projects';
import { asset } from '@/lib/asset';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ProjectModal from './ProjectModal';

const spanClass: Record<Project['span'], string> = {
  wide: 'sm:col-span-2 aspect-[16/10]',
  tall: 'aspect-[3/4] sm:row-span-2 sm:aspect-auto',
  square: 'aspect-[4/3]',
};

export default function Projects() {
  const [filter, setFilter] = useState<string>('Sve');
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === 'Sve' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="radovi" aria-labelledby="radovi-naslov" className="border-t border-white/10 bg-ink-900 py-24 sm:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            label="06 — Radovi"
            id="radovi-naslov"
            title={
              <>
                Ono što <span className="text-volt">radimo.</span>
              </>
            }
            className="lg:col-span-6"
          />
          <Reveal delay={0.1} className="lg:col-span-6">
            <p className="max-w-[50ch] text-sm leading-relaxed text-bone/55 sm:text-base">
              Prikazani vizuali su placeholderi koji predstavljaju tipove radova. Kako se projekti završavaju, ovdje
              dolaze stvarne fotografije izrađenih reklama.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="group" aria-label="Filter kategorija">
          {projectCategories.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                aria-pressed={isActive}
                className={`shrink-0 border px-4 py-2.5 text-[0.6875rem] uppercase tracking-label transition-colors duration-300 ${
                  isActive ? 'border-volt bg-volt text-black' : 'border-white/15 text-bone/60 hover:border-white/40 hover:text-bone'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {visible.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={Math.min(i * 0.05, 0.25)} className={spanClass[project.span]}>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="group relative h-full w-full overflow-hidden border border-white/10 text-left"
                aria-label={`Otvori projekat: ${project.title}`}
              >
                <Image
                  src={asset(project.image)}
                  alt={project.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1000ms] ease-studio group-hover:scale-[1.06]"
                />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                  <span>
                    <span className="label block text-volt">{project.category}</span>
                    <span className="mt-1.5 block font-display text-lg uppercase leading-tight tracking-tightest sm:text-xl">
                      {project.title}
                    </span>
                  </span>
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-white/30 transition-colors duration-500 group-hover:border-volt group-hover:bg-volt group-hover:text-black">
                    <Plus size={15} aria-hidden />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <AnimatePresence>{active && <ProjectModal project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
