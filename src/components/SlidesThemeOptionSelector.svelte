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

	const fontFamilyOptions = [
		{ name: 'デフォルト', value: 'default' },
		{ name: '油性マジック', value: 'yusei-magic' },
		{ name: 'ポップ体', value: 'pop' }
	];

	let selectedBackgroundColor: SelectOption = backgroundColorOptions[0];
	let selectedFontFamily: SelectOption = fontFamilyOptions[0];

	const setTheme = () => {
		const newOption: SlidesThemeOptions = {
			backgroundColor: selectedBackgroundColor.value,
			fontFamily: selectedFontFamily.value
		};
		slidesThemeOptionsStore.set(newOption);
	};
</script>

<Select options={backgroundColorOptions} bind:selectedOption={selectedBackgroundColor} />
<Select options={fontFamilyOptions} bind:selectedOption={selectedFontFamily} />

<Button onClick={setTheme}>Apply</Button>
