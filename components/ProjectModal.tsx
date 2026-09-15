'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { asset } from '@/lib/asset';
import { easeStudio } from '@/lib/motion';

type Props = { project: Project; onClose: () => void };

export default function ProjectModal({ project, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[65] flex items-end justify-center sm:items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <button
        type="button"
        aria-label="Zatvori prikaz projekta"
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="projekat-naslov"
        initial={reduce ? {} : { y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={reduce ? {} : { y: 32, opacity: 0 }}
        transition={{ duration: 0.55, ease: easeStudio }}
        className="relative max-h-[92svh] w-full max-w-6xl overflow-y-auto border border-white/12 bg-ink-900"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-white/10 bg-ink-900/95 px-5 py-4 backdrop-blur sm:px-8">
          <span className="label text-volt">{project.category}</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-bone transition-colors hover:border-volt hover:text-volt"
            aria-label="Zatvori"
          >
            <X size={17} aria-hidden />
          </button>
        </div>

        <div className="grid lg:grid-cols-12">
          <div className="relative border-b border-white/10 lg:col-span-7 lg:border-b-0 lg:border-r">
            <Image
              src={asset(project.image)}
              alt={project.alt}
              width={1600}
              height={900}
              className="h-auto w-full"
            />
            {project.placeholder && (
              <span className="absolute left-4 top-4 bg-black/70 px-2.5 py-1.5 text-[0.625rem] uppercase tracking-label text-bone/70">
                Placeholder — zamjenjivo pravom fotografijom
              </span>
            )}
          </div>

          <div className="p-6 sm:p-9 lg:col-span-5">
            <h3 id="projekat-naslov" className="display-md">
              {project.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-bone/65">{project.description}</p>

            <h4 className="label mt-9">Korištene usluge</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <li key={service} className="border border-white/15 px-3 py-1.5 text-[0.6875rem] uppercase tracking-label text-bone/60">
                  {service}
                </li>
              ))}
            </ul>

            <a
              href="#kontakt"
              onClick={onClose}
              className="mt-10 inline-flex min-h-[3.25rem] items-center gap-2 bg-volt px-7 text-[0.6875rem] font-semibold uppercase tracking-label text-black transition-colors hover:bg-white"
            >
              Traži ovakvo rješenje <ArrowUpRight size={15} aria-hidden />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
