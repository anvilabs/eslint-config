# eslint-config-anvilabs

[![Build Status](https://img.shields.io/travis/anvilabs/eslint-config-anvilabs.svg)](https://travis-ci.org/anvilabs/eslint-config-anvilabs)
[![Version](https://img.shields.io/npm/v/eslint-config-anvilabs.svg)](http://npm.im/eslint-config-anvilabs)
[![Dependency Status](https://img.shields.io/david/anvilabs/eslint-config-anvilabs.svg)](https://david-dm.org/anvilabs/eslint-config-anvilabs)
[![devDependency Status](https://img.shields.io/david/dev/anvilabs/eslint-config-anvilabs.svg)](https://david-dm.org/anvilabs/eslint-config-anvilabs?type=dev)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli)

Anvilabs' ESLint config, following our internal styleguide. Feel free to use these conventions :-)

## Usage

Install the conventions by running:

```bash
$ npm install --save-dev eslint eslint-config-anvilabs
```

Then add the extends to your `.eslintrc`:

```json
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

```json
{
  "extends": "anvilabs/<config-name>"
}
```

Or in combination with the base config (recommended)

```json
{
  "extends": ["anvilabs", "anvilabs/<config-name>"]
}
```

### Things to know

- The default config opts to use the `eslint-plugin-babel` rules over the ESLint rules to enable the stage features that ESLint doesn't support.
- All plugins needed for rules used by these configs are dependencies of this module so you don't have to install anything on your own.

## Credits

Inspired by [Kent C. Dodds' ESLint config](https://github.com/kentcdodds/eslint-config-kentcdodds).

## License

[MIT License](./LICENSE) © Anvilabs LLC 
