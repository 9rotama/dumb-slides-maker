import { writable } from 'svelte/store';
import { defaulSlidesThemeOptions } from '../const/slidesThemeOptions';
import type { SlidesThemeOptions } from '../types/SlidesThemeOptions';

export const slidesThemeOptionsStore = writable<SlidesThemeOptions>(defaulSlidesThemeOptions);
