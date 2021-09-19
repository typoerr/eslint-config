module.exports = {
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended'],
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: require.resolve('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
        },
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
      },
    },
  ],
}
