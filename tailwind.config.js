module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '82': '82px',
    },
    extend: {
      colors: {
        'background' : '#E5E5E5',
        'purpleColor' : '#4D46FA',
        "orangeColor" : '#F06336',
      },
      borderRadius:{
        '100' : '100px',

      },
      spacing: {
        '120': '120px',
        '34' : '34px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};