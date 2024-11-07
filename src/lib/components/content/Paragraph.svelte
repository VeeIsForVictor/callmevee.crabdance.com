<script lang="ts">
	import type { paragraph } from "$lib/models/content";

    export let data: paragraph;
</script>

<p class="prose dark:prose-invert">
    {data.text}
</p>