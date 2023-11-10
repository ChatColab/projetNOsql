<script>
	import { apiData } from "../store";
	import { getProducts } from "../utils";
	let nameToUpdate = "";

	async function handleSubmit(product) {
		try {
			const response = await fetch("http://localhost:3000/products", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name: product.name }),
			});

			if (response.ok) {
				console.log("Product updated successfully");
				await getProducts();
			} else {
				console.error("Error: Unable to update the product");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}
</script>

<div id="index">
	{#if $apiData.length > 0}
		{#each $apiData as product (product.name)}
			<div>
				<h2>{product.name}</h2>
				<p>{product.price} $</p>
				<button
					on:click={() => {
						handleSubmit(product);
					}}>DELETE</button
				>
			</div>
		{/each}
	{:else}
		<p>No products to delete for now <strong>Sorry</strong></p>
	{/if}
</div>
