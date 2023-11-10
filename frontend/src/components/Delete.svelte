<script>
	import { getProducts } from "../utils";

	export let product = {};
	const deleteProducts = async () => {
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
	};
</script>

<button
	on:click={async () => {
		await deleteProducts();
	}}>DELETE</button
>

<style>
	button {
		margin: 0 auto;
		background-color: red;
		color: white;
		border: none;
		border-radius: 2rem;
		padding: 1rem;
		cursor: pointer;
	}
</style>
