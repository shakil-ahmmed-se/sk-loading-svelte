export async function GET(){
    const res = await fetch('http://localhost:4000/postcodes')
    const postcodes = await res.json();
    const appPostCodes = postcodes.map(postcode => {
        return {
            buildingName: postcode.building_name,
            line1: postcode.line_1,
            line2: postcode.line_2,
            line3: postcode.line_3,
            town: postcode.town,
            country: postcode.country,
            postcode: postcode.postcode
        }
    });
    return new Response(JSON.stringify(appPostCodes),{
        headers: {
            'Content-Type': 'application/json',
        }
    })
}