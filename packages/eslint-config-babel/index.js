module.exports = {
  plugins: ['babel'],
  parser: 'babel-eslint',
  rules: {
    // https://github.com/babel/eslint-plugin-babel
    'babel/array-bracket-spacing': 'off',
    'babel/arrow-parens': 'off',
    camelcase: 'off',
    'babel/camelcase': ['error', {properties: 'never'}],
    'babel/flow-object-type': 'off',
    'babel/func-params-comma-dangle': 'off',
    'babel/generator-star-spacing': 'off',
    'babel/new-cap': 'off',
    'babel/no-await-in-loop': 'off',
    'babel/no-invalid-this': 'error',
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': ['error', {allowShortCircuit: true}],
    'babel/object-curly-spacing': 'off',
    'babel/object-shorthand': 'off',
    'babel/quotes': 'off',
    'babel/semi': 'off',
    'babel/valid-typeof': 'error',
  },
};
