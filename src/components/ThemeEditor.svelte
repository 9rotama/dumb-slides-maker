<script lang="ts">
	import { backgroundColorOptions, fontFamilyOptions } from '../const/slidesThemeOptions';
	import { slidesThemeOptionsStore } from '../stores/slidesThemeOptionsStore';
	import type { SelectOption } from '../types/SelectOption';
	import { type SlidesThemeOptions } from '../types/SlidesThemeOptions';
	import Button from './ui/Button.svelte';
	import Select from './ui/Select.svelte';

	let selectedBackgroundColor: SelectOption = $slidesThemeOptionsStore.backgroundColor;
	let selectedFontFamily: SelectOption = $slidesThemeOptionsStore.fontFamily;

	const setTheme = () => {
		const newOption: SlidesThemeOptions = {
			backgroundColor: selectedBackgroundColor,
			fontFamily: selectedFontFamily
		};
		slidesThemeOptionsStore.set(newOption);
		localStorage.setItem('slidesThemeOptions', JSON.stringify(newOption));
	};
</script>

<div class="w-full pt-10 pl-40 pr-40 flex flex-col items-center gap-5">
	<div class="w-full flex flex-row items-center justify-between">
		<p>背景色</p>
		<Select options={backgroundColorOptions} bind:selectedOption={selectedBackgroundColor} />
	</div>
	<div class="w-full flex flex-row items-center justify-between">
		<p>フォントタイプ</p>
		<Select options={fontFamilyOptions} bind:selectedOption={selectedFontFamily} />
	</div>
	<div class="w-max"><Button onClick={setTheme}>Apply</Button></div>
</div>
