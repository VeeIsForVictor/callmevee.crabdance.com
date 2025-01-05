<script>
	import SkillSummary from "$lib/components/SkillSummary.svelte";

	export let data;
</script>
<svelte:head>
	<title>CallMeVee</title>
</svelte:head>

<div class="flex flex-col w-full space-y-32 items-center">
	<SkillSummary/>

	<div class="space-y-5 prose dark:prose-invert w-1/2">
		<h1 class="h1">Hi there!</h1>
		<p>
			This page is a work in progress, check back later when this page looks cooler!
		</p>
	</div>
</div>