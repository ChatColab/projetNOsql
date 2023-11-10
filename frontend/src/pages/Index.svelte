<script>
	import { onMount } from "svelte";
	import { getProducts } from "../utils";
	import { apiData } from "../store";
	import List from "../components/List.svelte";
	let promise;
	onMount(getProducts);
</script>

<div id="index">
			<List list={$apiData} />
</div>

<style>
	#index {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
</style>
