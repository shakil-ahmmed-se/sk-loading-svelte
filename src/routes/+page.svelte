<script>

    import { goto} from '$app/navigation';
    export let data;
</script>

<h1 class='tall'>Welcome to SvelteKit at {data.currentTime}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<a href="/products" data-sveltekit-noscroll>Products</a>

<button on:click={()=>{
    goto('/products')
}}>Go to products</button>

<style>
    /* .tall{
        height: 100vh;
    } */
</style>