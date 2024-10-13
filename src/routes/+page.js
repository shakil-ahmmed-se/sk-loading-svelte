export const load = async ({fetch})=>{
    console.log('home page universal function load in page.js')

    const res = await fetch('/api/current-time');
    const currentTime = await res.text();
    return {currentTime}
}

export const prerender = true;
export const csr = false;