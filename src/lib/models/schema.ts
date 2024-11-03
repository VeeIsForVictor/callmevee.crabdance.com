import { object, type InferOutput } from 'valibot';
import { BlogPosts } from './blog_post';
import { Blog } from './blog';
import { Tags } from './tag';

export const Schema = object({
	blog: Blog,
	blog_posts: BlogPosts,
	tags: Tags
});

export type Schema = InferOutput<typeof Schema>;
