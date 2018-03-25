module.exports = {
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'jest/consistent-test-it': ['error', {fn: 'test', withinDescribe: 'it'}],
    'jest/lowercase-name': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-hooks': ['error', {allow: ['afterEach']}],
    'jest/no-identical-title': 'error',
    'jest/no-jest-import': 'error',
    'jest/no-large-snapshots': 'off',
    'jest/no-test-prefixes': 'error',
    'jest/prefer-expect-assertions': 'off',
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
    'jest/prefer-to-have-length': 'error',
    'jest/valid-describe': 'error',
    'jest/valid-expect-in-promise': 'error',
    'jest/valid-expect': 'error',
  },
};
