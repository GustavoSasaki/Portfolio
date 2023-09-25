/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.stone,
          lighter: colors.stone['700'] ,
          light: colors.stone['800'] ,
          DEFAULT: colors.stone['900'] ,
        },
        secondary: {...colors.gray,
          darker: colors.gray['400'] ,
          dark: colors.gray['300'] ,
          DEFAULT: '#FFF' ,
        },
        accent: {
          200: '#8cedb1',
          400: '#3BBA6C',
          DEFAULT: '#319B5A',
          600: '#277C48'
        },
      },

    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} as const

