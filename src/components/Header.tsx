import { useEffect, useState } from 'react';
import { HeartHandshake, Menu, X, Moon, Sun, Type, Contrast } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';


interface HeaderProps {
  current: string;
  onNavigate: (page: string) => void;
}

const links = [
  { id: 'home', label: 'Início' },
  { id: 'escuta', label: 'Portal de Escuta' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'referencias', label: 'Referências' },
];

export function Header({ current, onNavigate }: HeaderProps) {
  const { theme, toggleTheme, cycleFontSize, contrast, toggleContrast } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b-2 border-ink/15 bg-cream-50/95 shadow-md backdrop-blur-md dark:border-ink/30 dark:bg-wine-900/95'
          : 'bg-cream-50/70 backdrop-blur-sm dark:bg-wine-900/70'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        {/* Logo */}
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2.5 transition hover:opacity-90"
          aria-label="Página inicial"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl border-2 border-ink bg-wine-600 text-cream-50 shadow-sticker transition-transform group-hover:-rotate-6">
            <HeartHandshake className="h-5 w-5" />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-black text-wine-600 dark:text-cream-50">
              Portal de Apoio
            </span>
            <span className="font-hand text-sm text-mustard">ao Estudante</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id} className="relative">
              <button
                onClick={() => go(l.id)}
                className={`rounded-lg px-3 py-2 font-body text-sm font-semibold transition-all duration-200 ${
                  current === l.id
                    ? 'bg-wine-600 text-cream-50 shadow-sticker'
                    : 'text-ink hover:bg-cream-200 dark:text-cream-100 dark:hover:bg-wine-800'
                }`}
                aria-current={current === l.id ? 'page' : undefined}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Accessibility controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={cycleFontSize}
            className="rounded-lg border-2 border-ink/40 p-2 text-ink transition hover:border-ink hover:bg-cream-200 focus:outline-none focus:ring-2 focus:ring-wine-400 dark:text-cream-100 dark:hover:bg-wine-800"
            aria-label="Aumentar tamanho da fonte"
            title="Tamanho da fonte"
          >
            <Type className="h-4 w-4" />
          </button>
          <button
            onClick={toggleContrast}
            className={`rounded-lg border-2 p-2 transition focus:outline-none focus:ring-2 focus:ring-wine-400 ${
              contrast === 'high'
                ? 'border-ink bg-mustard text-ink'
                : 'border-ink/40 text-ink hover:border-ink hover:bg-cream-200 dark:text-cream-100 dark:hover:bg-wine-800'
            }`}
            aria-label="Alternar alto contraste"
            aria-pressed={contrast === 'high'}
            title="Alto contraste"
          >
            <Contrast className="h-4 w-4" />
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-lg border-2 border-ink/40 p-2 text-ink transition hover:border-ink hover:bg-cream-200 focus:outline-none focus:ring-2 focus:ring-wine-400 dark:text-cream-100 dark:hover:bg-wine-800"
            aria-label="Alternar modo escuro"
            title="Modo escuro"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="rounded-lg border-2 border-ink/40 p-2 text-ink transition hover:border-ink hover:bg-cream-200 focus:outline-none focus:ring-2 focus:ring-wine-400 dark:text-cream-100 dark:hover:bg-wine-800 md:hidden"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-ink/15 bg-cream-50/98 backdrop-blur-md transition-all duration-300 dark:border-ink/30 dark:bg-wine-900/98 md:hidden ${
          menuOpen ? 'max-h-80 border-t-2' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`w-full rounded-lg px-4 py-3 text-left font-body text-base font-semibold transition ${
                  current === l.id
                    ? 'bg-wine-600 text-cream-50'
                    : 'text-ink hover:bg-cream-200 dark:text-cream-100 dark:hover:bg-wine-800'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
