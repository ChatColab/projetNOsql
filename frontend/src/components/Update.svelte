<script>
	import { getProducts } from "../utils";

	let nameToUpdate = "";
	export let product = {};
	let newPrice;
	let newQuantite;
	const changeProducts = async () => {
		try {
			const response = await fetch("http://localhost:3000/products", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name: product.name, price: newPrice, quantite: newQuantite }),
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

<div>
	<input bind:value={newPrice} placeholder="newPrice" type="text" />
	<input bind:value={newQuantite} placeholder="newQuantite" type="text" />
	<button
		on:click={async () => {
			nameToUpdate = product.name;
			await changeProducts();
		}}>CHANGE</button
	>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		width: 100%;
	}
	input {
		width: 60%;
		border-radius: 2rem;
		padding: 0.5rem;
	}

	button {
		background-color: blue;
		padding: 0.5rem 1rem;
		border-radius: 2rem;
		border: none;
		color: white;
		cursor: pointer;
	}
</style>
