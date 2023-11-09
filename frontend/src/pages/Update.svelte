<script>
	import { apiData } from "../store";
	import { getProducts } from "../utils";
	let nameToUpdate = ""; // Store the name of the product to update

	async function handleSubmit(product) {
		try {
			const response = await fetch("http://localhost:3000/products", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name: product.name, price: product.newPrice }),
			});

			if (response.ok) {
				// Handle the response as needed
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
	{#each $apiData as product (product.name)}
		<div>
			<h2>{product.name}</h2>
			<p>{product.price} $</p>
			<input bind:value={product.newPrice} placeholder="newPrice" type="text" />
			<button
				on:click={() => {
					nameToUpdate = product.name;
					handleSubmit(product);
				}}>CHANGE</button
			>
		</div>
	{/each}
</div>
