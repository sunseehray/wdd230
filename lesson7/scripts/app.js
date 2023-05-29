const images = document.querySelectorAll("img[data-src]");

function preloadImage (img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
    img.removeAttribute("data-src");
};

const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            imgObserver.unobserve(item.target);
        }
    })
});

images.forEach(image => {
    imgObserver.observe(image);
});