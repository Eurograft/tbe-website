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
        'dark-slate': '#293241',
        'body-text': '#3A3A3A',
        'light-tint': '#E8F6FC',
        'divider': '#E0E0E0',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        serif: ['var(--font-dm-serif)', 'serif'],
      },
      dropShadow: {
        logo: '0 0 20px #2EAEE0',
      },
    },
  },
  plugins: [],
}

export default config
