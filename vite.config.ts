import { sveltekit } from '@sveltejs/kit/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import UnoCSS from '@unocss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte()]
			/* more options */
		}),
		sveltekit()
	],
	optimizeDeps: {
		exclude: ['codemirror', '@codemirror/language-javascript' /* ... */]
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
