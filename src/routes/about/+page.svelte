<script lang="ts">
    let { data } = $props();
    let { about } = data;
</script>

<svelte:head>
    <title>About</title>
</svelte:head>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
    <h1 class="h1">About</h1>
    <div class="flex flex-col h-full lg:w-9/12 !max-w-none shadow-md p-8 bg-surface-100 dark:bg-surface-900 rounded-lg gap-4 prose dark:prose-invert prose-headings:my-2">
        {@html about.about_text}
    </div>
</div>