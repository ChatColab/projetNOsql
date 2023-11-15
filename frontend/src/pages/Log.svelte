<script>
	import { onMount } from "svelte";

	let logs = [];
	const getAllLogs = async () => {
		try {
			const response = await fetch("http://localhost:3000/products/logs", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				const result = await response.json();
				if (result) {
					console.log("Logs found successfully");
					logs = result.response;
				} else {
					console.error("Error: Unable to find the logs");
				}
			} else {
				console.error("Response Incorrect");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	onMount(getAllLogs);
</script>

<div>
	<div id="logs">
		{#each logs as log}
			<div id="log">
				<div>
					{log.key}
				</div>
				<div>
					{log.value}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	#logs {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
	}
	#log {
		display: flex;
		flex-direction: column;
		align-items: center;
		widows: 80%;
		padding: 1rem;
		row-gap: 2rem;
	}
</style>
