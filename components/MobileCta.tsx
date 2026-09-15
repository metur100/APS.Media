'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { site } from '@/data/site';

export default function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 flex gap-px border-t border-white/12 bg-ink/95 backdrop-blur-lg transition-transform duration-500 ease-studio sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={site.contact.phoneHref}
        className="flex min-h-[3.5rem] flex-1 items-center justify-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-label text-bone"
      >
        <Phone size={14} aria-hidden /> Pozovi
      </a>
      <a
        href="#kontakt"
        className="flex min-h-[3.5rem] flex-[1.4] items-center justify-center gap-2 bg-volt text-[0.6875rem] font-semibold uppercase tracking-label text-black"
      >
        Pošalji upit <ArrowUpRight size={14} aria-hidden />
      </a>
    </div>
  );
}
