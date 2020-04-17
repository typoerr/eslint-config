module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-sequences': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'default-case': 'error',
    eqeqeq: ['error', 'smart'],
    'no-var': 'error',
    yoda: 'error',
    'one-var': ['error', { initialized: 'never' }],
  },
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
  },
  ignorePatterns: ['**/public/**', '**/dist/**', '**/node_modules/**'],
}
