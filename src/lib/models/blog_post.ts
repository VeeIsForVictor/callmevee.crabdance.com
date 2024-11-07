import { cleanHtml, validateDateCreated, validateDateUpdated } from '$lib/model-utilities';
import { object, pipe, string, uuid, array, type InferOutput, nullable, number } from 'valibot';
import { content } from './content';

export const BlogPost = object({
	id: number(),
	date_created: validateDateCreated,
	date_updated: validateDateUpdated,
	title: string(),
	content: pipe(string(), cleanHtml),
	author: nullable(pipe(string(), uuid())),
	slug: string(),
	content_blocks: nullable(object({blocks: content}))
});

export const BlogPosts = array(BlogPost);

export type BlogPost = InferOutput<typeof BlogPost>;
export type BlogPosts = InferOutput<typeof BlogPosts>;
