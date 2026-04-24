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
        'brand-cyan': '#2EAEE0',
        'burnt-orange': '#E07B4F',
        'dark-slate': '#293241',
        'body-text': '#3A3A3A',
        'light-tint': '#E8F6FC',
        'light-bg': '#F7F7F7',
        'divider': '#E0E0E0',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      dropShadow: {
        logo: '0 0 20px #2EAEE0',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
        fadeInUp: 'fadeInUp 0.6s ease forwards',
        bounce: 'bounce 1.5s ease-in-out infinite',
        ticker: 'ticker 30s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
