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
    // https://github.com/not-an-aardvark/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        useTabs: false,
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        parser: 'typescript',
        semi: true,
      },
    ],
    // https://github.com/nzakas/eslint-plugin-typescript
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/class-name-casing': 'error',
    'typescript/explicit-function-return-type': 'off',
    'typescript/explicit-member-accessibility': 'error',
    'typescript/interface-name-prefix': 'error',
    'typescript/member-delimiter-style': 'off',
    'typescript/member-naming': 'off',
    'typescript/member-ordering': 'error',
    'typescript/no-angle-bracket-type-assertion': 'error',
    'typescript/no-array-constructor': 'error',
    'typescript/no-empty-interface': 'error',
    'typescript/no-explicit-any': 'off',
    'typescript/no-namespace': ['error', {allowDefinitionFiles: true}],
    'typescript/no-non-null-assertion': 'off',
    'typescript/no-parameter-properties': 'off',
    'typescript/no-triple-slash-reference': 'error',
    'typescript/no-type-alias': 'off',
    'typescript/no-unused-vars': 'error',
    'typescript/no-use-before-define': [
      'error',
      {functions: true, classes: true, variables: true},
    ],
    'typescript/prefer-namespace-keyword': 'error',
    'typescript/type-annotation-spacing': 'off',
  },
};
