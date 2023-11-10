<script>
	export let list = [];
	console.log(list);
</script>

{#if list.length > 0}
	{#each list as product}
		<div id="list">
			<h2>{product.name}</h2>
			<p>{product.price} $</p>
		</div>
	{/each}
{:else}
	<p>...Loading</p>
{/if}

<style>
	#list {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
</style>
