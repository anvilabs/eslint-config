module.exports = {
  extends: [
    'airbnb/base',
    'plugin:flowtype/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'babel',
    'eslint-comments',
    'flowtype',
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
    'max-len': [1, 80],
    'no-multiple-empty-lines': [1, { max: 1 }],
    'no-underscore-dangle': 0,
    'object-curly-spacing': 0, // in favor of `babel/object-curly-spacing`

    'babel/array-bracket-spacing': 0,
    'babel/arrow-parens': 0,
    'babel/flow-object-type': 0,
    'babel/func-params-comma-dangle': 0,
    'babel/generator-star-spacing': 0,
    'babel/new-cap': [2, { newIsCap: true }],
    'babel/no-await-in-loop': 0,
    'babel/no-invalid-this': 0,
    'babel/object-curly-spacing': [2, 'always'],
    'babel/object-shorthand': 0,

    'eslint-comments/disable-enable-pair': 2,
    'eslint-comments/no-duplicate-disable': 2,
    'eslint-comments/no-unlimited-disable': 2,
    'eslint-comments/no-unused-disable': 2,
    'eslint-comments/no-unused-enable': 2,
    'eslint-comments/no-use': [2, {
      allow: ['eslint-disable', 'eslint-disable-line', 'eslint-disable-next-line', 'eslint-enable'],
    }],

    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/object-type-delimiter': [2, 'comma'],
    'flowtype/require-parameter-type': 2,
    'flowtype/require-variable-type': 0,
    'flowtype/semi': 2,
    'flowtype/sort-keys': 0,

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

    'promise/always-return': 2,
    'promise/avoid-new': 0,
    'promise/catch-or-return': 2,
    'promise/no-callback-in-promise': 1,
    'promise/no-native': 0,
    'promise/no-nesting': 1,
    'promise/no-promise-in-callback': 1,
    'promise/no-return-wrap': 0, // https://github.com/xjamundx/eslint-plugin-promise/issues/34
    'promise/param-names': 2,
    'promise/prefer-await-to-callbacks': 2,
    'promise/prefer-await-to-then': 2,

    'unicorn/filename-case': 0,
    'unicorn/no-abusive-eslint-disable': 0, // in favor of `eslint-comments/no-unlimited-disable`
  },
};
