import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	root: `src`,
	server: {
		port: 5173,
		outDir: '../dist',
		lib: {
		  entry: path.resolve(__dirname, 'src/index.js'),
		  name: 'WebflowDev',
		  fileName: (format) => `webflowdev.${format}.js`
		},
	},
	build: {
		outDir: '../dist',
		lib: {
		  entry: path.resolve(__dirname, 'src/index.js'),
		  name: 'WebflowDev',
		  fileName: (format) => `webflowdev.${format}.js`
		},
		// watch: {
		// 	include: `src/**/*`,
		// },
	},
})


