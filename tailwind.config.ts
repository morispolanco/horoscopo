import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0a0015',
          darker: '#06000e',
          purple: '#6b21a8',
          violet: '#7c3aed',
          gold: '#f59e0b',
          'gold-light': '#fcd34d',
          silver: '#cbd5e1',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #0a0015 0%, #1a0030 50%, #0a0015 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(107,33,168,0.3) 0%, rgba(124,58,237,0.1) 100%)',
        'gold-gradient': 'linear-gradient(90deg, #f59e0b, #fcd34d, #f59e0b)',
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
