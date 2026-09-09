import type { CSSProperties } from 'react';

interface IlluProps {
  className?: string;
  style?: CSSProperties;
}

/* ---------- MASCOTS ---------- */

// Mascot: The Dreamer (sonhador) — round, eyes closed, star above
export function MascotDreamer({ className = '', style }: IlluProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 28L36 44L52 52L36 60L28 76L20 60L4 52L20 44Z" fill="#d4a017" stroke="#2a2520" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="115" r="62" fill="#f5f0e8" stroke="#2a2520" strokeWidth="4" />
      <path d="M75 110 Q86 100 97 110" stroke="#2a2520" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M103 110 Q114 100 125 110" stroke="#2a2520" strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="88" cy="130" rx="8" ry="5" fill="#c98b8b" opacity="0.7" />
      <ellipse cx="112" cy="130" rx="8" ry="5" fill="#c98b8b" opacity="0.7" />
      <path d="M92 145 Q100 152 108 145" stroke="#2a2520" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* antenna */}
      <line x1="100" y1="53" x2="100" y2="40" stroke="#2a2520" strokeWidth="3" />
      <circle cx="100" cy="36" r="6" fill="#6d1f2c" stroke="#2a2520" strokeWidth="3" />
    </svg>
  );
}

// Mascot: The Spark (faísca) — energetic, wide eyes, zigzag
export function MascotSpark({ className = '', style }: IlluProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M160 18L168 38L188 46L168 54L160 74L152 54L132 46L152 38Z" fill="#d4a017" stroke="#2a2520" strokeWidth="3" strokeLinejoin="round" />
      <path d="M38 60 Q40 50 50 52 L150 52 Q160 50 162 60 L162 150 Q160 160 150 162 L50 162 Q40 160 38 150 Z" fill="#6d1f2c" stroke="#2a2520" strokeWidth="4" />
      <circle cx="78" cy="100" r="9" fill="#faf6ef" stroke="#2a2520" strokeWidth="3" />
      <circle cx="122" cy="100" r="9" fill="#faf6ef" stroke="#2a2520" strokeWidth="3" />
      <circle cx="78" cy="100" r="3.5" fill="#2a2520" />
      <circle cx="122" cy="100" r="3.5" fill="#2a2520" />
      <path d="M82 130 Q100 145 118 130" stroke="#faf6ef" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M70 80 L70 92 M130 80 L130 92" stroke="#2a2520" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Mascot: The Sage (sábio) — square glasses, calm
export function MascotSage({ className = '', style }: IlluProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="110" r="62" fill="#7c8a6f" stroke="#2a2520" strokeWidth="4" />
      {/* glasses */}
      <rect x="62" y="95" width="30" height="22" rx="4" fill="#faf6ef" stroke="#2a2520" strokeWidth="3.5" />
      <rect x="108" y="95" width="30" height="22" rx="4" fill="#faf6ef" stroke="#2a2520" strokeWidth="3.5" />
      <line x1="92" y1="106" x2="108" y2="106" stroke="#2a2520" strokeWidth="3.5" />
      <circle cx="77" cy="106" r="3" fill="#2a2520" />
      <circle cx="123" cy="106" r="3" fill="#2a2520" />
      <path d="M88 138 Q100 144 112 138" stroke="#2a2520" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* leaf on top */}
      <path d="M100 48 Q90 38 100 30 Q110 38 100 48" fill="#7c8a6f" stroke="#2a2520" strokeWidth="3" />
      <line x1="100" y1="48" x2="100" y2="56" stroke="#2a2520" strokeWidth="3" />
    </svg>
  );
}

