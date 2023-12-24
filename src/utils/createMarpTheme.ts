import type { SlidesThemeOptions } from '../types/SlidesThemeOptions';

export const createMarpTheme = (option: SlidesThemeOptions) => {
	return `

/* @theme example */

section {
  background-color: ${option.backgroundColor};
  margin-bottom: 20px;
}

  `;
};
