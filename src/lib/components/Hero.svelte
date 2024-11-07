<script lang="ts">
	import { PUBLIC_APIURL } from "$env/static/public";

    export let heroBackgroundHeight = 600;
	export let heroBackgroundWidth = 1200;
    export let heroBackgroundRawId : string | null = null;

    export let heroHeadline;
    export let heroSubheadline;

	let heroBackgroundURL = heroBackgroundRawId ? `${PUBLIC_APIURL}/assets/${heroBackgroundRawId}?width=${heroBackgroundWidth}&height=${heroBackgroundHeight}&fit=cover&format=webp` : null;
</script>

<div class="flex w-full justify-center items-center bg-white dark:bg-slate-800 rounded-3xl" style="height: {heroBackgroundHeight}px; width: {heroBackgroundWidth}px; z-index: -10;">
    <div class="opacity-30 rounded-3xl shadow-lg" style="position: absolute; background-image: url({heroBackgroundURL}); height: {heroBackgroundHeight}px; width: {heroBackgroundWidth}px; z-index: -9;"/>
    <div class="flex flex-col items-center justify-center prose dark:prose-invert">
        <h1 class="h1">{heroHeadline}</h1>
        <p>{@html heroSubheadline}</p>
    </div>
</div>