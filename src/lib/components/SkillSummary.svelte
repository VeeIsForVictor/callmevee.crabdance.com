<script lang="ts">
	import type { Skills } from "$lib/models/work/skills";
	import SkillContainer from "./SkillContainer.svelte";

    interface Props {
        languages: Skills,
        frameworks: Skills,
        technologies: Skills
    }

    let { languages, frameworks, technologies }: Props = $props();
</script>
<div class="flex prose dark:prose-invert w-full justify-center items-center bg-white dark:bg-slate-800 rounded-3xl max-w-none p-6 shadow-md">
    <div class="grid grid-cols-3 gap-10 justify-items-center prose-headings:my-4">
        <SkillContainer name="Languages" items={languages}/>
        <SkillContainer name="Libraries & Frameworks" items={frameworks}/>
        <SkillContainer name="Technologies" items={technologies}/>
    </div>
</div>