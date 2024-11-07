<script lang="ts">
	import type { Paragraph } from "$lib/models/content";
    export let data: Paragraph;
</script>

<p class="prose dark:prose-invert">
    {data.text}
</p>