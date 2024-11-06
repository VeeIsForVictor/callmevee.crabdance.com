<script context="module" lang="ts">
    export type Post = {
		title: string;
		content: string;
		link: string;
	};
</script>

<script lang="ts">
    import { blur } from 'svelte/transition';

    export let post: Post;

    export let maxBlurbLength = 100;

    export let style = null;

    // Handle truncating post.content to fit the blurb length
    let blurbify = (input: string) => input.length <= 100 ? input : `${input.slice(0, maxBlurbLength - 4)} ...`;

    $: post.content = blurbify(post.content)
</script>

<a transition:blur href={post.link} class="card shrink-0 snap-start h-[100%] py-2" {style}>
    <header class="card-header prose dark:prose-invert">
        <h3 class="h3">{post.title}</h3>
    </header>
    <hr class="border-2 my-4">
    <footer class="card-footer prose dark:prose-invert">
        <p>{@html blurbify(post.content)}</p>
    </footer>
</a>