export const load = async (loadEvent) =>{
    const { fetch } = loadEvent;
    const res = await fetch('/api/postcodes');
    const postcodes = await res.json();
    const addressList = postcodes.map(postcode =>{
        return `${postcode.buildingName}, ${postcode.line1}, ${postcode.line2}, ${postcode.line3}, ${postcode.town}, ${postcode.country}, ${postcode.postcode}`
    });
    return {addressList};
}