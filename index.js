const plugin = require('tailwindcss/plugin');

const hangingPunctuationPlugin = plugin(function({ addUtilities, theme, e }) {
  const newUtilities = {};
  const hangingOptions = theme('hangingPunctuation', {
    none: 'none',
    first: 'first',
    last: 'last',
    allowEnd: 'allow-end',
    forceEnd: 'force-end'
  });

  Object.keys(hangingOptions).forEach(key => {
    const value = hangingOptions[key];
    newUtilities[`.${e(`hanging-${key}`)}`] = { hangingPunctuation: value };
  });

  addUtilities(newUtilities, ['responsive']);
});

module.exports = hangingPunctuationPlugin;
