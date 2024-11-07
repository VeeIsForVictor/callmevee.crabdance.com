<script lang="ts">
	import type { quote } from "$lib/models/content";

    export let data: quote;
</script>

<figure class="max-w-screen-md">
    <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
        <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
            {data.text}
        </p>
    </blockquote>

    {#if data.caption}
        <figcaption class="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
            {data.caption}
        </figcaption>
    {/if}
</figure>