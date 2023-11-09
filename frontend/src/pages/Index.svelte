<script>
	import { onMount } from "svelte";
	import {getProducts} from "../utils"
	import { apiData } from "../store";

	onMount(getProducts);
</script>

<div id="index">
	{#each $apiData as product}
		<div>
			<h2>{product.name}</h2>
			<p>{product.price} $</p>
		</div>
	{/each}
</div>

<style>
	#index {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
</style>
