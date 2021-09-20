# Install

```
npm i -D @typoerr/eslint-config
```

# Usage

## `.eslintrc.json`

```json
{ "extends": ["@typoerr/eslint-config"] }
```

### +typeScript

```json
{ "extends": ["@typoerr/eslint-config", "@typoerr/eslint-config/+typescript"] }
```

### +prettier

Prettier を使う場合は必ず最後に追加する

```json
{
  "extends": [
    "@typoerr/eslint-config",
    "@typoerr/eslint-config/+typescript",
    "@typoerr/eslint-config/+prettier"
  ]
}
```

### env

利用環境に合わせて env を指定する

[Language Options - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments 'Language Options - ESLint - Pluggable JavaScript linter')

# Reference

## ESLint

- [eslint/eslint: A fully pluggable tool for identifying and reporting on patterns in JavaScript](https://github.com/eslint/eslint)
- [ESLint - Pluggable JavaScript linter](https://eslint.org/)
- [List of available rules - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/rules/)
- [Configuring ESLint - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/user-guide/configuring)
- [ESLint 最初の一歩 - Qiita](https://qiita.com/mysticatea/items/f523dab04a25f617c87d)
- [teppeis/eslint-config-teppeis: ESLint shareable config for me!](https://github.com/teppeis/eslint-config-teppeis 'teppeis/eslint-config-teppeis: ESLint shareable config for me!')

## Prettier

- [prettier/eslint-plugin-prettier: ESLint plugin for Prettier formatting](https://github.com/prettier/eslint-plugin-prettier)
- [prettier/eslint-config-prettier: Turns off all rules that are unnecessary or might conflict with Prettier.](https://github.com/prettier/eslint-config-prettier)

## TypeScript

- [typescript-eslint/packages/eslint-plugin at master · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [typescript-eslint/ROADMAP.md at master · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md)
- [@typescript-eslint ことはじめ - teppeis blog](https://teppeis.hatenablog.com/entry/2019/02/typescript-eslint)

## VSCode

- [Prettier - Code formatter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode 'Prettier - Code formatter - Visual Studio Marketplace')
