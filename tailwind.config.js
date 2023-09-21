/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
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
          dark: colors.gray['400'] ,
          DEFAULT: '#FFF' ,
        },
        accent: {
          400: '#3BBA6C',
          DEFAULT: '#319B5A',
          600: '#277C48'
        },
      },

    },
  },
  plugins: [],
}

