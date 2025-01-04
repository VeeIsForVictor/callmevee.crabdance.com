<script lang="ts">
    type Props = {
        name: string,
        items: object[]
    };

    let {name, items = []} = $props();
</script>

<div>
    <h3 class="h3">{name}</h3>
</div>