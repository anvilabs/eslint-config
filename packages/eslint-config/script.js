// primarily used for config files in the root or in scripts
module.exports = {
  rules: {
    'global-require': 'off',
    'no-console': 'off',
    // https://github.com/benmosher/eslint-plugin-import
    'import/no-extraneous-dependencies': 'off',
    'import/no-internal-modules': 'off',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/no-process-exit': 'off',
  },
};
