// copyright year
let d = new Date();
let year = d.getFullYear();
document.querySelector('#footerYear').innerHTML = year;

// Last Update
const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
};
document.querySelector('#dateLastUpdated').innerHTML = `Last Updated: ${new Date(document.lastModified).toLocaleDateString("en-US", options)}`;