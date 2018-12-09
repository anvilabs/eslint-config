module.exports = {
  extends: ['./base.js'],
  plugins: ['react-native'],
  globals: {
    'react-native/react-native': true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ios.js',
          '.ios.jsx',
          '.android.js',
          '.android.jsx',
          '.native.js',
          '.native.jsx',
          '.json',
        ],
      },
    },
  },
  rules: {
    'no-console': 'off',
    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        'ios.js': 'never',
        'ios.jsx': 'never',
        'android.js': 'never',
        'android.jsx': 'never',
        'native.js': 'never',
        'native.jsx': 'never',
      },
    ],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y
    'jsx-a11y/accessible-emoji': 'off',
    // https://github.com/Intellicode/eslint-plugin-react-native
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-raw-text': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
  },
};
