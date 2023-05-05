document.querySelector('#footerYear').innerHTML = new Date().getFullYear();
document.querySelector('#dateLastUpdated').innerHTML = document.lastModified;

document.querySelector('time').textContent = new Intl.DateTimeFormat("en-US", { dateStyle: "full"}).format(new Date());


function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;