<<<<<<< HEAD
const colors = require('tailwindcss/colors');

=======
>>>>>>> saito
module.exports = {
  purge: ['./src/components/**/*.tsx', './src/pages/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
<<<<<<< HEAD
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
=======
    extend: {},
  },
  variants: {
    /* extend: {}, */
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
/* module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}; */
>>>>>>> saito
