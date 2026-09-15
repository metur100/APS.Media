'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { easeStudio } from '@/lib/motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <a
        href="#glavni-sadrzaj"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-volt focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:uppercase focus:tracking-label focus:text-black"
      >
        Preskoči na sadržaj
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-studio ${
          scrolled ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <div className={`shell flex items-center justify-between transition-all duration-500 ease-studio ${scrolled ? 'h-16' : 'h-20 sm:h-24'}`}>
          <a href="#pocetna" className="group flex items-baseline gap-2" aria-label="APS Media — početna">
            <span className="font-display text-xl uppercase leading-none tracking-tightest sm:text-2xl">APS</span>
            <span className="font-display text-xl uppercase leading-none tracking-tightest text-volt sm:text-2xl">MEDIA</span>
          </a>

          <nav aria-label="Glavna navigacija" className="hidden items-center gap-9 lg:flex">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="link-underline label text-bone/70 transition-colors hover:text-bone">
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="inline-flex min-h-[2.75rem] items-center gap-2 bg-volt px-6 text-[0.6875rem] font-semibold uppercase tracking-label text-black transition-colors duration-500 ease-studio hover:bg-white"
            >
              Pošalji upit <ArrowUpRight size={14} aria-hidden />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-bone lg:hidden"
            aria-label="Otvori meni"
            aria-expanded={open}
            aria-controls="mobilni-meni"
          >
            <Menu size={18} aria-hidden />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobilni-meni"
            role="dialog"
            aria-modal="true"
            aria-label="Meni"
            initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
            exit={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: easeStudio }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink-900 lg:hidden"
          >
            <div className="shell flex h-20 items-center justify-between">
              <span className="font-display text-xl uppercase tracking-tightest">
                APS <span className="text-volt">MEDIA</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center border border-white/20"
                aria-label="Zatvori meni"
              >
                <X size={18} aria-hidden />
              </button>
            </div>

            <nav aria-label="Mobilna navigacija" className="shell flex flex-1 flex-col justify-center">
              <ul className="space-y-1">
                {site.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? {} : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.5, ease: easeStudio }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between py-5 font-display text-[2.6rem] uppercase leading-none tracking-tightest"
                    >
                      {item.label}
                      <span className="label text-volt">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="shell pb-10">
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="flex min-h-[3.5rem] items-center justify-center gap-2 bg-volt text-[0.75rem] font-semibold uppercase tracking-label text-black"
              >
                Pošalji upit <ArrowUpRight size={15} aria-hidden />
              </a>
              <p className="mt-5 label">
                {site.address.street} — {site.address.city}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
