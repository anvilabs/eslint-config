module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'plugin:jasmine/recommended',
  ],
  plugins: [
    'jasmine',
  ],
  rules: {
    'fp/no-let': 0,
    'fp/no-mutation': 0,
    'fp/no-unused-expression': 0,
  },
};
