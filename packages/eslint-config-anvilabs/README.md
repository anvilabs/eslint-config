# eslint-config-anvilabs

[![Version](https://img.shields.io/npm/v/eslint-config-anvilabs.svg)](http://npm.im/eslint-config-anvilabs)
[![Dependency Status](https://david-dm.org/anvilabs/eslint-config-anvilabs/status.svg?path=packages/eslint-config-anvilabs)](https://david-dm.org/anvilabs/eslint-config-anvilabs?path=packages/eslint-config-anvilabs)
[![devDependency Status](https://david-dm.org/anvilabs/eslint-config-anvilabs/dev-status.svg?path=packages/eslint-config-anvilabs)](https://david-dm.org/anvilabs/eslint-config-anvilabs?path=packages/eslint-config-anvilabs&type=dev)

Anvilabs' base ESLint config. Makes use of [prettier](https://github.com/jlongster/prettier) for formatting.

## Usage

This config relies dangerously on npm@3/yarn flatter tree for its dependencies (because of [eslint/issues/3458](https://github.com/eslint/eslint/issues/3458)), so installation may be as simple as:

```bash
$ yarn add eslint prettier eslint-config-anvilabs --dev
# or
$ npm install eslint prettier eslint-config-anvilabs --save-dev
```

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: 'anvilabs',
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
  extends: 'anvilabs/<config-name>',
};
```

Or in combination with the base config (recommended):

```js
module.exports = {
  extends: ['anvilabs', 'anvilabs/<config-name>'],
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
      require('eslint-config-anvilabs/jest')
    ),
  ],
};
```

Available configs include:

- `'anvilabs/babel'` for usage with [babel transformations](https://github.com/babel/babel-eslint)
- `'anvilabs/flowtype'` for [Flow](https://flowtype.org/) related rules
- `'anvilabs/jest'` for [Jest](https://facebook.github.io/jest/) related rules
- `'anvilabs/lodash'` for [Lodash](https://lodash.com/) related rulesrules

### Things to know

- Running ESLint will report an error if your code does not match prettier style. The rule is autofixable – if you run ESLint with the `--fix` flag, your code will be formatted according to prettier style.

## License

[MIT License](../../LICENSE) © Anvilabs LLC
