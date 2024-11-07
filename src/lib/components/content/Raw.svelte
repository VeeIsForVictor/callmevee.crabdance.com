<script lang="ts">
	import type { raw } from "$lib/models/content";

    export let data: raw;
</script>

<div class="prose dark:prose-invert !max-w-none">
    {@html data.html}
</div>