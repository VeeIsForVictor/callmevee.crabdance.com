<script lang="ts">
	import type { Projects } from "$lib/models/work/projects";
	import ProjectsTimelineItem from "./ProjectsTimelineItem.svelte";
	import slugify from "slugify";

    interface Props {
        projects: Projects
    }

    let { projects }: Props = $props();
</script>

<div class="flex w-full space-x-8">
    <div class="flex flex-col card w-80 p-4 sticky top-20">
        <h5 class="h5">Table of Contents</h5>
        <div>
            {#each projects as { name }}
                {@const slug = slugify(name)}
                <p class="text-gray-500 hover:underline"><a href="#{slug}">{name}</a></p>
            {/each}
        </div>
    </div>
    <div class="space-y-4 w-full">
        {#each projects as project}
            <ProjectsTimelineItem {project}/>
        {/each}
    </div>
</div>