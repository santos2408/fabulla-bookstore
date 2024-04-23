/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{html,vue,js,ts}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // new version
        "brand-white": "rgb(var(--brand-white))",
        "brand-primary-50": "rgb(var(--brand-primary-50))",
        "brand-primary-100": "rgb(var(--brand-primary-100))",
        "brand-primary-200": "rgb(var(--brand-primary-200))",
        "brand-primary-300": "rgb(var(--brand-primary-300))",
        "brand-primary-500": "rgb(var(--brand-primary-500))",
        "brand-primary-600": "rgb(var(--brand-primary-600))",
        "brand-primary-700": "rgb(var(--brand-primary-700))",

        // neutral-colors
        "brand-neutral-500": "rgb(var(--brand-neutral-500))",
      },
    },
  },
  plugins: [],
};
