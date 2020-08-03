module.exports = {
  env: {
    node: true,
    browser: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // 0 - 'off'
    // 1 - 'warn'
    // 2 - 'error'
    'quotes': [2, 'single'],
    'indent': [2, 2],
    'semi': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'computed-property-spacing': [2, 'never'],
    'comma-dangle': [2, 'never'],
    'array-bracket-newline': 0,
    'array-bracket-spacing': [2, 'never'],
    'no-multiple-empty-lines': [2, { 'max': 1, 'maxEOF': 0, 'maxBOF': 0 }],
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    'space-infix-ops': 2,
    'space-before-blocks': 2,
    'no-console': 0,
    'no-regex-spaces': 0,
    'no-debugger': 0,
    'no-unused-vars': 0,
    'no-mixed-spaces-and-tabs': 0,
    'prefer-const': 2,
    'prefer-destructuring': [2, {
      AssignmentExpression: {
        array: false,
        object: false
      },
      VariableDeclarator: {
        array: true,
        object: true
      }
    }, {
      enforceForRenamedProperties: false
    }
    ],
    'arrow-parens': [2, 'always'],
    'arrow-spacing': 2,
    'no-var': 2,
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', next: 'return', prev: '*' },
      { blankLine: 'always', next: '*', prev: ['const', 'let'] },
      { blankLine: 'any', next: ['const', 'let'], prev: ['const', 'let'] }
    ],
    // Removed rule 'disallow the use of undeclared variables unless mentioned in /*global */ comments' from recommended eslint rules
    'no-undef': 0,
    // Warn against template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 1,
    // Warn if return statements do not either always or never specify values
    'consistent-return': 1,
    // Warn if no return statements in callbacks of array methods
    'array-callback-return': 1,
    // Require the use of === and !==
    'eqeqeq': 2,
    // Disallow the use of alert, confirm, and prompt
    'no-alert': 0,
    // Disallow the use of arguments.caller or arguments.callee
    'no-caller': 2,
    // Disallow null comparisons without type-checking operators
    'no-eq-null': 2,
    // Disallow the use of eval()
    'no-eval': 2,
    // Warn against extending native types
    'no-extend-native': 1,
    // Warn against unnecessary calls to .bind()
    'no-extra-bind': 1,
    // Warn against unnecessary labels
    'no-extra-label': 1,
    // Disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 2,
    // Warn against function declarations and expressions inside loop statements
    'no-loop-func': 1,
    // Disallow new operators with the Function object
    'no-new-func': 2,
    // Warn against new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 1,
    // Disallow throwing literals as exceptions
    'no-throw-literal': 2,
    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 2,
    // Enforce “for” loop update clause moving the counter in the right direction
    'for-direction': 2,
    // Enforce return statements in getters
    'getter-return': 2,
    // Disallow await inside of loops
    'no-await-in-loop': 2,
    // Disallow comparing against -0
    'no-compare-neg-zero': 2,
    // Warn against catch clause parameters from shadowing variables in the outer scope
    'no-catch-shadow': 1,
    // Disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 2,
    // Enforce return statements in callbacks of array methods
    'callback-return': 2,
    // Require error handling in callbacks
    'handle-callback-err': 2,
    // Warn against string concatenation with __dirname and __filename
    'no-path-concat': 1,
    // Prefer using arrow functions for callbacks
    'prefer-arrow-callback': 1,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-var-requires': 0
  }
}
