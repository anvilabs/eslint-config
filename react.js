module.exports = {
  env: {
    browser: true,
  },
  extends: [
    './react-base.js',
    'eslint-config-airbnb/rules/react-a11y',
  ],
  rules: {
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/aria-activedescendant-has-tabindex': 0,
    'jsx-a11y/iframe-has-title': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-distracting-elements': 0,
    'jsx-a11y/no-redundant-roles': 0,
  },
};
