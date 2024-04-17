const plugin = require("tailwindcss/plugin");

const hangingPunctuationPlugin = plugin(function ({ addUtilities, theme, e }) {
  const newUtilities = {};
  const hangingOptions = theme("hangingPunctuation", {
    none: "none",
    first: "first",
    last: "last",
    "first-last": "first last",
    "first-force-end": "first force-end",
    "first-allow-end": "first allow-end",
    "last-force-end": "last force-end",
    "last-allow-end": "last allow-end",
    "first-force-end-last": "first force-end last",
    "first-allow-end last": "first allow-end last",
    "allow-end": "allow-end",
    "force-end": "force-end",
    revert: "revert",
    "revert-layer": "revert-layer",
    unset: "unset",
    inherit: "inherit",
    initial: "initial",
  });

  Object.keys(hangingOptions).forEach((key) => {
    const value = hangingOptions[key];
    newUtilities[`.${e(`hanging-${key}`)}`] = { hangingPunctuation: value };
  });

  addUtilities(newUtilities, ["responsive"]);
});

module.exports = hangingPunctuationPlugin;
