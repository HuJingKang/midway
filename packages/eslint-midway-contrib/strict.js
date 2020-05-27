module.exports = {
  extends: ['./recommended.js'],
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/member-ordering': [0],
    '@typescript-eslint/method-signature-style': [2],
    '@typescript-eslint/no-explicit-any': [1],
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 2,
    '@typescript-eslint/prefer-includes': 1,
    '@typescript-eslint/prefer-optional-chain': 1,
    '@typescript-eslint/prefer-readonly': 1,
    '@typescript-eslint/prefer-readonly-parameter-types': 0,
    '@typescript-eslint/prefer-string-starts-ends-with': 1,
    '@typescript-eslint/prefer-ts-expect-error': 1,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/require-array-sort-compare': 2,
    'no-return-await': 0,
    '@typescript-eslint/return-await': 2,
    // "@typescript-eslint/strict-boolean-expressions": 2,
    '@typescript-eslint/switch-exhaustiveness-check': 1,

    // https://eslint.org/docs/rules/
    'no-floating-decimal': 2,
    'no-multi-str': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-return-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-template-curly-in-string': 1,
    'no-undef-init': 1,
    radix: 2,

    'require-unicode-regexp': 1,

    // https://eslint.org/docs/rules/#stylistic-issues
    'no-bitwise': 2,
    'no-mixed-operators': 1,
    'no-new-object': 2,
    'no-tabs': 1,
    'no-unneeded-ternary': 1,
    'prefer-object-spread': 1,
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    'prefer-destructuring': 1,
    'prefer-rest-params': 1,
    'rest-spread-spacing': [1, 'never'],

    // https://github.com/benmosher/eslint-plugin-import
    'import/no-extraneous-dependencies': [2, { devDependencies: false, optionalDependencies: false, peerDependencies: false } ],
  },
};