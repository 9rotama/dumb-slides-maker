import { z } from 'zod';
import { selectOptionSchema } from './selectOptionSchema';

export const slidesThemeOptionsSchema = z.object({
	firstBackgroundColor: selectOptionSchema,
	secondBackgroundColor: selectOptionSchema,
	fontFamily: selectOptionSchema,
	fontColor: selectOptionSchema,
	titleFontColor: selectOptionSchema,
	headingFontColor: selectOptionSchema,
	tableFontColor: selectOptionSchema,
	fontSize: z.number(),
	titleFontSize: z.number(),
	headingFontSize: z.number(),
	codeBlockFontSize: z.number(),
	tableFontSize: z.number(),
	codeBlockBackground: selectOptionSchema
});
