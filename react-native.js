module.exports = {
  extends: [
    './react-base.js',
  ],
  plugins: [
    'react-native',
  ],
  rules: {
    'no-console': 0,

    'react-native/no-color-literals': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
  },
};
