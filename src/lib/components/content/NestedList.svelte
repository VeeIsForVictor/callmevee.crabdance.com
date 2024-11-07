<script lang="ts">
	import type { content, nestedlist } from "$lib/models/content";

    export let data: nestedlist;
</script>

{#if data.style=="ordered"}
    <ol>
        {#each data.items as item}
            <li>{item.content}</li>
        {/each}
    </ol>
{/if}