module.exports = {
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/restrict-plus-operands': 'error',
  },
}
