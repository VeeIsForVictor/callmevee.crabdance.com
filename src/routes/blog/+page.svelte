<script lang="ts">
	import { browser } from '$app/environment';
	import BlogCarousel from '$lib/components/BlogCarousel.svelte';

	export let data;

	let { blog, blogPosts, tags } = data;

	let blogCards: any[] = [];

	blogCards = blogPosts?.map(({ title, slug, content }) => ({
		title,
		blurb: content,
		link: `./${slug}`
	}));
</script>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
	<div class="flex flex-col items-center prose dark:prose-invert">
		<h1 class="h1">{blog.headline}</h1>
		<p>{@html blog.subheadline}</p>
	</div>
	<div class="flex flex-col h-full w-full shadow-md p-8 bg-surface-900 rounded-lg gap-4">
		<h3 class="h3 prose dark:prose-invert">Featured Posts</h3>
		<BlogCarousel cards={blogCards} />
	</div>
</div>
