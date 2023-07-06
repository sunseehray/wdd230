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

                calculateNutrition(fruit1, fruit2, fruit3, data);

                const carb1 = sessionStorage.getItem("carb-1");
                const carb2 = sessionStorage.getItem("carb-2");
                const carb3 = sessionStorage.getItem("carb-3");

                const carbohydrates = Number(carb1) + Number(carb2) + Number(carb3);

                const prot1 = sessionStorage.getItem("prot-1");
            
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

function calculateNutrition (fruitName1, fruitName2, fruitName3, data) {
    data.forEach(element => {
        if(element.name === fruitName1) {
            sessionStorage.setItem("carb-1",element.nutritions.carbohydrates);
            sessionStorage.setItem("prot-1",element.nutritions.protein);
            sessionStorage.setItem("fat-1",element.nutritions.fat);
            sessionStorage.setItem("sug-1",element.nutritions.sugar);
            sessionStorage.setItem("cal-1",element.nutritions.calories);
        }
        
        if (element.name === fruitName2) {
            sessionStorage.setItem("carb-2",element.nutritions.carbohydrates);
            sessionStorage.setItem("prot-2",element.nutritions.protein);
            sessionStorage.setItem("fat-2",element.nutritions.fat);
            sessionStorage.setItem("sug-2",element.nutritions.sugar);
            sessionStorage.setItem("cal-2",element.nutritions.calories);
        } 
        
        if (element.name === fruitName3) {
            sessionStorage.setItem("carb-3",element.nutritions.carbohydrates);
            sessionStorage.setItem("prot-3",element.nutritions.protein);
            sessionStorage.setItem("fat-3",element.nutritions.fat);
            sessionStorage.setItem("sug-3",element.nutritions.sugar);
            sessionStorage.setItem("cal-3",element.nutritions.calories);
        }
    })
}