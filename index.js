module.exports = {
  extends: [
    'airbnb/base',
    'prettier',
    'plugin:flowtype/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'babel',
    'eslint-comments',
    'flowtype',
    'no-unused-vars-rest',
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
    'capitalized-comments': [2, 'never'],
    complexity: [2, 11],
    'max-depth': [2, 4],
    'max-nested-callbacks': [2, 3],
    'max-params': [2, 3],
    'max-statements-per-line': [2, {max: 1}],
    'max-statements': [2, 15],
    'no-confusing-arrow': 0,
    'no-implicit-coercion': [
      2,
      {
        boolean: false,
        number: true,
        string: true,
      },
    ],
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
    'no-unused-vars': 0, // in favor of `no-unused-vars-rest/no-unused-vars`

    'babel/array-bracket-spacing': 0,
    'babel/arrow-parens': 0,
    'babel/flow-object-type': 0,
    'babel/func-params-comma-dangle': 0,
    'babel/generator-star-spacing': 0,
    'babel/new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    'babel/no-await-in-loop': 0,
    'babel/no-invalid-this': 2,
    'babel/object-curly-spacing': 0,
    'babel/object-shorthand': 0,

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

    'flowtype/delimiter-dangle': [2, 'always-multiline'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/object-type-delimiter': [2, 'comma'],
    'flowtype/require-parameter-type': 2,
    'flowtype/require-variable-type': 0,
    'flowtype/semi': 2,
    'flowtype/sort-keys': 0,

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

    'no-unused-vars-rest/no-unused-vars': [
      2,
      {
        ignoreDestructuredVarsWithRest: true,
        vars: 'local',
        args: 'after-used',
      },
    ],

    'no-use-extend-native/no-use-extend-native': 2,

    'promise/always-return': 2,
    'promise/avoid-new': 0,
    'promise/catch-or-return': 2,
    'promise/no-callback-in-promise': 2,
    'promise/no-native': 0,
    'promise/no-nesting': 2,
    'promise/no-promise-in-callback': 2,
    'promise/no-return-wrap': 2,
    'promise/param-names': 2,
    'promise/prefer-await-to-callbacks': 0,
    'promise/prefer-await-to-then': 2,

    'unicorn/filename-case': 0,
    'unicorn/no-abusive-eslint-disable': 0, // in favor of `eslint-comments/no-unlimited-disable`
  },
};
