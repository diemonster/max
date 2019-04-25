const OFF = 0;
const ERROR = 2;

module.exports = {
	extends: 'c74',
	rules: {},
	env: {
		es6: true,
		node: true,
		browser: true
	},
	rules: {
		quotes: [2, 'single', { avoidEscape: true }],
		indent: ['error', 2]
	},
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'module'
	}
};
