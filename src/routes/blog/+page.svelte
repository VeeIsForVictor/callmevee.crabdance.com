<script lang="ts">
	import { PUBLIC_APIURL } from '$env/static/public';
	import type { Post } from '$lib/components/BlogCard.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import BlogCarousel from '$lib/components/BlogCarousel.svelte';

	export let data;

	let { blog, blogPosts, blogPostsTags, tags } = data;

	let heroBackgroundHeight = 600;
	let heroBackgroundWidth = 1200;
	let heroBackgroundURL = `${PUBLIC_APIURL}/assets/${blog.hero_background}?width=${heroBackgroundWidth}&height=${heroBackgroundHeight}&fit=cover&format=webp`;
	console.log(heroBackgroundURL)

	let featuredTag = "featured";

	let featuredBlogCards: Post[] = [];
	let blogCards: Post[] = [];

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

	$: featuredBlogCards = featuredPosts?.map(({ title, slug, content }) => ({
		title,
		content,
		link: `./${slug}`
	})) ?? [];

	blogCards = blogPosts.map(({ title, slug, content }) => ({
		title,
		content,
		link: `./${slug}`
	})) ?? [];
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
	<!-- Hero -->
	<div class="flex w-full justify-center items-center" style="height: {heroBackgroundHeight}px; width: {heroBackgroundWidth}px">
		<div class="opacity-35 rounded-3xl shadow-lg" style="position: absolute; background-image: url({heroBackgroundURL}); height: {heroBackgroundHeight}px; width: {heroBackgroundWidth}px; z-index: -5;"/>
		<div class="flex flex-col items-center justify-center prose dark:prose-invert">
			<h1 class="h1">{blog.headline}</h1>
			<p>{@html blog.subheadline}</p>
		</div>
	</div>

	<div class="flex flex-col h-auto w-full shadow-md p-8 bg-surface-0 dark:bg-surface-900 rounded-lg gap-8">
		<!-- Featureds Carousel -->
		<h3 class="h3 prose dark:prose-invert">
			<select class="select w-40" style="text-transform: capitalize" bind:value={featuredTag} on:change={() => {featuredTag = featuredTag}}>
				{#each tags as {tag_name}}
					<option value={tag_name} style="text-transform: capitalize">{tag_name}</option>
				{/each}
			</select> Posts
		</h3>
		<BlogCarousel cards={featuredBlogCards} />
		
		<!-- Posts Grid -->
		<h3 class="h3 prose dark:prose-invert">Blog Posts</h3>
		<div class="grid grid-cols-3 gap-4 h-auto">
			{#each blogCards as post}
				<BlogCard {post}/>
			{/each}
		</div>
	</div>
</div>
