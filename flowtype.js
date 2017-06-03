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
    'flowtype/define-flow-type': 2,
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': 0,
    'flowtype/require-parameter-type': 0,
    'flowtype/require-return-type': 0,
    'flowtype/require-valid-file-annotation': [
      2,
      'always',
      {
        annotationStyle: 'block',
      },
    ],
    'flowtype/require-variable-type': 0,
    'flowtype/sort-keys': 0,
    'flowtype/type-id-match': [2, '^([A-Z][a-z0-9]+)+Type$'],
    'flowtype/use-flow-type': 2,
    'flowtype/valid-syntax': 0,
  },
};
