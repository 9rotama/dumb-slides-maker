import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from '@unocss/svelte-scoped/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit(), UnoCSS()],
	optimizeDeps: {
		exclude: ['codemirror', '@codemirror/language-javascript' /* ... */]
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
