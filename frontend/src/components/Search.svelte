<script>
	import { apiData } from "../store";
	import { getProducts } from "../utils";
	let name = "";

	const getProductsByName = async () => {
		try {
			const response = await fetch(`http://localhost:3000/products/${name}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				const result = await response.json();
				if (result) {
					console.log("Product found successfully");
					apiData.set(result.response);
				} else {
					console.error("Error: Unable to find the product");
				}
			} else {
				console.error("Response Incorrect");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const resetSearch = () => {
		name = "";
		getProducts();
	};
</script>

<div class="columned">
	<h2>Rechercher un article :wink</h2>
	<div>
		<input bind:value={name} placeholder="Articles" type="text" />
		<button
			on:click={() => {
				if (name !== "") {
					getProductsByName();
				}
			}}>Rechercher</button
		>
	</div>
	<button
		on:click={() => {
			resetSearch();
		}}>Clear</button
	>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
	}
</style>
