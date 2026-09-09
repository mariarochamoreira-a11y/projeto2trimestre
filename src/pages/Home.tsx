import {
  ShieldAlert,
  HeartPulse,
  ShieldCheck,
  Users,
  Scale,
  HandHeart,
  ArrowRight,
  Sparkles,
  Handshake,
  BookOpen,
  MessageCircleHeart,
  type LucideIcon,
} from 'lucide-react';
import { Carousel } from '@/components/Carousel';
import { Reveal } from '@/components/Reveal';
import { topics } from '@/data/content';
import {
  Squiggle,
  StarBurst,
  Sparkle,
  HeartDoodle,
  UnderlineHand,
  ZigZag,
  FlowerDoodle,
  CircleScribble,
} from '@/components/Doodles';

const iconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  HeartPulse,
  ShieldCheck,
  Users,
  Scale,
  HandHeart,
};

const accentMap: Record<string, { bg: string; text: string; border: string }> = {
  wine: {
    bg: 'bg-wine-100 dark:bg-wine-800/60',
    text: 'text-wine-600 dark:text-mustard',
    border: 'group-hover:border-wine-600',
  },
  sage: {
    bg: 'bg-sage/30 dark:bg-sage/20',
    text: 'text-sage',
    border: 'group-hover:border-sage',
  },
  mustard: {
    bg: 'bg-mustard/20 dark:bg-mustard/15',
    text: 'text-wine-600 dark:text-mustard',
    border: 'group-hover:border-mustard',
  },
  dusty: {
    bg: 'bg-dusty/30 dark:bg-dusty/20',
    text: 'text-wine-600 dark:text-dusty',
    border: 'group-hover:border-dusty',
  },
};

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="paper-bg">
      {/* HERO */}
      <section className="relative overflow-hidden pt-24 sm:pt-32">
        <StarBurst className="pointer-events-none absolute left-[5%] top-[18%] h-10 w-10 animate-float" style={{ '--rot': '-12deg' } as React.CSSProperties} />
        <Sparkle className="pointer-events-none absolute right-[8%] top-[12%] h-8 w-8 animate-bounce-small" />
        <CircleScribble className="pointer-events-none absolute right-[4%] bottom-[10%] h-20 w-20 animate-float text-wine-600/30" style={{ '--rot': '8deg' } as React.CSSProperties} />
        <FlowerDoodle className="pointer-events-none absolute left-[6%] bottom-[14%] h-12 w-12 animate-wiggle" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-2 lg:gap-14">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream-50 px-4 py-1.5 font-hand text-lg text-wine-600 shadow-sticker dark:bg-wine-800 dark:text-mustard">
              <Sparkles className="h-4 w-4" /> Projeto de Apoio ao Estudante
            </span>
            <h1 className="mt-5 font-display text-4xl font-black leading-[0.95] tracking-tight text-wine-600 dark:text-cream-50 sm:text-5xl lg:text-6xl">
              Portal de Apoio{' '}
              <span className="relative inline-block">
                ao Estudante
                <UnderlineHand className="absolute -bottom-2 left-0 h-4 w-full text-mustard sm:-bottom-3 sm:h-5" />
              </span>
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg text-ink-soft dark:text-cream-200">
              Bem-vindo. Aqui você encontra informações, orientações e apoio sobre situações
              vivenciadas no ambiente escolar. Um espaço de respeito, empatia e acolhimento —
              porque <strong className="font-semibold text-wine-600 dark:text-mustard">você não está sozinho</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('escuta')}
                className="group rounded-full border-2 border-ink bg-wine-600 px-6 py-3 font-display font-bold text-cream-50 shadow-sticker-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-wine-700 hover:shadow-[12px_12px_0_0_#2a2520] active:translate-x-0 active:translate-y-0 active:shadow-sticker"
              >
                <span className="flex items-center gap-2">
                  <MessageCircleHeart className="h-5 w-5" /> Portal de Escuta
                </span>
              </button>
              <button
                onClick={() => onNavigate('quiz')}
                className="group rounded-full border-2 border-ink bg-cream-50 px-6 py-3 font-display font-bold text-ink shadow-sticker-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-mustard hover:shadow-[12px_12px_0_0_#2a2520] active:translate-x-0 active:translate-y-0 active:shadow-sticker"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" /> Fazer o Quiz
                </span>
              </button>
            </div>
          </div>

          <div className="animate-scale-in">
            <Carousel />
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border-2 border-ink bg-cream-100 p-8 text-center shadow-sticker-lg dark:bg-wine-800 sm:p-12">
          <Squiggle className="absolute left-6 top-6 h-5 w-24 text-mustard" />
          <Sparkle className="absolute right-8 top-8 h-6 w-6 animate-wiggle" />
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border-2 border-ink bg-wine-600 text-cream-50 shadow-sticker">
            <Handshake className="h-8 w-8" />
          </span>
          <h2 className="mt-6 font-display text-2xl font-black text-ink dark:text-cream-50 sm:text-3xl">
            Um espaço feito para você
          </h2>
          <p className="mx-auto mt-4 max-w-3xl font-body text-lg text-ink-soft dark:text-cream-200">
            O Portal de Apoio ao Estudante existe para informar, acolher e orientar. Aqui você
            aprende a identificar situações de bullying e cyberbullying, cuida da sua saúde
            emocional e descobre que sempre existem pessoas e instituições preparadas para ajudar.
            Navegue com tranquilidade — este é um lugar seguro.
          </p>
        </Reveal>
      </section>

      {/* TOPICS */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Reveal className="mb-10 text-center">
          <h2 className="font-display text-3xl font-black text-wine-600 dark:text-cream-50 sm:text-4xl">
            Temas que cuidamos juntos
          </h2>
          <Squiggle className="mx-auto mt-2 h-4 w-28 text-mustard" />
          <p className="mx-auto mt-3 max-w-2xl font-body text-ink-soft dark:text-cream-200">
            Escolha um tema para conhecer mais. Cada um traz orientações práticas e formas de buscar apoio.
          </p>
        </Reveal>

        <div className="grid gap-5 stagger sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((t, i) => {
            const Icon = iconMap[t.icon] ?? ShieldAlert;
            const a = accentMap[t.accent] ?? accentMap.wine;
            return (
              <article
                key={t.id}
                className={`sticker group rounded-2xl border-2 border-ink ${a.bg} p-6 ${a.border}`}
                style={{ transform: `rotate(${i % 2 === 0 ? '-0.6deg' : '0.6deg'})` }}
              >
                <span className={`grid h-12 w-12 place-items-center rounded-xl border-2 border-ink bg-cream-50 ${a.text} transition-transform group-hover:scale-110 group-hover:rotate-6 dark:bg-wine-900`}>
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-lg font-black text-ink dark:text-cream-50">
                  {t.title}
                </h3>
                <p className="mt-2 font-body text-sm text-ink-soft dark:text-cream-200">{t.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border-2 border-ink bg-wine-600 p-8 text-center text-cream-50 shadow-sticker-lg sm:p-12">
          <StarBurst className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 animate-wiggle" />
          <HeartDoodle className="pointer-events-none absolute -bottom-2 -left-2 h-12 w-12" color="#d4a017" />
          <h2 className="font-display text-2xl font-black sm:text-3xl">
            Precisa conversar com alguém agora?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-body text-cream-100">
            O Portal de Escuta é um espaço simulado onde você pode escrever um desabafo e receber
            uma mensagem de acolhimento. Procure também um professor, pedagogo, familiar ou outro
            adulto de confiança.
          </p>
          <button
            onClick={() => onNavigate('escuta')}
            className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream-50 px-6 py-3 font-display font-bold text-wine-600 shadow-sticker-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-mustard hover:shadow-[12px_12px_0_0_#2a2520] active:translate-x-0 active:translate-y-0 active:shadow-sticker"
          >
            Ir para o Portal de Escuta <ArrowRight className="h-5 w-5" />
          </button>
        </Reveal>
      </section>

      <ZigZag className="mx-auto mb-10 h-5 w-40 text-ink/30" />
    </div>
  );
}
