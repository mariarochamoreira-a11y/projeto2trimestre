import {
  BookMarked,
  ExternalLink,
  Landmark,
  GraduationCap,
  Stethoscope,
  ScrollText,
  Globe,
  Shield,
} from 'lucide-react';
import { references } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import { Squiggle, Sparkle } from '@/components/Doodles';

const typeIconMap: Record<string, typeof Landmark> = {
  'Site governamental': Landmark,
  'Instituição de ensino e pesquisa': GraduationCap,
  'Organização internacional': Globe,
  'Organização de saúde': Stethoscope,
  'Organização não governamental': Shield,
  'Cartilha educativa': ScrollText,
};

const typeColorMap: Record<string, string> = {
  'Site governamental': 'bg-wine-100 text-wine-600 dark:bg-wine-700 dark:text-mustard',
  'Instituição de ensino e pesquisa': 'bg-sage/30 text-sage',
  'Organização internacional': 'bg-mustard/25 text-wine-600 dark:text-mustard',
  'Organização de saúde': 'bg-dusty/30 text-wine-600 dark:text-dusty',
  'Organização não governamental': 'bg-cream-200 text-ink dark:bg-wine-700 dark:text-cream-100',
  'Cartilha educativa': 'bg-wine-100 text-wine-600 dark:bg-wine-700 dark:text-mustard',
};

export function Referencias() {
  return (
    <div className="paper-bg pt-24 sm:pt-32">
      <section className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="animate-fade-in-up">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border-2 border-ink bg-wine-600 text-cream-50 shadow-sticker-lg">
            <BookMarked className="h-8 w-8" />
          </span>
          <h1 className="mt-6 font-display text-4xl font-black text-wine-600 dark:text-cream-50 sm:text-5xl">
            Página de Referências
          </h1>
          <Squiggle className="mx-auto mt-2 h-4 w-28 text-mustard" />
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-ink-soft dark:text-cream-200">
            Todas as informações deste portal têm como base fontes confiáveis: sites governamentais,
            instituições de ensino, organizações de saúde e cartilhas educativas.
          </p>
        </div>
      </section>

      {/* Legend */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <Reveal className="flex flex-wrap justify-center gap-3">
          {Object.entries(typeColorMap).map(([type, cls]) => {
            const Icon = typeIconMap[type] ?? BookMarked;
            return (
              <span
                key={type}
                className={`inline-flex items-center gap-1.5 rounded-full border-2 border-ink px-3 py-1.5 font-body text-xs font-semibold ${cls}`}
              >
                <Icon className="h-3.5 w-3.5" /> {type}
              </span>
            );
          })}
        </Reveal>
      </section>

      {/* References grid */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="grid gap-4 stagger sm:grid-cols-2 lg:grid-cols-3">
          {references.map((r, i) => {
            const Icon = typeIconMap[r.type] ?? BookMarked;
            return (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="sticker group flex h-full flex-col rounded-2xl border-2 border-ink bg-cream-50 p-6 dark:bg-wine-800"
                style={{ transform: `rotate(${i % 3 === 0 ? '-0.7deg' : i % 3 === 1 ? '0.5deg' : '-0.3deg'})` }}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl border-2 border-ink ${typeColorMap[r.type] ?? 'bg-cream-200 text-ink'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <ExternalLink className="h-4 w-4 text-ink-muted transition group-hover:text-wine-600 dark:text-cream-300 dark:group-hover:text-mustard" />
                </div>
                <span className="font-body text-xs font-bold uppercase tracking-wide text-ink-muted dark:text-cream-300">
                  {r.type}
                </span>
                <h3 className="mt-1.5 font-display font-black text-ink transition group-hover:text-wine-600 dark:text-cream-50 dark:group-hover:text-mustard">
                  {r.title}
                </h3>
                <p className="mt-2 flex-1 font-body text-sm text-ink-soft dark:text-cream-200">{r.desc}</p>
                <span className="mt-4 truncate font-body text-xs text-wine-600 dark:text-mustard">
                  {r.url.replace(/^https?:\/\//, '')}
                </span>
              </a>
            );
          })}
        </div>
      </section>

      {/* Note */}
      <section className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Reveal className="relative rounded-2xl border-2 border-ink bg-cream-100 p-6 text-center shadow-sticker dark:bg-wine-800">
          <Sparkle className="absolute -right-2 -top-2 h-7 w-7 animate-wiggle" />
          <p className="font-body text-sm text-ink-soft dark:text-cream-200">
            As fontes listadas acima foram utilizadas como referência para o conteúdo deste portal.
            Em caso de dúvidas ou necessidade de ajuda, busque sempre um profissional ou instituição
            de confiança. <strong className="font-semibold text-wine-600 dark:text-mustard">Se estiver em situação de risco, ligue para 100, 180 ou 188.</strong>
          </p>
        </Reveal>
      </section>
    </div>
  );
}
