module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
  ],
  rules: {
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
