<script>
	import Delete from "./Delete.svelte";
	import Update from "./Update.svelte";

	export let product = {};
</script>

<div>
	<h2>{product.name}</h2>
	<p>{product.price} $</p>
	<Update {product} />
	<Delete {product} />
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 5px solid blue;
		margin: 1rem;
		row-gap: 0.5rem;
		padding: 1rem;
	}

	p {
		color: green;
		font-weight: bold;
	}
</style>
