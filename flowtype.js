module.exports = {
  extends: ['prettier/flowtype'],
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': 0,
    'flowtype/generic-spacing': 0,
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-weak-types': 0,
    'flowtype/require-parameter-type': 2,
    'flowtype/require-return-type': 0,
    'flowtype/require-valid-file-annotation': 0,
    'flowtype/require-variable-type': 0,
    'flowtype/semi': 0,
    'flowtype/sort-keys': 0,
    'flowtype/space-after-type-colon': 0,
    'flowtype/space-before-generic-bracket': 0,
    'flowtype/space-before-type-colon': 0,
    'flowtype/type-id-match': 0,
    'flowtype/union-intersection-spacing': 0,
    'flowtype/use-flow-type': 1,
    'flowtype/valid-syntax': 1,
  },
};
