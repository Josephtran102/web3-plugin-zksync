module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'header', 'deprecation', 'eslint-plugin-tsdoc', 'no-null'],
	extends: [
		'airbnb-base',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	rules: {
		'deprecation/deprecation': 'error',
		'class-methods-use-this': ['error'],
		'no-unused-expressions': ['error'],
		'no-continue': 'off',
		'no-underscore-dangle': 'off',
		'import/prefer-default-export': 'off',
		'lines-between-class-members': 'off',
		'no-use-before-define': ['error'],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
		'@typescript-eslint/no-floating-promises': ['error'],
		'@typescript-eslint/prefer-for-of': ['error'],
		'@typescript-eslint/consistent-type-assertions': ['error'],
		'@typescript-eslint/explicit-member-accessibility': ['error'],
		'@typescript-eslint/member-delimiter-style': ['error'],
		'@typescript-eslint/member-ordering': [
			'error',
			{ default: ['public-static-field', 'public-instance-method'] },
		],
		'@typescript-eslint/no-extraneous-class': ['error'],
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
		'@typescript-eslint/no-unnecessary-qualifier': ['error'],
		'@typescript-eslint/no-unnecessary-type-arguments': ['error'],
		'@typescript-eslint/prefer-function-type': ['error'],
		'@typescript-eslint/prefer-includes': ['error'],
		'@typescript-eslint/prefer-nullish-coalescing': ['error'],
		'@typescript-eslint/prefer-optional-chain': ['error'],
		'@typescript-eslint/prefer-readonly': ['error'],
		'@typescript-eslint/prefer-reduce-type-parameter': ['error'],
		'@typescript-eslint/prefer-string-starts-ends-with': ['error'],
		'@typescript-eslint/prefer-ts-expect-error': ['error'],
		'@typescript-eslint/promise-function-async': ['error'],
		'@typescript-eslint/require-array-sort-compare': ['error'],
		'@typescript-eslint/switch-exhaustiveness-check': ['error'],
		'@typescript-eslint/type-annotation-spacing': ['error'],
		// Multiple constructors are more readable
		'@typescript-eslint/unified-signatures': 'off',
		'@typescript-eslint/no-unused-expressions': ['error'],
		'@typescript-eslint/no-useless-constructor': ['error'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					null: "Use 'undefined' instead of 'null'",
				},
			},
		],
		'@typescript-eslint/no-unused-vars': 'warn',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'no-await-in-loop': ['error'],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		'no-null/no-null': ['error'],
		'tsdoc/syntax': 'warn',
	},
	globals: {
		BigInt: true,
	},
	parserOptions: {
		ecmaVersion: 2016,
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
};
