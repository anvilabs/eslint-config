module.exports = {
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  plugins: [
    'babel',
    'eslint-comments',
    'no-use-extend-native',
    'prettier',
    'promise',
    'unicorn',
  ],
  rules: {
    'capitalized-comments': [2, 'never'],
    complexity: [2, 11],
    'max-depth': [2, 4],
    'max-nested-callbacks': [2, 3],
    'max-params': [2, 3],
    'max-statements-per-line': [2, {max: 1}],
    'max-statements': [2, 15],
    'no-compare-neg-zero': 2,
    'no-implicit-coercion': [2, {boolean: false, number: true, string: true}],
    'no-magic-numbers': [
      2,
      {
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-underscore-dangle': 0,
    semi: 0, // deprecated in favor of `babel/semi`
    // https://github.com/babel/eslint-plugin-babel
    'babel/array-bracket-spacing': 0,
    'babel/arrow-parens': 0,
    'babel/flow-object-type': 0,
    'babel/func-params-comma-dangle': 0,
    'babel/generator-star-spacing': 0,
    'babel/new-cap': [2, {newIsCap: true, capIsNew: true}],
    'babel/no-await-in-loop': 0,
    'babel/no-invalid-this': 2,
    'babel/object-curly-spacing': 0,
    'babel/object-shorthand': 0,
    'babel/semi': [2, 'always'],
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': 2,
    'eslint-comments/no-duplicate-disable': 2,
    'eslint-comments/no-unlimited-disable': 2,
    'eslint-comments/no-unused-disable': 2,
    'eslint-comments/no-unused-enable': 2,
    'eslint-comments/no-use': [
      2,
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
    'import/order': [
      2,
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
    'import/prefer-default-export': 0,
    // https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
    'no-use-extend-native/no-use-extend-native': 2,
    // https://github.com/not-an-aardvark/eslint-plugin-prettier
    'prettier/prettier': [
      2,
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        parser: 'babylon',
      },
    ],
    // https://github.com/xjamundx/eslint-plugin-promise
    'promise/avoid-new': 0,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 2,
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'unicorn/catch-error-name': 0,
    'unicorn/custom-error-definition': 0,
    'unicorn/filename-case': 0,
    'unicorn/no-abusive-eslint-disable': 0, // in favor of `eslint-comments/no-unlimited-disable`
    'unicorn/prefer-type-error': 0,
  },
};
