module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    '@indielayer',
  ],
  parserOptions: {
    parser: 'babel-eslint',
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
        'allowFirstLine': false,
      },
    }],
  },
}
