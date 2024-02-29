<script>
	import Product from "./Product.svelte";
	export let list = [];

</script>

{#if list.length > 0}
	<div class="list">
		{#each list as product (product._id)}
			<Product {product} />
		{/each}
	</div>
{:else}
	<p>Chargement ...</p>
{/if}
