# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="5.2.0"></a>
# [5.2.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v5.1.0...v5.2.0) (2017-02-07)


### Features

* **base:** disable conflicting eslint-plugin-flowtype rules ([44290f2](https://github.com/anvilabs/eslint-config-anvilabs/commit/44290f2))
* **react-native:** add globals ([4b7b407](https://github.com/anvilabs/eslint-config-anvilabs/commit/4b7b407))



<a name="5.1.0"></a>
# [5.1.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v5.0.0...v5.1.0) (2017-02-07)


### Features

* **base:** disable some unnecessary eslint-plugin-unicorn rules ([c74b294](https://github.com/anvilabs/eslint-config-anvilabs/commit/c74b294))



<a name="5.0.0"></a>
# [5.0.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v4.1.1...v5.0.0) (2017-02-07)


### Features

* **base:** use eslint-plugin-prettier for formatting with prettier ([3368e0a](https://github.com/anvilabs/eslint-config-anvilabs/commit/3368e0a))
* **react-base:** disable rules conflicting with prettier ([a795fe7](https://github.com/anvilabs/eslint-config-anvilabs/commit/a795fe7))


### BREAKING CHANGES

* base: ESLint will now report an error whenever your code does not match `prettier` formatting style.



<a name="4.1.1"></a>
## [4.1.1](https://github.com/anvilabs/eslint-config-anvilabs/compare/v4.1.0...v4.1.1) (2017-02-07)


### Bug Fixes

* bump eslint peer dependency version ([7949ab5](https://github.com/anvilabs/eslint-config-anvilabs/commit/7949ab5))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v4.0.0...v4.1.0) (2017-02-07)


### Features

* disable conflicting rules with eslint-config-prettier ([9b8f0b3](https://github.com/anvilabs/eslint-config-anvilabs/commit/9b8f0b3))
* update to latest eslint and eslint-config-airbnb versions ([868d92a](https://github.com/anvilabs/eslint-config-anvilabs/commit/868d92a))
* **base:** add eslint-plugin-no-unused-vars-rest rules ([1f512ee](https://github.com/anvilabs/eslint-config-anvilabs/commit/1f512ee))
* **base:** disable `import/prefer-default-export` rule ([6d865b5](https://github.com/anvilabs/eslint-config-anvilabs/commit/6d865b5))
* **base:** update eslint-plugin-promise rules ([e39ca58](https://github.com/anvilabs/eslint-config-anvilabs/commit/e39ca58))


### BREAKING CHANGES

* Many rules were removed to facilitate formatting with
prettier.



<a name="4.0.0"></a>
# [4.0.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v3.0.0...v4.0.0) (2017-01-10)


### Features

* **base:** add a bunch of new strict rules ([17b7ba6](https://github.com/anvilabs/eslint-config-anvilabs/commit/17b7ba6))
* **base:** provide more lenient options for `max-len` rule ([ce45bb0](https://github.com/anvilabs/eslint-config-anvilabs/commit/ce45bb0))
* **base:** set error level for all warning rules ([b240735](https://github.com/anvilabs/eslint-config-anvilabs/commit/b240735))


### BREAKING CHANGES

* base: Some rules that haven't previously affected the lint command's exit code may now cause the linter to fail.



<a name="3.0.0"></a>
# [3.0.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v2.1.0...v3.0.0) (2017-01-09)


### Features

* update to latest eslint and eslint-config-airbnb versions ([72f396d](https://github.com/anvilabs/eslint-config-anvilabs/commit/72f396d))


### BREAKING CHANGES

* Both eslint and eslint-config-airbnb had major version bumps, and thus many rules were changed/added.



<a name="2.1.0"></a>
# [2.1.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v2.0.1...v2.1.0) (2016-12-12)


### Features

* **base:** update eslint-plugin-promise and add its new rules ([88ef7ac](https://github.com/anvilabs/eslint-config-anvilabs/commit/88ef7ac))
* **base:** update flowtype/require-variable-type and add its new rules ([4e4440e](https://github.com/anvilabs/eslint-config-anvilabs/commit/4e4440e))
* **jest:** update eslint-plugin-jasmine ([17864c0](https://github.com/anvilabs/eslint-config-anvilabs/commit/17864c0))
* **react-native:** update eslint-plugin-react-native ([f9abb88](https://github.com/anvilabs/eslint-config-anvilabs/commit/f9abb88))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/anvilabs/eslint-config-anvilabs/compare/v2.0.0...v2.0.1) (2016-11-10)


### Bug Fixes

* add `lodash.js` file to distribution ([d94fb96](https://github.com/anvilabs/eslint-config-anvilabs/commit/d94fb96))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.6.3...v2.0.0) (2016-11-10)


### Features

* extract eslint-plugin-lodash-fp rules into a separate config ([65e5069](https://github.com/anvilabs/eslint-config-anvilabs/commit/65e5069))
* remove eslint-plugin-fp rules ([76555f7](https://github.com/anvilabs/eslint-config-anvilabs/commit/76555f7))
* update to latest eslint and eslint-config-airbnb versions ([9db1563](https://github.com/anvilabs/eslint-config-anvilabs/commit/9db1563))


### BREAKING CHANGES

* Both eslint and eslint-config-airbnb had major version bumps, and thus many rules were changed/added.
* Extending the base configuration does not include the [eslint-plugin-lodash-fp](https://github.com/jfmengels/eslint-plugin-lodash-fp) rules no more.
* All rules specified by [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-lodash-fp) have been removed.



<a name="1.6.3"></a>
## [1.6.3](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.6.2...v1.6.3) (2016-10-25)



<a name="1.6.2"></a>
## [1.6.2](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.6.1...v1.6.2) (2016-10-25)



<a name="1.6.1"></a>
## [1.6.1](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.6.0...v1.6.1) (2016-10-25)



<a name="1.6.0"></a>
# [1.6.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.5.0...v1.6.0) (2016-10-25)


### Features

* **base:** add `flowtype/object-type-delimiter` rule ([c6db00e](https://github.com/anvilabs/eslint-config-anvilabs/commit/c6db00e))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.4.0...v1.5.0) (2016-10-21)


### Features

* **base:** add `eslint-plugin-eslint-comments` rules ([3ed0742](https://github.com/anvilabs/eslint-config-anvilabs/commit/3ed0742))
* **base:** update `eslint-plugin-promise` and add its new rules ([7fac677](https://github.com/anvilabs/eslint-config-anvilabs/commit/7fac677))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.3.0...v1.4.0) (2016-10-18)


### Bug Fixes

* **find-new-rules:** use fixed eslint minor version ([28f1705](https://github.com/anvilabs/eslint-config-anvilabs/commit/28f1705))


### Features

* **react:** make several `react-native` rules applicable to `react` ([c516c80](https://github.com/anvilabs/eslint-config-anvilabs/commit/c516c80))
* **react-base:** allow `no-unused-expressions` with short circuit ([f857c8f](https://github.com/anvilabs/eslint-config-anvilabs/commit/f857c8f))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.2.0...v1.3.0) (2016-10-13)


### Features

* **react-native:** disable `global-require` and `no-console` rules ([07e7aa5](https://github.com/anvilabs/eslint-config-anvilabs/commit/07e7aa5))
* **react-native:** disable some `eslint-plugin-fp` rules ([0050431](https://github.com/anvilabs/eslint-config-anvilabs/commit/0050431))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.1.0...v1.2.0) (2016-10-10)


### Features

* **react-native:** disable `no-use-before-define` rule ([39567f0](https://github.com/anvilabs/eslint-config-anvilabs/commit/39567f0))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/anvilabs/eslint-config-anvilabs/compare/v1.0.0...v1.1.0) (2016-10-08)


### Features

* **jest:** disable some `eslint-plugin-fp` rules ([8f7ed2a](https://github.com/anvilabs/eslint-config-anvilabs/commit/8f7ed2a))



<a name="1.0.0"></a>
# 1.0.0 (2016-10-08)


### Features

* initial commit 🐣 ([6043e15](https://github.com/anvilabs/eslint-config-anvilabs/commit/6043e15))
