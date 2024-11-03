<script lang="ts">
    export let data;

    $: ({ blog, blogPosts, tags } = data);
</script>

<div class="prose">
    <h3 class="h3">{blog.headline}</h3>
</div>