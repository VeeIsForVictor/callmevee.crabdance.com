import { cleanHtml, compileMarkdown, validateDateCreated, validateDateUpdated } from '$lib/model-utilities';
import { object, pipe, string, uuid, array, type InferOutput, nullable, number } from 'valibot';

export const BlogPost = object({
	id: number(),
	date_created: validateDateCreated,
	date_updated: validateDateUpdated,
	title: string(),
	author: nullable(pipe(string(), uuid())),
	slug: string(),
	post_content: nullable(pipe(string(), compileMarkdown, cleanHtml))
});

export const BlogPosts = array(BlogPost);

export type BlogPost = InferOutput<typeof BlogPost>;
export type BlogPosts = InferOutput<typeof BlogPosts>;
