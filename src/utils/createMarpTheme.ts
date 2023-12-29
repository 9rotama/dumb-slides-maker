import type { SlidesThemeOptions } from '../types/SlidesThemeOptions';

export const createMarpTheme = (option: SlidesThemeOptions) => {
	return `

/* @theme example */

section {
  background-color: ${option.backgroundColor};
  color: black;
  margin-bottom: 20px;
  padding: 20px;
  filter: drop-shadow(0px 10px 10px #00002270);
}

  `;
};
