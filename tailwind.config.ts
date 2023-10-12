import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],

  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem), minmax(25rem, 50rem), minmax(0, 1fr)',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        },
      },

      height: {
        '10.5': '2.625rem',
      },
    },
  },

  plugins: [],
}
export default config
