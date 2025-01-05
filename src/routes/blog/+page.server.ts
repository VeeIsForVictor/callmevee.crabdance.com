import getDirectusInstance from '$lib/directus';
import { Blog } from '$lib/models/blog';
import { BlogPosts } from '$lib/models/blog/blog_post';
import { BlogPostsTags } from '$lib/models/blog/blog_posts_tags';
import { Tags } from '$lib/models/blog/tag';
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
