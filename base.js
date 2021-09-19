module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['import'],
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
    /* eslint-plugin-import */
    'import/first': 2,
    'import/newline-after-import': 2,
    'import/no-duplicates': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
          // 'type',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'never',
      },
    ],
  },
}
