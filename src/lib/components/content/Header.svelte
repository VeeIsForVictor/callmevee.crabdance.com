<script lang="ts">
	import type { header } from "$lib/models/content";

    export let data: header;

    let headerClass = `h${data.level}`;
</script>

<h1 class={headerClass}>
    {data.text}
</h1>