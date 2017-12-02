# @anvilabs/eslint-config-react

[![Version](https://img.shields.io/npm/v/@anvilabs/eslint-config-react.svg)](http://npm.im/@anvilabs/eslint-config-react)
[![Dependency Status](https://david-dm.org/anvilabs/eslint-config/status.svg?path=packages/eslint-config-react)](https://david-dm.org/anvilabs/eslint-config?path=packages/eslint-config-react)
[![devDependency Status](https://david-dm.org/anvilabs/eslint-config/dev-status.svg?path=packages/eslint-config-react)](https://david-dm.org/anvilabs/eslint-config?path=packages/eslint-config-react&type=dev)

Anvilabs' ESLint config for our React/React Native apps.

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation may be as simple as: 

```bash
$ yarn add eslint prettier @anvilabs/eslint-config @anvilabs/eslint-config-react --dev
# or
$ npm install eslint prettier @anvilabs/eslint-config @anvilabs/eslint-config-react --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@anvilabs/eslint-config', '@anvilabs/eslint-config-react' /* or '@anvilabs/eslint-config-react/native' */],
  rules: {
    // your overrides
  },
};
```

Additional configs include:

- `'@anvilabs/eslint-config-typescript/babel-react-require'` for the import plugin to work with [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver)

## License

[MIT License](../../LICENSE) © Anvilabs LLC
