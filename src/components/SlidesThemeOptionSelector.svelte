<script lang="ts">
	import { slidesThemeOptionsStore } from '../stores/slidesThemeOptionsStore';
	import type { SelectOption } from '../types/SelectOption';
	import { type SlidesThemeOptions } from '../types/SlidesThemeOptions';
	import Button from './Button.svelte';
	import Select from './Select.svelte';

	const backgroundColorOptions = [
		{ name: 'white', value: '#fff' },
		{ name: 'light blue', value: '#eef' }
	];

	let selectedBackgroundColor: SelectOption = backgroundColorOptions[0];

	const setTheme = () => {
		const newOption: SlidesThemeOptions = { backgroundColor: selectedBackgroundColor.value };
		slidesThemeOptionsStore.set(newOption);
		console.log(newOption);
	};
</script>

<Select options={backgroundColorOptions} bind:selectedOption={selectedBackgroundColor} />
<Button onClick={setTheme}>Apply</Button>
