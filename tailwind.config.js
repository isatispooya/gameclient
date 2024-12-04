/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(45deg) scale(1)' },
          '25%': { transform: 'rotate(45deg) scale(1.1)' },
          '50%': { transform: 'rotate(45deg) scale(0.9)' },
          '75%': { transform: 'rotate(45deg) scale(1.1)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out'
      }
    },
  },
  plugins: [],
}

