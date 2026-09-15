import type { Variants } from 'framer-motion';

export const easeStudio = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeStudio } },
};

export const stagger = (staggerChildren = 0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren } },
});

export const maskLine: Variants = {
  hidden: { y: '110%' },
  show: { y: '0%', transition: { duration: 0.95, ease: easeStudio } },
};

export const viewportOnce = { once: true, amount: 0.25 } as const;
