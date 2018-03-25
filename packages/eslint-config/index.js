const Module = require('module');

// monkey patch Node module system to include local rules
/* eslint-disable no-underscore-dangle */
Module._resolveFilename = (original =>
  function getResolveFilename(...args) {
    const request = args[0];
    if (request === 'eslint-plugin-local') {
      return require.resolve('./rules');
    }

    return original.apply(this, args);
  })(Module._resolveFilename);
/* eslint-enable no-underscore-dangle */

module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: [
    'codebox',
    'eslint-comments',
    'local',
    'no-use-extend-native',
    'prettier',
    'promise',
    'unicorn',
  ],
  rules: {
    // http://eslint.org/docs/rules
    'no-warning-comments': [
      'warn',
      {terms: ['todo', 'fixme'], location: 'start'},
    ],
    'implicit-arrow-linebreak': 'off',
    'max-depth': ['error', {max: 4}],
    'max-nested-callbacks': ['error', {max: 3}],
    'max-params': ['error', {max: 3}],
    'max-statements-per-line': ['error', {max: 1}],
    'max-statements': ['error', {max: 15}],
    'newline-before-return': 'error',
    'no-compare-neg-zero': 'error',
    'no-implicit-coercion': [
      'error',
      {boolean: false, number: true, string: true},
    ],
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    // https://github.com/asn007/eslint-plugin-codebox
    'codebox/sort-imports': 'off',
    'codebox/sort-named-imports': ['error', {ignoreCase: false}],
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
    'import/exports-last': 'error',
    'import/no-anonymous-default-export': 'error',
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
        parser: 'babylon',
        semi: true,
      },
    ],
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
    'unicorn/no-fn-reference-in-iterator': 'off', // TODO: consider enabling?
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/number-literal-case': 'off', // conflicts with prettier
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-type-error': 'off',
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error',
  },
};
