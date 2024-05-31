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
          DEFAULT: "#FFF",
        },
        accent: {
          200: "#8cedb1",
          400: "#3BBA6C",
          DEFAULT: "#2aa359",
          600: "#277C48",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} as const;
