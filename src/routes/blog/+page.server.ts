import getDirectusInstance from '$lib/directus';
import { Blog } from '$lib/models/blog.js';
import { BlogPosts } from '$lib/models/blog_post.js';
import { Tags } from '$lib/models/tag.js';
import { readItems, readSingleton } from '@directus/sdk';
import { parse } from 'valibot';

export async function load({ fetch }) {
    const directus = getDirectusInstance(fetch);
    return {
        blogPosts:  parse(BlogPosts, await directus.request(readItems('blog_posts'))),
        blog:       parse(Blog, await directus.request(readSingleton('blog'))),
        tags:       parse(Tags, await directus.request(readItems('tags')))
    };
}