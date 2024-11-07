<script lang="ts">
	import type { Content, Nestedlist } from "$lib/models/content";
    export let data: Nestedlist;
</script>

{#if data.style=="ordered"}
    <ol>
        {#each data.items as item}
            <li>{item.content}</li>
        {/each}
    </ol>
{/if}