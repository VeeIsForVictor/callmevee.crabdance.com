import { PUBLIC_APIURL } from '$env/static/public';
import getDirectusInstance from '$lib/directus';
import { BlogPosts } from '$lib/models/blog_post.js';
import { BlogPostsTags } from '$lib/models/blog_posts_tags.js';
import { Users } from '$lib/models/user.js';
import { readItems } from '@directus/sdk';
import { parse } from 'valibot';
import { JSDOM } from 'jsdom';
import { strict } from 'assert';

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
    strict(typeof post !== 'undefined');
    strict(post?.post_content !== null);

    const contentDOM = new JSDOM(post.post_content);

    const allHeaders = contentDOM.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const allParagraphs = contentDOM.window.document.querySelectorAll('p');

    for(let idx = 0; idx < allHeaders.length; idx++) {
        const header = allHeaders.item(idx);
        strict(header.classList);
        header.classList.add(header.localName);
    }

    for(let idx = 0; idx < allParagraphs.length; idx++) {
        const paragraph = allParagraphs.item(idx);
        strict(paragraph.classList);
        paragraph.classList.add("not-prose");
    }
    
    post.post_content = contentDOM.serialize()

    return {
        post,
        author,
        blogPostTags
    }
}
