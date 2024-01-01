<script lang="ts">
	import { marpit } from '$lib/marpit';
	import { onMount } from 'svelte';
	import { z } from 'zod';
	import { markdownTextStore } from '../../stores/markdownTextStore';
	import { slidesThemeOptionsStore } from '../../stores/slidesThemeOptionsStore';
	import { createMarpTheme } from '../../utils/createMarpTheme';

	$: htmlString = '';
	$: cssString = '';

	onMount(() => {
		const markdownText = $markdownTextStore;
		const slidesThemeOptions = $slidesThemeOptionsStore;

		marpit.themeSet.default = marpit.themeSet.add(createMarpTheme(slidesThemeOptions));

		const { html, css } = marpit.render(z.string().parse(markdownText));
		htmlString = html;
		cssString = `<style>${css}</style>`;
	});
</script>

{@html htmlString}
{@html cssString}
