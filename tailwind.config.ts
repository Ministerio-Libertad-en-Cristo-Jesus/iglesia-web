import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blueI: '#14213d',
        whiteI: '#e5e5e5',
        grayI: '#d9d9d9',
        grayII: '#cccccc',
        whatsapp: '#39b54a'
      },
      flex: {
        3: '0 0 calc(33% - 30px)',
        2: '0 0 calc(50% - 30px)',
        100: '0 0 calc(100% - 30px)'
      }
    },
  },
  plugins: [],
}
export default config
