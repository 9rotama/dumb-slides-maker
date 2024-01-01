import { writable } from 'svelte/store';
import { backgroundColorOptions, fontColorOptions, fontFamilyOptions } from '../const/slidesThemeOptions';
import type { SlidesThemeOptions } from '../types/SlidesThemeOptions';

export const slidesThemeOptionsStore = writable<SlidesThemeOptions>({
	firstBackgroundColor: backgroundColorOptions[0],
	secondBackgroundColor: backgroundColorOptions[0],
	fontFamily: fontFamilyOptions[0],
	fontColor: fontColorOptions[0],
	headingFontSize: 1,
	titleFontSize: 1,
	fontSize: 1,

});
