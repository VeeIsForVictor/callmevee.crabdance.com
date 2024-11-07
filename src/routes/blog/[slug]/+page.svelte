<script lang="ts">
	import Code from '$lib/components/content/Code.svelte';
	import Paragraph from '$lib/components/content/Paragraph.svelte';
	import Raw from '$lib/components/content/Raw.svelte';
	import Quote from '$lib/components/content/Quote.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import type { BlogPost } from '$lib/models/blog_post';
	import { type Content } from '$lib/models/content';
	import Header from '$lib/components/content/Header.svelte';
	import NestedList from '$lib/components/content/NestedList.svelte';

    export let data: BlogPost;

	let blocks: Content | undefined = data.content_blocks?.blocks;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
	<Hero heroHeadline={data.title} heroSubheadline="" heroBackgroundHeight={300} heroBackgroundWidth={1200}/>
	<div class="flex flex-col h-full w-full !max-w-none shadow-md p-8 bg-surface-100 dark:bg-surface-900 rounded-lg gap-4">
		{#each blocks as {type, data}}
			{#if type == 'paragraph'}
				<Paragraph {data}/>
			{:else if type == 'header'}
				<Header {data}/>
			{:else if type == 'quote'}
				<Quote {data}/>
			{:else if type == 'nestedlist'}
				<NestedList {data}/>
			{:else if type == 'raw'}
				<Raw {data}/>
			{:else if type == 'code'}
				<Code {data}/>
			{/if}
		{/each}
	</div>
</div>