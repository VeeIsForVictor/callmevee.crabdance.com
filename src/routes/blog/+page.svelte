<script lang="ts">
    export let data;

    $: ({ blog, blogPosts, tags } = data);
</script>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
    <div class="flex flex-col items-center prose dark:prose-invert">
        <h1 class="h1">{blog.headline}</h1>
        <p>{@html blog.subheadline}</p>
    </div>
    <div class="flex flex-col h-full w-full shadow-md p-8 bg-surface-900 rounded-lg gap-4">
        <h3 class="h3 prose dark:prose-invert">Featured Posts</h3>
        <div class="flex flex-row gap-4 place-self-center">
            {#each blogPosts as {title, slug}}
                <a href="./{slug}">
                    <div class="card w-96">
                        <header class="card-header">
                            <h4 class="h4 p-4">{title}</h4>
                        </header>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</div>