const aspectRatio = require('@tailwindcss/aspect-ratio');
const typography = require('@tailwindcss/typography');

module.exports = {
  purge: ['./pages/**/*.tsx', './modules/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [aspectRatio, typography],
};
