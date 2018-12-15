# @anvilabs/eslint-config

[![Version](https://img.shields.io/npm/v/@anvilabs/eslint-config.svg)](http://npm.im/@anvilabs/eslint-config)
[![Dependency Status](https://david-dm.org/anvilabs/eslint-config/status.svg?path=packages/eslint-config)](https://david-dm.org/anvilabs/eslint-config?path=packages/eslint-config)
[![devDependency Status](https://david-dm.org/anvilabs/eslint-config/dev-status.svg?path=packages/eslint-config)](https://david-dm.org/anvilabs/eslint-config?path=packages/eslint-config&type=dev)

Anvilabs' base ESLint config. Intended to be used together with [prettier](https://github.com/jlongster/prettier).

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation may be as simple as:

```bash
$ yarn add eslint prettier @anvilabs/eslint-config --dev
# or
$ npm install eslint prettier @anvilabs/eslint-config --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@anvilabs/eslint-config',
  rules: {
    // your overrides
  },
};
```

### Other configs

This config also exposes a few other configs that we use often and pull in as needed.

You can use them standalone:

```js
module.exports = {
  extends: '@anvilabs/eslint-config/<config-name>',
};
```

Or in combination with the base config (recommended):

```js
module.exports = {
  extends: ['@anvilabs/eslint-config', '@anvilabs/eslint-config/<config-name>'],
};
```

You can also use [ESLint@4 overrides](http://eslint.org/docs/user-guide/configuring#configuration-based-on-glob-patterns) to apply a config only to certain files. For example:

```js
module.exports = {
  ...
  overrides: [
    Object.assign(
      {
        files: ['**/__tests__/*-test.js', '**/__mocks__/*.js'],
      },
      require('@anvilabs/eslint-config/jest')
    ),
  ],
};
```

Available configs include:

- `'@anvilabs/eslint-config/jest'` for [Jest](https://facebook.github.io/jest/) related rules
- `'@anvilabs/eslint-config/lodash'` for [Lodash](https://lodash.com/) related rules
- `'@anvilabs/eslint-config/ramda'` for [Ramda](https://ramdajs.com/) related rules
- `'@anvilabs/eslint-config/script'` for usage with config files or scripts

## License

[MIT License](../../LICENSE) © Anvilabs LLC
