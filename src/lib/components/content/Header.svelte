<script lang="ts">
	import type { Header } from "$lib/models/content";
    export let data: Header;

    let headerClass = `h${data.level}`;
    console.log(data)
</script>

<h1 class={headerClass}>
    {data.text}
</h1>