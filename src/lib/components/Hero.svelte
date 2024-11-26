<script lang="ts">
	import { PUBLIC_APIURL } from "$env/static/public";


    interface Props {
        heroBackgroundHeight?: number;
        heroBackgroundWidth?: number;
        heroBackgroundRawId?: string | null;
        heroHeadline: any;
        heroSubheadline: any;
    }

    let {
        heroBackgroundHeight = 600,
        heroBackgroundWidth = 1200,
        heroBackgroundRawId = null,
        heroHeadline,
        heroSubheadline
    }: Props = $props();

    let outerWidth = $state(0);
    let heroScalingFactor = $derived(heroBackgroundWidth < outerWidth ? 1 : 0.3);

    let actualBackgroundHeight = $derived(heroBackgroundHeight * heroScalingFactor);
    let actualBackgroundWidth = $derived(heroBackgroundWidth * heroScalingFactor);

	let heroBackgroundURL = $derived(heroBackgroundRawId ? `${PUBLIC_APIURL}/assets/${heroBackgroundRawId}?width=${actualBackgroundWidth}&height=${actualBackgroundHeight}&fit=cover&format=webp` : null);
</script>

<svelte:window bind:outerWidth/>

<div class="flex w-full justify-center items-center bg-white dark:bg-slate-800 rounded-3xl" style="height: {actualBackgroundHeight}px; width: {actualBackgroundWidth}px; z-index: -10;">
    {#if heroBackgroundURL}
        <div class="opacity-30 rounded-3xl shadow-lg" style="position: absolute; background-image: url({heroBackgroundURL}); height: {actualBackgroundHeight}px; width: {actualBackgroundWidth}px; z-index: -9;"></div>
    {:else}
        <div class="animated-background bg-gradient-to-r from-slate-100 via-blue-400 to-surface-500 dark:from-slate-800 dark:via-blue-950 dark:to-surface-900 rounded-3xl shadow-lg" style="position: absolute; height: {heroBackgroundHeight}px; width: {heroBackgroundWidth}px; z-index: -9;"></div>
    {/if}
    <div class="flex flex-col items-center justify-center prose dark:prose-invert">
        <h1 class="lg:h1 h2 text-center">{heroHeadline}</h1>
        <p class="lg:text-lg text-sm text-center">{@html heroSubheadline}</p>
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