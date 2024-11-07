<script lang="ts">
	import type { Code } from "$lib/models/content";
    import { CodeBlock } from '@skeletonlabs/skeleton';

    export let data: Code;
</script>

<CodeBlock language="html">
    {data.code}
</CodeBlock>