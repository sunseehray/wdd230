document.querySelector('#copyrightYear').innerHTML = new Date().getFullYear();
document.querySelector('.lastModified').innerHTML = `Last modified: ${document.lastModified}`;

function toggleMenu () {
    document.querySelector('.hamburger').classList.toggle("open");
    document.querySelector('.nav-menu').classList.toggle("open");
}

document.querySelector('.hamburger').addEventListener("click", toggleMenu);

let numOrders = localStorage.getItem("num-orders") || 0;
localStorage.setItem("num-orders", numOrders);

let numberOfOrders = document.querySelector('#orderNumber');

function updateOrderNumber (numberOfOrders, numOrders) {
    if (!numberOfOrders) {
        return;
    } else {
        numberOfOrders.textContent = numOrders;
    }
}

updateOrderNumber(numberOfOrders, numOrders);