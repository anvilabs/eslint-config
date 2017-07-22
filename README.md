# eslint-config-anvilabs

[![Build Status](https://img.shields.io/travis/anvilabs/eslint-config-anvilabs.svg)](https://travis-ci.org/anvilabs/eslint-config-anvilabs)
[![Version](https://img.shields.io/npm/v/eslint-config-anvilabs.svg)](http://npm.im/eslint-config-anvilabs)
[![Dependency Status](https://img.shields.io/david/anvilabs/eslint-config-anvilabs.svg)](https://david-dm.org/anvilabs/eslint-config-anvilabs)
[![devDependency Status](https://img.shields.io/david/dev/anvilabs/eslint-config-anvilabs.svg)](https://david-dm.org/anvilabs/eslint-config-anvilabs?type=dev)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Anvilabs' ESLint config, following our internal styleguide. Makes use of [prettier](https://github.com/jlongster/prettier) for formatting.

## Usage

Install the conventions by running:

```bash
$ npm install --save-dev eslint prettier eslint-config-anvilabs
```

Then add the extends to your `.eslintrc.json`:

```js
{
  "extends": "anvilabs",
  "rules": {
    // your overrides
  }
}
```

### Other configs

This config also exposes a few other configs that we use often and pull in as needed.

You can use them standalone:

```js
{
  "extends": "anvilabs/<config-name>"
}
```

Or in combination with the base config (recommended):

```js
{
  "extends": ["anvilabs", "anvilabs/<config-name>"]
}
```

Available configs include:

- `"anvilabs/babel"` for usage with [babel transformations](https://github.com/babel/babel-eslint)
- `"anvilabs/flowtype"` for [Flow](https://flowtype.org/) related rules
- `"anvilabs/jest"` for [Jest](https://facebook.github.io/jest/) related rules
- `"anvilabs/lodash"` for [Lodash](https://lodash.com/) related rules
- `"anvilabs/react"` for [React](https://facebook.github.io/react/) related rules
- `"anvilabs/react-native"` for [React Native](https://facebook.github.io/react-native/) related rules

### Things to know

- All plugins needed for rules used by these configs are dependencies of this module so you don't have to install anything on your own.
- Running ESLint will report an error if your code does not match prettier style. The rule is autofixable – if you run ESLint with the `--fix` flag, your code will be formatted according to prettier style.

## Credits

Inspired by [Kent C. Dodds' ESLint config](https://github.com/kentcdodds/eslint-config-kentcdodds).

## License

[MIT License](./LICENSE) © Anvilabs LLC
