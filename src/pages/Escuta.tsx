import { useState, useEffect } from 'react';
import {
  MessageCircleHeart,
  Send,
  Heart,
  Lightbulb,
  Users,
  School,
  Home as HomeIcon,
  Phone,
  CheckCircle2,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { motivationalPhrases } from '@/data/content';
import { Squiggle, HeartDoodle } from '@/components/Doodles';

const supportContacts = [
  {
    icon: School,
    title: 'Professor ou pedagogo',
    desc: 'Converse com um professor de sua confiança ou com a coordenação pedagógica da escola.',
  },
  {
    icon: Users,
    title: 'Direção da escola',
    desc: 'A direção pode mediar conflitos e acionar medidas de proteção coletiva.',
  },
  {
    icon: HomeIcon,
    title: 'Familiar ou adulto de confiança',
    desc: 'Um pai, mãe, irmão mais velho ou qualquer adulto em quem você confie pode apoiar você.',
  },
  {
    icon: Phone,
    title: 'Canais de ajuda profissional',
    desc: 'Disque 100 (crianças e adolescentes), Ligue 180 (mulheres) e CVV 188 (apoio emocional).',
  },
];

export function Escuta() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setPhraseIndex((i) => (i + 1) % motivationalPhrases.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length === 0) return;
    setSubmitted(true);
  };

  const reset = () => {
    setText('');
    setSubmitted(false);
  };

  return (
    <div className="paper-bg pt-24 sm:pt-32">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="animate-fade-in-up">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border-2 border-ink bg-wine-600 text-cream-50 shadow-sticker-lg animate-pulse-ring">
            <MessageCircleHeart className="h-8 w-8" />
          </span>
          <h1 className="mt-6 font-display text-4xl font-black text-wine-600 dark:text-cream-50 sm:text-5xl">
            Portal de Escuta
          </h1>
          <Squiggle className="mx-auto mt-2 h-4 w-28 text-mustard" />
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-ink-soft dark:text-cream-200">
            Este é um espaço seguro para você escrever o que sente. Ninguém vai ler além de você —
            é apenas uma simulação. Mas as palavras de acolhimento são verdadeiras.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <Reveal className="relative rounded-3xl border-2 border-ink bg-cream-50 p-6 shadow-sticker-lg dark:bg-wine-800 sm:p-8">
          <HeartDoodle className="absolute -right-4 -top-5 h-12 w-12 rotate-12" />
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="desabafo"
                className="mb-2 block font-display text-lg font-black text-ink dark:text-cream-50"
              >
                Escreva seu desabafo
              </label>
              <p className="mb-4 font-body text-sm text-ink-soft dark:text-cream-200">
                Compartilhe como você está se sentindo. Esta mensagem{' '}
                <strong className="font-semibold">não é enviada nem armazenada</strong> — é só um
                exercício de expressão para acolher suas emoções.
              </p>
              <textarea
                id="desabafo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={6}
                placeholder="Escreva aqui o que você está sentindo... não há certo ou errado, apenas o que vai no seu coração."
                className="w-full rounded-xl border-2 border-ink bg-cream-100 p-4 font-body text-ink transition focus:border-wine-600 focus:outline-none focus:ring-4 focus:ring-wine-200 dark:bg-wine-900 dark:text-cream-50 dark:focus:ring-wine-700"
              />
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="font-body text-xs text-ink-muted dark:text-cream-300">
                  {text.length} caracteres
                </span>
                <button
                  type="submit"
                  disabled={text.trim().length === 0}
                  className="group rounded-full border-2 border-ink bg-wine-600 px-6 py-3 font-display font-bold text-cream-50 shadow-sticker-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-wine-700 hover:shadow-[12px_12px_0_0_#2a2520] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-sticker-lg"
                >
                  <span className="flex items-center gap-2">
                    <Send className="h-5 w-5" /> Enviar desabafo
                  </span>
                </button>
              </div>
            </form>
          ) : (
            <div className="animate-scale-in text-center">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-ink bg-mustard text-ink shadow-sticker animate-pop-in">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h2 className="mt-5 font-display text-2xl font-black text-ink dark:text-cream-50">
                Recebemos seu desabafo
              </h2>
              <p className="mx-auto mt-3 max-w-lg font-body text-ink-soft dark:text-cream-200">
                Obrigado por confiar suas palavras a este espaço. Lembre-se: o que você sente é
                válido e merece atenção. Você deu um passo importante ao colocar seus sentimentos
                para fora — isso já é uma forma de cuidado.
              </p>
              <div className="mt-6 rounded-2xl border-2 border-ink bg-wine-600 p-5 text-cream-50 shadow-sticker">
                <p className="font-hand text-xl sm:text-2xl">
                  "Você não precisa carregar tudo sozinho. Há pessoas preparadas para ouvir e ajudar
                  você — procure um adulto de confiança."
                </p>
              </div>
              <button
                onClick={reset}
                className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream-50 px-5 py-2.5 font-display font-bold text-wine-600 shadow-sticker transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-mustard dark:bg-wine-700 dark:text-cream-50"
              >
                <RefreshCw className="h-4 w-4" /> Escrever novamente
              </button>
            </div>
          )}
        </Reveal>
        <p className="mt-3 text-center font-body text-xs text-ink-muted dark:text-cream-300">
          <strong>Simulação:</strong> nenhuma informação é coletada, enviada ou armazenada.
        </p>
      </section>

      {/* Motivational phrases */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border-2 border-ink bg-mustard/20 p-8 text-center shadow-sticker-lg dark:bg-wine-800 sm:p-10">
          <Sparkles className="mx-auto h-8 w-8 text-mustard" />
          <div className="relative mt-4 min-h-[3.5rem]">
            <p
              key={phraseIndex}
              className="animate-fade-in font-hand text-xl font-semibold text-wine-600 dark:text-mustard sm:text-2xl"
            >
              "{motivationalPhrases[phraseIndex]}"
            </p>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {motivationalPhrases.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 rounded-full border border-ink transition-all duration-300 ${
                  i === phraseIndex ? 'w-6 bg-wine-600' : 'w-2.5 bg-cream-50'
                }`}
              />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Orientations */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Reveal className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-cream-50 px-4 py-1.5 font-hand text-lg text-wine-600 shadow-sticker dark:bg-wine-800 dark:text-mustard">
            <Lightbulb className="h-4 w-4" /> Orientações
          </span>
          <h2 className="mt-4 font-display text-3xl font-black text-wine-600 dark:text-cream-50">
            Quem procurar quando precisar de ajuda
          </h2>
          <Squiggle className="mx-auto mt-2 h-4 w-28 text-mustard" />
          <p className="mx-auto mt-3 max-w-2xl font-body text-ink-soft dark:text-cream-200">
            Pedir ajuda é um sinal de força. Conheça as pessoas e serviços que podem apoiar você.
          </p>
        </Reveal>

        <div className="grid gap-5 stagger sm:grid-cols-2 lg:grid-cols-4">
          {supportContacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="sticker group rounded-2xl border-2 border-ink bg-cream-50 p-6 dark:bg-wine-800"
                style={{ transform: `rotate(${i % 2 === 0 ? '-0.8deg' : '0.8deg'})` }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl border-2 border-ink bg-wine-600 text-cream-50 transition-transform group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display font-black text-ink dark:text-cream-50">{c.title}</h3>
                <p className="mt-2 font-body text-sm text-ink-soft dark:text-cream-200">{c.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Reassurance */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6">
        <Reveal className="flex items-center gap-4 rounded-2xl border-2 border-ink bg-wine-600 p-6 text-cream-50 shadow-sticker-lg">
          <Heart className="h-10 w-10 shrink-0" />
          <p className="font-body">
            <strong className="font-semibold">Lembre-se:</strong> você merece ser tratado com
            respeito e cuidado. Se algo te machuca, falar sobre isso é o primeiro passo para que
            as coisas melhorem. Você não está sozinho nesta jornada.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
