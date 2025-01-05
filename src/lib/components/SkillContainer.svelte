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

<div>
    <h3 class="h3">{name}</h3>
    {#each items as item}
        {@const imageURL=`${PUBLIC_APIURL}/assets/${item.icon}`}
        <div>
            <img src={imageURL} height=48 width=48 alt={item.name}>
            <h4>{item.name}</h4>
        </div>
    {/each}
</div>