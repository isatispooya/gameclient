/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kaghaz', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

