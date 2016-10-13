module.exports = {
  extends: [
    './react-base.js',
  ],
  plugins: [
    'react-native',
  ],
  rules: {
    'no-use-before-define': 0,

    'fp/no-class': 0,
    'fp/no-mutation': [2, {
      commonjs: true,
      allowThis: true,
      exceptions: [
        { property: 'contextTypes' },
        { property: 'defaultProps' },
        { property: 'propTypes' },
      ],
    }],
    'fp/no-this': 0,
    'fp/no-unused-expression': 0,

    'react-native/no-color-literals': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
  },
};
