import type { ReactNode } from 'react';
import Reveal from './Reveal';

type Props = {
  label: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  align?: 'left' | 'wide';
  className?: string;
};

export default function SectionHeading({ label, title, lead, id, align = 'left', className = '' }: Props) {
  return (
    <div className={className}>
      <Reveal className="flex items-center gap-4">
        <span aria-hidden className="h-px w-8 bg-volt sm:w-14" />
        <span className="label text-bone/60">{label}</span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 id={id} className={`mt-6 display-lg ${align === 'wide' ? 'max-w-[22ch]' : 'max-w-[16ch]'}`}>
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.12}>
          <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-bone/60 sm:text-lg">{lead}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
