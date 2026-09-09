import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}

const tags = { div: 'div', section: 'section', article: 'article', li: 'li' };

export function Reveal({ children, className = '', delay = 0, as = 'div' }: RevealProps) {
  const { ref, visible } = useReveal();
  const Tag = tags[as] as 'div';
  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
