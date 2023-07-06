const fruitData = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function fruitFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            createOption(data);

            const form = document.querySelector('form');
            const orderOutput = document.querySelector('.order-output');


            form.addEventListener('submit', function(event) {
                event.preventDefault();
            
                const firstName = document.querySelector('#fname').value;
                const email = document.querySelector('#email').value;
                const phone = document.querySelector('#phone').value;
                const fruit1 = document.querySelector('#option1').value;
                const fruit2 = document.querySelector('#option2').value;
                const fruit3 = document.querySelector('#option3').value;
                const instructions = document.querySelector('textarea').value;
            
                const output = `
                    <p><strong>Order Details:</strong></p>
                    <p><strong>Name:</strong> ${firstName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Selected Fruits:</strong><p>
                    <ul>
                    <li>${fruit1}</li>
                    <li>${fruit2}</li>
                    <li>${fruit3}</li>
                    </ul>
                    <p><strong>Special Instructions:</strong> ${instructions}</p>
                    <p><strong>Total Nutritional Information:</strong><p>
                    <ul>
                    <li>Carbohydrates: ${carbohydrates}</li>
                    <li>Protein: </li>
                    <li>Fat: </li>
                    <li>Sugar: </li>
                    <li>Calories: </li>
                    </ul>
                `;
            
                orderOutput.innerHTML = output;
            })
            
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

    // save nutrition in localStorage

}

fruitFetch(fruitData);

function calculateCarbs (fruit, data) {
    data.forEach(element => {
        if (element.name === fruit) {
            return element.nutritions.carbohydrates;
        }
    })
}