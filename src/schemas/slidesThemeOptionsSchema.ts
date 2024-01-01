import { z } from 'zod';
import { selectOptionSchema } from './selectOptionSchema';

export const slidesThemeOptionsSchema = z.object({
	firstBackgroundColor: selectOptionSchema,
	secondBackgroundColor: selectOptionSchema,
	fontFamily: selectOptionSchema,
	fontColor: selectOptionSchema,
	titleFontSize: z.number(),
	headingFontSize: z.number(),
	fontSize: z.number()
});
