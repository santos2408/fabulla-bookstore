/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{html,vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-white": "var(--brand-white)",
        "brand-black": "var(--brand-black)",
        "brand-gradient": "var(--brand-gradient)",

        "brand-primary-500": "var(--brand-primary-500)",
        "brand-secondary-500": "var(--brand-secondary-500)",
      },
    },
  },
  plugins: [],
};
