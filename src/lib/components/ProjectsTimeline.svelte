<script lang="ts">
	import type { Projects } from "$lib/models/work/projects";
	import { Timeline } from "flowbite-svelte";
	import ProjectsTimelineItem from "./ProjectsTimelineItem.svelte";

    interface Props {
        projects: Projects
    }

    let { projects }: Props = $props();
</script>


{#each projects as project}
    <ProjectsTimelineItem {project}/>
{/each}