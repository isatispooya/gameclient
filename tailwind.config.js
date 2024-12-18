/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dana: ['Dana', 'sans-serif'],
        detective: ["Special Elite", "cursive"],
        mystery: ["Crimson Text", "serif"],

      },
    },
  },
  plugins: [],
};
