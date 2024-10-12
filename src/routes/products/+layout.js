export const load = async (loadEvent) => {
    const { fetch , parent} = loadEvent;
    const parentData = await parent();
    const {username} = parentData;
    const title = 'Feature Products';
    const res = await fetch('http://localhost:4000/featured-products');
    const featureProducts = await res.json();
    return {
        username,
        title,
        featureProducts,
    }
}