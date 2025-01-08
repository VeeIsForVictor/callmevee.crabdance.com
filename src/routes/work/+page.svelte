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

<div class="flex flex-col w-full items-center">
	<SkillSummary {...skills}/>

	<ProjectsTimeline projects={projects}/>
</div>