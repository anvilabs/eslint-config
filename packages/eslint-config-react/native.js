module.exports = {
  extends: ['./base.js'],
  plugins: ['react-native'],
  globals: {
    __DEV__: false,
    cancelAnimationFrame: false,
    cancelIdleCallback: false,
    fetch: false,
    navigator: false,
    requestAnimationFrame: false,
    requestIdleCallback: false,
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
    // https://github.com/Intellicode/eslint-plugin-react-native
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
  },
};
