import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'theme-primary': 'var(--color-theme-shadow-primary)',
      },
      keyframes: {
        popUp: {
          "0%": {
            opacity: '0',
            transform: 'scaleY(1)'
          },
          '50%': {
            opacity: '.8'
          },
          '100%': {
            opacity: '1',
            transform: 'scaleY(1)'
          },
        }
      },
      animation: {
        'pop-up': 'popUp 1s ease-in-out',
      },
      colors: {
        "theme-primary": 'var(--color-theme-primary)',
        "theme-secondary": "var(--color-theme-secondary)",
        "theme-text-primary": 'var(--color-theme-text-primary)',
        "theme-border-primary": 'var(--color-theme-border-primary)'
      }
    },
  },
  plugins: [],
}
export default config
