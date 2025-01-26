<script lang="ts">
	import { Project } from "$lib/models/work/projects";
	import slugify from "slugify";

    interface Props {
        project: Project
    }
    
    let { project } : Props = $props();
    let { name, description } = project;
    let project_date = new Date(project.project_date);

    let slug = slugify(name);

    let date = `${project_date.getMonth()} ${project_date.getFullYear()}`
</script>

<article class="card p-8 w-full !max-w-none prose dark:prose-invert prose-p:m-0" id={slug}>
    <h3 class="h3">{name}</h3>
    <hr class="!mb-0"/>
    <p class="text-right">
        <small>Released on <time datetime={project_date.toString()}>{project_date.toLocaleDateString()}</time></small>
    </p>

    {@html description}
</article>