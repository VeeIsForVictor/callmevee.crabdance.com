<script lang="ts">
	import { Project } from "$lib/models/work/projects";
	import { TimelineItem } from "flowbite-svelte";
	import { description } from "valibot";

    interface Props {
        project: Project
    }
    
    let { project } : Props = $props();
    let project_date = new Date(project.project_date);

    let date = `${project_date.getMonth()} ${project_date.getFullYear()}`
</script>

<article class="card p-8 w-full">
    <h3 class="h3">{project.name}</h3>
    <p>{project.description}</p>
</article>