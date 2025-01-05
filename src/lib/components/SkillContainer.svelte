<script lang="ts">
	import { PUBLIC_APIURL } from "$env/static/public";

    interface Props {
        name: string,
        items: Item[]
    };

    type Item = {
        name: string,
        icon: string
    }

    let {name, items = []}: Props = $props();
</script>

<div class="flex-1 text-center">
    <h3 class="h3">{name}</h3>
    {#each items as item}
        {@const imageURL=`${PUBLIC_APIURL}/assets/${item.icon}`}
        <figure class="inline-block m-2 hover:card hover:card-hover py-1 px-2">
            <img class="m-auto h-12 w-12" src={imageURL} height=48 width=48 alt={`${item.icon} logo`}>
            <figcaption class="text-center">{item.name}</figcaption>
        </figure>
    {/each}
</div>