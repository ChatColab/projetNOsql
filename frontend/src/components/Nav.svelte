<script>
    import { Link } from "svelte-routing";
</script>


<nav>
	<Link to="/">Home</Link>
	<Link to="/update">Update</Link>
	<Link to="/create">Create</Link>
	<Link to="/delete">Delete</Link>
	<Link to="/search">Search</Link>
</nav>

	<style>
	nav {
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: 3rem;
		position: sticky;
		top: 0;
		left: 0;
	}
</style>
