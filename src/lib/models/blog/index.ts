import { cleanHtml, validateDateCreated, validateDateUpdated } from '$lib/model-utilities';
import { object, pipe, string, type InferOutput } from 'valibot';

export const Blog = object({
	date_created: validateDateCreated,
	date_updated: validateDateUpdated,
	headline: string(),
	subheadline: pipe(string(), cleanHtml),
	hero_background: string(),
});

export type Blog = InferOutput<typeof Blog>;
