module.exports = {
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended'],
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: require.resolve('@typescript-eslint/parser'),
      // TypeScriptで型違反していれば気づけるのでenvやparserOptionsで使いそうなもの全部入れている
      parserOptions: {
        ecmaVersion: 2019,
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
        },
        sourceType: 'module',
        // project: './tsconfig.json',
      },
      env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true,
        worker: true,
        serviceworker: true,
        jest: true,
        mocha: true,
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
