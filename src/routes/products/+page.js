import Product from './product.svelte'

export const load = async (loadEvent) =>{
    const { fetch, data } = loadEvent;  
    const notification = 'End of season sale';
    return {
        ...data,
        Component: Product,
        notification,
    }
}