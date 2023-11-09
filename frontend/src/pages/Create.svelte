<script>
  let name = "";
  let price = 0;

  async function handleSubmit() {
    try {
      const response = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price }),
      });

    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<form on:submit={handleSubmit}>
  <input bind:value={name} placeholder="name" type="text" />
  <input bind:value={price} placeholder="price" type="text" />
  <button type="submit">SUBMIT</button>
</form>
