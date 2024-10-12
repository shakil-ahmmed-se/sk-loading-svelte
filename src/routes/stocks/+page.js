export const load = async (loadEvent) =>{
    const { fetch} = loadEvent;
    const res = await fetch('http://localhost:4000/stocks');
    const stocks = await res.json();
    console.log(stocks.length);
    return {
        stocks
    }
}