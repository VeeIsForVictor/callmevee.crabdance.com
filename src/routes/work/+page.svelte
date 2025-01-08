<script>
	import ProjectsTimeline from "$lib/components/ProjectsTimeline.svelte";
	import SkillSummary from "$lib/components/SkillSummary.svelte";
	
	export let data;
	const { languages, frameworks, technologies, projects } = data;

	let skills = { languages, frameworks, technologies }
</script>
<svelte:head>
	<title>CallMeVee</title>
</svelte:head>

<div class="flex flex-col w-full space-y-32 items-center">
	<SkillSummary {...skills}/>

	<ProjectsTimeline projects={projects}/>

	<div class="space-y-5 prose dark:prose-invert w-1/2">
		<h1 class="h1">Hi there!</h1>
		<p>
			This page is a work in progress, check back later when this page looks cooler!
		</p>
	</div>
</div>