'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'solid' | 'ghost';
  className?: string;
  ariaLabel?: string;
};

export default function MagneticButton({ href, children, variant = 'solid', className = '', ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setOffset({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 14,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 10,
    });
  };

  const styles =
    variant === 'solid'
      ? 'bg-volt text-black hover:bg-white'
      : 'border border-white/25 text-bone hover:border-volt hover:text-volt';

  return (
    <motion.a
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: 'spring', stiffness: 220, damping: 18, mass: 0.4 }}
      className={`inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 px-7 text-[0.6875rem] font-semibold uppercase tracking-label transition-colors duration-500 ease-studio ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
