<a href="https://indielayer.com/">
  <img src="https://user-images.githubusercontent.com/3942799/147986660-cc494b39-559e-4534-be43-0438d0b11090.png" alt="Indielayer" width="300" />
</a>

> < Tools for creators. />

<br/>

# Indielayer ESLint Config with Vue

## Getting Started

Do you want to add the config to your own projects? There you go:

1. Add this package to your devDependencies

```bash
$ npm i -D @indielayer/eslint-config-vue
# or
$ yarn add -D @indielayer/eslint-config-vue
```

2. Install `eslint` and `typescript` if not already present locally or globally

```bash
$ npm i -D eslint typescript
# or
$ yarn add -D eslint typescript
```

3. Create a `.eslintrc` file

4. Extend our config:

```json
{
  "extends": [
    "@indielayer/eslint-config-vue"
  ]
}
```

## License

[MIT license](https://github.com/indielayer/eslint-config/blob/master/LICENSE) - Indielayer
