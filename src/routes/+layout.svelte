<script lang="ts">
	import '../app.postcss';
	
	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { Drawer, initializeStores, storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import Background from '$lib/components/Background.svelte';
	import NavBar from '$lib/components/NavBar.svelte';
	import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte';

	initializeStores()
		
	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	import posthog from 'posthog-js';
	import { browser } from '$app/environment';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	
	if (browser) {
		beforeNavigate(() => posthog.capture('$pageleave'));
		afterNavigate(() => posthog.capture('$pageview'));
	}

	let { data, children } = $props();
	let settings = data.settings;

</script>

<svelte:head>
	<link rel="icon" href={settings.public_favicon} />
</svelte:head>

<Drawer>
	
</Drawer>
<Background />
<header class="sticky inset-x-0 top-0 z-30 items-center justify-center p-3 lg:px-16">
	<NavBar projectName={settings.project_name}/>
</header>

<div class="container w-full h-auto mx-auto flex justify-center items-center min-h-screen">
	{@render children?.()}
</div>
  
<Footer>
	<div class="sm:flex sm:items-center sm:justify-between mx-1 bg-surface-100 dark:bg-surface-900">
	<FooterCopyright href="/" by="Victor Edwin Reyes" year={new Date().getFullYear()} />
	<FooterLinkGroup ulClass="flex flex-wrap items-center py-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 gap-6 mx-2">
		<FooterLink href="/">About</FooterLink>
		<!-- Contact Links down here -->
	</FooterLinkGroup>
	</div>
</Footer>