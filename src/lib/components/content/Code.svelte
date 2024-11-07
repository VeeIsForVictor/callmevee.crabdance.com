<script lang="ts">
	import type { code } from "$lib/models/content";
    import { CodeBlock } from '@skeletonlabs/skeleton';

    export let data: code;
</script>

<CodeBlock>
    {data.code}
</CodeBlock>