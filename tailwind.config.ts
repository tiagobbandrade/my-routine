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
        appear: {
          '0%': {transform: 'translateY(-999px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        }
      },
      animation: {
        appear: 'appear 1.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
export default config
