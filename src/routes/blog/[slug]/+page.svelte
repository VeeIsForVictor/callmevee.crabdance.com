<script lang="ts">
    export let data;
</script>

<div class="h-full w-full flex flex-col justify-left items-center text-justify gap-16 py-20">
	<div class="flex flex-col items-center prose dark:prose-invert">
		<h3 class="h3">{data.title}</h3>
	</div>
	<div class="flex flex-col h-full w-full shadow-md p-8 bg-surface-900 rounded-lg gap-4">
		<p class="prose dark:prose-invert">{@html data.content}</p>
	</div>
</div>