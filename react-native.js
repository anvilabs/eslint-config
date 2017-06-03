module.exports = {
  extends: ['./react-base.js'],
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
  rules: {
    'global-require': 'off',
    'no-console': 'off',
    // https://github.com/Intellicode/eslint-plugin-react-native
    'react-native/no-color-literals': 'error',
    'react-native/no-inline-styles': 'error',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
  },
};
