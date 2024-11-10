<script lang="ts">
	import { assert } from '$lib/assert';
	import Hero from '$lib/components/Hero.svelte';
		
    export let data;
	let { post, author } = data;
	assert(post && author)

	let { title, post_content, date_created, date_updated } = post;
	assert(date_updated !== null)

	let { first_name, last_name } = author;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
	<Hero heroHeadline={title} heroSubheadline="" heroBackgroundHeight={300} heroBackgroundWidth={1200}/>
	<div class="flex flex-row gap-4">
		<div class="w-3/12">
			<div class="w-full prose dark:prose-invert bg-surface-100 dark:bg-surface-900 rounded-lg p-8">
				<h4>Author:</h4>
				<h5>{first_name} {last_name}</h5>
				<h4>Date created:</h4>
				<h5>{new Date(date_created).toLocaleDateString()}</h5>
				<h4>Date updated:</h4>
				<h5>{new Date(date_updated).toLocaleDateString()}</h5>
			</div>
		</div>
		<div class="flex flex-col h-full w-9/12 !max-w-none shadow-md p-8 bg-surface-100 dark:bg-surface-900 rounded-lg gap-4">
			{@html post_content}
		</div>
	</div>
</div>