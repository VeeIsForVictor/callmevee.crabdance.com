import { object, type InferOutput } from 'valibot';
import { BlogPosts } from './blog_post';
import { Blog } from './blog';
import { Tags } from './tag';
import { BlogPostsTags } from './blog_posts_tags';

export const Schema = object({
	blog: Blog,
	blog_posts: BlogPosts,
	blog_posts_tags: BlogPostsTags,
	tags: Tags
});

export type Schema = InferOutput<typeof Schema>;
