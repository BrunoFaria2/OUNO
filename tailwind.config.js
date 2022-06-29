/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        black: {
         500:'#161A1E'
        },
        orange:{
          500:'#E68D2C'
        }
    },
  }
  },
  plugins: [],
}
