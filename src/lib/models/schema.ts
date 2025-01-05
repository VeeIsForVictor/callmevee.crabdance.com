import { object, type InferOutput } from 'valibot';
import { BlogPosts } from './blog/blog_post';
import { Blog } from './blog';
import { Tags } from './blog/tag';
import { BlogPostsTags } from './blog/blog_posts_tags';
import { Languages } from './work/languages';
import { Frameworks } from './work/frameworks';
import { Technologies } from './work/technologies';

export const Schema = object({
	blog: Blog,
	blog_posts: BlogPosts,
	blog_posts_tags: BlogPostsTags,
	tags: Tags,
	languages: Languages,
	frameworks: Frameworks,
	technologies: Technologies,
});

export type Schema = InferOutput<typeof Schema>;
