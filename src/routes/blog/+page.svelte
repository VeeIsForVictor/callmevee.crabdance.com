<script lang="ts">
    export let data;

    $: ({ blog, blogPosts, tags } = data);
</script>

<div class="container h-full flex flex-col justify-left items-center mx-20 py-20 max-w-screen-lg prose dark:prose-invert text-justify gap-16">
    <div class="flex flex-col items-center">
        <h1 class="h1">{blog.headline}</h1>
        <p>{@html blog.subheadline}</p>
    </div>
    <div class="h-full w-max shadow-md p-8 bg-surface-900 rounded-lg">
        <h3>Featured Posts</h3>
        <div class="flex flex-row align-center gap-4">
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