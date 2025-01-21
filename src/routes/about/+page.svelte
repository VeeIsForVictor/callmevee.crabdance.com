<script lang="ts">
    let { data } = $props();
    let { about } = data;
</script>

<div class="flex flex-col space-y-5 prose dark:prose-invert">
    <h1 class="h1">About</h1>
    {@html about.about_text}
</div>