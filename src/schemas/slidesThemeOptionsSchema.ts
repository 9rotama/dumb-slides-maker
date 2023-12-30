import { z } from 'zod';
import { selectOptionSchema } from './selectOptionSchema';

export const slidesThemeOptionsSchema = z.object({
	backgroundColor: selectOptionSchema,
	fontFamily: selectOptionSchema
});
