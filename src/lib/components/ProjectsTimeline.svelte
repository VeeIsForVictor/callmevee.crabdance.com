<script lang="ts">
	import type { Projects } from "$lib/models/work/projects";
	import { Timeline } from "flowbite-svelte";
	import ProjectsTimelineItem from "./ProjectsTimelineItem.svelte";

    interface Props {
        projects: Projects
    }

    let { projects }: Props = $props();
</script>

<div class="flex w-full space-x-8">
    <div class="flex card w-80 p-4 sticky top-20">
        <h5 class="h5">Table of Contents</h5>
    </div>
    <div class="space-y-4 w-full">
        {#each projects as project}
            <ProjectsTimelineItem {project}/>
        {/each}
    </div>
</div>