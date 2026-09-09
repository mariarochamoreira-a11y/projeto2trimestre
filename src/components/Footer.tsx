import { HeartHandshake, Phone, Mail } from 'lucide-react';
import { helplines } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { Squiggle, HeartDoodle } from '@/components/Doodles';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="mt-20 border-t-2 border-ink bg-cream-100 dark:border-ink/30 dark:bg-wine-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal className="mb-8 text-center">
          <h2 className="font-display text-3xl font-black text-wine-600 dark:text-cream-50">
            Canais de Ajuda
          </h2>
          <Squiggle className="mx-auto mt-2 h-4 w-24 text-mustard" />
          <p className="mt-3 font-body text-ink-soft dark:text-cream-200">
            Se você ou alguém que você conhece precisa de ajuda, ligue. É gratuito e anônimo.
          </p>
        </Reveal>

        <div className="grid gap-4 stagger sm:grid-cols-2 lg:grid-cols-4">
          {helplines.map((h) => {
            const isUrl = h.number.includes('.');
            return (
              <a
                key={h.name}
                href={isUrl ? `https://${h.number}` : `tel:${h.number}`}
                target={isUrl ? '_blank' : undefined}
                rel={isUrl ? 'noopener noreferrer' : undefined}
                className="sticker group block rounded-2xl border-2 border-ink bg-cream-50 p-5 hover:bg-cream-100 dark:bg-wine-800 dark:hover:bg-wine-700"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border-2 border-ink bg-wine-600 text-cream-50">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="font-display text-lg font-black text-wine-600 dark:text-mustard">
                    {h.number}
                  </span>
                </div>
                <p className="font-display font-bold text-ink dark:text-cream-100">{h.name}</p>
                <p className="mt-1 font-body text-sm text-ink-soft dark:text-cream-200">{h.desc}</p>
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t-2 border-ink/15 dark:border-ink/30">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-lg border-2 border-ink bg-wine-600 text-cream-50">
              <HeartHandshake className="h-5 w-5" />
            </span>
            <span className="font-display font-bold text-ink dark:text-cream-100">
              Portal de Apoio ao Estudante
            </span>
          </div>
          <p className="font-body text-sm text-ink-soft dark:text-cream-200">
            Projeto educativo — informações e acolhimento para a comunidade escolar.
          </p>
          <div className="flex items-center gap-4 font-body text-sm">
            <button
              onClick={() => onNavigate('referencias')}
              className="font-semibold text-wine-600 hover:underline dark:text-mustard"
            >
              Referências
            </button>
            <a
              href="mailto:contato@portaapoio.edu.br"
              className="flex items-center gap-1 text-ink-soft hover:text-wine-600 dark:text-cream-200 dark:hover:text-mustard"
            >
              <Mail className="h-4 w-4" /> Contato
            </a>
          </div>
        </div>
        <p className="flex items-center justify-center gap-1.5 pb-6 font-body text-xs text-ink-muted dark:text-cream-300">
          Você não está sozinho. Sempre há alguém pronto para ouvir.
          <HeartDoodle className="h-4 w-4" color="#6d1f2c" />
        </p>
      </div>
    </footer>
  );
}
