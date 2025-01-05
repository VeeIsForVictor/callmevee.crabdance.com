import { object, type InferOutput } from 'valibot';
import { BlogPosts } from './blog_post';
import { Blog } from './blog';
import { Tags } from './tag';
import { BlogPostsTags } from './blog_posts_tags';
import { Languages } from './languages';

export const Schema = object({
	blog: Blog,
	blog_posts: BlogPosts,
	blog_posts_tags: BlogPostsTags,
	tags: Tags,
	languages: Languages
});

export type Schema = InferOutput<typeof Schema>;
