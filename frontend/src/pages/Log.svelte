<script>
    import { onMount } from "svelte";

  let logs = [];
  const getAllLogs = async () => {
    try {
      const response = await fetch("http://localhost:3000/product/logs", {
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

	onMount(getAllLogs)
</script>

<div>
  <h2>LOGS</h2>
  <div>
    {#each logs as log}
      <div>
        <p>{log.name}</p>
        <p>{log.price}</p>
        <p>{log.createdAt}</p>
      </div>
    {/each}
  </div>
</div>
