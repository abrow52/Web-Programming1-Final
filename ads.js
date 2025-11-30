function hideAd() {
    const ad1 = document.getElementById("fake-ad1");
    if (ad1) ad1.style.display = "none";

    const ad2 = document.getElementById("fake-ad2");
    if (ad2) ad2.style.display = "none";

    const ad3 = document.getElementById("fake-ad3");
    if (ad3) ad3.style.display = "none";
}


function countWords() {
    const button = document.querySelector(".word-counter");

    // button.disabled = true;
    const pageText = document.body.innerText.replace(button.innerText, "");

    const words = pageText.split(/\s+/).filter(Boolean);
    const total = words.length;

    button.textContent = `Total Words: ${total}`;
}
