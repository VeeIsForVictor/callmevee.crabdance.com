<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';

    export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
</svelte:head>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
	<Hero heroHeadline={data.title} heroSubheadline="" heroBackgroundHeight={300} heroBackgroundWidth={1200}/>
	<div class="flex flex-col h-full w-full shadow-md p-8 bg-surface-900 rounded-lg gap-4">
		<p class="prose dark:prose-invert">{@html data.content}</p>
	</div>
</div>