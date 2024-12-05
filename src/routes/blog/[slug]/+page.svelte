<script lang="ts">
	import { assert } from '$lib/assert';
	import Hero from '$lib/components/Hero.svelte';

	let { data } = $props();
	let { post, author, blogPostTags } = data;
	assert(post && author && blogPostTags)

	let { title, post_content, date_created, date_updated } = post;
	assert(date_updated !== null)

	let { first_name, last_name } = author;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
	<Hero heroHeadline={title} heroSubheadline="" heroBackgroundHeight={300} heroBackgroundWidth={1200}/>
	<div class="flex lg:flex-row flex-col gap-4">
		<div class="lg:w-3/12">
			<div class="w-full prose dark:prose-invert bg-surface-100 dark:bg-surface-900 rounded-lg p-8">
				<div class="grid lg:grid-rows-3 lg:grid-cols-1 grid-rows-1 grid-cols-3">
					<div>
						<h4>Author:</h4>
						<h5>{first_name} {last_name}</h5>
					</div>
					<div>
						<h4>Date created:</h4>
						<time datetime={date_created}>{new Date(date_created).toLocaleDateString()}</time>
					</div>
					<div>
						<h4>Date updated:</h4>
						<time datetime={date_created}>{new Date(date_updated).toLocaleDateString()}</time>
					</div>
				</div>
				<h4>Tags</h4>
				{#each blogPostTags as {tags_tag_name: name}}
					<h5 class="badge variant-filled-primary mx-1">{name}</h5>
				{/each}
			</div>
		</div>
		<div class="flex flex-col h-full lg:w-9/12 !max-w-none shadow-md p-8 bg-surface-100 dark:bg-surface-900 rounded-lg gap-4">
			{@html post_content}
		</div>
	</div>
</div>