<script lang="ts">    
    type carouselCard = { 
        title: string,
        blurb: string,
        link: string,
    };
    
    export let cards: carouselCard[];

    let elemCarousel: HTMLDivElement;
    
    function multiColumnLeft(): void {
        let x = elemCarousel.scrollWidth;
        if (elemCarousel.scrollLeft !== 0) x = elemCarousel.scrollLeft - elemCarousel.clientWidth;
        elemCarousel.scroll(x, 0);
    }

    function multiColumnRight(): void {
        let x = 0;
        // -1 is used because different browsers use different methods to round scrollWidth pixels.
        if (elemCarousel.scrollLeft < elemCarousel.scrollWidth - elemCarousel.clientWidth - 1) x = elemCarousel.scrollLeft + elemCarousel.clientWidth;
        elemCarousel.scroll(x, 0);
    }
                        
</script>


<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnLeft}>
		
	</button>
	<!-- Carousel -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex gap-2 pb-2 overflow-x-auto">
		{#each cards as card}
            <a href={card.link} class="card shrink-0 w-[28%] snap-start">
                <header class="card-header prose dark:prose-invert">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <h3 class="h3">{card.title}</h3>
                </header>
                <footer class="card-footer prose dark:prose-invert">
                    <p>{@html card.blurb}</p>
                </footer>
            </a>
		{/each}
	</div>
	<!-- Button-Right -->
	<button type="button" class="btn-icon variant-filled" on:click={multiColumnRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>