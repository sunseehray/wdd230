const fruitData = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json;
            console.log(data);
        } else {
            throw Error(await response.text());
        }  
    } catch (error) {
        console.log(error)
    }

}