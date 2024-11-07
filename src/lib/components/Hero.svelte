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
    {#if heroBackgroundURL}
        <div class="opacity-30 rounded-3xl shadow-lg" style="position: absolute; background-image: url({heroBackgroundURL}); height: {heroBackgroundHeight}px; width: {heroBackgroundWidth}px; z-index: -9;"/>
    {:else}
        <div class="animated-background bg-gradient-to-r from-slate-100 via-blue-400 to-surface-500 dark:from-slate-800 dark:via-blue-950 dark:to-surface-900 rounded-3xl shadow-lg" style="position: absolute; height: {heroBackgroundHeight}px; width: {heroBackgroundWidth}px; z-index: -9;"/>
    {/if}
    <div class="flex flex-col items-center justify-center prose dark:prose-invert">
        <h1 class="h1">{heroHeadline}</h1>
        <p>{@html heroSubheadline}</p>
    </div>
</div>

<style>
    .animated-background {
        background-size: 400%;

        -webkit-animation: animation 6s ease infinite;
        -moz-animation: animation 6s ease infinite;
        animation: animation 6s ease infinite;
    }

    @keyframes animation {
        0%,
        100% {
            background-position: 0% 50%;
        }
        
        50% {
            background-position: 100% 50%;
        }
    }
</style>