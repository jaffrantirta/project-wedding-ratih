/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Fredoka', 'sans-serif'],
        'secondary': ['Zeyada', 'cursive'],
        'third': ['Dancing Script', 'cursive'],
      },
      colors: {
        primary: '#fcb603'
      }
    },
  },
  plugins: [],
}
