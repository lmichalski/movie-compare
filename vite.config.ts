import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

let base = process.env.REPO_NAME
if (base && !base.startsWith('/')) {
	base = `/${base}`
}

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: ['babel-plugin-react-compiler'],
			},
		}),
	],
	server: {
		port: 3000,
	},
	css: {
		transformer: 'lightningcss',
		modules: {
			localsConvention: 'camelCaseOnly',
			generateScopedName: '[name]__[local]',
		},
	},
	build: {
		cssMinify: 'lightningcss',
	},
	base,
})
