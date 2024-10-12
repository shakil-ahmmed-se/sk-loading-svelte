<script>
    export let data;
    const title = data.title;
    const username = data.username;
    const featureProducts = data.featureProducts;
    // const {username} = data;
</script>

<h2>{title} for {username}</h2>

{#each featureProducts as product}
	<div class="product-item">
		<h2>{product.title}</h2>
		<p>{product.description}</p>
	</div>
{/each}

<slot/>

<style>
	.product-item {
		display: inline-block;
		width: 200px;
		/* height: 100vh; */
		margin: 10px;
		border: 1px solid #ccc;
		padding: 10px;
	}
</style>