<script>
	import { Router, Route } from "svelte-routing";
	import Index from "./pages/Index.svelte";

	export let url = "";
</script>

<Router {url}>
	<div>
		<Route path="/"><Index /></Route>
	</div>
</Router>

<style>
</style>
