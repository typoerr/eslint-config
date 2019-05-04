# Install

```
npm i -D https://github.com/nullabletypo/eslint-config-nullabletypo
```

`.eslintrc.json`

```json
{ "extends": ["@typoerr/eslint-config"] }
```

with TypeScript settings

```json
{ "extends": ["@typeoerr/eslint-config", "@typoerr/eslint-config/+typescript"] }
```

## VSCode

```json
// prettier
"prettier.eslintIntegration": true
"eslint.validate": [
	"javascript",
	"javascriptreact",
	{ "language": "typescript", "autoFix": true },
	{ "language": "typescriptreact", "autoFix": true }
],
```

# Reference

## ESLint

- [eslint/eslint: A fully pluggable tool for identifying and reporting on patterns in JavaScript](https://github.com/eslint/eslint)
- [ESLint - Pluggable JavaScript linter](https://eslint.org/) - [List of available rules - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/rules/) - [Configuring ESLint - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/user-guide/configuring)
- [ESLint 最初の一歩 - Qiita](https://qiita.com/mysticatea/items/f523dab04a25f617c87d)

## Prettier

- [prettier/eslint-plugin-prettier: ESLint plugin for Prettier formatting](https://github.com/prettier/eslint-plugin-prettier)
- [prettier/eslint-config-prettier: Turns off all rules that are unnecessary or might conflict with Prettier.](https://github.com/prettier/eslint-config-prettier)

## TypeScript

- [typescript-eslint/packages/eslint-plugin at master · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [typescript-eslint/ROADMAP.md at master · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md)
- [@typescript-eslint ことはじめ - teppeis blog](https://teppeis.hatenablog.com/entry/2019/02/typescript-eslint)

## React(JSX)

- [yannickcr/eslint-plugin-react: React specific linting rules for ESLint](https://github.com/yannickcr/eslint-plugin-react)

React は除外してあるので、必要な場合に追加すること

React 以外でも JSX を使う場合は、`no-unused-var`によってエラーがでるので以下の rule は必須

```json
"react/jsx-uses-react": "error",
"react/jsx-uses-vars": "error",
```
