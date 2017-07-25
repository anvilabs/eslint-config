module.exports = {
  overrides: [
    {
      plugins: ['jest'],
      files: '**/*-test.{js,ts}',
      env: {
        'jest/globals': true,
      },
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/valid-expect': 'error',
      },
    },
  ],
};