// Mascot: The Connector (conector) — heart, warm, open arms
export function MascotConnector({ className = '', style }: IlluProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 40 C 60 40 40 80 40 110 C 40 145 70 165 100 165 C 130 165 160 145 160 110 C 160 80 140 40 100 40 Z" fill="#c98b8b" stroke="#2a2520" strokeWidth="4" />
      {/* eyes */}
      <circle cx="82" cy="100" r="7" fill="#2a2520" />
      <circle cx="118" cy="100" r="7" fill="#2a2520" />
      <circle cx="84" cy="98" r="2.5" fill="#faf6ef" />
      <circle cx="120" cy="98" r="2.5" fill="#faf6ef" />
      {/* heart cheeks */}
      <path d="M70 120 Q66 116 62 120 Q62 126 70 130 Q78 126 78 120 Q74 116 70 120Z" fill="#6d1f2c" opacity="0.4" />
      <path d="M130 120 Q126 116 122 120 Q122 126 130 130 Q138 126 138 120 Q134 116 130 120Z" fill="#6d1f2c" opacity="0.4" />
      {/* smile */}
      <path d="M84 128 Q100 142 116 128" stroke="#2a2520" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* heart antenna */}
      <line x1="100" y1="40" x2="100" y2="28" stroke="#2a2520" strokeWidth="3" />
      <path d="M100 28 C 96 22 88 22 88 16 C 88 12 94 10 100 16 C 106 10 112 12 112 16 C 112 22 104 22 100 28Z" fill="#6d1f2c" stroke="#2a2520" strokeWidth="2.5" />
    </svg>
  );
}

/* ---------- DOODLES & DECORATIONS ---------- */

