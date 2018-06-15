module.exports = {
  plugins: ['babel'],
  parser: 'babel-eslint',
  rules: {
    'no-unused-expressions': 'off', // disabled in favor of `babel/no-unused-expressions`
    // https://github.com/babel/eslint-plugin-babel
    'babel/array-bracket-spacing': 'off',
    'babel/arrow-parens': 'off',
    'babel/flow-object-type': 'off',
    'babel/func-params-comma-dangle': 'off',
    'babel/generator-star-spacing': 'off',
    'babel/new-cap': 'off',
    'babel/no-await-in-loop': 'off',
    'babel/no-invalid-this': 'error',
    'babel/no-unused-expressions': ['error', {allowShortCircuit: true}],
    'babel/object-curly-spacing': 'off',
    'babel/object-shorthand': 'off',
    'babel/quotes': 'off',
    'babel/semi': 'off',
  },
};
