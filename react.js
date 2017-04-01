module.exports = {
  env: {
    browser: true,
  },
  extends: ['./react-base.js', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  rules: {
    'jsx-a11y/lang': 2,
  },
};
