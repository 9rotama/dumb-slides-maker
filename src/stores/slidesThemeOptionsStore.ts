import { writable } from 'svelte/store';
import type { SlidesThemeOptions } from '../types/SlidesThemeOptions';

export const slidesThemeOptionsStore = writable<SlidesThemeOptions>({ backgroundColor: '#fff' });
