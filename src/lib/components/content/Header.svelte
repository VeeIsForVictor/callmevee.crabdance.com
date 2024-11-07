<script lang="ts">
	import type { Header } from "$lib/models/content";
    export let data: Header;

    let headerClass = `h${data.level}`;
</script>
Header
<h1 class={headerClass}>
    {data.text}
</h1>Header