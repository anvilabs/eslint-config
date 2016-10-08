module.exports = {
  extends: [
    'airbnb/base',
    'plugin:flowtype/recommended',
    'plugin:fp/recommended',
    'plugin:lodash-fp/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'babel',
    'flowtype',
    'fp',
    'lodash-fp',
    'no-use-extend-native',
    'promise',
    'unicorn',
  ],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'array-bracket-spacing': 0, // disable in favor of `babel/array-bracket-spacing`
    'arrow-parens': 0, // disable in favor of `babel/arrow-parens`
    'generator-star-spacing': 0, // disable in favor of `babel/generator-star-spacing`
    'max-len': [1, 80],
    'no-duplicate-imports': 0, // disable in favor of `import/no-duplicates`
    'no-multiple-empty-lines': [1, { max: 1 }],
    'no-underscore-dangle': 0,
    'object-curly-spacing': 0, // disable in favor of `babel/object-curly-spacing`
    'object-shorthand': 0, // disable in favor of `babel/object-shorthand`

    'babel/array-bracket-spacing': [2, 'never'],
    'babel/arrow-parens': [2, 'as-needed'],
    'babel/flow-object-type': 0, // leave here until migrated to `eslint-plugin-flowtype`
    'babel/func-params-comma-dangle': [2, 'always-multiline'],
    'babel/generator-star-spacing': [2, { before: false, after: true }],
    'babel/new-cap': [2, { newIsCap: true }],
    'babel/no-await-in-loop': 2,
    'babel/object-curly-spacing': [2, 'always'],
    'babel/object-shorthand': [2, 'always'],

    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/require-parameter-type': 2,
    'flowtype/semi': 2,
    'flowtype/sort-keys': 0,

    'fp/no-mutation': ['error', { commonjs: true }],
    'fp/no-nil': 0,
    'fp/no-throw': 0,

    'import/order': [1, {
      groups: [
        'builtin',
        'external',
        'internal',
        ['parent', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
    }],

    'no-use-extend-native/no-use-extend-native': 2,

    'promise/always-catch': 0, // deprecated
    'promise/always-return': 2,
    'promise/catch-or-return': 2,
    'promise/no-native': 0,
    'promise/param-names': 2,

    'unicorn/filename-case': 0,
  },
};
