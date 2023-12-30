<script lang="ts">
	import { onMount } from 'svelte';
	import Editor from '../components/Editor.svelte';
	import SlidesPreview from '../components/SlidesPreview.svelte';
	import Link from '../components/ui/Link.svelte';
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

<main class="w-screen h-screen text-color-white bg-gray-900 overflow-hidden">
	<div class="h-full grid grid-cols-2">
		<div class="h-[90vh] overflow-y-scroll"><Editor /></div>
		<div class="h-[90vh] overflow-y-scroll bg-gray-900"><SlidesPreview /></div>
	</div>
</main>
