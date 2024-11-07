<script lang="ts">
	import type { Raw } from "$lib/models/content";
    export let data: Raw;
</script>

<div class="prose dark:prose-invert !max-w-none">
    {@html data.html}
</div>Raw