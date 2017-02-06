module.exports = {
  extends: './index.js',
  rules: {
    'max-len': [
      2,
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-magic-numbers': 0,
    'quote-props': [
      2,
      'consistent-as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
  },
};
