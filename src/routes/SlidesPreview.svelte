<script lang="ts">
	import { Marpit } from '@marp-team/marpit';
	import { onDestroy, onMount } from 'svelte';
	import { markdownTextStore } from '../stores/markdownTextStore';
	import { slidesThemeOptionsStore } from '../stores/slidesThemeOptionsStore';
	import { createMarpTheme } from '../utils/createMarpTheme';

	$: markdownText = '';
	$: htmlString = '';
	$: cssString = '';

	const marpit = new Marpit();

	onMount(() => {
		const { html, css } = marpit.render('');
		htmlString = html;
		cssString = `<style>${css}</style>`;
	});

	const renderSlides = () => {
		const { html, css } = marpit.render(markdownText);
		htmlString = html;
		cssString = `<style>${css}</style>`;
	};

	const unsubscribeText = markdownTextStore.subscribe((text) => {
		markdownText = text;
		renderSlides();
	});

	const unsubscribeTheme = slidesThemeOptionsStore.subscribe((option) => {
		marpit.themeSet.default = marpit.themeSet.add(createMarpTheme(option));
		renderSlides();
	});

	onDestroy(() => {
		unsubscribeText();
		unsubscribeTheme();
	});
</script>

<div class="marpit-wrapper">{@html htmlString}</div>
{@html cssString}
