module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
  ],
  rules: {
    'global-require': 0,
    'no-use-before-define': 0,
    'no-unused-expressions': [2, {
      allowShortCircuit: true,
    }],

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

    'react/jsx-filename-extension': 0,
    'react/no-unused-prop-types': 0, // https://github.com/yannickcr/eslint-plugin-react/issues/885
    'react/sort-comp': [2, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
    }],
  },
};
