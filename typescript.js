module.exports = {
  plugins: ['typescript'],
  parser: 'typescript-eslint-parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts'],
  },
  rules: {
    'no-undef': 'off', // conflicts with typescript
    'no-unused-vars': 'off', // conflicts with typescript
    'no-useless-constructor': 'off', // conflicts with typescript
    strict: 'off', // conflicts with typescript
    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'import/no-named-as-default-member': 'off', // conflicts with typescript
    'import/no-named-as-default': 'off', // conflicts with typescript
    // https://github.com/nzakas/eslint-plugin-typescript
    'typescript/explicit-member-accessibility': 'error',
    'typescript/interface-name-prefix': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-unused-vars': 'error',
    'typescript/prefer-namespace-keyword': 'error',
    'typescript/type-annotation-spacing': 'off',
  },
};
