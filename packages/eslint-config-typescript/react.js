module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.web.js',
          '.web.jsx',
          '.ts',
          '.tsx',
          '.web.ts',
          '.web.tsx',
          '.json',
        ],
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
        'web.js': 'never',
        'web.jsx': 'never',
        ts: 'never',
        tsx: 'never',
        'web.ts': 'never',
        'web.tsx': 'never',
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
  },
};
