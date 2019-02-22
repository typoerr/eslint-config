module.exports = {
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
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
    'no-sequences': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'default-case': 'error',
    eqeqeq: ['error', 'smart'],
    'no-var': 'error',
    yoda: 'error',
    'one-var': ['error', { initialized: 'never' }],
  },
}
