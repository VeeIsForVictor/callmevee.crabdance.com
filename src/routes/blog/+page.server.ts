import getDirectusInstance from '$lib/directus';
import { Blog } from '$lib/models/blog.js';
import { BlogPosts } from '$lib/models/blog_post.js';
import { BlogPostsTags } from '$lib/models/blog_posts_tags.js';
import { Tags } from '$lib/models/tag.js';
import { readItems, readSingleton } from '@directus/sdk';
import { parse } from 'valibot';

export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		blog: parse(Blog, await directus.request(readSingleton('blog'))),
		blogPosts: parse(BlogPosts, await directus.request(readItems('blog_posts'))),
		blogPostsTags: parse(BlogPostsTags, await directus.request(readItems('blog_posts_tags'))),
		tags: parse(Tags, await directus.request(readItems('tags')))
	};
}
