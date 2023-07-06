const fruitData = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function fruitFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data);
            createOption(data);
        } else {
            throw Error(await response.text());
        }  
    } catch (error) {
        console.log(error)
    }
}


function createOption(data) {
    const option1 = document.querySelector('select#option1');
    const option2 = document.querySelector('select#option2');
    const option3 = document.querySelector('select#option3');

    const fruits = data;

    function addOption (element) {
        fruits.forEach(fruit => {
            let option = document.createElement('option');
            option.setAttribute("value",fruit.name);
            option.textContent = `${fruit.name}`;
    
            element.appendChild(option);
            // console.log(fruit);
        });            
    }

    addOption(option1);
    addOption(option2);
    addOption(option3);
}

fruitFetch(fruitData);
