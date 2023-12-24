<script lang="ts">
	import { slidesThemeOptionsStore } from '../stores/slidesThemeOptionsStore';
	import { type SlidesThemeOptions } from '../types/SlidesThemeOptions';

	let backgroundColor = '#fff';

	const setTheme = () => {
		const newOption: SlidesThemeOptions = { backgroundColor };
		slidesThemeOptionsStore.set(newOption);
		console.log(newOption);
	};
</script>

<div class="flex flex-row justify-center">
	<p class="text-sm">Background Color</p>
	<select bind:value={backgroundColor} on:change={setTheme}>
		<option value="#fff">White</option>
		<option value="#dde">Light Gray</option>
	</select>
</div>
