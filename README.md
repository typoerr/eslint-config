# ESLint

- [eslint/eslint: A fully pluggable tool for identifying and reporting on patterns in JavaScript](https://github.com/eslint/eslint)
- [ESLint - Pluggable JavaScript linter](https://eslint.org/) - [List of available rules - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/rules/) - [Configuring ESLint - ESLint - Pluggable JavaScript linter](https://eslint.org/docs/user-guide/configuring)
- [ESLint 最初の一歩 - Qiita](https://qiita.com/mysticatea/items/f523dab04a25f617c87d)

# Prettier

- [prettier/eslint-plugin-prettier: ESLint plugin for Prettier formatting](https://github.com/prettier/eslint-plugin-prettier)
- [prettier/eslint-config-prettier: Turns off all rules that are unnecessary or might conflict with Prettier.](https://github.com/prettier/eslint-config-prettier)

# TypeScript

- [typescript-eslint/packages/eslint-plugin at master · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
- [typescript-eslint/ROADMAP.md at master · typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md)
- [@typescript-eslint ことはじめ - teppeis blog](https://teppeis.hatenablog.com/entry/2019/02/typescript-eslint)

# React(JSX)

- [yannickcr/eslint-plugin-react: React specific linting rules for ESLint](https://github.com/yannickcr/eslint-plugin-react)

# VSCode

```json
// prettier
"prettier.eslintIntegration": true
"eslint.validate": [
	"javascript",
	"javascriptreact",
	// .ts / .tsxをeslint extensionで動かす
	{ "language": "typescript", "autoFix": true },
	{ "language": "typescriptreact", "autoFix": true }
],
```
