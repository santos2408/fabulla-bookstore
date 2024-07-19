/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{html,vue,js,ts}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2lg": "1180px",
      xl: "1360px",
      xxl: "1410px",
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

        "brand-secondary-500": "rgb(var(--brand-secondary-500))",
        "brand-secondary-600": "rgb(var(--brand-secondary-600))",

        // neutral-colors
        "brand-neutral-100": "rgb(var(--brand-neutral-100))",
        "brand-neutral-200": "rgb(var(--brand-neutral-200))",
        "brand-neutral-400": "rgb(var(--brand-neutral-400))",
        "brand-neutral-500": "rgb(var(--brand-neutral-500))",

        // shadows
      },
      boxShadow: {
        "3xl": "0 20px 40px -10px rgba(108, 93, 212, 0.2)",
      },
    },
  },
  plugins: [],
};
