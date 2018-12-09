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
    camelcase: 'off',
    'no-array-constructor': 'off',
    'no-restricted-globals': 'off', // conflicts with typescript, @see https://github.com/eslint/typescript-eslint-parser/issues/350
    'no-undef': 'off', // conflicts with typescript
    'no-unused-vars': 'off', // disabled in favor of `typescript/no-unused-vars`
    'no-use-before-define': 'off', // disabled in favor of `typescript/no-use-before-define`
    'no-useless-constructor': 'off', // conflicts with typescript
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/'], // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'], // space here to support sprockets directives
          balanced: true,
        },
      },
    ],
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
    'typescript/adjacent-overload-signatures': 'off', // TSLint is better at this
    'typescript/class-name-casing': 'off', // TSLint is better at this
    'typescript/explicit-function-return-type': 'off',
    'typescript/explicit-member-accessibility': 'off', // TSLint is better at this
    'typescript/generic-type-naming': ['error', '^([TUKV]|T[A-Z][a-zA-Z]+)$'],
    'typescript/interface-name-prefix': 'off', // TSLint is better at this
    'typescript/member-delimiter-style': 'off',
    'typescript/member-naming': 'off',
    'typescript/member-ordering': 'off', // type annotations should come first
    'typescript/no-angle-bracket-type-assertion': 'off', // TSLint is better at this
    'typescript/no-array-constructor': 'error',
    'typescript/no-empty-interface': 'off', // TSLint is better at this
    'typescript/no-explicit-any': 'off', // TSLint is better at this
    'typescript/no-inferrable-types': 'off', // TSLint is better at this
    'typescript/no-namespace': 'off', // TSLint is better at this
    'typescript/no-non-null-assertion': 'off', // TSLint is better at this
    'typescript/no-parameter-properties': 'off', // TSLint is better at this
    'typescript/no-triple-slash-reference': 'off', // TSLint is better at this
    'typescript/no-type-alias': 'off', // TSLint is better at this
    'typescript/no-unused-vars': 'error',
    'typescript/no-var-requires': 'off', // TSLint is better at this
    'typescript/no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: true},
    ],
    'typescript/prefer-namespace-keyword': 'off', // TSLint is better at this
    'typescript/type-annotation-spacing': 'off', // not necessary with prettier
  },
};
