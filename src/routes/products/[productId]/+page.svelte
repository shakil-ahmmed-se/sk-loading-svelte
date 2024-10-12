<script>
    export let data;
    const title = data.title;
    const product = data.product;
</script>

<h1>{title}</h1>
<div>
    <h3>{product.title} - ${product.price} </h3>
    <p>{product.description}</p>
</div>