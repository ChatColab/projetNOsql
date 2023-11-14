<script>
  import { Router, Route } from "svelte-routing";
  import Index from "./pages/Index.svelte";
  import Log from "./pages/Log.svelte";

  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Index /></Route>
    <Route path="/log"><Log /></Route>
  </div>
</Router>

<style>
</style>
