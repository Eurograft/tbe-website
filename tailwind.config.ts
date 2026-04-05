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
        brand: {
          cyan: '#2EAEE0',
          dark: '#3A3A3A',
        },
      },
      dropShadow: {
        logo: '0 0 20px #2EAEE0',
      },
    },
  },
  plugins: [],
}

export default config
