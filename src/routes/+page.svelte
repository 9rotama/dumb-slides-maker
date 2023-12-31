<script lang="ts">
	import { onMount } from 'svelte';
	import Editor from '../components/Editor.svelte';
	import SlidesPreview from '../components/SlidesPreview.svelte';
	import { slidesThemeOptionsSchema } from '../schemas/slidesThemeOptionsSchema';
	import { markdownTextStore } from '../stores/markdownTextStore';
	import { slidesThemeOptionsStore } from '../stores/slidesThemeOptionsStore';

	onMount(() => {
		const markdownTextCached = localStorage.getItem('markdownText');
		if (markdownTextCached) markdownTextStore.set(markdownTextCached);
		setInterval(() => {
			localStorage.setItem('markdownText', $markdownTextStore);
		}, 10000);

		const slidesThemeOptionsCached = localStorage.getItem('slidesThemeOptions');
		if (slidesThemeOptionsCached) {
			const jsonParsed = JSON.parse(slidesThemeOptionsCached);
			const zodParsed = slidesThemeOptionsSchema.parse(jsonParsed);
			slidesThemeOptionsStore.set(zodParsed);
		}
	});
</script>

<main
	class="relative box-border w-full h-screen max-h-screen grid grid-cols-2 gap-3 overflow-hidden text-nord-6 bg-nord-0"
>
	<div class="relative h-screen"><Editor /></div>
	<div class="relative h-screen overflow-y-scroll scrollbar"><SlidesPreview /></div>
</main>
