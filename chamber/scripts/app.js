document.querySelector('#footerYear').innerHTML = new Date().getFullYear();
document.querySelector('#dateLastUpdated').innerHTML = document.lastModified;

document.querySelector('#time').textContent = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(new Date());


function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("open");
    document.querySelector(".hamburger").classList.toggle("open");
}

const x = document.querySelector(".hamburger");
x.onclick = toggleMenu;

document.querySelectorAll(".nav-link").onclick = toggleMenu;

// Display banner when it is a Monday or Tuesday
const today = new Date().getDay();

if (today === 1 || today === 2) {
    document.querySelector('.banner').style.display = "block";
}

document.querySelector('.closeButton').addEventListener('click', () => {
    document.querySelector('.banner').style.display = "none";
})