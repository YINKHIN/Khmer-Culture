/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'angkor-gold': '#D4AF37',
        'temple-stone': '#8B7355',
      },
    },
  },
  plugins: [],
}