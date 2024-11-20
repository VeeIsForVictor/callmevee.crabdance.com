<script lang="ts">
	import { ArrowLeft, ArrowRight } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { blur } from 'svelte/transition';
	import BlogCard, { type Post } from './BlogCard.svelte';
	
	interface Props {
		cards: Post[];
	}

	let { cards }: Props = $props();
	
	let maxCardsPerScroll = 3;
	let maxBlurbLength = Math.round(350 / Math.min(maxCardsPerScroll, cards.length));
	let cardWidth = $derived(`${Math.round(100 / Math.min(maxCardsPerScroll, cards.length))}%`);
	
	let elemCarousel: HTMLDivElement = $state(new HTMLDivElement());
	
	function multiColumnLeft(): void {
		let x = elemCarousel.scrollWidth;
		if (elemCarousel.scrollLeft !== 0) x = elemCarousel.scrollLeft - elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}

	function multiColumnRight(): void {
		let x = 0;
		// -1 is used because different browsers use different methods to round scrollWidth pixels.
		if (elemCarousel.scrollLeft < elemCarousel.scrollWidth - elemCarousel.clientWidth - 1)
			x = elemCarousel.scrollLeft + elemCarousel.clientWidth;
		elemCarousel.scroll(x, 0);
	}
</script>

<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" onclick={multiColumnLeft}>
		<Icon src={ArrowLeft} />
	</button>
	<!-- Carousel -->
	<div
		bind:this={elemCarousel}
		class="snap-x snap-mandatory scroll-smooth scrollbar-hidden flex gap-2 pb-2 px-4 overflow-x-auto h-80"
	>
		{#if cards.length == 0}
			<div transition:blur class="flex flex-col items-center justify-center card shrink-0 snap-start w-[100%]">
				<header class="card-header prose dark:prose-invert">
					<h3 class="h3">No blog posts found for this tag</h3>
				</header>
				<footer class="card-footer prose dark:prose-invert">
					<p>In the meantime, try another tag!</p>
				</footer>
			</div>
		{/if}
		{#each cards as card}
			<BlogCard post={card} style="width: {cardWidth}" {maxBlurbLength}/>
		{/each}
	</div>
	<!-- Button-Right -->
	<button type="button" class="btn-icon variant-filled" onclick={multiColumnRight}>
		<Icon src={ArrowRight} />
	</button>
</div>
