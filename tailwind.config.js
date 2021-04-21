module.exports = {
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/comonents/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      1260: '1260px',
    },
    extend: {
      colors: {
        k: {
          indigo: '#18283F',
          green: '#60EAAC',
          pink: '#C450A0',
          white: '#FFFFFF',
          black: '#000000',
          lightgray: '#D6D6D6',
          darkgray: '#A1A1A1',
        },
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        1920: '1920px',
        400: '400px',
      },
      height: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        header: '60',
        130: '130px',
        315: '315px',
      },
      minHeight: {
        0: '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
        315: '315px',
      },
      margin: {
        header: '60px',
        50: '50px',
      },
      padding: {
        header: '60px',
      },
      backgroundImage: (theme) => ({
        'hero-pattern': "url('https://kougakusai.github.io/kougakusai-blog/img/header.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }),
    },
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
