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
const banner = document.querySelector('.banner');

function DisplayBanner (banner) {
    if (today === 1 || today === 2) {
        banner.style.display = "block";
    }
    
    document.querySelector('.closeButton').addEventListener('click', () => {
        banner.style.display = "none";
    }) 
}

if (banner != null) {
    DisplayBanner(banner);
}


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

// number of visits for Discovery Page only

const visitsDisplay = document.querySelector("#num-visits");
let dateToday = new Date();

let numVisits = localStorage.getItem("numVisits") || 0;

const msToDays = 86400000;

let lastVisit = (localStorage.getItem("lastVisit")) || dateToday;
let lastVisitToDate = new Date(lastVisit);
let daysBetweenVisit = (dateToday.getTime() - lastVisitToDate.getTime()) / msToDays;

function displayNumVisits (visitsDisplay, numVisits) {
    if (!visitsDisplay) {
        return;
    } else {
        if (numVisits != 0) {
            visitsDisplay.innerHTML = `${numVisits} | Days since last visit: ${daysBetweenVisit.toFixed(0)}`;
        } else {
            visitsDisplay.textContent = `This is your first visit. 🎉 Welcome!`;
        }
        numVisits++;

        localStorage.setItem("lastVisit", dateToday);
        localStorage.setItem("numVisits", numVisits);
    }
}

displayNumVisits(visitsDisplay, numVisits);



