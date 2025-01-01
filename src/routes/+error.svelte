<script lang="ts">
	import { page } from '$app/stores';
    let { status, error } = $page;
</script>

<h3 class="h3">
    <strong>{status}:</strong>
    {#if error !== null}
        {error.message}
    {/if}
</h3>