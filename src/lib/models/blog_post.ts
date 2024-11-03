import { cleanHtml, validateDateCreated, validateDateUpdated } from '$lib/model-utilities';
import { object, pipe, string, uuid, array, type InferOutput, nullable } from 'valibot';

export const BlogPost = object({
	date_created: validateDateCreated,
	date_updated: validateDateUpdated,
	title: string(),
	content: pipe(string(), cleanHtml),
	author: nullable(pipe(string(), uuid())),
	slug: string()
});

export const BlogPosts = array(BlogPost);

export type BlogPost = InferOutput<typeof BlogPost>;
export type BlogPosts = InferOutput<typeof BlogPosts>;
