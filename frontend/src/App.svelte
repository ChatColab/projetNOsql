<script>
	import { Router, Route } from "svelte-routing";
	import Update from "./pages/Update.svelte";
	import Index from "./pages/Index.svelte";
	import Nav from "./components/Nav.svelte";
	import Create from "./pages/Create.svelte";
	import Delete from "./pages/Delete.svelte";
	import Search from "./pages/Search.svelte";

	export let url = "";
</script>

<Router {url}>
	<Nav />
	<div>
		<Route path="/"><Index /></Route>
		<Route path="/update" component={Update} />
		<Route path="/create" component={Create} />
		<Route path="/delete" component={Delete} />
		<Route path="/search" component={Search} />
	</div>
</Router>

<style>
</style>
