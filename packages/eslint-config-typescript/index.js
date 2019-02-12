module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        directory: process.cwd(),
        extensions: ['.js', '.ts', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts'],
  },
  rules: {
    'no-undef': 'off',
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
    'import/named': 'off', // https://github.com/benmosher/eslint-plugin-import/issues/1282
    'import/no-named-as-default-member': 'off', // conflicts with typescript
    'import/no-named-as-default': 'off', // conflicts with typescript
    // https://github.com/nzakas/eslint-plugin-typescript
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'error',
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/generic-type-naming': [
      'error',
      '^([TUKV]|T([A-Z0-9][a-zA-Z0-9]*){0,1})$',
    ],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/member-naming': 'off',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-for-in-array': 'off', // requires type info
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-object-literal-type-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-triple-slash-reference': 'error',
    '@typescript-eslint/no-type-alias': [
      'off',
      {
        allowAliases: 'always',
        allowCallbacks: 'always',
        allowLiterals: 'in-unions-and-intersections',
        allowMappedTypes: 'always',
      },
    ],
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // requires type info
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // in favor of tsc's `noUnusedLocals` and `noUnusedParameters`
    '@typescript-eslint/no-use-before-define': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-interface': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off', // requires type info
  },
};
