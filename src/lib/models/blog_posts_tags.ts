import { number, object, string, type InferOutput } from "valibot";

export const BlogPostsTags = object({
    blog_posts_id: number(),
    tags_tag_name: string(),
})

export type BlogPostsTags = InferOutput<typeof BlogPostsTags>