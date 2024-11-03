import getDirectusInstance from '$lib/directus';
import { BlogPosts } from '$lib/models/blog_post.js';
import { readItems } from '@directus/sdk';
import { parse } from 'valibot';

export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);
    const slugName = params.slug;
	const posts = parse(BlogPosts, await directus.request(readItems('blog_posts')));

    return posts.find( (post) => post.slug === slugName )
}
