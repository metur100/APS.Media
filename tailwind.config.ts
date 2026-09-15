import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0a',
          900: '#0d0d0e',
          800: '#141416',
          700: '#1c1c1f',
          600: '#26262a',
        },
        bone: '#f4f2ee',
        volt: {
          DEFAULT: '#ff4d00',
          soft: '#ff7a33',
        },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        label: '0.22em',
      },
      maxWidth: { shell: '1680px' },
      transitionTimingFunction: {
        studio: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '42%': { opacity: '1' },
          '43%': { opacity: '0.45' },
          '45%': { opacity: '1' },
          '46%': { opacity: '0.7' },
          '48%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
      },
      animation: {
        flicker: 'flicker 6s linear infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
