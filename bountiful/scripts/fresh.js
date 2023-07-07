const fruitData = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

async function fruitFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            createOption(data);

            const form = document.querySelector('form');
            const orderOutput = document.querySelector('.order-output');

            let numOrders = localStorage.getItem("num-orders") || 0;

            form.addEventListener('submit', function(event) {
                event.preventDefault();
            
                const firstName = document.querySelector('#fname').value;
                const email = document.querySelector('#email').value;
                const phone = document.querySelector('#phone').value;
                const fruit1 = document.querySelector('#option1').value;
                const fruit2 = document.querySelector('#option2').value;
                const fruit3 = document.querySelector('#option3').value;
                const instructions = document.querySelector('textarea').value;

                const orderDate = new Date().toDateString();

                calculateNutrition(fruit1, fruit2, fruit3, data);

                const carb1 = sessionStorage.getItem("carb-1");
                const carb2 = sessionStorage.getItem("carb-2");
                const carb3 = sessionStorage.getItem("carb-3");

                const carbohydrates = Number(carb1) + Number(carb2) + Number(carb3);

                const prot1 = sessionStorage.getItem("prot-1");
                const prot2 = sessionStorage.getItem("prot-2");
                const prot3 = sessionStorage.getItem("prot-3");

                const protein = Number(prot1) + Number(prot2) + Number(prot3);

                const fat1 = sessionStorage.getItem("fat-1");
                const fat2 = sessionStorage.getItem("fat-2");
                const fat3 = sessionStorage.getItem("fat-3");
            
                const fat = Number(fat1) + Number(fat2) + Number(fat3);

                const sug1 = sessionStorage.getItem("sug-1");
                const sug2 = sessionStorage.getItem("sug-2");
                const sug3 = sessionStorage.getItem("sug-3");

                const sugar = Number(sug1) + Number(sug2) + Number(sug3);

                const cal1 = sessionStorage.getItem("cal-1");
                const cal2 = sessionStorage.getItem("cal-2");
                const cal3 = sessionStorage.getItem("cal-3");

                const calories = Number(cal1) + Number(cal2) + Number(cal3);

                const output = `
                    <p><strong>ORDER DETAILS</strong></p>
                    <p><strong>Order Date:</strong> ${orderDate}</p>
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
                    <li>Carbohydrates: ${carbohydrates.toFixed(1)}</li>
                    <li>Protein: ${protein.toFixed(1)}</li>
                    <li>Fat: ${fat.toFixed(1)}</li>
                    <li>Sugar: ${sugar.toFixed(1)}</li>
                    <li>Calories: ${calories.toFixed(1)}</li>
                    </ul>
                `;
            
                orderOutput.innerHTML = output;
                numOrders++;

                localStorage.setItem("num-orders", numOrders);
                
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

        // adjust this code because there's an error when there are similar fruits
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