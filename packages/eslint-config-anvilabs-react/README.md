# eslint-config-anvilabs-react

[![Version](https://img.shields.io/npm/v/eslint-config-anvilabs-react.svg)](http://npm.im/eslint-config-anvilabs-react)
[![Dependency Status](https://david-dm.org/anvilabs/eslint-config-anvilabs/status.svg?path=packages/eslint-config-anvilabs-react)](https://david-dm.org/anvilabs/eslint-config-anvilabs?path=packages/eslint-config-anvilabs-react)
[![devDependency Status](https://david-dm.org/anvilabs/eslint-config-anvilabs/dev-status.svg?path=packages/eslint-config-anvilabs-react)](https://david-dm.org/anvilabs/eslint-config-anvilabs?path=packages/eslint-config-anvilabs-react&type=dev)

Anvilabs' ESLint config for our React/React Native apps.

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation may be as simple as: 

```bash
$ yarn add eslint prettier eslint-config-anvilabs eslint-config-anvilabs-react --dev
# or
$ npm install eslint prettier eslint-config-anvilabs eslint-config-anvilabs-react --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['anvilabs', 'anvilabs-react' /* or 'anvilabs-react/native' */],
  rules: {
    // your overrides
  },
};
```

Additional configs include:

- `'anvilabs-typescript/babel-react-require'` for the import plugin to work with [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

## License

[MIT License](../../LICENSE) © Anvilabs LLC