export function Squiggle({ className = '', style }: IlluProps) {
  return (
    <svg viewBox="0 0 120 30" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15 Q14 4 24 15 T44 15 T64 15 T84 15 T104 15 T116 15" stroke="#2a2520" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function StarBurst({ className = '', style, color = '#d4a017' }: IlluProps & { color?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 4 L35 22 L54 24 L40 36 L45 54 L30 44 L15 54 L20 36 L6 24 L25 22Z" fill={color} stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowCurvy({ className = '', style }: IlluProps) {
  return (
    <svg viewBox="0 0 80 60" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10 Q40 10 50 30 Q58 48 70 44" stroke="#2a2520" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M64 38 L70 44 L64 50" stroke="#2a2520" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function CircleScribble({ className = '', style, color = '#6d1f2c' }: IlluProps & { color?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 8 C 60 8 72 20 72 40 C 72 58 58 72 40 72 C 22 72 8 58 8 40 C 8 22 20 8 38 8 C 50 8 58 14 62 24" stroke={color} strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Sparkle({ className = '', style, color = '#d4a017' }: IlluProps & { color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 L23 17 L36 20 L23 23 L20 36 L17 23 L4 20 L17 17Z" fill={color} stroke="#2a2520" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="2.5" fill={color} stroke="#2a2520" strokeWidth="1.5" />
    </svg>
  );
}

export function HeartDoodle({ className = '', style, color = '#6d1f2c' }: IlluProps & { color?: string }) {
  return (
    <svg viewBox="0 0 50 46" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 42 C 10 30 4 20 4 13 C 4 6 10 3 16 6 C 20 8 23 12 25 16 C 27 12 30 8 34 6 C 40 3 46 6 46 13 C 46 20 40 30 25 42Z" fill={color} stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function SpeechBubble({ className = '', style, color = '#faf6ef' }: IlluProps & { color?: string }) {
  return (
    <svg viewBox="0 0 120 90" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 Q4 10 4 16 L4 60 Q4 66 10 66 L60 66 L72 84 L74 66 L110 66 Q116 66 116 60 L116 16 Q116 10 110 10 Z" fill={color} stroke="#2a2520" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export function ZigZag({ className = '', style, color = '#2a2520' }: IlluProps & { color?: string }) {
  return (
    <svg viewBox="0 0 100 20" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10 L16 4 L28 16 L40 4 L52 16 L64 4 L76 16 L88 4 L96 10" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function FlowerDoodle({ className = '', style }: IlluProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="7" fill="#d4a017" stroke="#2a2520" strokeWidth="2.5" />
      <ellipse cx="30" cy="12" rx="7" ry="11" fill="#c98b8b" stroke="#2a2520" strokeWidth="2.5" />
      <ellipse cx="30" cy="48" rx="7" ry="11" fill="#c98b8b" stroke="#2a2520" strokeWidth="2.5" />
      <ellipse cx="12" cy="30" rx="11" ry="7" fill="#c98b8b" stroke="#2a2520" strokeWidth="2.5" />
      <ellipse cx="48" cy="30" rx="11" ry="7" fill="#c98b8b" stroke="#2a2520" strokeWidth="2.5" />
    </svg>
  );
}

export function UnderlineHand({ className = '', style, color = '#6d1f2c' }: IlluProps & { color?: string }) {
  return (
    <svg viewBox="0 0 200 24" className={className} style={style} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M4 14 Q40 4 80 12 Q120 20 160 8 Q180 4 196 10" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* Hand-drawn option icons */
export function DoodleIcon({ name, className = '', style }: { name: string } & IlluProps) {
  const icons: Record<string, React.ReactElement> = {
    book: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10 Q8 6 12 6 L22 6 L24 10 L24 40 L12 40 Q8 40 8 36Z" fill="#f5f0e8" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 10 L26 6 L36 6 Q40 6 40 10 L40 36 Q40 40 36 40 L24 40Z" fill="#faf6ef" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="24" y1="10" x2="24" y2="40" stroke="#2a2520" strokeWidth="2" />
      </svg>
    ),
    party: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M10 38 L24 8 L28 40Z" fill="#d4a017" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="34" cy="14" r="3" fill="#6d1f2c" stroke="#2a2520" strokeWidth="2" />
        <circle cx="38" cy="22" r="2.5" fill="#7c8a6f" stroke="#2a2520" strokeWidth="2" />
        <circle cx="32" cy="26" r="2" fill="#c98b8b" stroke="#2a2520" strokeWidth="1.5" />
      </svg>
    ),
    chat: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10 Q6 10 6 12 L6 30 Q6 32 8 32 L26 32 L32 40 L32 32 L40 32 Q42 32 42 30 L42 12 Q42 10 40 10Z" fill="#7c8a6f" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="16" cy="21" r="2" fill="#2a2520" />
        <circle cx="24" cy="21" r="2" fill="#2a2520" />
        <circle cx="32" cy="21" r="2" fill="#2a2520" />
      </svg>
    ),
    moon: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M34 8 Q20 8 16 22 Q14 38 30 42 Q38 42 42 38 Q30 38 28 26 Q28 14 40 12 Q38 8 34 8Z" fill="#6d1f2c" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="22" cy="20" r="1.5" fill="#faf6ef" />
        <circle cx="26" cy="30" r="1.5" fill="#faf6ef" />
      </svg>
    ),
    map: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12 L18 8 L30 12 L40 8 L40 38 L30 42 L18 38 L8 42Z" fill="#c98b8b" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="18" y1="8" x2="18" y2="38" stroke="#2a2520" strokeWidth="2" />
        <line x1="30" y1="12" x2="30" y2="42" stroke="#2a2520" strokeWidth="2" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M24 40 C 12 30 6 22 6 15 C 6 9 11 6 16 8 C 20 10 23 13 24 16 C 25 13 28 10 32 8 C 37 6 42 9 42 15 C 42 22 36 30 24 40Z" fill="#6d1f2c" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
    bolt: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M28 6 L12 26 L22 26 L18 42 L36 20 L26 20Z" fill="#d4a017" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
    coffee: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M10 16 L38 16 L35 38 Q34 42 30 42 L18 42 Q14 42 13 38Z" fill="#6d1f2c" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M38 20 Q44 20 44 26 Q44 32 38 32" stroke="#2a2520" strokeWidth="2.5" fill="none" />
        <path d="M18 10 Q18 6 20 6 M26 10 Q26 6 28 6" stroke="#2a2520" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6 Q6 6 6 24 Q6 40 22 40 Q28 40 28 34 Q28 30 32 30 L38 30 Q42 30 42 26 Q42 6 24 6Z" fill="#f5f0e8" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="14" cy="18" r="3" fill="#6d1f2c" stroke="#2a2520" strokeWidth="1.5" />
        <circle cx="22" cy="14" r="3" fill="#d4a017" stroke="#2a2520" strokeWidth="1.5" />
        <circle cx="32" cy="18" r="3" fill="#7c8a6f" stroke="#2a2520" strokeWidth="1.5" />
        <circle cx="16" cy="28" r="3" fill="#c98b8b" stroke="#2a2520" strokeWidth="1.5" />
      </svg>
    ),
    music: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="34" r="6" fill="#6d1f2c" stroke="#2a2520" strokeWidth="2.5" />
        <circle cx="34" cy="30" r="6" fill="#7c8a6f" stroke="#2a2520" strokeWidth="2.5" />
        <path d="M20 34 L20 12 L40 8 L40 30" stroke="#2a2520" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" fill="#7c8a6f" stroke="#2a2520" strokeWidth="2.5" />
        <ellipse cx="24" cy="24" rx="8" ry="18" stroke="#2a2520" strokeWidth="2" fill="none" />
        <line x1="6" y1="24" x2="42" y2="24" stroke="#2a2520" strokeWidth="2" />
        <path d="M10 16 Q24 20 38 16 M10 32 Q24 28 38 32" stroke="#2a2520" strokeWidth="2" fill="none" />
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="10" fill="#d4a017" stroke="#2a2520" strokeWidth="2.5" />
        <path d="M24 4 L24 10 M24 38 L24 44 M4 24 L10 24 M38 24 L44 24 M10 10 L14 14 M34 34 L38 38 M38 10 L34 14 M10 38 L14 34" stroke="#2a2520" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    eye: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M6 24 Q24 8 42 24 Q24 40 6 24Z" fill="#faf6ef" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="7" fill="#6d1f2c" stroke="#2a2520" strokeWidth="2" />
        <circle cx="26" cy="22" r="2" fill="#faf6ef" />
      </svg>
    ),
    leaf: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M10 38 Q10 14 38 10 Q38 38 14 38" fill="#7c8a6f" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M16 32 Q24 24 34 16" stroke="#2a2520" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    fire: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4 Q12 18 16 30 Q18 40 24 42 Q30 40 32 30 Q36 18 24 4Z" fill="#6d1f2c" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M24 18 Q20 26 22 32 Q24 36 26 32 Q28 26 24 18Z" fill="#d4a017" stroke="#2a2520" strokeWidth="2" />
      </svg>
    ),
    compass: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" fill="#f5f0e8" stroke="#2a2520" strokeWidth="2.5" />
        <path d="M24 10 L28 24 L24 38 L20 24Z" fill="#6d1f2c" stroke="#2a2520" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="2.5" fill="#2a2520" />
      </svg>
    ),
    cloud: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 32 Q6 32 6 26 Q6 20 14 20 Q14 12 24 12 Q34 12 34 20 Q42 20 42 26 Q42 32 36 32Z" fill="#ddd0bc" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
    ),
    diamond: (
      <svg viewBox="0 0 48 48" fill="none" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path d="M14 16 L24 6 L34 16 L24 42Z" fill="#c98b8b" stroke="#2a2520" strokeWidth="2.5" strokeLinejoin="round" />
        <line x1="14" y1="16" x2="34" y2="16" stroke="#2a2520" strokeWidth="2" />
        <line x1="24" y1="6" x2="24" y2="42" stroke="#2a2520" strokeWidth="2" />
      </svg>
    ),
  };
  return icons[name] ?? icons.star;
}
