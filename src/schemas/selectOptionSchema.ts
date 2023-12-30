import { z } from 'zod';

export const selectOptionSchema = z.object({ value: z.string(), name: z.string() });
