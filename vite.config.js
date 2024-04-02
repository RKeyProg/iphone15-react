import { sentryVitePlugin } from '@sentry/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/iphone15-react/',
	build: {
		sourcemap: true,
	},
	plugins: [
		react(),
		sentryVitePlugin({
			org: 'jsm-00',
			project: 'iphone-15-react',
			ignore: ['node_modules'],
			authToken: process.env.SENTRY_AUTH_TOKEN,
		}),
	],
	server: {
		host: true,
	},
})
