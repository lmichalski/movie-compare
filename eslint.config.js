import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactCompiler from 'eslint-plugin-react-compiler'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.strict,
	prettier,
	{ ...react.configs.flat.recommended, settings: { react: { version: 'detect' } } },
	react.configs.flat['jsx-runtime'],
	{
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
		},
	},
	reactCompiler.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		...jsxA11y.flatConfigs.recommended,
		languageOptions: {
			...jsxA11y.flatConfigs.recommended.languageOptions,
		},
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],
			'@typescript-eslint/explicit-function-return-type': 'off',
			'id-length': ['warn', { min: 3, exceptions: ['id'] }],
		},
	},
	{
		files: ['**/*.tsx', '**/*.jsx'],
		rules: {
			'react/no-unescaped-entities': [
				'error',
				{
					forbid: [
						{
							char: '>',
							alternatives: ['&gt;'],
						},
						{
							char: '}',
							alternatives: ['&#125;'],
						},
					],
				},
			],
		},
	},
	{
		ignores: ['node_modules', 'dist'],
	},
)
