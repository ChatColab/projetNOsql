<script>
	import { onMount } from "svelte";
	import { getProducts } from "../utils";
	import { apiData } from "../store";
	import List from "../components/List.svelte";
	import Create from "../components/Create.svelte";
	import Search from "../components/Search.svelte";
	onMount(getProducts);
</script>

<div id="index">
	<div id="utils">
		<Create />
		<Search />
	</div>
	<List bind:list={$apiData} />
</div>

<style>
	#utils {
		display: grid;
		grid-template-columns: 30% 70%;

	}
</style>
