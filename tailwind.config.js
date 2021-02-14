const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        k: {
          indigo: '#18283F',
          green: '#60EAAC',
          pink: '#EA609E',
          white: '#FFFFFF',
          black: '#000000',
          lightgray: '#D6D6D6',
          darkgray: '#A1A1A1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
