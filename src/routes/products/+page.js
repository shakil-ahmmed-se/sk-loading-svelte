import Product from './product.svelte'

export const load = async (loadEvent) =>{
    console.log('Load function called in page.js')
    const { fetch, data } = loadEvent;  
    const notification = 'End of season sale';
    return {
        ...data,
        Component: Product,
        notification,
    }
}

export const prerender = true;

// export const ssr = true;
// export const csr = true;