<script lang="ts">
	import BlogCarousel from '$lib/components/BlogCarousel.svelte';

	export let data;

	let { blog, blogPosts, blogPostsTags, tags } = data;

	let featuredTag = "featured";

	let blogCards: {title: string, content: string, link: string}[] = [];

	let featuredPostIds = [];
	let featuredPosts = [];

	$: featuredPostIds = blogPostsTags.filter(
		(blogPostTag) => blogPostTag.tags_tag_name === featuredTag
	).map(
		(blogPostTag) => blogPostTag.blog_posts_id
	);
	
	$: featuredPosts = blogPosts.filter(
		(post) => featuredPostIds.includes(post.id)
	);

	$: blogCards = featuredPosts?.map(({ title, slug, content }) => ({
		title,
		content,
		link: `./${slug}`
	})) ?? [];
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
	<div class="flex flex-col items-center prose dark:prose-invert">
		<h1 class="h1">{blog.headline}</h1>
		<p>{@html blog.subheadline}</p>
	</div>
	<div class="flex flex-col h-full w-full shadow-md p-8 bg-surface-0 dark:bg-surface-900 rounded-lg gap-8">
		<h3 class="h3 prose dark:prose-invert">
			<select class="select w-40" style="text-transform: capitalize" bind:value={featuredTag} on:change={() => {featuredTag = featuredTag}}>
				{#each tags as {tag_name}}
					<option value={tag_name} style="text-transform: capitalize">{tag_name}</option>
				{/each}
			</select> Posts
		</h3>
		<BlogCarousel cards={blogCards} />
	</div>
</div>
