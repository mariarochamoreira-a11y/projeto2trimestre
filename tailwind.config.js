/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wine: {
          50: '#fbf2f3',
          100: '#f6e0e3',
          200: '#e8b0b8',
          300: '#d1808d',
          400: '#a84458',
          500: '#8a2638',
          600: '#6d1f2c',
          700: '#561823',
          800: '#4a1219',
          900: '#380d12',
        },
        cream: {
          50: '#faf6ef',
          100: '#f5f0e8',
          200: '#ece4d6',
          300: '#ddd0bc',
        },
        ink: {
          DEFAULT: '#2a2520',
          soft: '#4a443d',
          muted: '#7a7268',
        },
        mustard: '#d4a017',
        sage: '#7c8a6f',
        dusty: '#c98b8b',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        hand: ['Caveat', 'cursive'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sticker: '6px 6px 0 0 #2a2520',
        'sticker-lg': '10px 10px 0 0 #2a2520',
        'sticker-wine': '6px 6px 0 0 #6d1f2c',
      },
    },
  },
  plugins: [],
};
