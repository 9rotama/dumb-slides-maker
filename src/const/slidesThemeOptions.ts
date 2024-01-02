import type { SlidesThemeOptions } from '../types/SlidesThemeOptions';

export const backgroundColorOptions = [
	{ name: 'red', value: 'red' },
	{ name: 'blue', value: 'blue' },
	{ name: 'yellow', value: 'yellow' },
	{ name: 'green', value: 'green' },
	{ name: 'aqua', value: 'aqua' },
	{ name: 'crimson', value: 'crimson' },
	{ name: 'pink', value: 'pink' },
	{ name: 'lime', value: 'lime' }
];

export const fontFamilyOptions = [
	{ name: 'デフォルト', value: 'default' },
	{ name: '油性マジック', value: 'yusei-magic' },
	{ name: 'ポップ体', value: 'pop' },
	{ name: '立体的', value: '3d' }
];

export const fontColorOptions = [
	{ name: 'white', value: 'white' },
	{ name: 'black', value: 'black' },
	{ name: 'red', value: 'red' },
	{ name: 'blue', value: 'blue' },
	{ name: 'yellow', value: 'yellow' },
	{ name: 'green', value: 'green' },
	{ name: 'aqua', value: 'aqua' },
	{ name: 'crimson', value: 'crimson' },
	{ name: 'pink', value: 'pink' },
	{ name: 'lime', value: 'lime' }
];

export const headingFontColorOptions = [
	{
		name: '虹',
		value: 'linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)'
	},
	{ name: '赤緑青', value: 'linear-gradient(to left, red, green, blue)' },
	{ name: '黄緑水', value: 'linear-gradient(to left, yellow, green, cyan)' },
	{ name: '白', value: 'white' }
];

export const codeBlockBackgroundOptions = [
	{ name: '木', value: 'url(wood.png)' },
	{ name: '石', value: 'url(stone.jpeg)' }
];

export const defaulSlidesThemeOptions: SlidesThemeOptions = {
	firstBackgroundColor: backgroundColorOptions[0],
	secondBackgroundColor: backgroundColorOptions[1],
	fontFamily: fontFamilyOptions[0],
	fontColor: fontColorOptions[0],
	titleFontColor: headingFontColorOptions[0],
	headingFontColor: headingFontColorOptions[0],
	tableFontColor: fontColorOptions[0],
	fontSize: 1,
	titleFontSize: 1,
	headingFontSize: 1,
	codeBlockFontSize: 1,
	tableFontSize: 1,
	codeBlockBackground: codeBlockBackgroundOptions[0]
};
