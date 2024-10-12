export const load = async (serverLoadEvent) =>{
    const { fetch } = serverLoadEvent;
    const title = "List of avaible products";
    const res = await fetch("http://localhost:4000/products/")
    const products = await res.json();
    return {
        title,
        products,
    
    }
}