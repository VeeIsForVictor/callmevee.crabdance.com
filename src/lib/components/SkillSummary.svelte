<script>
	import SkillContainer from "./SkillContainer.svelte";

</script>
<div class="flex prose dark:prose-invert w-full justify-center items-center bg-white dark:bg-slate-800 rounded-3xl max-w-none p-10">
    <div class="grid grid-cols-3 gap-10 justify-items-center prose-headings:my-4">
        <SkillContainer name="Languages" />
        <SkillContainer name="Libraries & Frameworks" />
        <SkillContainer name="Technologies" />
    </div>
</div>