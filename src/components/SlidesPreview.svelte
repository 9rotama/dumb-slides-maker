<script lang="ts">
	import { Marpit } from '@marp-team/marpit';
	import { onDestroy, onMount } from 'svelte';
	import { markdownTextStore } from '../stores/markdownTextStore';
	import { slidesThemeOptionsStore } from '../stores/slidesThemeOptionsStore';
	import { createMarpTheme } from '../utils/createMarpTheme';

	$: htmlString = '';
	$: cssString = '';

	let innerWidth: number;

	const marpit = new Marpit();

	onMount(() => {
		marpit.themeSet.default = marpit.themeSet.add(createMarpTheme($slidesThemeOptionsStore));
		renderSlides();
	});

	const renderSlides = () => {
		const { html, css } = marpit.render($markdownTextStore);
		htmlString = html;
		cssString = `<style>${css}</style>`;
	};

	const updateSlidesSizeInWindow = () => {
		marpit.themeSet.default = marpit.themeSet.add(createMarpTheme($slidesThemeOptionsStore));
		renderSlides();
	};

	const unsubscribeText = markdownTextStore.subscribe(() => {
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

<svelte:window bind:innerWidth on:resize={updateSlidesSizeInWindow} />

<div style="transform-origin: left top; transform: scale({((innerWidth - 90) * 0.5) / 1280})">
	{@html htmlString}
</div>

{@html cssString}
