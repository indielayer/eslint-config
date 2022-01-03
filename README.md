<a href="https://indielayer.com/">
  <img src="https://user-images.githubusercontent.com/3942799/147986660-cc494b39-559e-4534-be43-0438d0b11090.png" alt="Indielayer" width="300" />
</a>

> < Tools for creators. />

<br/>

# Indielayer ESLint Config

[![GitHub Actions](https://github.com/indielayer/eslint-config/workflows/ci/badge.svg?branch=master)](https://github.com/indielayer/eslint-config/actions?query=workflow%3Aci)
[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@indielayer/eslint-config)](https://npmjs.com/package/@indielayer/eslint-config)
[![npm](https://flat.badgen.net/npm/dt/@indielayer/eslint-config)](https://npmjs.com/package/@indielayer/eslint-config)

ESlint config used on Indielayer

## Getting Started

Do you want to add the config to your own projects? There you go:

1. Add this package to your devDependencies

```bash
$ npm i -D @indielayer/eslint-config
# or
$ yarn add -D @indielayer/eslint-config
```

2. Install `eslint` and `typescript` if not already present locally or globally

```bash
$ npm i -D eslint typescript
# or
$ yarn add -D eslint typescript
```

3. Create a `.eslintrc` file

4. Extend our config (you can use just the scope name as ESLint will assume the `eslint-config` suffix):

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

## License

[MIT license](https://github.com/indielayer/eslint-config/blob/master/LICENSE) - Indielayer
