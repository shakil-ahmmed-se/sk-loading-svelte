<script>
    export let data;
    console.log(data)
</script>

<h1>Stock Page</h1>
<span>{data.mostActiveStock.symbol}</span>

<span>Most active stock - {data.mostActiveStock.symbol}</span>
<span>Top gaining stock - {data.topGainingStock.symbol}</span>
<span>Top losing stock - {data.topLosingStock.symbol}</span>


<style>
    span{
        margin-right: 30px;
        font-size: 24px;
    }
</style>