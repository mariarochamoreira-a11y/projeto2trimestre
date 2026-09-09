import { useState, useCallback } from 'react';
import {
  Brain,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  ChevronRight,
  Award,
  type LucideIcon,
} from 'lucide-react';
import { quizQuestions } from '@/data/content';
import { Reveal } from '@/components/Reveal';
import {
  Squiggle,
  StarBurst,
  ZigZag,
  HeartDoodle,
} from '@/components/Doodles';

type Stage = 'intro' | 'playing' | 'result';

const scoreFeedback = (score: number, total: number) => {
  const pct = (score / total) * 100;
  if (pct === 100)
    return {
      icon: Award,
      title: 'Perfeito! Você mandou muito bem!',
      msg: 'Você demonstrou um ótimo entendimento sobre respeito, empatia e cuidado. Compartilhe esse conhecimento com seus colegas!',
    };
  if (pct >= 60)
    return {
      icon: Trophy,
      title: 'Muito bem! Você acertou a maioria!',
      msg: 'Você já tem uma boa base. Que tal revisar os temas para fortalecer ainda mais seu conhecimento?',
    };
  return {
    icon: Brain,
    title: 'Continue aprendendo!',
    msg: 'O importante é buscar entender cada vez mais. Revise os temas do portal e tente novamente — cada resposta é uma nova descoberta.',
  };
};

