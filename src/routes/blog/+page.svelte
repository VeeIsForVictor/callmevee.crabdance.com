<script lang="ts">
    export let data;

    $: ({ blog, blogPosts, tags } = data);
</script>

<div class="flex flex-col">
    <div class="flex flex-col items-center">
        <h1 class="h1">{blog.headline}</h1>
        <p>{@html blog.subheadline}</p>
    </div>
    <hr>
    <div class="flex container grow">
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