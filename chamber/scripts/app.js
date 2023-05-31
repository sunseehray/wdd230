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

// lazy loading

const images = document.querySelectorAll("img[data-srcset]");

function preloadImage (img) {
    const srcset = img.getAttribute("data-srcset");
    if (!srcset) {
        return;
    }

    img.srcset = srcset;
    img.removeAttribute("data-srcset");
}

const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            imgObserver.unobserve(item.target);
        }
    })
})

images.forEach(image => {
    imgObserver.observe(image);
})

// number of visits

const visitsDisplay = document.querySelector("#num-visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits != 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🎉 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

