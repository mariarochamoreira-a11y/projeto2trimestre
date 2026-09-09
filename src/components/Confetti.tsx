import { useEffect, useState } from 'react';

const colors = ['#6d1f2c', '#d4a017', '#7c8a6f', '#c98b8b', '#4a443d', '#faf6ef'];
const shapes = ['rect', 'circle', 'star'];

interface Piece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  shape: string;
  size: number;
  rotate: number;
}

function makePieces(count: number): Piece[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.8,
    duration: 2.2 + Math.random() * 1.8,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: shapes[Math.floor(Math.random() * shapes.length)],
    size: 8 + Math.random() * 10,
    rotate: Math.random() * 360,
  }));
}

export function Confetti({ fire }: { fire: boolean }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    if (!fire) return;
    setPieces(makePieces(70));
    const t = setTimeout(() => setPieces([]), 5000);
    return () => clearTimeout(t);
  }, [fire]);

  if (pieces.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
            width: p.shape === 'circle' ? `${p.size}px` : `${p.size}px`,
            height: p.shape === 'rect' ? `${p.size * 1.4}px` : `${p.size}px`,
            background: p.shape === 'star' ? 'transparent' : p.color,
            borderRadius: p.shape === 'circle' ? '9999px' : '2px',
            border: p.shape === 'star' ? 'none' : `1.5px solid #2a2520`,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {p.shape === 'star' && (
            <svg viewBox="0 0 24 24" width={p.size} height={p.size} fill={p.color} stroke="#2a2520" strokeWidth="1.5">
              <path d="M12 2L14.5 9L22 9.5L16.5 14L18 22L12 18L6 22L7.5 14L2 9.5L9.5 9Z" />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}
