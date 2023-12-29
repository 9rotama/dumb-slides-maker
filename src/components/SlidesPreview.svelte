<script lang="ts">
	import { Marpit } from '@marp-team/marpit';
	import { onDestroy, onMount } from 'svelte';
	import { markdownTextStore } from '../stores/markdownTextStore';
	import { slidesThemeOptionsStore } from '../stores/slidesThemeOptionsStore';
	import { createMarpTheme } from '../utils/createMarpTheme';

	$: markdownText = '';
	$: htmlString = '';
	$: cssString = '';

	let innerWidth: number;

	const marpit = new Marpit();

	onMount(() => {
		marpit.themeSet.default = marpit.themeSet.add(createMarpTheme($slidesThemeOptionsStore));
		renderSlides();
	});

	const renderSlides = () => {
		const { html, css } = marpit.render(markdownText);
		htmlString = html;
		cssString = `<style>${css}</style>`;
	};

	const updateSlidesSizeInWindow = () => {
		marpit.themeSet.default = marpit.themeSet.add(createMarpTheme($slidesThemeOptionsStore));
		renderSlides();
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

<svelte:window bind:innerWidth on:resize={updateSlidesSizeInWindow} />

<div
	class="marpit-wrapper"
	style="transform-origin: left top; transform: scale({((innerWidth - 50) * 0.5) / 1280})"
>
	{@html htmlString}
</div>
{@html cssString}
