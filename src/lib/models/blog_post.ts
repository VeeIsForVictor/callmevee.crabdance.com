import { cleanHtml } from "$lib/model-utilities";
import { object, pipe, string, isoTimestamp, uuid, array, type InferOutput } from "valibot";

export const BlogPost = object({
    date_created: pipe(string(), isoTimestamp()),
    date_updated: pipe(string(), isoTimestamp()),
    title: string(),
    content: pipe(string(), cleanHtml),
    author: pipe(string(), uuid()),
    slug: string()
})

export const BlogPosts = array(BlogPost);

export type BlogPost = InferOutput<typeof BlogPost>;
export type BlogPosts = InferOutput<typeof BlogPosts>;