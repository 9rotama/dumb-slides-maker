import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import { defineConfig } from 'unocss';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			collections: {
				ri: () => import('@iconify-json/ri/icons.json').then((i) => i.default)
			}
		})
	],
	rules: [['scrollbar', { 'scrollbar-color': '#fff8 transparent' }]],
	theme: {
		colors: {
			nord: {
				contrast: 'white',
				0: '#2E3440',
				1: '#3B4252',
				2: '#434C5E',
				3: '#4C566A',
				4: '#D8DEE9',
				5: '#E5E9F0',
				6: '#ECEFF4'
			},
			frost: {
				0: '#8FBCBB',
				1: '#88C0D0',
				2: '#81A1C1',
				3: '#5E81AC'
			}
		}
	}
});
