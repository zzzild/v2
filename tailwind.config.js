/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './views/**/*.{html,ejs,js}'],
  theme: {
    extend: {
      colors: {
        customPurple: '#AD49E1',
        customOrange: '#DF9A33',
        customBlue: '#F1F5F9',
      },
      fontFamily: {
        lalezar: ['Lalezar', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

