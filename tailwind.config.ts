import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#3CABA2',
        'green-details': '#3B7D77',
        'dark-blue': '#222B33',
        'orange': '#C74022',
        'green': '#386664',
        'dark-green': '#0A0C0F'
      },
      screens: {
        smartphone: '360px',
        tablet: '460px',
        laptop: '720px',
        desktop: '960px',
        modal: '1200px',
        'modal-lg': '1440px',
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: {
          sm: '360px',
          md: '460px',
          lg: '720px',
          xl: '960px'
        }
      },
      animation: {
        menuSlideIn: 'menuSlideIn 0.7s ease forwards',
        widthAnimation: 'widthAnimation 2s ease forwards',
        modalAnimation: 'modalAnimation 1s ease forwards',
        rotateRight: 'rotateRight 1.5s 0.5s ease forwards',
        rotateLeft: 'rotateLeft 2s ease forwards',
        rotateRight405: 'rotateRight405 2s ease forwards',
        socialMediaRotate: 'socialMediaRotate 2s ease forwards',
        hidden: 'hidden 2s ease forwards',
        shadows: 'shadows 2s ease forwards',
        fadeIn: 'fadeIn 2s ease forwards',
        fadeInTop: 'fadeInTop 2s ease forwards',
      },
      keyframes: {
        menuSlideIn: {
          'from': { transform: 'translateX(-100%)' }
        },
        widthAnimation: {
          'from': { width: '0' }
        },
        modalAnimation: {
          'from': { height: '0', opacity: '0' }
        },
        rotateRight: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(45deg)' }
        },
        rotateLeft: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(-45deg)' }
        },
        rotateRight405: {
          'to': { transform: 'rotate(405deg)' }
        },
        socialMediaRotate: {
          '0%': { transform: 'rotate(0)', 'box-shadow': 'none' },
          '70%': { 'box-shadow': 'none' },
          '100%': { transform: 'rotate(45deg)' }
        },
        hidden: {
          '0%': { opacity: '0' },
          '70%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        shadows: {
          '0%': { 'box-shadow': 'none', filter: 'drop-shadow(0 0 #000)' },
          '70%': { 'box-shadow': 'none', filter: 'drop-shadow(0 0 #000)' }
        },
        fadeIn: {
          '0%': { transform: 'translateX(-20%)', opacity: '0' },
          '30%': { opacity: '0' }
        },
        fadeInTop: {
          '0%': { transform: 'translateY(-80%)', opacity: '0' },
          '50%': { opacity: '0' }
        },
        }
      }
    },
  },
  plugins: [],
}
export default config
