import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],

  theme: {
    extend: {
      colors: {
        example: '#FFFFFF',
      },
    },
  },

  plugins: [],
}
export default config
