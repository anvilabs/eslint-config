module.exports = {
  overrides: [
    {
      files: '**/*.ts',
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
        'typescript/explicit-member-accessibility': 'error',
        'typescript/interface-name-prefix': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/no-explicit-any': 'error',
        'typescript/no-namespace': ['error', {allowDefinitionFiles: true}],
        'typescript/no-triple-slash-reference': 'error',
        'typescript/no-unused-vars': 'error',
        'typescript/prefer-namespace-keyword': 'error',
        'typescript/type-annotation-spacing': 'off',
      },
    },
  ],
};
