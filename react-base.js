module.exports = {
  extends: ['eslint-config-airbnb/rules/react', 'prettier/react'],
  rules: {
    'global-require': 0,
    'no-use-before-define': 0,
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-indent': 0,
    'react/no-unused-prop-types': 0, // https://github.com/yannickcr/eslint-plugin-react/issues/885
    'react/sort-comp': [
      2,
      {
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
      },
    ],
  },
};
