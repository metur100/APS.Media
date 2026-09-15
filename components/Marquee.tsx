const words = [
  'REKLAMNE TABLE',
  'LED NATPISI',
  '3D SLOVA',
  'XPS ELEMENTI',
  'BRANDING PROSTORA',
  'GRAFIČKI DIZAJN',
  'PROMO VIDEO',
  'DIGITALNA ŠTAMPA',
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-white/10 bg-ink-800 py-4 sm:py-5" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform sm:gap-14">
        {[0, 1].map((pass) => (
          <div key={pass} className="flex gap-10 sm:gap-14">
            {words.map((word) => (
              <span key={`${pass}-${word}`} className="label flex items-center gap-10 text-bone/50 sm:gap-14">
                {word}
                <span className="text-volt">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
