module.exports = {
  extends: ['./base.js', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.web.js', '.web.jsx', '.json'],
      },
    },
  },
  rules: {
    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        'web.js': 'never',
        'web.jsx': 'never',
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    'jsx-a11y/lang': 'error',
  },
};
