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
    },
  },
  plugins: [],
}
export default config
