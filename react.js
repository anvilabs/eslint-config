module.exports = {
  extends: ['./react-base.js', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  env: {
    browser: true,
  },
  rules: {
    'jsx-a11y/lang': 'error',
  },
};
