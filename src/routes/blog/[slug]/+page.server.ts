import { PUBLIC_APIURL } from '$env/static/public';
import getDirectusInstance from '$lib/directus';
import { BlogPosts } from '$lib/models/blog_post.js';
import { BlogPostsTags } from '$lib/models/blog_posts_tags.js';
import { Users } from '$lib/models/user.js';
import { readItems } from '@directus/sdk';
import { parse } from 'valibot';

export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);
    const slugName = params.slug;
	const posts = parse(BlogPosts, await directus.request(readItems('blog_posts')));

    const userResponse = await fetch(`${PUBLIC_APIURL}/users`).then(val => val.json()).then(val => val.data)
    const users = parse(Users, userResponse)

    const blogPostsTags = parse(BlogPostsTags, await directus.request(readItems('blog_posts_tags')))
    
    const post = posts.find( (post) => post.slug === slugName )
    const author = users.find( (user) => user.id === post?.author )
    const blogPostTags = blogPostsTags.filter( (postsTags) => postsTags.blog_posts_id == post?.id )

    return {
        post,
        author,
        blogPostTags
    }
}
