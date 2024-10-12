<script>
  export let product;
</script>

<a href={`/product/${product.id}`}>
  <h2>{product.title}</h2>
</a>
<p>{product.description}</p>
<hr />
