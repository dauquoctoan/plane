import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
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
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(.4,0,.2,1)',
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
        },
        overlay: {
          '0%': {
            'background-color': 'transparent'
          },
          '100%': {
            'background-color': 'var(--color-modal-overlay)'
          }
        },
        modalContentPopup: {
          from: {
            transform: 'scale(.9)',
            opacity: '0',
          },
          to: {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        showNav: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1'
          }
        },
        fadeMenu: {
          from: {
            height: '0px',
          },
          to: {
            height: '168px'
          }
        }
      },
      animation: {
        'pop-up': 'popUp .5s ease-out',
        'overlay': 'overlay .3s ease-out',
        ping: 'ping 1.2s',
        loadingRange: 'rangeLoading .2s ease-out',
        modalContentPopup: 'modalContentPopup .2s',
        showNav: 'showNav 1.2s ease-out',
        fadeMenu: 'fadeMenu .1s',
      },
      screens: {
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
        "2xl": { max: "1536px" },
      },
      width: {
        'width-menu': 'var(--width-menu)',
        'width-menu-collap': 'var(--width-menu-collap)'
      },
      colors: {
        "theme-primary": 'var(--color-theme-primary)',
        "theme-secondary": "var(--color-theme-secondary)",
        "theme-text-primary": 'var(--color-theme-text-primary)',
        "theme-border-primary": 'var(--color-theme-border-primary)',
        "theme-border-secondary": 'var(--color-theme-border-secondary)',
        "theme-border-highligh": 'var(--color-theme-border-highligh)',
        "color-special-primary": "var(--color-special-primary)",
        "color-special-secondary": "var(--color-special-secondary)",
        'color-warning': "var(--color-warning)",
        'color-modal-overlay': 'var(--color-modal-overlay)',
      }
    },
  },
  plugins: [],
}
export default config
