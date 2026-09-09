import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroImages } from '@/data/content';

export function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % heroImages.length), []);
  const prev = () => setIndex((i) => (i - 1 + heroImages.length) % heroImages.length);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl border-2 border-ink bg-cream-100 shadow-sticker-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carrossel"
      aria-label="Imagens do portal de apoio"
    >
      <div
        className="carousel-track flex"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroImages.map((img, i) => (
          <figure key={img.url} className="relative w-full shrink-0" aria-hidden={i !== index}>
            <img
              src={img.url}
              alt={img.alt}
              className="h-[280px] w-full object-cover sm:h-[380px] md:h-[460px]"
              loading={i === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wine-900/80 via-wine-900/20 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              <p className="font-hand text-xl text-cream-50 drop-shadow-md sm:text-2xl">
                {img.caption}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-cream-50 p-2 text-ink shadow-sticker transition hover:bg-mustard focus:outline-none focus:ring-2 focus:ring-wine-400 sm:left-4"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border-2 border-ink bg-cream-50 p-2 text-ink shadow-sticker transition hover:bg-mustard focus:outline-none focus:ring-2 focus:ring-wine-400 sm:right-4"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {heroImages.map((img, i) => (
          <button
            key={img.url}
            onClick={() => setIndex(i)}
            className={`h-3 rounded-full border border-ink transition-all duration-300 ${
              i === index ? 'w-8 bg-mustard' : 'w-3 bg-cream-50/70 hover:bg-cream-50'
            }`}
            aria-label={`Ir para imagem ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
