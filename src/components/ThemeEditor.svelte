<script lang="ts">
	import {
		backgroundColorOptions,
		fontColorOptions,
		fontFamilyOptions
	} from '../const/slidesThemeOptions';
	import { slidesThemeOptionsStore } from '../stores/slidesThemeOptionsStore';
	import type { SelectOption } from '../types/SelectOption';
	import { type SlidesThemeOptions } from '../types/SlidesThemeOptions';
	import Button from './ui/Button.svelte';
	import TextInput from './ui/NumberInput.svelte';
	import Select from './ui/Select.svelte';

	let selectedFirstBackgroundColor: SelectOption = $slidesThemeOptionsStore.firstBackgroundColor;
	let selectedSecondBackgroundColor: SelectOption = $slidesThemeOptionsStore.secondBackgroundColor;
	let selectedFontFamily: SelectOption = $slidesThemeOptionsStore.fontFamily;
	let selectedFontColor: SelectOption = $slidesThemeOptionsStore.fontColor;
	let fontSize: number = $slidesThemeOptionsStore.fontSize;
	let headingFontSize: number = $slidesThemeOptionsStore.headingFontSize;
	let titleFontSize: number = $slidesThemeOptionsStore.titleFontSize;

	const setTheme = () => {
		const newOption: SlidesThemeOptions = {
			firstBackgroundColor: selectedFirstBackgroundColor,
			secondBackgroundColor: selectedSecondBackgroundColor,
			fontFamily: selectedFontFamily,
			fontColor: selectedFontColor,
			fontSize,
			headingFontSize,
			titleFontSize
		};
		slidesThemeOptionsStore.set(newOption);
		localStorage.setItem('slidesThemeOptions', JSON.stringify(newOption));
	};
</script>

<div class="w-full pt-10 pl-40 pr-40 flex flex-col items-center gap-5">
	<div class="w-full flex flex-row items-center justify-between">
		<p>背景色1</p>
		<Select options={backgroundColorOptions} bind:selectedOption={selectedFirstBackgroundColor} />
	</div>
	<div class="w-full flex flex-row items-center justify-between">
		<p>背景色2</p>
		<Select options={backgroundColorOptions} bind:selectedOption={selectedSecondBackgroundColor} />
	</div>
	<div class="w-full flex flex-row items-center justify-between">
		<p>フォントタイプ</p>
		<Select options={fontFamilyOptions} bind:selectedOption={selectedFontFamily} />
	</div>
	<div class="w-full flex flex-row items-center justify-between">
		<p>基本フォント色</p>
		<Select options={fontColorOptions} bind:selectedOption={selectedFontColor} />
	</div>
	<div class="w-full flex flex-row items-center justify-between">
		<p>基本フォント色</p>
		<Select options={fontColorOptions} bind:selectedOption={selectedFontColor} />
	</div>
	<div class="w-full flex flex-row items-center justify-between">
		<p>コードブロック</p>
		<Select options={fontColorOptions} bind:selectedOption={selectedFontColor} />
	</div>
	<div class="w-full flex flex-row items-center justify-between">
		<p>基本フォントサイズ</p>
		<TextInput bind:value={fontSize} id="fontSize" name="基本フォントサイズ" min={0.2} max={5} />
	</div>
	<div class="w-full flex flex-row items-center justify-between">
		<p>タイトルフォントサイズ</p>
		<TextInput
			bind:value={titleFontSize}
			id="titleFontSize"
			name="タイトルフォントサイズ"
			min={0.2}
			max={5}
		/>
	</div>
	<div class="w-full flex flex-row items-center justify-between">
		<p>見出しフォントサイズ</p>
		<TextInput
			bind:value={headingFontSize}
			id="headingFontSize"
			name="見出しフォントサイズ"
			min={0.2}
			max={5}
		/>
	</div>
	<div class="w-max"><Button onClick={setTheme}>適用</Button></div>
</div>
