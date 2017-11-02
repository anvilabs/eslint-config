module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', 'jsx', '.ts', '.tsx'],
  },
  rules: {
    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
  },
};
