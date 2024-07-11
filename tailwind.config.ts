/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.stone,
          lightest: colors.stone["400"],
          lighter: colors.stone["800"],
          light: colors.stone["900"],
          DEFAULT: colors.stone["950"],
        },
        secondary: {
          ...colors.gray,
          darker: colors.gray["400"],
          dark: colors.gray["300"],
          DEFAULT: colors.gray["200"],
        },
        accent: {
          200: "#8cedb1",
          400: "#3BBA6C",
          DEFAULT: "#2aa359",
          600: "#277C48",
        },
      },
      animation: {
        'nyan-moves-upDown': ' upDown ease 2.2s 2.2s infinite',
        'nyan-moves-leftRight': ' leftRight ease 1.7s infinite'
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(-45%)' },
          '50%': { transform: 'translateY(-55%)' },
        },
        leftRight: {
          '0%, 100%': { transform: 'translateX(-40%)' },
          '50%': { transform: 'translateX(-60%)' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} as const;
