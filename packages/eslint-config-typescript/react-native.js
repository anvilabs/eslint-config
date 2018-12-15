module.exports = {
  settings: {
    'import/resolver': {
      typescript: {
        directory: process.cwd(),
        extensions: [
          '.js',
          '.jsx',
          '.ios.js',
          '.ios.jsx',
          '.android.js',
          '.android.jsx',
          '.native.js',
          '.native.jsx',
          '.ts',
          '.tsx',
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.native.ts',
          '.native.tsx',
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
        'native.js': 'never',
        'native.jsx': 'never',
        ts: 'never',
        tsx: 'never',
        'ios.ts': 'never',
        'ios.tsx': 'never',
        'android.ts': 'never',
        'android.tsx': 'never',
        'native.ts': 'never',
        'native.tsx': 'never',
      },
    ],
    // https://github.com/yannickcr/eslint-plugin-react
    'react/jsx-filename-extension': ['error', {extensions: ['.tsx']}],
  },
};
