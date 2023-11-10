<script>
	import List from "../components/List.svelte";
	import { apiData } from "../store";
	let name = "";
	let searchList = $apiData;

	async function findMongo() {
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
					searchList = result.response;
				} else {
					console.error("Error: Unable to find the product");
				}
			} else {
				console.error("Response Incorrect");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	}
</script>

<div id="index">
	<input bind:value={name} placeholder="Products" type="text" />
	<button
		on:click={() => {
			findMongo();
		}}>SEARCH</button
	>
	{#if searchList.length > 0}
		<List bind:list={searchList} />
	{/if}
</div>
