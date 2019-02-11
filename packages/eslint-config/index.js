module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: [
    'eslint-comments',
    'no-use-extend-native',
    'promise',
    'sort-imports-es6-autofix',
    'unicorn',
  ],
  rules: {
    // http://eslint.org/docs/rules
    'no-warning-comments': [
      'warn',
      {terms: ['todo', 'fixme'], location: 'start'},
    ],
    'implicit-arrow-linebreak': 'off', // not necessary with prettier
    'max-depth': ['error', {max: 4}],
    'max-nested-callbacks': ['error', {max: 3}],
    'max-params': ['error', {max: 4}],
    'max-statements-per-line': ['error', {max: 1}],
    'newline-before-return': 'error',
    'no-compare-neg-zero': 'error',
    'no-implicit-coercion': [
      'error',
      {boolean: true, number: true, string: true},
    ],
    'no-magic-numbers': [
      'warn',
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-restricted-disable': 'off',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-use': [
      'error',
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line',
          'eslint-enable',
        ],
      },
    ],
    // https://github.com/benmosher/eslint-plugin-import
    'import/dynamic-import-chunkname': 'error',
    'import/exports-last': 'error',
    'import/group-exports': 'off', // false positives wit import/export syntax
    'import/no-anonymous-default-export': 'error',
    'import/no-cycle': 'off',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'import/prefer-default-export': 'off',
    // https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
    'no-use-extend-native/no-use-extend-native': 'error',
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/always-return': 'error',
    'promise/avoid-new': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'error',
    'promise/valid-params': 'error',
    // https://github.com/marudor/eslint-plugin-sort-imports-es6-autofix
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/catch-error-name': 'off',
    'unicorn/custom-error-definition': 'off',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': ['error', {'non-zero': 'not-equal'}],
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'off', // disabled in favor of `eslint-comments/no-unlimited-disable`
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 'off',
    'unicorn/no-fn-reference-in-iterator': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-unreadable-array-destructuring': 'off',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'off',
    'unicorn/number-literal-case': 'off', // conflicts with prettier
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-exponentiation-operator': 'error',
    'unicorn/prefer-node-append': 'off',
    'unicorn/prefer-query-selector': 'off',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'off',
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error',
  },
};
