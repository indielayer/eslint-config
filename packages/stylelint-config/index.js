module.exports = {
  root: true,
  plugins: [],
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ],
  },
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-standard-scss'],
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global'],
          },
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'],
          },
        ],
        'function-no-unknown': [true, { ignoreFunctions: ['v-bind'] }],
      },
    },
  ],
}
