
const url = "https://forverkliga.se/JavaScript/api/jsonStore.php"
const key = "StarkasteVitlöken"




async function saveMenu(menuItems) {

	const stringifiedMenu = JSON.stringify(menuItems)


	try {
		const response = await fetch(`${url}?method=save`, {
			method : "POST",
			headers : {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body : JSON.stringify({
				key: key,
				value: stringifiedMenu
			})
		})
		console.log(response.status)
	} catch(error){
		console.error("fel vid api " + error)
	}
};

async function loadMenu() {
    try {
        const response = await fetch(`${url}?method=load&key=${key}`, {
            method: "GET"
        });
        const data = await response.json();
        const parsedData = JSON.parse(data);
        console.log(parsedData);
        return parsedData; // Return the parsed data
    } catch (error) {
        console.error("fel vid laddning av meny " + error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}

export {loadMenu, saveMenu}