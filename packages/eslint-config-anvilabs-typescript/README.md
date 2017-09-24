# eslint-config-anvilabs-typescript

[![Version](https://img.shields.io/npm/v/eslint-config-anvilabs-typescript.svg)](http://npm.im/eslint-config-anvilabs-typescript)
[![Dependency Status](https://david-dm.org/anvilabs/eslint-config-anvilabs/status.svg?path=packages/eslint-config-anvilabs-typescript)](https://david-dm.org/anvilabs/eslint-config-anvilabs?path=packages/eslint-config-anvilabs-typescript)
[![devDependency Status](https://david-dm.org/anvilabs/eslint-config-anvilabs/status.svg?path=packages/eslint-config-anvilabs-typescript&type=dev)](https://david-dm.org/anvilabs/eslint-config-anvilabs?path=packages/eslint-config-anvilabs-typescript&type=dev)

Anvilabs' ESLint config for our Typescript codebases.

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of eslint/issues/3458), so installation may be as simple as:

```bash
$ yarn add eslint prettier eslint-config-anvilabs eslint-config-anvilabs-typescript --dev
# or
$ npm install eslint prettier eslint-config-anvilabs eslint-config-anvilabs-typescript --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['anvilabs', 'anvilabs-typescript'],
  rules: {
    // your overrides
  },
};
```

## License

[MIT License](../../LICENSE) © Anvilabs LLC
