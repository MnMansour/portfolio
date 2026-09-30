import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05070d',
          900: '#0b0f19',
          800: '#111827',
          700: '#1c2333',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          emerald: '#34d399',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.25), 0 0 32px -4px rgba(34,211,238,0.35)',
        'glow-violet': '0 0 0 1px rgba(167,139,250,0.25), 0 0 32px -4px rgba(167,139,250,0.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        flow: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
        flow: 'flow 1s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
