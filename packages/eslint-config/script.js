const baseConfig = require('.');

// primarily used for config files in the root or in scripts
module.exports = {
  rules: {
    'global-require': 'off',
    // https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      Object.assign({}, baseConfig.rules['prettier/prettier'][1], {
        trailingComma: 'es5',
      }),
    ],
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-extraneous-dependencies': 'off',
    'import/no-internal-modules': 'off',
  },
};
