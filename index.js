module.exports = {
	parser: 'babel-eslint',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	env: {
		es6: true,
		node: true
	},
	settings: {
		'import/core-modules': [
			'styled-jsx',
			'styled-jsx/css',
		]
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	globals: {
		graphql: true,
	},
	rules: {
		indent: [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		quotes: [
			'error',
			'backtick',
		],
		semi: [
			'error',
			'never',
		],
		'comma-dangle': [
			'error',
			'always-multiline',
		],
		'no-console': 0,
		'react/prop-types': 0,
	},
}