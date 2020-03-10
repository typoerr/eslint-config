module.exports = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
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
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/prefer-interface': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
  ],
}
