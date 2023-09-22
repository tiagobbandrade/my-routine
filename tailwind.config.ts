import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        appearFromTop: {
          '0%': {transform: 'translateY(-999px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        appearOpacity: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        }
      },
      animation: {
        appearFromTop: 'appearFromTop 1.3s ease-in-out forwards',
        appearOpacity: 'appearOpacity 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
