module.exports = {
  extends: ['plugin:flowtype/recommended', 'prettier/flowtype'],
  plugins: ['flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/require-parameter-type': 2,
    'flowtype/require-variable-type': 0,
    'flowtype/sort-keys': 0,
  },
};
