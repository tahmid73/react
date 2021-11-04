const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        white:{
          0:'#eef3f8',
          900:'#ffffff',
          2:'#f3f2ef'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
