import { writable } from 'svelte/store';

export const markdownTextStore = writable<string>('# タイトル');
