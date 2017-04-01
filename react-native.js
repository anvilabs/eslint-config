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
    'no-console': 0,
    // https://github.com/Intellicode/eslint-plugin-react-native
    'react-native/no-color-literals': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
  },
};
