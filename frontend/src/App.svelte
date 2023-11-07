<script>
	import { Router, Route } from "svelte-routing";
	import Update from "./pages/Update.svelte";
	import Index from "./pages/Index.svelte";
	import Nav from "./components/Nav.svelte";
    import Create from "./pages/Create.svelte";

	export let url = "";
</script>

<Router {url}>
	<Nav />
	<div>
		<Route path="/"><Index /></Route>
		<Route path="/update" component={Update} />
		<Route path="/create" component={Create} />
	</div>
</Router>

<style>
</style>
