<script lang="ts">
	import {
		backgroundColorOptions,
		codeBlockBackgroundOptions,
		fontColorOptions,
		fontFamilyOptions,
		headingFontColorOptions
	} from '../const/slidesThemeOptions';
	import { slidesThemeOptionsStore } from '../stores/slidesThemeOptionsStore';
	import type { SelectOption } from '../types/SelectOption';
	import { type SlidesThemeOptions } from '../types/SlidesThemeOptions';
	import Button from './ui/Button.svelte';
	import TextInput from './ui/NumberInput.svelte';
	import OptionContainer from './ui/OptionContainer.svelte';
	import Select from './ui/Select.svelte';

	let firstBackgroundColor: SelectOption = $slidesThemeOptionsStore.firstBackgroundColor;
	let secondBackgroundColor: SelectOption = $slidesThemeOptionsStore.secondBackgroundColor;
	let fontFamily: SelectOption = $slidesThemeOptionsStore.fontFamily;

	let fontColor: SelectOption = $slidesThemeOptionsStore.fontColor;
	let headingFontColor: SelectOption = $slidesThemeOptionsStore.headingFontColor;
	let titleFontColor: SelectOption = $slidesThemeOptionsStore.titleFontColor;
	let tableFontColor: SelectOption = $slidesThemeOptionsStore.tableFontColor;

	let fontSize: number = $slidesThemeOptionsStore.fontSize;
	let headingFontSize: number = $slidesThemeOptionsStore.headingFontSize;
	let titleFontSize: number = $slidesThemeOptionsStore.titleFontSize;
	let codeBlockFontSize: number = $slidesThemeOptionsStore.codeBlockFontSize;
	let tableFontSize: number = $slidesThemeOptionsStore.tableFontSize;

	let codeBlockBackground: SelectOption = $slidesThemeOptionsStore.codeBlockBackground;

	const setTheme = () => {
		const newOption: SlidesThemeOptions = {
			firstBackgroundColor,
			secondBackgroundColor,
			fontFamily,
			fontColor,
			titleFontColor,
			headingFontColor,
			tableFontColor,
			fontSize,
			titleFontSize,
			headingFontSize,
			codeBlockFontSize,
			tableFontSize,
			codeBlockBackground
		};
		slidesThemeOptionsStore.set(newOption);
		localStorage.setItem('slidesThemeOptions', JSON.stringify(newOption));
	};
</script>

<div
	class="w-full h-full pt-10 pl-40 pr-40 pb-10 flex flex-col items-center gap-5 overflow-y-scroll scrollbar"
>
	<OptionContainer>
		<p>背景色1</p>
		<Select options={backgroundColorOptions} bind:selectedOption={firstBackgroundColor} />
	</OptionContainer>
	<OptionContainer>
		<p>背景色2</p>
		<Select options={backgroundColorOptions} bind:selectedOption={secondBackgroundColor} />
	</OptionContainer>
	<OptionContainer>
		<p>フォントタイプ</p>
		<Select options={fontFamilyOptions} bind:selectedOption={fontFamily} />
	</OptionContainer>
	<OptionContainer>
		<p>基本フォント色</p>
		<Select options={fontColorOptions} bind:selectedOption={fontColor} />
	</OptionContainer>
	<OptionContainer>
		<p>タイトルフォント色</p>
		<Select options={headingFontColorOptions} bind:selectedOption={titleFontColor} />
	</OptionContainer>
	<OptionContainer>
		<p>見出しフォント色</p>
		<Select options={headingFontColorOptions} bind:selectedOption={headingFontColor} />
	</OptionContainer>
	<OptionContainer>
		<p>表フォント色</p>
		<Select options={fontColorOptions} bind:selectedOption={tableFontColor} />
	</OptionContainer>
	<OptionContainer>
		<p>コードブロック背景</p>
		<Select options={codeBlockBackgroundOptions} bind:selectedOption={codeBlockBackground} />
	</OptionContainer>
	<OptionContainer>
		<p>基本フォントサイズ</p>
		<TextInput bind:value={fontSize} id="fontSize" name="基本フォントサイズ" min={0.2} max={5} />
	</OptionContainer>
	<OptionContainer>
		<p>タイトルフォントサイズ</p>
		<TextInput
			bind:value={titleFontSize}
			id="titleFontSize"
			name="タイトルフォントサイズ"
			min={0.2}
			max={5}
		/>
	</OptionContainer>
	<OptionContainer>
		<p>見出しフォントサイズ</p>
		<TextInput
			bind:value={headingFontSize}
			id="headingFontSize"
			name="見出しフォントサイズ"
			min={0.2}
			max={5}
		/>
	</OptionContainer>
	<OptionContainer>
		<p>コードブロックフォントサイズ</p>
		<TextInput
			bind:value={codeBlockFontSize}
			id="codeBlockFontSize"
			name="見出しフォントサイズ"
			min={0.2}
			max={5}
		/>
	</OptionContainer>
	<OptionContainer>
		<p>表フォントサイズ</p>
		<TextInput
			bind:value={tableFontSize}
			id="tableFontSize"
			name="表フォントサイズ"
			min={0.2}
			max={5}
		/>
	</OptionContainer>
	<div class="w-max"><Button onClick={setTheme}>適用</Button></div>
</div>
