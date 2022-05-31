module.exports = {
  extends: [
    '@indielayer',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    // 0 - 'off'
    // 1 - 'warn'
    // 2 - 'error'
    'vue/no-v-html': 0,
    'vue/valid-v-on': 0,
    'vue/require-default-prop': 0,
    'vue/multi-word-component-names': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/html-self-closing': [2, {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always',
      },
    }],
    'vue/max-attributes-per-line': [2, {
      'singleline': 4,
      'multiline': {
        'max': 1,
      },
    }],
  },
}
