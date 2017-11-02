module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ios.js',
          '.ios.jsx',
          '.android.js',
          '.android.jsx',
          '.ts',
          '.tsx',
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
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
        'ios.js': 'never',
        'ios.jsx': 'never',
        'android.js': 'never',
        'android.jsx': 'never',
        ts: 'never',
        tsx: 'never',
        'ios.ts': 'never',
        'ios.tsx': 'never',
        'android.ts': 'never',
        'android.tsx': 'never',
      },
    ],
  },
};
