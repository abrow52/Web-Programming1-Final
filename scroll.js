let scrolling = null;

document.addEventListener("click", () => {
    if (scrolling) {
        clearInterval(scrolling);
        scrolling = null;
    } else {
        scrolling = setInterval(() => {
            window.scrollBy(0, 3); 
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                clearInterval(scrolling);
                scrolling = null;
            }
        }, 10);
    }
});