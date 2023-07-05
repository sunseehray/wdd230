const fruitData = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function fruitFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data);
        } else {
            throw Error(await response.text());
        }  
    } catch (error) {
        console.log(error)
    }
}


fruitFetch(fruitData);