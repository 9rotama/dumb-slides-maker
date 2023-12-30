import { writable } from 'svelte/store';
import type { SlidesThemeOptions } from '../types/SlidesThemeOptions';
import { backgroundColorOptions, fontFamilyOptions } from '../const/slidesThemeOptions';

export const slidesThemeOptionsStore = writable<SlidesThemeOptions>({ backgroundColor: backgroundColorOptions[0], fontFamily: fontFamilyOptions[0] });
