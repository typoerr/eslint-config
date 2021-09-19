module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
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
