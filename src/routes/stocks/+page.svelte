<script>
    import { invalidate } from "$app/navigation"
    export let data;
    console.log("layout page data", data.length);
    function refresh(){
        invalidate('http://localhost:4000/stocks')
    }
</script>

<h1>Actively tradin stocks</h1>

{#each data.stocks as stock}
	<h2>{stock.symbol} - ${stock.price}</h2>
{/each}
<button on:click={refresh} >Refresh</button>