export function Quiz() {
  const [stage, setStage] = useState<Stage>('intro');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const total = quizQuestions.length;
  const q = quizQuestions[current];

  const start = () => {
    setStage('playing');
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setShowExplanation(false);
  };

  const selectOption = useCallback(
    (i: number) => {
      if (selected !== null) return;
      setSelected(i);
      setShowExplanation(true);
      setAnswers((a) => [...a, i]);
    },
    [selected]
  );

  const next = () => {
    if (selected === null) return;
    setSelected(null);
    setShowExplanation(false);
    if (current + 1 < total) {
      setCurrent(current + 1);
    } else {
      setStage('result');
    }
  };

  const score = answers.reduce(
    (acc, a, i) => (a === quizQuestions[i].correct ? acc + 1 : acc),
    0
  );
  const fb = scoreFeedback(score, total);

  return (
    <div className="paper-bg pt-24 sm:pt-32">
      {/* Header */}
      <section className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="animate-fade-in-up">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border-2 border-ink bg-wine-600 text-cream-50 shadow-sticker-lg">
            <Brain className="h-8 w-8" />
          </span>
          <h1 className="mt-6 font-display text-4xl font-black text-wine-600 dark:text-cream-50 sm:text-5xl">
            Quiz Interativo
          </h1>
          <Squiggle className="mx-auto mt-2 h-4 w-28 text-mustard" />
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-ink-soft dark:text-cream-200">
            5 perguntas sobre respeito, bullying, cyberbullying e saúde emocional. Teste o que você
            aprendeu — e aprenda ainda mais com cada resposta!
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        {/* INTRO */}
        {stage === 'intro' && (
          <Reveal className="relative rounded-3xl border-2 border-ink bg-cream-50 p-8 text-center shadow-sticker-lg dark:bg-wine-800">
            <StarBurst className="absolute -right-3 -top-3 h-12 w-12 animate-wiggle" />
            <h2 className="font-display text-2xl font-black text-ink dark:text-cream-50">
              Pronto para começar?
            </h2>
            <ul className="mx-auto mt-5 max-w-md space-y-2 text-left font-body text-ink-soft dark:text-cream-200">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-wine-600 dark:text-mustard" /> 5 perguntas de múltipla escolha
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-wine-600 dark:text-mustard" /> Veja a explicação após cada resposta
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-wine-600 dark:text-mustard" /> Descubra seu placar final
              </li>
            </ul>
            <button
              onClick={start}
              className="group mt-7 rounded-full border-2 border-ink bg-wine-600 px-8 py-3.5 font-display text-lg font-bold text-cream-50 shadow-sticker-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-wine-700 hover:shadow-[12px_12px_0_0_#2a2520] active:translate-x-0 active:translate-y-0 active:shadow-sticker"
            >
              <span className="flex items-center gap-2">
                Começar quiz <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </Reveal>
        )}

        {/* PLAYING */}
        {stage === 'playing' && (
          <div className="animate-fade-in">
            {/* progress stamps */}
            <div className="mb-6 flex items-center justify-between gap-2">
              <span className="font-hand text-xl text-wine-600 dark:text-mustard">
                pergunta {current + 1}
                <span className="text-ink-muted dark:text-cream-300">/{total}</span>
              </span>
              <div className="flex items-center gap-2">
                {quizQuestions.map((qq, i) => (
                  <div key={qq.id}>
                    {i < current ? (
                      <span
                        className="grid h-7 w-7 animate-stamp-in place-items-center rounded-full border-2 border-ink bg-wine-600 text-cream-50"
                        style={{ transform: 'rotate(-12deg)' }}
                      >
                        ✓
                      </span>
                    ) : i === current ? (
                      <span className="grid h-8 w-8 animate-bounce-small place-items-center rounded-full border-2 border-ink bg-mustard text-ink shadow-sticker">
                        {i + 1}
                      </span>
                    ) : (
                      <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-ink/40 bg-cream-100 font-body text-xs font-bold text-ink-muted dark:bg-wine-800 dark:text-cream-300">
                        {i + 1}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div key={current} className="q-enter">
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border-2 border-ink bg-mustard font-display text-xl font-black text-ink shadow-sticker">
                  {current + 1}
                </span>
                <span className="rounded-full border-2 border-ink/40 bg-cream-100 px-3 py-0.5 font-body text-xs font-bold text-wine-600 dark:bg-wine-800 dark:text-mustard">
                  {q.category}
                </span>
              </div>

              <h2 className="font-display text-2xl font-black leading-tight text-ink dark:text-cream-50 sm:text-3xl">
                {q.question}
              </h2>
              <Squiggle className="mt-3 h-4 w-24 text-wine-600 dark:text-mustard" />

              {/* options */}
              <div className="mt-8 space-y-3">
                {q.options.map((opt, i) => {
                  const isSelected = selected === i;
                  const reveal = selected !== null;
                  const isCorrect = i === q.correct;
                  let cls =
                    'border-ink bg-cream-50 shadow-sticker hover:-translate-x-1 hover:-translate-y-1 hover:bg-cream-100 hover:shadow-sticker-lg dark:bg-wine-800';
                  if (reveal && isCorrect) {
                    cls = 'border-ink bg-sage/30 shadow-sticker-lg dark:bg-sage/20';
                  } else if (reveal && isSelected && !isCorrect) {
                    cls = 'border-ink bg-dusty/40 shadow-sticker-lg dark:bg-dusty/20';
                  } else if (reveal) {
                    cls = 'border-ink/20 bg-cream-100 opacity-60 dark:bg-wine-800';
                  }
                  return (
                    <button
                      key={i}
                      onClick={() => selectOption(i)}
                      disabled={reveal}
                      className={`group relative flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-300 ${cls} ${
                        !reveal ? 'cursor-pointer' : 'cursor-default'
                      }`}
                    >
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl border-2 border-ink font-display text-lg font-black transition ${
                          reveal && isCorrect
                            ? 'bg-sage text-cream-50'
                            : reveal && isSelected && !isCorrect
                            ? 'bg-dusty text-cream-50'
                            : 'bg-cream-200 text-ink group-hover:bg-mustard dark:bg-wine-700 dark:text-cream-50'
                        }`}
                      >
                        {reveal && isCorrect ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : reveal && isSelected && !isCorrect ? (
                          <XCircle className="h-5 w-5" />
                        ) : (
                          String.fromCharCode(65 + i)
                        )}
                      </span>
                      <span className="font-body text-base font-medium text-ink dark:text-cream-100 sm:text-lg">
                        {opt}
                      </span>
                      {isSelected && (
                        <span className="absolute -right-3 -top-3 grid h-9 w-9 animate-pop-in place-items-center rounded-full border-2 border-ink bg-mustard text-ink shadow-sticker">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="mt-5 animate-fade-in-up rounded-2xl border-2 border-ink bg-cream-100 p-4 dark:bg-wine-800">
                  <p className="font-body text-sm text-ink dark:text-cream-100">
                    <strong className="font-semibold text-wine-600 dark:text-mustard">
                      {selected === q.correct ? 'Resposta correta! ' : 'Quase! '}
                    </strong>
                    {q.explanation}
                  </p>
                </div>
              )}

              {showExplanation && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={next}
                    className="group rounded-full border-2 border-ink bg-wine-600 px-6 py-3 font-display font-bold text-cream-50 shadow-sticker-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-wine-700 hover:shadow-[12px_12px_0_0_#2a2520] active:translate-x-0 active:translate-y-0 active:shadow-sticker"
                  >
                    <span className="flex items-center gap-2">
                      {current + 1 < total ? 'Próxima pergunta' : 'Ver resultado'}
                      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* RESULT */}
        {stage === 'result' && (() => {
          const Icon: LucideIcon = fb.icon;
          return (
            <Reveal className="overflow-hidden rounded-3xl border-2 border-ink bg-cream-50 shadow-sticker-lg dark:bg-wine-800">
              <div className="relative bg-wine-600 p-8 text-center text-cream-50">
                <StarBurst className="pointer-events-none absolute -right-2 -top-2 h-14 w-14 animate-wiggle" />
                <HeartDoodle className="pointer-events-none absolute -bottom-2 -left-2 h-10 w-10" color="#d4a017" />
                <span className="mx-auto grid h-20 w-20 animate-pop-in place-items-center rounded-full border-2 border-ink bg-mustard text-ink shadow-sticker-lg">
                  <Icon className="h-10 w-10" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-black sm:text-3xl">{fb.title}</h2>
                <p className="mx-auto mt-3 max-w-md font-body text-cream-100">{fb.msg}</p>
                <div className="mx-auto mt-6 inline-flex items-baseline gap-2 rounded-2xl border-2 border-ink bg-cream-50 px-8 py-4 shadow-sticker-lg">
                  <span className="font-display text-5xl font-black text-wine-600">{score}</span>
                  <span className="font-display text-xl font-bold text-ink-muted">/ {total}</span>
                </div>
                <p className="mt-2 font-body text-sm font-medium text-cream-100">
                  Você acertou {score} de {total} perguntas
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="mb-4 font-display text-lg font-black text-ink dark:text-cream-50">
                  Revisão das respostas
                </h3>
                <ul className="space-y-3">
                  {quizQuestions.map((qq, i) => {
                    const correct = answers[i] === qq.correct;
                    return (
                      <li
                        key={qq.id}
                        className={`flex items-start gap-3 rounded-xl border-2 p-3 ${
                          correct
                            ? 'border-ink bg-sage/20 dark:bg-sage/15'
                            : 'border-ink bg-dusty/25 dark:bg-dusty/15'
                        }`}
                      >
                        {correct ? (
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sage" />
                        ) : (
                          <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-wine-600" />
                        )}
                        <div>
                          <p className="font-body text-sm font-semibold text-ink dark:text-cream-50">
                            {i + 1}. {qq.category}
                          </p>
                          <p className="font-body text-sm text-ink-soft dark:text-cream-200">
                            Resposta correta: {qq.options[qq.correct]}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="flex justify-center pb-8">
                <button
                  onClick={start}
                  className="group rounded-full border-2 border-ink bg-wine-600 px-8 py-3.5 font-display text-lg font-bold text-cream-50 shadow-sticker-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-wine-700 hover:shadow-[12px_12px_0_0_#2a2520] active:translate-x-0 active:translate-y-0 active:shadow-sticker"
                >
                  <span className="flex items-center gap-2">
                    <RotateCcw className="h-5 w-5 transition-transform group-hover:-rotate-180" />
                    Refazer quiz
                  </span>
                </button>
              </div>
            </Reveal>
          );
        })()}
      </section>

      <ZigZag className="mx-auto mb-10 h-5 w-40 text-ink/30" />
    </div>
  );
}
