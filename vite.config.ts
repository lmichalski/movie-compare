import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

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
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
			cssModules: {
				pattern: '[name]__[local]',
			},
		},
	},
	build: {
		cssMinify: 'lightningcss',
	},
	base,
})
