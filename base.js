module.exports = {
  extends: ['eslint:recommended'],
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
  rules: {
    'no-sequences': 2,
    'no-console': [1, { allow: ['warn', 'error'] }],
    'default-case': 2,
    eqeqeq: [2, 'smart'],
    'no-var': 2,
    yoda: 2,
    'one-var': [2, { initialized: 'never' }],
  },
}
