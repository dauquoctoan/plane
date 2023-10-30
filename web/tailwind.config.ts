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
            transform: 'scaleY(1)',
          },
          '50%': {
            opacity: '.8'
          },
          '100%': {
            opacity: '1',
            transform: 'scaleY(1)'
          },
        },
        rangeLoading: {
          "0%": {
            width: '0%',
            display: 'block',
          },
          '100%': {
            width: '100%',
            display: 'none',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1.15)',
            opacity: '0'
          }
        }
      },
      animation: {
        'pop-up': 'popUp .5s ease-out',
        ping: 'ping 1.2s',
        loadingRange: 'rangeLoading .2s ease-out'
      },
      colors: {
        "theme-primary": 'var(--color-theme-primary)',
        "theme-secondary": "var(--color-theme-secondary)",
        "theme-text-primary": 'var(--color-theme-text-primary)',
        "theme-border-primary": 'var(--color-theme-border-primary)',
        "color-special-primary": "var(--color-special-primary)",
        'color-warning': "var(--color-warning)"
      }
    },
  },
  plugins: [],
}
export default config
