<script lang="ts">
	import { PUBLIC_APIURL } from '$env/static/public';
	import type { Post } from '$lib/components/BlogCard.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import BlogCarousel from '$lib/components/BlogCarousel.svelte';
	import Hero from '$lib/components/Hero.svelte';

	export let data;

	let { blog, blogPosts, blogPostsTags, tags } = data;

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

	$: featuredBlogCards = featuredPosts?.map(({ title, slug, post_content }) => ({
		title,
		content: post_content,
		link: `./${slug}`
	})) ?? [];

	blogCards = blogPosts.map(({ title, slug, post_content }) => ({
		title,
		content: post_content,
		link: `./${slug}`
	})) ?? [];
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
	<!-- Hero -->
	<Hero heroBackgroundRawId={blog.hero_background} heroHeadline={blog.headline} heroSubheadline={blog.subheadline}/>

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
