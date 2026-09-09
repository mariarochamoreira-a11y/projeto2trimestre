import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Home } from '@/pages/Home';
import { Escuta } from '@/pages/Escuta';
import { Quiz } from '@/pages/Quiz';
import { Referencias } from '@/pages/Referencias';

function App() {
  const [page, setPage] = useState('home');

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'Portal de Apoio ao Estudante',
      escuta: 'Portal de Escuta — Apoio ao Estudante',
      quiz: 'Quiz Interativo — Apoio ao Estudante',
      referencias: 'Referências — Apoio ao Estudante',
    };
    document.title = titles[page] ?? 'Portal de Apoio ao Estudante';
  }, [page]);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-cream-50 text-ink transition-colors duration-300 dark:bg-wine-900 dark:text-cream-50">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-wine-600 focus:px-4 focus:py-2 focus:text-cream-50"
        >
          Pular para o conteúdo
        </a>
        <Header current={page} onNavigate={navigate} />
        <main id="main">
          {page === 'home' && <Home onNavigate={navigate} />}
          {page === 'escuta' && <Escuta />}
          {page === 'quiz' && <Quiz />}
          {page === 'referencias' && <Referencias />}
        </main>
        <Footer onNavigate={navigate} />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
