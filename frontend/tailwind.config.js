/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          700: '#a16207',
        },
      },
    },
  },
  plugins: [],
}
