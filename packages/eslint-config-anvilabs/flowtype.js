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
    'no-unused-expressions': 'off', // disabled in favor of `flowtype/no-unused-expressions`
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/boolean-style': ['error', 'boolean'],
    'flowtype/define-flow-type': 'error',
    'flowtype/no-dupe-keys': 'error',
    'flowtype/no-mutable-array': 'error',
    'flowtype/no-primitive-constructor-types': 'error',
    'flowtype/no-types-missing-file-annotation': 'error',
    'flowtype/no-unused-expressions': 'error',
    'flowtype/no-weak-types': [
      'error',
      {
        any: false,
        Object: true,
        Function: true,
      },
    ],
    'flowtype/require-parameter-type': 'off',
    'flowtype/require-return-type': 'off',
    'flowtype/require-valid-file-annotation': [
      'error',
      'always',
      {
        annotationStyle: 'block',
      },
    ],
    'flowtype/require-variable-type': 'off',
    'flowtype/sort-keys': 'off',
    'flowtype/type-id-match': ['error', '^([A-Z][a-z0-9]+)+Type$'],
    'flowtype/use-flow-type': 'error',
    'flowtype/valid-syntax': 'off',
  },
};
