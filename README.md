![IndielayerUI-Logo-Dark](.github/logo_dark.svg#gh-dark-mode-only)
![IndielayerUI-Logo-Light](.github/logo.svg#gh-light-mode-only)

> < Tools for creators. />

# Indielayer ESLint Config

<p>
  <a href="https://github.com/indielayer/eslint-config/actions/workflows/release_production.yml"><img src="https://github.com/indielayer/eslint-config/actions/workflows/release_production.yml/badge.svg?branch=main&event=push" alt="ci"></a>
  <a href="https://www.npmjs.com/package/@indielayer/eslint-config"><img src="https://badgen.net/npm/dm/@indielayer/eslint-config" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@indielayer/eslint-config"><img src="https://badgen.net/npm/v/@indielayer/eslint-config/latest" alt="Version"></a>
  <a href="https://www.npmjs.com/package/@indielayer/eslint-config"><img src="https://badgen.net/npm/license/@indielayer/eslint-config" alt="License"></a>
</p>

ESlint config by Indielayer

## Getting Started

Do you want to add the config to your own projects? There you go:

1. Add to your devDependencies

```bash
$ npm i -D @indielayer/eslint-config eslint
# or
$ yarn add -D @indielayer/eslint-config eslint
```

2. Create a `.eslintrc` file

3. Extend our config (you can use just the scope name as ESLint will assume the `eslint-config` suffix):

```json
{
  "extends": [
    "@indielayer"
  ]
}
```

## Full example

A full example `.eslintrc`:

```json
{
  "root": true,
  "extends": [
    "@indielayer"
  ]
}
```

## Vue 3

If you're using Vue 3, follow [Getting Started](#getting-started) section by replacing `@indielayer/eslint-config` by `@indielayer/eslint-config-vue`.

And in your `.eslintrc` all you need is :

```json
{
  "extends": [
    "@indielayer/eslint-config-vue"
  ]
}
```


## Stylelint

1. Add this package to your devDependencies

```bash
$ npm i -D stylelint @indielayer/stylelint-config
# or
$ yarn add -D stylelint @indielayer/stylelint-config
```

2. Create a `.stylelintrc.js` file

3. Extend our config:

```js
module.exports = {
  root: true,
  extends: ['@indielayer/stylelint-config'],
}
```

## License

[MIT license](https://github.com/indielayer/eslint-config/blob/master/LICENSE) - Indielayer
