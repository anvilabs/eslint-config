const baseConfig = require('.');

module.exports = {
  rules: {
    'prettier/prettier': [
      'error',
      Object.assign({}, baseConfig.rules['prettier/prettier'][1], {
        trailingComma: 'es5',
      }),
    ],
  },
};
